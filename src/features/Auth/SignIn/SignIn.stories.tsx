import { ComponentMeta } from '@storybook/react';
import { AuthSignIn } from './SignIn';

const Meta: ComponentMeta<typeof AuthSignIn> = {
  title: 'Features / Auth / Components / Sign In',
  component: AuthSignIn
};

const Template = (args) => <AuthSignIn {...args} />;

/**
 * TODO: When we can mock mutations we might want to show more states.
 */

export const SignIn = Template.bind({});

export default Meta;
