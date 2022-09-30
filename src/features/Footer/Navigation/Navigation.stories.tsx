import { ComponentMeta, ComponentStory } from '@storybook/react';
import { GetFooterQueryData } from '../Footer.fixtures';
import { Navigation } from './Navigation';

const Meta: ComponentMeta<typeof Navigation> = {
  title: 'Features / Footer / Components / Navigation',
  component: Navigation
};

const Template: ComponentStory<typeof Navigation> = (args) => <Navigation {...args} />;

export const _Navigation = Template.bind({});
_Navigation.args = {
  sections: GetFooterQueryData.footer.navigation!.sections
};

export default Meta;
