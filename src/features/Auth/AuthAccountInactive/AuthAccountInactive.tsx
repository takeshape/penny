/**
 * If a project is able to use `write_customer_payment_methods` can use this.
 */
import { ModalProps } from '@/components/Modal/Modal';
import { ModalForm } from '@/components/Modal/ModalForm';
import { ModalFormActions } from '@/components/Modal/ModalFormActions';
import { SendCustomerInviteMutation } from '@/features/Auth/queries';
import { SendCustomerInviteMutationResponse, SendCustomerInviteMutationVariables } from '@/types/takeshape';
import { useMutation } from '@apollo/client';
import { Dialog } from '@headlessui/react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { InactiveCustomer } from '../types';

export type AccountInactiveFormProps = {
  customer: InactiveCustomer;
} & ModalProps;

export type AccountInactiveFormValues = Record<string, unknown>;

export const AccountInactiveForm = ({ customer, isOpen, onClose }: AccountInactiveFormProps) => {
  const {
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful }
  } = useForm<AccountInactiveFormValues>();

  const [sendInvite, { data: sendInviteResponse }] = useMutation<
    SendCustomerInviteMutationResponse,
    SendCustomerInviteMutationVariables
  >(SendCustomerInviteMutation);

  const handleFormSubmit: SubmitHandler<AccountInactiveFormValues> = useCallback(async () => {
    await sendInvite({ variables: { customerId: customer.id } });
  }, [customer.id, sendInvite]);

  return (
    <ModalForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={(...args) => void handleSubmit(handleFormSubmit)(...args)}
      isSubmitSuccessful={isSubmitSuccessful}
      autoCloseDelay={3000}
      className=""
    >
      {sendInviteResponse ? (
        <div>
          <div className="mx-auto flex items-center justify-center rounded-full">
            <CheckBadgeIcon className="h-12 w-12 text-green-600" aria-hidden="true" />
          </div>
          <div className="mt-3 text-center sm:mt-5">
            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
              Invite sent!
            </Dialog.Title>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Check your email for an invite from{' '}
                <strong>{sendInviteResponse.customerInvite?.customer_invite.from}</strong>.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <div className="mx-auto flex items-center justify-center rounded-full">
              <CheckBadgeIcon className="h-12 w-12 text-accent-600" aria-hidden="true" />
            </div>
            <div className="mt-3 text-center sm:mt-5">
              <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                <strong>{customer.email}</strong> is in use.
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">This email address is in use, but in an inactive state.</p>
                <p className="text-sm text-gray-500 mt-2">
                  Would you like to activate it by confirming your email address?
                </p>
              </div>
            </div>
          </div>

          <ModalFormActions
            isSubmitted={isSubmitSuccessful}
            isSubmitting={isSubmitting}
            onCancel={onClose}
            className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3"
            submitText="Send Activation Email"
          />
        </div>
      )}
    </ModalForm>
  );
};
