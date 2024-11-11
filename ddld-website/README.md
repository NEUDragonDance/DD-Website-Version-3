# Dragon & Lion Dance Troupe Website

## How to Update Website
1. To update the photos: 
    - Go to the `public/res` folder and find the corresponding folder with page and put the photo in there. (e.g. Adding `new_photo.jpg` in the homepage.Put the image in `public/res/home-page-photos`. It will become `public/res/home-page-photos/new_photo.jpg`)
    - [WIP] Put the photo name into the `src/database.json` file. (e.g. Adding the same `new_photo.jpg`  !!!Add photo for this!!!)


## History
Initially created by Serena Ng from ___ to 11/8/2024 with help from Roland and others.
<br> <br>
Refactor to React.js by Jonthan Yu from 11/8/2024. Additional file named ddld-website was created since react
does not support capital letters in the folder name.<br>
Uses node.js v22.11.0 & npm v10.9.0.

## TODO/Notes
- comments with "CONVERT TO DATABASE" should be change the below image to a json file
- comments with "PUT INTO CSS FILE" should put the below style into a css file

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
