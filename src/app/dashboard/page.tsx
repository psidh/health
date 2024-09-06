"use client"
import { requireAuth } from "@/firebase/requireAuth"

const ProfilePage = () => {
  return (
    <div>
      <h1>Profile</h1>
      <p>This is your protected profile page!</p>
    </div>
  )
}

export default requireAuth(ProfilePage)
