import { createContext, ReactNode, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Router from 'next/router'
import { getUserDataFromApi } from 'services/getUser'

type Userdata = {
  login: string
  avatar_url: string
  location: string
  bio: string
  followers: number
  following: number
}

type AuthProviderProps = {
  children: ReactNode
}

type AuthContextType = {
  userData: Userdata | undefined
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
  const [userName, setUserName] = useState<string | null | undefined>()
  const [userData, setUserData] = useState<Userdata>()

  const { data: session, status } = useSession()
  const isUser = !!session?.user

  useEffect(() => {
    ;(() => {
      if (status === 'loading') return

      if (!isUser) {
        Router.push('/')
        return
      }

      const name = session?.user?.name

      if (name) {
        setUserName(name)
      }
    })()
  }, [isUser, status, session])

  useEffect(() => {
    if (!userName) return

    getUserData(userName)
  }, [userName])

  const getUserData = async (name: string) => {
    const result = await getUserDataFromApi(name)

    if (result?.data) {
      const { login, avatar_url, location, bio, followers, following } =
        result.data

      const data = {
        login,
        avatar_url,
        location,
        bio,
        followers,
        following
      }

      setUserData(data)
      Router.push('dashboard')
    }
  }

  return (
    <AuthContext.Provider value={{ userData }}>{children}</AuthContext.Provider>
  )
}
