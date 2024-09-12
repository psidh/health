"use client"
import { useAuth } from "../firebase/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export const requireAuth = (Component) => {
  return () => {
    const { user, loading } = useAuth()
    const router = useRouter()

    useEffect(() => {
      if (!loading && !user) {
        router.push("/login")
      }
    }, [user, loading, router])

    if (loading) {
      return <div className="flex flex-col items-center justify-center h-[100vh] "><img src="/loading.gif" alt="" className="w-10 h-10" /></div>
    }

    if (!user) {
      return null
    }

    return <Component />
  }
}
