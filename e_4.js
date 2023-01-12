'use strict';

function Electro(name, power) {
    this.name = name;
    this.power = power;
    this.on_off = false;

    this.on = function() {
        if (this.on_off == false) {
            this.on_off = true;
            console.log('Включение!');
        } else {
            console.log('Уже включен!');
        }
    }
    
    this.off = function() {
        if (this.on_off == true) {
            this.on_off = false;
            console.log('Выключение!');
        } else {
            console.log('Уже выключен!');
        }
    }
    
}


let lamp = new Electro('lamp', 50);
let comp = new Electro('comp', 400);

lamp.on();
lamp.color = 'red';

comp.off();
comp.reboot = function() {
    console.log('Компьютер Перезагружается!');
}
comp.reboot()

console.log(`Название: ${lamp.name}`);
console.log(`Цвет лампы: ${lamp.color}`);
console.log(`Потребляемая мощьность копьютера: ${comp.power} Вт`);
