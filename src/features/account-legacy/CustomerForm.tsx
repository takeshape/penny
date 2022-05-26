import { useMutation } from '@apollo/client';
import SubmitButton from 'components/SubmitButton';
import { GetMyProfile, UpsertMyCustomer } from 'queries';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Grid, Input, Label, Select } from 'theme-ui';
import type { Stripe_Customer } from 'types/takeshape';
import useCountries from 'utils/hooks/useCountries';

export interface CustomerFormProps {
  customer: Stripe_Customer;
}

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

export default CustomerForm;
