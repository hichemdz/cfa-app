import React, { Children, createContext } from 'react'

export const InnerContext = createContext();
const DataProvider = props => {
    return (
        <InnerContext.Provider value='1111'>
            {props.children}
        </InnerContext.Provider>
    )
}

export default DataProvider;
