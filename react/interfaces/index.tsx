export interface State {
    name: string
    lastName: string
    email: string
}

export interface Actions {
    type: string
    args: any
}

export interface ProfileContextTye {
    state: State
    dispatch: any
}
