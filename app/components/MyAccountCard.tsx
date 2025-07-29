'use client'

import Image from "next/image";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Card, CardContent } from "./card";
import { UserProfileCard } from "../types/UserProfileCard";

const MyAccountCard = ({
  name,
  role,
  department,
  staffId,
  staffAccount,
  phone,
  email,
  avatarUrl,
  facebookUrl,
  githubUrl,
  joinDate,
}: UserProfileCard) => {
  return (
    <Card className="w-full px-[2rem] py-[1rem] h-full">
      <CardContent className="flex gap-6 items-center justify-between">
        {/* Avatar + Name */}
        <div className="flex gap-[2rem] items-center w-2/3">
          <Image
            src={avatarUrl}
            alt="Avatar"
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-2xl mb-[0.35rem]">{name}</h2>
            <p className="text-md text-gray-600">{role} - {department}</p>
            <p className="text-md">
              <span className="text-sky-600 font-medium">{email}</span>{" "}
              <span className="text-gray-500">| Join in: {joinDate ?? "Unknown"}</span>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px h-[80px] bg-gray-400 opacity-50 mx-4" />

        {/* Social Info */}
        <div className="flex flex-col gap-4 text-sm w-1/3">
          {/* Facebook */}
          {facebookUrl && (
            <div className="flex items-center gap-2">
              <FaFacebook className="w-5 h-5 text-blue-600" />
              <a
                href={facebookUrl || 'https://facebook.com/yourusername'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {facebookUrl.replace(/^https?:\/\/(www\.)?/, '')}
              </a>
            </div>
          )}

          {/* GitHub */}
          {githubUrl && (
            <div className="flex items-center gap-2">
              <FaGithub className="w-5 h-5 text-gray-800" />
              <a
                href={githubUrl || 'https://www.github.com/yourusername'}
                rel="noopener noreferrer"
                className="text-gray-800 hover:underline"
              >
                {(githubUrl || 'https://www.github.com/yourusername').replace(/^https?:\/\/(www\.)?/, '')}
              </a>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default MyAccountCard