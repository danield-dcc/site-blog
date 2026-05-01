import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

type AvatarSize = "xs" | "sm";

interface AvatarImageProps extends Omit<ImageProps, "height" | "width"> {
  size?: AvatarSize;
}

const avatarSize = {
  xs: "h-5 w-5",
  sm: "h-9 w-9",
};

export function AvatarImage({
  src,
  alt,
  size = "xs",
  ...props
}: AvatarImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full border-blue-200 border",
        avatarSize[size],
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        {...props}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
      />
    </div>
  );
}
