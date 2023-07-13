import React from 'react'

import useProfileContext from '../../context/ProfileContext/useProfileContext'

const Children1 = () => {
  const { state } = useProfileContext()

  return <div className="strong">{state?.name}</div>
}

export default Children1
