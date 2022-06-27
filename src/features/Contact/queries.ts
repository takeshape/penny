import { gql } from '@apollo/client';

export const CreateTicketMutation = gql`
  mutation CreateTicketMutation($email: String!, $message: String!, $recaptchaToken: String!) {
    createTicket(email: $email, message: $message, recaptchaToken: $recaptchaToken) {
      id
    }
  }
`;
