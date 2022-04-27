import type { ButtonProps } from 'theme-ui';
import { Button, Flex, Spinner, Text } from 'theme-ui';

export interface SubmitButtonProps extends ButtonProps {
  isSubmitting: boolean;
  text: string;
}

export const SubmitButton = ({ isSubmitting, text, ...props }: SubmitButtonProps) => {
  return (
    <Button disabled={isSubmitting} {...props}>
      <Flex sx={{ alignItems: 'center' }}>
        <Text>{text}</Text> {isSubmitting ? <Spinner variant="styles.spinner" size={24} sx={{ ml: 2 }} /> : ''}
      </Flex>
    </Button>
  );
};

export default SubmitButton;
