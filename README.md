# Findabuddy

> Find a buddy so you don't have to do your favorite thing alone.

## Team

  - __Product Owner__: David Berry
  - __Scrum Master__: Mark Suyat
  - __Development Team Members__: Alex Jungroth, John Roxborough

## Legacy Team

  - __Product Owner__: Placid Rodrigues
  - __Scrum Master__: Kevin McFarlane
  - __Development Team Members__: Kenneth Marshall, Scott Rudiger

## Table of Contents

1. [Original App](#Original-App)
1. [Legacy Features](#Legacy-Features)
1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Original App

> We got the original app that had been built by a different team of engineers. The app included the following features:

- Post a buddy request
- Search for a buddy request
- Get notifications for messages

## Legacy Features

> We added several cool features to the app in four days. Such as:

- Live Google Maps - for showing the open requests marked by their locations
- Browse Request List- (live)
- Realtime Messages/Chat - Using socket.io
- Profile view - Edit profile, Add interests, Show buddy list, View buddy profile
- Improved Notifications
- Email Notification when signing up and when other users add you as a buddy
- Add buddies - including automatic search text completion feature (using Typeahead)
- Find-a-buddy-bot

## Usage

> clone repo, npm install in root directory.  Setup MongoDB uri and place in .env that you manually create.

> Setup gmail for sending the notification mails and add the email address and password to the deployment server config and also in .env for local testing.

```
gmailUser=gmail-address
gmailPass=gmail-password
```

> Add Google Maps API Key in index.ejs

> Then run

```
npm install
bower install
npm run babel-watch
```

> To start local server, run in another terminal

```
npm run start-dev
```

> direct your browser to localhost:8080

> Follow normal signup/login workflow from here, and you're ready to find a buddy

## Requirements

- Node 6.10.2
- NPM 5.0.4
- Bower 1.8.0
- everything else installed by NPM & Bower

## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
```
at this point all dependencies will be downloaded. Bower dependencies will be downloaded and jsx will be transpiled as a post-install after running
the command npm install

### Continuous Deployment
>Acquire access to findabuddy Heroku project from development team.
>from the root directory of findabuddy: "heroku git:remote -a findabuddy" will give you a remote repository called heroku
>to deploy, first commit to your local repo, then type "git push heroku master"

### Roadmap

View the project roadmap [here](https://github.com/hrr24-melmac/Findabuddy/issues)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
