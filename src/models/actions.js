import {memory_storage} from './memory_service';

// Create new memory
export function addMemory(title, date, entry, image, isSpecial, emotions) {
	memory_storage.write(() => {
		// New object = current maximum ID + 1
		var id = memory_storage.objects('Memory').max('id') + 1;
		// If maximum id = NaN (aka null), set ID = 0
		if (isNaN(id)) {
			id = 0;
		}

		// Create realm object
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

// Return all memories
export function returnMemories(onlySpecial) {
	if (onlySpecial) {
		// Return only special memories sorted by date (recent --> oldest)
		return memory_storage
			.objects('Memory')
			.sorted('date', true) // Descending order by date
			.filtered('isSpecial = true');
	} else {
		// Return all memories sorted by date (recent --> oldest)
		return memory_storage.objects('Memory').sorted('date', true);
	}
}

// Return only dates of memories (for Calendar view)
export function returnOnlyMemoryDates() {
	let returnedDates = [];
	let memories = memory_storage.objects('Memory');

	// For each memory in db
	for (let i = 0; i < memories.length; i++) {
		let isSpecial = memories[i].isSpecial;
		returnedDates.push({
			date: memories[i].date, // Date of memory
			dots: [
				{
					key: i, // Key for dot
					color: isSpecial ? '#FF836B' : '#006565', // If memory is special, different color
					selectedDotColor: isSpecial ? '#FF836B' : '#006565', // If memory is special, different color
				},
			],
		});
	}
	return returnedDates;
}

// Return statistics about memories in db
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

// Delete memory by id
export function deleteMemory(id) {
	memory_storage.write(() => {
		// Find memory object in db by id
		var object = memory_storage.objectForPrimaryKey('Memory', id);

		// Delete memory object from db storage
		memory_storage.delete(object);
	});
}

// Delete all memories
export function deleteAllMemories() {
	memory_storage.write(() => {
		// Select all memory objects in db
		var allMemories = memory_storage.objects('Memory');

		// Delete entire array of memory objects from db storage
		memory_storage.delete(allMemories);
	});
}

// Check if there has been a diary entry today
export function memoryToday() {
	// Get date from beginning of day
	var beginningOfDay = new Date(
		new Date().setHours(0, 0, 0, 0),
	).toISOString();

	// Get current function execution time
	var currentTime = new Date();

	// Get all memories that occured between the ranges of beginningOfDay --> currentTime
	var memoriesToday = memory_storage
		.objects('Memory')
		.filtered('date >= $0 && date < $1', beginningOfDay, currentTime);

	// If the array has more than one item:
	if (memoriesToday.length > 0) {
		// Yes, there has been a diary entry today
		return true;
	} else {
		// No, there hasn't been a diary entry today
		return false;
	}
}
