import { createContext, ReactNode, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Router from 'next/router'
import { getUserDataFromApi, getUserReposFromApi } from 'services/getUser'

type ArrayRepos = {
  id: number
  name: string
  description: string
  html_url: string
}

type Userdata = {
  login: string
  avatar_url: string
  location: string
  bio: string
  followers: number
  following: number
  repos: Array<ArrayRepos>
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
    const result = await Promise.all([
      getUserDataFromApi(name),
      getUserReposFromApi(name)
    ])

    if (result[0] && result[1]) {
      const { login, avatar_url, location, bio, followers, following } =
        result[0].data

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const repos = result[1].data.map(
        ({ id, name, description, html_url }: ArrayRepos) => {
          return {
            id,
            name,
            description,
            html_url
          }
        }
      )

      const data = {
        login,
        avatar_url,
        location,
        bio,
        followers,
        following,
        repos
      }

      setUserData(data)
      Router.push('dashboard')
    }
  }

  return (
    <AuthContext.Provider value={{ userData }}>{children}</AuthContext.Provider>
  )
}
