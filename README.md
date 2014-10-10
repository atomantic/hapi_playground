
# Hapi.js Playground


## Testing PM2 issue 744

https://github.com/Unitech/PM2/issues/744

Currently testing PM2 watch with Hapi on CentOS 6.5 (seems to be working on OSX fine)

```
git clone git://github.com/atomantic/hapi_playground.git
cd hapi_playground
npm install
npm install -g pm2 node-inspector
# allow nodejs apps to bind to port 80
# https://gist.github.com/gadr/6389682
sudo setcap 'cap_net_bind_service=+ep' `which node`
tail -f ~/.pm2/pm2.log&
pm2 start process.json
curl -m 5 http://localhost
sed -i 's/Hello Hapi/Hello Hapi 1/' index.js
curl -m 5 http://localhost
```

Should not get 
```
curl: (28) Operation timed out after 5000 milliseconds with 0 bytes received
```



## Testing memory leaks (OSX)

```
git clone git://github.com/atomantic/hapi_playground.git
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