import { createContext, useContext } from "react";

const ModalContext = createContext({});

export function useModalContext()
{
  return useContext(ModalContext);
}

const ModalProvider = () =>
{
  const value = {}

  return <ModalContext.Provider value={value}>

  </ModalContext.Provider>
}

export default ModalProvider