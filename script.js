/**
 * Arquitetura Front-end Sênior | Studio Thamara Teixeira
 * Clean Code, ES2024, Performance, Web Vitals, Acessibilidade (WCAG 2.2)
 */

'use strict';

// ============================================================================
// 1. BANCO DE DADOS DOS SERVIÇOS (Dicionário Centralizado)
// ============================================================================
// Descrições persuasivas cobrindo: Para quem, Benefícios, Resultado, Tempo, Durabilidade e Indicações.
const servicesDB = {
    'premium': {
        category: 'VIP • Combo Exclusivo',
        name: 'Combo Perfect <em>Premium</em>',
        price: 'R$ 170,00',
        image: 'combo_premium',
        whatsapp: 'Olá! Gostaria de agendar o Combo Perfect Premium.',
        buttonText: 'Agendar Combo VIP',
        stats: [
            { icon: '⏳', text: '1h30min' },
            { icon: '✨', text: 'Durabilidade: 4 a 6 semanas' },
            { icon: '💎', text: 'Efeito Maquiado Editorial' }
        ],
        description: `
            <p><strong>Para quem é:</strong> Ideal para mulheres que desejam acordar prontas, dispensando o uso diário de maquiagem. A união perfeita entre sobrancelhas modeladas e cílios naturais intensamente curvados.</p>
            <p><strong>Benefícios & Resultados:</strong> Este protocolo une o Design de Sobrancelhas (com Mapeamento Visagista e Henna) ao Lash Lifting. O resultado é um olhar expandido, cílios alongados e sobrancelhas com efeito de preenchimento volumoso.</p>
            <p><strong>Diferenciais:</strong> Utilizamos produtos hipoalergênicos e nutritivos que tratam os fios enquanto modelam, garantindo a saúde biológica dos pelos a longo prazo.</p>
        `
    },
    'combo': {
        category: 'MAIS PEDIDO',
        name: 'Combo <em>Perfect</em>',
        price: 'R$ 60,00',
        image: 'combo',
        whatsapp: 'Olá! Quero agendar o Combo Perfect.',
        buttonText: 'Agendar Combo',
        stats: [
            { icon: '⏳', text: '1h' },
            { icon: '✨', text: 'Retenção na pele: ~7 dias' },
            { icon: '👄', text: 'Renovação Labial' }
        ],
        description: `
            <p><strong>Para quem é:</strong> Mulheres práticas que buscam manutenção rotineira de excelência, unindo cuidado facial básico e olhar marcante em um único agendamento.</p>
            <p><strong>Benefícios & Resultados:</strong> Combina o poder do Design com Henna para sobrancelhas impecáveis, epilação suave do buço e um Spa Labial de esfoliação e hidratação profunda. Resultados entregam um rosto limpo e expressivo.</p>
            <p><strong>Indicações:</strong> Tratamento recomendado para realizar a cada 15 ou 20 dias, ideal como protocolo preparatório antes de finais de semana ou eventos casuais.</p>
        `
    },
    'curso1': {
        category: 'FORMAÇÃO PROFISSIONAL',
        name: 'Iniciante <em>Formação</em>',
        price: 'R$ 1.000,00',
        image: 'curso.1',
        whatsapp: 'Olá! Gostaria de mais informações sobre o Curso Iniciante.',
        buttonText: 'Garantir Minha Vaga',
        stats: [
            { icon: '🎓', text: 'Certificado Nacional' },
            { icon: '📚', text: 'Material Incluso' },
            { icon: '🚀', text: 'Início Imediato' }
        ],
        description: `
            <p><strong>Para quem é:</strong> Pessoas sem nenhuma experiência prévia que desejam iniciar uma carreira altamente lucrativa no mercado da beleza e estética.</p>
            <p><strong>O que você vai aprender:</strong> Domínio completo de pinça e linha, arquitetura facial (visagismo), mapeamento simétrico com paquímetro/linha, aplicação avançada de Henna, biossegurança e postura profissional no atendimento ao cliente.</p>
            <p><strong>Diferenciais:</strong> Turmas reduzidas para mentoria focada, prática supervisionada em modelos reais e suporte pós-curso para lançamento da sua carreira.</p>
        `
    },
    'curso2': {
        category: 'ESPECIALIZAÇÃO AVANÇADA',
        name: 'Curso <em>Aperfeiçoamento</em>',
        price: 'R$ 700,00',
        image: 'curso',
        whatsapp: 'Olá! Quero informações sobre o Curso de Aperfeiçoamento.',
        buttonText: 'Quero Me Especializar',
        stats: [
            { icon: '🎓', text: 'Certificado de Especialista' },
            { icon: '✂️', text: 'Mentoria Prática' }
        ],
        description: `
            <p><strong>Para quem é:</strong> Designers de sobrancelhas já formadas que sentem insegurança na marcação, demora no atendimento ou dificuldades com simetria e colorimetria de hennas.</p>
            <p><strong>Benefícios:</strong> Lapidação rigorosa de vícios técnicos. Você aprenderá a otimizar o seu tempo de bancada e a entregar resultados de nível master class, fidelizando um público de alto padrão.</p>
        `
    },
    'limpeza': {
        category: 'TRATAMENTO FACIAL',
        name: 'Limpeza de Pele <em>Profunda</em>',
        price: 'R$ 120,00',
        image: 'limpeza',
        whatsapp: 'Olá! Gostaria de agendar uma Limpeza de Pele.',
        buttonText: 'Agendar Sessão',
        stats: [
            { icon: '⏳', text: '1h20min' },
            { icon: '💧', text: 'Controle de Oleosidade' },
            { icon: '🔁', text: 'Intervalo indicado: 30 a 45 dias' }
        ],
        description: `
            <p><strong>Para quem é:</strong> Homens e mulheres de todas as idades que apresentam cravos (comedões), poros dilatados, espinhas pontuais ou aspecto de pele opaca e cansada.</p>
            <p><strong>Benefícios & Resultados:</strong> Este tratamento clínico promove a extração minuciosa de impurezas e células mortas. O procedimento inclui assepsia, esfoliação ultrassônica, emoliência avançada (sem dor excessiva), extração, tonificação e selagem com máscara calmante.</p>
            <p><strong>Diferenciais:</strong> Pele visivelmente mais iluminada, oxigenada e pronta para absorver os nutrientes do seu skincare diário. Não deixa a pele severamente marcada após a sessão.</p>
        `
    },
    'dermaplaning': {
        category: 'ESFOLIAÇÃO MECÂNICA',
        name: '<em>Dermaplaning</em> Premium',
        price: 'R$ 80,00',
        image: 'Derma',
        whatsapp: 'Olá! Gostaria de agendar o Dermaplaning.',
        buttonText: 'Agendar Sessão',
        stats: [
            { icon: '⏳', text: '40min' },
            { icon: '✨', text: 'Pele Acetinada Imediata' },
            { icon: '🛡️', text: 'Não engrossa os pelos' }
        ],
        description: `
            <p><strong>Para quem é:</strong> Indicado para quem busca rejuvenescimento expresso, remoção da penugem facial (vellus) que atrapalha a maquiagem e melhoria da textura da pele.</p>
            <p><strong>Benefícios & Resultados:</strong> O Dermaplaning promove uma esfoliação mecânica suave utilizando um bisturi cirúrgico para remover a camada córnea (células mortas) e os fios finos da face. O resultado é um rosto incrivelmente macio, liso e com altíssimo poder de absorção de cosméticos.</p>
            <p><strong>Diferenciais:</strong> É totalmente indolor e não exige tempo de recuperação. <strong>Mito quebrado:</strong> Os pelos não engrossam, nem escurecem; eles retornam com sua genética biológica padrão.</p>
        `
    },
    'micro': {
        category: 'SOBRANCELHAS',
        name: 'Micropigmentação <em>Shadow</em>',
        price: 'R$ 500,00',
        image: 'micro',
        whatsapp: 'Olá! Tenho interesse na Micropigmentação Shadow.',
        buttonText: 'Agendar Procedimento',
        stats: [
            { icon: '⏳', text: '2h a 2h30min' },
            { icon: '📅', text: 'Durabilidade: 8 a 12 meses' },
            { icon: '🖋️', text: 'Pigmento Hipoalergênico' }
        ],
        description: `
            <p><strong>Para quem é:</strong> Clientes com sobrancelhas finas, falhadas, cicatrizes ou que desejam abandonar o uso diário de maquiagens corretivas.</p>
            <p><strong>Benefícios & Resultados:</strong> Técnica moderna realizada com dermógrafo que deposita o pigmento de forma muito suave e em camadas (degradê). O efeito curado é sofisticado e translúcido, lembrando um sombreado suave de maquiagem, sem o aspecto artificial de tatuagem antiga.</p>
            <p><strong>Indicações:</strong> A cor é ajustada baseada na colorimetria do seu fio natural e fototipo de pele. Há necessidade de uma sessão de retoque (após 30 dias) para fixação ideal.</p>
        `
    },
    'brow': {
        category: 'SOBRANCELHAS',
        name: 'Brow <em>Lamination</em>',
        price: 'R$ 120,00',
        image: 'brow',
        whatsapp: 'Olá! Gostaria de agendar o Brow Lamination.',
        buttonText: 'Agendar Horário',
        stats: [
            { icon: '⏳', text: '1h' },
            { icon: '📅', text: 'Durabilidade: 4 a 8 semanas' }
        ],
        description: `
            <p><strong>Para quem é:</strong> Para fios rebeldes, crespos ou com crescimento para baixo. Perfeito para quem ama a tendência de sobrancelhas volumosas e penteadas para cima.</p>
            <p><strong>Resultados:</strong> Realinhamento da estrutura química do pelo, tornando-os maleáveis. Ajuda a cobrir falhas estratégicas usando o volume natural dos próprios fios.</p>
        `
    },
    'lash': {
        category: 'CÍLIOS',
        name: 'Lash <em>Lifting</em>',
        price: 'R$ 120,00',
        image: 'lash',
        whatsapp: 'Olá! Gostaria de agendar o Lash Lifting.',
        buttonText: 'Agendar Horário',
        stats: [
            { icon: '⏳', text: '1h' },
            { icon: '📅', text: 'Durabilidade: Até 6 semanas' },
            { icon: '💧', text: 'Hidratação de Queratina' }
        ],
        description: `
            <p><strong>Para quem é:</strong> Quem tem cílios retos, claros ou deseja um olhar de "rímel natural" sem manutenção complexa de extensões artificiais.</p>
            <p><strong>Resultados:</strong> Curvamos seus cílios naturais biológicos desde a raiz e aplicamos tintura profunda, gerando um alongamento visual imenso. Permite coçar os olhos e usar demaquilante normalmente.</p>
        `
    },
    'alongamento': {
        category: 'CÍLIOS',
        name: 'Alongamento de <em>Cílios</em>',
        price: 'R$ 120,00',
        image: 'Alongamento',
        whatsapp: 'Olá! Gostaria de agendar o Alongamento de Cílios.',
        buttonText: 'Agendar Horário',
        stats: [
            { icon: '⏳', text: '2h' },
            { icon: '📅', text: 'Manutenção: a cada 20 dias' }
        ],
        description: `
            <p><strong>Para quem é:</strong> Deseja volume expressivo e olhos delineados 24h por dia. Mapeamento focado no visagismo ocular (Efeito Gatinho, Boneca, Sirene).</p>
            <p><strong>Diferenciais:</strong> Fios de seda ultraleves colados um a um na haste natural. Isolamento perfeito para não prejudicar o crescimento dos cílios naturais.</p>
        `
    },
    'hidra': {
        category: 'ESTÉTICA LABIAL',
        name: 'Hidralips & <em>Hidraglos</em>',
        price: 'R$ 90,00',
        image: 'hidra',
        whatsapp: 'Olá! Gostaria de agendar o Hidralips/Hidraglos.',
        buttonText: 'Agendar Sessão',
        stats: [
            { icon: '⏳', text: '40min' },
            { icon: '💉', text: 'Sem preenchimento agulhado' }
        ],
        description: `
            <p><strong>Para quem é:</strong> Lábios ressecados, com rachaduras frequentes ou que perderam o contorno de coloração natural devido à idade.</p>
            <p><strong>Resultados:</strong> Microinfusão indolor de um blend de vitaminas, ácido hialurônico e pigmento muito leve. Devolve a jovialidade, o brilho e um leve rubor de saúde aos lábios.</p>
        `
    },
    'reconst': {
        category: 'SOBRANCELHAS',
        name: '<em>Reconstrução</em>',
        price: 'R$ 80,00',
        image: 'reconst',
        whatsapp: 'Olá! Gostaria de agendar a Reconstrução.',
        buttonText: 'Iniciar Tratamento',
        stats: [
            { icon: '⏳', text: '30min por sessão' },
            { icon: '🌱', text: 'Ativação Folicular' }
        ],
        description: `
            <p><strong>Para quem é:</strong> Sobrancelhas superfinas e falhadas pelo uso incorreto da pinça ao longo dos anos.</p>
            <p><strong>Resultados:</strong> Protocolo terapêutico que inclui microagulhamento superficial e blends de fatores de crescimento para despertar folículos adormecidos. Requer paciência e sessões contínuas.</p>
        `
    },
    'henna': {
        category: 'ALTA DEFINIÇÃO',
        name: 'Design com <em>Henna</em>',
        price: 'R$ 50,00',
        image: 'Henna',
        whatsapp: 'Olá! Gostaria de agendar o Design com Henna.',
        buttonText: 'Agendar Design',
        stats: [
            { icon: '⏳', text: '45min' },
            { icon: '✨', text: 'Efeito Ombré Natural' }
        ],
        description: `
            <p><strong>Para quem é:</strong> Quem busca cobertura temporária de falhas e design bem marcado para destacar o olhar.</p>
            <p><strong>Diferenciais:</strong> Hennas importadas livres de metais pesados. Trabalhamos com a técnica <em>Ombré</em> (início claro e cauda definida) fugindo do aspecto artificial bloqueado.</p>
        `
    },
    'perso-combo': {
        category: 'COMBOS EXPRESS',
        name: 'Combo Perfect <em>Personalizado</em>',
        price: 'R$ 50,00',
        image: 'combo_perso',
        whatsapp: 'Olá! Quero agendar o Combo Perfect Personalizado.',
        buttonText: 'Agendar Combo',
        stats: [
            { icon: '⏳', text: '40min' }
        ],
        description: `
            <p><strong>A Experiência:</strong> O serviço base do estúdio (Mapeamento Visagista facial e extração precisa) unificado a um relaxante e reparador Spa Labial. Cuidado e harmonia em uma sessão rápida e eficiente.</p>
        `
    },
    'personalizado': {
        category: 'ESTRUTURAL',
        name: 'Design <em>Personalizado</em>',
        price: 'R$ 40,00',
        image: 'personalizado',
        whatsapp: 'Olá! Gostaria de agendar um Design Personalizado.',
        buttonText: 'Agendar Design',
        stats: [
            { icon: '⏳', text: '30min' },
            { icon: '📐', text: 'Visagismo Simétrico' }
        ],
        description: `
            <p><strong>O Procedimento:</strong> Esqueça moldes prontos. Analisamos sua estrutura óssea, musculatura e pontos de expressão. Extraímos apenas os fios necessários para abrir seu olhar sem afinar sua sobrancelha.</p>
        `
    },
    'spa': {
        category: 'ESTÉTICA LABIAL',
        name: 'Spa <em>Labial</em>',
        price: 'R$ 20,00',
        image: 'spa_labial',
        whatsapp: 'Olá! Gostaria de agendar o Spa Labial.',
        buttonText: 'Agendar Horário',
        stats: [
            { icon: '⏳', text: '15min' }
        ],
        description: `
            <p><strong>A Experiência:</strong> Esfoliação suave para remover pele morta associada a uma hidratação intensa com cremes regeneradores. Deixa o lábio perfeito para o uso de batons matte.</p>
        `
    },
    'buco': {
        category: 'EPILAÇÃO FACIAL',
        name: '<em>Buço</em>',
        price: 'R$ 20,00',
        image: 'Buco',
        whatsapp: 'Olá! Gostaria de agendar o Buço.',
        buttonText: 'Agendar Horário',
        stats: [
            { icon: '⏳', text: '10min' },
            { icon: '🛡️', text: 'Pele Calmante' }
        ],
        description: `
            <p><strong>O Procedimento:</strong> Remoção limpa e rápida da penugem acima dos lábios, utilizando cera morna hipoalergênica ou linha (threading), finalizando com loção calmante anti-vermelhidão.</p>
        `
    },
    'rosto': {
        category: 'EPILAÇÃO FACIAL',
        name: 'Epilação do <em>Rosto</em>',
        price: 'R$ 20,00',
        image: 'Rosto',
        whatsapp: 'Olá! Gostaria de agendar a Epilação do Rosto.',
        buttonText: 'Agendar Horário',
        stats: [
            { icon: '⏳', text: '20min' },
            { icon: '✨', text: 'Efeito Seda' }
        ],
        description: `
            <p><strong>Para quem é:</strong> Remoção completa dos fios vellus da maçã do rosto, bochechas e queixo. Previne foliculite, clareia visualmente a pele e permite um acabamento impecável em maquiagens.</p>
        `
    }
};

// ============================================================================
// 2. RENDERIZAÇÃO DINÂMICA DO GRID (Performance HTML)
// ============================================================================
const renderServicesGrid = () => {
    const gridContainer = document.getElementById('services-grid');
    if (!gridContainer) return;

    let htmlContent = '';
    
    // Obter array de chaves e iterar (mantém a ordem exata do objeto acima)
    for (const [key, data] of Object.entries(servicesDB)) {
        // Estilo VIP para as duas primeiras
        const isVip = key === 'premium' || key === 'combo';
        const cardClass = isVip ? 'mitem star rv' : 'mitem rv';
        const badgeHtml = isVip 
            ? `<span class="sbadge">${key === 'premium' ? 'VIP' : 'MAIS PEDIDO'}</span>` 
            : (key === 'curso1' || key === 'curso2') 
                ? `<span class="sbadge" style="background:var(--color-white)">${key === 'curso1' ? 'Formação' : 'Especialização'}</span>`
                : '';

        // Título limpo (sem a tag <em> para o list
