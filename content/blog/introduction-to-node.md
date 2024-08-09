---
description: Introduction to Node.js
publishedAt: 2024-07-15 14:00:00
image: /images/icons8-node-js-480.png
keywords:
  [
    "node",
    "node.js",
    "javascript",
    "backend",
    "introduction"
  ]
toc: true
head:
meta:
  - name: "og:image"
content: /images/icons8-node-js-480.png
---
# What is Node.js

<div class="image-container flex justify-start">
<img src="/images/icons8-nodejs-480.png" alt="Node icon" class="top-blog-image not-prose"/>
</div>

Node.js is a runtime environment that allows developers to run JavaScript code outside of a web browser. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, ideal for building scalable network applications. Node.js is built on Chrome's V8 JavaScript engine and provides a rich library of modules that simplify web development tasks, such as handling HTTP requests, working with databases, and managing file systems. Its ability to handle concurrent connections without blocking processes makes it well-suited for real-time applications and microservices architectures.

## Pros

* **Event-driven:**  Instead of waiting for tasks to finish one by one, programs using this model respond to events as they occur. Events could be user actions (like clicking a button) or system events (like receiving data over the network).
* **Non-blocking I/O (Input/Output):** When a program needs to perform I/O operations (like reading from a file or sending data over a network), it doesn't wait for each operation to complete before moving on to the next task. Instead, it initiates the operation and continues working on other tasks. When the operation completes, it triggers an event to handle the result.
* **Single-threaded:** A program or application that can only handle one task at a time, like cars moving along a single lane road. In Node.js, this single thread manages tasks sequentially through an event loop, handling each task as it comes without waiting for others to finish
* Perfect for building **fast and scalable**  data-intensive apps
* Using Javascript across the entire stack is faster and more efficient
* **NPM**: Huge library of open-source packages available for free!

## Uses
- API with databases behind it (preferably NoSQL like MongoDB)
- Data streaming 
- Real-time chat application
- Server-side web application
- Node is **not suitable** for apps with heavy server-side processing (CPUs) 



# Getting started with Node.js

Install Node.js on local computer 

1. Head to [Node.js](https://nodejs.org/en/)

<div class="image-container flex justify-start">
<img src="/images/intro-to-node/install-node.png"  alt="Screenshot of node installation page " class=" not-prose"/>
</div>

2. Download for your current operating system and it is recommended to download the Long Term Support Version (LTS)
3. **NOTE**: Only use even version numbers for production products 
4. Follow the directions in the popup and click install
5. Test it by opening up your terminal and typing node- v and npm -v

```console
node -v 
v20.15.1
npm -v
10.7.0
```

[Node Documentation](https://nodejs.org/docs/latest-v20.x/api/index.html)



## NPM


[NPM (Node Package Manager)](https://www.npmjs.com/) is a powerful tool that comes bundled with Node.js and is used to install and manage open-source packages. NPM refers both to the command line interface app used to install modules and to the package/module repository of packages.  It allows developers to easily share and reuse code by providing a vast repository of open-source packages, libraries, and modules. With NPM, you can manage project dependencies, run scripts, and streamline the development workflow. By executing simple commands in the terminal, you can install, update, or remove packages, ensuring that projects remain modular, maintainable, and up-to-date with the latest features and security updates. This makes NPM an essential part of modern JavaScript development.

### Using npm to start project

```console
npm init
```
This creates package.json file and node_modules
#### package.json
The 'package.json' is a metadata file that contains important information about a node.js project, including the project's name, description,  dependencies, scripts, configurations and other details.
#### node_modules
The node_modules directory stores all the installed packages and their dependencies for the project, ensuring the required modules are available for the application to run.

## Types of packages
**1. Simple Dependencies:**  Simply packages that contain code we will use and build upon in our own code. Our projects and our code **depend** on them to work correctly

i.e. express.js, slugify

Install [slugify](https://www.npmjs.com/package/slugify) which converts a string to a URL-friendly slug format

```console
npm install slugify
```
Once the installation is done slugify is added to the package.json file

```console
  "dependencies": {
    "slugify": "^1.6.6"
  }
  ```

**2. Development Dependencies:** Tools used for development and are not needed for production
  i.e. code bundlers, webpack, debugger tool , testing library

Install the dev dependency - [nodemon](https://www.npmjs.com/package/nodemon) which automatically restarts the server when it detects any change

```console
npm install nodemon --save-dev
```
```console
  "devDependencies": {
    "nodemon": "^3.1.4"
  }
  ```

## Types of installs

**1. Local Modules: Installed **locally** in our project folder. Only work in our project and no where else.
i.e. Slugify and Nodemon were installed locally

**2. Global Modules:**   Are available anywhere across your entire machine.  A package should be installed globably when it provides an executable command that you can run from the Command LIne Interface

Nodemon is a good example of a module that could benefit from being installed globally because it will be used across all node projects

```console
npm i nodemon --global
```

On a Mac you may need to add sudo and then add your password
```console 
sudo npm i nodemon --global
```

#### Using Nodemon

1. Instead on stopping and restarting the project after every change.  use nodemon and it will restart the project when it detects a change

```console
nodemon index.js
```
2. Better yet add it to your npm script:

```console
"scripts": {
    "start": nodemon index.js
}
```

3. Run your script:

```console
npm run start
```

## Using modules in node 

### Core modules
```javascript
const fs = require("fs"); //file system module
const http = require("http"); //http module
const url = require("url"); //url module


const templateOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
})
```
### Third party modules 
```javascript
const slugify = require("slugify");

const slug = slugify("Fresh Avocados", { lower: true });
console.log(slug);
```
```console
output:
fresh-avocados
```

### Own modules
```javascript
const replaceTemplate = require(".//modules/replaceTemplate");
```

Importing and using the replaceTemplate file in the modules folder (modules/replaceTemplate.js)

```javascript
module.exports = (template, product)=>{
    let output = template.replace(/{%PRODUCT_NAME%}/g, product.productName);
    output = output.replace(/{%ID%}/g, product.id);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    if(!product.organic) {
        output= output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
    }
    return output;

}
```
 

 ## Package Versions

 Follow the following syntax of three numbers separated by '.'
 ```console
  package : "^1.11.12"
```

The first number is the major version- can have breaking changes for older versions
The second number is the minor version- will not have any breaking changes for previous versions
The third number is the patch version or for bug fixes

'^':  accept all minor and patch version updates
'~'': accepts only patch updates
'*': accepts all updates (major included)



## Install specific package version

```console
npm install slugify@1.0.0
```


## Updating packages
look for outdated packages
```console
npm outdated
```

if we have the '^' as part of the project version:

```console
npm outdated
Package  Current  Wanted  Latest  Location              Depended by
slugify    1.0.0   1.6.6   1.6.6  node_modules/slugify  starter
 
```
if we have the '~' as part of the project version: 
```console
npm outdated
Package  Current  Wanted  Latest  Location              Depended by
slugify    1.0.0   1.0.2   1.6.6  node_modules/slugify  starter

```

To update slugify
```console
npm update slugify
```
## Uninstall
```console
npm uninstall slugify
```
Removes it from package.json and node_modules folder

## gitignore
Need to add your node_modules to gitignore so it is not added to repository

## Add node_modules to your repo
```console
npm install
```

## package-lock.json
List of all the packages and all the versions of the packages were using. Includes the dependencies of our dependencies. Important to share when sharing code so other developers can use the same versions of your dependencies

```console
    "node_modules/slugify": {
      "version": "1.6.6",
      "resolved": "https://registry.npmjs.org/slugify/-/slugify-1.6.6.tgz",
      "integrity": "sha512-h+z7HKHYXj6wJU+AnS/+IH8Uh9fdcX1Lrhg1/VMdf9PwoBQXFcXiAdsy2tSK0P6gKwJLXp02r90ahUCqHk9rrw==",
      "license": "MIT",
      "engines": {
        "node": ">=8.0.0"
      }
    }
```

