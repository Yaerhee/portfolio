import { ReactNode } from 'react'
import Header from '@/components/Header'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default MainLayout
