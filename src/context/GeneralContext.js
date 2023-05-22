import { createContext, useContext, useEffect, useState, useReducer } from 'react'
import { GlobalState } from '@components/redux/GlobalState';
import PropTypes from 'prop-types';


const GeneralContext = createContext();
export default GeneralContext




export const GeneralProvider = ({children})=>{

  const  initialState={
      thereerror:null
    
    }
const [state, dispatch] = useReducer(GlobalState, initialState);




return(
<GeneralContext.Provider value={{state, dispatch}}>
{children}
</GeneralContext.Provider>

)



}


GeneralProvider.propTypes = {
  children: PropTypes.node
};
export const GeneralConsumer = GeneralContext.Consumer;






