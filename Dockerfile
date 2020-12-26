# Stage 1: Build Gatsby
FROM node:14

WORKDIR /app

COPY ./package.json .

RUN npm install
RUN npm install -g gatsby-cli

COPY . .

RUN npm run build

# Stage 2: Serve the site
FROM nginx
WORKDIR /app
COPY --from=0 /app/public /var/www/html
#/usr/share/nginx/html/
