"use client";
import AdminSideBar from "@/app/components/admin/AdminSideBar";
import AdminTopCrumb from "@/app/components/admin/AdminTopCrumb";
import React, { SVGProps } from "react";

/* ================== Inline SVG Icons (không import lib ngoài) ================== */
const Icon = {
  Dots: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}><circle cx="5" cy="12" r="2" fill="currentColor"/><circle cx="12" cy="12" r="2" fill="currentColor"/><circle cx="19" cy="12" r="2" fill="currentColor"/></svg>
  ),
  Mail: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.6"/><path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  Phone: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M4 5c0-1.1.9-2 2-2h2l2 5-2 1a12 12 0 0 0 7 7l1-2 5 2v2a2 2 0 0 1-2 2c-9.4 0-17-7.6-17-17Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
  ),
  Calendar: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}><rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M8 2v4M16 2v4M3 9h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
  ),
  CheckCircle: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/><path d="m8.5 12.5 2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  Circle: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/></svg>
  ),
};

/* ================== Trang ================== */
export default function AdminPeopleDetailOneFile() {
  return (
    <div className="min-h-screen bg-[#f6f7fb]">
        <div className="grid grid-cols-[240px_1fr]">
          {/* Sidebar */}
          <AdminSideBar/>

          {/* Main */}
          <main className="bg-white">
            {/* Top crumb + edit */}
            <AdminTopCrumb/>

            {/* Profile header */}
            <div className="px-6 py-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#f97316] text-white flex items-center justify-center text-sm font-semibold">C</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="text-[16px] font-semibold">Charlotee Bell</div>
                    <span className="inline-flex items-center gap-1 text-[12px] px-2 py-0.5 rounded-full bg-[#ecfdf5] text-[#059669] border border-[#bbf7d0]">
                      <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                      Active
                    </span>
                  </div>
                  <div className="text-[12px] text-gray-500 mt-1">
                    Age 6 • Student • Melbourne, Australia
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-[12px] text-gray-600 mt-3">
                    <div className="inline-flex items-center gap-2">
                      <Icon.Calendar className="w-3.5 h-3.5" />
                      Joined Mar 2022
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <Icon.CheckCircle className="w-3.5 h-3.5" />
                      Attended 7 days ago
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 text-[12px] rounded-md bg-gray-100 text-gray-700 border">Karate</span>
                    <span className="px-2 py-1 text-[12px] rounded-md bg-gray-100 text-gray-700 border">Martial Arts</span>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-3">
                    <Chip icon={<Icon.Mail className="w-3.5 h-3.5" />} text="charlotteebell@gmail.com" />
                    <Chip icon={<Icon.Phone className="w-3.5 h-3.5" />} text="+1 0987654321" />
                  </div>
                </div>
              </div>
            </div>

            {/* Programs */}
            <div className="px-6">
              <div className="text-[13px] text-gray-700 font-medium mb-3">Programs</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Active card */}
                <div className="col-span-1 md:col-span-2 rounded-lg border bg-white shadow-sm p-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-[#ecfdf5] text-[#059669] border border-[#bbf7d0]">
                      <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                      Active
                    </span>
                    <button className="p-1.5 rounded-lg hover:bg-gray-50">
                      <Icon.Dots className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                  <div className="mt-2 font-medium text-[14px]">Little Tigers Karate</div>
                  <div className="mt-1 text-[12px] text-[#6b7280]">
                    <span className="text-[#7c3aed] font-medium">Upcoming:</span> Monday, 4:00 PM - 5:00 PM
                  </div>
                </div>

                {/* Cancelled card */}
                <div className="rounded-lg border bg-white shadow-sm p-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 border">
                      <span className="w-2 h-2 rounded-full bg-gray-400" />
                      Cancelled
                    </span>
                    <button className="p-1.5 rounded-lg hover:bg-gray-50">
                      <Icon.Dots className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                  <div className="mt-2 font-medium text-[14px]">Swimming Dolphin</div>
                  <div className="mt-1 text-[12px] text-[#6b7280]">
                    <span className="text-[#7c3aed] font-medium">Upcoming:</span> Monday, 4:00 PM - 5:00 PM
                  </div>
                </div>

                {/* Placeholder 3rd card (mờ giống ảnh) */}
                <div className="hidden md:block rounded-lg border bg-gray-50/60 p-4" />
              </div>
            </div>

            {/* Tabs */}
            <div className="px-6 mt-6">
              <div className="flex items-center gap-6 text-[13px] text-gray-600">
                <Tab active>Activity</Tab>
                <Tab>Payments</Tab>
                <Tab>Attendance History</Tab>
                <Tab>Documents</Tab>
                <Tab>Family (4)</Tab>
              </div>
              <div className="h-[2px] bg-gray-200 mt-2 relative">
                <div className="absolute left-0 top-0 h-[2px] w-16 bg-[#7c3aed]" />
              </div>
            </div>

            {/* Timeline */}
            <div className="px-6 pt-4 pb-10">
              <ul className="relative pl-6">
                {/* vertical line */}
                <div className="absolute left-[10px] top-2 bottom-2 w-[2px] bg-gray-200" />
                <TimelineItem
                  icon="check"
                  time="9:00 AM, Apr 8 2022"
                  text={<><b>Checked in</b> to Little Tigers Karate class</>}
                  color="green"
                />
                <TimelineItem
                  icon="check"
                  time="4:50 PM, Mar 30 2022"
                  text={<><b>Payment of $99.00</b> made towards <b>Little Tigers Karate</b> program by <b>Andrew Coleman</b></>}
                  color="green"
                />
                <TimelineItem
                  icon="circle"
                  time="10:33 AM, Mar 25 2022"
                  text={<>Email sent about new updated <b>Pricing</b> for <b>Swimming Dolphin</b></>}
                  color="gray"
                />
                <TimelineItem
                  icon="circle"
                  time="11:00 AM, Mar 23 2022"
                  text={<><b>Checked In</b> to <b>Swimming Dolphin</b> class</>}
                  color="gray"
                />
              </ul>
            </div>
          </main>
        </div>
    </div>
  );
}

function Chip({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 text-[12px] px-2.5 py-1.5 rounded-lg border bg-white shadow-[0_1px_0_rgba(0,0,0,0.02)]">
      <span className="text-gray-500">{icon}</span>
      <span className="text-gray-700">{text}</span>
    </div>
  );
}

function Tab({ children, active = false }: { children: React.ReactNode; active?: boolean }) {
  return (
    <button className={`pb-2 ${active ? "text-[#7c3aed] font-medium" : "text-gray-600 hover:text-gray-800"}`}>{children}</button>
  );
}

function TimelineItem({
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
