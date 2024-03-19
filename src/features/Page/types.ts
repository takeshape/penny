import { PageGetPageResponse } from '@/types/takeshape';
import { NonNullablePath } from '@/types/util';

export type ResponsePage = NonNullablePath<PageGetPageResponse, ['pageList', 'items', 0]>;
