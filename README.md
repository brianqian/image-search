# Image Search

This is a React Native application bootstrapped with [Expo](https://expo.io/). The application's purpose is to use the
Pixabay API to provide image results for a query. Navigation is handled by React Navigation, state
is handled with Redux, and styled-components are used for the styling library. This application is
optimized and tested for Android (10.0)

## Instructions

To run this application, you will need to have the Expo-CLI, most easily downloaded from npm:

```
npm install -g expo-cli
```

This project uses the [Pixabay API](https://pixabay.com/api/docs/). After creating an account, the documentation provides you a key highlighted in green. Copy that key and create a `.env` file in the root directory. Paste the key into the `.env` file:

```
PIXABAY_KEY=<SECRET KEY HERE>
```

This project uses Yarn as a package manager so after installing packages by running `yarn` in the root directory, this can be started with `expo start`.

This will launch a web version of the dev tools where you can run various versions (web, iOS, Android) of the application. If you don't have an emulator, one can be downloaded for free from the [Android Studio](https://developer.android.com/studio) site. Once that's up and running, a new emulator can be configured from `Settings > AVD Manager > Create Virtual Device`. For this application the settings I used were a `Nexus 5X API 29x86` `API29` (all default settings). The green play button under Actions will launch the emulator.

Once the emulator is running you can launch the application by either clicking `Run on Android device/emulator` in the browser dev tools or by pressing `'a'` in the command line where `expo` is running.

## Images

![portrait](https://raw.githubusercontent.com/brianqian/image-search/master/assets/portrait.png)
![landscape](https://raw.githubusercontent.com/brianqian/image-search/master/assets/landscape.png)
![details](https://raw.githubusercontent.com/brianqian/image-search/master/assets/details.png)
