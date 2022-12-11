# React Accessible Modal

This project is an example of a modal (dialog) component made with React. It's made to be simple and accessible. It purposely doesn't use the dialog's showModal and hideModal methods because they handle all the heavy lifting for accessibility and functionality.

It's not necesssarily complete. It's just a quick example. For example, it doesn't have tests for all props. Also, I haven't thoroughly tested its accessibility with screen readers.

The main component is the Modal component. I tried to make it the "react way" where the parent either renders the modal or doesn't. This contrasts the HTML way where the modal is always open and its `open` attribute is toggled either directly or through its methods.

Alternative methods would be to:
- Let HTML handle the heavy lifting. Use the dialog component along with the `showModal` and `hideModal` methods. They handle the majority of accessibility issues including closing the modal when Escape is pressed, focus trapping and changing the initial focus.
- Allow the modal stay rendered and instead close / open with by passing an `open` prop from the parent.


[View project](https://sargalias-react-modal.netlify.app)


## Table of contents

- [Getting started with Docker](#getting-started-with-docker)
- [Getting started with Node and NPM](#getting-started-with-node-and-npm)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the project for development](#running-the-project-for-development)
- [Usage](#usage)
  - [Starting the project](#starting-the-project)
  - [Building the project](#building-the-project)
- [Built with](#built-with)
- [License](#license)


## Getting started with Docker

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

1. Make sure Docker and docker compose are installed and that you're able to run containers. Please see [Docker installation instructions](https://docs.docker.com/get-docker/).
2. Clone the repo

```
git clone https://github.com/sargalias/react-modal
```

3. Open a terminal and `cd` into the react-modal folder.
4. Run `docker compose up`
5. Visit http://localhost:3000 in your browser.


## Getting started with Node and NPM

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- NPM

Installation requires [NPM](https://www.npmjs.com/) which is included with [Node](https://nodejs.org/). You can install Node by downloading the installer from the website.

To update NPM to the latest version:

```
npm install -g npm
```

### Installation

1. Clone the repo

```
git clone https://github.com/sargalias/react-modal
```

2. Install NPM packages

```
npm install
```

### Running the project for development

```
npm start
```


## Usage

### Starting the project

- Start the project on a local server: `npm start`

### Building the project

- Build the project for production: `npm run build`


## Built with

- [React](https://reactjs.org/)
- [typescript](https://www.typescriptlang.org/)
- [focus-trap-react](https://www.npmjs.com/package/focus-trap-react) - For focus trapping inside the modal
- [create-react-app](https://create-react-app.dev/) - Uses the typescript template.
- [docker and docker compose](https://www.docker.com/)
- [Node Docker image](https://hub.docker.com/_/node)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
