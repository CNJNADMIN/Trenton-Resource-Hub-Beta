"use client";

import ReactPlayer from "react-player";

interface VideoPlayerProps {
  videoUrl: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
}

export default function VideoPlayer({
  videoUrl,
  autoplay = false,
  loop = false,
  muted = false,
  controls = true,
  className = "",
}: VideoPlayerProps) {
  return (
    <div className={className}>
      <ReactPlayer
        url={videoUrl}
        playing={autoplay}
        loop={loop}
        muted={muted}
        controls={controls}
        width="100%"
        height="100%"
      />
    </div>
  );
}
