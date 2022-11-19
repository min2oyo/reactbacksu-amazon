import { createContext, useContext, useReducer } from 'react';

// 데이터 레이어 준비
export const StateContext = createContext();

// 앱을 래핑해서 데이터 레이어 제공
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// 각 컴포넌트에 전달
export const useStateValue = () => useContext(StateContext)

