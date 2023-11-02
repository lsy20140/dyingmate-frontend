import { createContext, useContext, useState } from "react";

const StageContext = createContext()

export const StageContextProvider = ({children}) => {
  const [stage, setStage] = useState({})
  const [addOffset, setAddOffset] = useState(0)

  return (
    <StageContext.Provider value={{
      stage, setStage,
      addOffset, setAddOffset
    }}>
      {children}
    </StageContext.Provider>
  )

}

export function useStageContext() {
  return useContext(StageContext)
}