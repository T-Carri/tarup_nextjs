import {TYPES} from './Types'


export const GlobalState= (state, action)=>{
    switch (action.type){
        case TYPES.ERROR_ERROR:
            return{
                ...state, 
                thereerror: action.payload
            }

            default: 
            return state; 
    }
}