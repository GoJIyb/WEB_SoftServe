var size = prompt('Введіть обсяг флешки в ГБ');
size = size * 1024;
var file = parseInt(size / 820);
alert(`буде записано ${file} файлів обсягом 820мб`);