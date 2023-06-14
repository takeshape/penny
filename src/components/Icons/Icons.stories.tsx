import { Meta } from '@storybook/react';
import * as Icons from './Icons';

const meta: Meta<typeof Icons> = {
  title: 'Components / Icons',
  parameters: {
    layout: 'centered'
  }
};

export const Facebook = () => <Icons.Facebook className="h-12 w-12" />;

export const Instagram = () => <Icons.Instagram className="h-12 w-12" />;

export const Twitter = () => <Icons.Twitter className="h-12 w-12" />;

export const GitHub = () => <Icons.GitHub className="h-12 w-12" />;

export const Dribbble = () => <Icons.Dribbble className="h-12 w-12" />;

export default meta;
