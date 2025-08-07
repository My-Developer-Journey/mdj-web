'use client'

import { UserType } from '@/app/types/account';
import { Pencil } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Card, CardContent } from './card';
import EditPersonalInfoModal from './EditPersonalInfoModal';

type MyPersonalInfoProps = Pick<UserType, 
  'displayName' | 'bio' | 'gender' | 'phoneNumber' | 'email' | 'facebookUrl' | 'githubUrl'
>;

const PersonalInfo = ({
    gender,
    bio,
    displayName,
    phoneNumber,
    email,
    facebookUrl,
    githubUrl,
}: MyPersonalInfoProps) => {
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
                        <div className="font-bold">{displayName}</div>
                    </div>
                    <div>
                        <span className="font-medium text-gray-400">Gender:</span>
                        <div className="font-bold">
                            {gender
                                ? gender
                                : <span className="text-gray-400">Not set</span>}
                        </div>
                    </div>
                    <div>
                        <span className="font-medium text-gray-400">Phone Number:</span>
                        <div className="font-bold">
                            {phoneNumber ? phoneNumber : <span className="text-gray-400">Not set</span>}
                        </div>
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
                    displayName={displayName}
                    phoneNumber={phoneNumber}
                    email={email}
                    facebookUrl={facebookUrl}
                    githubUrl={githubUrl}
                />
            </CardContent>
        </Card>
    );
};

export default PersonalInfo;
