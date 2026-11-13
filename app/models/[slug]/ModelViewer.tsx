"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Link from "next/link";
import MobileMenu from "../../components/mobile-menu";

export type Layer = { name: string; note?: string; color?: string; parts: string[] };
export type ModelMeta = {
  title: string;
  description?: string;
  model: string;
  public: boolean;
  layers?: Layer[];
  files?: string[];
};

export default function ModelViewer({ slug, meta }: { slug: string; meta: ModelMeta }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodes = useRef<Record<string, THREE.Object3D>>({});
  const [layers, setLayers] = useState<Layer[]>(meta.layers ?? []);
  const [status, setStatus] = useState("Loading model...");
  const base = `/models/${slug}/`;

  useEffect(() => {
    const canvas = canvasRef.current!;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.001, 10);
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    scene.add(new THREE.HemisphereLight(0xffffff, 0x8a8f8c, 1.6));
    const sun = new THREE.DirectionalLight(0xffffff, 1.8);
    sun.position.set(0.3, 0.5, 0.4);
    scene.add(sun);
    nodes.current = {};
    let frame: (() => void) | null = null;
    let moved = false;
    controls.addEventListener("start", () => { moved = true; });

    new GLTFLoader().load(base + meta.model, (gltf) => {
      const meshes: Layer[] = [];
      gltf.scene.traverse((o) => {
        const mesh = o as THREE.Mesh;
        if (!mesh.isMesh) return;
        nodes.current[o.name] = o;
        const mat = mesh.material as THREE.MeshStandardMaterial;
        meshes.push({ name: o.name, color: `#${mat.color?.getHexString() ?? "888888"}`, parts: [o.name] });
      });
      if (!meta.layers?.length) setLayers(meshes);
      scene.add(gltf.scene);
      
      const box = new THREE.Box3().setFromObject(gltf.scene);
      const center = box.getCenter(new THREE.Vector3());
      const r = box.getSize(new THREE.Vector3()).length() / 2 || 1;
      camera.near = r / 100;
      camera.far = r * 50;
      frame = () => {
        // Fit the bounding sphere inside both the vertical and horizontal field of view.
        const vf = (camera.fov * Math.PI) / 180;
        const hf = 2 * Math.atan(Math.tan(vf / 2) * camera.aspect);
        const dist = (r * 1.15) / Math.sin(Math.min(vf, hf) / 2);
        camera.position.copy(center).add(new THREE.Vector3(0.8, 0.6, 1).normalize().multiplyScalar(dist));
        controls.target.copy(center);
        camera.updateProjectionMatrix();
      };
      frame();
      setStatus("");
    }, undefined, () => setStatus("The model couldn't load. Reload the page to try again."));

    const resize = () => {
      const { width, height } = canvas.parentElement!.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
      if (frame && !moved) frame();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);
    resize();
    renderer.setAnimationLoop(() => { controls.update(); renderer.render(scene, camera); });

    return () => {
      renderer.setAnimationLoop(null);
      ro.disconnect();
      controls.dispose();
      renderer.dispose();
    };
  }, [base, meta]);

  const show = (L: Layer, on: boolean) =>
    L.parts.forEach((p) => { if (nodes.current[p]) nodes.current[p].visible = on; });

  return (
    <div className="min-h-screen bg-[#08090b] text-white flex flex-col">
      {/* Navigation */}
      <header className="shrink-0 relative z-50">
        <nav
          aria-label="Main navigation"
          className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#08090b]/85 backdrop-blur-xl"
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              aria-label="Colton Zutavern portfolio home"
              className="rounded font-mono text-sm tracking-wider outline-none transition focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090b]"
            >
              CZ<span className="text-cyan-400">.</span>
            </Link>
            <MobileMenu />
            <div className="hidden items-center gap-8 text-sm text-zinc-400 sm:flex">
              <Link
                href="/#projects"
                className="rounded outline-none transition hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#08090b]"
              >
                Projects
              </Link>
              <Link
                href="/models"
                className="rounded outline-none transition hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#08090b]"
              >
                Models &amp; Circuits
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Layout */}
      <div className="flex-grow pt-[61px] flex flex-col md:flex-row overflow-hidden h-[100dvh] max-h-[100dvh]">
        <aside className="w-full md:w-[350px] shrink-0 border-r border-white/10 bg-[#08090b] flex flex-col overflow-y-auto">
          <div className="p-6 pb-12">
            <Link href="/models" className="inline-block mb-8 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition">&larr; Back to Models &amp; Circuits</Link>
            <h1 className="text-2xl font-bold tracking-tight text-white mb-2">{meta.title}</h1>
            {meta.description && <p className="text-sm text-zinc-400 leading-relaxed mb-8">{meta.description}</p>}
            
            {layers.length > 0 && <h2 className="font-mono text-xs tracking-widest text-cyan-400 mb-4 uppercase">Parts</h2>}
            <div className="flex flex-col gap-3 mb-10">
              {layers.map((L) => (
                <label key={L.name} className="flex gap-3 items-center cursor-pointer group">
                  <input type="checkbox" className="accent-cyan-500 w-4 h-4 cursor-pointer" defaultChecked onChange={(e) => show(L, e.target.checked)} />
                  <span className="shrink-0 w-3 h-3 rounded-full shadow-sm" style={{ background: L.color ?? "#888" }} />
                  <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition">
                    {L.name}
                    {L.note && <span className="block text-xs font-normal text-zinc-500 mt-0.5">{L.note}</span>}
                  </span>
                </label>
              ))}
            </div>

            {!!meta.files?.length && (
              <>
                <h2 className="font-mono text-xs tracking-widest text-cyan-400 mb-4 uppercase">Downloads</h2>
                <ul className="flex flex-col gap-2">
                  {meta.files.map((f) => (
                    <li key={f}>
                      <a href={base + f} download className="flex items-center gap-2 text-sm text-zinc-400 hover:text-cyan-400 transition">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        {f}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </aside>

        <main className="relative flex-grow min-w-0 bg-[#0c1015] order-first md:order-last min-h-[50vh]">
          <canvas ref={canvasRef} className="block w-full h-full touch-none outline-none" />
          {status && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#08090b]/80 backdrop-blur-sm z-10 pointer-events-none">
               <div className="text-sm font-mono text-cyan-400 tracking-widest animate-pulse">{status.toUpperCase()}</div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
