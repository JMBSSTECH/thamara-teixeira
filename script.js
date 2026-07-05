'use strict';

const servicesDB = {
    'limpeza': { name: 'Limpeza de Pele', price: 'R$ 120', desc: 'Profissional facial cleansing that removes impurities and dead skin cells.', link: 'https://wa.me/5531972574829?text=Olá!%20Gostaria%20de%20agendar%20uma%20Limpeza%20de%20Pele.' },
    'dermaplaning': { name: 'Dermaplaning', price: 'R$ 80', desc: 'A gentle facial exfoliation for smoother, brighter skin.', link: 'https://wa.me/5531972574829?text=Olá!%20Gostaria%20de%20agendar%20o%20Dermaplaning.' }
};

const grid = document.getElementById('services-grid');
const modal = document.getElementById('master-modal');

const init = () => {
    Object.entries(servicesDB).forEach(([key, s]) => {
        const div = document.createElement('div');
        div.className = 'mitem';
        div.innerHTML = `<h3>${s.name}</h3><p>${s.price}</p>`;
        div.onclick = () => openModal(s);
        grid.appendChild(div);
    });
};

const openModal = (s) => {
    document.getElementById('modal-content').innerHTML = `<h2>${s.name}</h2><p>${s.desc}</p><a href="${s.link}" class="ncta">Agendar</a>`;
    modal.classList.add('open');
};

document.getElementById('btn-close-modal').onclick = () => modal.classList.remove('open');
window.onclick = (e) => e.target === modal && modal.classList.remove('open');

init();
