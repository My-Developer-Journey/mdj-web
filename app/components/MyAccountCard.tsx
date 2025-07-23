'use client'

import Image from "next/image";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Card, CardContent } from "./card";

type MyAccountCardProps = {
  name: string
  role: string
  department: string
  staffId: string
  staffAccount: string
  phone: string
  email: string
  avatarUrl: string
}

const MyAccountCard = ({
  name,
  avatarUrl,
}: MyAccountCardProps) => {
  return (
    <Card className="w-full px-[2rem] py-[1rem] h-full">
      <CardContent className="flex gap-6 items-center justify-between">
        {/* Avatar + Name */}
        <div className="flex gap-[3rem] items-center w-2/3">
          <Image
            src={avatarUrl}
            alt="Avatar"
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-2xl mb-[0.35rem]">{name}</h2>
            <p className="text-md">
              <span className="text-sky-600 font-medium">quydiem2015@gmail.com</span>{" "}
              <span className="text-gray-500">| Join in: 23/07/2025</span>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px h-[80px] bg-gray-400 opacity-50 mx-4" />

        {/* Social Info */}
        <div className="flex flex-col gap-4 text-sm w-1/3">
          {/* Facebook */}
          <div className="flex items-center gap-2">
            <FaFacebook className="w-5 h-5 text-blue-600" />
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              facebook.com/yourusername
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-2">
            <FaGithub className="w-5 h-5 text-gray-800" />
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:underline"
            >
              github.com/yourusername
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default MyAccountCard