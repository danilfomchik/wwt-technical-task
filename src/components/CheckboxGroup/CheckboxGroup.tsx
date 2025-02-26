import { memo } from 'react'

import {
	Checkbox,
	CheckboxGroupProps,
	Grid,
	GridItem,
	CheckboxGroup as MuiCheckboxGroup,
	Stack
} from '@chakra-ui/react'

import { ICkeckboxGroupProps } from './types'

const CheckboxGroup = ({
	field,
	options,
	value,
	...restProps
}: ICkeckboxGroupProps & CheckboxGroupProps) => {
	return (
		<MuiCheckboxGroup
			value={value}
			onChange={field.onChange}
			{...restProps}
		>
			<Stack>
				<Grid
					templateColumns={'repeat(auto-fill, minmax(300px, 1fr));'}
					gap={4}
				>
					{options.map(option => (
						<GridItem key={option.id}>
							<Checkbox
								key={option.id}
								value={option.id}
							>
								{option.name}
							</Checkbox>
						</GridItem>
					))}
				</Grid>
			</Stack>
		</MuiCheckboxGroup>
	)
}

export default memo(CheckboxGroup)
