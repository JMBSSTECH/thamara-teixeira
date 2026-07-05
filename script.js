// ARQUITETURA DE DADOS COMPLETA DO SITE (Mapeia e unifica os 17 serviços do salão)
const servicesData = {
  'premium': {
    eyebrow: 'BROW LAMINATION + LASH LIFTING',
    title: 'Combo Perfect <em>Premium</em>',
    price: 'R$ 170,00',
    img: 'combo_premium.jpeg',
    desc: '<p>O Combo Perfect Premium é para quem quer acordar pronta. Combina Design personalizado ou Design com Henna junto com alongamento de cílios, tudo em uma única sessão. Resultado editorial que dispensa maquiagens no seu dia a dia.</p>',
    whatsapp: 'Quero agendar o Combo Perfect Premium.'
  },
  'combo': {
    eyebrow: 'MAIS PEDIDO',
    title: 'Combo <em>Perfect</em>',
    price: 'R$ 60,00',
    img: 'combo.jpeg',
    desc: '<p>Henna + Buço + Spa Labial em um protocolo integrado de embelezamento express.</p>',
    whatsapp: 'Quero agendar o Combo Perfect.'
  },
  'curso1': {
    eyebrow: 'CURSO',
    title: 'Iniciante <em>Formação</em>',
    price: 'R$ 1.000,00',
    img: 'curso.1.jpeg',
    desc: '<p>O Curso de Iniciante é a porta de entrada para quem sonha em atuar no mercado de beleza. Você aprenderá técnicas de design de sobrancelhas, mapeamento, uso de produtos profissionais e postura no atendimento.</p>',
    whatsapp: 'Gostaria de mais informações sobre o Curso Iniciante Formação.'
  },
  'curso2': {
    eyebrow: 'ESPECIALIZAÇÃO',
    title: 'Curso <em>Aperfeiçoamento</em>',
    price: 'R$ 700,00',
    img: 'curso.jpeg',
    desc: '<p>Especialização avançada focada em simetria, colorimetria e mapeamento de alta performance para designers que buscam se destacar.</p>',
    whatsapp: 'Quero informações sobre o Curso de Aperfeiçoamento.'
  },
  'limpeza': {
    eyebrow: 'TRATAMENTO FACIAL',
    title: 'Limpeza de <em>Pele</em>',
    price: 'R$ 120,00',
    img: 'limpeza.jpeg',
    desc: '<p>A limpeza de pele é um tratamento estético que tem como objetivo remover impurezas, células mortas, cravos e o excesso de oleosidade da pele, promovendo uma aparência mais saudável, limpa e renovada.</p><p>O procedimento geralmente inclui higienização, esfoliação, emoliência, extração de cravos, aplicação de máscara calmante e finalização com produtos específicos para cada tipo de pele. É indicada para todos os tipos de pele e pode ser realizada periodicamente para manter a saúde e a beleza da pele.</p>',
    whatsapp: 'Gostaria de agendar uma Limpeza de Pele.'
  },
  'dermaplaning': {
    eyebrow: 'ESFOLIAÇÃO MECÂNICA',
    title: '<em>Dermaplaning</em>',
    price: 'R$ 80,00',
    img: 'Derma.jpeg',
    desc: '<p>O dermaplaning é um procedimento estético que promove uma esfoliação mecânica suave da pele por meio de uma lâmina específica, removendo células mortas e os pelos finos da face (conhecidos como “penugem” ou “vellus”).</p><p>O dermaplaning não faz os pelos crescerem mais grossos ou escuros. Os pelos voltam a crescer com as mesmas características de antes.</p>',
    whatsapp: 'Gostaria de agendar o Dermaplaning.'
  },
  'micro': {
    eyebrow: 'SOBRANCELHAS',
    title: 'Micropigmentação <em>Shadow</em>',
    price: 'R$ 500,00',
    img: 'micro.jpeg',
    desc: '<p>A micropigmentação shadow é uma técnica moderna de sobrancelhas que cria um efeito esfumado, delicado e sofisticado, como se a sobrancelha estivesse levemente maquiada com sombra.</p>',
    whatsapp: 'Tenho interesse e gostaria de agendar a Micropigmentação Shadow.'
  },
  'brow': { eyebrow: 'SOBRANCELHAS', title: 'Brow <em>Lamination</em>', price: 'R$ 120,00', img: 'brow.jpeg', desc: '<p>Sobrancelhas alinhadas, nutridas e com volume sob medida.</p>', whatsapp: 'Gostaria de agendar o Brow Lamination.' },
  'lash': { eyebrow: 'CÍLIOS', title: 'Lash <em>Lifting</em>', price: 'R$ 120,00', img: 'lash.jpeg', desc: '<p>Curvatura acentuada e hidratação profunda dos cílios naturais biológicos.</p>', whatsapp: 'Gostaria de agendar o Lash Lifting.' },
  'alongamento': { eyebrow: 'CÍLIOS', title: 'Alongamento de <em>Cílios</em>', price: 'R$ 120,00', img: 'Alongamento.jpeg', desc: '<p>Volume leve e olhar marcante personalizado de alta retenção.</p>', whatsapp: 'Gostaria de agendar o Alongamento de Cílios.' },
  'hidra': { eyebrow: 'ESTÉTICA LABIAL', title: 'Hidralips e <em>Hidraglos</em>', price: 'R$ 90,00', img: 'hidra.jpeg', desc: '<p>Protocolo avançado de hidratação intensa, regeneração e brilho labial imediato.</p>', whatsapp: 'Gostaria de agendar o Hidralips/Hidraglos.' },
  'reconst': { eyebrow: 'SOBRANCELHAS', title: '<em>Reconstrução</em>', price: 'R$ 80,00', img: 'reconst.jpeg', desc: '<p>Protocolo clínico para acelerar e recuperar o nascimento natural dos fios.</p>', whatsapp: 'Gostaria de agendar a Reconstrução.' },
  'henna': { eyebrow: 'DEFINIÇÃO PREMIUM', title: 'Design com <em>Henna</em>', price: 'R$ 50,00', img: 'Henna.jpeg', desc: '<p>Delineamento estratégico com aplicação de henna premium com durabilidade de até 7 dias.</p>', whatsapp: 'Gostaria de agendar o Design com Henna.' },
  'perso-combo': { eyebrow: 'COMBOS', title: 'Combo Perfect <em>Personalizado</em>', price: 'R$ 50,00', img: 'combo_perso.jpeg', desc: '<p>Design personalizado de sobrancelhas combinado com esfoliação e spa labial.</p>', whatsapp: 'Quero agendar o Combo Perfect Personalizado.' },
  'personalizado': { eyebrow: 'VISAGISMO E SIMETRIA', title: 'Design <em>Personalizado</em>', price: 'R$ 40,00', img: 'personalizado.jpeg', desc: '<p>Mapeamento facial estruturado com visagismo milimétrico exclusivo para sua simetria facial.</p>', whatsapp: 'Gostaria de agendar um Design Personalizado.' },
  'spa': { eyebrow: 'ESTÉTICA LABIAL', title: 'Spa <em>Labial</em>', price: 'R$ 20,00', img: 'spa_labial.jpeg', desc: '<p>Nutrição profunda, esfoliação de células mortas e hidratação intensa contra fissuras.</p>', whatsapp: 'Gostaria de agendar o Spa Labial.' },
  'buco': { eyebrow: 'FACIAL', title: '<em>Buço</em>', price: 'R$ 20,00', img: 'Buco.jpeg', desc: '<p>Retirada suave de fios faciais na região do buço com técnicas de alta proteção cutânea.</p>', whatsapp: 'Gostaria de agendar o Buço.' },
  'rosto': { eyebrow: 'FACIAL', title: 'Epilação do <em>Rosto</em>', price: 'R$ 20,00', img: 'Rosto.jpeg', desc: '<p>Remoção total de penugens (vellus) faciais deixado o rosto acetinado para maquiagem.</p>', whatsapp: 'Gostaria de agendar a Epilação do Rosto.' }
};

let lastFocusedElement = null;

function openM(serviceKey) {
  const data = servicesData[serviceKey];
  if (!data) return;
  const modal = document.getElementById('master-modal');
  document.getElementById('modal-img').src = data.img;
  document.getElementById('modal-eyebrow').innerText = data.eyebrow;
  document.getElementById('modal-title').innerHTML = data.title;
  document.getElementById('modal-price').innerText = data.price;
  document.getElementById('modal-desc-container').innerHTML = data.desc;
  document.getElementById('modal-whatsapp-link').href = `https://wa.me/5531972574829?text=${encodeURIComponent(data.whatsapp)}`;
  if (modal) { lastFocusedElement = document.activeElement; modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; const focusable = modal.querySelectorAll('button, a, [tabindex="0"]'); if (focusable.length > 0) { focusable[0].focus(); } }
}

function closeM() {
  const modal = document.getElementById('master-modal');
  if (modal) { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; if (lastFocusedElement) { lastFocusedElement.focus(); } }
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeM();
  const openModal = document.querySelector('.modal.open');
  if (openModal && e.key === 'Tab') {
    const focusables = openModal.querySelectorAll('button, a, [tabindex="0"]');
    const first = focusables[0], last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); }
    else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
  }
});

function toggleFaq(element) {
  const isActive = element.classList.contains('active');
  document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
  if (!isActive) { element.classList.add('active'); }
}

window.addEventListener('scroll', () => document.getElementById('nav').classList.toggle('sc', window.scrollY > 60));
const obs = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('on'); }); }, { threshold: .05 });
document.querySelectorAll('.rv').forEach(r => obs.observe(r));
