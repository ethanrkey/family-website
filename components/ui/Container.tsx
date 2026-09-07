import type { ElementType, ReactNode } from "react";

interface ContainerProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/** Centers content at max-w-content with the page gutter. */
export default function Container({ as: Tag = "div", className = "", children }: ContainerProps) {
  return <Tag className={`mx-auto w-full max-w-content px-gutter lg:px-gutter-lg ${className}`}>{children}</Tag>;
}
