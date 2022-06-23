import { gql } from '@apollo/client';

export interface EmailSubmissionMutationArgs {
  listId: string;
  email: string;
  recaptchaToken: string;
}

export const EmailSubmissionMutation = gql`
  mutation NewsletterEmailSubmission($listId: String!, $email: String!, $recaptchaToken: String!) {
    addMembers(list_id: $listId, input: { profiles: [{ email: $email }] }, recaptchaToken: $recaptchaToken) {
      items {
        id
      }
    }
  }
`;
