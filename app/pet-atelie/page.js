import StickyCta from "./StickyCta";
import FacebookPixel from "./FacebookPixel";
import CheckoutButton from "./CheckoutButton";

export const metadata = {
  title: "Pet Ateliê — 100 Moldes Profissionais de Roupas para Pets",
  description:
    "Costure roupas de pet com acabamento profissional e transforme sua costura em renda. 100 moldes prontos para imprimir + 7 bônus, por apenas R$10.",
};

const pills = ["📥 Acesso imediato", "♾️ Vitalício, sem mensalidade", "🇧🇷 Moldes em A4"];

const pains = [
  ["😤", "Moldes que não encaixam", "Você gasta tecido, perde tempo e a peça sai torta. Resultado: insegurança pra mostrar e vender."],
  ["🔍", "Horas caçando no Pinterest", "Modelo bonito de um lado, tamanho de outro, instrução em inglês… e nada de coleção pronta pra produzir."],
  ["💸", "Sem saber precificar", "Você até costura bem, mas cobra pouco pra não perder o cliente — e trabalha de graça no fim do mês."],
];

const gets = [
  ["100 moldes profissionais em PDF", "Testados e prontos para imprimir em folha A4, em escala real, sem ajuste manual."],
  ["Todos os portes e espécies", "Cães (do chihuahua ao golden), gatos e até porquinho-da-índia. Tabela de tamanhos inclusa."],
  ["Organização por 14 categorias", "Encontre o modelo certo em segundos — nada de pasta bagunçada no celular."],
  ["7 bônus para vender mais", "Medidas, precificação, planner, fotos e vendas: o caminho da costura até a renda."],
  ["Instruções simples de uso", "Mesmo que nunca tenha usado molde digital, você imprime e começa hoje."],
  ["Acesso imediato e vitalício", "Baixa na hora, fica seu para sempre. Zero mensalidade, atualizações inclusas."],
];

const cats = [
  ["Casacos & jaquetas", "linha de inverno"],
  ["Vestidos", "festa e dia a dia"],
  ["Conjuntos & macacões", "os campeões de venda"],
  ["Blusas & camisas", "básicos versáteis"],
  ["Roupas para gatos", "modelagem específica"],
  ["Roupas cirúrgicas", "alta procura em pet shops"],
  ["Calças & saias", "composições"],
  ["Roupas de banho", "verão"],
  ["Capas & impermeáveis", "dias de chuva"],
  ["Camas & tapetes", "ticket alto"],
  ["Acessórios & bolsas", "complementos"],
  ["Calcinhas higiênicas", "necessidade real"],
  ["Porquinho-da-índia", "nicho pouco atendido"],
  ["Manequins pet", "para provar a modelagem"],
];

const whom = [
  "Costureiras e artesãs que querem uma nova fonte de renda com alta demanda.",
  "Quem já vende e quer ampliar o catálogo com modelos que realmente saem.",
  "Donas de pet que sabem costurar e querem economizar vestindo o próprio bichinho.",
  "Quem quer começar um negócio com baixíssimo investimento inicial.",
  "Pessoas cansadas de moldes mal feitos e que querem qualidade profissional.",
  "Iniciantes totais — o material foi feito para ser simples de entender e aplicar.",
];

const bonuses = [
  ["1", "Guia rápido de medidas para pets", "Aprenda a medir corretamente qualquer porte e nunca mais erre o tamanho.", "R$27"],
  ["2", "Planner de produção e pedidos", "Organize encomendas, prazos e entregas sem se perder.", "R$27"],
  ["3", "Guia de tecidos e acabamentos", "Saiba qual tecido usar para mais conforto, durabilidade e percepção de valor.", "R$19"],
  ["4", "Calculadora de preço com lucro", "Descubra o preço certo de cada peça sem perder margem nem cliente.", "R$37"],
  ["5", "Ideias de personalização criativa", "Detalhes que destacam suas peças e justificam cobrar mais caro.", "R$19"],
  ["6", "Mini-coleções temáticas o ano todo", "Natal, festa junina, verão… sugestões prontas para vender em toda data.", "R$27"],
  ["7", "Kit de fotos e vendas no Instagram", "Transforme seu perfil em vitrine: roteiros de post, legendas e dicas de foto.", "R$37"],
];

const tests = [
  ["RM", "Renata Martins", "Costureira • Goiânia", "Em duas semanas paguei o kit várias vezes só com conjuntinhos. Os moldes encaixam perfeito, não desperdiço mais tecido."],
  ["AS", "Aline Souza", "Ateliê pet • Curitiba", "O guia de precificação abriu meus olhos. Eu cobrava errado e nem sabia. Hoje vendo com lucro e fila de espera."],
  ["CF", "Cláudia Freitas", "Iniciante • Recife", "Nunca tinha usado molde digital e consegui imprimir e costurar no mesmo dia. Variedade absurda, tem pra todo porte."],
];

const gallery = [
  ["/img/pet-atelie/cachorro-roupa.jpg", "Cachorro com roupinha de tricô"],
  ["/img/pet-atelie/peca-pronta.jpg", "Roupinha de pet pronta com acabamento profissional"],
  ["/img/pet-atelie/gato-vestido.jpg", "Gato vestindo uma roupinha de tricô"],
  ["/img/pet-atelie/processo-costura.jpg", "Costureira costurando uma roupinha de pet"],
];

const faqs = [
  ["Como recebo o material?", "100% digital. Assim que o pagamento é confirmado, você recebe o acesso por e-mail e baixa todos os arquivos em PDF na hora — no celular ou no computador."],
  ["Preciso ter experiência com costura ou moldes digitais?", "Não. Os moldes vêm prontos para imprimir em folha A4 e o material inclui instruções simples passo a passo. Funciona tanto para iniciantes quanto para quem já costura."],
  ["Os moldes servem para qualquer porte?", "Sim. Há modelos para cães de todos os portes, gatos e porquinho-da-índia, com tabela de medidas para você ajustar com precisão."],
  ["Tem mensalidade ou é pagamento único?", "Pagamento único. Você paga uma vez e o material é seu para sempre, incluindo as atualizações futuras do kit."],
  ["Posso usar os moldes para vender as peças?", "Sim! O kit foi feito exatamente para isso. Inclusive acompanha o método de precificação e vendas para você lucrar desde a primeira peça."],
  ["E se eu não gostar?", "Você tem 7 dias de garantia incondicional. Se não for para você, devolvemos 100% do valor, sem perguntas."],
];

const lightEyebrow = {
  background: "rgba(255,255,255,.12)",
  color: "#fff",
  borderColor: "rgba(255,255,255,.25)",
};

export default function PetAtelie() {
  return (
    <>
      <FacebookPixel />
      {/* HERO */}
      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="badge-row">
              {pills.map((p) => (
                <span className="pill" key={p}>{p}</span>
              ))}
            </div>
            <h1>
              Costure roupas de pet com acabamento <em>de loja</em> — e transforme cada peça em lucro.
            </h1>
            <p className="lead">
              100 moldes profissionais prontos para imprimir + 7 bônus exclusivos. Tudo o que você
              precisa para sair do &quot;molde improvisado&quot; e começar a vender — por apenas R$10.
            </p>
            <div className="hero-cta-row">
              <a href="#oferta" className="btn">
                <span className="btn-line">
                  <span>QUERO POR R$10</span>
                  <span className="sub">Acesso imediato e vitalício</span>
                </span>
              </a>
            </div>
            <div className="micro">
              <span className="stars">★★★★★</span>{" "}
              <span>+3.200 costureiras já baixaram • nota 4,9/5</span>
            </div>
          </div>
          <div className="hero-card">
            <div className="mock">
              <span className="paw" style={{ top: "14px", left: "18px" }}>🐾</span>
              <span className="paw" style={{ bottom: "20px", right: "24px" }}>🐾</span>
              <svg viewBox="0 0 320 340" xmlns="http://www.w3.org/2000/svg" width="100%" style={{ maxHeight: "320px", display: "block" }}>
                <circle cx="160" cy="172" r="140" fill="rgba(255,255,255,0.16)" />
                <path d="M232 250 q44 -10 38 -48 q-2 24 -32 28 z" fill="#c98a4e" />
                <ellipse cx="160" cy="302" rx="80" ry="20" fill="rgba(0,0,0,0.12)" />
                <path d="M104 196 q56 -34 112 0 q14 60 0 96 q-56 24 -112 0 q-14 -36 0 -96 z" fill="#fdf8f2" />
                <path d="M101 224 q59 18 118 0 l0 14 q-59 18 -118 0 z" fill="#d8743f" />
                <path d="M104 256 q56 16 112 0 l0 14 q-56 16 -112 0 z" fill="#7a2e4a" />
                <path d="M120 198 q40 -22 80 0 q-40 16 -80 0 z" fill="#bd5c2a" />
                <rect x="124" y="278" width="28" height="36" rx="14" fill="#f3d4a8" />
                <rect x="168" y="278" width="28" height="36" rx="14" fill="#f3d4a8" />
                <ellipse cx="160" cy="120" rx="74" ry="66" fill="#f3d4a8" />
                <path d="M92 92 q-30 6 -26 70 q2 30 30 30 q-10 -50 8 -86 z" fill="#c98a4e" />
                <path d="M228 92 q30 6 26 70 q-2 30 -30 30 q10 -50 -8 -86 z" fill="#c98a4e" />
                <ellipse cx="160" cy="138" rx="42" ry="40" fill="#fbeede" />
                <circle cx="138" cy="112" r="9" fill="#3a2a22" />
                <circle cx="182" cy="112" r="9" fill="#3a2a22" />
                <circle cx="141" cy="109" r="3" fill="#fff" />
                <circle cx="185" cy="109" r="3" fill="#fff" />
                <ellipse cx="160" cy="138" rx="13" ry="9" fill="#3a2a22" />
                <path d="M160 147 q0 16 -16 18 M160 147 q0 16 16 18" stroke="#3a2a22" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M154 162 q6 14 12 0 z" fill="#e8728a" />
              </svg>
              <div className="mock-badge">100 moldes prontos</div>
            </div>
            <div className="floaty f1"><span className="dot"></span> 14 categorias • todos os portes</div>
            <div className="floaty f2">🎁 7 bônus inclusos</div>
          </div>
        </div>
      </header>

      {/* TRUST STRIP */}
      <div className="trust">
        <div className="wrap">
          <div className="ti">📘 <span><b>100</b> moldes em PDF</span></div>
          <div className="ti">🧩 <span><b>14</b> categorias</span></div>
          <div className="ti">🎁 <span><b>7</b> bônus exclusivos</span></div>
          <div className="ti">🔒 <span>Garantia de <b>7 dias</b></span></div>
          <div className="ti">⚡ <span>Download <b>imediato</b></span></div>
        </div>
      </div>

      {/* PAIN */}
      <section className="pain">
        <div className="wrap">
          <h2>Você não precisa de mais moldes soltos. Precisa de um sistema.</h2>
          <p className="sub">
            A maioria desiste de vender roupinha de pet não por falta de talento — mas por causa de
            moldes mal feitos, tamanhos que não fecham e a dúvida eterna de &quot;por quanto eu cobro?&quot;.
          </p>
          <div className="pain-grid">
            {pains.map(([ic, h, p]) => (
              <div className="pain-card" key={h}>
                <div className="ic">{ic}</div>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section>
        <div className="wrap">
          <div className="shead">
            <span className="eyebrow">O que você recebe</span>
            <h2>Tudo o que você precisa para costurar e vender — em um só arquivo</h2>
            <p>Não é só um pacote de moldes. É um kit pensado para você produzir com qualidade e faturar desde a primeira peça.</p>
          </div>
          <div className="get-grid">
            {gets.map(([h, p]) => (
              <div className="get-item" key={h}>
                <div className="check">✓</div>
                <div>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ILLUSTRATION BAND */}
      <section className="band">
        <div className="wrap band-grid">
          <div className="band-art">
            <svg viewBox="0 0 460 340" xmlns="http://www.w3.org/2000/svg">
              <circle cx="230" cy="168" r="160" fill="#f6ece0" />
              <rect x="60" y="232" width="340" height="18" rx="6" fill="#bd5c2a" />
              <rect x="80" y="250" width="14" height="72" fill="#a14e22" />
              <rect x="366" y="250" width="14" height="72" fill="#a14e22" />
              <rect x="250" y="196" width="120" height="38" rx="9" fill="#7a2e4a" />
              <path d="M340 196 l0 -58 q0 -16 -16 -16 l-66 0 q-12 0 -12 12 q0 12 12 12 l50 0 q6 0 6 6 l0 44 z" fill="#9c3a5e" />
              <circle cx="352" cy="150" r="13" fill="#e7b53c" />
              <circle cx="352" cy="150" r="5" fill="#bd5c2a" />
              <rect x="259" y="186" width="6" height="14" fill="#3a2a22" />
              <path d="M150 232 q60 -22 120 0 l0 6 q-60 18 -120 0 z" fill="#fdf8f2" />
              <path d="M150 232 q60 -22 120 0" stroke="#d8743f" strokeWidth="2" fill="none" />
              <path d="M118 232 q-8 -64 38 -78 q44 -10 56 28 q10 42 -8 50 z" fill="#1f8a5b" />
              <path d="M176 198 q42 4 76 26 q7 9 -3 15 q-40 -18 -80 -24 z" fill="#1f8a5b" />
              <circle cx="250" cy="226" r="9" fill="#f3d4a8" />
              <rect x="150" y="140" width="14" height="20" fill="#f3d4a8" />
              <circle cx="157" cy="126" r="27" fill="#f3d4a8" />
              <path d="M129 128 q-4 -34 32 -34 q32 0 30 32 q-12 -18 -30 -18 q-22 0 -32 20 z" fill="#3a2a22" />
              <path d="M129 128 q-8 20 2 38 q-16 -8 -10 -32 z" fill="#3a2a22" />
              <circle cx="150" cy="124" r="3" fill="#3a2a22" />
              <path d="M146 134 q6 5 12 0" stroke="#bd5c2a" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <span className="eyebrow">Da sua casa para o mundo</span>
            <h2>Se você sabe costurar, já tem um negócio nas mãos</h2>
            <p>Não precisa de máquina cara, curso longo nem ponto comercial. Com os moldes certos e um celular, você produz peças com acabamento profissional na sua mesa e começa a vender ainda esta semana — para vizinhos, no Instagram ou em grupos de pet.</p>
            <a href="#oferta" className="btn">QUERO COMEÇAR POR R$10</a>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="cats">
        <div className="wrap">
          <div className="shead">
            <span className="eyebrow">Por dentro do material</span>
            <h2>14 categorias completas, do básico ao que vende mais</h2>
            <p>Coleções prontas para produzir o ano inteiro — datas comemorativas, frio, verão e linha premium.</p>
          </div>
          <div className="cat-grid">
            {cats.map(([n, c]) => (
              <div className="cat" key={n}>
                <div className="n">{n}</div>
                <div className="c">{c}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR WHOM */}
      <section className="whom">
        <div className="wrap">
          <div className="shead">
            <span className="eyebrow" style={lightEyebrow}>Para quem é</span>
            <h2>Feito para quem quer resultado de verdade</h2>
            <p>Se você se identifica com pelo menos um destes, o Pet Ateliê é para você.</p>
          </div>
          <div className="whom-grid">
            {whom.map((w) => (
              <div className="whom-item" key={w}>
                <span className="y">✔</span>
                <p>{w}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BONUS */}
      <section className="bonus">
        <div className="wrap">
          <div className="shead">
            <span className="eyebrow">Bônus exclusivos</span>
            <h2>7 bônus para você vender mais e melhor</h2>
            <p>Não fica só na costura: estes materiais te ajudam a organizar, precificar e divulgar como um ateliê profissional.</p>
          </div>
          <div className="bonus-grid">
            {bonuses.map(([num, h, p, val]) => (
              <div className="bonus-card" key={num}>
                <div className="num">{num}</div>
                <div>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
                <span className="val">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section>
        <div className="wrap">
          <div className="shead">
            <span className="eyebrow">Quem já usa, aprova</span>
            <h2>Resultados de quem parou de improvisar</h2>
          </div>
          <div className="test-grid">
            {tests.map(([av, name, role, text]) => (
              <div className="tcard" key={name}>
                <div className="stars">★★★★★</div>
                <p>&quot;{text}&quot;</p>
                <div className="who">
                  <div className="av">{av}</div>
                  <div>
                    <b>{name}</b>
                    <small>{role}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section>
        <div className="wrap">
          <div className="shead">
            <span className="eyebrow">Inspiração</span>
            <h2>Veja o tipo de peça que você vai criar</h2>
          </div>
          <div className="gal-grid">
            {gallery.map(([src, alt]) => (
              <div className="slot" key={src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="offer" id="oferta">
        <div className="wrap">
          <div className="shead">
            <span className="eyebrow" style={lightEyebrow}>Oferta de lançamento</span>
            <h2>Leve tudo hoje por menos do que custa um cafezinho</h2>
            <p>Os 100 moldes, os 7 bônus e a garantia — por um valor simbólico de lançamento.</p>
          </div>
          <div className="price-card">
            <div className="tag">95% OFF</div>
            <ul className="stack">
              <li><span><span className="ck">✓</span> 100 Moldes Profissionais (material principal)</span><span className="v">R$97</span></li>
              <li><span><span className="ck">✓</span> 7 Bônus (medidas, planner, preço, fotos…)</span><span className="v">R$163</span></li>
              <li><span><span className="ck">✓</span> Acesso vitalício + atualizações</span><span className="v">incluso</span></li>
            </ul>
            <div className="total-row"><span>Valor real de tudo:</span><span className="strike">R$ 260</span></div>
            <div className="total-row" style={{ fontSize: ".95rem", color: "var(--ink-soft)" }}><span>Sua condição hoje:</span><span></span></div>
            <div className="bigprice"><span className="rs">R$</span><span className="num">10</span></div>
            <div className="inst">pagamento único • sem mensalidade • acesso imediato</div>
            <CheckoutButton>QUERO MEUS MOLDES POR R$10</CheckoutButton>
            <div className="securerow">
              <span>🔒 Compra segura</span><span>⚡ Acesso imediato</span><span>♾️ Acesso vitalício</span>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="guar">
        <div className="wrap narrow">
          <div className="guar-box">
            <div className="seal"><div className="big">7</div><div className="sm">dias de garantia</div></div>
            <div>
              <h3>Risco zero: ou você ama, ou recebe seu dinheiro de volta</h3>
              <p>Baixe, imprima, teste os moldes. Se em 7 dias você achar que não é para você, basta enviar um e-mail e devolvemos 100% do valor. Sem perguntas, sem burocracia. O risco é todo nosso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="wrap narrow">
          <div className="shead">
            <span className="eyebrow">Dúvidas frequentes</span>
            <h2>Tudo o que você precisa saber antes de comprar</h2>
          </div>
          {faqs.map(([q, a], i) => (
            <details key={q} open={i === 0}>
              <summary>{q} <span className="plus">+</span></summary>
              <div className="a">{a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final">
        <div className="wrap narrow">
          <h2>Comece hoje a costurar peças que todo mundo vai querer comprar</h2>
          <p>Você não precisa de experiência — só de vontade de transformar sua costura em renda. Os 100 moldes, os bônus e a garantia estão esperando por você.</p>
          <a href="#oferta" className="btn">GARANTIR MEUS MOLDES POR R$10</a>
          <p style={{ marginTop: "18px", fontSize: ".85rem", opacity: 0.85 }}>⏳ Oferta de lançamento por tempo limitado</p>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <p><strong>Pet Ateliê</strong> — 100 Moldes Profissionais de Roupas para Pets</p>
          <p style={{ marginTop: "8px" }}>Produto 100% digital. Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook.</p>
          <p style={{ marginTop: "12px", fontSize: ".82rem" }}>
            Já é aluno? <a href="/pet-atelie/app" style={{ color: "#e3cdbd", textDecoration: "underline" }}>Acessar a área de membros</a>
          </p>
        </div>
      </footer>

      <StickyCta />
    </>
  );
}
