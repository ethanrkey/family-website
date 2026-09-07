import Image from "next/image";

interface PortraitProps {
  src: string;
  alt: string;
  /** md ≈ 10rem, lg ≈ 15rem at md+, xl ≈ 18rem at md+ */
  size?: "md" | "lg" | "xl";
  /** Prioritize loading (hero images above the fold) */
  priority?: boolean;
  className?: string;
}

const sizes = {
  md: { cls: "h-portrait w-portrait", attr: "10rem" },
  lg: { cls: "h-portrait w-portrait md:h-portrait-lg md:w-portrait-lg", attr: "(min-width: 768px) 15rem, 10rem" },
  xl: { cls: "h-portrait-lg w-portrait-lg md:h-portrait-xl md:w-portrait-xl", attr: "(min-width: 768px) 18rem, 15rem" },
};

/** Circular portrait with a themed ring. */
export default function Portrait({ src, alt, size = "lg", priority = false, className = "" }: PortraitProps) {
  const s = sizes[size];
  return (
    <div className={`relative shrink-0 overflow-hidden rounded-full ring-4 ring-rule ${s.cls} ${className}`}>
      <Image src={src} alt={alt} fill sizes={s.attr} priority={priority} className="object-cover" />
    </div>
  );
}
