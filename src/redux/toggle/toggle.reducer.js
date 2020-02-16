import { toggleTypes } from './toggle.types';

const INITIAL_STATE = {
    hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case toggleTypes.TOGGLE: return {
            ...state,
            hidden: !state.hidden
        }
        default: return state;
    }
}

export default cartReducer;