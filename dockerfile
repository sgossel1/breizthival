# Build node app
FROM node:latest as build-stage

WORKDIR /app

ARG DOCKER_MONGO_HOST
ARG DOCKER_APP_PORT
ENV DOCKER_MONGO_HOST ${DOCKER_MONGO_HOST}
ENV DOCKER_APP_PORT ${DOCKER_APP_PORT}

COPY ./package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:12.10.0-alpine

# Create app directory
WORKDIR /usr/src/app as production-stage

ARG DOCKER_MONGO_HOST
ARG DOCKER_APP_PORT
ENV DOCKER_MONGO_HOST ${DOCKER_MONGO_HOST}
ENV DOCKER_APP_PORT ${DOCKER_APP_PORT}

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./package.json .

# If you are building your code for production
RUN npm install --only=production
# If you are not building for production
# RUN npm install

# Bundle app source
COPY . .
COPY --from=build-stage /app/dist ./dist
EXPOSE 80
CMD [ "npm", "start" ]