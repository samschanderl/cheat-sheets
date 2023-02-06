# Basic Linux Commands

## 1 -`cd`- change directory
```bash
# basic command
cd <directory-name>

# go one directory upwards
cd ..

# go two directories upwards
cd../..

# change to root directory
cd /

# change into the home directory
cd ~
```

## 2 -`touch`- create files
```bash
# basic command
touch <file-name>

# create several files
touch index.html style.css script.js

# create file in a specific directory (only of directory exists)
touch project/src/js/script.js

```

## 3 -`mkdir`- make a new directory
```bash
# basic command
mkdir <directory-name>

# create nested directories
mkdir -p one/two/three

# create in the home directory
mkdir ~/Projects

# create directoy & create files
mkdir project && touch project/index.html
```
