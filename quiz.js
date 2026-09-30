const MULT=`<svg class="mx-auto max-h-72 rounded-2xl bg-slate-950 p-2" viewBox="0 0 260 400" role="img" aria-label="Multímetro digital com seletor em tensão contínua e display marcando 0,31 V">
<rect x="20" y="10" width="220" height="380" rx="26" fill="#f5c518" stroke="#b8920a" stroke-width="3"/>
<rect x="42" y="32" width="176" height="86" rx="10" fill="#1e293b"/>
<rect x="50" y="40" width="160" height="70" rx="6" fill="#b7d3a8"/>
<text x="196" y="94" text-anchor="end" font-family="monospace" font-size="52" font-weight="700" fill="#14231a">0.31</text>
<text x="58" y="56" font-family="monospace" font-size="13" fill="#14231a">DC</text>
<text x="196" y="56" text-anchor="end" font-family="monospace" font-size="15" font-weight="700" fill="#14231a">V</text>
<circle cx="130" cy="232" r="62" fill="#1f2937" stroke="#0f172a" stroke-width="4"/>
<circle cx="130" cy="232" r="22" fill="#374151"/>
<line x1="130" y1="232" x2="105" y2="206" stroke="#f8fafc" stroke-width="7" stroke-linecap="round"/>
<g font-family="Arial" font-size="12" font-weight="700" fill="#111827" text-anchor="middle">
<text x="130" y="150">OFF</text>
<text x="70" y="178" fill="#b91c1c" font-size="14">V⎓ 2</text>
<text x="192" y="178">V~</text><text x="208" y="236">Ω</text><text x="192" y="296">A⎓</text><text x="130" y="312">10A</text><text x="66" y="296">hFE</text><text x="52" y="236">°C</text></g>
<circle cx="80" cy="356" r="14" fill="#111827"/><circle cx="130" cy="356" r="14" fill="#111827"/><circle cx="180" cy="356" r="14" fill="#dc2626"/>
<g font-family="Arial" font-size="10" font-weight="700" fill="#111827" text-anchor="middle"><text x="80" y="334">COM</text><text x="130" y="334">10A</text><text x="180" y="334">VΩmA</text></g>
</svg>`;
const Q=[
{t:"Robôs industriais",ctx:"Uma fábrica de eletrônicos precisa de um robô para montar componentes em placas e parafusar peças pequenas. O processo exige alta velocidade de movimentação no plano horizontal e boa precisão no eixo vertical, com muita repetibilidade ao longo do dia.",fig:`<figure class="my-4 text-center"><img class="mx-auto max-h-72 rounded-2xl bg-slate-950 p-2" src="./img/scara.png" alt="Robô industrial de braço articulado horizontal" onerror="this.parentNode.remove()"><figcaption class="mt-2 text-xs text-slate-500">Robô utilizado na linha de montagem da fábrica.</figcaption></figure>`,cmd:"Com base nas características descritas, o tipo de robô mais adequado e o motivo da escolha são:",a:["Cartesiano, pois realiza movimentos lineares em X, Y e Z e é usado em impressão 3D.","SCARA, pois combina velocidade e precisão no plano horizontal, sendo ideal para montagem e pick and place.","Cobot, pois foi criado para dividir o espaço com pessoas e não precisa de motores.","Cilíndrico, pois apresenta a maior liberdade de movimento entre todos os robôs."],c:1,e:"O SCARA (Selective Compliance Assembly Robot Arm) foi desenvolvido para montagem, parafusamento e pick and place, com velocidade muito alta no plano horizontal e boa precisão no eixo vertical."},
{t:"Sensores",ctx:"Um sistema de estacionamento inteligente usa o sensor HC-SR04 para avisar o motorista da distância até a parede. O sensor emite um pulso ultrassônico e o Arduino mede, com pulseIn(), o tempo que o eco leva para retornar. O programador usou a fórmula abaixo:",code:"float dist = dur * 0.034 / 2;",cmd:"A divisão por 2 na fórmula é necessária porque:",a:["o sensor só consegue medir metade da distância real.","a velocidade do som no ar diminui pela metade em ambientes fechados.","o tempo medido corresponde à ida e à volta da onda, e a distância até o obstáculo é apenas um trecho.","o Arduino trabalha com valores inteiros e precisa reduzir o número."],c:2,e:"O HC-SR04 mede o tempo total entre a emissão e o retorno do eco. Como a onda vai até o obstáculo e volta, dividimos por 2 para obter só a distância até o objeto."},
{t:"Sensores",ctx:"Um condomínio quer acender as luzes do jardim automaticamente ao anoitecer. Para isso, instalou um LDR (fotoresistor) ligado a um Arduino. Segundo a ficha técnica, sua resistência vai de cerca de 10 Ω com muita luz até aproximadamente 1 MΩ no escuro.",cmd:"Ao anoitecer, o comportamento esperado do LDR e a sua utilidade no projeto são:",a:["A resistência aumenta, o que altera a tensão lida no pino analógico e permite ao Arduino identificar o escuro.","A resistência diminui, pois o LDR gera energia própria quando escurece.","A resistência permanece constante, e apenas a tensão de alimentação muda.","O LDR passa a emitir luz, acionando diretamente a lâmpada do jardim."],c:0,e:"A resistência do LDR varia inversamente com a luz: quanto menos luz, maior a resistência. Isso muda o sinal analógico (analogRead) e permite ao Arduino decidir quando acender a lâmpada."},
{t:"Multímetro",ctx:"Em uma aula prática, um aluno ligou o sensor de temperatura LM35, alimentado com 5 V, e quis conferir sua saída sem usar o Arduino. Ele posicionou as pontas de prova entre o pino de saída (Vout) e o GND do sensor e ajustou o seletor do multímetro, como mostra a imagem. O LM35 fornece 10 mV para cada grau Celsius.",fig:`<figure class="my-4 text-center">${MULT}<figcaption class="mt-2 text-xs text-slate-500">Multímetro com o seletor em tensão contínua (V⎓, escala 2 V).</figcaption></figure>`,cmd:"Considerando a leitura do display e a característica do sensor, a temperatura medida é de:",a:["0,31 °C","3,1 °C","310 °C","31 °C"],c:3,e:"O display marca 0,31 V, ou seja, 310 mV. Como o LM35 fornece 10 mV/°C: 310 ÷ 10 = 31 °C. O seletor em V⎓ (tensão contínua) está correto, pois a saída do sensor é DC."},
{t:"Arduino",ctx:"Um estudante conectou o cursor de um potenciômetro ao pino A0 de um Arduino Uno, alimentado com 5 V. O conversor analógico-digital da placa tem resolução de 10 bits, retornando valores de 0 a 1023. Em determinado momento, o Monitor Serial exibiu o valor 512.",cmd:"A tensão aproximada no pino A0 nesse instante era de:",a:["1,0 V","2,5 V","3,3 V","5,0 V"],c:1,e:"Valor lido = (tensão ÷ 5 V) × 1023. Logo, tensão ≈ 512 × 5 ÷ 1023 ≈ 2,5 V, aproximadamente a metade da escala."},
{t:"Arduino",ctx:"Em um projeto de \"dimmer\", o brilho de um LED é controlado por um potenciômetro. O LED foi ligado ao pino 9 do Arduino Uno e o programador usa analogWrite(led, brilho). A colega sugeriu trocar o LED para o pino 7, mas o efeito de variação de brilho deixou de funcionar.",cmd:"Isso ocorreu porque o pino 9 possui recurso PWM, que:",a:["converte o sinal analógico do potenciômetro em digital.","aumenta a tensão de saída da placa acima de 5 V.","simula uma tensão variável ao alternar rapidamente entre HIGH e LOW, alterando o tempo ligado do sinal.","permite a comunicação com sensores I2C usando apenas um fio."],c:2,e:"O Arduino Uno não tem saída analógica verdadeira. Nos pinos com PWM (marcados com ~), o sinal liga e desliga rapidamente, e a proporção de tempo ligado altera a potência média entregue ao LED."},
{t:"ESP32",ctx:"Uma cooperativa agrícola quer monitorar a temperatura e a umidade de uma estufa pelo celular, enviando os dados pela internet. O orçamento é limitado e o grupo prefere não comprar módulos adicionais de comunicação.",cmd:"Nessa situação, a placa ESP32 é mais vantajosa que um Arduino Uno porque:",a:["possui Wi-Fi e Bluetooth integrados, além de maior capacidade de processamento, facilitando projetos de IoT.","opera com tensão de 12 V, dispensando reguladores nos sensores.","não precisa ser programada, pois já vem configurada para a internet.","funciona apenas com sensores analógicos, o que reduz erros de leitura."],c:0,e:"O ESP32 traz Wi-Fi e Bluetooth no próprio chip e mais poder de processamento, o que o torna uma escolha comum em IoT. Lembre que ele trabalha com lógica de 3,3 V e é programável, inclusive pela IDE do Arduino."},
{t:"Código",ctx:"Um sistema de climatização de estufa usa um sensor DHT11 ligado a um Arduino. Um relé, no pino RELE, aciona o ventilador. Em determinado instante, o sensor mede 28 °C de temperatura e 85 % de umidade relativa.",code:"float h = dht.readHumidity();\nfloat t = dht.readTemperature();\nif (t > 30 || h > 80) {\n  digitalWrite(RELE, HIGH);\n} else {\n  digitalWrite(RELE, LOW);\n}",cmd:"Com essas leituras, o comportamento do ventilador será:",a:["permanecer desligado, pois a temperatura está abaixo de 30 °C.","ser ligado, pois o operador || exige que apenas uma das condições seja verdadeira e a umidade passou de 80 %.","ser ligado somente se as duas condições forem verdadeiras ao mesmo tempo.","não funcionar, pois readHumidity() e readTemperature() não podem ser usadas juntas."],c:1,e:"O operador || (OU) torna a condição verdadeira quando pelo menos uma parte é verdadeira. Aqui t > 30 é falso (28 °C), mas h > 80 é verdadeiro (85 %), então o relé é acionado e o ventilador liga."},
{t:"Código",ctx:"Um carrinho robô usa o sensor ultrassônico HC-SR04 e um buzzer para evitar colisões. O buzzer deve soar sempre que houver um obstáculo a menos de 20 cm. Em uma medição, a função pulseIn() retornou 1000 µs.",code:"digitalWrite(TRIG, HIGH);\ndelayMicroseconds(10);\ndigitalWrite(TRIG, LOW);\nlong dur = pulseIn(ECHO, HIGH);\nfloat dist = dur * 0.034 / 2;\nif (dist < 20) digitalWrite(BUZZER, HIGH);",cmd:"Nessa medição, o valor calculado para dist e a ação do sistema são:",a:["34 cm, e o buzzer permanece desligado.","17 cm, e o buzzer permanece desligado.","1,7 cm, e o buzzer é acionado.","17 cm, e o buzzer é acionado."],c:3,e:"dist = 1000 × 0,034 ÷ 2 = 17 cm. Como 17 < 20, a condição do if é verdadeira e o buzzer é acionado. Quem esquece de dividir por 2 chega a 34 cm e erra a decisão."},
{t:"Código",ctx:"Um sistema de iluminação automática usa o sensor de luminosidade BH1750, ligado ao Arduino pelos pinos SDA e SCL. O LED deve acender quando a luz ambiente estiver abaixo de 100 lux. Em certo momento, o sensor mede 40 lux.",code:"#include <Wire.h>\n#include <BH1750.h>\nBH1750 lightMeter;\nvoid setup() {\n  Wire.begin();\n  lightMeter.begin();\n  pinMode(LED, OUTPUT);\n}\nvoid loop() {\n  float lux = lightMeter.readLightLevel();\n  if (lux < 100) digitalWrite(LED, HIGH);\n}",cmd:"Nesse cenário, o estado do LED e a função da biblioteca Wire.h são, respectivamente:",a:["acende; permitir a comunicação I2C entre o Arduino e o sensor.","permanece apagado; converter lux em tensão elétrica.","acende; medir diretamente a luz do ambiente.","permanece apagado; permitir a comunicação I2C entre o Arduino e o sensor."],c:0,e:"Como 40 < 100, o if é verdadeiro e o LED acende. O BH1750 é um sensor digital que se comunica por I2C (pinos SDA e SCL), e a biblioteca Wire.h é a responsável por essa comunicação."}
];

// ============================================================
// LÓGICA DO QUIZ
// (as classes do Tailwind ficam escritas por extenso para o
//  compilador conseguir encontrá-las neste arquivo)
// ============================================================
let atual = 0, selecionada = null, acertos = 0, resultados = [];
const $ = id => document.getElementById(id);
const LETRAS = "ABCD";
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

const ALT_BASE = "alt flex w-full items-start gap-4 rounded-2xl border px-5 py-4 mt-3 text-left leading-relaxed text-slate-200 transition ";
const ESTADOS = {
  normal: [ALT_BASE + "cursor-pointer border-blue-500/25 bg-slate-900 hover:translate-x-1 hover:border-blue-500", "bg-blue-500/20 text-blue-300"],
  sel:    [ALT_BASE + "cursor-pointer border-cyan-400 bg-cyan-500/10", "bg-cyan-500 text-slate-950"],
  ok:     [ALT_BASE + "cursor-default border-green-500 bg-green-500/15", "bg-green-500 text-slate-950"],
  bad:    [ALT_BASE + "cursor-default border-red-500 bg-red-500/15", "bg-red-500 text-white"],
  off:    [ALT_BASE + "cursor-default border-blue-500/25 bg-slate-900 opacity-60", "bg-blue-500/20 text-blue-300"]
};
const BADGE = "grid size-8 flex-none place-items-center rounded-full text-sm font-bold ";

function pintar(btn, estado) {
  btn.className = ESTADOS[estado][0];
  btn.firstElementChild.className = BADGE + ESTADOS[estado][1];
}

function mostrar(id) {
  ["intro", "quiz", "end"].forEach(x => $(x).classList.toggle("hidden", x !== id));
}

function iniciar() {
  atual = 0; acertos = 0; resultados = [];
  mostrar("quiz"); renderizar(); window.scrollTo(0, 0);
}

function renderizar() {
  const q = Q[atual];
  selecionada = null;
  $("cnt").textContent = `Questão ${atual + 1} de ${Q.length}`;
  $("pts").textContent = `Acertos: ${acertos}`;
  $("pb").style.width = (atual / Q.length * 100) + "%";

  const codigo = q.code
    ? `<pre class="my-3 overflow-x-auto rounded-xl border border-blue-500/25 bg-slate-950 p-4 font-mono text-sm leading-6 text-sky-300">${esc(q.code)}</pre>` : "";
  const alternativas = q.a.map((texto, k) =>
    `<button type="button" class="${ESTADOS.normal[0]}" data-k="${k}"><b class="${BADGE}${ESTADOS.normal[1]}">${LETRAS[k]}</b><span>${texto}</span></button>`
  ).join("");

  $("q").innerHTML =
    `<div class="text-xs font-semibold uppercase tracking-[3px] text-cyan-400">${q.t}</div>` +
    `<p class="my-3 leading-8 text-slate-300">${q.ctx}</p>${codigo}${q.fig || ""}` +
    `<p class="my-5 font-semibold leading-7 text-white">${q.cmd}</p>${alternativas}` +
    `<div id="fb" class="mt-5 hidden rounded-2xl border-l-4 border-blue-500 bg-blue-500/10 p-4 text-sm leading-7 text-slate-300"></div>`;

  $("q").querySelectorAll(".alt").forEach(b => b.addEventListener("click", () => escolher(+b.dataset.k)));
  $("ok").classList.remove("hidden"); $("ok").disabled = true;
  $("nx").classList.add("hidden");
}

function escolher(k) {
  selecionada = k;
  $("q").querySelectorAll(".alt").forEach((b, j) => pintar(b, j === k ? "sel" : "normal"));
  $("ok").disabled = false;
}

function confirmar() {
  const q = Q[atual], acertou = selecionada === q.c;
  $("q").querySelectorAll(".alt").forEach((b, j) => {
    pintar(b, j === q.c ? "ok" : j === selecionada ? "bad" : "off");
    b.disabled = true;
  });
  if (acertou) acertos++;
  resultados.push(acertou);
  $("pts").textContent = `Acertos: ${acertos}`;
  const fb = $("fb");
  fb.classList.remove("hidden");
  fb.innerHTML = `<b class="text-white">${acertou ? "✔ Correto!" : "✘ Resposta correta: " + LETRAS[q.c] + "."}</b><br>${q.e}`;
  $("ok").classList.add("hidden");
  $("nx").classList.remove("hidden");
  $("nx").textContent = atual === Q.length - 1 ? "Ver resultado →" : "Próxima →";
}

function proxima() {
  atual++;
  if (atual < Q.length) { renderizar(); window.scrollTo(0, 0); } else finalizar();
}

function finalizar() {
  mostrar("end");
  $("sc").textContent = `${acertos}/${Q.length}`;
  $("msg").textContent =
    acertos >= 9 ? "Excelente! Você domina o conteúdo do projeto. 🤖" :
    acertos >= 7 ? "Muito bom! Falta pouco para dominar tudo. 🚀" :
    acertos >= 5 ? "Bom começo! Revise as páginas de robôs e sensores. 📚" :
                   "Vale revisar o site com calma e tentar de novo. 💪";
  $("rev").innerHTML = Q.map((q, k) =>
    `<div class="flex justify-between gap-4 border-b border-blue-500/15 py-3 text-sm"><span>${k + 1}. ${q.t}</span>` +
    (resultados[k] ? `<span class="text-green-500">Acertou</span>` : `<span class="text-red-500">Errou</span>`) + `</div>`
  ).join("");
  window.scrollTo(0, 0);
}

$("btn-start").addEventListener("click", iniciar);
$("btn-restart").addEventListener("click", iniciar);
$("ok").addEventListener("click", confirmar);
$("nx").addEventListener("click", proxima);