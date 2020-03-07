import moment from 'moment';
import {emotions} from './emotions';
import RNFS from 'react-native-fs';

// Return emotion data array from './emotions' as function
export function returnEmotionInfo(emotionArray) {
	var array = [];
	for (let i = 0; i < emotionArray.length; i++) {
		// Return emotion {emoji, emotion}
		array.push({
			emoji: emotions[emotionArray[i] - 1].emoji,
			emotion: emotions[emotionArray[i] - 1].emotion,
		});
	}
	return array;
}

// Format data via Moment.js
export function dateFormat(date) {
	return moment(date).calendar(null, {
		lastWeek: '[last] dddd',
		lastDay: '[yesterday]',
		sameDay: '[today]',
		sameElse: function() {
			return 'MMM DD, YYYY'; // Default: Apr 03, 2019
		},
	});
}

// Format data via Moment.js for memory view
export function memoryDateFormat(date) {
	return moment(date).calendar(null, {
		lastWeek: '[Last] dddd',
		lastDay: '[Yesterday]',
		sameDay: '[Today] [at] h[:]mmA',
		sameElse: function() {
			return 'MMMM DD, YYYY'; // Default: April 03, 2019
		},
	});
}

// Return image path appended by iOS document directory
export function imagePath(uri) {
	var path =
		'file://' + RNFS.DocumentDirectoryPath + uri.split('/Documents')[1];
	return path;
}
