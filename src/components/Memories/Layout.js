import React from 'react';
import {View, FlatList} from 'react-native';
import MemoryItem from './Items';

import {returnMemories} from '../../models/actions';
import {returnEmotionInfo, dateFormat} from '../../utils/helpers';

export default class MemoryLayout extends React.Component {
	constructor() {
		super();

		this.state = {
			diaryItems: [],
		};
	}
	updateDiaryItems = () => {
		var value = returnMemories(this.props.memories);
		this.setState({diaryItems: value});
	};
	componentDidMount() {
		this.updateDiaryItems();
	}
	render() {
		return (
			<FlatList
				data={this.state.diaryItems}
				renderItem={({item}) => (
					<MemoryItem
						date={dateFormat(item.date)}
						title={item.title}
						image={item.image}
						entry={item.entry}
						emotion={returnEmotionInfo(item.emotion)}
					/>
				)}
				keyExtractor={item => item.id.toString()}
			/>
		);
	}
}
