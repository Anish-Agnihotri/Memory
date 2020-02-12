import moment from 'moment';
import {emotions} from './emotions';
import RNFS from 'react-native-fs';

export function returnEmotionInfo(emotionInt) {
	var emotion = emotions[emotionInt - 1];
	return {
		emoji: emotion.emoji,
		emotion: emotion.emotion,
	};
}

export function dateFormat(date) {
	return moment(date).calendar(null, {
		lastWeek: '[Last] dddd',
		lastDay: '[Yesterday]',
		sameDay: '[Today]',
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
