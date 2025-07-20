import MyAccountCard from "@/app/components/MyAccountCard"
import MyPersonalInfo from "@/app/components/MyPersonalInfo"
import MyPostStatistic from "@/app/components/MyPostStatistic"

const Profile = () => {
  return (
    <div>
      <div className="flex justify-center items-stretch gap-[2rem]">
        <div className="w-[70%] h-[144px]">
          <MyAccountCard
            name="Sun Sun"
            role="UI - UX Designer"
            department="Product Department"
            staffId="SJ53862"
            staffAccount="hangntm1"
            phone="0913 854 235"
            email="hangntm@sjlabel.com"
            avatarUrl="/default-avatar.png"
          />
        </div>
        <div className="w-[30%] h-[144px]">
          <MyPostStatistic/>
        </div>
      </div>
      <div className="flex justify-center items-stretch gap-[2rem] mt-[4rem]">
        <div className="w-[40%]">
          <MyPersonalInfo
            info={{
              gender: "Female",
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

        </div>
      </div>
    </div>
  )
}

export default Profile