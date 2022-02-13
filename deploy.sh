#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd docs


git init
git add -A
git commit -m 'deploy'


# if you are deploying to https://mateahoward>.github.io/vue-garden
git push -f git@github.com:mateahoward/letters.git master:gh-pages

cd -