'use client'

import { Pencil } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Card, CardContent } from './card';
import EditPersonalInfoModal from './EditPersonalInfoModal';

type PersonalInfoProps = {
    info: {
        gender: string;
        dob: string;
        identifyCode: string;
        hometown: string;
        nationality: string;
        religion: string;
        language: string;
        maritalStatus: string;
        permanentAddress: string;
        currentAddress: string;
    };
};

const PersonalInfo = ({ info }: PersonalInfoProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

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
                        <div className='font-bold'>quydiem2015@gmail.com</div>
                    </div>
                    <div>
                        <span className="font-medium text-gray-400">Display name:</span>
                        <div className='font-bold'>Sun Sun</div>
                    </div>
                    <div>
                        <span className="font-medium text-gray-400">Gender:</span>
                        <div className='font-bold'>{info.gender}</div>
                    </div>
                    <div>
                        <span className="font-medium text-gray-400">Phone Number:</span>
                        <div className='font-bold'>0961164107</div>
                    </div>
                    <div className="col-span-2">
                        <span className="font-medium text-gray-400">Facebook Link:</span>
                        <div className='font-bold'>https://facebook.com/yourusername</div>
                    </div>
                    <div className="col-span-2">
                        <span className="font-medium text-gray-400">Github Link:</span>
                        <div className='font-bold'>https://github.com/yourusername</div>
                    </div>
                </div>
                <div className="h-px w-full bg-gray-200 opacity-50 my-[1rem]" />
                <div className='text-sm'>
                    <div>
                        <span className="font-medium text-gray-400 mb-[0.5rem] block">Biography:</span>
                        <div className='font-medium'>John Doe is a fullstack developer with experience in Spring Boot and Next.js. 
                                He’s passionate about clean code, personal growth, and building meaningful digital products.
                        </div>
                    </div>
                </div>
                <EditPersonalInfoModal
                    isModalOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    info={info}
                />
            </CardContent>
        </Card>
    );
};

export default PersonalInfo;