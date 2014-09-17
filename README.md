
# testing gulp-istanbul issue 37

https://github.com/SBoudrias/gulp-istanbul/issues/37

```
git clone git@github.com:atomantic/lab_istanbul.git
cd lab_istanbul
npm install
gulp test
```

report should show that index.js is 100% covered, but it's showing 0%.

```
-----------------|-----------|-----------|-----------|-----------|
File             |   % Stmts |% Branches |   % Funcs |   % Lines |
-----------------|-----------|-----------|-----------|-----------|
   lab_istanbul/ |         0 |         0 |         0 |         0 |
      index.js   |         0 |         0 |         0 |         0 |
-----------------|-----------|-----------|-----------|-----------|
All files        |         0 |         0 |         0 |         0 |
-----------------|-----------|-----------|-----------|-----------|


=============================== Coverage summary ===============================
Statements   : 0% ( 0/8 )
Branches     : 0% ( 0/2 )
Functions    : 0% ( 0/2 )
Lines        : 0% ( 0/8 )
================================================================================
```

However Istanbul, reports correctly by itself:

```
⇒  istanbul cover test/index.js
Server running at: http://q.local:46000 version:  0.0.1
=============================================================================
Writing coverage object [/opt/github.com/atomantic/lab_istanbul/coverage/coverage.json]
Writing coverage reports at [/opt/github.com/atomantic/lab_istanbul/coverage]
=============================================================================

=============================== Coverage summary ===============================
Statements   : 100% ( 8/8 )
Branches     : 100% ( 2/2 )
Functions    : 100% ( 2/2 )
Lines        : 100% ( 8/8 )
================================================================================
```