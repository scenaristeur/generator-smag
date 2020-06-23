# generator-smag
generator-smag for Solid webapps, provide :
- lit-element (webcomponents),
- evejs (communication between webcomponents)
- solid-auth-client (login to Solid)

# install
- prerequis : nodejs LTS, npm
- in case of EACCES error change permission on /usr/local/lib/node_modules or other : https://flaviocopes.com/npm-fix-missing-write-access-error/ or see https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally

```
# change permission
sudo chown -R $USER {path}
#example
sudo chown -R $USER /usr/local/lib/node_modules
```

- install 'yo' globally (npm install -g yo)
- create a directory for your 'cool-app' & cd in (mkdir cool-app && cd cool-app)
- install globally 'generator-smag' (npm install -g generator-smag)
- generate 'smag' (yo smag)
- run the dev server (npm run dev)
- You should then see your favorite browser open on http://localhost:9000 and use your app

one line :
```
npm install -g yo && mkdir cool-app && cd cool-app && npm install -g generator-smag && yo smag && npm run dev
```
or progressively :
```
npm install -g yo
mkdir cool-app && cd cool-app
npm install -g generator-smag
yo smag
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


-----------------------------
# just for me
npm publish --access public

# debug
https://yeoman.io/authoring/debugging.html
- OS X / Linux
DEBUG=yeoman:generator

- Windows
set DEBUG=yeoman:generator
