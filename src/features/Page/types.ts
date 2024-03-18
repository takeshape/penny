import { GetPageSlugsResponse, PageGetPageResponse } from '@/types/takeshape';
import { NonNullablePath } from '@/types/util';
import { Get } from 'type-fest';

export type PageSummaryItems = Get<GetPageSlugsResponse, ['pageList', 'items']>;
export type ResponsePage = NonNullablePath<PageGetPageResponse, ['pageList', 'items', 0]>;
