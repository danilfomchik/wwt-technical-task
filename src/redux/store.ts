import { useDispatch } from 'react-redux'

import { combineReducers, configureStore } from '@reduxjs/toolkit'

import filtersSlice from './filters/filtersSlice'
import { PreloadedState, SliceNames } from './types'

const combinedReducer = combineReducers({
	[SliceNames.filtersSlice]: filtersSlice.reducer
})

export const setupStore = (preloadedState?: PreloadedState) => {
	return configureStore({
		reducer: combinedReducer,
		middleware: getDefaultMiddleware => getDefaultMiddleware(),
		preloadedState
	})
}

const store = setupStore()

export type AppStoreState = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof combinedReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
