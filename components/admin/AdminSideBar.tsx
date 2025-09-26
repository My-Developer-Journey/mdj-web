'use client'

import { useAuth } from "@/providers/AuthContext";
import { useLoading } from "@/providers/LoadingContext";
import { signOut } from "@/services/authentication.service";
import {
  Bell,
  Coins,
  FolderOpenDot,
  Home,
  LogOut,
  MessageSquare,
  Search,
  Settings,
  Users
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from 'react-toastify';

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
  onClick,
}: {
  icon?: React.ReactNode
  label: string
  active?: boolean
  highlight?: boolean
  badge?: string
  onClick?: () => void
}) => (
  <div
    onClick={onClick}
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
  const router = useRouter();
  const { setLoading } = useLoading();
  const { user, isLoading, setUser } = useAuth();

  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await signOut();

      if (res.status !== 200) {
        toast.error(res.message || "Logout failed");
        return;
      }

      setUser(null);
      setTimeout(() => {
        router.push('/');
      }, 2000);

    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
      setTimeout(() => setLoading(false), 2000);
    }
  };

  return (
    <aside className="bg-gray-100 border-gray-500 w-64 p-4">
      <div className="flex items-center gap-3 bg-[var(--primary-white)] p-2 rounded-lg mb-6">
        {isLoading ? (
          // Loading skeleton
          <div className="flex items-center gap-3 animate-pulse">
            <div className="w-9 h-9 rounded-full bg-gray-300" />
            <div className="leading-tight">
              <div className="h-3 w-24 bg-gray-300 rounded mb-1" />
              <div className="h-3 w-32 bg-gray-200 rounded" />
            </div>
          </div>
        ) : (
          <>
            {/* Avatar */}
            <div className="w-9 h-9 rounded-full bg-[#ef4444] text-white flex items-center justify-center text-sm font-semibold">
              {user?.displayName ? user.displayName.charAt(0).toUpperCase() : "?"}
            </div>
            <div className="leading-tight">
              <div className="text-[13px] font-medium">
                {user?.displayName || "Unknown"}
              </div>
              <div className="text-[12px] text-gray-500">
                {user?.email || "unknown@email.com"}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Menu */}
      <div className="px-4 space-y-6 pb-6">
        <Item icon={<Home className="w-4 h-4" />} label="Home" onClick={() => router.push("/admin/home")} />
        <Section title="Manage">
          <Item icon={<Users className="w-4 h-4" />} label="Users" onClick={() => router.push("/admin/manage/users")} />
          <Item icon={<FolderOpenDot className="w-4 h-4" />} label="Blogs" />
          <Item icon={<FolderOpenDot className="w-4 h-4" />} label="Requests" onClick={() => router.push("/admin/manage/requests")} />
        </Section>

        <Section title="Members">
          <Item icon={<Coins className="w-4 h-4" />} label="Payments" />
        </Section>

        <Section title="Engage">
          <Item icon={<Users className="w-4 h-4" />} label="People" highlight />
          <Item icon={<MessageSquare className="w-4 h-4" />} label="Communication" />
        </Section>

        <Section title="More">
          <Item icon={<Bell className="w-4 h-4" />} label="Notifications" badge="+2" />
          <Item icon={<Search className="w-4 h-4" />} label="Search" />
        </Section>
      </div>

      {/* Footer */}
      <div className="mt-6 px-4 py-4 border-t border-gray-300">
        <Item icon={<Settings className="w-4 h-4" />} label="Settings" />
        <Item icon={<LogOut className="w-4 h-4" />} label="Log out" onClick={handleLogout} />
      </div>
    </aside>
  )
}

export default AdminSideBar
