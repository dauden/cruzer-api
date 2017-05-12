FROM dauden/node-base

MAINTAINER Dau Den ®, anh.nguyen@codingland.com

WORKDIR /api

# Exclude npm cache from the image
VOLUME /root/.npm

COPY ./package.json /api/package.json

RUN npm set progress=false && \
   npm install #--cache-min 9999999999

COPY . /api
USER root
RUN mkdir /api/tmp
RUN mkdir /api/tmp/uploads
RUN chown -R node:node /api

USER node

EXPOSE 9000
CMD ["node server.js"]