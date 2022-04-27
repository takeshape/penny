import { Box } from 'theme-ui';

export const PageSection = ({ children, ...props }) => {
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

export default PageSection;
