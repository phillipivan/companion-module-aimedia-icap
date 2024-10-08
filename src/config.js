import { Regex } from '@companion-module/base'
import { apiIds, choices } from './consts.js'

// Return config fields for web config
export function getConfigFields() {
	return [
		{
			type: 'textinput',
			id: 'company',
			label: 'Company',
			width: 12,
			regex: Regex.SOMETHING,
		},
		{
			type: 'textinput',
			id: 'user',
			label: 'Username',
			width: 12,
			regex: Regex.SOMETHING,
		},
		{
			type: 'textinput',
			id: 'pass',
			label: 'Password',
			width: 12,
			regex: Regex.SOMETHING,
		},
		{
			type: 'number',
			id: 'pollInterval',
			label: 'Poll Rate (s)',
			width: 6,
			default: 60,
			min: 1,
			max: 3600,
			range: true,
			step: 1,
		},
		{
			type: 'multidropdown',
			id: 'poll',
			label: 'Poll Data',
			witdth: 6,
			default: [apiIds.activitiesEncoders.id, apiIds.systemHealth.id],
			choices: choices.polling,
			minSelection: 1,
		},
		{
			type: 'checkbox',
			id: 'verbose',
			label: 'Verbose Logs',
			width: 6,
			default: false,
		},
	]
}
