function contactWhatsApp() {
    const phoneNumber = '5551994239903';
    const message = 'Olá Nutri Bela! Eu vim pelo seu site e gostaria de saber mais sobre os serviços de nutrição.';

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
}