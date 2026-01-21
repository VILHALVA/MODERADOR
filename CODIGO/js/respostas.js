let responses = {
    "help": {
        text: "👮‍♂️Bem-vindo ao menu de ajuda:",
        buttons: ["💁🏻‍♂️BÁSICO", "🙋🏻‍♂️AVANÇADO", "🕵🏼‍♂️ESPECIALISTAS", "💆🏻‍♂️PROFISSIONAL"]
    },
    "💁🏻‍♂️BÁSICO": {
        text: "COMANDOS BÁSICOS:\n\n" +
            "👮🏻Disponível para Admins & Moderadores.\n" +
            "🕵🏻Disponível para Admins.\n\n" +
            "👮🏻/reload: Atualiza a lista de Admins e suas permissões.\n" +
            "🕵🏻/settings: Gerencia todas as configurações do Bot relativas ao grupo.\n" +
            "👮🏻/ban: Banir usuário do grupo sem possibilidade de retorno pelo link.\n" +
            "👮🏻/mute: Usuário pode ler mensagens mas não pode escrever no grupo.\n" +
            "👮🏻/kick: Remove usuário do grupo com possibilidade de retorno pelo link.\n" +
            "👮🏻/unban: Permite que usuários banidos retornem pelo link do grupo.\n" +
            "👮🏻/info: Fornece informações sobre o usuário.\n" +
            "👮🏻/infopvt: Envia as informações do usuário no chat privado.\n" +
            "◽️ /staff: Mostra a lista completa da equipe de suporte."
    },
    "🙋🏻‍♂️AVANÇADO": {
        text: "COMANDOS AVANÇADOS: GERENCIAMENTO DE ADVERTÊNCIAS!\n\n" +
            "🕵🏻Disponível para Admins.\n" +
            "👮🏻Disponível para Admins & Moderadores.\n" +
            "🛃Disponível para Admins & Limpadores.\n\n" +
            "👮🏻/warn: Aplica uma advertência ao usuário.\n" +
            "👮🏻/unwar: Remove uma advertência do usuário.\n" +
            "👮🏻/warns: Ver e gerenciar advertências do usuário.\n" +
            "🕵🏻/delwarn: Apaga mensagem e aplica advertência ao usuário.\n" +
            "🛃/del: Apaga a mensagem selecionada.\n" +
            "🛃/logdel: Apaga a mensagem e envia para o Canal de Registros.\n" +
            "◽️/me: Envia no chat privado informações do usuário, do grupo, advertências, regras e palavras proibidas.\n" +
            "🕵🏻/send: Permite enviar uma postagem usando HTML no grupo através do Bot. Exemplo: /send Bom dia!\n" +
            "👮🏻/intervention: Solicita a intervenção de um membro do Suporte Oficial do Bot."
    },
    "🕵🏼‍♂️ESPECIALISTAS": {
        text: "COMANDOS PARA ESPECIALISTAS: MENSAGENS FIXADAS!\n\n" +
            "👥Disponível para todos usuários.\n" +
            "👮🏻Disponível para Admins & Moderadores.\n" +
            "🕵🏻Disponível para Admins.\n\n" +
            "👥/geturl: Respondendo uma mensagem e usando este comando, será enviado o link correspondente. Funciona apenas em supergrupos com usuário público.\n" +
            "🕵🏻/inactives [dias]: Envia no privado uma lista de usuários inativos nos últimos dias, com opção de punição.\n" +
            "🕵🏻/pin [mensagem]: Envia uma mensagem através do Bot e a fixa.\n" +
            "🕵🏻/pin: Fixa a mensagem respondida.\n" +
            "🕵🏻/editpin [mensagem]: Edita a mensagem atualmente fixada (se enviada pelo Bot).\n" +
            "🕵🏻/delpin: Remove a mensagem fixada.\n" +
            "🕵🏻/repin: Remove e fixa novamente a mensagem atual, com notificação.\n" +
            "👥/pinned: Mostra a mensagem atualmente fixada.\n" +
            "🕵🏻/list: Envia no chat privado a lista de usuários e o número de mensagens enviadas.\n" +
            "🕵🏻/list roles: Envia no privado a lista de cargos especiais atribuídos aos usuários.\n" +
            "🕵🏻/graphic: Envia um gráfico com a tendência de crescimento do grupo.\n" +
            "🕵🏻/trend: Envia as estatísticas de crescimento do grupo."
        },
        "💆🏻‍♂️PROFISSIONAL": {
        text: "SUPORTE DO GRUPO!\n\n" +
            "@ADM_GROUP_BOT permite uma ligação completa entre o grupo principal e o grupo de suporte.\n\n" +

            "▫️Adicionar @ADM_GROUP_BOT ao grupo principal e torná-lo administrador.\n" +
            "▫️Adicionar @ghStaffBot somente ao grupo de suporte.\n" +
            "▫️O dono do grupo principal deve escrever no grupo de suporte /gruppostaff e seguir as instruções do bot.\n" +
            "▫️Após encaminhar a mensagem, volte ao grupo de suporte e selecione SIM para concluir a ligação.\n\n" +
            "COMANDOS UTILIZÁVEIS NO GRUPO DE SUPORTE:\n\n" +
            "▪️/ban, /kick, /unban, /info, /infopvt: Comandos administrativos (não utilizados por resposta).\n" +
            "▪️/annuncio [mensagem]: Envia uma mensagem para o(s) grupo(s) principal(is).\n" +
            "▪️/stat: Mostra estatísticas dos grupos vinculados.\n" +
            "▪️Comandos personalizados e respostas automáticas.\n\n" +

            "⚠️ATENÇÃO!\n" +
            "É possível vincular mais de um grupo ao grupo de suporte, porém todas as ações executadas (banimentos, anúncios, etc.) serão aplicadas em todos os grupos conectados."
    }
};

