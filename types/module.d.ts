declare interface Workflow {
	aborted: false,
	activationFails: Set,
	actor: Actor5e,
	advantage: undefined,
	advantageSaves: Set,
	applicationTargets: Set<Token>,
	attackAdvAttribution: any,
	attackCardData: any,
	attackRollCount: number,
	attackRolled: boolean,
	bonusDamageDetail: undefined,
	bonusDamageHTML: null | string,
	bonusDamageRoll: null | Roll,
	bonusDamageTotal: undefined,
	capsLock: boolean,
	criticalSaves: Set,
	currentState: number,
	damageCardData: undefined,
	damageDetail: [],
	damageList: [],
	damageRoll: DamageRoll,
	damageRollCount: number,
	damageRollHTML: string
	damageRolled: boolean,
	damageTotal: number,
	defaultDamageType: string
	defenceRequests: {}
	defenceTimeouts: {}
	disadvantage: undefined
	disadvantageSaves: Set,
	displayHookId: null,
	displayId: string,
	isCritical: boolean,
	isFumble: boolean,
	isVersatile: boolean,
	item: Item5e,
	itemCardData: {}
	itemCardId: string
	itemId: string
	itemLevel: number
	itemRollToggle: boolean
	itemUuid: string
	shouldRollOtherDamage: boolean
	showCard: boolean
	stateList: []
	superSavers: Set,
	systemString: string
	targets: Set<Token>
	templateId?: string
	templateTargeting: boolean
	templateUuid?: string,
	token: Token,
	tokenId: string,
	tokenUuid: string,
	uuid: string,
	_id: string,
	damageFlavor: string,
	hasDAE: boolean | undefined,
	hasSave: boolean,
	id: string,
	otherDamageFormula: string,
	otherDamageItem: Item5e,
	saveItem: Item5e,
	shouldRollDamage: boolean,
	useActiveDefence: boolean,
	workflowType: string
}

declare global {
	const args: any[];
	const arguments: [{
		actor: Actor5e,
		args: [Workflow],
		canvas: Canvas,
		character: Actor5e | undefined,
		game: Game,
		scene: Scene,
		speaker: { scene: string, token: string, actor: string, alias: string }
		token: Token,
		ui: UI
	}, 'on' | 'off' | undefined];
}
