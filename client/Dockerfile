FROM node:16-alpine
WORKDIR /app
ENV CHOKIDAR_USEPOLLING=true
COPY package*.json /app/
RUN ["npm", "install"]
COPY . /app
EXPOSE 3001
ENTRYPOINT ["npm", "start"]