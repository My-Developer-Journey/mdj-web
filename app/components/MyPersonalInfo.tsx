import { Pencil } from 'lucide-react';
import { Card, CardContent } from './card';

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
    return (
        <Card className="w-full">
            <CardContent className="p-6">
                <div className="flex justify-between items-center border-b border-gray-200 pb-[0.5rem] mb-[1.5rem]">
                    <h2 className="text-gray-600 font-semibold text-2xl">Personal information</h2>
                    <Pencil className="w-4 h-4 text-gray-400 cursor-pointer" />
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                    <span className="font-medium">Gender:</span> {info.gender}
                </div>
                <div>
                    <span className="font-medium">Date of birth:</span> {info.dob}
                </div>
                <div>
                    <span className="font-medium">Identify code:</span> {info.identifyCode}
                </div>
                <div>
                    <span className="font-medium">Hometown:</span> {info.hometown}
                </div>
                <div>
                    <span className="font-medium">Nationality:</span> {info.nationality}
                </div>
                <div>
                    <span className="font-medium">Religion:</span> {info.religion}
                </div>
                <div>
                    <span className="font-medium">Language:</span> {info.language}
                </div>
                <div>
                    <span className="font-medium">Marital status:</span> {info.maritalStatus}
                </div>
                <div className="col-span-2">
                    <span className="font-medium">Permanent address:</span> {info.permanentAddress}
                </div>
                <div className="col-span-2">
                    <span className="font-medium">Current address:</span> {info.currentAddress}
                </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default PersonalInfo;