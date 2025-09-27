'use client'

import { ChevronLeft } from "lucide-react"

export default function AdminHeader() {
  return (
    <div className="px-6 py-4 flex items-center justify-between shadow-[0_2px_4px_rgba(0,0,0,0.1)] box z-20">
      <div className="flex items-center gap-2 text-[13px] text-gray-500">
        <button className="p-1.5 rounded-lg hover:bg-gray-100">
          <ChevronLeft className="w-4 h-4 text-gray-700" />
        </button>
        <span className="text-sm">Home</span>
      </div>
      <button className="px-2 py-1.5 text-[12px] rounded-lg border border-gray-300 hover:bg-gray-50">？</button>
    </div>
  )
}
