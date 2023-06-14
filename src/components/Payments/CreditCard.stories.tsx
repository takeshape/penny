import { Meta, StoryObj } from '@storybook/react';
import { CreditCard } from './CreditCard';

const meta: Meta<typeof CreditCard> = {
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

type Story = StoryObj<typeof CreditCard>;

export const Generic: Story = {
  args: {
    card: {
      ...card,
      brand: 'Generic'
    }
  }
};

export const GenericExpiresSoon = {
  args: {
    card: {
      ...card,
      brand: 'Generic',
      expiresSoon: true
    }
  }
};

export const GenericExpired = {
  args: {
    card: {
      ...card,
      brand: 'Generic',
      expiresSoon: true,
      expiryMonth: 1,
      expiryYear: 2020
    }
  }
};

export const Amex: Story = {
  args: {
    card: {
      ...card,
      brand: 'Amex'
    }
  }
};

export const Visa: Story = {
  args: {
    card: {
      ...card,
      brand: 'Visa'
    }
  }
};

export const Discover: Story = {
  args: {
    card: {
      ...card,
      brand: 'Discover'
    }
  }
};

export const DinersClub: Story = {
  args: {
    card: {
      ...card,
      brand: 'Diners Club'
    }
  }
};

export const Mastercard: Story = {
  args: {
    card: {
      ...card,
      brand: 'Mastercard'
    }
  }
};

export const PayPal: Story = {
  args: {
    card: {
      ...card,
      brand: 'PayPal'
    }
  }
};

export const Alipay: Story = {
  args: {
    card: {
      ...card,
      brand: 'Alipay'
    }
  }
};

export default meta;
