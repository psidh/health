"use client"
import { useState } from "react"
import * as React from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import theme from "@/utils/colorPallete"
import { useAuth } from "@/firebase/AuthContext"
import { useRouter } from "next/navigation"

export default function ButtonAppBar() {
  const { signInWithGoogle, logout, user } = useAuth()
  const router = useRouter()

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              color="inherit"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              onClick={function () {
                router.push("/")
              }}
              className="cursor-pointer"
            >
              Health Matrix
            </Typography>
            {user ? (
              <div className="flex space-x-2">
                <Button
                  onClick={function () {
                    router.push("/dashboard")
                  }}
                  variant="text"
                  color="inherit"
                >
                  Dashboard
                </Button>
                <Button onClick={logout} variant="text" color="inherit">
                  Logout
                </Button>
              </div>
            ) : (
              <Button onClick={signInWithGoogle} variant="text" color="inherit">
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  )
}
