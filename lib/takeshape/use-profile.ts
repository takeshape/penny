import { useContext } from 'react';
import { TakeshapeContext } from './context';

export const useProfile = () => {
  return useContext(TakeshapeContext);
};

export default useProfile;
