# eficode20
Files for a coding assignment

https://github.com/eficode/assignment-timetables

*npm scripts:
    *npm dockerdev starts the interactive development server for the react page in a docker container
    *npm dockerprod starts a production optimized build in a docker container
    *npm predeploy builds react, and docker dev + production builds
    *npm deploy builds everything and pushes the react production build to s3 and docker images to dockerhub
    *Run tests with: CI=TRUE npm test


Docker package:
https://hub.docker.com/repository/docker/emcq/timetables/

Web site: http://eficode20.s3-website.eu-west-2.amazonaws.com/
