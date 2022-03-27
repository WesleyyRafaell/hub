import { createContext, ReactNode, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Router from 'next/router'

export type User = {
  name?: string | null | undefined
  email?: string | null | undefined
  image?: string | null | undefined
}

type AuthProviderProps = {
  children: ReactNode
}

type AuthContextType = {
  user: User | undefined
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | undefined>(undefined)
  const { data: session, status } = useSession()
  const isUser = !!session?.user

  useEffect(() => {
    ;(() => {
      if (status === 'loading') return

      if (!isUser) {
        Router.push('/')
        return
      }

      setUser(session?.user)
      Router.push('dashboard')
    })()
  }, [isUser, status, session])

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}
