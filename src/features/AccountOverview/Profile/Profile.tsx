import { useMutation } from '@apollo/client';
import Input from 'components/Input/Input';
import { useForm } from 'react-hook-form';

interface AccountOverviewProfileForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
}

export const AccountOverviewProfile = () => {
  const { handleSubmit, formState, control, watch } = useForm<AccountOverviewProfileForm>();

  const [setCustomerPayload, { data: customerResponse }] = useMutation<
    CreateCustomerResponse,
    MutationShopifyStorefront_CustomerCreateArgs
  >(CreateCustomerMutation);

  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
            <p className="mt-1 text-sm text-gray-600">How can we get in touch?</p>
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

                  <div className="col-span-6 sm:col-span-4">
                    <Input
                      control={control}
                      name="email"
                      id="email"
                      label="Email address"
                      autoComplete="email"
                      defaultValue=""
                      type="email"
                      rules={{
                        required: 'This field is required',
                        pattern: {
                          value:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: 'Please enter a valid email'
                        }
                      }}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label className="block text-sm font-medium text-gray-700">Photo</label>
                    <div className="mt-1 flex items-center">
                      <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                      <button
                        type="button"
                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Change
                      </button>
                    </div>
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

export default AccountOverviewProfile;
