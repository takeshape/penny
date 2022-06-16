import { ComponentMeta } from '@storybook/react';
import { AuthSignOut } from './AuthSignOut';

const Meta: ComponentMeta<typeof AuthSignOut> = {
  title: 'Features / Auth Sign Out',
  component: AuthSignOut,
  argTypes: {
    signOut: {
      action: 'Sign Out'
    }
  }
};

const Template = (args) => <AuthSignOut {...args} />;

export const SignOut = Template.bind({});

export default Meta;
