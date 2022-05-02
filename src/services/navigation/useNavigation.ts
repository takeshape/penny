import { useContext } from 'react';
import NavigationContext from './NavigationContext';

function useNavigation() {
  return useContext(NavigationContext);
}

export default useNavigation;
