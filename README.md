# Simple Calendar

This simple browser-based calendar allows you to create, modify and delete user events and possibly other functions. The application was created as an exercise for a school project.

# Dependencies

-   Node.js
-   Moment.js (can be installed with npm or yarn)
-   React
-   json-server (can be installed with npm or yarn)

# Installation and usage

To install the dependencies, execute the "npm install" command at the root of the project folder. This should install everything necessary to run the application.

To run, execute command "npm run-scripts build", which will build the latest version of the application. Then install "serve" through node, and execute the "serve -s build -p 3000" command in a terminal at the root of the project folder. After the application has successfully launched, start the json-server in another terminal with the "npx json-server --watch db.json -p 5000" command. This will launch the simple json-server, set it to watch db.json at the root folder, and configure the server to run at port 5000 to not overlap with the application. After both the application and server is up, simply navigate to "localhost:3000" with a Chromium-based browser (Firefox does not seem to work for an unknown reason.).

# Uninstallation

To uninstall the application, simply delete the project folder.
