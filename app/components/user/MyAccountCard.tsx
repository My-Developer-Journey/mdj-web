'use client'

import { User } from '@/app/interfaces/user';
import { uploadAvatar } from '@/app/services/user.service';
import Image from "next/image";
import { useRef, useState } from 'react';
import { FaCamera, FaFacebook, FaGithub } from "react-icons/fa";
import { Card, CardContent } from "../common/ProjectCard";

type MyAccountCardProps = Pick<User,
  'displayName' | 'email' | 'facebookUrl' | 'githubUrl' | 'createdDate' | 'avatar'
> & {
  onAvatarUpload?: (file: File) => Promise<void>;
};

const MyAccountCard = ({
  displayName,
  email,
  avatar,
  facebookUrl,
  githubUrl,
  createdDate,
}: MyAccountCardProps) => {
  const [preview, setPreview] = useState<string>(avatar || '/default-avatar.png');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      try {
        await uploadAvatar(file, email);
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <Card className="w-full px-[2rem] py-[1rem] h-full">
      <CardContent className="flex gap-6 items-center justify-between">
        {/* Avatar + Name */}
        <div className="flex gap-[2rem] items-center w-2/3">
          <div className="relative">
            {/* Ảnh đại diện */}
            <Image
              src={preview}
              alt="Avatar"
              width={100}
              height={100}
              className="rounded-full object-cover border"
            />
            <button
              type="button"
              className="absolute bottom-0 right-0 bg-gray-800 p-2 rounded-full hover:bg-gray-700 cursor-pointer hover:border-blue-500 transition-all duration-200"
              onClick={() => fileInputRef.current?.click()}
            >
              <FaCamera className="w-4 h-4 text-white" />
            </button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
          <div>
            <h2 className="font-semibold text-2xl mb-[0.35rem]">{displayName}</h2>
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
              <span className="text-gray-300">Not set</span>
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
              <span className="text-gray-300">Not set</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default MyAccountCard