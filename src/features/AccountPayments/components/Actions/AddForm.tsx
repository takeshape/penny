import FormInput from 'components/Form/Input/Input';
import { ModalProps } from 'components/Modal/Modal';
import { ModalForm } from 'features/AccountSubscriptions/components/Actions/ModalForm';
import { ModalFormActions } from 'features/AccountSubscriptions/components/Actions/ModalFormActions';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

export interface AddFormProps extends ModalProps {
  customerId: string;
}

export interface AddFormValues {
  number: string;
  first_name: string;
  last_name: string;
  month: string;
  year: string;
  verification_value: string;
  mailingAddress: {
    address1: string;
    address2: string;
    city: string;
    company: string;
    countryCode: string;
    firstName: string;
    lastName: string;
    phone: string;
    provinceCode: string;
    zip: string;
  };
}

/**
 * TODO Handle submit errors
 */
export const AddForm = ({ isOpen, onClose, customerId }: AddFormProps) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, isSubmitSuccessful, isSubmitted }
  } = useForm<AddFormValues>();

  const handleFormSubmit = useCallback(
    async (formData: AddFormValues) => {
      // eslint-disable-next-line no-console
      console.log({ formData, customerId });
      // TODO Mutate payment methods list
    },
    [customerId]
  );

  const resetState = useCallback(() => reset(), [reset]);

  return (
    <ModalForm
      isOpen={isOpen}
      onClose={onClose}
      primaryText="Add payment method"
      afterLeave={resetState}
      onSubmit={handleSubmit(handleFormSubmit)}
      isSubmitSuccessful={isSubmitSuccessful}
      autoCloseDelay={3000}
    >
      <div className="md:h-[calc(1/6*100vh)] overflow-y-scroll p-[1px] flex flex-col">
        {isSubmitSuccessful ? (
          <div className="h-full font-medium flex flex-col items-center justify-center text-gray-600">
            <p className="mb-4">Your payment method has been added.</p>
          </div>
        ) : (
          <section aria-labelledby="details-heading" className="h-full">
            <h3 id="details-heading" className="sr-only">
              Add payment method details
            </h3>

            <div className="h-full font-medium flex flex-col items-center justify-center text-center text-gray-600">
              <div className="grid grid-cols-6 gap-6">
                <FormInput
                  control={control}
                  name="number"
                  id="number"
                  label="Card number"
                  autoComplete="cc-number"
                  defaultValue=""
                  type="text"
                  rules={{
                    required: 'This field is required'
                  }}
                  className="col-span-6 sm:col-span-3"
                />
              </div>
            </div>
          </section>
        )}
      </div>

      <ModalFormActions
        isSubmitted={isSubmitted}
        isSubmitting={isSubmitting}
        onCancel={onClose}
        className="mt-8 flex justify-end gap-2"
        submitText="Add"
      />
    </ModalForm>
  );
};
