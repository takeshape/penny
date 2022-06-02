import type { ComponentMeta } from '@storybook/react';
import { AccountFormPassword } from './Password';

const Meta: ComponentMeta<typeof AccountFormPassword> = {
  title: 'Features / Account / Form / Password',
  component: AccountFormPassword
};

const Template = (args) => <AccountFormPassword {...args} />;

export const Basic = Template.bind({});

// TODO: More states when we can mock mutations

export default Meta;
