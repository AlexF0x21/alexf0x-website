import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import clsx from 'clsx'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={clsx('flex flex-col justify-between h-screen')}>
      <Header />
      <main className={clsx('container mb-auto')}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
