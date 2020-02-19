<p align="center">**:warning: Warning: Memory is currently a Work-In-Progress (WIP), as a hobby project of [@anish-agnihotri](https://github.com/anish-agnihotri). Until first release to App Store, project may not be buildable or feature-complete.**</p>

## Memory?
Memory is an iOS-first application that lets you add diary entries, track your mood, and most of all, save your favourite memories. The best way to brighten up a bad day is to think back to good times—and memory let's you do **exactly that**.

It's really simple:
1. Add diary entries every day (Memory sends you a nice push notification everyday to remind you if you'd like).
2. Select a mood for each entry.
3. Select an entry as **:star: Special** to save it in a seperate tab.
4. Track your emotions by the day and view statistics.

## Running Memory
I'd **highly** recommend waiting until the app is live on the App Store to take it for a spin. If you like living life on edge, though, you can run locally like so:

### Building from source
1. Run `git clone https://github.com/anish-agnihotri/Memory.git`
2. Change directory via `cd memory/`
3. Run `yarn`
4. Change directory via `cd ios/`
5. Run `pod install`

## Architecture
Memory is built to be iOS-first (thus using iOS-focused components). Core functionality is built on the frameworking of [React Native](https://github.com/facebook/react-native), [React Navigation](https://github.com/react-navigation/react-navigation), and [Realm](https://github.com/realm/realm-js).

Full feature-set + architecture to be updated upon release.

### Running built application
1. Run `yarn run ios` in root directory.
2. Optional: run `yarn run start` to load Metro Bundler as seperate instance.

## Attributions
* Formatting: [notepad/notepad](https://github.com/notepad/notepad/blob/master/README.md)

## License
Venti is licensed under [the MIT license](https://github.com/anish-agnihotri/Memory/blob/master/LICENSE.md).
