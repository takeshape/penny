import { Button } from 'components/Button/Button';

export interface ModalFormActionsProps {
  isSubmitted: boolean;
  isSubmitting: boolean;
  onCancel: () => void;
  className?: string;
  submitText?: string;
  disableSubmit?: boolean;
}

export const ModalFormActions = ({
  isSubmitting,
  isSubmitted,
  onCancel,
  className,
  submitText,
  disableSubmit
}: ModalFormActionsProps) => {
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
