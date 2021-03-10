var chai = require('chai');
var chaiHttp = require('chai-http')

var expect = chai.expect;
chai.use(chaiHttp);

describe('Test getting list of recipes', function(){
    var response;
    var responseBody;

    before(function (done) {
        chai.request("http://localhost:8080")
			.get("/recipes")
			.end(function (err, res) {
                response = res;
                responseBody = res.body;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
				done();
			});
        });

        it('Should return a list of recipe object', function (){
            expect(response).to.have.status(200);
            expect(responseBody).to.lengthOf.above(19);
            expect(response.body[0]).to.be.a('object');
        });
    
        it('Should have properties for the first element', function (){
            expect(responseBody[0]).to.include.keys('recipe_id');
            expect(responseBody[0]).to.include.keys('_id');
            expect(responseBody[0]).to.have.deep.property('name');
            expect(responseBody[0]).to.have.deep.property('member_id');
            expect(response.body[0]).to.have.deep.property('steps');
            expect(responseBody[0].ingredients[0]).to.have.deep.property('name');
            expect(responseBody[0]).to.have.deep.property('name').that.is.a('string');
            expect(responseBody[0]).to.have.deep.property('cost').that.is.a('number');
            
        });
    
        it('Should have expected property for each element in it', function(){
            expect(response.body).to.satisfy(
                function (body) {
                    for(var i = 0; i < body.length; i++){
                        expect(body[i]).to.include.keys('recipe_id');
                        expect(body[i]).to.have.deep.property('name');
                        expect(body[i]).to.have.deep.property('member_id');
                        expect(body[i]).to.have.deep.property('steps');
                        expect(body[i]).to.have.deep.property('ingredients');
                    }
                    return true;
                });
        });

    

});