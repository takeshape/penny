import { useMutation } from '@apollo/client';
import { useOidc } from 'lib/next-auth-oidc/react';
import type { UpsertMyProfileResponse } from 'queries';
import { GetMyProfile, UpsertMyProfile } from 'queries';
import { useEffect } from 'react';
import TakeshapeContext from './TakeshapeContext';

// Ensure a profile is created for the Auth0 user
export const TakeshapeProvider = ({ children }) => {
  const { isAuthenticated } = useOidc({ clientId: 'takeshape' });

  const [upsertMyProfile, { data: profileData, loading: profileUpdating }] = useMutation<UpsertMyProfileResponse>(
    UpsertMyProfile,
    {
      update: (cache, result) => {
        cache.writeQuery({ query: GetMyProfile, data: result.data ?? {} });
      }
    }
  );

  useEffect(() => {
    // Logged in
    if (isAuthenticated && !profileUpdating && !profileData) {
      upsertMyProfile();
    }
  }, [isAuthenticated, profileData, profileUpdating, upsertMyProfile]);

  return (
    <TakeshapeContext.Provider
      value={{
        isProfileReady: Boolean(profileData)
      }}
    >
      {children}
    </TakeshapeContext.Provider>
  );
};

export default TakeshapeProvider;
