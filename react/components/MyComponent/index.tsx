import type { FC } from 'react'
import React from 'react'

import { ProfileContextProvider } from '../../context/ProfileContext'

const MyComponent: FC = ({ children }) => {
  return (
    <ProfileContextProvider>
      <div className="flex flex-column white">{children}</div>
    </ProfileContextProvider>
  )
}

export default MyComponent
