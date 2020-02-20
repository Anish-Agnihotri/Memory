import {memory_storage} from './memory_service';

export function addMemory(title, date, entry, image, isSpecial, emotions) {
	memory_storage.write(() => {
		var id = memory_storage.objects('Memory').max('id') + 1;
		if (isNaN(id)) {
			id = 0;
		}

		memory_storage.create('Memory', {
			id: id,
			title: title,
			date: date,
			entry: entry,
			isSpecial: isSpecial,
			emotion: emotions,
			image: image,
		});
	});
}

export function returnMemories(onlySpecial) {
	if (onlySpecial) {
		return memory_storage
			.objects('Memory')
			.sorted('date', true) // Descending order by date
			.filtered('isSpecial = true');
	} else {
		return memory_storage.objects('Memory').sorted('date', true);
	}
}

export function returnOnlyMemoryDates() {
	let returnedDates = [];
	let memories = memory_storage.objects('Memory');
	for (let i = 0; i < memories.length; i++) {
		let isSpecial = memories[i].isSpecial;
		returnedDates.push({
			date: memories[i].date,
			dots: [
				{
					key: i,
					color: isSpecial ? '#FF836B' : '#006565',
					selectedDotColor: isSpecial ? '#FF836B' : '#006565',
				},
			],
		});
	}
	return returnedDates;
}

export function returnMonthlyMemories(startDate, endDate) {
	let filteredMemories = memory_storage
		.objects('Memory')
		.filtered('date >= $0 && date < $1', startDate, endDate);
	let returnedEmotions = new Map();

	for (let i = 1; i < 19; i++) {
		returnedEmotions.set(i, {val: 0});
	}

	for (let i = 0; i < filteredMemories.length; i++) {
		let emotions = filteredMemories[i].emotion;
		for (let j = 0; j < emotions.length; j++) {
			returnedEmotions.get(emotions[j]).val++;
		}
	}

	return returnedEmotions;
}

export function deleteMemory(id) {
	memory_storage.write(() => {
		var object = memory_storage.objectForPrimaryKey('Memory', id);

		memory_storage.delete(object);
		console.log(returnMemories(false));
	});
}

export function deleteAllMemories() {
	memory_storage.write(() => {
		var allMemories = memory_storage.objects('Memory');
		memory_storage.delete(allMemories);
	});
}

export function memoryToday() {
	var beginningOfDay = new Date(
		new Date().setHours(0, 0, 0, 0),
	).toISOString();
	var currentTime = new Date();

	var memoriesToday = memory_storage
		.objects('Memory')
		.filtered('date >= $0 && date < $1', beginningOfDay, currentTime);

	if (memoriesToday.length > 0) {
		return true;
	} else {
		return false;
	}
}
