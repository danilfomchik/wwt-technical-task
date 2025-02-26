import { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter'

export interface IConfirmationProps {
	pendingData: SearchRequestFilter | null
	onFiltersClose: () => void
	onConfirmClose: () => void
	onFiltersOpen: () => void
}
