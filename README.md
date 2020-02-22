# eficode20
Files for a coding assignment

https://github.com/eficode/assignment-timetables

Planned functionalities: This project will use React, ESLint, a UI framework and probably unit testing.

USAGE:

sudo docker build -f Dockerfile-dev -t timetables:dev .

Run development build:
sudo docker run -v ${PWD}:/timetables -v /timetables/node_modules -p 3001:3000 --rm timetables:dev

Build production version:
sudo docker build -f Dockerfile-prod -t timetables:prod .

Run production build:
sudo docker run -it -p 80:80 --rm timetables:prod
