# path: ./Dockerfile

#FROM node:16-alpine as build
## Installing libvips-dev for sharp Compatibility
#RUN apk update && apk add build-base gcc autoconf automake zlib-dev libpng-dev vips-dev && rm -rf /var/cache/apk/* > /dev/null 2>&1
#ARG NODE_ENV=production
#ENV NODE_ENV=${NODE_ENV}
#WORKDIR /opt/
#COPY ./package.json ./package-lock.json ./
#ENV PATH /opt/node_modules/.bin:$PATH
#RUN npm install --production
#WORKDIR /opt/app
#COPY ./ .
#VOLUME [ "/app/.tmp", "/app/src/api", "/app/src/components", "/app/public/uploads" ]
#RUN npm run build
#
#
#FROM node:16-alpine
## Installing libvips-dev for sharp Compatibility
#RUN apk add vips-dev
#RUN rm -rf /var/cache/apk/*
#ARG NODE_ENV=production
#ENV NODE_ENV=${NODE_ENV}
#WORKDIR /opt/app
#COPY --from=build /opt/node_modules ./node_modules
#ENV PATH /opt/node_modules/.bin:$PATH
#COPY --from=build /opt/app ./
#EXPOSE 1337
#VOLUME [ "/app/.tmp", "/app/src/api", "/app/src/components", "/app/public/uploads" ]
#CMD ["npm", "run","start"]

FROM node:14
## Installing libvips-dev for sharp Compatibility
RUN apt-get update && apt-get install libvips-dev -y
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY ./package.json ./package-lock.json ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN npm install
WORKDIR /opt/app
COPY ./ .
RUN npm run build
EXPOSE 1337
VOLUME [ "/app/.tmp", "/app/src/api", "/app/src/components", "/app/public/uploads" ]
CMD ["npm", "run", "develop"]

