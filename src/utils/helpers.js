import moment from 'moment';
import {emotions} from './emotions';

export function returnEmotionInfo(emotionInt) {
	var emotion = emotions[emotionInt - 1];
	return {
		emotion: emotion.emotion,
		mainColor: emotion.mainColor,
		alternateColor: emotion.alternateColor,
	};
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
