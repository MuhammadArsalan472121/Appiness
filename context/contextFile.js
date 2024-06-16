import React, {useContext, createContext, useState} from 'react';
const createdContext = createContext();
export const ContextProvider = ({children}) => {
  const [stateT, setStateT] = useState({
    visibility: true,
    TimeDisplay: '00:00',
  });

  const [stateTN, setStateTN] = useState({
    visibility: true,
    TimeDisplay: '00:00',
  });
  return (
    <createdContext.Provider value={{stateT, setStateT, stateTN, setStateTN}}>
      {children}
    </createdContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(createdContext);
};
