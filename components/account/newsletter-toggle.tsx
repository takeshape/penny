import { useMutation } from '@apollo/client';
import { SubscribeToNewsletter, UnsubscribeFromNewsletter } from 'lib/queries';
import { useCallback, useState } from 'react';
import { Box, Flex, Label, Switch } from 'theme-ui';

export const NewsletterToggle = ({ email, newsletter }) => {
  const [subscribe, { called: subscribeCalled, loading: subscribeLoading }] = useMutation(SubscribeToNewsletter);
  const [unsubscribe, { called: unsubscribeCalled, loading: unsubscribeLoading }] =
    useMutation(UnsubscribeFromNewsletter);
  const [subscribed, setSubscribed] = useState(newsletter.subscribed);

  const onChange = useCallback(() => {
    if (subscribed) {
      unsubscribe({ variables: { listId: newsletter.listId, email } });
      setSubscribed(false);
    } else {
      subscribe({ variables: { listId: newsletter.listId, email } });
      setSubscribed(true);
    }
  }, [email, newsletter.listId, subscribe, subscribed, unsubscribe]);

  return (
    <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
      <Box sx={{ flexBasis: '4rem' }}>
        <Switch
          variant="muted"
          checked={subscribed}
          onChange={onChange}
          disabled={(subscribeCalled && subscribeLoading) || (unsubscribeCalled && unsubscribeLoading)}
        />
      </Box>
      <Label sx={{ flex: 1, fontSize: '1.2em' }}>{newsletter.listName}</Label>
    </Flex>
  );
};
