import type { ReactNode } from "react"
import NavigationComponent from "../components/nav"

interface ComponentProps {
  children: ReactNode
}

const MainLayout = ({ children }: ComponentProps) =>
{  
  return <>
    <NavigationComponent />
    <main>{children}</main>
  </> 
}

export default MainLayout