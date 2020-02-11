export const memory_schema = [
	{
		name: 'Memory',
		primaryKey: 'id',
		properties: {
			id: {type: 'int', indexed: true},
			title: 'string',
			date: 'date',
			entry: {type: 'string', optional: true},
			isSpecial: 'bool',
			emotion: 'int',
			image: {type: 'string', optional: true},
		},
	},
];
