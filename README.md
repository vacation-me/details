# Listing Details

A full-stack React component that recreates the listing details section of an AirBnB listing page, including:

- Overview (title, type, location, host, capacity)
- Highlights
- Description
- Amenities
- Sleeping arrangements
- House rules
- Cancellation policy
- Video tour (add-on to what AirBnB actually has)

Data is randomly generated to fill in each part of the component.

## Related Projects

- https://github.com/HalalGuys/navigation
- https://github.com/HalalGuys/reviews
- https://github.com/HalalGuys/bookings
- https://github.com/HalalGuys/photos

## Build with...

### System Requirements

- Node >=6.7.0 (runtime environment)
- npm >=6.0 (dependency manager)
- MongoDB >=3.0 (database)

### Prod Dependencies (installed with npm)

- axios (sending )
- body-parser (handling requests on server)
- css-modules (modular styles)
- faker (data generation)
- mongoose (database connections)
- nodemon (running/watching server)
- prop-types (validating component data)
- react (component library)
- react-dom (rendering component)
- react-icons (rendering special icons)

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

## Setting Up

The server for this component is run locally on port 3001. It can be run either directly with NPM scripts from local files or from its respective container on DockerHub (see more below).

When the server is running, navigating to _localhose:3001/listing/[id from 1 to 100]_ should display a listing details page (with unique data for the given id).

_By default, the static js bundle is served from S3; to serve from localhost, change the appropriate commented-out lines in public/index.html._

> All commands below to be run from within the root directory

### Running with npm

#### Installing Dependencies

```sh
npm install -g webpack
npm install
```

#### Seeding Database

```sh
npm run seed
```

#### Building Local Client Bundle

> NOTE: The files built in this way will only be served if you change the script tags used in public/index.html!

```sh
npm run build:dev
```

#### Building Client Bundle to S3

```sh
npm run build:prod
```

#### Running Server

> NOTE: This uses nodemon, so changes will update the server environment automatically.

```sh
npm run start
```

### Running with Docker

_NOTE: If you plan on running with Docker, please modify the `build:docker` script in `package.json` to add tags. For example:_

Current script:

```sh
docker build . -t bcronin2/fec-airbnh-details && docker push bcronin2/fec-airbnh-details
```

Your script:

```sh
docker build . -t bcronin2/fec-airbnh-details:MY_FORK && docker push bcronin2/fec-airbnh-details:MY_FORK
```

You should also update line 5 in `docker-compose.yml` with this new tag.

#### Building Container to DockerHub

```sh
npm run build:docker
```

#### Running Container from DockerHub (includes seeding database)

> Note that this will just take the latest image of this repo on DockerHub. To update that image based on the current state of the repo, run `npm run build:docker`.

```sh
docker-compose up (-d)
```

### Maintenance

#### Testing

```sh
npm run test
```

#### Linting

```sh
npm run lint
```
