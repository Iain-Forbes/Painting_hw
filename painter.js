const Painter = function (stock) {
    this.stock = [];
}


Painter.prototype.stockNumber = function () {
  return this.stock.length;
}
        
Painter.prototype.addStock = function(paint) {
  this.stock.push(paint);
}

module.exports = Painter;