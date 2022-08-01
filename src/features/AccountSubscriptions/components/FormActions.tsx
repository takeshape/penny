import { Button } from 'components/Button/Button';

export interface FormActionsProps {
  isSubmitted: boolean;
  isSubmitting: boolean;
  onCancel: () => void;
  className?: string;
  submitText?: string;
  disableSubmit?: boolean;
}

export const FormActions = ({
  isSubmitting,
  isSubmitted,
  onCancel,
  className,
  submitText,
  disableSubmit
}: FormActionsProps) => {
  return (
    <div className={className}>
      <Button disabled={isSubmitting || isSubmitted} onClick={onCancel} color="clear" type="button">
        Cancel
      </Button>
      <Button disabled={disableSubmit || isSubmitting || isSubmitted} color="primary" type="submit">
        {submitText ?? 'Update subscription'}
      </Button>
    </div>
  );
};
