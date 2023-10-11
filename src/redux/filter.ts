const defaultState: string = '';

export const filter = (state = defaultState, action: {type: string, payload: string}) => {
    switch(action.type) {
        case 'FILTER':
            return action.payload;
        default:
            return state;
        }
}