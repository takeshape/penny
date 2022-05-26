import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { notificationAtom } from 'store';
import { Notification } from './Notification';

const Meta: ComponentMeta<typeof Notification> = {
  title: 'Features / Notification',
  component: Notification
};

const Template: ComponentStory<typeof Notification> = (args) => <Notification {...args} />;

export const Info = Template.bind({});
Info.parameters = {
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
};

export const Warn = Template.bind({});
Warn.parameters = {
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
};

export const Success = Template.bind({});
Success.parameters = {
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
};

export const Error = Template.bind({});
Error.parameters = {
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
};

export const Disappearing = Template.bind({});
Disappearing.parameters = {
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
};

export default Meta;
