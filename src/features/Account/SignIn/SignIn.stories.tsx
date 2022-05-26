import type { ComponentMeta } from '@storybook/react';
import { AccountSignIn } from './SignIn';

const Meta: ComponentMeta<typeof AccountSignIn> = {
  title: 'Features / Account / Components / Sign In',
  component: AccountSignIn
};

const Template = (args) => <AccountSignIn {...args} />;

/**
 * TODO: When we can mock mutations we might want to show more states.
 */

export const SignIn = Template.bind({});

export default Meta;
