var num = +prompt('Введіть число від 0 до 9');
switch (num) {
    case 0:
        num = ")";
        break;
    case 1:
        num = "!";
        break;
    case 2:
        num = "@";
        break;
    case 3:
        num = "#";
        break;
    case 4:
        num = "$";
        break;
    case 5:
        num = "%";
        break;
    case 6:
        num = "^";
        break;
    case 7:
        num = "&";
        break;
    case 8:
        num = "*";
        break;
    case 9:
        num = "(";
        break;
    default:
        alert("Число завелике або ви ввели символ");
}
if (num != NaN)
{
    alert(`Символ цієї клавіші - ${num}`);
}