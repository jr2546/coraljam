# CORALJAM

## Introduction

CoralJam is a real-time collaborative whiteboarding application.

### Local Installation

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

#### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/getting-started/install)
- [Git](https://git-scm.com/downloads)

#### Clone the repo

```bash
git clone https://github.com/kmcclosk/coraljam.git
```

#### Install the dependencies

```bash
yarn
```

#### Start the application

```bash
yarn start
```

## How to Use

When you start the application using `yarn start` your browser will open to `http://localhost:3000`.

The CoralJam starts with a welcome screen where you enter your username. After entering your username you are taken to the main whiteboard application. The whiteboarding application offers a set of tools: notes, stickers, and freeform text. Clicking a tool will place an instance of the tool onto the main whiteboard screen. You can interact with the tool by moving it around.

To see the real-time collaboration features of the Coraljam application, launch a new tab in the same browser or another browser and also navigate to `http://localhost:3000`. Enter a different username and click Enter. Now, all users you are connected will be able to work together.
