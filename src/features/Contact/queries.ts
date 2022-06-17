import { gql } from '@apollo/client';

export type GorgiasCreateTicketResponse = {
  id: number;
};

export const GorgiasCreateTicketMutation = gql`
  mutation ($email: String!, $message: String!, $recaptchaToken: String!) {
    Gorgias_createTicket(email: $email, message: $message, recaptchaToken: $recaptchaToken) {
      id
    }
  }
`;
