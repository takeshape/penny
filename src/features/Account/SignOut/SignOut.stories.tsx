import type { ComponentMeta } from '@storybook/react';
import { AccountSignOut } from './SignOut';

const Meta: ComponentMeta<typeof AccountSignOut> = {
  title: 'Features / Account / Components / Sign Out',
  component: AccountSignOut
};

const Template = (args) => <AccountSignOut {...args} />;

/**
 * TODO: When we can mock mutations we might want to show more states.
 */

export const SignOut = Template.bind({});

export default Meta;
