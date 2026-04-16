// Produtos B2B
const products = [
    { nome: "Botão Metálico Banhado Ouro", categoria: "Masculino", desc: "Acabamento premium para ternos e blazers. Pedido mínimo: 1000 unid.", img: "https://placehold.co/400x300/A67C52/white?text=Botão+Ouro" },
    { nome: "Fivela de Couro Legítimo", categoria: "Masculino", desc: "Couro nobre, ideal para cintos e acessórios. Sob consulta.", img: "https://placehold.co/400x300/4B5842/white?text=Fivela+Couro" },
    { nome: "Etiqueta Bordada Alta Definição", categoria: "Feminino", desc: "Personalização com sua marca. Produção a partir de 500 unidades.", img: "https://placehold.co/400x300/B78B37/white?text=Etiqueta+Bordada" },
    { nome: "Botão de Madrepérola", categoria: "Feminino", desc: "Elegância para peças femininas. Disponíveis em diversos tamanhos.", img: "https://placehold.co/400x300/EFE1D6/A67C52?text=Botão+Madrepérola" },
    { nome: "Fivela Infantil Colorida", categoria: "Infantil", desc: "Resistente, cores vivas, atende normas de segurança.", img: "https://placehold.co/400x300/4B5842/white?text=Fivela+Infantil" },
    { nome: "Rebite Metálico Industrial", categoria: "Masculino", desc: "Alta durabilidade para jeans, jaquetas e bolsas.", img: "https://placehold.co/400x300/A67C52/white?text=Rebite+Metal" }
];

function renderProducts(filter) {
    const grid = document.getElementById("productsGrid");
    const filtered = filter === "all" ? products : products.filter(p => p.categoria === filter);
    grid.innerHTML = filtered.map(p => `
        <div class="product-card">
            <img src="${p.img}" alt="${p.nome}">
            <div class="product-info">
                <div class="product-tag">Atacado • Sob consulta</div>
                <h3>${p.nome}</h3>
                <p>${p.desc}</p>
                <a href="#contato" class="cta-small">Solicitar cotação →</a>
            </div>
        </div>
    `).join("");
}

// Filter buttons
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderProducts(btn.dataset.filter);
    });
});
renderProducts("all");

// Galeria lightbox
const galleryImages = [
    "https://placehold.co/600x600/EFE1D6/A67C52?text=Botões+em+peça",
    "https://placehold.co/600x600/4B5842/white?text=Fivelas+aplicadas",
    "https://placehold.co/600x600/B78B37/white?text=Etiquetas+personalizadas",
    "https://placehold.co/600x600/A67C52/white?text=Acabamentos"
];
const galleryGrid = document.getElementById("galleryGrid");
galleryGrid.innerHTML = galleryImages.map(src => `<div class="gallery-item"><img src="${src}" alt="Galeria Coronel"></div>`).join("");

const lightbox = document.createElement("div");
lightbox.className = "lightbox";
lightbox.innerHTML = '<div class="close">&times;</div><img src="" alt="Ampliada">';
document.body.appendChild(lightbox);
const lightboxImg = lightbox.querySelector("img");

document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", () => {
        lightboxImg.src = item.querySelector("img").src;
        lightbox.classList.add("active");
    });
});
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.classList.contains("close")) lightbox.classList.remove("active");
});

// FAQ
const faqs = [
    { q: "Qual é o pedido mínimo?", a: "Trabalhamos com pedidos a partir de 100 unidades por referência, dependendo do produto e complexidade." },
    { q: "Vocês produzem com a minha marca?", a: "Sim, desenvolvemos acessórios personalizados com logotipo e acabamentos exclusivos." },
    { q: "Como solicito uma amostra?", a: "Preencha o formulário de cotação ou fale pelo WhatsApp. Enviamos amostra para aprovação." },
    { q: "Qual o prazo de entrega?", a: "Em média 12 a 20 dias úteis após aprovação da amostra, conforme volume." }
];
const faqContainer = document.getElementById("faqList");
faqContainer.innerHTML = faqs.map((faq, i) => `
    <div class="faq-item">
        <button class="faq-question">${faq.q} <i class="fas fa-chevron-down"></i></button>
        <div class="faq-answer">${faq.a}</div>
    </div>
`).join("");

document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
        const answer = btn.nextElementSibling;
        answer.classList.toggle("show");
        btn.classList.toggle("active");
    });
});

// Formulário B2B (se o formulário existir – foi comentado no HTML, mas mantido por segurança)
const form = document.getElementById("b2bForm");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Sua solicitação foi enviada! Nossa equipe comercial entrará em contato em breve.");
        form.reset();
    });
}

// Menu mobile
const toggleBtn = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => navMenu.classList.toggle("open"));
}

// Modal privacidade
const modal = document.getElementById("privacyModal");
const openModal = document.getElementById("openPrivacyModal");
const closeModal = document.querySelector(".modal-close");
if (openModal && modal && closeModal) {
    openModal.addEventListener("click", (e) => { e.preventDefault(); modal.classList.add("active"); });
    closeModal.addEventListener("click", () => modal.classList.remove("active"));
    window.addEventListener("click", (e) => { if(e.target === modal) modal.classList.remove("active"); });
}

