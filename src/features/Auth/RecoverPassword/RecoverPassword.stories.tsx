import { ComponentMeta } from '@storybook/react';
import { AuthRecoverPassword } from './RecoverPassword';

const Meta: ComponentMeta<typeof AuthRecoverPassword> = {
  title: 'Features / Auth / Components / Recover Password',
  component: AuthRecoverPassword
};

const Template = (args) => <AuthRecoverPassword {...args} />;

/**
 * TODO: When we can mock mutations we might want to show more states.
 */

export const RecoverPassword = Template.bind({});

export default Meta;
