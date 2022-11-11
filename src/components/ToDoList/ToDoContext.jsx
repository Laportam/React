import { createContext } from 'react';

import useToDoReducer from './ToDoReducer';

export const toDoContext = createContext();

export const ToDoContextProvider = ({ children }) => {
    const [toDoList, dispatch] = useToDoReducer();

    console.log(toDoList);
  
    const toDoHandlers = {
        addTask: (text) => {
            dispatch({
              type: 'add',
              payload: {
                name: text,
                date: (new Date()).toLocaleString()
              }
            })
          },
        resetAllTask: () => {
            dispatch({
                type:'reset'
            })
        }
    }

    return (
        <toDoContext.Provider value={{
                toDoList,
                toDoHandlers
            }}>
            {children}
        </toDoContext.Provider>
    )
}