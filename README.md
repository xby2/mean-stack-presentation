# mean-stack-presentation
Presentation for MEAN Stack for Michigan Hackers.

## Install

- Install [Node.js](https://nodejs.org/en/download/)

- Install express
```bash
> npm install express
```

- Navigate to example-site directory in repository

  - Install packages
```bash
> npm install
```
  - Start express
```bash
> npm start
```

- Navigate to [localhost:3000](http://localhost:3000)

## Installing and Configuring MongoDB

1.  Download and install [MongoDB](https://www.mongodb.org/downloads#production)
  - When installing MongoDB, it is recommended you change the installation directory to 'C:\MongoDB\Server\3.0\bin'
2.  Create the default DB directory C:\data\db if it doesn't already exist.
3.  Verify the installation was successful by running the MongoDB server:
```bash
> cd C:\MongoDB\Server\3.0\bin
> .\mongod
```

The following should appear in the last line:

```
I NETWORK  [initandlisten] waiting for connections on port 27017
```
