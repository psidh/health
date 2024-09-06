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
      return <div>Loading...</div>
    }

    if (!user) {
      return null
    }

    return <Component />
  }
}
