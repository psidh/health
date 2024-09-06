"use client"
import { useAuth } from "@/firebase/AuthContext"
import Button from "@mui/material/Button/Button"

const Login = () => {
  const { signInWithGoogle, logout, user } = useAuth()

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.email}</p>
          <Button onClick={logout}>Logout</Button>
        </>
      ) : (
        <Button onClick={signInWithGoogle} variant="outlined">Sign in with Google</Button>
      )}
    </div>
  )
}

export default Login
