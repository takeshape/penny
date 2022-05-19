export type NotificationMessage = {
  title?: string;
  body?: string;
  status?: 'info' | 'warn' | 'error' | 'success';
  showFor?: number;
};
