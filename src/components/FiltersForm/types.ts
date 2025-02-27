import { Dispatch, SetStateAction } from 'react'

import { FilterChoose } from '@api/types/Filter'
import { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter'

export interface IFiltersFormProps {
	isError: boolean
	isLoading: boolean
	filterItems: FilterChoose[]
	setPendingData: Dispatch<SetStateAction<SearchRequestFilter | null>>
	isOpen: boolean
	onClose: () => void
	onConfirmOpen: () => void
}
