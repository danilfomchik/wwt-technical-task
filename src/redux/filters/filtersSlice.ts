import { createSlice } from '@reduxjs/toolkit'

import { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter'

import { StorageKeys } from '@/services/types'

import { SliceNames } from '../types'
import { IFiltersState, TSetFiltersAction } from './types'

const reducers = {
	setFilters: (state: IFiltersState, action: TSetFiltersAction) => {
		state.filters = action.payload
		localStorage.setItem(
			StorageKeys.filterSelections,
			JSON.stringify(action.payload)
		)
	}
}

const savedValues = localStorage.getItem(StorageKeys.filterSelections)
const storedValues: SearchRequestFilter = savedValues
	? JSON.parse(savedValues)
	: []

const initialState: IFiltersState = {
	filters: storedValues
}

const filtersSlice = createSlice({
	name: SliceNames.filtersSlice,
	initialState,
	reducers
})

export const { setFilters } = filtersSlice.actions
export default filtersSlice
