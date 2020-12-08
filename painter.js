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


module.exports = Painter;