import NextImage from '@/components/NextImage';

export type AvatarProps = {
  src: string | null;
  alt?: string;
  size?: number;
  fallback: JSX.Element;
};

export const Avatar = ({ src, alt, size, fallback }: AvatarProps) => {
  alt = alt ?? '';
  size = size ?? 48;

  if (!src) {
    return fallback;
  }

  return <NextImage src={src} alt={alt} height={size} width={size} className="rounded-full" />;
};
