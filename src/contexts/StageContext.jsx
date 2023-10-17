import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import axios from 'axios'

const StageContext = createContext()

export const StageContextProvider = ({children}) => {
  const {token} = useAuthContext()
  const [stage, setStage] = useState({})

  useEffect(() => {
    axios.get(`https://dying-mate-server.link/map`, {
      headers: {Authorization: 'Bearer ' + token},
    }, )
    .then(function (res) {
      setStage(() => ({...res.data}))
      console.log('stage', stage)
    })
    .catch(function (error) {
      console.log(error);
    });
  },[])

  return (
    <StageContext.Provider value={{stage, setStage}}>
      {children}
    </StageContext.Provider>
  )

}

export function useStageContext() {
  return useContext(StageContext)
}