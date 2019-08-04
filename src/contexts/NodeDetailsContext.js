import React, { createContext } from 'react';
import useNodeDetails from '../hooks/useNodeDetails';
export const NodeDetailsContext = createContext();

export function NodeDetailsProvider(props) {
       
        const [state, setValues] = useNodeDetails([]);
        return (
            <NodeDetailsContext.Provider value={{state, setValues}}>
                {props.children}
            </NodeDetailsContext.Provider>
        );
}