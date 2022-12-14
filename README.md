# Absences Manager App

## Clone the project

```
git clone https://github.com/rabiikahlaoui/absences-manager.git
```

## Online demo
* [Frontend](https://mellow-pika-18912d.netlify.app/)
* [Backend](https://absences-manager.onrender.com/api/absences)

## Run the application

You can run the application using Docker using the command below in the project directory:
```
docker-compose -f docker-compose.dev.yml up --build
```
**Note: the option `--build` is needed only when running the project with Docker for the first time**

## Rune the application without Docker

### Running the Backend
```
cd api
npm i
npm run start
```
The available routes are:
* [http://localhost/api/absences](http://localhost/api/absences) to retreive the list of absences
* [http://localhost/api/members](http://localhost/api/members) to retreive the list of members
The available commands are:
* `npm run start` to start the dev server
* `npm run lint` runs the linting tool (eslint)
* `npm run lintfix` fix the linting issues 

### Running the Frontend
```
cd client
npm i
npm run start
```
The available routes are:
* [http://localhost:3000](http://localhost:3000) The list of absences
The available commands are:
* `npm run start` to start the dev server
* `npm run build` build the application for deployment
* `npm run test` run the tests
* `npm run eject` eject configuration of webpack, babel, etc.. from node modules into the project (Note: once this is done, there's no option to go back)
* `npm run lint` runs the linting tool (eslint)
## To do:
* Adjust tests for the Frontend
* Add tests for the Backend
* Improve imports by using path aliases (using craco)
* Implement the media queries and the responsive UI
* Use global CSS variables for colors, font sizes, ...
* Implement absences by members feature, add React Router
* Complete the React Native app 