import { useMutation } from '@apollo/client';
import { Avatar, Box, Flex, Grid, Heading, Input, Label, Progress, Select, Textarea } from '@theme-ui/components';
import useCountries from 'lib/countries/use-countries';
import { useUpload } from 'lib/hooks/use-upload';
import { GetMyProfile, UploadAssets, UpsertMyCustomer, UpsertMyProfile } from 'lib/queries';
import { buildImageUrl } from 'lib/utils/images';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitButton } from './buttons';

export const CustomerForm = ({ customer }) => {
  const [setCustomerPayload, { loading }] = useMutation(UpsertMyCustomer, {
    refetchQueries: [GetMyProfile],
    awaitRefetchQueries: true
  });

  const { register, handleSubmit, watch, reset } = useForm();

  useEffect(() => {
    reset(customer);
  }, [customer, reset]);

  const countries = useCountries();
  const watchCountry = watch('address.country', customer?.address?.country);
  const selectedCountry = watchCountry && countries?.find((c) => c.iso2 === watchCountry);

  return (
    <>
      <Box as="form" onSubmit={handleSubmit((variables) => setCustomerPayload({ variables }))}>
        <Box mb={4}>
          <Label variant="disabledLabel" htmlFor="id">
            ID
          </Label>
          <Input {...register('id')} mb={3} readOnly />
          <Label htmlFor="name">Name</Label>
          <Input {...register('name')} mb={3} readOnly />
          <Label htmlFor="address.country">Country</Label>

          {countries?.length ? (
            <Select {...register('address.country')} mb={3} sx={{ width: '50%' }}>
              {countries.map(({ name, iso2, iso3 }) => (
                <option key={iso3} value={iso2}>
                  {name}
                </option>
              ))}
            </Select>
          ) : null}

          <Label htmlFor="address.line1">Address Line 1</Label>
          <Input {...register('address.line1')} mb={3} />
          <Label htmlFor="address.line2">Address Line 2</Label>
          <Input {...register('address.line2')} mb={3} />
          <Grid gap={2} columns={[1, 2]}>
            <Box>
              <Label htmlFor="address.city">City</Label>
              <Input {...register('address.city')} mb={3} />
            </Box>
            <Box>
              <Label htmlFor="address.state">State</Label>
              {countries?.length ? (
                <Select {...register('address.state')} mb={3}>
                  {selectedCountry
                    ? selectedCountry.states.map(({ name, state_code }) => (
                        <option key={state_code} value={state_code}>
                          {name}
                        </option>
                      ))
                    : null}
                </Select>
              ) : null}
            </Box>
          </Grid>

          <Box>
            <Label htmlFor="address.postal_code">Postal Code</Label>
            <Input {...register('address.postal_code')} mb={3} sx={{ width: '50%' }} />
          </Box>
        </Box>

        <SubmitButton text="Update" isSubmitting={loading} type="submit" />
      </Box>
    </>
  );
};

const ProfileAvatarUploadForm = ({ profile }) => {
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

const ProfileTextForm = ({ profile }) => {
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

export const ProfileForm = ({ profile }) => {
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
