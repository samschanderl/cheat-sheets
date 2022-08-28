# Github Commands

Find an overview of useful Git and Github commands.

## initialize project and start remote repository

`git init` - start new project

`git remote -v` - shows the URI of the remote repository

`git remote add origin git@github.com:XXX.git` - set remote repository

`git checkout main` - create a main branch that tracks the changes of the remote main branch

`git checkout - b <BRANCH-NAME>` - create a new branch and change inside it

`git pull` - pull latest changes from the remote repository

## Push and pull changes

`git status` - shows the current changed and tracked files 

`git branch` - shows the current branch you're on 

`git add <FILE-NAME>` - add a specific file to the staging area

`git add .` - add all files to the staging area

`git commit -m "Your Message"` - commit the changes to be tracked with a custom message

`git push origin main` - push the changes to the main branch (when no branch is defined yet)

`git push` - push the changes to the current working branch

### You might need to set your user name and email

`git config --global user.email "yourEmail"` - set your user email

`git config --global user.name "yourName"` - set your user name

## Check for changes with git diff

`git diff <FILE1> <FILE2>` - show the changes between two files

`git diff <BRANCH1> <BRANCH2>` - show the changes that occured between two branches

## Show who made which change at what time

`git blame <FILENAME>` - returns a list of all changes with usernames and timestamps

`git blame -L startingLine,endingLine setup.py` - specify a subset of the list with starting and end point

## Login to Github via CLI

`gh auth login` - follow the authentication steps to login to your account

## Forking a project

1. Create a fork of another repo inside Github

2. `gh repo clone <YOUR USERNAME>/<REPOSITORY-NAME>` - clone the repo to your local machine

3. `cd <REPOSITORY-NAME>` - change inside the cloned repository

4. `git checkout -b <MY-BRANCH>` - create a new branch and switch to it

5. Make the necessary changes

6. `git add .` - add all files (or pick a specific one)

7. `git commit -m "Your Message"` - commit your files

8. `git push origin <M>-BRANCH>` - push to changes to the remote repository

9. Visit the repo on Github and click on "Pull Requests", then click "New Pull Requests".

10. Click on "Compare Across Forks" and select the main branch and the new branch as "fork". Then, create a pull request and give it a title and description.
