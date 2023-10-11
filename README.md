# BeatSheet Exercise Starter

This guide provides instructions on how to run the beat sheet client and API.

# Notes about the client

Thank you for taking the time to review this test!

In the interest of brevity, I have intentionally left out areas that all combined are quite time consuming:

- Mobile responsive design
- Animations and related states
- Form validation
- Unit & E2E testing
- Client side error reporting
- Application security
- Deploying and CI/CD

The client in it's current state is very happy-path oriented, with a focus on layout and ideation.

## System Requirements

- [Docker](https://www.docker.com/products/docker-desktop)
- [NodeJs](https://nodejs.org/en) Version 18+
- [PNPM](https://pnpm.io/)

## How to Run The Client

cd in to the `client` directory

Run the following command to install dependencies:

```bash
pnpm install
```

Run the following command to spin up the dev server:

```bash
pnpm dev
```

## How to Run The API

cd into the `server` directory

Run the following command to create the Docker container:

```bash
docker compose create
```

Run the following command to start the Docker container:

```bash
docker compose start
```

Alternatively, you can create and start the container by running:

```bash
docker compose up
```

This command will start the Docker container defined in the `docker-compose.yml` file. The BeatSheet API will be accessible at the port defined in the `docker-compose.yml` file.

## Stopping and Removing Containers

cd into the `server` directory

To stop the Docker container, you can run:

```bash
docker compose stop
```

This command will stop the running Docker container.

If you also want to remove the Docker container after stopping it, you can run:

```bash
docker compose down
```

This command will stop and remove the Docker container. Please note that any data not stored in a volume will be lost.

## Notes

Please ensure that the port defined in the `docker-compose.yml` file is not being used by any other applications to avoid any port conflict.
