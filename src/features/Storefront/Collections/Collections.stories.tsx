import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Collections } from './Collections';

const Meta: ComponentMeta<typeof Collections> = {
  title: 'Features / Storefront / Components / Collections',
  component: Collections,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof Collections> = (args) => <Collections {...args} />;

export const _Collections = Template.bind({});
_Collections.args = {
  collections: [
    {
      name: 'Desk and Office',
      description: 'Work from home accessories',
      href: '#',
      image: {
        path: '06ccc3dc-a9da-4f5b-9142-5a104db52ee3/dev/2e7759ff-b544-4183-948f-f0d144eecddc/home-page-02-edition-01.jpg',
        description:
          'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.'
      }
    },
    {
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      href: '#',
      image: {
        path: '06ccc3dc-a9da-4f5b-9142-5a104db52ee3/dev/d39b7fd6-b5dd-4581-83ea-0c6e68e5fc12/home-page-02-edition-02.jpg',
        description: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.'
      }
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      href: '#',
      image: {
        path: '06ccc3dc-a9da-4f5b-9142-5a104db52ee3/dev/dcc43fdb-7615-48d6-93d7-f896a4d02db8/home-page-02-edition-03.jpg',
        description: 'Collection of four insulated travel bottles on wooden shelf.'
      }
    }
  ]
};

export default Meta;
