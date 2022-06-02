import type { ComponentMeta } from '@storybook/react';
import { Account } from './Account';

const Meta: ComponentMeta<typeof Account> = {
  title: 'Features / Account / Components / Sign Out',
  component: Account
};

const Template = (args) => <Account {...args} />;

/**
 * TODO: When we can mock mutations we might want to show more states.
 */

export const SignOut = Template.bind({});

export default Meta;
