import {memory_storage} from './memory_service';

export function addMemory(title, date, entry, image, isSpecial, emotions) {
	memory_storage.write(() => {
		var id = memory_storage.objects('Memory').length + 1;

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

export function deleteMemory(id) {
	memory_storage.write(() => {
		var object = memory_storage.objectForPrimaryKey('Memory', id);

		memory_storage.delete(object);
	});
}
