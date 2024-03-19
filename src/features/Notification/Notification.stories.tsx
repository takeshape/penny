import { notificationAtom } from '@/store';
import { Meta, StoryObj } from '@storybook/react';
import { Notification } from './Notification';

const meta: Meta<typeof Notification> = {
  title: 'Features / Notification',
  component: Notification
};

type Story = StoryObj<typeof Notification>;

export const Info: Story = {
  parameters: {
    jotai: {
      atoms: {
        notification: notificationAtom
      },
      values: {
        notification: {
          title: 'Something Informational',
          body: 'Here is some useful info.',
          status: 'info'
        }
      }
    }
  }
};

export const Warn: Story = {
  parameters: {
    jotai: {
      atoms: {
        notification: notificationAtom
      },
      values: {
        notification: {
          title: 'Something Concerning',
          body: 'Here is some concerning info.',
          status: 'warn'
        }
      }
    }
  }
};

export const Success: Story = {
  parameters: {
    jotai: {
      atoms: {
        notification: notificationAtom
      },
      values: {
        notification: {
          title: 'Something Succesful',
          body: 'Here is some successful info!',
          status: 'success'
        }
      }
    }
  }
};

export const Error: Story = {
  parameters: {
    jotai: {
      atoms: {
        notification: notificationAtom
      },
      values: {
        notification: {
          title: 'Something Awful',
          body: 'Here is some terrible news.',
          status: 'error'
        }
      }
    }
  }
};

export const Disappearing: Story = {
  parameters: {
    jotai: {
      atoms: {
        notification: notificationAtom
      },
      values: {
        notification: {
          title: 'Something Vanishing',
          body: 'This message will self-destruct in 5 seconds.',
          status: 'success',
          showFor: 5000
        }
      }
    }
  }
};

export default meta;
