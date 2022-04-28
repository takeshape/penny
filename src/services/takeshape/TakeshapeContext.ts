import { createContext } from 'react';

const TakeshapeContext = createContext<{ isProfileReady: boolean }>({ isProfileReady: false });

export default TakeshapeContext;
