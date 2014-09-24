// test framework
var Lab = require('lab');
// shortcuts
var lab = exports.lab = Lab.script();
var before = lab.before;
var after = lab.after;
var describe = lab.describe;
var it = lab.it;
// lab.expect uses chai, FYI: http://chaijs.com/
var expect = Lab.expect;

//https://medium.com/the-spumko-suite/testing-hapi-services-with-lab-96ac463c490a
var server = require('../index');

describe('App', function(){

    describe('simple test', function(){

        it('can hit a route', function(done){

            server.inject({
                method: 'GET',
                url: '/'
            }, function(res) {
                expect(res.statusCode).to.equal(200);
                expect(res.result).to.be.instanceof(Object);
                expect(res.result.data).to.equal('good');
                done();
            });
        });

    });
});