'use client'

import MyAccountCard from "@/app/components/MyAccountCard"
import MyPersonalInfo from "@/app/components/MyPersonalInfo"
import MyPostStatistic from "@/app/components/MyPostStatistic"
import { useAuth } from '../../contexts/AuthContext';
//import { useLoading } from '@/app/contexts/LoadingContext';

const Profile = () => {
  const { user} = useAuth();
  console.log(user);
  return (
    <div>
      { user && 
      <div>
        <div className="flex justify-center items-stretch gap-[2rem]">
          <div className="w-[70%] h-[144px]">
            <MyAccountCard
              name={user?.displayName}
              email={user?.email}
              avatarUrl={user?.avatar}
              facebookUrl={user?.facebookUrl}
              githubUrl={user?.githubUrl}
              createdDate={user?.createdDate}
            />
          </div>
          <div className="w-[30%] h-[144px]">
            <MyPostStatistic/>
          </div>
        </div>
        <div className="flex justify-center items-stretch gap-[2rem] mt-[4rem]">
          <div className="w-[40%]">
            <MyPersonalInfo
              name={user?.displayName}
              bio={user?.bio}
              gender={user?.gender}
              phone={user?.phoneNumber}
              email={user?.email}
              facebookUrl={user?.facebookUrl}
              githubUrl={user?.githubUrl}
            />
          </div>
          <div className="w-[60%]">
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default Profile