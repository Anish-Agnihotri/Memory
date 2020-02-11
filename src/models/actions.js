import {memory_storage} from './memory_service';

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

export function returnMemories(onlySpecial) {
	if (onlySpecial) {
		return memory_storage
			.objects('Memory')
			.sorted('date', true) // Descending order by date
			.filtered('isSpecial = true'); // TODO: Fix this
	} else {
		return memory_storage.objects('Memory').sorted('date', true);
	}
}
