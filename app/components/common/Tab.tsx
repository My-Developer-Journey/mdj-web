"use client";
import React from "react";

export default function Tab({ children, active = false }: { children: React.ReactNode; active?: boolean }) {
  return (
    <button className={`pb-2 ${active ? "text-[#7c3aed] font-medium" : "text-gray-600 hover:text-gray-800"}`}>{children}</button>
  );
}
