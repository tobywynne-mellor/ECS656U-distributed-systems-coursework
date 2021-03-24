# ECS656U Distributed Systems Coursework

## Coursework Description
The goal of this option is to add some functionality to handle networking and consistency issues in existing multiplayer games. You may select the game and language of your choice but please include the source of your game in your submission.

The additional functionality which should be added to the are as follows:
1. Introduce an artificial network delay to simulate some of the challenges which take place in networked games. This should vary over time to simulate real network conditions. Static network delay will be given partial marks.
2. Implement bucket sychronization so that all clients have the same frame rate so the game can be considered "fair"
3. Implement interest management so that a large map exists on the primary copy of the game while information on objects which are sent to secondary copies should only contain information relavent to that client
4. Implement dead reckoning so that players continue to update in the event that network problems cause delays in updates received about player position
5. Implement smooth corrections so that players move towards the correct position after drops in network communication to prevent jerky animation
6. Introduce some form of cheat which allows one client to perform a game action that cannot be done by other clients. This can take multiple forms. One example would be to increase the movement speed of one player
7. Introduce some checking on the server side which allows the cheating to be detected. This cheating detection should be general rather than specific to how you implemented the cheat. E.g. If you implement a move cheat you should check for unrealistic movements in player position rather than looking for a specific function call.

The deliverable is concerned with the design of the game. You are expected to upload one zip file containing all the source files for your coursework by the 10am the 2nd of April. You are also expected to demonstrate your coursework in week 10 on the module. If the coursework fails to run this will negatively affect your grade so please be cautious about last minute additions.

The marks for this option are as follows:
- Artificial Network Delay (4 marks)
- Bucket Sychronization (6 marks)
- Interest Management (6 marks)
- Dead Reckoning (6 marks)
- Smooth Corrections (6 marks)
- Cheating (4 marks)
- Cheating Detection (4 Marks)
- Code Style and Readability (4 marks)

(total 40 marks)


## How To Start

To clone and run this game, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

**Note:** Test it on Chrome. On some browsers like Firefox you need to add a STUN server to make it work.

```bash
# Install dependencies
$ npm install

# Start the local development server (on port 1444)
$ npm run start

# Add bots to the game (via puppeteer) to test it
$ npm run test
```
