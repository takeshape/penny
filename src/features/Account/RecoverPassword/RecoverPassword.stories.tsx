import type { ComponentMeta } from '@storybook/react';
import { AccountRecoverPassword } from './RecoverPassword';

const Meta: ComponentMeta<typeof AccountRecoverPassword> = {
  title: 'Account / Components / Recover Password',
  component: AccountRecoverPassword
};

const Template = (args) => <AccountRecoverPassword {...args} />;

/**
 * TODO: When we can mock mutations we might want to show more states.
 */

export const RecoverPassword = Template.bind({});

export default Meta;
