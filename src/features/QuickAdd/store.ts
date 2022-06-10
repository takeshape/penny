import { atomWithReset } from 'jotai/utils';
import type { QuickAdd } from './types';

export const quickAddAtom = atomWithReset<QuickAdd>(null);
