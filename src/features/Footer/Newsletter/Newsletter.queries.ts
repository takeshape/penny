import { gql } from '@apollo/client';

export interface EmailSubmissionMutationArgs {
  listId: string;
  email: string;
}

export const EmailSubmissionMutation = gql`
  mutation NewsletterEmailSubmission($listId: String!, $email: String!) {
    Klaviyo_addMembers(list_id: $listId, input: { profiles: [{ email: $email }] }) {
      items {
        id
      }
    }
  }
`;
