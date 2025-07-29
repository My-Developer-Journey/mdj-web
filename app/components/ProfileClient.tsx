'use client'

import MyAccountCard from "@/app/components/MyAccountCard"
import MyPersonalInfo from "@/app/components/MyPersonalInfo"
import MyPostStatistic from "@/app/components/MyPostStatistic"
import useUserProfile from "@/app/hooks/useUserProfile"

const ProfileClient = () => {
  const { profile, loading } = useUserProfile()

  if (loading) return <div>Loading...</div>
  if (!profile) return <div>Failed to load profile.</div>

  return (
    <div>
      <div className="flex justify-center items-stretch gap-[2rem]">
        <div className="w-[70%] h-[144px]">
          <MyAccountCard
            name={profile.displayName || 'No Name'}
            role={profile.role || 'Unknown Role'}
            department="Product Department"
            staffId="SJ53862"
            staffAccount="hangntm1"
            phone={profile.phoneNumber || 'No Phone'}
            email={profile.email}
            avatarUrl="/default-avatar.png"
            facebookUrl={profile.facebookUrl}
            githubUrl={profile.githubUrl}
            joinDate={profile.createdDate}
          />
        </div>
        <div className="w-[30%] h-[144px]">
          <MyPostStatistic />
        </div>
      </div>

      <div className="flex justify-center items-stretch gap-[2rem] mt-[4rem]">
        <div className="w-[40%]">
          <MyPersonalInfo
            info={{
              email: profile.email,
              displayName: profile.displayName ?? 'Mr.Nimbus',
              gender: profile.gender ?? 'gei',
              phoneNumber: profile.phoneNumber ?? 'why you no fone?',
              facebookUrl: profile.facebookUrl ?? 'https://www.facebook.com/yourusername',
              githubUrl: profile.githubUrl,
              bio: profile.bio ?? 'why so sad',
              role: profile.role ?? 'Unknown Role',
              createdDate: profile.createdDate ?? 'Unknown Date',
              department: profile.department ?? 'Unknown Department',
              staffId: profile.staffId ?? 'Unknown StaffID',
              staffAccount: profile.staffAccount ?? 'Unknown StaffAccount',

              dob: "5th March, 1996",
              identifyCode: "3234611342",
              hometown: "Hai Duong city",
              nationality: "Vietnam",
              religion: "None",
              language: "Vietnamese, English",
              maritalStatus: "Single",
              permanentAddress: "5. Nguyen Chi Thanh Street, Tan Binh Ward, Hai Duong",
              currentAddress: "29. Nguyen Ngoc Doan Street, Dong Da District, Ha Noi",
            }}
          />
        </div>
        <div className="w-[60%]">
          {/* Future right-side content */}
        </div>
      </div>
    </div>
  )
}

export default ProfileClient
