
# Hapi.js Playground

I'm using this to validate whether or not there is a bug in Hapi or any of the plugins or apps I'm using with it.

```
git clone git@github.com:atomantic/hapi_playground.git
cd hapi_playground
npm install
npm install -g pm2 node-inspector
gulp test
pm2 start process.json
pm2 monit
```
in another terminal type

```
brew install watch
watch curl http://localhost:3666
```

see if the memory increases on every request

## or Debug

```
node --debug index.js && node-inspector
open http://127.0.0.1:8080/debug?port=5858

```

https://github.com/felixge/node-memory-leak-tutorial