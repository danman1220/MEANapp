MEANapp
=======

###Practice on MEANjs


This is a project to eventually help take care of character info for Dungeons and Dragons.
Really, its just a pet project: don't expect too much from me :P
you need:

**node,
mongodb,
bower** (`npm install -g bower`)

####Then, once you have it

- in the project directory, run `npm install`

- in the project directory, run `bower install`

to start the app, first start up mongodb with the `mongod` command
then, in the project directory, run `npm start` (or `grunt` for dev work)
the app will be on localhost:5309 (adding 867 later)


##Documentation

This app uses Mongodb, Express.js, Angular.js, and Node.js to run. 
* The [app](https://github.com/danman1220/MEANapp/tree/master/app) folder contains all the server side info, including database interaction, database models, and server routing.
* The [public](https://github.com/danman1220/MEANapp/tree/master/public) folder contains all the client side information, including the angular javascript (controllers for each of the pages, and services for http requests), and the html documents for each of the views.

Otherwise,
* `.bowerrc` file decides where the downloaded bower code goes (/public/bower-components) 
* `.gitignore` tells git to not sync the generated files
* `bower.json` tells bower which javascript "libraries" to get 
* `Gruntfile.js` is for debugging (it runs tests each time a file is changed)
* `package.json` grabs more dependencies for node
* `README.md` is this file...
* `server.js` actually starts the server via node

TODO - Finish documentation
