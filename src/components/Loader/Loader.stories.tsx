import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Loader } from './Loader';

const Meta: ComponentMeta<typeof Loader> = {
  title: 'Components / Loader',
  component: Loader,
  parameters: {
    layout: 'centered'
  },
  decorators: [(Story) => <div className="relative z-10">{Story()}</div>]
};

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const _Loader = Template.bind({});

export default Meta;
