const Painter = function (stock) {
    this.stock = [];
}

Painter.prototype.stockNumber = function () {
  return this.stock.length;
}
        
Painter.prototype.addStock = function (paint) {
  this.stock.push(paint);
}

Painter.prototype.paintRoom = function (room) {
    room.isPainted = true
}

Painter.prototype.spillPaint = function (paint) {
    paint.litre = 0;
}

Painter.prototype.checkPaint = function (stock) {
        var total = 0;
        for (paint of this.stock) {
            total = total += paint.litre
             }
        return total;
 }
  
Painter.prototype.sufficientPaint = function(room) {
    enoughPaint = (this.checkPaint() >= room.size) ? true:false 
    return enoughPaint

}

Painter.prototype.paint = function(room){
    for (paint of this.stock) {
        paintUsed = paint.litre -= room.size
    }    
    return paintUsed;
}

Painter.prototype.removeStock = function (){
    for (paint of this.stock)
    if (paint.litre == 0){
        this.stock.pop()
}}
module.exports = Painter;