function contactWhatsApp() {
    // Defina o número de WhatsApp e a mensagem
    const phoneNumber = '5551994239903'; // Número no formato internacional
    const message = 'Olá Nutri Bela! Eu vim pelo seu site e gostaria de saber mais sobre os serviços de nutrição.';

    // Crie a URL para o WhatsApp com o número e a mensagem formatada
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Redirecione o usuário para o link do WhatsApp
    window.open(whatsappURL, '_blank');
}