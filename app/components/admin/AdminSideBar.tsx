'use client'

import React from "react"
import {
  Home,
  Calendar,
  Users,
  File,
  Coins,
  MessageSquare,
  Bell,
  Search,
  Settings,
} from "lucide-react"

// Component Section
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <div className="uppercase text-xs font-semibold text-gray-400 mb-2">{title}</div>
    <div className="space-y-1">{children}</div>
  </div>
)

// Component Item
const Item = ({
  icon,
  label,
  active,
  highlight,
  badge,
}: {
  icon?: React.ReactNode
  label: string
  active?: boolean
  highlight?: boolean
  badge?: string
}) => (
  <div
    className={`flex items-center justify-between px-2 py-2 rounded-md cursor-pointer 
      ${active ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"}`}
  >
    <div className="flex items-center gap-2">
      {icon}
      <span>{label}</span>
      {highlight && <span className="ml-2 text-xs text-red-500 font-bold">★</span>}
    </div>
    {badge && (
      <span className="text-xs bg-red-500 text-white rounded-full px-2 py-0.5">
        {badge}
      </span>
    )}
  </div>
)

const AdminSideBar = () => {
  return (
    <aside className="border-r-17 bg-gray-100 border-gray-500 w-64 p-4">
      {/* Profile */}
      <div className="flex items-center gap-3 bg-[var(--primary-white)] p-2 rounded-lg mb-4">
        <div className="w-9 h-9 rounded-full bg-[#ef4444] text-white flex items-center justify-center text-sm font-semibold">
          E
        </div>
        <div className="leading-tight">
          <div className="text-[13px] font-medium">Elijah Scott</div>
          <div className="text-[12px] text-gray-500">scott@hey.com</div>
        </div>
      </div>

      {/* Menu */}
      <div className="px-4 space-y-6 pb-6">
        <Section title="Manage">
          <Item icon={<Home className="w-4 h-4" />} label="Home" />
          <Item icon={<Calendar className="w-4 h-4" />} label="Programs" />
          <Item icon={<Calendar className="w-4 h-4" />} label="Events" />
          <Item icon={<Users className="w-4 h-4" />} label="Memberships" />
          <Item icon={<File className="w-4 h-4" />} label="Documents" />
        </Section>

        <Section title="Members">
          <Item icon={<Coins className="w-4 h-4" />} label="Payments" />
        </Section>

        <Section title="Engage">
          <Item active icon={<Users className="w-4 h-4" />} label="People" highlight />
          <Item icon={<MessageSquare className="w-4 h-4" />} label="Communication" />
        </Section>

        <Section title="More">
          <Item icon={<Bell className="w-4 h-4" />} label="Notifications" badge="2" />
          <Item icon={<Search className="w-4 h-4" />} label="Search" />
        </Section>
      </div>

      {/* Footer */}
      <div className="mt-6 px-4 py-4 border-t">
        <Item icon={<Settings className="w-4 h-4" />} label="Settings" />
      </div>
    </aside>
  )
}

export default AdminSideBar
