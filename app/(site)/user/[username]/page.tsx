'use client'

import MyPostStatistic from "@/app/components/post/MyPostStatistic";
import MyAccountCard from "@/app/components/user/MyAccountCard";
import MyPersonalInfo from "@/app/components/user/MyPersonalInfo";
import { useAuth } from '../../../contexts/AuthContext';

const Profile = () => {
  const { user } = useAuth();
  return (
    <div>
      {user &&
        <div>
          <div className="flex justify-center items-stretch gap-[2rem]">
            <div className="w-[70%] h-[144px]">
              <MyAccountCard
                displayName={user?.displayName}
                email={user?.email}
                avatar={user?.avatar}
                facebookUrl={user?.facebookUrl}
                githubUrl={user?.githubUrl}
                createdDate={user?.createdDate}
              />
            </div>
            <div className="w-[30%] h-[144px]">
              <MyPostStatistic />
            </div>
          </div>
          <div className="flex justify-center items-stretch gap-[2rem] mt-[4rem]">
            <div className="w-[40%]">
              <MyPersonalInfo
                displayName={user?.displayName}
                bio={user?.bio}
                gender={user?.gender}
                phoneNumber={user?.phoneNumber}
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