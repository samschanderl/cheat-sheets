# Simple Docker Processes

Link to Docker Documentation: [Click Here](https://docs.docker.com/get-started/02_our_app/)

#### Create dockerfile
```bash
touch Dockerfile
```

#### Build Container image
```bash
cd /path/to/app

docker build -t container-name .
```

#### Start an app container
```bash
docker run -dp 3000:3000 container-name
```
*Notes*
- p flag:create mapping between host port 3000 and container port 3000
- d flag: detached mode - run container in the background


#### Update the source code
- when making changes to the source code, you need to build an updated version of the image and start a new container
- you need to remove the old container first (see next step)

```bash
docker build -t container-name .
docker run -dp 3000:3000 container-name
```

#### Remove container
```bash
# get the id of the container with ps
docker ps

# stop container using id
docker stop <container-id>

# remove container using id
docker rm <container-id>
```
