FROM nginx:1.15

MAINTAINER Pavan Sachi

# update
RUN apt-get update && \
apt-get install -y curl && \
apt-get install -y gnupg2 && \
curl -sL https://deb.nodesource.com/setup_8.x | bash - && \
apt-get install -y nodejs

# check version
RUN node -v

ADD ./ ./tmp/app

WORKDIR /tmp/app

RUN ls -a

RUN cd /tmp/app && npm install

# WORKDIR /tmp/app

# build bundle
RUN npm run build

RUN ls -a

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
