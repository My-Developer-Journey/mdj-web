'use client'

import { ChevronLeft } from "lucide-react"

export default function AdminHeader() {
  return (
    <div className="px-6 py-4 flex items-center justify-between border-b">
      <div className="flex items-center gap-2 text-[13px] text-gray-500">
        <button className="p-1.5 rounded-lg hover:bg-gray-100">
          <ChevronLeft className="w-4 h-4 text-gray-700" />
        </button>
        <span>Charlotee Bell</span>
      </div>
      <button className="px-2 py-1.5 text-[12px] rounded-lg border hover:bg-gray-50">✎</button>
    </div>
  )
}
