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
    if (this.checkPaint >= room.size) {
        return true
    } else {
        return false
    }

}
module.exports = Painter;