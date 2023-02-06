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

# create one or several directories
mkdir dir_1 
mkdir dir_1 dir_2 dir_3

# create nested directories
mkdir -p one/two/three

# create in the home directory
mkdir ~/Projects

# create directoy & create files
mkdir project && touch project/index.html

# create multiple repositories
mkdir my-photos-{1990...2020}
```

## 4 - `rm` - remove files and directories
```bash
# basic command
rm <file-name>
rm -r <directory-name>

# remove a simple file
rm file1.txt

# open a prompt before removal
rm -i file-1

# remote a directoy
rm -r /images

# being verbose
rm -v filename

# removing directories, showing prompt, and printing verbose output
rm -rvi projects

```
