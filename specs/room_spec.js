const assert = require ('assert');
const Room = require ('../room.js');

 //Arrange
 let room;
 beforeEach( function(){
     room = new Room(20)
 });

 it("it should have a size", function(){
    //Act
    const actual = room.size;
    //Assert
    assert.strictEqual(actual, 20);
});   