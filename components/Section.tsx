import type { BoxProps } from 'theme-ui';
import { Box } from 'theme-ui';

export const Section = ({ children, ...props }: BoxProps) => {
  return (
    <Box
      as="section"
      sx={{
        mb: 4
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Section;
