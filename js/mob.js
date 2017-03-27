var Mob = {
	// Unique ID associated with this enemy
	ID:000001, 
	// Details object containing info about this enemy
	Details: { 
		// Name/Title of this enemy
		Name:"Green Snail", 
		// Short description of this enemy
		Description:"A small, harmless green snail.", 			
		// Formal level declaration for this monster
		Level:01, 
		// Amount of experience recieved by killing this enemy
		EXP:100,
		// Amount of currency dropped by killing this enemy
		Wealth:5,
		// Amount of damage this enemy can take before being considered 'dead'
		HP:100,
		// Amount of energy this enemy has to use skills
		MP:0,
		// Baseline defense rating for this enemy
		Defense:0,
		// Damage done to players when coming in contact with this enemy
		Attack:5,
		// Baseline damage rating for this enemy's skills
		MAttack:0,
		// Baseline STR rating for this enemy
		Strength:1,
		// Baseline DEX rating for this enemy
		Dexterity:1,
		// Baseline INT rating for this enemy
		Intelligence:1,
		// Baseline LUK rating for this enemy		
		Luck:1			
	},
	// Collection of animations for this enemy
	Animations:[
		{
			Type:"Idle",
			Path:"/mob/snail/idle/"
		},
		{
			Type:"Walking",
			Path:"/mob/snail/walk/"
		},
		{
			Type:"Hit",
			Path:"/mob/snail/hit/"
		}
	],
	// Loot table declaration for this enemy
	Loot:[
		{
			// ID of item to be dropped on death
			Item:001000,
			// % chance of this item dropping on death
			Chance:40
		}
	]	
};
