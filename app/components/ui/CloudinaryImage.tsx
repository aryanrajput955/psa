import Image, { ImageProps } from "next/image";

interface CloudinaryImageProps extends Omit<ImageProps, "src"> {
  src: string;
}

export default function CloudinaryImage({
  src,
  alt,
  width,
  height,
  className,
  ...props
}: CloudinaryImageProps) {
  let optimizedSrc = src;

  if (src.includes("res.cloudinary.com") && src.includes("/image/upload")) {
    const parts = src.split("/image/upload");
    if (parts.length === 2) {
      // Avoid inserting duplicate options if they are already in the URL
      if (!parts[1].startsWith("/f_auto") && !parts[1].startsWith("/q_auto")) {
        const targetWidth = width ? Math.round(Number(width) * 3) : null;
        const targetHeight = height ? Math.round(Number(height) * 3) : null;
        const w = targetWidth ? `,w_${targetWidth}` : "";
        const h = targetHeight ? `,h_${targetHeight}` : "";
        optimizedSrc = `${parts[0]}/image/upload/f_auto,q_auto,c_limit${w}${h}${parts[1]}`;
      }
    }
  }

  return (
    <Image
      src={optimizedSrc}
      alt={alt}
      width={width}
      height={height}
      className={`rounded-none ${className?.includes("object-") ? "" : "object-cover"} ${className || ""}`}
      {...props}
    />
  );
}
