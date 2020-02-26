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

export function returnMemoryStats(startDate, endDate) {
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

export function returnMemoryPositiveOrNegative(startDate, endDate) {
	let emotions = returnMemoryStats(startDate, endDate);

	let emotionCountPositive = 0;
	let emotionCountNegative = 0;
	let emotionCountNeutral = 0;

	/*
		Positive emotions: 1, 2, 3, 14, 15, 18
		Negative emotions: 4, 6, 8, 10, 11, 13, 17
		Neutral emotions: 5, 7, 9, 12, 16
	*/

	for (let [emotion, val] of emotions) {
		if ([1, 2, 3, 14, 15, 18].includes(emotion)) {
			emotionCountPositive += val.val;
		} else if ([4, 6, 8, 10, 11, 13, 17].includes(emotion)) {
			emotionCountNegative += val.val;
		} else {
			emotionCountNeutral += val.val;
		}
	}

	return {emotionCountPositive, emotionCountNegative, emotionCountNeutral};
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
