import { RootState } from '../store'

export const selectFilters = (state: RootState) => state.filtersData.filters
