const assert = require ('assert');
const Painter = require ('../painter.js');
const Paint = require ('../paint.js');
const Room = require ('../room.js');


describe("Painter", function (){

    //Arrange
    let paint;
    beforeEach( function(){
        paint1 = new Paint("Blue", 15)
        paint2 = new Paint("Green", 5)
        paint3 = new Paint("Magnolia", 30)

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
    painter.addStock(paint1);
    //Assert
    assert.deepStrictEqual(painter.stock, [paint1]);
    })

    it('stock should start empty', function(){
        assert.deepStrictEqual(painter.stock, []);
    })

    it("Has been painted by painter", function(){
        painter.paintRoom(room)
        assert.strictEqual(room.isPainted, true) 
    })

    it("Painter has spilled all the paint ", function(){
        painter.spillPaint(paint1)
        assert.strictEqual(paint1.litre, 0);
    });   

    it("Painter can check paint ", function(){
        painter.addStock(paint1);
        painter.addStock(paint2);
        painter.addStock(paint3);
        const actual = painter.checkPaint(painter.stock);
        assert.strictEqual(actual, 50);
    });   

    it("Not enough paint to paint room", function(){ 
        painter.addStock(paint2);
        const actual = painter.sufficientPaint(room)
        assert.strictEqual(actual, false);
    });   

    it("Enough paint to paint room", function(){ 
        painter.addStock(paint3);
        const actual = painter.sufficientPaint(room);
        assert.strictEqual(actual, true);
    });   

})