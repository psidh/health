"use client"
import { requireAuth } from "@/firebase/requireAuth"
import { useAuth } from "@/firebase/AuthContext"
import Topbar from "@/components/Topbar"
import StatCard from "@/components/StatCard"
import Schedule from "@/components/Schedule"
import RightCard from "@/components/RightCard"
const ProfilePage = () => {
  const { user } = useAuth()
  console.log(user)

  return (
    <div className="px-8 md:px-36 py-12 ">
      <div className="flex xl:flex-row flex-col items-start justify-between space-x-8">
        <div>
          <h1 className="text-6xl font-semibold my-12">
            Welcome {user.displayName}
          </h1>
          <Topbar />

          <h2 className="text-4xl font-semibold my-8">
            How are you Feeling Today?
          </h2>
          <p className="mb-6">
            Harmonius Living, Balance, Strength, Vitality, Wellness
          </p>
          <div className="flex items-start justify-start gap-6">
            <StatCard
              title="Muscle Recovery"
              data={72}
              icon="body_system"
              change={100}
              change_icon="arrow_downward"
              change_percentage={54}
            />
            <StatCard
              title="Steps"
              data={712}
              icon="footprint"
              change={+60}
              change_icon="arrow_downward"
              change_percentage={24}
            />
            <StatCard
              title="Calory Burned"
              data={129}
              icon="body_system"
              change={-10}
              change_icon="arrow_downward"
              change_percentage={54}
            />
          </div>
        </div>
        <RightCard />
      </div>
      <Schedule />
    </div>
  )
}

export default requireAuth(ProfilePage)
