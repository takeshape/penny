import type { ComponentMeta } from '@storybook/react';
import { AuthCreateAccount } from './CreateAccount';

const Meta: ComponentMeta<typeof AuthCreateAccount> = {
  title: 'Features / Auth / Components / Create Account',
  component: AuthCreateAccount
};

const Template = (args) => <AuthCreateAccount {...args} />;

/**
 * TODO: When we can mock mutations we might want to show more states.
 */

export const Create = Template.bind({});

export default Meta;
