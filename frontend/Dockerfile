# Use the official Node.js runtime as a parent image (Ubuntu-based)
FROM node:18

# Install pnpm
RUN npm install -g pnpm

# Set the working directory in the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package*.json pnpm-lock.yaml ./

# Install all dependencies (including dev dependencies)
RUN pnpm install --no-frozen-lockfile

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the application in development mode
CMD ["pnpm", "dev"] 