import { countActions } from '../actions';

const initialSate = {
    counter: 0
}

export const countReducer = ( state = initialSate, action ) => {
    switch(action.type) {
         case 'INCREAMENT':
         return { ...state, counter: state.counter + 1 }
         break;

         case 'RESET':
         return { ...state, counter: 0 }
         break;

         default:
         return state

    }
};