"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Menu,
  X,
  MoveRight,
  Eye,
  VolumeX,
  Volume2,
  Pause,
  Play,
} from "lucide-react";
import { MotionConfig } from "framer-motion";
const links = [
  ["Concepts", "/concepts"],
  ["Case studies", "/case-studies"],
  ["The laboratory", "/laboratory"],
  ["Writer’s workshop", "/workshop"],
];
export function Shell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [motion, setMotion] = useState(true);
  const [sound, setSound] = useState(false);
  useEffect(() => {
    setMotion(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.motion = motion ? "on" : "off";
  }, [motion]);
  useEffect(() => {
    setOpen(false);
  }, [path]);
  return (
    <MotionConfig reducedMotion={motion ? "user" : "always"}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <Link
          href="/"
          className="wordmark"
          aria-label="The Anatomy of Fear home"
        >
          <Eye size={28} strokeWidth={1} />
          <span>
            THE ANATOMY
            <span className="wordmark-bottom">
              OF FEAR<span className="mark-dot">.</span>
            </span>
          </span>
        </Link>
        <nav
          aria-label="Main navigation"
          className={open ? "nav-links is-open" : "nav-links"}
        >
          {links.map(([label, url]) => (
            <Link
              key={url}
              href={url}
              className={path.startsWith(url) ? "active" : ""}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/about" className="header-about">
          About the archive <ArrowUpRight size={13} />
        </Link>
        <button
          className="menu-button icon-button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>
      <div className="utility-bar">
        <span>
          <i className="status-dot" /> AN INDEPENDENT EXPLORATION OF HORROR
          PSYCHOLOGY
        </span>
        <div>
          <button aria-pressed={sound} onClick={() => setSound(!sound)}>
            {sound ? <Volume2 size={12} /> : <VolumeX size={12} />} SOUND{" "}
            {sound ? "ON" : "OFF"}
          </button>
          <button aria-pressed={!motion} onClick={() => setMotion(!motion)}>
            {motion ? <Pause size={11} /> : <Play size={11} />} MOTION{" "}
            {motion ? "ON" : "OFF"}
          </button>
        </div>
      </div>
      <main id="main">{children}</main>
      <footer>
        <div className="footer-main">
          <Link href="/" className="footer-title">
            The Anatomy of Fear<span>.</span>
          </Link>
          <p>
            Understand what scares us.
            <br />
            Learn how to create it.
          </p>
          <Link href="/about">
            Purpose, method & sources <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="footer-meta">
          <span>A FIELD GUIDE TO THE THINGS WE FEEL.</span>
          <span>ORIGINAL ILLUSTRATIONS · NO FILM FOOTAGE</span>
          <span>© {new Date().getFullYear()} THE ANATOMY OF FEAR</span>
        </div>
      </footer>
      <SoundContextBridge enabled={sound} />
    </MotionConfig>
  );
}
function SoundContextBridge({ enabled }: { enabled: boolean }) {
  useEffect(() => {
    document.documentElement.dataset.sound = enabled ? "on" : "off";
    window.dispatchEvent(new CustomEvent("fear-sound", { detail: enabled }));
  }, [enabled]);
  return null;
}
export function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`text-link ${className}`}>
      {children}
      <MoveRight size={17} />
    </Link>
  );
}
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow">
      <span className="tiny-cross">+</span>
      {children}
    </div>
  );
}
