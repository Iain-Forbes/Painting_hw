const assert = require ('assert');
const Painter = require ('../painter.js');
const Paint = require ('../paint.js');
const Room = require ('../room.js');


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

    let room;
    beforeEach( function(){
        room = new Room(20)
    });

    it("should add stock", function(){
    //Act
    painter.addStock(paint);
    //Assert
    assert.deepStrictEqual(painter.stock, [paint]);
    })

    it('stock should start empty', function(){
        assert.deepStrictEqual(painter.stock, []);
    })

    it("Has been painted by painter", function(){
        painter.paintRoom(room)
        assert.strictEqual(room.isPainted, true) 
    })

    it("Painter has spilled all the paint ", function(){
        painter.spillPaint(paint)
        assert.strictEqual(paint.litre, 0);
    });   


})