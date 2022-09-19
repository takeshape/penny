import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Shopify_FulfillmentDisplayStatus } from 'types/takeshape';
import { DeliveryDetails } from './DeliveryDetails';

const Meta: ComponentMeta<typeof DeliveryDetails> = {
  title: 'Features / Account Subscriptions / Actions / Delivery Details',
  component: DeliveryDetails,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof DeliveryDetails> = (args) => (
  <DeliveryDetails isOpen={true} onClose={() => {}} onReportIssue={() => {}} {...args} />
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
    displayStatus: 'FULFILLED' as Shopify_FulfillmentDisplayStatus,
    trackingInfo: {
      url: 'https://tools.usps.com/go/TrackConfirmAction_input?qtc_tLabels1=1234567891',
      number: '1234567891',
      company: 'USPS'
    }
  }
];

const order = {
  id: '123',
  fulfillments,
  shippingAddress,
  statusAt: '2022-09-15T10:10:00.000Z'
};

export const FulfillmentUnknown = Template.bind({});

FulfillmentUnknown.args = {
  order: {
    ...order,
    status: 'FULFILLMENT_UNKNOWN'
  }
};

export const FulfillmentAttemptedDelivery = Template.bind({});

FulfillmentAttemptedDelivery.args = {
  order: {
    ...order,
    status: 'FULFILLMENT_ATTEMPTED_DELIVERY'
  }
};

export const FulfillmentDelivered = Template.bind({});

FulfillmentDelivered.args = {
  order: {
    ...order,
    status: 'FULFILLMENT_DELIVERED'
  }
};

export const FulfillmentFailure = Template.bind({});

FulfillmentFailure.args = {
  order: {
    ...order,
    status: 'FULFILLMENT_FAILURE'
  }
};

export const FulfillmentCanceled = Template.bind({});

FulfillmentCanceled.args = {
  order: {
    ...order,
    status: 'FULFILLMENT_CANCELED'
  }
};

export const FulfillmentFulfilled = Template.bind({});

FulfillmentFulfilled.args = {
  order: {
    ...order,
    status: 'FULFILLMENT_FULFILLED'
  }
};

export const FulfillmentInTransit = Template.bind({});

FulfillmentInTransit.args = {
  order: {
    ...order,
    status: 'FULFILLMENT_IN_TRANSIT'
  }
};

export const FulfillmentNotDelivered = Template.bind({});

FulfillmentNotDelivered.args = {
  order: {
    ...order,
    status: 'FULFILLMENT_NOT_DELIVERED'
  }
};

export const FulfillmentOutForDelivery = Template.bind({});

FulfillmentOutForDelivery.args = {
  order: {
    ...order,
    status: 'FULFILLMENT_OUT_FOR_DELIVERY'
  }
};

export default Meta;
