import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { Box, Button, Heading } from '@chakra-ui/react'

import { FilterType } from '@api/types/Filter'
import { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter'

import { selectFilters } from '@/redux/filters/selectors'
import { checkIsDirtyForm } from '@/services/utils'
import CheckboxGroup from '@components/CheckboxGroup/CheckboxGroup'

import { IFiltersFormProps } from './types'

export const FiltersForm = ({
	filterItems,
	setPendingData,
	isOpen,
	onClose,
	onConfirmOpen
}: IFiltersFormProps) => {
	const filters = useSelector(selectFilters)
	const { control, handleSubmit, watch, reset } = useForm()
	const { t } = useTranslation('filter')

	const formFields = watch()
	const isDirtyForm = checkIsDirtyForm(filters, formFields)

	// data preparation
	const onPrepareSave = (data: Record<string, string[]>) => {
		const formattedFilters: SearchRequestFilter = Object.keys(data)
			.filter(key => data[key].length > 0)
			.map(key => ({
				id: key,
				type: FilterType.OPTION,
				optionsIds: data[key]
			}))

		// setting pending data and open confirmation form
		setPendingData(formattedFilters)
		onClose()
		onConfirmOpen()
	}

	const setDefaultValues = () => {
		const defaultValues: Record<string, string[]> = {}

		filters.forEach(filter => {
			defaultValues[filter.id] = filter.optionsIds || []
		})

		filterItems.forEach((item: { id: string }) => {
			if (!defaultValues[item.id]) {
				defaultValues[item.id] = []
			}
		})

		return defaultValues
	}

	useEffect(() => {
		if (!isOpen || !filterItems) {
			return
		}

		// set default values of form
		const defaultValues = setDefaultValues()

		// update form
		reset(defaultValues)
	}, [isOpen, filterItems, reset])

	return (
		<Box
			borderTop={'2px solid #B4B4B4'}
			pt={8}
		>
			<form onSubmit={handleSubmit(onPrepareSave)}>
				{filterItems.map(filter => {
					const value = watch(filter.id) || []

					return (
						<Box
							key={filter.id}
							py={8}
							borderBottom={'2px solid #B4B4B4'}
						>
							<Heading
								size="md"
								fontWeight={500}
								lineHeight={1.2}
								pb={6}
							>
								{filter.name}
							</Heading>
							<Controller
								name={filter.id}
								control={control}
								defaultValue={[]}
								render={({ field }) => (
									<CheckboxGroup
										field={field}
										options={filter.options}
										value={value}
									/>
								)}
							/>
						</Box>
					)
				})}

				<Box
					display="flex"
					justifyContent={'center'}
					pt={8}
				>
					<Button
						disabled={!isDirtyForm}
						width={184}
						colorScheme="brand"
						size="lg"
						type="submit"
						onClick={handleSubmit(onPrepareSave)}
					>
						{t('apply')}
					</Button>
				</Box>
			</form>
		</Box>
	)
}
