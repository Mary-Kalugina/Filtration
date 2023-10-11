const defaultState: boolean = false;

export const editReduser = (state = defaultState, action: {type: string, payload: boolean}) => {
    switch(action.type) {
        case 'EDIT_MODE':
          return action.payload
        default:
            return state;
    }
}