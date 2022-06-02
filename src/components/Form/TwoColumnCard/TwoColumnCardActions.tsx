import { PropsWithChildren } from 'react';

export interface FormTwoColumnCardActionsProps {
  error?: string;
  isReady?: boolean;
  isSubmitting: boolean;
  isSubmitSuccessful: boolean;
  isValid?: boolean;
}

export const FormTwoColumnCardActions = ({
  error,
  isReady,
  isSubmitting,
  isSubmitSuccessful,
  isValid
}: PropsWithChildren<FormTwoColumnCardActionsProps>) => {
  isReady = isReady ?? true;
  isValid = isValid ?? true;
  return (
    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
      <div className="flex justify-end">
        {error && (
          <div className="inline-flex justify-center py-2 px-4 text-sm font-medium text-red-800">[Error] {error}</div>
        )}
        {!error && isSubmitting && (
          <div className="inline-flex justify-center py-2 px-4 text-sm font-medium text-gray-500">Saving...</div>
        )}
        {!error && isSubmitSuccessful && (
          <div className="inline-flex justify-center py-2 px-4 text-sm font-medium text-gray-500">Saved</div>
        )}
        <button
          disabled={!isReady || isSubmitting || !isValid}
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default FormTwoColumnCardActions;
