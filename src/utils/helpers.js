import moment from 'moment';
import { emotions } from './emotions';
import RNFS from 'react-native-fs';

export function returnEmotionInfo(emotionArray) {
	var array = [];
	for (let i = 0; i < emotionArray.length; i++) {
		array.push({
			emoji: emotions[emotionArray[i] - 1].emoji,
			emotion: emotions[emotionArray[i] - 1].emotion,
		});
	}
	return array;
}

export function dateFormat(date) {
	return moment(date).calendar(null, {
		lastWeek: '[last] dddd',
		lastDay: '[yesterday]',
		sameDay: '[today]',
		sameElse: function() {
			return 'MMM DD, YYYY';
		},
	});
}

export function memoryDateFormat(date) {
	return moment(date).calendar(null, {
		lastWeek: '[Last] dddd',
		lastDay: '[Yesterday]',
		sameDay: '[Today] [at] h[:]mmA',
		sameElse: function() {
			return 'MMMM DD, YYYY';
		},
	});
}

export function imagePath(uri) {
	var path =
		'file://' + RNFS.DocumentDirectoryPath + uri.split('/Documents')[1];
	return path;
}
