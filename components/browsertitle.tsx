"use client";
import { useEffect } from "react";

export default function DynamicTitle({ title }: { title: string }) {
  useEffect(() => {
    document.title = title;
  }, [title]); // Runs every time "title" changes

  return null;
}
