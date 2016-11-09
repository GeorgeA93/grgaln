#!/bin/bash
# See https://medium.com/@nthgergo/publishing-gh-pages-with-travis-ci-53a8270e87db
set -o errexit

# config
git config --global user.email "george.allen93@outlook.com"
git config --global user.name "GeorgeA93"

# deploy
cd dist
git init
git add .
git commit -m "Deploy to Github Pages"
# git push --force --quiet "https://${GH_TOKEN}@github.com/${GITHUB_REPO}.git" master:gh-pages > /dev/null 2>&1
git push --force --quiet "https://a0e77ddc7d0c88311fed103db443bcd41a740dc3@github.com/GeorgeA93/grgaln.git" master:gh-pages > /dev/null 2>&1