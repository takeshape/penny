import { Meta, StoryObj } from '@storybook/react';
import { Shopify_FulfillmentDisplayStatus } from 'types/takeshape';
import { SubscriptionOrder } from '../../types';
import { ShipmentStatus } from './ShipmentStatus';

const shippingAddress = {
  firstName: 'Michael',
  lastName: 'Shick',
  address1: '112 West 34th Street',
  address2: '',
  company: '',
  city: 'New York',
  province: 'New York',
  provinceCode: 'NY',
  country: 'United States',
  zip: '10120',
  phone: ''
};

const fulfillments = [
  {
    createdAt: '2022-09-13T17:08:22Z',
    updatedAt: '2022-09-13T17:08:22Z',
    deliveredAt: '2022-09-13T17:08:22Z',
    estimatedDeliveryAt: '2022-09-13T17:08:22Z',
    inTransitAt: '2022-09-13T17:08:22Z',
    displayStatus: 'FULFILLED' as Shopify_FulfillmentDisplayStatus,
    trackingInfo: {
      url: 'https://tools.usps.com/go/TrackConfirmAction_input?qtc_tLabels1=1234567891',
      number: '1234567891',
      company: 'USPS'
    }
  }
];

const order: Pick<SubscriptionOrder, 'id' | 'statusAt' | 'chargeScheduledAt' | 'fulfillments' | 'shippingAddress'> = {
  id: '123',
  fulfillments,
  shippingAddress,
  chargeScheduledAt: '2022-09-15T10:10:00.000Z',
  statusAt: '2022-09-15T10:10:00.000Z'
};

const meta: Meta<typeof ShipmentStatus> = {
  title: 'Features / Account Subscriptions / Overview / Shipment Status',
  component: ShipmentStatus,
  parameters: {
    layout: 'centered'
  }
};

type Story = StoryObj<typeof ShipmentStatus>;

export const ChargeSuccess: Story = {
  args: {
    order: {
      ...order,
      status: 'CHARGE_SUCCESS'
    }
  }
};

export const ChargeQueued: Story = {
  args: {
    order: {
      ...order,
      status: 'CHARGE_QUEUED'
    }
  }
};

export const ChargeSkipped: Story = {
  args: {
    order: {
      ...order,
      status: 'CHARGE_SKIPPED'
    }
  }
};

export const ChargeCanceled: Story = {
  args: {
    order: {
      ...order,
      status: 'CHARGE_CANCELLED'
    }
  }
};

export const ChargeRefunded: Story = {
  args: {
    order: {
      ...order,
      status: 'CHARGE_REFUNDED'
    }
  }
};

export const ChargePendingManualPayment: Story = {
  args: {
    order: {
      ...order,
      status: 'CHARGE_PENDING_MANUAL_PAYMENT'
    }
  }
};

export const ChargePending: Story = {
  args: {
    order: {
      ...order,
      status: 'CHARGE_PENDING'
    }
  }
};

export const ChargeError: Story = {
  args: {
    order: {
      ...order,
      status: 'CHARGE_ERROR'
    }
  }
};

export const ChargeUnknown: Story = {
  args: {
    order: {
      ...order,
      status: 'CHARGE_UNKNOWN'
    }
  }
};

export const FulfillmentUnknown: Story = {
  args: {
    order: {
      ...order,
      status: 'FULFILLMENT_UNKNOWN'
    }
  }
};

export const FulfillmentAttemptedDelivery: Story = {
  args: {
    order: {
      ...order,
      status: 'FULFILLMENT_ATTEMPTED_DELIVERY'
    }
  }
};

export const FulfillmentDelivered: Story = {
  args: {
    order: {
      ...order,
      status: 'FULFILLMENT_DELIVERED'
    }
  }
};

export const FulfillmentFailure: Story = {
  args: {
    order: {
      ...order,
      status: 'FULFILLMENT_FAILURE'
    }
  }
};

export const FulfillmentCanceled: Story = {
  args: {
    order: {
      ...order,
      status: 'FULFILLMENT_CANCELED'
    }
  }
};

export const FulfillmentFulfilled: Story = {
  args: {
    order: {
      ...order,
      status: 'FULFILLMENT_FULFILLED'
    }
  }
};

export const FulfillmentInTransit: Story = {
  args: {
    order: {
      ...order,
      status: 'FULFILLMENT_IN_TRANSIT'
    }
  }
};

export const FulfillmentNotDelivered: Story = {
  args: {
    order: {
      ...order,
      status: 'FULFILLMENT_NOT_DELIVERED'
    }
  }
};

export const FulfillmentOutForDelivery: Story = {
  args: {
    order: {
      ...order,
      status: 'FULFILLMENT_OUT_FOR_DELIVERY'
    }
  }
};

export default meta;
