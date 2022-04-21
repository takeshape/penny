import type { UpsertMyProfileResponse } from 'lib/queries';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useMutation } from '@apollo/client';
import { UpsertMyProfile, GetMyProfile } from 'lib/queries';
import { TakeshapeContext } from './context';

// Ensure a profile is created for the Auth0 user
export const TakeshapeProvider = ({ children }) => {
  const { user } = useAuth0();

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
    if (user && !profileUpdating && !profileData) {
      upsertMyProfile();
    }
  }, [user, profileData, profileUpdating, upsertMyProfile]);

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
