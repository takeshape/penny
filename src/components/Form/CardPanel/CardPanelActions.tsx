import Button from 'components/Button/Button';
import { PropsWithChildren } from 'react';

export interface FormCardPanelActionsProps {
  error?: string;
  isReady?: boolean;
  isSubmitting: boolean;
  isSubmitSuccessful: boolean;
  isValid?: boolean;
}

export const FormCardPanelActions = ({
  error,
  isReady,
  isSubmitting,
  isSubmitSuccessful,
  isValid
}: PropsWithChildren<FormCardPanelActionsProps>) => {
  isReady = isReady ?? true;
  isValid = isValid ?? true;
  return (
    <div className="px-4 py-3 bg-background text-right sm:px-6">
      <div className="flex justify-end">
        {isSubmitSuccessful && !error && !isSubmitting && (
          <div className="inline-flex justify-center py-2 px-4 text-sm font-medium text-mainText-500">Saved</div>
        )}
        {isSubmitting && !error && (
          <div className="inline-flex justify-center py-2 px-4 text-sm font-medium text-mainText-500">Saving...</div>
        )}
        {error && !isSubmitting && (
          <div className="inline-flex justify-center py-2 px-4 text-sm font-medium text-red-800">[Error] {error}</div>
        )}
        <Button disabled={!isReady || isSubmitting || !isValid} color="primary" type="submit" size="medium">
          Save
        </Button>
      </div>
    </div>
  );
};

export default FormCardPanelActions;
