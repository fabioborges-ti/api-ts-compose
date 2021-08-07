FROM node:alpine

WORKDIR /usr/app

COPY . .

RUN npm install && \
    npm run compile && \  
    cd .dist

COPY . . 

EXPOSE 3050
