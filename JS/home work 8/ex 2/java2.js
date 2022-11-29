var birthYear = +prompt('Ваш рік народження');
if (birthYear % 400 == 0 || (birthYear % 4 == 0 && birthYear % 100 != 0))
{
    alert(`Високосний`);
}
else
{
    alert(`Не високосний`);
}