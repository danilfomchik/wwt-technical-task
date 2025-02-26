import { ControllerRenderProps, FieldValues } from 'react-hook-form'

import { FilterChooseOption } from '@api/types/Filter'

export interface ICkeckboxGroupProps {
	field: ControllerRenderProps<FieldValues, string>
	options: FilterChooseOption[]
	value: string[]
}
