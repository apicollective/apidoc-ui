[![Build Status](https://travis-ci.org/movio/apidoc-ui.svg?branch=master)](https://travis-ci.org/movio/apidoc-ui)

# apidoc-ui
A fresh UI built using React + Redux for https://github.com/mbryzek/apidoc


## Preview

![APIDOC-UI-org](organization.png)

![APIDOC-UI-model](model.png)

![APIDOC-UI-resource](resource.png)


## Dev

UI Dev

```shell
yarn install
yarn start
http://localhost:8080/

yarn test
yarn flow
```

Before a Pull Request

```shell
yarn run check
```

App

```shell
yarn start
```

## Deploy
Deploy will build and push to S3. You need to have ~/.aws/credentials setup with access to the S3 bucket for this

```shell
yarn deploy
```

### Travis Settings
When changes are merged to master travis will automatically perform a build, if the build is successful it will be deployed immediately.

To update the aws keys:

```shell
travis encrypt AWS_ACCESS_KEY_ID='access key' AWS_SECRET_ACCESS_KEY='secret key' --add env
```

## Build Settings

APIDOC_HOST
- Location of the apidoc api, examples:
  - http://somehost.com/api
  - /custom-api-route

PREFIX
- prefix for js and css assets. Defaults to /
  - /assets

TITLE
- The default title is APIDOC, this can be customized for a deployment
- If specified this removes the github icon and link

GITHUB_CLIENT_ID
- the client ID issued by github for auth - defaults so apibuilder's client ID.

GITHUB_REDIRECT_URL
- the URL to redirect back to after github authorization - defaults to https://ui.apibuilder.io/login

Example:

```shell
APIDOC_HOST='/my-api' PREFIX='/assets' TITLE='My Company' GITHUB_REDIRECT_URL='http://localhost:8080/login' yarn build
```
