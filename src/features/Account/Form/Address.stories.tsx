import type { ComponentMeta } from '@storybook/react';
import { AccountFormAddress } from './Address';

const Meta: ComponentMeta<typeof AccountFormAddress> = {
  title: 'Features / Account / Form / Address',
  component: AccountFormAddress
};

const Template = (args) => <AccountFormAddress {...args} />;

export const Basic = Template.bind({});

// TODO: More states when we can mock mutations

export default Meta;
