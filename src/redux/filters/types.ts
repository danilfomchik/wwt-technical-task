import { PayloadAction } from '@reduxjs/toolkit'

import { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter'

export interface IFiltersState {
	filters: SearchRequestFilter
}

export type TSetFiltersAction = PayloadAction<SearchRequestFilter>
