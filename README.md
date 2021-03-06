
# Hapi.js Playground


## Testing PM2 issue 744

https://github.com/Unitech/PM2/issues/744

Currently testing PM2 watch with Hapi on CentOS 6.5 (seems to be working on OSX fine)

```
# setup
npm install git://github.com/Unitech/pm2#master -g
node -v # should be 0.10.32
pm2 -v # should be 0.11.0
tail -f ~/.pm2/pm2.log&

# app
git clone git://github.com/atomantic/hapi_playground.git
cd hapi_playground
npm install
pm2 start process.json

# test
curl -m 5 http://localhost:46100
sed -i 's/Hello Hapi/Hello Hapi 1/' index.js
curl -m 5 http://localhost:46100
sed -i 's/Hello Hapi 1/Hello Hapi 2/' index.js
curl -m 5 http://localhost:46100
```
So far, all good...

But now, let's wipe it and try again...
```
pm2 kill;
cd ../;
rm -rf hapi_playground;
git clone git://github.com/atomantic/hapi_playground.git
cd hapi_playground
npm install
pm2 start process.json
curl -m 5 http://localhost:46100
sed -i 's/Hello Hapi/Hello Hapi 1/' index.js
curl -m 5 http://localhost:46100
```
This time the curl fails:

```
curl: (28) Operation timed out after 5000 milliseconds with 0 bytes received
```

If it doesn't, let's try another modification:

Let's add memcached:

```
pm2 kill
git checkout index.js;
sed -i 's/\/\/var memcached/var memcached/' index.js
pm2 start process.json
curl -m 5 http://localhost:46100
sed -i 's/Hello Hapi/Hello Hapi 1/' index.js
curl -m 5 http://localhost:46100
```

Curls should work without returning (do they?): 
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