'use client'

import Image from "next/image";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Card, CardContent } from "./card";

type MyAccountCardProps = {
  name: string
  email: string
  avatarUrl?: string
  facebookUrl?: string
  githubUrl?: string
  createdDate: string
}

const MyAccountCard = ({
  name,
  email,
  avatarUrl,
  facebookUrl,
  githubUrl,
  createdDate,
}: MyAccountCardProps) => {
  return (
    <Card className="w-full px-[2rem] py-[1rem] h-full">
      <CardContent className="flex gap-6 items-center justify-between">
        {/* Avatar + Name */}
        <div className="flex gap-[2rem] items-center w-2/3">
          <Image
            src={avatarUrl || '/default-avatar.png'}
            alt="Avatar"
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-2xl mb-[0.35rem]">{name}</h2>
            <p className="text-md">
              <span className="text-sky-600 font-medium">{email}</span>{" "}
              <span className="text-gray-500">| Join in: {new Date(createdDate).toLocaleDateString('en-GB')}</span>
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
            {facebookUrl ? (
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {facebookUrl.replace(/^https?:\/\/(www\.)?/, '')}
              </a>
            ) : (
              <span className="text-gray-400">Not set</span>
            )}
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-2">
            <FaGithub className="w-5 h-5 text-gray-800" />
            {githubUrl ? (
              <a
                href={githubUrl}
                rel="noopener noreferrer"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                {githubUrl.replace(/^https?:\/\/(www\.)?/, '')}
              </a>
            ) : (
              <span className="text-gray-400">Not set</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default MyAccountCard