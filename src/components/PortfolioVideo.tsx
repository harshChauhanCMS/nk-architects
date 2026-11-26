"use client";

import { useEffect, useRef } from "react";

export default function PortfolioVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isYouTube = src.startsWith("https://www.youtube.com/embed/");

  useEffect(() => {
    const video = videoRef.current;
    const iframe = iframeRef.current;

    const pause = () => {
      video?.pause();
      iframe?.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
        "https://www.youtube.com",
      );
    };
    // Focusing the embedded player's controls also blurs the parent window.
    const onBlur = () => {
      if (!iframe) pause();
    };
    const onVisibilityChange = () => {
      if (document.hidden) pause();
    };

    // Capture also catches scrolling inside nested scroll containers.
    window.addEventListener("scroll", pause, { capture: true, passive: true });
    window.addEventListener("pagehide", pause);
    window.addEventListener("blur", onBlur);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      pause();
      window.removeEventListener("scroll", pause, true);
      window.removeEventListener("pagehide", pause);
      window.removeEventListener("blur", onBlur);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [src]);

  if (isYouTube) {
    return (
      <iframe
        ref={iframeRef}
        src={`${src}?enablejsapi=1&playsinline=1&rel=0`}
        title="Portfolio project video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className="absolute inset-0 h-full w-full border-0"
      />
    );
  }

  return (
    <video
      ref={videoRef}
      src={src}
      controls
      playsInline
      preload="metadata"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}
