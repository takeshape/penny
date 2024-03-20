import { atomWithListeners } from '@/lib/jotai/atomWithListeners';
import { QuickAdd } from './types';

export const [quickAddAtom, useQuickAddAtomListener] = atomWithListeners<QuickAdd | null>(null);
