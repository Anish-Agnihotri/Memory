// Realm scheme setup
export const memory_schema = [
	{
		name: 'Memory',
		primaryKey: 'id',
		properties: {
			id: {type: 'int', indexed: true}, // Memories indexed by id
			title: 'string', // String title
			date: 'date', // Date object, memory date
			entry: {type: 'string', optional: true}, // Actual entry content, optional
			isSpecial: 'bool', // Is it a memory or another diary entry?
			emotion: 'int?[]', // Emotion value from utils directory
			image: {type: 'string', optional: true}, // Optional image path (documents folder)
		},
	},
];
