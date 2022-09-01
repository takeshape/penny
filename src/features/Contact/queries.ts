import { gql } from '@apollo/client';

export const CreateTicketWithGorgiasMutation = gql`
  mutation CreateTicketWithGorgiasMutation(
    $name: String!
    $email: String!
    $message: String!
    $recaptchaToken: String
  ) {
    createTicket: Gorgias_createTicket(name: $name, email: $email, message: $message, recaptchaToken: $recaptchaToken) {
      id
    }
  }
`;

export const CreateTicketWithZendeskMutation = gql`
  mutation CreateTicketWithZendeskMutation(
    $name: String!
    $email: String!
    $message: String!
    $recaptchaToken: String
  ) {
    createTicket: Zendesk_createTicket(name: $name, email: $email, message: $message, recaptchaToken: $recaptchaToken) {
      id
    }
  }
`;
