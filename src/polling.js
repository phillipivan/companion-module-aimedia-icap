import { apiIds } from './consts.js'

export async function startPolling() {
	if (this.pollTimer) {
		clearTimeout(this.pollTimer)
	}
	await this.pollStatus()
	this.updateActions() // export actions
	this.updateFeedbacks() // export feedbacks
	this.updateVariableDefinitions() // export variable definitions
	this.updateVariableValues()
}

export function stopPolling() {
	if (this.pollTimer) {
		clearTimeout(this.pollTimer)
		delete this.pollTimer
		return true
	}
	return undefined
}

export async function pollStatus() {
	if (this.axios) {
		if (this.config.poll.includes(apiIds.accesscodes.id)) {
			await this.query_iCap(this.iCap.api.accesscodes, apiIds.accesscodes.label)
		}
		if (this.config.poll.includes(apiIds.activitiesCaptioners.id)) {
			await this.query_iCap(this.iCap.api.activeCaptioners, apiIds.activitiesCaptioners.label)
		}
		if (this.config.poll.includes(apiIds.activitiesEncoders.id)) {
			await this.query_iCap(this.iCap.api.activeEncoders, apiIds.activitiesEncoders.label)
		}
		if (this.config.poll.includes(apiIds.captioncast.id)) {
			await this.query_iCap(this.iCap.api.captionCast, apiIds.captioncast.label)
		}
		if (this.config.poll.includes(apiIds.providers.id)) {
			await this.query_iCap(this.iCap.api.providers, apiIds.providers.label)
		}
		if (this.config.poll.includes(apiIds.email.id)) {
			await this.query_iCap(this.iCap.api.emailNotices, apiIds.email.label)
		}
		if (this.config.poll.includes(apiIds.encoderActivity.id)) {
			await this.query_iCap(this.iCap.api.encoderActivity, apiIds.encoderActivity.label)
		}
		if (this.config.poll.includes(apiIds.encoderPermissions.id)) {
			await this.query_iCap(this.iCap.api.encoderPermissions, apiIds.encoderPermissions.label)
		}
		//logs - requires extra args
		if (this.config.poll.includes(apiIds.logs.id)) {
			//await this.query_iCap(this.iCap.api.logs, apiIds.logs.label)
		}
		//sessionIDs - requires extra args
		if (this.config.poll.includes(apiIds.sessionIDs.id)) {
			//await this.query_iCap(this.iCap.api.sessionIDs, apiIds.sessionIDs.label)
		}
		if (this.config.poll.includes(apiIds.sharedEncoders.id)) {
			await this.query_iCap(this.iCap.api.sharedEncoders, apiIds.sharedEncoders.label)
		}
		if (this.config.poll.includes(apiIds.systemHealth.id)) {
			await this.query_iCap(this.iCap.api.systemHealth, apiIds.systemHealth.label)
		}
		//uptime - requires extra args  - requires iCap Broadcast Plus plan
		if (this.config.poll.includes(apiIds.uptime.id)) {
			//await this.query_iCap(this.iCap.api.uptime, apiIds.uptime.label)
		}
		if (this.config.poll.includes(apiIds.users.id)) {
			await this.query_iCap(this.iCap.api.users, apiIds.users.label)
		}
	}
	if (this.config.pollInterval > 0) {
		this.pollTimer = setTimeout(() => {
			this.pollStatus()
		}, this.config.pollInterval * 1000)
		return true
	} else {
		delete this.pollTimer
		return undefined
	}
}
