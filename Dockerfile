#Fetch minified node image on alpine linux
FROM node:slim

# Declaring env
ENV NODE_ENV production

# Setting up the work directory
WORKDIR /express-docker

# Copying all file in our project
COPY . .

# Installing dependencies
RUN npm i

# Starting our application
CMD ["node", "index.js"]

# Exposing server port
EXPOSE 5000
