import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AuthSignIn, errors } from './AuthSignIn';

const Meta: ComponentMeta<typeof AuthSignIn> = {
  title: 'Features / Auth Sign In',
  component: AuthSignIn,
  argTypes: {
    signIn: {
      action: 'Sign In'
    },
    error: {
      control: {
        type: 'select',
        options: Object.keys(errors)
      }
    }
  }
};

const Template = (args) => <AuthSignIn {...args} />;

/**
 * TODO: When we can mock mutations we might want to show more states.
 */

export const Success = Template.bind({});

export const Error: ComponentStory<typeof AuthSignIn> = Template.bind({});
Error.args = {
  error: 'CredentialsSignin'
};

export default Meta;
