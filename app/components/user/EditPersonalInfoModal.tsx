'use client';

import { UserType } from '@/app/types/account';
import { useEffect, useRef, useState } from 'react';
import { useAuth } from '@/app/contexts/AuthContext';
import { updateProfile } from '@/app/services/UserServices';

type EditPersonalInfoModalProps = Pick<UserType, 
  'displayName' | 'bio' | 'gender' | 'phoneNumber' | 'email' | 'facebookUrl' | 'githubUrl'
> & {
    isModalOpen: boolean;
    onClose: () => void;
};

const EditPersonalInfoModal = ({
    isModalOpen,
    onClose,
    gender,
    bio,
    displayName,
    phoneNumber,
    email,
    facebookUrl,
    githubUrl,
}: EditPersonalInfoModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const { setUser } = useAuth();
    const [errors, setErrors] = useState<Record<string, string>>({}); 

    const [form, setForm] = useState<Pick<UserType, 'displayName' | 'bio' | 'gender' | 'phoneNumber' | 'email' | 'facebookUrl' | 'githubUrl'>>({
      displayName: displayName ?? "",
      bio: bio ?? "",
      gender: gender ?? "",
      phoneNumber: phoneNumber ?? "",
      email: email ?? "",
      facebookUrl: facebookUrl ?? "",
      githubUrl: githubUrl ?? ""
    });

    useEffect(() => {
      setForm({
        displayName: displayName ?? "",
        bio: bio ?? "",
        gender: gender !== undefined && gender !== null ? String(gender) : "",
        phoneNumber: phoneNumber ?? "",
        email: email ?? "",
        facebookUrl: facebookUrl ?? "",
        githubUrl: githubUrl ?? ""
      });
    }, [displayName, bio, gender, phoneNumber, email, facebookUrl, githubUrl]);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
          onClose();
        }
      };

      if (isModalOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isModalOpen, onClose]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
      const newErrors: { email?: string; phoneNumber?: string; gender?: string } = {};

      // Kiểm tra email (regex chuẩn)
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        newErrors.email = "Please enter a valid email address.";
      }

      // Kiểm tra số điện thoại (ví dụ: chỉ chấp nhận 9-11 chữ số)
      if (!/^\d{9,11}$/.test(form.phoneNumber)) {
        newErrors.phoneNumber = "Please enter a valid phone number (9-11 digits).";
      }
      // Kiểm tra giới tính
      if (form.gender === "" || form.gender === null || form.gender === undefined) {
        newErrors.gender = "Please select your gender.";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0; // true nếu không có lỗi
    };


    const handleSubmit = async () => {
      if (!validateForm()) return;
      const res = await updateProfile(form);
      if (res.ok) {
        const updatedUser = await res.json();
        setUser(updatedUser.data);
        onClose();
      } else {
        console.error('Update profile failed');
      }
    };

    if (!isModalOpen) return null;

    return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div
        ref={modalRef}
        className="bg-white px-8 py-6 rounded-lg shadow-lg w-1/2 max-h-[40rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
      >
        {/* Header */}
        <div className="mb-4">
          <h1 className="text-2xl font-semibold mb-1">Edit Your Personal Information</h1>
          <p className="text-gray-500">Provide details about yourself and social informations</p>
        </div>

        {/* Scrollable Content */}
        <form className="grid grid-cols-2 gap-4 text-sm text-gray-800">
          <div>
            <label className="block mb-1 font-medium">Display Name</label>
            <input
              type="text"
              name="displayName"
              value={form.displayName}
              onChange={handleChange}
              placeholder="Enter your display name"
              className="border border-gray-500 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400 w-72"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`border px-3 py-2 rounded-md outline-none focus:ring-2 w-72 ${
                errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-500 focus:ring-blue-400"
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className={`border px-3 py-2 rounded-md outline-none focus:ring-2 w-72 ${
                errors.phoneNumber ? "border-red-500 focus:ring-red-400" : "border-gray-500 focus:ring-blue-400"
              }`}
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">Gender</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className={`border px-3 py-2 rounded-md outline-none focus:ring-2 w-72 ${
                errors.gender ? "border-red-500 focus:ring-red-400" : "border-gray-500 focus:ring-blue-400"
              }`}
            >
              <option value="">Select gender</option>
              <option value="0">Male</option>
              <option value="1">Female</option>
              <option value="2">Other</option>
            </select>
            {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
          </div>
          <div className="col-span-2">
            <label className="block mb-1 font-medium">Facebook Link</label>
            <input
              type="url"
              name="facebookUrl"
              value={form.facebookUrl}
              onChange={handleChange}
              placeholder="Enter your facebook link"
              className="border border-gray-500 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400 w-160"
            />
          </div>
          <div className="col-span-2">
            <label className="block mb-1 font-medium">Github Link</label>
            <input
              type="url"
              name="githubUrl"
              value={form.githubUrl}
              onChange={handleChange}
              placeholder="Enter your github link"
              className="border border-gray-500 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400 w-160"
            />
          </div>
          <div className="col-span-2">
            <label className="block mb-1 font-medium">Bio</label>
            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              rows={4}
              className="border border-gray-500 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400 w-160 resize-none"
            />
          </div>
        </form>

        {/* Footer */}
        <div className="pt-6 mt-6 border-t border-gray-200 flex justify-between">
          <button
            onClick={onClose}
            className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 cursor-pointer transition-all duration-200"
          >
            Close
          </button>
          <button
            onClick={async () => {
              await handleSubmit();
              window.location.reload();
            }}
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 cursor-pointer transition-all duration-200"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditPersonalInfoModal;