"use client";
import React from "react";
import Icon from "@/app/components/common/icon";

export default function TimelineItem({
  icon,
  time,
  text,
  color,
}: {
  icon: "check" | "circle";
  time: string;
  text: React.ReactNode;
  color: "green" | "gray";
}) {
  const IconCmp = icon === "check" ? Icon.CheckCircle : Icon.Circle;
  const colorClass = color === "green" ? "text-[#10b981]" : "text-gray-400";
  return (
    <li className="relative flex gap-3 py-3">
      <div className={`absolute -left-[2px] top-[14px] w-[10px] h-[10px] rounded-full ${color === "green" ? "bg-[#10b981]" : "bg-gray-300"}`} />
      <IconCmp className={`w-5 h-5 ${colorClass}`} />
      <div className="space-y-1">
        <div className="text-[12px] text-gray-500">{time}</div>
        <div className="text-[13px] text-gray-800">{text}</div>
      </div>
    </li>
  );
}
