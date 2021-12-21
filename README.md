# CORALJAM

## Introduction

CoralJam is a real-time collaborative whiteboarding application, with inspiration provided by [FigmaJam](https://www.figma.com/figjam/).

### Local Installation

These instructions will get you a copy of the project up and running on your local machine.

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

CoralJam starts with a welcome screen where you enter your username. After entering your username you are taken to the main whiteboard application. The whiteboarding application offers a set of tools: notes, stickers, and freeform text. Clicking a tool will place an instance of the tool onto the main whiteboard screen. You can interact with the tool by moving it around.

To see the real-time collaboration features of the CoralJam application, launch a new tab in the same browser or another browser from there navigate to `http://localhost:3000`. Enter a different username and click Enter. Now, all users you are connected will be able to work together.

## Technical Details

CoralJam is a [React](https://reactjs.org/) application built using the [NextJs](https://nextjs.org/) framework. Syncing of data between all open versions of the application is handled using the [SyncedStore](https://syncedstore.org/) library, which uses [Yjs](https://docs.yjs.dev/) as a [CRDT](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type) library. Network communication is handled by WebRTC which is peer-to-peer. No local signalling server is required, since the underlying [y-webrtc](https://github.com/yjs/y-webrtc) library uses public signaling servers.

## Implementation Notes

Code written for this system was optimized towards features against the 8 hour timebox. When possible, existing packages were used to provide functionality to speed development. In a true production app, using out-of-the-box packages to provide functionality may be suboptimal from a performance standpoint and needs to be decided on a case by case basis. Emphasis on delivering an MVP meant optimizing time away from unit testing and Typescript for example. An early decision made was to have the app be real-time collaborative with the result of choosing the SyncedStore library. The SynchedStore library uses a proxy model akin to MobX. Mixing MobX type reactive proxies with other ways to manage state is suboptimal and was done as a compromise to realize collaboration.

In general the pattern used is "contextualized components" which depends entirely on context for state and only utilize props to express variant behavior and appearance or to otherwise effect how the state is used. This avoids a large global state object and facilitates component composibility. Contextual state allows for [dynamic scope](https://www.geeksforgeeks.org/static-and-dynamic-scoping/#:~:text=With%20dynamic%20scope%2C%20a%20global,in%20the%20most%20recent%20binding.) Additionally, contextual state naturally ties together state with component lifecycles such that the global state object doesn't need to be redundantly signalled that data is no longer needed.

It is noted that FigmaJam utilizes an HTML canvas and wasm. It would be interesting to explore those architectural decisions to determine an optimal technology appraoch for a whiteboard application.

## Known Bugs and Issues

* When joining a whiteboard as an additional user, the first drag of an item mistracks. Dropping the item and redragging fixes the issue.
* The drawable canvas of the whiteboard does not share data accross users.
* This application is optimized for desktop only. The CSS was not tested on mobile and TouchEvents are not supported.
* Loading of CSS such as fonts is suboptimal and results in jank.
* Saving is not supported. Reloading the main whiteboard page returns the user to the login screen and all whiteboard work is reset.
* All users share a single shared whiteboard session for all users, there is no way to create additional sessions.
* Flex is used, perhaps Grid is more appropriate.
