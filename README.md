# generator-smag
generator for smag for Solid webapps, using lit-element, evejs

# install
- prerequis : nodejs LTS, npm
- in case of EACCES error change permission on /usr/local/lib/node_modules : https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally or  https://flaviocopes.com/npm-fix-missing-write-access-error/)

```
# change permission
sudo chown -R $USER /usr/local/lib/node_modules
```

- install 'yo' globally (npm install -g yo)
- create a directory for your 'my-app' & cd in (mkdir my-app && cd my-app)
- install globally 'generator-smag' (npm install -g generator-smag)
- generate 'smag' (yo smag)
```
npm install -g yo
mkdir my-app && cd my-app
npm install -g generator-smag
yo smag
```
- run the dev server
```
npm run dev
```
- prod
```
npm run build
```

# make a gh-pages branches & publish to gh-pages
https://stackoverflow.com/questions/36782467/set-subdirectory-as-website-root-on-github-pages

create subbranch with dist folder
- comment the dist folder in the .gitignore file

```
git add dist -f && git commit -m "Initial dist subtree commit"
```

- build & publish to gh-pages

```
npm run build && git subtree push --prefix dist origin gh-pages

```

- short cut for publish a change to gh-pages
```
npm run build
git add .
git commit -m "app updated"
git push
git subtree push --prefix dist origin gh-pages



# debug
https://yeoman.io/authoring/debugging.html
- OS X / Linux
DEBUG=yeoman:generator

- Windows
set DEBUG=yeoman:generator
