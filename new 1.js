// Конструктор класса Rectangle
function Rectangle(width, height)
{
  // Свойства класса
  this.width  = width;
  this.height = height;
}
// Методы класса
Rectangle.prototype.square = function () { return this.width * this.height;};

// Работа с построенным классом
var rect1 = new Rectangle(1,2);   // Создали первый экземпляр
var rect2 = new Rectangle(10,20); // Создали второй экземпляр
alert(rect1.square()); // 2   -- нашли площадь первого прямоугольника
alert(rect2.square()); // 200 -- нашли площадь второго прямоугольника

// Проверим, что находится в построенных объектах
function alertob(ob)
{
  var str = "{";
  for(p in ob) str += p+":"+ob[p]+",";
  str = str.substring(0, str.length-1) + "}";
  alert(str);
}
var rect = new Rectangle(12,85);  
alertob(rect); // {width:12,height:85,
               //  square:function () { return this.width*this.height;}}
