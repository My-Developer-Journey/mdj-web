'use client'

import AdminTable from "@/components/common/AdminTable";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
}

const users: User[] = [
  { id: 1, name: "Rakesh Kumar", email: "kumar.kl@gmail.com", role: "Admin", status: "active" },
  { id: 2, name: "Priya Gosh", email: "gosh.suman09@gmail.com", role: "Editor", status: "inactive" },
  { id: 3, name: "Shivam Das", email: "daskrish12@gmail.com", role: "Viewer", status: "active" },
  { id: 4, name: "Nguyen Van A", email: "vana@gmail.com", role: "Admin", status: "active" },
  { id: 5, name: "Tran Thi B", email: "thib@gmail.com", role: "Editor", status: "inactive" },
  { id: 6, name: "Le Van C", email: "levanc@gmail.com", role: "Viewer", status: "active" },
  { id: 7, name: "Pham D", email: "phamd@gmail.com", role: "Viewer", status: "active" },
  { id: 8, name: "Hoang E", email: "hoange@gmail.com", role: "Editor", status: "inactive" },
  { id: 9, name: "Vo F", email: "vof@gmail.com", role: "Admin", status: "active" },
  { id: 10, name: "Do G", email: "dog@gmail.com", role: "Viewer", status: "active" },
  { id: 11, name: "Nguyen H", email: "nguyenh@gmail.com", role: "Editor", status: "active" },
];

const userColumns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "role", label: "Role" },
  {
    key: "status",
    label: "Status",
    render: (row: User) => (
      <span
        className={`px-2 py-1 text-xs rounded ${row.status === "active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
      >
        {row.status}
      </span>
    ),
  },
];

export default function EditUserPage() {
  return (
    <div className="px-6 py-4">
      <h1 className="font-bold text-2xl">User Management</h1>
      <AdminTable data={users} columns={userColumns} batchSize={10} />
    </div>
  );
}