var numStart = +prompt('Початкове число');
var numEnd = +prompt('Кінцеве число');
var resNum = numStart;
if (numStart == NaN || numEnd == NaN || numStart > numEnd) {
    alert(`Невірні числа`);
}
else {
    for (var i = numStart + 1; i <= numEnd; i++) {
        resNum += i;
    }
    alert(`Сума діапазону - ${resNum}`);
}