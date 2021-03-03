module.exports = {
    name: 'cal',
    description: "Calculates something!",
    execute(client, message, args) {
        let method = args[0];
        let firstNumber = Number(args[1]);
        let secondNumber = Number(args[2])
        const operations = ['add', 'subtract', 'multiply', 'divide'];

        if (!method) return message.reply('please state a operation');//if (!args[0]) = no method

        if (!operations.includes(method)) return message.reply('when choosing an operation please select add, subtract, multiply or divide');//no add, subtract, multiply, divide
        
        if (!args[1]) return message.reply('please state two number to put into the calculation');//no first no.

        if (!args[2]) return message.reply('please state two number to put into the calculation');//no sec no.

        if(isNaN(firstNumber)) return message.reply('the first number you stated is not a number');//first is not number

        if(isNaN(secondNumber)) return message.reply('the second number you stated is not a number');//second is not number

        if (method === 'add') {
            let doMath = firstNumber + secondNumber
            message.channel.send(`${firstNumber} + ${secondNumber} = ${doMath}`);
        }

        if (method === 'subtract') {
            let doMath = firstNumber - secondNumber
            message.channel.send(`${firstNumber} - ${secondNumber} = ${doMath}`);
        }

        if (method === 'multiply') {
            let doMath = firstNumber * secondNumber
            message.channel.send(`${firstNumber} * ${secondNumber} = ${doMath}`);
        }

        if (method === 'divide') {
            let doMath = firstNumber / secondNumber
            message.channel.send(`${firstNumber} / ${secondNumber} = ${doMath}`);
        }
    }
}