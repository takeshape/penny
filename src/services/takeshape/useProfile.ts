import { useContext } from 'react';
import TakeshapeContext from './TakeshapeContext';

export const useProfile = () => {
  return useContext(TakeshapeContext);
};

export default useProfile;
