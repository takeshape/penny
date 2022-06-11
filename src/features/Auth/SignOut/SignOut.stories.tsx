import { ComponentMeta } from '@storybook/react';
import { AuthSignOut } from './SignOut';

const Meta: ComponentMeta<typeof AuthSignOut> = {
  title: 'Features / Auth / Components / Sign Out',
  component: AuthSignOut
};

const Template = (args) => <AuthSignOut {...args} />;

/**
 * TODO: When we can mock mutations we might want to show more states.
 */

export const SignOut = Template.bind({});

export default Meta;
