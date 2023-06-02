const qrcode = require('qrcode');

const fs = require('fs')

const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');

const client = new Client({
  authStrategy: new LocalAuth()
});


client.on('qr', qr => {
    qrcode.toFile('qr.png', qr, { small: true }, (err) => {
        if (err) {
            console.error('Error al generar el código QR:', err);
            return;
        }
        console.log('Código QR generado y guardado en qr.png');
    });
});

client.on('ready', () => {
    console.log('La conexión ha sido exitosa');
});


client.on('message', message => {
	console.log(message.body);
});


const zap1 = MessageMedia.fromFilePath(`${__dirname}/img/zap1.jpg`);
const zap2 = MessageMedia.fromFilePath(`${__dirname}/img/zap2.jpg`);
const zap3 = MessageMedia.fromFilePath(`${__dirname}/img/zap3.jpg`);
const zap4 = MessageMedia.fromFilePath(`${__dirname}/img/zap4.jpg`);
const zap5 = MessageMedia.fromFilePath(`${__dirname}/img/zap5.jpg`);

client.on('message', message => {
	if(message.body === 'hola') {
		client.sendMessage(message.from, 'Hola te estas comunicando con el bot de Zapatillas tigre, escribe: "productos"');
	}if(message.body === 'productos') {
		client.sendMessage(message.from,'Opcion : "1" | Zapatillas 1 |');
        client.sendMessage(message.from,'Opcion : "2" | Zapatillas 2 |');
        client.sendMessage(message.from,'Opcion : "3" | Zapatillas 3 |');
        client.sendMessage(message.from,'Opcion : "4" | Zapatillas 4 |');
        client.sendMessage(message.from,'Opcion : "5" | Zapatillas 5 |');
    }
    if(message.body === '1') {
		client.sendMessage(message.from,zap1);
    }
    if(message.body === '2') {
		client.sendMessage(message.from,zap2);
    }
    if(message.body === '3') {
		client.sendMessage(message.from,zap3);
    }
    if(message.body === '4') {
		client.sendMessage(message.from,zap4);
    }
    if(message.body === '5') {
		client.sendMessage(message.from,zap5);
    }
});

client.initialize();

client.on('disconnected', (reason) => {
  console.log(`WhatsApp desconectado: ${reason}`);
  client.initialize();
});
