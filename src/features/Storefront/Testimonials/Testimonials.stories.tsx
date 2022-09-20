import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Testimonials } from './Testimonials';

const Meta: ComponentMeta<typeof Testimonials> = {
  title: 'Features / Storefront / Components / Testimonials',
  component: Testimonials,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof Testimonials> = (args) => <Testimonials {...args} />;

export const _Testimonials = Template.bind({});
_Testimonials.args = {
  __typename: 'TestimonialsComponent',
  testimonials: [
    {
      __typename: 'TestimonialsComponentTestimonials',
      quote:
        'My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!',
      attribution: 'Sarah Peters, New Orleans'
    },
    {
      __typename: 'TestimonialsComponentTestimonials',
      quote:
        "I had to return a purchase that didn't fit. The whole process was so simple that I ended up ordering two new items!",
      attribution: 'Kelly McPherson, Chicago'
    },
    {
      __typename: 'TestimonialsComponentTestimonials',
      quote:
        "Now that I'm on holiday for the summer, I'll probably order a few more shirts. It's just so convenient, and I know the quality will always be there.",
      attribution: 'Chris Paul, Phoenix'
    }
  ]
};

export default Meta;
