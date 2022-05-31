import Input from 'components/Input/Input';
import { useForm } from 'react-hook-form';
import useCountries from 'utils/hooks/useCountries';

interface AccountOverviewAddressForm {
  firstName: string;
  lastName: string;
  line1: string;
  line2: string;
  country: string;
  city: string;
  state: string;
  postalCode: string;
}

export const AccountOverviewAddress = () => {
  const { handleSubmit, formState, control, register, watch } = useForm<AccountOverviewAddressForm>();

  const countries = useCountries();
  const watchCountry = watch('country', 'US');
  const selectedCountry = watchCountry && countries?.find((c) => c.iso2 === watchCountry);

  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Shipping Address</h3>
            <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <Input
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
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <Input
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
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                      Country
                    </label>
                    {countries?.length ? (
                      <select
                        {...register('country')}
                        id="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        {countries.map(({ name, iso2, iso3 }) => (
                          <option key={iso3} value={iso2}>
                            {name}
                          </option>
                        ))}
                      </select>
                    ) : null}
                  </div>

                  <div className="col-span-6">
                    <Input
                      control={control}
                      name="line1"
                      id="line1"
                      label="Address line 1"
                      autoComplete="address-line1"
                      defaultValue=""
                      type="text"
                      rules={{
                        required: 'This field is required'
                      }}
                    />
                  </div>

                  <div className="col-span-6">
                    <Input
                      control={control}
                      name="line2"
                      id="line2"
                      label="Address line 2"
                      autoComplete="address-line2"
                      defaultValue=""
                      type="text"
                    />
                  </div>

                  <div className="col-span-3">
                    <Input
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
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                      State
                    </label>
                    {countries?.length ? (
                      <select
                        {...register('state')}
                        id="state"
                        autoComplete="address-leve2"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        {selectedCountry
                          ? selectedCountry.states.map(({ name, state_code }) => (
                              <option key={state_code} value={state_code}>
                                {name}
                              </option>
                            ))
                          : null}
                      </select>
                    ) : null}
                  </div>

                  <div className="col-span-6">
                    <Input
                      control={control}
                      name="postalCode"
                      id="postalCode"
                      label="ZIP / Postal code"
                      autoComplete="postal-code"
                      defaultValue=""
                      type="text"
                      rules={{
                        required: 'This field is required'
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountOverviewAddress;
