# Step 1: Use the official Node.js 16 image as the base image
FROM node:16

# Step 2: Set the working directory in the Docker container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package.json ./

# Step 4: Install project dependencies
RUN npm i

# Step 5: Copy the project files into the Docker container
COPY . .

# Step 7: Define the command to run the app
CMD ["npm", "run", "start"]
