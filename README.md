## Publish sciprt usage

First login into docker hub using
```bash
docker login
```

### Build and Publish with Default Tag (latest):

Before publishing, make sure to replace "your_dockerhub_username" variable with your actual Docker Hub username.
```bash
./build_and_publish.sh
```
This will build the Docker image and push it to Docker Hub with the `latest` tag.

### Build and Publish with a Custom Tag:
Or you can use a custom tag...
```bash
./build_and_publish.sh v1.0.0
```
Replace `v1.0.0` with your desired tag. This will build the Docker image and push it to Docker Hub with the specified tag.