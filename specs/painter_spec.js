const assert = require ('assert');
const Painter = require ('../painter.js');

describe("Painter", function (){

it("should add stock", function(){
    //Arrange
    const stock = "Paint";
    //Act
    Painter.addStock(stock)
    //Assert
    assert.deepStrictEqual(painter.stock, ["Paint"])})

})