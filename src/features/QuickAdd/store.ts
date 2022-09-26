import { atomWithReset } from 'jotai/utils';
import { QuickAdd } from './types';

export const quickAddAtom = atomWithReset<QuickAdd | null>(null);
