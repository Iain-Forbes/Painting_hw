const assert = require ('assert');
const Room = require ('../room.js');

describe("Room", function (){
 //Arrange
 let room;
 beforeEach( function(){
     room = new Room(20)
 });

    it("should have a size", function(){
    //Act
    const actual = room.size;
    //Assert
    assert.strictEqual(actual, 20);
});
    it("shouldn't be painted", function(){
        assert.strictEqual(room.isPainted, false)
    })

})   