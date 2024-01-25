# Spotter Beatsheets

This guide provides instructions on how to run the beat sheet client and API.

## System Requirements

- [Docker](https://www.docker.com/products/docker-desktop)
- [NodeJs](https://nodejs.org/en) Version 18+
- [PNPM](https://pnpm.io/)

## Instructions 

**Step 1: Run the API**

cd into the `server` directory and run the following command:

```bash
docker compose up
```

**Step 2: Run the client**

cd in to the `client` directory and run the following:

```bash
pnpm install && pnpm dev
```

**Step 3: Open the project**

The following url should now be availble:

```
http://localhost:5173/ 
```

## Notes

Please ensure that the port defined in the `server/docker-compose.yml` file is not being used by any other applications to avoid any port conflict.
