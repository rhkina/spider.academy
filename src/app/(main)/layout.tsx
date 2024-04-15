import Infobar from '@/components/infobar'
import Sidebar from '@/components/sidebar'

import React, { Children } from 'react'

type Props = { children: React.ReactNode }
const Layout = (props: Props) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="w-full">
        <Infobar />
        {props.children}
      </div>
    </div>
  )
}

export default Layout
