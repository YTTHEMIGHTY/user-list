import { createContext } from 'react';

export interface IAppContext {
    appData:any, setAppData:any
}

export const AppContext = createContext<IAppContext>({} as IAppContext);
