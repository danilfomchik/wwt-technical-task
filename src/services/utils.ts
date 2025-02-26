import { FieldValues } from 'react-hook-form'

import { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter'

// converts filters data from SearchRequestFilter to rhf-readable format (Record<string, string[]>)
const normalizeFiltersData = (filters: SearchRequestFilter) => {
	const normizedFiltersData: Record<string, string[]> = {}

	filters.forEach(filter => {
		normizedFiltersData[filter.id] = filter.optionsIds
	})

	return normizedFiltersData
}

// filter form fields without values
const normalizeFormsData = (formFields: FieldValues) => {
	const normizedFormData = Object.keys(formFields).reduce(
		(acc: Record<string, string[]>, i) => {
			if (formFields[i].length > 0) {
				acc[i] = formFields[i]
			}
			return acc
		},
		{}
	)

	return normizedFormData
}

// gets sorted array of all form values
const getFieldValues = (fields: FieldValues) => {
	const fieldKeys = Object.keys(fields)
	const fieldValues = fieldKeys.map(key => fields[key])

	return fieldValues.flat().sort()
}

const compareTwoArrays = (array1: string[], array2: string[]) => {
	return JSON.stringify(array1) !== JSON.stringify(array2)
}

// checks selected filters and form fileds values, if they are not equal --> form is dirty
export const checkIsDirtyForm = (
	filters: SearchRequestFilter,
	formFields: FieldValues
) => {
	const normizedFiltersData: Record<string, string[]> =
		normalizeFiltersData(filters)
	const normizedFormData: Record<string, string[]> =
		normalizeFormsData(formFields)

	const filterValuesArray: string[] = getFieldValues(normizedFiltersData)
	const fieldValuesArray: string[] = getFieldValues(normizedFormData)

	return compareTwoArrays(filterValuesArray, fieldValuesArray)
}
