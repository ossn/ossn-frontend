# OSSN

[![Netlify Status](https://api.netlify.com/api/v1/badges/f7dbf76a-4d86-45cd-b150-2ab3adb90f2a/deploy-status)](https://app.netlify.com/sites/zen-euclid-6d318e/deploys)
[![Build Status](https://travis-ci.org/ossn/ossn-frontend.svg?branch=master)](https://travis-ci.org/ossn/ossn-frontend)

Welcome to Open Source Student Network page repository!

#### Contents

1. [Setup](#setup)
2. [Develop](#develop)
3. [Build](#build)

### <a name="setup"></a>Setting up the project

1. Install `nodeJS`. Use your OS package manager to install nodeJS or follow the instructions on [nodeJS page](https://nodejs.org/en/download/).
2. Clone the repository. Run `git clone https://github.com/ossn/ossn-frontend.git`.
3. Install nvm. Follow the instructions on [nvm repo](https://github.com/creationix/nvm#installation).
4. Run `nvm use`.
5. Install node dependencies. On repo directory run `npm install`.

### <a name="develop"></a> Develop

1. At the repository directory run `nvm use`.
2. Open development server. Run `npm run develop`.
   - The page will be available at [localhost:8000](htpp://localhost:8000) by default.
3. Login to the development page is available through the url: https://dev.ossn.club/api/v1.0/oidc/login.
   After login you will be redirected to [localhost:8000](htpp://localhost:8000).

### <a name="build"></a> Build

1. At the repository directory run `nvm use`.
2. Building the page. Run `npm run build`.
3. Start the server. Run `npm run serve` to initialize a gatsby server at your machine.

- The page will be available [localhost:9000](http://localhost:9000) by default.

Find out more about the tools we used at [https://www.gatsbyjs.org/](https://www.gatsbyjs.org/)
