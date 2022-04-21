import { Button, Flex, Text, Spinner } from '@theme-ui/components';

export const SubmitButton = ({ isSubmitting, text, ...props }) => {
  return (
    <Button disabled={isSubmitting} {...props}>
      <Flex sx={{ alignItems: 'center' }}>
        <Text>{text}</Text> {isSubmitting ? <Spinner variant="styles.spinner" size={24} sx={{ ml: 2 }} /> : ''}
      </Flex>
    </Button>
  );
};
