// components/SpotifyEmbed.tsx
'use client';

type Props = {
  url: string;         // 直接贴 Spotify 链接：track/album/playlist/episode 都行
  theme?: 'light'|'dark';
  rounded?: string;    // Tailwind 圆角，如 "rounded-2xl"
  height?: number;     // 高度：track/episode 152，playlist/album 352/480
};

export default function SpotifyEmbed({
  url,
  theme = 'light',
  rounded = 'rounded-2xl',
  height = 152,
}: Props) {
  const themeNum = theme === 'dark' ? 0 : 1; // 0=dark, 1=light（Spotify 的反直觉设定）
  const src = `https://open.spotify.com/embed/${new URL(url).pathname.slice(1)}?utm_source=generator&theme=${themeNum}`;
  return (
    <div className={`overflow-hidden ${rounded} ring-1 ring-slate-200 shadow-sm`}>
      <iframe
        title="Spotify player"
        src={src}
        width="100%"
        height={height}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}
