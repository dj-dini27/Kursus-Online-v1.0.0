import type { ReactNode } from "react";

type ContainerSize = "default" | "narrow" | "sm";

const sizeMap: Record<ContainerSize, string> = {
  default: "max-w-7xl",
  narrow: "max-w-3xl",
  sm: "max-w-md",
};

interface ContainerProps {
  children: ReactNode;
  size?: ContainerSize;
  className?: string;
}

/**
 * Batas lebar + padding horizontal yang konsisten untuk seluruh halaman.
 * Menggantikan pola berulang: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8".
 */
export function Container({
  children,
  size = "default",
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${sizeMap[size]} ${className}`}
    >
      {children}
    </div>
  );
}
