var chai = require('chai');
var chaiHttp = require('chai-http')

var expect = chai.expect;
chai.use(chaiHttp);

describe('Test getting one recipe', function(){
    var response;
    var responseBody;

    before(function (done) {
        chai.request("http://localhost:8080")
			.get("/recipes/1")
			.end(function (err, res) {
                response = res;
                responseBody = res.body;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
				done();
			});
        });

    it('Should return only one recipe object', function (){
        expect(response).to.have.status(200);
        expect(responseBody).to.be.an("object");
    });

    it('Should have properties', function (){
		expect(responseBody).to.have.deep.property('recipe_id');
		expect(responseBody).to.have.deep.property('member_id').that.is.a('number');
        expect(responseBody).to.have.deep.property('photo').that.is.a('string');
		expect(responseBody).to.have.deep.property('steps').that.lengthOf(5);
		expect(responseBody.ingredients[0]).to.have.deep.property('name');
        expect(responseBody).to.have.deep.property('recipe_id');
        expect(responseBody).to.have.deep.property('name').that.is.a('string');
        expect(responseBody).to.have.deep.property('cost').that.is.a('number');
        expect(responseBody).to.have.deep.property('restrictions').that.lengthOf(2);
        expect(responseBody).to.have.deep.property('meal_type').that.is.a('string');
    });

    it('Should have expected property values', function(){
        expect(responseBody.recipe_id).to.equal(1);
        expect(responseBody.name).to.equal('Blueberry Pancake');
        expect(responseBody.group).to.equal(4);
        expect(responseBody.cost).to.equal(20);
        expect(responseBody.unit_cost).to.equal(20/4);
    });
});
