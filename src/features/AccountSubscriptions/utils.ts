import { DeliveryScheduleOption } from './types';

export function formatDeliverySchedule({ interval, intervalCount }: DeliveryScheduleOption): string {
  return `${intervalCount} ${interval.toLocaleLowerCase()}(s)`;
}
