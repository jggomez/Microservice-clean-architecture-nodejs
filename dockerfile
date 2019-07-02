# Get the image with nodeJS and NPM
FROM node:carbon
# Create a working directory
WORKDIR /usr/src/app
# A wilcard is used to ensure both package.json and package-lock.json are copied 
COPY package*.json ./
# If you are building your code for production
# RUN npm install --only=production
RUN npm install
# Copy entire app source
COPY . .
# The app is binding to port 300 equal to server HAPI
EXPOSE 3000
# Run node userService.js to start the server
CMD ["npm", "start"]