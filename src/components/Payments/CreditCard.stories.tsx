import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CreditCard } from './CreditCard';

const Meta: ComponentMeta<typeof CreditCard> = {
  title: 'Components / Credit Card',
  component: CreditCard,
  parameters: {
    layout: 'centered'
  }
};

const card = {
  expiresSoon: false,
  expiryMonth: 10,
  expiryYear: 2023,
  lastDigits: '4242',
  maskedNumber: '••••4242',
  name: 'Michael Shick',
  isRevocable: false
};

const Template: ComponentStory<typeof CreditCard> = (args) => <CreditCard {...args} />;

export const Generic = Template.bind({});

Generic.args = {
  card: {
    ...card,
    brand: 'Generic'
  }
};

export const GenericExpiresSoon = Template.bind({});

GenericExpiresSoon.args = {
  card: {
    ...card,
    brand: 'Generic',
    expiresSoon: true
  }
};

export const Amex = Template.bind({});

Amex.args = {
  card: {
    ...card,
    brand: 'Amex'
  }
};

export const Visa = Template.bind({});

Visa.args = {
  card: {
    ...card,
    brand: 'Visa'
  }
};

export const Discover = Template.bind({});

Discover.args = {
  card: {
    ...card,
    brand: 'Discover'
  }
};

export const DinersClub = Template.bind({});

DinersClub.args = {
  card: {
    ...card,
    brand: 'Diners Club'
  }
};

export const Mastercard = Template.bind({});

Mastercard.args = {
  card: {
    ...card,
    brand: 'Mastercard'
  }
};

export const PayPal = Template.bind({});

PayPal.args = {
  card: {
    ...card,
    brand: 'PayPal'
  }
};

export const Alipay = Template.bind({});

Alipay.args = {
  card: {
    ...card,
    brand: 'Alipay'
  }
};

export default Meta;
