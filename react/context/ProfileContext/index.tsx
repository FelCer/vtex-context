import type { FC } from 'react'
import React, { createContext, useReducer } from 'react'

import { actions } from '../../actions'
import type { State, Actions, ProfileContextTye } from '../../interfaces'

const intialState: State = {
    name: 'felipe',
    lastName: 'cerero',
    email: 'felipe@yopmail.com',
}

export const ProfileContext = createContext<ProfileContextTye>({
    state: intialState,
    dispatch: () => { },
})

const reducer = (state: State, { type, args }: Actions) => {
    switch (type) {
        case actions.setName:
            return {
                ...state,
                name: args?.name ?? '',
            }

        case actions.setEmail:
            return {
                ...state,
                email: args?.email ?? '',
            }

        default:
            return state
    }
}

export const ProfileContextProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, intialState)

    return (
        <ProfileContext.Provider value={{ state, dispatch }}>
            {children}
        </ProfileContext.Provider>
    )
}
