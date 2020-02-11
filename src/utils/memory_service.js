import Realm from 'realm';

const memory_schema = [
	{
		name: 'Memory',
		primaryKey: 'id',
		properties: {
			id: {type: 'int', indexed: true},
			title: 'string',
			date: 'date',
			entry: 'string',
			isSpecial: 'bool',
			emotion: 'int',
			image: 'string',
		},
	},
];

const memory_storage = new Realm({
	schema: memory_schema,
	schemaVersion: 3,
	migration: function(oldRealm, newRealm) {
		newRealm.deleteAll();
	},
});

export function addMemory(title, date, entry, image, isSpecial, emotion) {
	memory_storage.write(() => {
		var id = memory_storage.objects('Memory').length + 1;

		memory_storage.create('Memory', {
			id: id,
			title: title,
			date: date,
			entry: entry,
			isSpecial: isSpecial,
			emotion: emotion,
			image: image,
		});
	});
}
