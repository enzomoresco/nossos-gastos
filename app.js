/* =========================================================
   Nossos Gastos — lógica do app
   Não precisa editar nada aqui. Edite só o CONFIG no index.html
   ========================================================= */

const CATEGORIES = [
  {e:"🛒",n:"Mercado"},{e:"🧑‍🍳",n:"Restaurantes"},{e:"🥡",n:"Delivery"},
  {e:"🥄",n:"Alimentação"},{e:"🚕",n:"Uber"},{e:"🏖️",n:"Lazer"},
  {e:"🏖️",n:"Viagens"},{e:"🎾",n:"Esporte"},{e:"🎁",n:"Presentes"},
  {e:"💼",n:"Trabalho"},{e:"🏠",n:"Casa"},{e:"💊",n:"Saúde"},
  {e:"💡",n:"Contas"},{e:"📦",n:"Outros"}
];

// Histórico já existente (importado do Splitwise/Excel). Marcado como Acertado.
const SEED = [{"id": "H001", "data": "2026-01-05", "valor": 89.03, "cat": "🛒 Mercado", "obs": "Festval Rebouças - Almoço Ateliê", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H002", "data": "2026-01-10", "valor": 142.0, "cat": "🎁 Presentes", "obs": "Presente - Granado Vó Rosely", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H003", "data": "2026-01-17", "valor": 175.45, "cat": "🧑‍🍳 Restaurantes", "obs": "Canto - Aniversário Ângela", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H004", "data": "2026-01-28", "valor": 30.0, "cat": "💼 Trabalho", "obs": "Madero - Pitstop viagem Floripa (95-65)", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H005", "data": "2026-01-30", "valor": 54.0, "cat": "💼 Trabalho", "obs": "Subway - Pitstop viagem Floripa (108-54)", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H006", "data": "2026-02-05", "valor": 146.96, "cat": "🧑‍🍳 Restaurantes", "obs": "Wolfs - Jantar com a Karyn", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H007", "data": "2026-02-13", "valor": 18.0, "cat": "🏖️ Lazer", "obs": "Penelope - Chopps aniversário Joana", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H008", "data": "2026-02-14", "valor": 142.98, "cat": "🛒 Mercado", "obs": "Festval + Condor - Jantar aniversário de namoro", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H009", "data": "2026-02-20", "valor": 123.52, "cat": "🧑‍🍳 Restaurantes", "obs": "Il Barbuto - Aniversário Karyn - Presente", "divEnzo": 100, "pagou": "Enzo", "status": "Aberto"}, {"id": "H010", "data": "2026-02-23", "valor": 56.0, "cat": "🎾 Esporte", "obs": "Pier - Beach", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H011", "data": "2026-02-27", "valor": 182.27, "cat": "🧑‍🍳 Restaurantes", "obs": "Studio Arte - Jantar Pizzaria", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H012", "data": "2026-03-06", "valor": 24.94, "cat": "🚕 Uber", "obs": "Uber - Laola beach", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H013", "data": "2026-03-06", "valor": 50.0, "cat": "🎾 Esporte", "obs": "Laola Beach - SP", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H014", "data": "2026-03-08", "valor": 221.48, "cat": "🧑‍🍳 Restaurantes", "obs": "Zdeli - SP", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H015", "data": "2026-03-19", "valor": 80.0, "cat": "🧑‍🍳 Restaurantes", "obs": "Evento Asiático Pátio", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H016", "data": "2026-03-22", "valor": 63.39, "cat": "🛒 Mercado", "obs": "Festval - Guac", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H017", "data": "2026-03-29", "valor": 39.32, "cat": "🥡 Delivery", "obs": "Ifood - Comodoro", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H018", "data": "2026-04-02", "valor": 136.0, "cat": "🏖️ Lazer", "obs": "Red Neck - Aniversário Rômulo", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H019", "data": "2026-04-04", "valor": 90.2, "cat": "🧑‍🍳 Restaurantes", "obs": "Sambiquira - La e Vi", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H020", "data": "2026-04-04", "valor": 15.0, "cat": "🧑‍🍳 Restaurantes", "obs": "Caramelo - Cerveja", "divEnzo": 0, "pagou": "Enzo", "status": "Aberto"}, {"id": "H021", "data": "2026-04-11", "valor": 341.2, "cat": "🧑‍🍳 Restaurantes", "obs": "Aniversário - Floreria", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H022", "data": "2026-04-18", "valor": 50.49, "cat": "🥡 Delivery", "obs": "Ifood - Royal Sushi", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H023", "data": "2026-04-21", "valor": 45.0, "cat": "🎾 Esporte", "obs": "Marco Silva - Tênis", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H024", "data": "2026-04-21", "valor": 73.0, "cat": "🧑‍🍳 Restaurantes", "obs": "Janela Bar - gi e muraski", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H025", "data": "2026-04-24", "valor": 109.65, "cat": "🎁 Presentes", "obs": "Presente - Formatura Brubru", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H026", "data": "2026-04-26", "valor": 72.93, "cat": "🏖️ Lazer", "obs": "Jantar - Romulo e Be", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H027", "data": "2026-04-27", "valor": 25.0, "cat": "🥄 Alimentação", "obs": "Formatura Anny - Pipoca", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H028", "data": "2026-04-28", "valor": 90.97, "cat": "🧑‍🍳 Restaurantes", "obs": "Restaurante - Fantinato", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H029", "data": "2026-04-29", "valor": 237.46, "cat": "🏖️ Viagens", "obs": "Floripa - Passagem ida", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H030", "data": "2026-04-30", "valor": 12.0, "cat": "🏖️ Viagens", "obs": "Floripa - Kinder Bueno Rodoviária Ida", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H031", "data": "2026-05-01", "valor": 49.8, "cat": "🏖️ Viagens", "obs": "Floripa - Uber Chegada", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H032", "data": "2026-05-01", "valor": 43.47, "cat": "🏖️ Viagens", "obs": "Floripa - Panvel Farmácia", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H033", "data": "2026-05-01", "valor": 13.74, "cat": "🏖️ Viagens", "obs": "Floripa - Uber Praia Mole", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H034", "data": "2026-05-01", "valor": 38.0, "cat": "🏖️ Viagens", "obs": "Praia Mole - Açaí Baruc", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H035", "data": "2026-05-01", "valor": 25.0, "cat": "🏖️ Viagens", "obs": "Praia Mole - Queijo", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H036", "data": "2026-05-02", "valor": 189.46, "cat": "🏖️ Viagens", "obs": "Floripa - Passagem volta", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H037", "data": "2026-05-02", "valor": 41.0, "cat": "🏖️ Viagens", "obs": "Floripa - Bar Gustavo", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H038", "data": "2026-05-02", "valor": 154.96, "cat": "🏖️ Viagens", "obs": "Floripa - Mercado", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H039", "data": "2026-05-02", "valor": 115.5, "cat": "🏖️ Viagens", "obs": "Floripa - Garapuvu", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H040", "data": "2026-05-03", "valor": 132.16, "cat": "🏖️ Viagens", "obs": "Floripa - Café pós meia", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H041", "data": "2026-05-03", "valor": 25.86, "cat": "🏖️ Viagens", "obs": "Floripa - Uber Volta rodoviária", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H042", "data": "2026-05-03", "valor": 17.06, "cat": "🏖️ Viagens", "obs": "Floripa - Mercado", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}, {"id": "H043", "data": "2026-05-03", "valor": 18.5, "cat": "🏖️ Viagens", "obs": "Floripa - Lanche Graal", "divEnzo": 60, "pagou": "Enzo", "status": "Aberto"}];

let DATA = [];          // todos os lançamentos
let pickedCat = null;   // categoria selecionada no modal
let segPagou = "Enzo";
let segSplitE = 60;

const $ = s => document.querySelector(s);
const fmt = n => "R$ " + n.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2});
const online = () => CONFIG.API_URL && !CONFIG.API_URL.includes("COLE_AQUI");

/* ---------- LOGIN ---------- */
function tryLogin(){
  const v = $("#pwd").value.trim();
  if(v === CONFIG.SENHA){
    sessionStorage.setItem("ng_auth","1");
    showApp();
  } else {
    const e = $("#loginErr"); e.style.opacity = 1;
    $("#pwd").value = ""; setTimeout(()=>e.style.opacity=0,1800);
  }
}
$("#pwd").addEventListener("keydown",e=>{if(e.key==="Enter")tryLogin();});

function showApp(){
  $("#login").style.display = "none";
  $("#app").style.display = "block";
  $("#fab").style.display = "flex";
  buildCatGrid();
  $("#fData").value = new Date().toISOString().slice(0,10);
  loadData();
}

/* ---------- DADOS ---------- */
async function loadData(){
  setSync("conn");
  if(online()){
    try{
      const r = await fetch(CONFIG.API_URL + "?action=list");
      const j = await r.json();
      if(j && Array.isArray(j.rows)){
        DATA = j.rows;
        setSync("ok");
        render();
        return;
      }
      throw new Error("formato");
    }catch(err){
      console.warn("Falha ao buscar online, usando histórico local:", err);
      DATA = [...SEED];
      setSync("err");
      render();
    }
  } else {
    // Sem robô configurado ainda: mostra histórico (modo demonstração)
    DATA = [...SEED];
    setSync("off");
    render();
  }
}

function setSync(state){
  const pill = $("#syncPill"), txt = $("#syncTxt");
  pill.className = "sync-pill";
  if(state==="ok"){ txt.textContent = "Sincronizado"; }
  else if(state==="conn"){ txt.textContent = "Conectando…"; }
  else if(state==="off"){ pill.classList.add("off"); txt.textContent = "Modo demonstração (sem robô)"; }
  else if(state==="err"){ pill.classList.add("err"); txt.textContent = "Sem conexão — vendo histórico"; }
}

/* ---------- SALDO: quem deve quem ---------- */
// Só conta lançamentos NÃO-acertados. Quem paga adianta; o outro deve a sua cota.
function computeBalance(){
  let karynDeveAEnzo = 0; // positivo = Karyn deve a Enzo
  for(const x of DATA){
    if(x.status === "Acertado") continue;
    const v = Number(x.valor)||0;
    const dE = (Number(x.divEnzo)||0)/100;       // fração que cabe ao Enzo
    const cotaEnzo  = v * dE;
    const cotaKaryn = v * (1-dE);
    if(x.pagou === "Enzo"){
      // Enzo pagou tudo; Karyn deve a cota dela
      karynDeveAEnzo += cotaKaryn;
    } else if(x.pagou === "Karyn"){
      // Karyn pagou tudo; Enzo deve a cota dele
      karynDeveAEnzo -= cotaEnzo;
    }
  }
  return Math.round(karynDeveAEnzo*100)/100;
}

/* ---------- RENDER ---------- */
function render(){
  const bal = computeBalance();
  const hero = $("#hero");
  if(Math.abs(bal) < 0.01){
    hero.classList.add("settled");
    $("#heroWho").innerHTML = "Tudo certo entre vocês ✨";
    $("#heroAmt").textContent = "";
    $("#settleBtn").style.display = "none";
  } else {
    hero.classList.remove("settled");
    if(bal > 0){
      $("#heroWho").innerHTML = "<b>Karyn</b> deve para <b>Enzo</b>";
    } else {
      $("#heroWho").innerHTML = "<b>Enzo</b> deve para <b>Karyn</b>";
    }
    $("#heroAmt").textContent = fmt(Math.abs(bal));
    $("#settleBtn").style.display = "inline-block";
  }

  // stats
  const now = new Date();
  const ym = now.toISOString().slice(0,7);
  let total=0, totalMonth=0, cotaE=0, cotaK=0;
  for(const x of DATA){
    const v = Number(x.valor)||0;
    total += v;
    if(String(x.data).slice(0,7) === ym) totalMonth += v;
    const dE = (Number(x.divEnzo)||0)/100;
    cotaE += v*dE; cotaK += v*(1-dE);
  }
  $("#stMonth").textContent = fmt(totalMonth);
  $("#stTotal").textContent = fmt(total);
  $("#stEnzo").textContent = fmt(cotaE);
  $("#stKaryn").textContent = fmt(cotaK);

  // split bar (cota acumulada)
  const sum = cotaE+cotaK || 1;
  const pE = Math.round(cotaE/sum*100);
  $("#sbE").style.width = pE+"%";
  $("#sbK").style.width = (100-pE)+"%";
  $("#sbET").textContent = fmt(cotaE);
  $("#sbKT").textContent = fmt(cotaK);

  renderCats(total);
  renderEntries();
}

function renderCats(total){
  const map = {};
  for(const x of DATA){
    const c = x.cat || "📦 Outros";
    map[c] = (map[c]||0) + (Number(x.valor)||0);
  }
  const arr = Object.entries(map).sort((a,b)=>b[1]-a[1]);
  const max = arr.length ? arr[0][1] : 1;
  const box = $("#cats"); box.innerHTML = "";
  if(!arr.length){ box.innerHTML = '<div class="empty">Nenhum gasto ainda.</div>'; return; }
  for(const [cat,val] of arr){
    const parts = cat.split(" ");
    const emoji = parts[0];
    const name = parts.slice(1).join(" ") || cat;
    const pct = total ? Math.round(val/total*100) : 0;
    const row = document.createElement("div");
    row.className = "catrow";
    row.innerHTML = `<div class="emoji">${emoji}</div>
      <div style="flex:1">
        <div class="nm">${name} <span class="ct">· ${pct}%</span></div>
        <div class="barwrap"><div class="bar" style="width:${Math.round(val/max*100)}%"></div></div>
      </div>
      <div class="vl">${fmt(val)}</div>`;
    box.appendChild(row);
  }
}

function renderEntries(){
  const box = $("#entries"); box.innerHTML = "";
  const sorted = [...DATA].sort((a,b)=> String(b.data).localeCompare(String(a.data)));
  if(!sorted.length){ box.innerHTML = '<div class="empty">Nenhum lançamento ainda.<br>Toque em “Lançar gasto”.</div>'; return; }
  let lastDay = "";
  for(const x of sorted){
    const day = formatDay(x.data);
    if(day !== lastDay){
      const dl = document.createElement("div");
      dl.className = "daylabel"; dl.textContent = day;
      box.appendChild(dl); lastDay = day;
    }
    const cat = x.cat || "📦 Outros";
    const emoji = cat.split(" ")[0];
    const v = Number(x.valor)||0;
    const dE = Number(x.divEnzo)||0;
    let tagClass="div", tagTxt;
    if(x.status==="Acertado"){ tagClass="acert"; tagTxt="Acertado"; }
    else if(dE===100){ tagClass="presente"; tagTxt="100% Enzo"; }
    else if(dE===0){ tagClass="presente"; tagTxt="100% Karyn"; }
    else { tagTxt = dE+"/"+(100-dE); }
    const pagou = x.status==="Acertado" ? "" : " · "+(x.pagou==="Enzo"?"Enzo pagou":"Karyn pagou");
    const el = document.createElement("div");
    el.className = "entry";
    el.innerHTML = `<div class="em">${emoji}</div>
      <div class="mid">
        <div class="obs">${esc(x.obs)||"(sem descrição)"}</div>
        <div class="meta">${cat.split(" ").slice(1).join(" ")}${pagou}</div>
      </div>
      <div class="right">
        <div class="amt">${fmt(v)}</div>
        <span class="tag ${tagClass}">${tagTxt}</span>
      </div>`;
    if(x.status!=="Acertado" && x.id){
      el.addEventListener("dblclick",()=>askDelete(x.id, x.obs));
      el.title = "Toque duas vezes para apagar";
    }
    box.appendChild(el);
  }
  const hint = document.createElement("div");
  hint.className="swipe-hint"; hint.textContent="Toque 2x num lançamento recente para apagar";
  box.appendChild(hint);
}

/* ---------- MODAL ---------- */
function buildCatGrid(){
  const g = $("#catGrid"); g.innerHTML = "";
  CATEGORIES.forEach((c,i)=>{
    const d = document.createElement("div");
    d.className = "catpick";
    d.innerHTML = `<span class="e">${c.e}</span>${c.n}`;
    d.onclick = ()=>{
      document.querySelectorAll(".catpick").forEach(x=>x.classList.remove("sel"));
      d.classList.add("sel"); pickedCat = c.e+" "+c.n;
    };
    g.appendChild(d);
  });
}

function openModal(){
  $("#modal").classList.add("open");
  $("#fValor").focus();
}
function closeModal(){ $("#modal").classList.remove("open"); }
$("#modal").addEventListener("click",e=>{ if(e.target.id==="modal") closeModal(); });

// segmentos
document.querySelectorAll("#segPagou button").forEach(b=>{
  b.onclick=()=>{ document.querySelectorAll("#segPagou button").forEach(x=>x.classList.remove("sel")); b.classList.add("sel"); segPagou=b.dataset.v; updatePreview(); };
});
document.querySelectorAll("#segSplit button").forEach(b=>{
  b.onclick=()=>{
    document.querySelectorAll("#segSplit button").forEach(x=>x.classList.remove("sel")); b.classList.add("sel");
    if(b.dataset.e==="custom"){ $("#customSplit").classList.add("show"); segSplitE=Number($("#fCustomE").value)||60; }
    else { $("#customSplit").classList.remove("show"); segSplitE=Number(b.dataset.e); }
    updatePreview();
  };
});
$("#fCustomE").addEventListener("input",e=>{
  let v=Math.max(0,Math.min(100,Number(e.target.value)||0));
  segSplitE=v; $("#customKlab").textContent=100-v; updatePreview();
});
$("#fValor").addEventListener("input",updatePreview);

function updatePreview(){
  const v=Number($("#fValor").value)||0;
  if(!v){ $("#splitPreview").textContent=""; return; }
  const cE=v*segSplitE/100, cK=v-cE;
  $("#splitPreview").innerHTML = `Enzo: <b>${fmt(cE)}</b> · Karyn: <b>${fmt(cK)}</b>`;
}

/* ---------- SALVAR ---------- */
async function saveEntry(){
  const valor=Number($("#fValor").value);
  if(!valor||valor<=0){ toast("Coloque um valor"); return; }
  if(!pickedCat){ toast("Escolha uma categoria"); return; }
  const entry={
    id:"L"+Date.now(),
    data:$("#fData").value||new Date().toISOString().slice(0,10),
    valor:Math.round(valor*100)/100,
    cat:pickedCat,
    obs:$("#fObs").value.trim(),
    divEnzo:segSplitE,
    pagou:segPagou,
    status:"Aberto"
  };
  const btn=$("#saveBtn"); btn.disabled=true; btn.textContent="Salvando…";
  // otimista: mostra já
  DATA.push(entry); render(); closeModal(); resetModal();
  if(online()){
    try{
      await fetch(CONFIG.API_URL,{method:"POST",headers:{"Content-Type":"text/plain"},
        body:JSON.stringify({action:"add",entry})});
      toast("Gasto salvo ✓"); setSync("ok");
    }catch(err){
      toast("Salvo no aparelho, mas sem conexão"); setSync("err");
    }
  } else {
    toast("Modo demonstração — configure o robô para sincronizar");
  }
  btn.disabled=false; btn.textContent="Salvar gasto";
}

function resetModal(){
  $("#fValor").value=""; $("#fObs").value=""; $("#splitPreview").textContent="";
  document.querySelectorAll(".catpick").forEach(x=>x.classList.remove("sel")); pickedCat=null;
}

/* ---------- APAGAR ---------- */
async function askDelete(id,obs){
  if(!confirm("Apagar este gasto?\n\""+(obs||"sem descrição")+"\"")) return;
  DATA = DATA.filter(x=>x.id!==id); render();
  if(online()){
    try{ await fetch(CONFIG.API_URL,{method:"POST",headers:{"Content-Type":"text/plain"},
      body:JSON.stringify({action:"delete",id})}); toast("Apagado"); }
    catch(e){ toast("Sem conexão"); }
  }
}

/* ---------- ACERTAR CONTAS ---------- */
async function settleUp(){
  const bal=computeBalance();
  const msg = bal>0 ? "Karyn pagou "+fmt(Math.abs(bal))+" para Enzo?" : "Enzo pagou "+fmt(Math.abs(bal))+" para Karyn?";
  if(!confirm(msg+"\n\nIsso vai zerar o saldo (marca os gastos abertos como acertados).")) return;
  for(const x of DATA){ if(x.status!=="Acertado") x.status="Acertado"; }
  render();
  if(online()){
    try{ await fetch(CONFIG.API_URL,{method:"POST",headers:{"Content-Type":"text/plain"},
      body:JSON.stringify({action:"settle"})}); toast("Contas zeradas ✓"); }
    catch(e){ toast("Sem conexão"); }
  } else { toast("Modo demonstração"); }
}

/* ---------- TABS ---------- */
function switchTab(name,btn){
  document.querySelectorAll(".tabs button").forEach(b=>b.classList.remove("sel"));
  btn.classList.add("sel");
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("show"));
  $("#view-"+name).classList.add("show");
}

/* ---------- UTILS ---------- */
function toast(msg){
  const t=$("#toast"); t.textContent=msg; t.classList.add("show");
  clearTimeout(window._tt); window._tt=setTimeout(()=>t.classList.remove("show"),2200);
}
function esc(s){ return (s||"").replace(/[<>&]/g,c=>({"<":"&lt;",">":"&gt;","&":"&amp;"}[c])); }
function formatDay(iso){
  try{
    const d=new Date(iso+"T12:00:00");
    const months=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
    const today=new Date(); const yest=new Date(Date.now()-864e5);
    if(iso===today.toISOString().slice(0,10)) return "Hoje";
    if(iso===yest.toISOString().slice(0,10)) return "Ontem";
    return d.getDate()+" de "+months[d.getMonth()]+" de "+d.getFullYear();
  }catch(e){ return iso; }
}

/* ---------- INIT ---------- */
if(sessionStorage.getItem("ng_auth")==="1"){ showApp(); }
