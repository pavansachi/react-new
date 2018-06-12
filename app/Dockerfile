FROM nginx:1.15.0-alpine

MAINTAINER Pavan Sachi

RUN apk add --update yarn

# check version
RUN yarn --version

ADD ./ ./tmp/app

WORKDIR /tmp/app

RUN ls -a

RUN cd /tmp/app && yarn install

# WORKDIR /tmp/app

# build bundle
RUN yarn run build

# config
WORKDIR /etc/nginx/conf.d/
RUN rm default.conf
COPY ./nginx.conf ./default.conf

# ui artifacts
WORKDIR /usr/share/nginx/html
RUN rm index.html

RUN cp /tmp/app/public/index.html .
RUN cp /tmp/app/dist/bundle.js .

RUN rm -rf /tmp/app
