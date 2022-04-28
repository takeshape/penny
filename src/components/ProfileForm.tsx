import { useMutation } from '@apollo/client';
import { GetMyProfile, UploadAssets, UpsertMyProfile } from 'queries';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useUpload from 'services/hooks/useUpload';
import { Avatar, Box, Flex, Grid, Heading, Input, Label, Progress, Textarea } from 'theme-ui';
import type { Profile } from 'types/takeshape';
import { buildImageUrl } from 'utils/images';
import SubmitButton from './SubmitButton';

interface ProfileAvatarUploadFormProps {
  profile: Profile;
}

const ProfileAvatarUploadForm = ({ profile }: ProfileAvatarUploadFormProps) => {
  const [setAssetsPayload, { data: assetsData }] = useMutation(UploadAssets);
  const [setProfilePayload, { loading: isUpsertingProfile }] = useMutation(UpsertMyProfile, {
    refetchQueries: [GetMyProfile],
    awaitRefetchQueries: true
  });
  const [{ progress }, setUploadUrl, setUploadFile] = useUpload();

  const [file, setFile] = useState(null);
  const [totalProgress, setTotalProgress] = useState(null);
  const [isHandlingFile, setIsHandlingFile] = useState(false);

  useEffect(() => {
    if (file && !isHandlingFile) {
      setIsHandlingFile(true);
      setTotalProgress(0);
      setAssetsPayload({ variables: { files: [{ name: file.name, type: file.type }] } });
    }
  }, [file, isHandlingFile, setAssetsPayload]);

  useEffect(() => {
    if (file && assetsData?.uploadAssets?.[0]) {
      setUploadUrl(assetsData.uploadAssets[0].uploadUrl);
      setUploadFile(file);
      setTotalProgress(0.25);
    }
  }, [file, assetsData, setUploadUrl, setUploadFile]);

  useEffect(() => {
    if (progress !== null) {
      setTotalProgress(Math.min(progress - 0.25, 0.25));
    }
  }, [progress]);

  useEffect(() => {
    if (progress === 1 && assetsData?.uploadAssets?.[0]) {
      setProfilePayload({ variables: { avatarId: assetsData.uploadAssets[0].asset._id } });
      setTotalProgress(1);
    }
  }, [progress, assetsData, setProfilePayload]);

  useEffect(() => {
    if (isUpsertingProfile === false) {
      setFile(null);
      setIsHandlingFile(false);
      setTotalProgress(null);
    }
  }, [isUpsertingProfile]);

  const updateAvatar = async (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Heading variant="h5">Avatar</Heading>
      <Box sx={{ margin: '2rem 0' }}>
        {profile?.avatar ? (
          <Avatar
            src={buildImageUrl(profile.avatar, { h: 160, w: 160 })}
            sx={{ objectFit: 'cover', border: '1px solid #ccc' }}
          />
        ) : (
          <Box variant="images.avatar"></Box>
        )}
      </Box>
      <form>
        <Label htmlFor="avatar">Upload Avatar</Label>

        <Input onChange={updateAvatar} type="file" disabled={isHandlingFile} />

        {totalProgress && (
          <Progress max={1} value={totalProgress} mt={1}>
            {totalProgress * 100}%
          </Progress>
        )}
      </form>
    </Flex>
  );
};

interface ProfileTextFormProps {
  profile: Profile;
}

const ProfileTextForm = ({ profile }: ProfileTextFormProps) => {
  const [setProfilePayload, { loading }] = useMutation(UpsertMyProfile, {
    refetchQueries: [GetMyProfile],
    awaitRefetchQueries: true
  });

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    reset(profile);
  }, [profile, reset]);

  return (
    <Box as="form" onSubmit={handleSubmit((variables) => setProfilePayload({ variables }))}>
      <Box mb={4}>
        <Label variant="disabledLabel" htmlFor="id">
          Auth0 ID
        </Label>
        <Input {...register('id')} mb={3} readOnly />
        <Label variant="disabledLabel" htmlFor="email">
          Email
        </Label>
        <Input {...register('email')} mb={3} readOnly />
        <Label htmlFor="name">Name</Label>
        <Input {...register('name')} mb={3} />
        <Label htmlFor="bio">Bio</Label>
        <Textarea {...register('bio')} rows={4} cols={50}></Textarea>
      </Box>

      <SubmitButton type="submit" isSubmitting={loading} text="Update" />
    </Box>
  );
};

export interface ProfileFormProps {
  profile: Profile;
}

export const ProfileForm = ({ profile }: ProfileFormProps) => {
  return (
    <Grid
      sx={{
        gridGap: 4,
        gridTemplateColumns: `repeat(auto-fit, minmax(350px, 1fr))`
      }}
    >
      <Box>
        <ProfileTextForm profile={profile} />
      </Box>

      <Box>
        <ProfileAvatarUploadForm profile={profile} />
      </Box>
    </Grid>
  );
};

export default ProfileForm;
