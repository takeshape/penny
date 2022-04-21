import { createContext } from 'react';

export const TakeshapeContext = createContext<{ isProfileReady: boolean }>({ isProfileReady: false });
