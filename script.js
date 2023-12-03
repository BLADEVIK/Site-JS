   
   function monthNumber(a){
      a=prompt(`Введите число месяца`);

     if ((a > 0) && (a < 3)) {  
       alert(`Зима`); 
    }
    else if ((a > 11) && (a < 13)) {
        alert(`Зима`); 
    }
    
    else if ((a > 2) && (a < 6)) {
        alert(`Весна`);
    }
    else if ((a > 5) && (a < 9)) {
        alert(`Лето`);
    }
    else if ((a > 8) && (a < 12)){
        alert(`Осень`);
    }

    else {
        alert(`Неверно введен месяц`)
    }
};
function gameFruit(){ 
const gamesArray = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
let gamesArrayNew = gamesArray.sort(() => Math.random() - 0.5);
alert(`Выбери первый и последний элемент: `+ gamesArrayNew);
for (let i = 0; i < gamesArrayNew.length; i++) {
    let firstFruit = gamesArrayNew[0];
    let lastFruit = gamesArrayNew[6];
    let userFirstFruit = prompt(`Чему равнялся первый элемент массива?`);
    let userLastFruit = prompt(`Чему равнялся последний элемент массива?`);
    if ((firstFruit.toLowerCase() === userFirstFruit.toLowerCase()) && (lastFruit.toLowerCase() === userLastFruit.toLowerCase())) {
       alert(`угадал оба элемента`) 
       break
    }
    else if ((firstFruit.toLowerCase() !== userFirstFruit.toLowerCase()) && (lastFruit.toLowerCase() !== userLastFruit.toLowerCase())){
        alert(`Оба ответа неверны`)
        break
    }
    else {
        alert(`Вы были близки к победе!`)
        break
    }
    
}
}   
   



