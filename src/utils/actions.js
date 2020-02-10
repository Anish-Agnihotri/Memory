import {database} from '../../index';

export const createMemory = async data => {
	await database.action(async () => {
		await database.collections.get('memories').create(memory => {
			memory.date = data.date;
			memory.entry = data.entry;
			memory.image = data.image;
			memory.isSpecial = data.isSpecial;
			memory.emotion = data.emotion;
		});
	});
};
