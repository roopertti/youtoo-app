# Youtoo

These instructions assume you're using yarn as package manager. Install yarn by running `npm i -g yarn`.

## Project configuration

1. Create a file called `.env` to the root folder of the project
2. Add the Youtube API key to the file like this: `YOUTUBE_API_KEY=<insert your YT API key here>`
3. Save the file and you're good to go!

## Run project in development mode

1. Follow the steps in the "Project configuration" part above
2. Install dependencies by running `yarn`
3. Start dev server on http://localhost:3000 by running `yarn start`

## Style and formatting

Run `yarn lint` to check for style errors and `yarn lint-fix` to automatically fix errors.
Run `yarn prettier` to check for code format errors and `yarn prettier-fix` to fix format errors.

## Building the project for production

1. Follow the steps in the "Project configuration" part above
2. Run `yarn build` to create final production bundle. Bundle will be located in the `dist` folder.
