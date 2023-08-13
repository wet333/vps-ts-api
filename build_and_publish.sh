#!/bin/bash

# Default tag to 'latest' if not provided
TAG=${1:-latest}

DOCKERHUB_USERNAME="wetagustin"
IMAGE_NAME="ts-api-v2"

sudo docker login

# Building the Docker image
echo "Building Docker image with tag: $TAG"
sudo docker build -t $DOCKERHUB_USERNAME/$IMAGE_NAME:$TAG .

# Pushing the image to Docker Hub
echo "Pushing Docker image to Docker Hub with tag: $TAG"
sudo docker push $DOCKERHUB_USERNAME/$IMAGE_NAME:$TAG

echo "Done!"
