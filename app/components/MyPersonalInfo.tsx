'use client'

import { Pencil } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Card, CardContent } from './card';
import EditPersonalInfoModal from './EditPersonalInfoModal';

type PersonalInfoProps = {
    gender: string
    bio: string
    name: string
    phone: string
    email: string
    facebookUrl?: string
    githubUrl?: string
};

const PersonalInfo = ({
    gender,
    bio,
    name,
    phone,
    email,
    facebookUrl,
    githubUrl,
}: PersonalInfoProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('overflow-hidden', isModalOpen);
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isModalOpen]);

    return (
        <Card className="w-full">
            <CardContent className="py-6 px-8">
                <div className="flex justify-between items-center border-b border-gray-200 pb-[0.5rem] mb-[1.5rem]">
                    <h2 className="text-gray-600 font-semibold text-xl">Personal information</h2>
                    <Pencil
                        className="w-4 h-4 text-gray-400 cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                    />
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <span className="font-medium text-gray-400">Email:</span>
                        <div className="font-bold truncate">{email}</div>
                    </div>
                    <div>
                        <span className="font-medium text-gray-400">Display name:</span>
                        <div className="font-bold">{name}</div>
                    </div>
                    <div>
                        <span className="font-medium text-gray-400">Gender:</span>
                        <div className="font-bold">{gender.charAt(0).toUpperCase() + gender.slice(1).toLowerCase()}</div>
                    </div>
                    <div>
                        <span className="font-medium text-gray-400">Phone Number:</span>
                        <div className="font-bold">{phone}</div>
                    </div>
                    <div className="col-span-2">
                        <span className="font-medium text-gray-400">Facebook Link:</span>
                        <div className="font-bold truncate">{facebookUrl ?? <span className="text-gray-400">Not set</span>}</div>
                    </div>
                    <div className="col-span-2">
                        <span className="font-medium text-gray-400">Github Link:</span>
                        <div className="font-bold truncate">{githubUrl ?? <span className="text-gray-400">Not set</span>}</div>
                    </div>
                </div>

                <div className="h-px w-full bg-gray-200 opacity-50 my-[1rem]" />

                <div className="text-sm">
                    <div>
                        <span className="font-medium text-gray-400 mb-[0.5rem] block">Biography:</span>
                        <div className="font-medium">{bio ?? <span className="text-gray-400">Not set</span>}</div>
                    </div>
                </div>

                <EditPersonalInfoModal
                    isModalOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    gender={gender}
                    name={name}
                    phone={phone}
                    email={email}
                    facebookUrl={facebookUrl}
                    githubUrl={githubUrl}
                />
            </CardContent>
        </Card>
    );
};

export default PersonalInfo;
