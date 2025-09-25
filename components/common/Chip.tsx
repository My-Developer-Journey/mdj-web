"use client";
import React from "react";

export default function Chip({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 text-[12px] px-2.5 py-1.5 rounded-lg border bg-white shadow-[0_1px_0_rgba(0,0,0,0.02)]">
      <span className="text-gray-500">{icon}</span>
      <span className="text-gray-700">{text}</span>
    </div>
  );
}
