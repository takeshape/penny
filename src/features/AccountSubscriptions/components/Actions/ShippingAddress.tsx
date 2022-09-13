import FormInput from 'components/Form/Input/Input';
import FormPhoneInput from 'components/Form/PhoneInput/PhoneInput';
import FormSelect from 'components/Form/Select/Select';
import { ModalProps } from 'components/Modal/Modal';
import { ModalForm } from 'components/Modal/ModalForm';
import { ModalFormActions } from 'components/Modal/ModalFormActions';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { UpdateMyAddressMutationResponse, UpdateMyAddressMutationVariables } from 'types/takeshape';
import { countries } from 'utils/countries/countries';
import { useAuthenticatedMutation } from 'utils/takeshape';
import { UpdateMyAddressMutation } from '../../queries';
import { AnySubscription, RefetchSubscriptions } from '../../types';
interface ShippingAddressFormProps extends ModalProps {
  subscription: AnySubscription;
  refetchSubscriptions: RefetchSubscriptions;
}

type ShippingAddressFormValues = Pick<
  UpdateMyAddressMutationVariables,
  'address1' | 'address2' | 'city' | 'countryCode' | 'firstName' | 'lastName' | 'phone' | 'province' | 'zip'
>;

export const ShippingAddressForm = ({
  isOpen,
  onClose,
  subscription,
  refetchSubscriptions
}: ShippingAddressFormProps) => {
  const {
    handleSubmit,
    control,
    watch,
    reset,
    formState: { isSubmitting, isSubmitSuccessful },
    getValues,
    setValue
  } = useForm<ShippingAddressFormValues>();

  /**
   * NOTE We are modifying an address that could be in use by other subscriptions
   * in Recharge, however, every subscription checkout creates a new address
   * object in Recharge, so this is, in effect, updating an address only in
   * use by the subscription in context.
   */
  const [updateMyAddress] = useAuthenticatedMutation<UpdateMyAddressMutationResponse, UpdateMyAddressMutationVariables>(
    UpdateMyAddressMutation
  );

  const handleFormSubmit = useCallback(
    async (formData: ShippingAddressFormValues) => {
      await updateMyAddress({
        variables: {
          ...formData,
          addressId: subscription.address.id
        }
      });
      await refetchSubscriptions();
      onClose();
    },
    [updateMyAddress, onClose, refetchSubscriptions, subscription.address.id]
  );

  // Use countryCode here because inconsistent...
  const watchCountry = watch('countryCode', 'US');
  const selectedCountry = watchCountry && countries.find((c) => c.iso2 === watchCountry);

  useEffect(() => {
    const selectedProvince = getValues().province;
    if (selectedCountry.states.find((state) => state.name === selectedProvince) === undefined) {
      setValue('province', selectedCountry.states[0].name);
    }
  }, [getValues, selectedCountry.states, setValue, watchCountry]);

  const resetState = useCallback(
    () =>
      reset({
        ...subscription.address,
        firstName: subscription.address.firstName,
        lastName: subscription.address.lastName,
        countryCode: countries.find((country) => country.name === subscription.address.country).iso2 ?? 'US'
      }),
    [reset, subscription.address]
  );

  // Set initial values
  useEffect(() => resetState(), [resetState]);

  return (
    <ModalForm
      isOpen={isOpen}
      onClose={onClose}
      primaryText="Shipping address"
      secondaryText="Update the shipping address for your subscription."
      afterLeave={resetState}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <section aria-labelledby="form-heading" className="md:max-h-[calc(7/8*100vh)] overflow-y-scroll p-[1px]">
        <h3 id="form-heading" className="sr-only">
          Shipping address form
        </h3>

        <div className="grid grid-cols-6 gap-6">
          <FormInput
            control={control}
            name="firstName"
            id="firstName"
            label="First name"
            autoComplete="given-name"
            defaultValue=""
            type="text"
            rules={{
              required: 'This field is required'
            }}
            className="col-span-6 sm:col-span-3"
          />

          <FormInput
            control={control}
            name="lastName"
            id="lastName"
            label="Last name"
            autoComplete="family-name"
            defaultValue=""
            type="text"
            rules={{
              required: 'This field is required'
            }}
            className="col-span-6 sm:col-span-3"
          />

          <FormSelect
            control={control}
            id="countryCode"
            name="countryCode"
            autoComplete="country-name"
            label="Country"
            defaultValue="US"
            options={
              countries?.map(({ name, iso2 }) => ({
                key: iso2,
                value: iso2,
                title: name
              })) ?? []
            }
            className="col-span-6 sm:col-span-3"
          />

          <FormInput
            control={control}
            name="address1"
            id="address1"
            label="Address line 1"
            autoComplete="address-line1"
            defaultValue=""
            type="text"
            rules={{
              required: 'This field is required'
            }}
            className="col-span-6"
          />

          <FormInput
            control={control}
            name="address2"
            id="address2"
            label="Address line 2"
            autoComplete="address-line2"
            defaultValue=""
            type="text"
            className="col-span-6"
          />

          <FormInput
            control={control}
            name="city"
            id="city"
            label="City"
            autoComplete="address-level1"
            defaultValue=""
            type="text"
            rules={{
              required: 'This field is required'
            }}
            className="col-span-3"
          />

          <FormSelect
            control={control}
            id="province"
            name="province"
            autoComplete="address-level2"
            label="State"
            options={
              selectedCountry?.states?.map(({ name, state_code }) => ({
                key: state_code,
                value: name,
                title: name
              })) ?? []
            }
            className="col-span-6 sm:col-span-3"
          />

          <FormInput
            control={control}
            name="zip"
            id="postalCode"
            label="ZIP / Postal code"
            autoComplete="postal-code"
            defaultValue=""
            type="text"
            rules={{
              required: 'This field is required'
            }}
            className="col-span-6"
          />

          <FormPhoneInput
            label="Phone number"
            id="phone"
            name="phone"
            defaultCountry="US"
            withCountryCallingCode={true}
            control={control}
            defaultErrorMessage="Please enter a valid phone number"
            className="col-span-6 sm:col-span-4"
          />
        </div>
      </section>

      <ModalFormActions
        isSubmitted={isSubmitSuccessful}
        isSubmitting={isSubmitting}
        onCancel={onClose}
        className="mt-8 flex justify-end gap-2"
        submitText="Update address"
      />
    </ModalForm>
  );
};
