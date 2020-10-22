# Stage 1: Build Gatsby
FROM node
# RUN \
#   apk add --no-cache python make g++ && \
#   apk add vips-dev fftw-dev --update-cache \
#   --repository http://dl-3.alpinelinux.org/alpine/edge/community \
#   --repository http://dl-3.alpinelinux.org/alpine/edge/main \
#   && rm -fR /var/cache/apk/*

WORKDIR /app

COPY ./package.json .

# RUN npm install
RUN npm install -g gatsby-cli

COPY . .

RUN npm run build

# Stage 2: Serve the site
FROM nginx
WORKDIR /app
COPY --from=0 /app/public /usr/share/nginx/html/
