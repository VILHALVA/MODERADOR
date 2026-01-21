$(document).ready(function () {
    addMessage(
        '🤖MODERADOR',
        './imagens/ROBO.jpg',
        "👮‍♂️Sou um bot completo para ajudar você a gerenciar seus grupos de forma simples, eficiente e segura. Clique no botão COMANDOS para ver a lista de comandos disponíveis.",
        'sender-2'
    );

    $('#send-btn').on('click', function () {
        let userInput = 'help';

        addMessage(
            '👤VOCÊ',
            './imagens/VOCE.jpg',
            userInput,
            'sender-1'
        );

        setTimeout(function () {
            let botResponse = getBotResponse(userInput);

            addMessage(
                '🤖MODERADOR',
                './imagens/ROBO.jpg',
                botResponse.text,
                'sender-2'
            );

            if (botResponse.buttons) {
                showInlineButtons(botResponse.buttons);
            }
        }, 800);
    });

    $(document).on('click', '.inline-buttons button', function () {
        let buttonText = $(this).text();

        addMessage(
            '👤VOCÊ',
            './imagens/VOCE.jpg',
            buttonText,
            'sender-1'
        );

        setTimeout(function () {
            let botResponse = getBotResponse(buttonText);

            addMessage(
                '🤖MODERADOR',
                './imagens/ROBO.jpg',
                botResponse.text,
                'sender-2'
            );

            if (botResponse.buttons) {
                showInlineButtons(botResponse.buttons);
            }
        }, 800);
    });
});

function formatCommands(text) {
    return text
        .replace(/\n/g, "<br>")

        .replace(/(\/[a-zA-Z0-9_]+)(:)?/g,
            '<span class="copy-item command" data-copy="$1"><strong>$1</strong>$2</span>'
        )

        .replace(/(@[a-zA-Z0-9_]+)/g,
            '<span class="copy-item mention" data-copy="$1"><strong>$1</strong></span>'
        );
}

function addMessage(senderName, avatarUrl, text, senderClass) {
    if (senderClass === 'sender-2') {
        text = formatCommands(text);
    }

    let messageHtml = `
        <div class="message ${senderClass}">
            <div class="avatar">
                <img src="${avatarUrl}" alt="${senderName}">
            </div>
            <div class="arrow ${senderClass === 'sender-1' ? 'arrow-left' : 'arrow-right'}"></div>
            <div class="message-bubble">
                <div class="sender-name">${senderName}</div>
                <p class="message-text">${text}</p>
            </div>
        </div>
    `;

    const $message = $(messageHtml);
    $('#chat-container').append($message);

    const container = $('#chat-container');

    container.animate({
        scrollTop:
            $message.offset().top
            - container.offset().top
            + container.scrollTop()
            - 20   
    }, 300);
}

function getBotResponse(userInput) {
    let lowerCaseInput = userInput.toLowerCase();

    for (let key in responses) {
        if (lowerCaseInput.includes(key.toLowerCase())) {
            return responses[key];
        }
    }

    return responses["default"];
}

function showInlineButtons(buttons) {
    let buttonsHtml = `
        <div class="inline-buttons">
            ${buttons.map(button => `<button>${button}</button>`).join('')}
        </div>
    `;

    const $buttons = $(buttonsHtml);
    $('#chat-container').append($buttons);

    // 🔥 scroll até o início dos botões (estilo Telegram)
    $('#chat-container').animate({
        scrollTop: $buttons.position().top + $('#chat-container').scrollTop()
    }, 300);
}

$(document).on("click", ".copy-item", function () {
    const element = $(this);
    const textToCopy = element.data("copy");
    const originalText = element.text();

    navigator.clipboard.writeText(textToCopy).then(() => {
        element.addClass("copied");
        element.text("✔Copiado");

        setTimeout(() => {
            element.removeClass("copied");
            element.text(originalText);
        }, 900);
    });
});
