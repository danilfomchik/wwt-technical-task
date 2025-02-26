import { useSelector } from 'react-redux'

import { Box } from '@chakra-ui/react'

import { selectFilters } from '@/redux/filters/selectors'

export const DataDisplay = () => {
	const filters = useSelector(selectFilters)

	return (
		<Box>
			{filters.map(filter => {
				return (
					<Box
						key={filter.id}
						pb={4}
					>
						<strong>{filter.id}</strong>
						{filter.optionsIds?.map(optionId => (
							<Box key={optionId}>{optionId}</Box>
						))}
					</Box>
				)
			})}
		</Box>
	)
}
