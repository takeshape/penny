import { ComponentMeta, ComponentStory } from '@storybook/react';
import { detailsResponse } from '../queries.fixtures';
import { getDetails } from '../transforms';
import { Details } from './Details';

const Meta: ComponentMeta<typeof Details> = {
  title: 'Features / Product Page / Components / Details',
  component: Details
};

const Template: ComponentStory<typeof Details> = (args) => <Details {...args} />;

export const _Details = Template.bind({});
_Details.args = {
  details: getDetails(detailsResponse)
};

export default Meta;
