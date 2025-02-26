import { useTranslation } from 'react-i18next'

import { Box, Button } from '@chakra-ui/react'

import { setFilters } from '@/redux/filters/filtersSlice'
import { useAppDispatch } from '@/redux/store'

import { IConfirmationProps } from './types'

export const Confirmation = ({
	pendingData,
	onConfirmClose,
	onFiltersClose,
	onFiltersOpen
}: IConfirmationProps) => {
	const dispatch = useAppDispatch()
	const { t } = useTranslation('filter')

	const onConfirmSave = () => {
		if (pendingData) {
			dispatch(setFilters(pendingData))
		}

		onConfirmClose()
		onFiltersClose()
	}

	const onConfirmReject = () => {
		onConfirmClose()
		onFiltersOpen()
	}

	return (
		<Box
			display="flex"
			justifyContent="center"
			flexWrap="wrap"
			gap={8}
			margin="0 auto"
			px={'7px'}
		>
			<Button
				onClick={onConfirmReject}
				flex="1"
				variant="ghost"
				size="lg"
				minW={200}
				maxW={280}
			>
				{t('reject filters')}
			</Button>
			<Button
				colorScheme="brand"
				onClick={onConfirmSave}
				flex="1"
				size="lg"
				minW={200}
				maxW={280}
			>
				{t('apply filters')}
			</Button>
		</Box>
	)
}
