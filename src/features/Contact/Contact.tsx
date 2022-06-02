import { Switch } from '@headlessui/react';
import Input from 'components/Input/Input';
import Textarea from 'components/Textarea/Textarea';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'utils/classNames';

const BackgroundDots = () => (
  <>
    <svg
      className="absolute left-full transform translate-x-1/2"
      width={404}
      height={404}
      fill="none"
      viewBox="0 0 404 404"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="85737c0e-0916-41d7-917f-596dc7edfa27"
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
    </svg>
    <svg
      className="absolute right-full bottom-0 transform -translate-x-1/2"
      width={404}
      height={404}
      fill="none"
      viewBox="0 0 404 404"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="85737c0e-0916-41d7-917f-596dc7edfa27"
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
    </svg>
  </>
);

export interface ContactForm {
  'first-name': string;
  'last-name': string;
  company: string;
  email: string;
  'phone-number': string;
  message: string;
}

export interface ContactProps {
  text: {
    primary: string;
    secondary: string;
    button: string;
  };
  onSubmit: (data: ContactForm) => void;
}

const Contact = (props: React.PropsWithChildren<ContactProps>) => {
  const { text, onSubmit } = props;
  const [agreed, setAgreed] = useState(false);
  const { handleSubmit, formState, control } = useForm<ContactForm>({ mode: 'onBlur' });
  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <BackgroundDots />
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{text.primary}</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">{text.secondary}</p>
        </div>
        <div className="mt-12">
          <form
            action="#"
            method="POST"
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              control={control}
              name="first-name"
              id="first-name"
              label="First name"
              autoComplete="given-name"
              type="text"
              rules={{ required: 'This field is required' }}
            />
            <Input
              control={control}
              name="last-name"
              id="last-name"
              label="Last name"
              autoComplete="family-name"
              type="text"
              rules={{ required: 'This field is required' }}
            />
            <Input
              className="sm:col-span-2"
              control={control}
              name="company"
              id="company"
              label="Company"
              autoComplete="organization"
              type="text"
              rules={{ required: 'This field is required' }}
            />
            <Input
              className="sm:col-span-2"
              control={control}
              name="email"
              id="email"
              label="Email"
              autoComplete="email"
              type="text"
              rules={{
                required: 'This field is required',
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Please enter a valid email'
                }
              }}
            />
            <Input
              className="sm:col-span-2"
              control={control}
              name="phone-number"
              id="phone-number"
              label="Phone Number"
              autoComplete="tel"
              placeholder="+1 (555) 987-6543"
              type="text"
              rules={{
                required: 'This field is required',
                pattern: {
                  value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                  message: 'Please enter a valid phone number'
                }
              }}
            />
            <Textarea
              className="sm:col-span-2"
              control={control}
              name="message"
              id="message"
              label="Message"
              rules={{ required: 'This field is required' }}
            />
            <div className="sm:col-span-2">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? 'bg-indigo-600' : 'bg-gray-200',
                      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? 'translate-x-5' : 'translate-x-0',
                        'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                      )}
                    />
                  </Switch>
                </div>
                <div className="ml-3">
                  <p className="text-base text-gray-500">
                    By selecting this, you agree to the{' '}
                    <Link href="#" className="font-medium text-gray-700 underline">
                      Privacy Policy
                    </Link>{' '}
                    and{' '}
                    <Link href="#" className="font-medium text-gray-700 underline">
                      Cookie Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className={classNames(
                  !agreed && 'opacity-50 pointer-events-none',
                  'w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                )}
              >
                {text.button}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
