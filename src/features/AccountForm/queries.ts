import { gql } from '@apollo/client';

export const GetMyNewsletterSubscriptionsQuery = gql`
  query GetMyNewsletterSubscriptionsQuery {
    newsletters: getMyNewsletterSubscriptions {
      listId
      listName
      subscribed
    }
  }
`;

export const SubscribeMyEmailToNewsletterMutation = gql`
  mutation SubscribeMyEmailToNewsletterMutation($list_id: String!) {
    result: subscribeMyEmailToNewsletter(list_id: $list_id) {
      items {
        id
      }
    }
  }
`;

export const UnsubscribeMyEmailFromNewsletterMutation = gql`
  mutation UnsubscribeMyEmailFromNewsletterMutation($list_id: String!) {
    result: unsubscribeMyEmailFromNewsletter(list_id: $list_id) {
      result
    }
  }
`;
