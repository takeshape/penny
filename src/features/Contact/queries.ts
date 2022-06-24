import { gql } from '@apollo/client';

export type CreateTicketResponse = {
  id: number;
};

export const CreateTicketMutation = gql`
  mutation ($email: String!, $message: String!, $recaptchaToken: String!) {
    createTicket(email: $email, message: $message, recaptchaToken: $recaptchaToken) {
      id
    }
  }
`;
