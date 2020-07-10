# Stage 1: Build Gatsby
FROM node:alpine AS build

RUN \
  apk add --no-cache python make g++ && \
  apk add vips-dev fftw-dev --update-cache \
  --repository http://dl-3.alpinelinux.org/alpine/edge/community \
  --repository http://dl-3.alpinelinux.org/alpine/edge/main \
  && rm -fR /var/cache/apk/*

RUN npm install -g gatsby-cli

WORKDIR /app
COPY ./package.json .

RUN yarn
# RUN yarn cache clean && yarn install
COPY . .
#CMD ["npm", "start", "-H", "0.0.0.0" ]

RUN npm run build

# Stage 2: Serve the site
FROM nginx:mainline-alpine
RUN rm /usr/share/nginx/html/*
COPY --from=build /app/public /usr/share/nginx/html/
RUN ls usr/share/nginx/html -l
