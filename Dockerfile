# Use a lightweight Node.js environment
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json file and install dependencies
COPY package.json ./
RUN npm install

# Copy all the rest of your application files
COPY . .

# Expose the port your application will run on
EXPOSE 3000

# Tell the container how to start your app
CMD ["npm", "start"]