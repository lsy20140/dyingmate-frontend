import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(false);

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState()
  const [token, setToken] = useState()
  const [login, setLogin] = useState(false)
  const [logout, setLogout] = useState(false)

  return (
    <AuthContext.Provider value={{
      user, setUser, 
      token, setToken,
      email: user && user.email, 
      name: user && user.name,
      login, setLogin, 
      logout, setLogout
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthContext);
}

