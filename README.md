# generator-smag
generator for smag for Solid webapps, using lit-element, evejs

# install
- prérequis : nodejs LTS, npm
- install yo
```
npm install -g yo
```
- download the generator
```
mkdir my-app
cd my-app
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
