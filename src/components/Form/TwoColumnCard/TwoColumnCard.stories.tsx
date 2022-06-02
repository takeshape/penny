import type { ComponentMeta, ComponentStory } from '@storybook/react';
import FormInput from 'components/Form/Input/Input';
import { useForm } from 'react-hook-form';
import { FormTwoColumnCard } from './TwoColumnCard';

const Meta: ComponentMeta<typeof FormTwoColumnCard> = {
  title: 'Components / Form / Two Column Card',
  component: FormTwoColumnCard
};

const Template: ComponentStory<typeof FormTwoColumnCard> = (args) => {
  const { control } = useForm();

  return (
    <FormTwoColumnCard {...args}>
      <FormInput
        control={control}
        name="firstName"
        id="firstName"
        label="First name"
        autoComplete="given-name"
        defaultValue=""
        type="text"
        rules={{
          required: 'This field is required'
        }}
        className="col-span-6 sm:col-span-3"
      />

      <FormInput
        control={control}
        name="lastName"
        id="lastName"
        label="Last name"
        autoComplete="family-name"
        defaultValue=""
        type="text"
        rules={{
          required: 'This field is required'
        }}
        className="col-span-6 sm:col-span-3"
      />
    </FormTwoColumnCard>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  primaryText: 'Profile',
  secondaryText: 'Your profile!'
};

export const NotReady = Template.bind({});
NotReady.args = {
  ...Basic.args,
  isReady: false
};

export const Submitting = Template.bind({});
Submitting.args = {
  ...Basic.args,
  isSubmitting: true
};

export const Submitted = Template.bind({});
Submitted.args = {
  ...Basic.args,
  isSubmitSuccessful: true
};

export const Error = Template.bind({});
Error.args = {
  ...Basic.args,
  error: 'There was an error!'
};

export default Meta;
