const assert = require ('assert');
const Paint = require ('../paint.js');


describe("Paint", function (){

 //Arrange
 let paint;
 beforeEach( function(){
     paint = new Paint("Blue", 15)
 });

 it("it should have a colour", function(){
    //Act
    const actual = paint.colour;
    //Assert
    assert.strictEqual(actual, "Blue");
});   

it("it should have liters", function(){
    assert.strictEqual(paint.litre, 15);
});   



})
