FROM node:lts-alpine as build

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn --frozen-lockfile
COPY webpack.config.js .
COPY webpack.prod.js .
COPY babel.config.json .
COPY public public
COPY src src
RUN yarn run build:prod

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY etc/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
