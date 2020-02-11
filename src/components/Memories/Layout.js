import React from 'react';
import {View, FlatList, RefreshControl} from 'react-native';
import MemoryItem from './Items';

import {returnMemories} from '../../models/actions';
import {returnEmotionInfo, memoryDateFormat} from '../../utils/helpers';

export default class MemoryLayout extends React.Component {
	constructor() {
		super();

		this.state = {
			diaryItems: [],
			refreshing: true,
		};
	}
	updateDiaryItems = () => {
		var value = returnMemories(this.props.memories);
		this.setState({refreshing: false, diaryItems: value});
	};
	componentDidMount() {
		this.updateDiaryItems();
	}
	render() {
		return (
			<FlatList
				ListHeaderComponent={<View style={{paddingTop: 10}} />}
				ListFooterComponent={<View style={{paddingBottom: 5}} />}
				data={this.state.diaryItems}
				refreshControl={
					<RefreshControl
						refreshing={this.state.refreshing}
						onRefresh={this.updateDiaryItems}
					/>
				}
				renderItem={({item}) => (
					<MemoryItem
						id={item.id}
						date={memoryDateFormat(item.date)}
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
