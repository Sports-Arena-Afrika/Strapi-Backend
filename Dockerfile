# Base image
FROM node:22-alpine AS base

# Updating and installing libvips-dev for sharp compatibility
RUN apk update && apk add --no-cache \
    build-base \
    gcc \
    autoconf \
    automake \
    zlib-dev \
    libpng-dev \
    bash \
    vips-dev \
    git

# Setting the environment variable
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# Build stage
FROM base AS build

# Copy the requirements file first (better caching)
WORKDIR /opt/
COPY package.json package-lock.json ./

# Install npm dependencies
RUN npm install -g npm node-gyp
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm ci

# Adding paths
ENV PATH=/opt/node_modules/.bin:$PATH

# development stage
FROM build AS development

# Copy app files
WORKDIR /opt/app
COPY . .

# Change ownership of the app files
RUN chown -R node:node /opt/app
USER node

# Start the development server
EXPOSE 1337
CMD ["npm", "run", "develop"]