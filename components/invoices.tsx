import { Grid, Box, Card, IconButton, Paragraph, Text, Link } from '@theme-ui/components';
import { formatPrice } from 'lib/utils/text';
import { format } from 'date-fns';
import { FiCheckCircle, FiArrowDownCircle } from 'react-icons/fi';

export const InvoiceItemCard = ({ invoice }) => {
  return (
    <Card>
      <Grid gap={2} columns={2}>
        <Box>
          <Text variant="smallHeading" sx={{ color: 'lightGray' }}>
            {format(invoice.created * 1000, 'MM/dd/yyyy')}
          </Text>
        </Box>
        <Box sx={{ textAlign: 'right' }}>
          <IconButton>
            <Link href={invoice.invoicePdf} target="_blank">
              <FiArrowDownCircle />
            </Link>
          </IconButton>
          {invoice.paid ? <FiCheckCircle color="green" /> : null}
        </Box>
      </Grid>
      {invoice.lines.data.map((line) => (
        <Box key={line.id} sx={{ marginBottom: 2 }}>
          <Text variant="smallHeading">{line.description}</Text>
        </Box>
      ))}
      Total: {formatPrice(invoice.currency, invoice.total)}
    </Card>
  );
};

export const InvoiceList = ({ invoices }) => {
  return (
    <>
      {invoices.length ? (
        <Grid gap={3} columns={1}>
          {invoices.map((invoice) => (
            <Box key={invoice.id}>{invoice.lines?.data?.[0] && <InvoiceItemCard invoice={invoice} />}</Box>
          ))}
        </Grid>
      ) : (
        <Paragraph>No invoices to display!</Paragraph>
      )}
    </>
  );
};
