import Button from 'components/Button/Button';
import { Modal, ModalProps } from 'components/Modal/Modal';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

export interface ReportIssueFormProps extends ModalProps {}

export interface ReportIssueFormValues {
  confirm: boolean;
}

/**
 * TODO Handle submit errors
 */
export const ReportIssueForm = ({ isOpen, onClose }: ReportIssueFormProps) => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, isSubmitSuccessful, errors }
  } = useForm<ReportIssueFormValues>({
    defaultValues: {
      confirm: true
    }
  });

  const handleFormSubmit = useCallback(
    async (formData: ReportIssueFormValues) => {
      // eslint-disable-next-line no-console
      console.log(formData);

      onClose();
    },
    [onClose]
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-12 lg:col-span-12">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">Report an issue</h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Let us know what happened and we&apos;ll fix it right away!
            </p>
          </div>

          <form className="mt-10" onSubmit={handleSubmit(handleFormSubmit)}>
            <section aria-labelledby="confirm-heading" className="md:max-h-[calc(1/2*100vh)] overflow-y-scroll p-[1px]">
              <h3 id="confirm-heading" className="sr-only">
                Report issue contact form
              </h3>
              This should be a simple contact form to gorgias / zendesk.
              <input {...register('confirm')} className="hidden" />
            </section>

            <Button disabled={isSubmitting} color="primary" type="submit" size="large" className="mt-6 w-full">
              Report issue
            </Button>
          </form>
        </div>
      </div>
    </Modal>
  );
};
