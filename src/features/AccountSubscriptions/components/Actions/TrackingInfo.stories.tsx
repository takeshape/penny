import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TrackingInfo } from './TrackingInfo';

const Meta: ComponentMeta<typeof TrackingInfo> = {
  title: 'Features / Account Subscriptions / Actions / Tracking Info',
  component: TrackingInfo,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof TrackingInfo> = (args) => (
  <TrackingInfo isOpen={true} onClose={() => {}} onReportIssue={() => {}} {...args} />
);

const shippingAddress = {
  firstName: 'Michael',
  lastName: 'Shick',
  address1: '112 West 34th Street',
  address2: '',
  company: null,
  city: 'New York',
  province: 'New York',
  provinceCode: 'NY',
  country: 'United States',
  zip: '10120',
  phone: null
};

const fulfillments = [
  {
    updatedAt: '2022-09-13T17:08:22Z',
    deliveredAt: '2022-09-13T17:08:22Z',
    estimatedDeliveryAt: '2022-09-13T17:08:22Z',
    inTransitAt: '2022-09-13T17:08:22Z',
    displayStatus: 'FULFILLED',
    trackingInfo: {
      url: 'https://tools.usps.com/go/TrackConfirmAction_input?qtc_tLabels1=1234567891',
      number: '1234567891',
      company: 'USPS'
    }
  }
];

export const FulfillmentUnknown = Template.bind({});

FulfillmentUnknown.args = {
  order: {
    status: 'FULFILLMENT_UNKNOWN',
    statusAt: '2022-09-15T10:10:00.000Z',
    shippingAddress,
    fulfillments
  }
};

export const FulfillmentAttemptedDelivery = Template.bind({});

FulfillmentAttemptedDelivery.args = {
  order: {
    status: 'FULFILLMENT_ATTEMPTED_DELIVERY',
    statusAt: '2022-09-15T10:10:00.000Z',
    shippingAddress,
    fulfillments
  }
};

export const FulfillmentDelivered = Template.bind({});

FulfillmentDelivered.args = {
  order: {
    status: 'FULFILLMENT_DELIVERED',
    statusAt: '2022-09-15T10:10:00.000Z',
    shippingAddress,
    fulfillments
  }
};

export const FulfillmentFailure = Template.bind({});

FulfillmentFailure.args = {
  order: {
    status: 'FULFILLMENT_FAILURE',
    statusAt: '2022-09-15T10:10:00.000Z',
    shippingAddress,
    fulfillments
  }
};

export const FulfillmentCanceled = Template.bind({});

FulfillmentCanceled.args = {
  order: {
    status: 'FULFILLMENT_CANCELED',
    statusAt: '2022-09-15T10:10:00.000Z',
    shippingAddress,
    fulfillments
  }
};

export const FulfillmentFulfilled = Template.bind({});

FulfillmentFulfilled.args = {
  order: {
    status: 'FULFILLMENT_FULFILLED',
    statusAt: '2022-09-15T10:10:00.000Z',
    shippingAddress,
    fulfillments
  }
};

export const FulfillmentInTransit = Template.bind({});

FulfillmentInTransit.args = {
  order: {
    status: 'FULFILLMENT_IN_TRANSIT',
    statusAt: '2022-09-15T10:10:00.000Z',
    shippingAddress,
    fulfillments
  }
};

export const FulfillmentNotDelivered = Template.bind({});

FulfillmentNotDelivered.args = {
  order: {
    status: 'FULFILLMENT_NOT_DELIVERED',
    statusAt: '2022-09-15T10:10:00.000Z',
    shippingAddress,
    fulfillments
  }
};

export const FulfillmentOutForDelivery = Template.bind({});

FulfillmentOutForDelivery.args = {
  order: {
    status: 'FULFILLMENT_OUT_FOR_DELIVERY',
    statusAt: '2022-09-15T10:10:00.000Z',
    shippingAddress,
    fulfillments
  }
};

export default Meta;
