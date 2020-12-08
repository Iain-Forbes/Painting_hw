const assert = require ('assert');
const Painter = require ('../painter.js');
const Paint = require ('../paint.js');

describe("Painter", function (){

    //Arrange
    let paint;
    beforeEach( function(){
    paint = new Paint("Blue", 15)
    });

    let painter;
    beforeEach( function(){
        painter = new Painter()
    });

    it("should add stock", function(){
    //Act
    painter.addStock(paint);
    //Assert
    assert.deepStrictEqual(painter.stock, [paint]);

    it('s stock should start empty', function(){
        assert.deepStrictEqual(painter.stock, []);
    })




})})