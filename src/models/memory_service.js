import Realm from 'realm';
import {memory_schema} from './schema';

// Memory storage realm setup
export const memory_storage = new Realm({
	schema: memory_schema,
	schemaVersion: 9,
	// Dummy migration if schema is to be changed
	migration: function(oldRealm, newRealm) {
		// NOT FOR USE WITH PRODUCTION BUILDS
		// THIS WILL DELETE ALL DIARY ENTRIES IN REALM DB
		newRealm.deleteAll(); // Delete all memories on migration
	},
});
