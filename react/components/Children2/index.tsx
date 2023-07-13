import React from 'react'
import { InputButton } from 'vtex.styleguide'

import { actions } from '../../actions'
import useProfileContext from '../../context/ProfileContext/useProfileContext'

const Children2 = () => {
  const { state, dispatch } = useProfileContext()

  const handleOnChange = (e: any) => {
    dispatch({
      type: actions.setName,
      args: {
        name: e.target.value,
      },
    })
  }

  return (
    <div className="strong">
      <label className="white" htmlFor="">
        {state?.email}
      </label>
      <InputButton
        placeholder="You name"
        size="regular"
        label="Register name"
        button="Send"
        value={state?.name ?? ''}
        onChange={handleOnChange}
      />
    </div>
  )
}

export default Children2
