# Findabuddy

> Find a buddy so you don't have to do your favorite thing alone. 

## Team

  - __Product Owner__: David Berry
  - __Scrum Master__: Mark Suyat
  - __Development Team Members__: Alex Jungroth, John Roxborough

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

> clone repo, npm install in root directory.  Acquire URI to MongoDB from dev team, place in .env that you manually create
> this will install all dependencies, and transpile jsx to js
> from here, run the app via "npm run start", and direct your browser to localhost:8080.
> in a separate terminal type "npm start babel-watch" to continuously transpile changes to the jsx files on the ReactJS frontend
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
