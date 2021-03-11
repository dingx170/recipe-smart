var chai = require('chai');
var chaiHttp = require('chai-http')

var expect = chai.expect;
chai.use(chaiHttp);

describe('Test posting one recipe', function(){
    var response;
    var responseBody;

    before(function (done) {
        chai.request("http://localhost:8080")
			.post("/myrecipes/123")
            .send({
                name: 'testname',
                member_id: 123,
                steps: [{step: 'test step 1'}],
                ingredients: [{name: 'test ig', unit: 'test unit', count: 1}],
                group: 1,
                cost: 10,
                unit_cost: 10,
                meal_type: 'Lunch',
                cuisine_type: 'Chinese'})
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
		expect(responseBody).to.have.deep.property('member_id');
		expect(responseBody).to.have.deep.property('steps');
		expect(responseBody.ingredients[0]).to.have.deep.property('name');
        expect(responseBody).to.have.deep.property('name').that.is.a('string');
        expect(responseBody).to.have.deep.property('cost').that.is.a('number');
    });

    it('Should have expected property values', function(){
        expect(responseBody.cost).to.equal(10);
        expect(responseBody.name).to.equal('testname');
        expect(responseBody.member_id).to.equal(123);
        expect(responseBody.group).to.equal(1);
        expect(responseBody.unit_cost).to.equal(10);
        expect(responseBody.recipe_id).to.not.be.null;
    });
});