import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ShipmentStatus } from './ShipmentStatus';

const Meta: ComponentMeta<typeof ShipmentStatus> = {
  title: 'Features / Account Subscriptions / Overview / Shipment Status',
  component: ShipmentStatus,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof ShipmentStatus> = (args) => <ShipmentStatus {...args} />;

export const ChargeSuccess = Template.bind({});

ChargeSuccess.args = {
  order: {
    status: 'CHARGE_SUCCESS',
    statusAt: '2022-09-15T10:10:00.000Z'
  }
};

export const ChargeQueued = Template.bind({});

ChargeQueued.args = {
  order: {
    status: 'CHARGE_QUEUED',
    statusAt: '2022-09-15T10:10:00.000Z'
  }
};

export const ChargeSkipped = Template.bind({});

ChargeSkipped.args = {
  order: {
    status: 'CHARGE_SKIPPED',
    statusAt: '2022-09-15T10:10:00.000Z'
  }
};

export const ChargeCanceled = Template.bind({});

ChargeCanceled.args = {
  order: {
    status: 'CHARGE_CANCELLED',
    statusAt: '2022-09-15T10:10:00.000Z'
  }
};

export const ChargeRefunded = Template.bind({});

ChargeRefunded.args = {
  order: {
    status: 'CHARGE_REFUNDED',
    statusAt: '2022-09-15T10:10:00.000Z'
  }
};

export const ChargePendingManualPayment = Template.bind({});

ChargePendingManualPayment.args = {
  order: {
    status: 'CHARGE_PENDING_MANUAL_PAYMENT',
    statusAt: '2022-09-15T10:10:00.000Z'
  }
};

export const ChargePending = Template.bind({});

ChargePending.args = {
  order: {
    status: 'CHARGE_PENDING',
    statusAt: '2022-09-15T10:10:00.000Z'
  }
};

export const ChargeError = Template.bind({});

ChargeError.args = {
  order: {
    status: 'CHARGE_ERROR',
    statusAt: '2022-09-15T10:10:00.000Z'
  }
};

export const ChargeUnknown = Template.bind({});

ChargeUnknown.args = {
  order: {
    status: 'CHARGE_UNKNOWN',
    statusAt: '2022-09-15T10:10:00.000Z'
  }
};

export const FulfillmentUnknown = Template.bind({});

FulfillmentUnknown.args = {
  order: {
    status: 'FULFILLMENT_UNKNOWN',
    statusAt: '2022-09-15T10:10:00.000Z'
  }
};

export const FulfillmentAttemptedDelivery = Template.bind({});

FulfillmentAttemptedDelivery.args = {
  order: {
    status: 'FULFILLMENT_ATTEMPTED_DELIVERY',
    statusAt: '2022-09-15T10:10:00.000Z'
  }
};

export const FulfillmentDelivered = Template.bind({});

FulfillmentDelivered.args = {
  order: {
    status: 'FULFILLMENT_DELIVERED',
    statusAt: '2022-09-15T10:10:00.000Z'
  }
};

export const FulfillmentFailure = Template.bind({});

FulfillmentFailure.args = {
  order: {
    status: 'FULFILLMENT_FAILURE',
    statusAt: '2022-09-15T10:10:00.000Z'
  }
};

export const FulfillmentCanceled = Template.bind({});

FulfillmentCanceled.args = {
  order: {
    status: 'FULFILLMENT_CANCELED',
    statusAt: '2022-09-15T10:10:00.000Z'
  }
};

export const FulfillmentFulfilled = Template.bind({});

FulfillmentFulfilled.args = {
  order: {
    status: 'FULFILLMENT_FULFILLED',
    statusAt: '2022-09-15T10:10:00.000Z'
  }
};

export const FulfillmentInTransit = Template.bind({});

FulfillmentInTransit.args = {
  order: {
    status: 'FULFILLMENT_IN_TRANSIT',
    statusAt: '2022-09-15T10:10:00.000Z'
  }
};

export const FulfillmentNotDelivered = Template.bind({});

FulfillmentNotDelivered.args = {
  order: {
    status: 'FULFILLMENT_NOT_DELIVERED',
    statusAt: '2022-09-15T10:10:00.000Z'
  }
};

export const FulfillmentOutForDelivery = Template.bind({});

FulfillmentOutForDelivery.args = {
  order: {
    status: 'FULFILLMENT_OUT_FOR_DELIVERY',
    statusAt: '2022-09-15T10:10:00.000Z'
  }
};

export default Meta;
