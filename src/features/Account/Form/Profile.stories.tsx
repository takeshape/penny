import type { ComponentMeta } from '@storybook/react';
import { AccountFormProfile } from './Profile';

const Meta: ComponentMeta<typeof AccountFormProfile> = {
  title: 'Features / Account / Form / Profile',
  component: AccountFormProfile
};

const Template = (args) => <AccountFormProfile {...args} />;

export const Basic = Template.bind({});

// TODO: More states when we can mock mutations

export default Meta;
