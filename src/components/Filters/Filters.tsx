import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Box, Button, useDisclosure } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import { FilterChoose } from '@api/types/Filter'
import { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter'

import { Confirmation } from '@components/Confirmation'
import { DataDisplay } from '@components/DataDisplay'
import { FiltersForm } from '@components/FiltersForm'
import { Modal } from '@components/Modal'

export const Filters = () => {
	const [pendingData, setPendingData] = useState<SearchRequestFilter | null>(
		null
	)

	const { t } = useTranslation('filter')
	const { data: filterItems } = useQuery({
		queryKey: ['filtersData'],
		queryFn: (): Promise<FilterChoose[]> =>
			fetch('/src/temp/filterData.json')
				.then(res => res.json())
				.then(data => data.filterItems)
	})

	const {
		isOpen: isFiltersOpen,
		onOpen: onFiltersOpen,
		onClose: onFiltersClose
	} = useDisclosure()
	const {
		isOpen: isConfirmOpen,
		onOpen: onConfirmOpen,
		onClose: onConfirmClose
	} = useDisclosure()

	return (
		<Box
			py={4}
			display="flex"
			gap={4}
			flexDirection="column"
		>
			<Box
				display="flex"
				justifyContent="center"
			>
				<Button
					onClick={onFiltersOpen}
					colorScheme="brand"
					size="lg"
				>
					{t('open filters')}
				</Button>

				{isFiltersOpen && (
					<Modal
						modalTitle="Filter"
						isOpen={isFiltersOpen}
						onClose={onFiltersClose}
					>
						<FiltersForm
							filterItems={filterItems || []}
							setPendingData={setPendingData}
							isOpen={isFiltersOpen}
							onClose={onFiltersClose}
							onConfirmOpen={onConfirmOpen}
						/>
					</Modal>
				)}

				{isConfirmOpen && (
					<Modal
						modalTitle="Do you want to apply new filter"
						isOpen={isConfirmOpen}
						onClose={onConfirmClose}
						size="md"
					>
						<Confirmation
							pendingData={pendingData}
							onConfirmClose={onConfirmClose}
							onFiltersClose={onFiltersClose}
							onFiltersOpen={onFiltersOpen}
						/>
					</Modal>
				)}
			</Box>

			<DataDisplay />
		</Box>
	)
}
