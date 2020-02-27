import {memory_storage} from './memory_service';
import RNFS from 'react-native-fs';

export async function exportToJSON() {
	let data = memory_storage.objects('Memory').sorted('date', true);

	let path = RNFS.DocumentDirectoryPath + '/export.json';
	RNFS.writeFile(path, 'Test', 'utf8')
		.then(success => {
			return 'file://' + path;
		})
		.catch(err => {
			return err;
		});
}
