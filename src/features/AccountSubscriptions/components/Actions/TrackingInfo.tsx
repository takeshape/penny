import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import Button from 'components/Button/Button';
import { Modal, ModalProps } from 'components/Modal/Modal';
import { format } from 'date-fns';
import { getOrderStatusDisplay } from 'features/AccountSubscriptions/utils';
import { SubscriptionOrder } from '../../types';

export interface TrackingInfoProps extends ModalProps {
  order: Pick<SubscriptionOrder, 'shippingAddress' | 'status' | 'fulfillments'>;
  onReportIssue: () => void;
}

export const TrackingInfo = ({ isOpen, onClose, onReportIssue, order }: TrackingInfoProps) => {
  const { shippingAddress, status } = order;
  const { trackingInfo, deliveredAt, estimatedDeliveryAt, inTransitAt } = order.fulfillments?.[0] ?? {};
  const displayStatus = getOrderStatusDisplay(status);

  let notesText1 = '';
  let notesText2 = '';

  if (inTransitAt) {
    notesText1 = `In transit at ${format(new Date(estimatedDeliveryAt), 'PPP')}`;
  }

  if (estimatedDeliveryAt) {
    notesText2 = `Estimated delivery on ${format(new Date(estimatedDeliveryAt), 'PPP')}`;
  }

  if (deliveredAt) {
    notesText1 = `Delivered ${format(new Date(deliveredAt), 'PPPpp')}`;
    notesText2 = '';
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className=" w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-12 lg:col-span-12">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">Delivery details</h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Order delivery details and tracking info.</p>
          </div>

          <div className="mt-10">
            <div className="md:h-[400px] overflow-y-scroll p-[1px] flex flex-col">
              <section aria-labelledby="tracking-info-content" className="flex flex-col h-full prose">
                <div className="flex-grow grid sm:grid-cols-2 h-full font-medium text-body-600">
                  <div>
                    <h4>Status</h4>
                    <p>{displayStatus.text}</p>
                    {trackingInfo && (
                      <>
                        <h4>Carrier</h4>
                        <p>{trackingInfo.company}</p>
                        <h4>Tracking number</h4>
                        <p>
                          <a
                            className="text-accent-600 no-underline"
                            href={trackingInfo.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {trackingInfo.number}
                          </a>
                        </p>
                        {(notesText1 || notesText2) && <h4>Notes</h4>}
                        {notesText1 && <p>{notesText1}</p>}
                        {notesText2 && <p>{notesText2}</p>}
                      </>
                    )}
                  </div>
                  <div>
                    <h4>Shipping Address</h4>
                    <p>
                      <span className="block">
                        {shippingAddress.firstName} {shippingAddress.lastName}
                      </span>
                      <span className="block mt-1">{shippingAddress.address1}</span>
                      <span className="block mt-1">{shippingAddress.address2}</span>
                      <span className="block mt-1">
                        {shippingAddress.city}, {shippingAddress.province}
                      </span>
                      <span className="block mt-1">{shippingAddress.zip}</span>
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="mt-8 flex justify-end gap-2">
            <Button color="secondary" type="button" onClick={onReportIssue}>
              <div className="flex flex-row gap-2 items-center justify-center">
                <ExclamationTriangleIcon className="h-5 w-5" /> Report an Issue
              </div>
            </Button>
            <Button color="primary" type="button" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
