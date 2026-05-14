import React,{useState}from"react";import{createRoot}from"react-dom/client";import{Menu,X,Phone,Mail,MapPin,Clock,Dumbbell,Users,ShieldCheck,Star,ChevronRight,Instagram,Facebook,CalendarDays,Baby,Trophy,HeartPulse,ShoppingBag,HelpCircle,CheckCircle2,Flame}from"lucide-react";import"./styles.css";
const WHATSAPP="5519984512229";const tel="(19)3426-1574";const whats="(19)98451-2229";const endereco="R. João Tedesco, 595 - Água Branca, Piracicaba - SP, 13425-120";const mapUrl=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`;
const fotos=["https://static.wixstatic.com/media/574572_d2eace54f1c946559bcb2d0a94011cd8~mv2.jpeg/v1/fill/w_980,h_1100,al_c,q_85,enc_auto/574572_d2eace54f1c946559bcb2d0a94011cd8~mv2.jpeg","https://static.wixstatic.com/media/574572_e54012e7711340d2bed5c719e05eb158~mv2.jpg/v1/fill/w_980,h_736,al_c,q_85,enc_auto/574572_e54012e7711340d2bed5c719e05eb158~mv2.jpg","https://static.wixstatic.com/media/574572_7a784b92fcef4c7c949c459e298fb1a6~mv2.jpeg/v1/fill/w_765,h_1020,al_c,q_85,enc_auto/574572_7a784b92fcef4c7c949c459e298fb1a6~mv2.jpeg"];
function WhatsAppIcon({size=22}){return <svg width={size} height={size} viewBox="0 0 32 32" className="waSvg"><path fill="currentColor" d="M16.02 3.2C8.98 3.2 3.25 8.82 3.25 15.72c0 2.2.6 4.35 1.74 6.24L3.1 28.8l7.08-1.8a13.05 13.05 0 0 0 5.84 1.38c7.04 0 12.77-5.62 12.77-12.53S23.06 3.2 16.02 3.2Zm0 22.98c-1.8 0-3.55-.47-5.1-1.35l-.37-.21-4.2 1.07 1.12-4.02-.25-.41a10.19 10.19 0 0 1-1.56-5.41c0-5.68 4.65-10.3 10.36-10.3 5.72 0 10.37 4.62 10.37 10.3 0 5.68-4.65 10.33-10.37 10.33Zm5.68-7.72c-.31-.16-1.84-.9-2.12-1-.29-.11-.5-.16-.72.15-.2.31-.82 1-.99 1.2-.18.21-.36.23-.67.08-.31-.16-1.3-.47-2.48-1.5-.92-.81-1.54-1.82-1.72-2.13-.18-.31-.02-.48.14-.63.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.2.05-.39-.03-.54-.08-.15-.72-1.7-.98-2.32-.26-.62-.52-.53-.72-.54h-.62c-.2 0-.54.08-.83.39-.29.31-1.09 1.05-1.09 2.56s1.12 2.98 1.27 3.18c.16.21 2.2 3.3 5.34 4.63.75.31 1.33.5 1.78.64.75.23 1.43.2 1.97.12.6-.09 1.84-.74 2.1-1.45.26-.72.26-1.33.18-1.45-.08-.13-.29-.21-.6-.36Z"/></svg>}
function zap(t="Olá! Vim pelo site da Academia Sport Way e gostaria de mais informações."){return`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t)}`}
const aulas=[{t:"Musculação",i:<Dumbbell/>,d:["Junte-se a nós na musculação e treine para conquistar corpo e mente saudáveis.","Na sala de musculação é possível realizar treinos de força e treinos cardiorrespiratórios. A Sport Way possui uma sala com mais de 350 metros quadrados, climatizada, equipamentos de ótima qualidade para treino resistido e grande diversidade de aparelhos para trabalho cardiorrespiratório, como esteiras, ergômetro de escada, elíptico, remo e bike.","Conte ainda com o excelente atendimento dos professores para conquistar seus objetivos. Agende já e comece a cuidar da sua saúde — você merece!"],h:["Segunda a sexta-feira das 6:00h às 22:00h","Sábados das 9:00h às 13:00h","Obs: horário pode sofrer alterações."],p:"Rodrigo Salvador, Marinara Ocanha, Luiz Cetein, Tó Spigolon e Natalia Brozulatto"},{t:"Treinamento Funcional",i:<Flame/>,d:["Venha conhecer e divirta-se treinando.","Conquiste seus objetivos com o Treinamento Funcional, uma aula que trará condicionamento físico e qualidade de vida."],h:["Segunda, quarta e sexta-feira das 6h às 6:40h","Segunda e quarta das 20h às 21h"],p:"Raphael Galdino"},{t:"Pilates",i:<HeartPulse/>,d:["A Academia Sport Way oferece um estúdio de Pilates novo com todos os equipamentos necessários.","Esta aula se baseia na ideia de que a saúde mental e física estão interconectadas e deveriam ser trabalhadas simultaneamente. Venha conhecer essa modalidade incrível e conquiste bem-estar físico e mental.","Com aulas individuais ou em grupo de no máximo três pessoas, você será incrivelmente bem acompanhada.","Os agendamentos devem ser realizados diretamente na Sport Way pelo telefone ou WhatsApp para adequar o melhor horário de acordo com a disponibilidade das aulas."],h:["Horários mediante agendamento diretamente na academia"],p:"Natalia Brozulatto Spigolon e Marinara Ocanha"},{t:"Karate",i:<Trophy/>,d:["O Karate-Do, caminho das mãos vazias, é uma arte marcial de origem japonesa que busca, através da defesa pessoal, levar ensinamentos para a construção do caráter e da cidadania.","Na Sport Way há turmas de crianças, jovens e adultos, nos períodos da manhã, tarde e noite.","A modalidade Karate foi fundamental para que a Sport Way chegasse até aqui, já que o prof. Otavio Spigolon, 6º Dan, foi um dos precursores do Karate piracicabano.","Diego Spigolon integrou a comissão técnica da seleção brasileira de Karate em 2014 e atualmente coordena a seleção brasileira adulta, masculina e feminina. É graduado em Educação Física, com três especializações e mestrado na área.","Além disso, temos Evanildo Lima, Natalia Brozulatto Spigolon e Hernani Veríssimo, com larga experiência na modalidade."],h:["Turma 1 — 4 a 6 anos: terças e quintas das 18:10 às 19:00h","Turma 2 — 7 a 12 anos: terças e quintas das 19:00 às 20:00h","Turma 3 — 13 anos em diante: terças e quintas das 20:00 às 21:15h","Turma 4 — 4 a 12 anos: segundas e quartas das 9:30 às 10:30h","Turma 5 — 6 a 12 anos: segundas e quartas das 19:00 às 20:00h","Alto rendimento — graduados 13+: terças e quintas das 14:30 às 16:00h e sábados das 10:00 às 11:30h","Graduação livre 6 a 12 anos: sábados das 9:00 às 10:00h"],p:"Diego Spigolon, Natalia Brozulatto Spigolon e Evanildo Souza Lima"},{t:"Ginástica Rítmica",i:<Baby/>,d:["A ginástica rítmica, também conhecida como GRD ou ginástica rítmica desportiva, é uma ramificação da ginástica que possui infinitas possibilidades de movimentos corporais combinados aos elementos de balé e dança teatral.","Auxilia no desenvolvimento motor e cognitivo das crianças."],h:["Segundas e quartas — 4 a 5 anos: 17h às 18h","Segundas e quartas — 6 a 12 anos: 18h às 19h","Segundas e quartas — 4 a 12 anos: 09h30 às 10h30"],p:"Julya Silva"},{t:"Jiu-Jitsu",i:<Users/>,d:["O Jiu-Jitsu brasileiro, ou Brazilian Jiu-Jitsu, é uma arte marcial de raiz japonesa que utiliza golpes de alavancas, torções e pressões para levar um oponente ao chão e dominá-lo.","Literalmente, jū significa suavidade ou brandura, e jutsu significa arte ou técnica. Daí o termo arte suave.","Na Sport Way, o professor Lekaum tem feito um trabalho sensacional, da criança ao adulto. Venha conhecer!"],h:["13 anos em diante: segunda, quarta e sexta das 18:30h às 20h","4 a 7 anos: terça e quinta das 18h às 19h","8 a 12 anos: terça e quinta das 19h às 20h","13 anos em diante: terças e quintas das 8:00 às 9:30h"],p:"Lekaum BJJ"},{t:"Boxe",i:<ShieldCheck/>,d:["O boxe é um esporte de combate que envolve o uso de socos para atacar o oponente, com o objetivo de nocautear ou acumular pontos durante a luta. É praticado em ringues, com regras específicas e categorias de peso.","Os benefícios incluem aumento da força muscular, resistência cardiovascular, coordenação motora e agilidade. Também ajuda a reduzir o estresse, melhora a disciplina e promove confiança e autodefesa."],h:["Segundas e quartas: 20h às 21h","Sextas-feiras: 19h às 20h"],p:"Raoni Balaroti"}];
const planos=[["Musculação",["Plano mensal: R$ 170,00","Plano trimestral: R$ 160,00","Plano semestral: R$ 150,00","Plano anual: R$ 140,00","Aula avulsa: R$ 25,00","Taxa de matrícula para o plano mensal: R$ 50,00","Sem taxa de matrícula para os demais planos","Funcional incluso"]],["Karate",["Plano mensal: R$ 170,00","Plano trimestral: R$ 160,00","Plano semestral: R$ 150,00","Plano anual: R$ 140,00","Taxa de matrícula para o plano mensal: R$ 50,00","Sem taxa de matrícula para os demais planos","Aula experimental gratuita"]],["Jiu-Jitsu",["Plano mensal: R$ 170,00","Plano trimestral: R$ 160,00","Plano semestral: R$ 150,00","Plano anual: R$ 140,00","Taxa de matrícula para o plano mensal: R$ 50,00","Aula experimental gratuita"]],["Treinamento Funcional",["Plano mensal: R$ 100,00","Plano trimestral: R$ 90,00","Taxa de matrícula para o plano mensal: R$ 25,00","Aula experimental gratuita"]],["Pilates",["Plano mensal - 1x/semana: R$ 190,00","Plano mensal - 2x/semana: R$ 290,00","Plano mensal - 3x/semana: R$ 390,00","Plano trimestral - 1x/semana: R$ 185,00","Plano trimestral - 2x/semana: R$ 285,00","Plano trimestral - 3x/semana: R$ 385,00","Plano semestral - 1x/semana: R$ 180,00","Plano semestral - 2x/semana: R$ 280,00","Plano semestral - 3x/semana: R$ 380,00","Taxa de matrícula para o plano mensal: R$ 50,00","Sem taxa de matrícula para os demais planos","Aula Avulsa Agendada: R$ 50,00"]],["Ginástica Rítmica",["Plano mensal: R$ 170,00","Plano trimestral: R$ 160,00","Plano semestral: R$ 150,00","Plano anual: R$ 140,00","Taxa de matrícula para o plano mensal: R$ 50,00","Aula experimental gratuita"]],["Boxe",["Plano mensal: R$ 170,00","Plano trimestral: R$ 160,00","Plano semestral: R$ 150,00","Plano anual: R$ 140,00","Taxa de matrícula para o plano mensal: R$ 50,00","Sem taxa de matrícula para os demais planos","Aula experimental gratuita"]]];
const faq=[["Vocês oferecem aulas avulsas?","Sim. Oferecemos aulas avulsas em todas nossas modalidades. Para preço e mais informações entre em contato pelo (19)3426-1574."],["Vocês oferecem avaliação?","Sim. Oferecemos avaliação física, desde a mais simples (perimetria a composição corporal) ao FMS."],["É permitida a entrada de crianças?","Temos um espaço destinado a crianças enquanto seus pais treinam, entretanto não temos monitores, portanto recomendamos que crianças com menos de 5 anos não fiquem sozinhas em nosso espaço kids."],["Vocês aceitam cartão?","Sim. Aceitamos praticamente todas as bandeiras de cartão."],["Vocês aceitam pagamento via PIX?","Sim, aceitamos pagamento via PIX, basta solicitar a chave na Sport Way."],["Vocês oferecem descontos para pessoas da mesma família?","Sim, temos condições especiais para pessoas da mesma família."]];
const depo=["Ambiente familiar, profissionais excelentes e estrutura completa.","Uma academia acolhedora, organizada e com ótimo atendimento.","Lugar ideal para treinar com segurança e se sentir em casa."];
function Header({page,setPage}){const[open,setOpen]=useState(false);const links=[["home","Início"],["sobre","Sobre"],["aulas","Aulas"],["horarios","Horário"],["planos","Planos"],["contato","Contato"],["mais","Mais"]];return <header><div className="topbar"><span><MapPin size={14}/>{endereco}</span><span><Phone size={14}/>{tel} / {whats}</span><span><Mail size={14}/>sportwaypiracicaba@gmail.com</span></div><nav className="nav"><button className="brand" onClick={()=>setPage("home")}><img src="/sportway.png" alt="Academia Sport Way" className="logoReal" /><div><strong>SPORT WAY</strong><small>A academia para toda a família</small></div></button><button className="mobileBtn" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><div className={open?"navLinks show":"navLinks"}>{links.map(([id,l])=><button key={id} className={page===id?"active":""} onClick={()=>{setPage(id);setOpen(false);window.scrollTo({top:0,behavior:"smooth"})}}>{l}</button>)}<a className="navCta" href={zap()} target="_blank"><WhatsAppIcon size={18}/>WhatsApp</a></div></nav></header>}
function Home({setPage}){return <><section className="hero"><div className="heroContent"><p className="eyebrow">Desde 2002 em Piracicaba</p><h1>Academia Sport Way</h1><p className="subtitle">A academia para toda a família.</p><p>Seja bem-vindo à Academia Sport Way. Conte conosco para tornar-se mais saudável, melhorando sua condição física e mental, num ambiente familiar e com bons profissionais.</p><div className="heroActions"><a href={zap("Olá! Gostaria de conhecer os planos da Academia Sport Way.")} className="btn primary" target="_blank"><WhatsAppIcon/>Conhecer planos</a><button className="btn secondary" onClick={()=>setPage("aulas")}>Ver aulas<ChevronRight size={18}/></button></div><div className="heroStats"><div><strong>2002</strong><span>ano de início</span></div><div><strong>350m²+</strong><span>musculação climatizada</span></div><div><strong>Estacionamento</strong><span>próprio para alunos</span></div></div></div></section><section className="section introGrid"><div><p className="eyebrow blue">Bem-vindo</p><h2>Conhecimento, experiência, bom atendimento e estrutura.</h2><p>Com um bom atendimento, a Academia Sport Way desde 2002 tem conquistado a confiança de seus alunos. Temos tudo o que você precisa: conhecimento, experiência, bom atendimento e estrutura com estacionamento próprio, estúdio de pilates, 2 salas multifuncionais com tatame, sala de musculação climatizada com mais de 350 metros quadrados, sala de avaliação e espaço kids.</p><p>Tudo isso com um preço acessível. Comece hoje mesmo!</p><div className="checkList"><span><CheckCircle2/>Conhecimento e experiência</span><span><CheckCircle2/>Bom atendimento</span><span><CheckCircle2/>Estrutura completa</span><span><CheckCircle2/>Preço acessível</span><span><CheckCircle2/>Estacionamento próprio</span></div></div><div className="imageStack"><img src={fotos[0]}/><div className="floatingCard"><Dumbbell/><strong>Comece hoje</strong><span>Treine em uma academia feita para toda a família.</span></div></div></section><Modalidades/><ScheduleBand setPage={setPage}/><HomeMap/></>}
function Sobre(){return <main><PageHero title="Sobre nós" text="Uma história construída com tradição, família, esporte e confiança."/><section className="section storyGrid"><div><p className="eyebrow blue">Nossa história</p><h2>Tradição que passa de geração para geração.</h2><p>O professor Otavio Spigolon, 6º Dan, foi um dos precursores do karate piracicabano, iniciando a prática no início dos anos 1970, deu aulas durante décadas no antigo Clube Palmeiras e foi através dele que a academia começou a se formar.</p><p>Passando de geração para geração, Otávio foi o professor de seus filhos, Diego e Danilo Spigolon, e de sua esposa, Antonia Spigolon, a Tó, além de ter formado inúmeros faixas pretas ao longo dos anos.</p><p>Quanto à Tó, como é carinhosamente chamada, ela também ministrou aulas de ginástica no mesmo clube durante décadas, e no ano de 2002, trazendo toda a expertise adquirida ao longo de muitos anos, Otavio e Tó iniciam os trabalhos em um novo espaço, a Academia Sport Way.</p><p>Na ocasião, Diego Spigolon, filho mais velho do casal, cursando a graduação em Educação Física, passa a assumir algumas aulas de Karate e aos poucos passa a coordenar a Sport Way na implantação da musculação e demais modalidades.</p><p>Em 2014, Diego passou a integrar a comissão técnica da seleção brasileira de karate e atualmente coordena a seleção brasileira adulta, masculina e feminina. Diego é graduado em Educação Física, com três especializações e mestrado na área, sendo um dos profissionais mais capacitados do Brasil a trabalhar com o Karate.</p><p>Com um bom atendimento, a Academia Sport Way tem conquistado a confiança de seus alunos ao longo dos anos. A estrutura conta com estacionamento, estúdio de pilates, 2 salas multifuncionais com tatame, sala de musculação climatizada com mais de 350 metros quadrados, sala de avaliação e espaço kids.</p></div><div className="storyCard"><img src={fotos[1]}/><Trophy/><h3>Sport Way</h3><p>A academia para toda a família, unindo saúde física, mental, esporte, tradição e atendimento próximo.</p></div></section></main>}
function Modalidades(){return <section className="section lightSection"><p className="eyebrow blue">Estrutura e modalidades</p><h2>Tudo que você precisa para treinar melhor.</h2><div className="cards">{aulas.map(a=><div className="serviceCard" key={a.t}><div className="serviceIcon">{a.i}</div><h3>{a.t}</h3><p>{a.d[0]}</p></div>)}</div></section>}
function Aulas(){return <main><PageHero title="Aulas e estrutura" text="Informações completas das modalidades, horários e professores."/><section className="section classesList">{aulas.map((a,idx)=><div className="classBlock" key={a.t}><div className="classHead"><div className="serviceIcon">{a.i}</div><div><p className="eyebrow blue">Modalidade</p><h2>{a.t}</h2></div></div>{a.d.map((p,i)=><p key={i}>{p}</p>)}<div className="detailGrid"><div><h3>Horários</h3>{a.h.map((h,i)=><span key={i}>{h}</span>)}</div><div><h3>Professores</h3><span>{a.p}</span><a href={zap(`Olá! Gostaria de mais informações sobre ${a.t}.`)} target="_blank" className="miniCta"><WhatsAppIcon size={16}/> Mais informações</a></div></div>{idx===0&&<img className="widePhoto" src={fotos[2]}/>}</div>)}</section></main>}
function Horarios(){return <main><PageHero title="Horários" text="Venha nos visitar e conheça a estrutura da Academia Sport Way."/><section className="section hoursWrap"><div className="hoursCard big"><Clock/><h2>Funcionamento</h2><p>Segunda a sexta-feira</p><strong>06:00 às 22:00</strong><p>Sábados</p><strong>08:00 às 12:00</strong><small>Os horários poderão sofrer alterações em períodos específicos.</small></div><div className="visitCard"><MapPin/><h3>Faça uma visita</h3><p>{endereco}</p><a className="btn secondaryDark" href={mapUrl} target="_blank">Abrir no Google Maps</a></div></section></main>}
function Planos(){return <main><PageHero title="Planos e preços" text="Planos e preços praticados pela Academia Sport Way no ano de 2025."/><section className="section"><div className="notice"><b>Observação:</b> reservamo-nos o direito de alterar preços e planos sem aviso prévio no site.</div><div className="plansGrid">{planos.map(([nome,itens])=><div className="planCard" key={nome}><ShoppingBag/><h3>{nome}</h3>{itens.map(i=><span key={i}>{i}</span>)}<a href={zap(`Olá! Gostaria de saber mais sobre o plano de ${nome}.`)} target="_blank">Consultar pelo WhatsApp</a></div>)}</div></section></main>}
function Mais(){return <main><PageHero title="Mais" text="Central de ajuda, perguntas frequentes e depoimentos."/><section className="section faqGrid"><div><p className="eyebrow blue">Central de ajuda</p><h2>Perguntas frequentes</h2>{faq.map(([q,a])=><div className="faq" key={q}><h3><HelpCircle/> {q}</h3><p>{a}</p></div>)}</div><div><p className="eyebrow blue">Depoimentos</p><h2>Quem treina na Sport Way sente a diferença.</h2>{depo.map(r=><div className="reviewCard" key={r}><div className="stars">{[1,2,3,4,5].map(i=><Star key={i} fill="currentColor" size={16}/>)}</div><p>“{r}”</p><small>Aluno Sport Way</small></div>)}</div></section></main>}
function Contato(){return <main><PageHero title="Contato" text="Fale com a Sport Way, tire dúvidas ou veja a localização."/><section className="section contactGrid"><div className="contactPanel"><p className="eyebrow blue">Atendimento</p><h2>Vamos conversar?</h2><p>Entre em contato pelo WhatsApp, telefone ou e-mail.</p><div className="contactList"><span><Phone/>{tel}</span><span><WhatsAppIcon/>{whats}</span><span><Mail/>sportwaypiracicaba@gmail.com</span><span><Mail/>atendimento@academiasportway.com</span><span><MapPin/>{endereco}</span></div><div className="contactActions"><a className="btn primary" href={zap()} target="_blank"><WhatsAppIcon/>WhatsApp</a><a className="btn secondaryDark" href={mapUrl} target="_blank"><MapPin/>Ver no mapa</a></div></div><iframe title="Mapa Academia Sport Way" src={`https://maps.google.com/maps?q=${encodeURIComponent(endereco)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}/></section></main>}

function HomeMap(){
  return <section className="section homeMapSection">
    <div className="mapIntro">
      <p className="eyebrow blue">Localização</p>
      <h2>Venha conhecer a Sport Way em Piracicaba.</h2>
      <p>Estamos na R. João Tedesco, 595 - Água Branca. Use o mapa interativo para aproximar, navegar e abrir a rota no Google Maps.</p>
      <div className="mapHighlights">
        <span><MapPin/> Endereço fácil de encontrar</span>
        <span><ShieldCheck/> Estacionamento próprio</span>
        <span><Clock/> Segunda a sexta das 06h às 22h</span>
      </div>
      <a className="btn primary" href={mapUrl} target="_blank"><MapPin/> Abrir rota no Google Maps</a>
    </div>
    <iframe title="Mapa Academia Sport Way - Home" src={`https://maps.google.com/maps?q=${encodeURIComponent(endereco)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}/>
  </section>
}

function ScheduleBand({setPage}){return <section className="scheduleBand"><div><p className="eyebrow">Horário</p><h2>Segunda a sexta das 06h às 22h. Sábados das 08h às 12h.</h2></div><button className="btn bandBtn" onClick={()=>setPage("horarios")}>Ver horários<CalendarDays size={18}/></button></section>}
function PageHero({title,text}){return <section className="pageHero"><p className="eyebrow">Academia Sport Way</p><h1>{title}</h1><p>{text}</p></section>}
function Footer({setPage}){

  return (

    <footer>

      <div className="footerGrid">

        <div>
          <h3>SPORT WAY</h3>
          <p>
            A academia para toda a família. Desde 2002 em Piracicaba.
          </p>
        </div>


        <div>

          <h4>Navegação</h4>

          {[
            "home",
            "sobre",
            "aulas",
            "horarios",
            "planos",
            "contato",
            "mais"
          ].map(p => (

            <button
              key={p}
              onClick={()=>setPage(p)}
            >
              {p==="home"
                ? "Início"
                : p[0].toUpperCase()+p.slice(1)}
            </button>

          ))}

        </div>


        <div>

          <h4>Contato</h4>

          <p>
            {tel}
            <br/>
            {whats}
            <br/>
            sportwaypiracicaba@gmail.com
          </p>

        </div>


        <div>

          <h4>Endereço</h4>

          <p>{endereco}</p>


          <div className="social">

            <a
              href="https://www.instagram.com/academia_sport_way?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={28}/>
            </a>


            <a
              href="https://www.facebook.com/academiasportway"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={28}/>
            </a>


            <a
              href={zap()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={28}/>
            </a>

          </div>

        </div>

      </div>


      <small>
        © 2026 Academia Sport Way. Site reformulado para apresentação comercial.
      </small>

    </footer>

  );

}
function App(){const[page,setPage]=useState("home");const pages={home:<Home setPage={setPage}/>,sobre:<Sobre/>,aulas:<Aulas/>,horarios:<Horarios/>,planos:<Planos/>,contato:<Contato/>,mais:<Mais/>};return <><Header page={page} setPage={setPage}/>{pages[page]}<Footer setPage={setPage}/><a className="floatZap" href={zap()} target="_blank"><WhatsAppIcon size={42}/></a></>}
createRoot(document.getElementById("root")).render(<App/>);