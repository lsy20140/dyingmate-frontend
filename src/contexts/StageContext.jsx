import { createContext, useContext, useMemo, useState } from "react";

const StageContext = createContext()

export const StageContextProvider = ({children}) => {
  const [stage, setStage] = useState({})

  const value = useMemo(() => ({
    stage, setStage
  }),[stage])

  return (
    <StageContext.Provider value={value}>
      {children}
    </StageContext.Provider>
  )

}

export function useStageContext() {
  return useContext(StageContext)
}