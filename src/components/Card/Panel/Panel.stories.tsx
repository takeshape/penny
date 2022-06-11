import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CardPanel } from './Panel';

const Meta: ComponentMeta<typeof CardPanel> = {
  title: 'Components / Card / Panel',
  component: CardPanel
};

const Template: ComponentStory<typeof CardPanel> = (args) => {
  return (
    <CardPanel {...args}>
      <div>Random</div>
      <div>Stuff</div>
      <div>In Card</div>
    </CardPanel>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  primaryText: 'Random',
  secondaryText: 'A random panel card.'
};

export default Meta;
