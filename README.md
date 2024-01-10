# Prerequisites

- Node.js >= 18 and npm (Recommended: Use nvm)
- Android Studio and Android SDK
- JDK >= 17
- Watchman
- Xcode
- react-native-cli >= 2.0.1
- react-native >= 0.72.3


# Base dependencies

- `axios` for networking.
- `react-native-config` to manage envionments.


# Folder Structure

This project follows very simple folder structure

-  src: This folder is the main container of all the code inside your application.
-  assets: Asset folder to store all images, vectors, etc.
-  icons: Icons folder is used to store all the icon.
-  images: In Images folder we store all the images.
-  components: Folder to store any common component that you use through your app, which contain three sub folders namely atoms,molecules,organisms
-  atoms - This folder is used to create very base components.
-  molecules - In this folder we store a component which is made by using composition of two or more components which are in atoms.
-  organisms - This folder is same like molecules but in this folder we store components which is made by using two or more components which are present in molecules.
- axios - This Folder is used to create a axios interceptor which is used for api calls.
- constants: Folder to store any kind of constant that you have.
- utils - In this folder we store utility function/services.
- service - In this folder we store services which is used for api calls
- App.js: Main component that starts your whole app.
- index.js: Entry point of your application as per React-Native standards.

# Libraries

- `react-native-svg` : Prefer using SVG over images all the time
- `axios` : This library is used for api calls.
- `react-native-drop-shadow` : This library is used for shadow effect.

# How to run a application

- Take a clone of project by using
   ```sh
    $ git clone https://github.com/tushardbhogade/reposeeach.git
    ```
-   To go inside a folder
    ```sh
    $ cd project_name
       ```
-   To install all the libraries
     ```sh
     $ npm install
      ```
-   To run a project on android device
    ```sh
    $ npm run android
     ```
-   To run a project on ios device
     ```sh
    pod install
    npm run ios
    ```

# Screens

- In `App.tsx` file we created a single screen which contains `seachBar`, `sortButton`, `sortOptionModal` and `card` to show the details of the search result.





