import { useMutation } from '@apollo/client';
import { Dialog, Transition } from '@headlessui/react';
import Alert from 'components/Alert/Alert';
import Button from 'components/Button/Button';
import Textarea from 'components/Form/Textarea/Textarea';
import { Star } from 'components/Stars/Stars';
import { CreateMyProductReviewMutation } from 'features/AccountForm/queries';
import { Fragment, useCallback, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { CreateMyProductReviewMutationResponse, CreateMyProductReviewMutationVariables } from 'types/takeshape';

interface CreateReviewForm {
  review: string;
  rating: number;
}

export interface ReviewsProps {
  productName: string;
  sku: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ReviewStar = ({ value, starNumber, onChange }: { value: number; starNumber: number; onChange: any }) => {
  return <Star lit={value >= starNumber} onClick={() => onChange(starNumber)} hoverHighlight={true} />;
};

export const CreateReview = (props: ReviewsProps) => {
  const { productName, sku, isOpen, setIsOpen } = props;

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, errors }
  } = useForm<CreateReviewForm>();

  const [createProductReview, { data: createProductReviewResponse, error: mutationError }] = useMutation<
    CreateMyProductReviewMutationResponse,
    CreateMyProductReviewMutationVariables
  >(CreateMyProductReviewMutation);

  const submitCallback = useCallback(
    async (formValues) => {
      const { review, rating } = formValues;

      await createProductReview({
        variables: {
          input: {
            sku,
            review,
            rating: String(rating)
          }
        }
      });
    },
    [createProductReview, sku]
  );

  const success = createProductReviewResponse?.result.success ?? false;

  const error = useMemo(() => {
    return mutationError ?? createProductReviewResponse?.result.success === false;
  }, [createProductReviewResponse?.result.success, mutationError]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const handleCancel = useCallback(() => {
    reset({
      review: '',
      rating: undefined
    });
    setIsOpen(false);
  }, [reset, setIsOpen]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium mb-3">
                  Review {productName}
                </Dialog.Title>

                {!success && (
                  <form onSubmit={handleSubmit(submitCallback)}>
                    <Controller
                      control={control}
                      name="rating"
                      rules={{
                        required: 'This field is required'
                      }}
                      render={({ field: { value, onChange } }) => (
                        <>
                          <label htmlFor="starRating" className="block text-sm font-medium text-gray-700 mb-2">
                            Rating
                          </label>
                          <div id="starRating" className="flex items-center">
                            {[1, 2, 3, 4, 5].map((starNumber) => (
                              <ReviewStar key={starNumber} starNumber={starNumber} value={value} onChange={onChange} />
                            ))}
                          </div>
                          {errors.rating?.message && (
                            <p className="mt-2 text-sm text-red-600" id="review-error">
                              {errors.rating.message}
                            </p>
                          )}
                        </>
                      )}
                    />

                    <Textarea
                      className="py-2"
                      control={control}
                      name="review"
                      id="review"
                      label="Review"
                      defaultValue=""
                      rules={{
                        required: 'This field is required'
                      }}
                    />

                    <div className="mt-3">
                      <Button loading={isSubmitting} type="submit" color="primary" className="h-8 mr-2">
                        Submit
                      </Button>
                      <Button
                        disabled={isSubmitting}
                        type="button"
                        color="secondary"
                        className="h-8"
                        onClick={handleCancel}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                )}

                {!error && success && (
                  <>
                    <Alert status="success" primaryText="Review submitted successfully" />
                    <Button type="button" color="secondary" className="h-8 mt-3" onClick={handleClose}>
                      Done
                    </Button>
                  </>
                )}

                {error && (
                  <div className="mt-3">
                    <Alert status="error" primaryText="There was an error submitting your review" />
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
