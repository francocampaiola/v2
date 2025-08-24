import React from "react";
import Image from "next/image";

const OptimizedImage = ({
  src,
  alt,
  width = 600,
  height = 240,
  className = "",
  priority = false,
  ...props
}) => {
  return (
    <Image
      src={src.startsWith("/") ? src : `/${src}`}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      {...props}
    />
  );
};

export default OptimizedImage;
