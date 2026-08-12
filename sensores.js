// src/script.js

// ============================================================
// 1. DADOS DOS SENSORES (24 sensores conforme o desafio)
// ============================================================

const sensores = [
    // --- Temperatura e Umidade ---
    {
        id: 1,
        nome: "DHT11",
        categoria: "Temperatura e Umidade",
        conceito: "Sensor digital de baixo custo para medição de temperatura e umidade relativa do ar.",
        funcionamento: "Utiliza um termistor e um sensor capacitivo de umidade. Os dados são convertidos em sinal digital.",
        especificacoes: "Tensão: 3.3-5V | Umidade: 20-80% (±5%) | Temperatura: 0-50°C (±2°C) | Frequência: 0.5Hz",
        tipoSinal: "Digital (One-Wire)",
        aplicacoes: "Estações meteorológicas, climatização, estufas, monitoramento ambiental",
        exemploProjeto: "Monitoramento de temperatura/umidade em estufa com alertas via IoT",
        imagem: "./img/dht11.jpg",
        fabricantes: "AOSONG, Adafruit, SparkFun",
        codigo: `#include <DHT.h>\n#define DHTPIN 2\n#define DHTTYPE DHT11\nDHT dht(DHTPIN, DHTTYPE);\n\nvoid setup() {\n  Serial.begin(9600);\n  dht.begin();\n}\n\nvoid loop() {\n  float h = dht.readHumidity();\n  float t = dht.readTemperature();\n  Serial.print("Umidade: ");\n  Serial.print(h);\n  Serial.print(" %\\t");\n  Serial.print("Temperatura: ");\n  Serial.print(t);\n  Serial.println(" °C");\n  delay(2000);\n}`
    },
    {
        id: 2,
        nome: "DHT22",
        categoria: "Temperatura e Umidade",
        conceito: "Sensor digital de alta precisão para temperatura e umidade, superior ao DHT11.",
        funcionamento: "Similar ao DHT11, mas com componentes mais precisos e maior resolução.",
        especificacoes: "Tensão: 3.3-5V | Umidade: 0-100% (±2-5%) | Temperatura: -40-80°C (±0.5°C) | Frequência: 0.5Hz",
        tipoSinal: "Digital (One-Wire)",
        aplicacoes: "Monitoramento ambiental preciso, refrigeração, laboratórios",
        exemploProjeto: "Sistema de monitoramento em câmaras frias",
        imagem: "./img/dht22.jpg",
        fabricantes: "AOSONG, Adafruit, SparkFun",
        codigo: `#include <DHT.h>\n#define DHTPIN 2\n#define DHTTYPE DHT22\nDHT dht(DHTPIN, DHTTYPE);\n\nvoid setup() {\n  Serial.begin(9600);\n  dht.begin();\n}\n\nvoid loop() {\n  float h = dht.readHumidity();\n  float t = dht.readTemperature();\n  Serial.print("Umidade: ");\n  Serial.print(h);\n  Serial.print(" %\\t");\n  Serial.print("Temperatura: ");\n  Serial.print(t);\n  Serial.println(" °C");\n  delay(2000);\n}`
    },

    // --- Temperatura ---
    {
        id: 3,
        nome: "LM35",
        categoria: "Temperatura",
        conceito: "Sensor analógico de temperatura com saída linear (10mV/°C).",
        funcionamento: "A tensão de saída é diretamente proporcional à temperatura em Celsius.",
        especificacoes: "Tensão: 4-20V | Faixa: -55-150°C | Precisão: ±0.5°C | Saída: 10mV/°C",
        tipoSinal: "Analógico",
        aplicacoes: "Controle industrial, sistemas de aquecimento, monitoramento de motores",
        exemploProjeto: "Controle de temperatura em fornos industriais",
        imagem: "./img/lm35.jpg",
        fabricantes: "Texas Instruments, National Semiconductor",
        codigo: `void setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int valor = analogRead(A0);\n  float temp = (valor * 5.0 / 1023.0) * 100;\n  Serial.print("Temperatura: ");\n  Serial.print(temp);\n  Serial.println(" °C");\n  delay(1000);\n}`
    },
    {
        id: 4,
        nome: "DS18B20",
        categoria: "Temperatura",
        conceito: "Sensor digital com comunicação One-Wire, permite múltiplos sensores no mesmo barramento.",
        funcionamento: "Termômetro digital de 12 bits com comunicação serial.",
        especificacoes: "Tensão: 3-5V | Faixa: -55-125°C | Precisão: ±0.5°C | Resolução: 9-12 bits",
        tipoSinal: "Digital (One-Wire)",
        aplicacoes: "Monitoramento de líquidos, ambientes, sistemas de refrigeração",
        exemploProjeto: "Monitoramento multiponto em reservatórios",
        imagem: "./img/ds18b20.jpg",
        fabricantes: "Maxim Integrated, Adafruit",
        codigo: `#include <OneWire.h>\n#include <DallasTemperature.h>\n#define PINO 2\nOneWire oneWire(PINO);\nDallasTemperature sensors(&oneWire);\n\nvoid setup() {\n  Serial.begin(9600);\n  sensors.begin();\n}\n\nvoid loop() {\n  sensors.requestTemperatures();\n  float temp = sensors.getTempCByIndex(0);\n  Serial.print("Temp: ");\n  Serial.print(temp);\n  Serial.println(" °C");\n  delay(1000);\n}`
    },

    // --- Luminosidade ---
    {
        id: 5,
        nome: "LDR",
        categoria: "Luminosidade",
        conceito: "Resistor dependente de luz (fotoresistor) para medição de intensidade luminosa.",
        funcionamento: "A resistência varia inversamente com a intensidade da luz.",
        especificacoes: "Tensão: 3.3-5V | Resistência: 10Ω (claro) a 1MΩ (escuro) | Tempo resposta: 20ms",
        tipoSinal: "Analógico",
        aplicacoes: "Controle automático de iluminação, sistemas de segurança",
        exemploProjeto: "Acionamento automático de iluminação pública",
        imagem: "./img/ldr.jpg",
        fabricantes: "Componente genérico",
        codigo: `void setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int valor = analogRead(A0);\n  int lumin = map(valor, 0, 1023, 100, 0);\n  Serial.print("Luminosidade: ");\n  Serial.print(lumin);\n  Serial.println("%");\n  delay(500);\n}`
    },
    {
        id: 6,
        nome: "BH1750",
        categoria: "Luminosidade",
        conceito: "Sensor digital de luminosidade com comunicação I2C, medição em lux.",
        funcionamento: "Converte luz em dados digitais com alta precisão.",
        especificacoes: "Tensão: 2.4-3.6V | Faixa: 1-65535 lux | Precisão: ±20% | I2C",
        tipoSinal: "I2C",
        aplicacoes: "Iluminação inteligente, agricultura de precisão, museus",
        exemploProjeto: "Controle de luminosidade em estufas",
        imagem: "./img/bh1750.jpg",
        fabricantes: "ROHM Semiconductor",
        codigo: `#include <Wire.h>\n#include <BH1750.h>\nBH1750 lightMeter;\n\nvoid setup() {\n  Serial.begin(9600);\n  Wire.begin();\n  lightMeter.begin();\n}\n\nvoid loop() {\n  float lux = lightMeter.readLightLevel();\n  Serial.print("Lux: ");\n  Serial.println(lux);\n  delay(1000);\n}`
    },

    // --- Distância ---
    {
        id: 7,
        nome: "HC-SR04",
        categoria: "Distância",
        conceito: "Sensor ultrassônico para medição de distância sem contato.",
        funcionamento: "Emite ondas ultrassônicas e mede o tempo de retorno do eco.",
        especificacoes: "Tensão: 5V | Faixa: 2-400cm | Precisão: ±3mm | Ângulo: 15°",
        tipoSinal: "Digital (PWM)",
        aplicacoes: "Detecção de obstáculos, robótica, estacionamento, drones",
        exemploProjeto: "Robô seguidor de parede",
        imagem: "./img/hc-sr04.jpg",
        fabricantes: "Componente genérico",
        codigo: `#define TRIG 9\n#define ECHO 10\n\nvoid setup() {\n  Serial.begin(9600);\n  pinMode(TRIG, OUTPUT);\n  pinMode(ECHO, INPUT);\n}\n\nvoid loop() {\n  digitalWrite(TRIG, LOW);\n  delayMicroseconds(2);\n  digitalWrite(TRIG, HIGH);\n  delayMicroseconds(10);\n  digitalWrite(TRIG, LOW);\n  long dur = pulseIn(ECHO, HIGH);\n  float dist = dur * 0.034 / 2;\n  Serial.print("Distância: ");\n  Serial.print(dist);\n  Serial.println(" cm");\n  delay(500);\n}`
    },

    // --- Movimento ---
    {
        id: 8,
        nome: "PIR HC-SR501",
        categoria: "Movimento",
        conceito: "Sensor de movimento baseado em radiação infravermelha passiva.",
        funcionamento: "Detecta mudanças na radiação IR emitida por corpos quentes.",
        especificacoes: "Tensão: 5-20V | Ângulo: 120° | Distância: 7m | Tempo ajustável",
        tipoSinal: "Digital",
        aplicacoes: "Segurança, iluminação automática, automação residencial",
        exemploProjeto: "Iluminação automática em corredores",
        imagem: "./img/pir.jpg",
        fabricantes: "Componente genérico",
        codigo: `int pinoPIR = 8;\n\nvoid setup() {\n  Serial.begin(9600);\n  pinMode(pinoPIR, INPUT);\n}\n\nvoid loop() {\n  if (digitalRead(pinoPIR)) Serial.println("Movimento!");\n  else Serial.println("Parado");\n  delay(100);\n}`
    },

    // --- Proximidade ---
    {
        id: 9,
        nome: "Sensor Indutivo LJ12A3",
        categoria: "Proximidade",
        conceito: "Sensor indutivo para detecção de objetos metálicos.",
        funcionamento: "Gera campo eletromagnético que é alterado pela presença de metais.",
        especificacoes: "Tensão: 6-36V | Distância: 4mm | IP68 | Saída NPN/PNP",
        tipoSinal: "Digital",
        aplicacoes: "Detecção de peças metálicas, controle de posição, contagem",
        exemploProjeto: "Contagem de peças em esteira",
        imagem: "./img/lj12a3.jpg",
        fabricantes: "Componente genérico",
        codigo: `int pino = 7;\n\nvoid setup() {\n  Serial.begin(9600);\n  pinMode(pino, INPUT);\n}\n\nvoid loop() {\n  if (digitalRead(pino)) Serial.println("Metal detectado!");\n  else Serial.println("Sem metal");\n  delay(200);\n}`
    },

    // --- Gás ---
    {
        id: 10,
        nome: "MQ-2",
        categoria: "Gás",
        conceito: "Sensor para detecção de fumaça e gases combustíveis.",
        funcionamento: "Resistência varia na presença de gases combustíveis.",
        especificacoes: "Tensão: 5V | Detecta: LPG, Propano, Hidrogênio, Fumaça | Tempo resposta <10s",
        tipoSinal: "Analógico",
        aplicacoes: "Alarme de incêndio, qualidade do ar, segurança",
        exemploProjeto: "Sistema de alarme com notificação SMS",
        imagem: "./img/mq2.jpg",
        fabricantes: "Componente genérico",
        codigo: `int sensor = A0;\n\nvoid setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int val = analogRead(sensor);\n  Serial.print("Gás: ");\n  Serial.println(val);\n  if (val > 300) Serial.println("ALERTA!");\n  delay(500);\n}`
    },
    {
        id: 11,
        nome: "MQ-135",
        categoria: "Gás",
        conceito: "Sensor para monitoramento da qualidade do ar (NH3, NOx, CO2, fumaça).",
        funcionamento: "Detecta variações na resistência causadas por poluentes.",
        especificacoes: "Tensão: 5V | Gases: NH3, NOx, Benzeno, Fumaça, CO2 | Ajustável",
        tipoSinal: "Analógico",
        aplicacoes: "Qualidade do ar, ventilação, IoT",
        exemploProjeto: "Monitoramento de ar em ambientes fechados",
        imagem: "./img/mq135.jpg",
        fabricantes: "Componente genérico",
        codigo: `int sensor = A0;\n\nvoid setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int val = analogRead(sensor);\n  Serial.print("Ar: ");\n  Serial.println(val);\n  if (val > 400) Serial.println("Qualidade prejudicada!");\n  delay(1000);\n}`
    },

    // --- Chuva ---
    {
        id: 12,
        nome: "Sensor FC-37 (Chuva)",
        categoria: "Chuva",
        conceito: "Sensor para detecção de chuva e umidade.",
        funcionamento: "Trilho de cobre detecta gotas de água alterando a condutividade.",
        especificacoes: "Tensão: 3.3-5V | Sensibilidade ajustável | Saída analógica/digital",
        tipoSinal: "Analógico/Digital",
        aplicacoes: "Irrigação, estações meteorológicas, automação",
        exemploProjeto: "Fechamento automático de toldos",
        imagem: "./img/fc37.jpg",
        fabricantes: "Componente genérico",
        codigo: `int pinDig = 7;\nint pinAn = A0;\n\nvoid setup() {\n  Serial.begin(9600);\n  pinMode(pinDig, INPUT);\n}\n\nvoid loop() {\n  int an = analogRead(pinAn);\n  int dig = digitalRead(pinDig);\n  Serial.print(an); Serial.print(" | "); Serial.println(dig);\n  if (dig == LOW) Serial.println("Chuva!");\n  delay(500);\n}`
    },

    // --- Fluxo ---
    {
        id: 13,
        nome: "YF-S201 (Fluxo)",
        categoria: "Fluxo",
        conceito: "Sensor de fluxo de água com saída de pulsos.",
        funcionamento: "Roda de pás gira com a água gerando pulsos proporcionais à vazão.",
        especificacoes: "Tensão: 5-18V | Faixa: 1-30L/min | Precisão: ±10% | Pulsos: 450/L",
        tipoSinal: "Digital (Pulsos)",
        aplicacoes: "Irrigação, medição de consumo, automação",
        exemploProjeto: "Monitoramento de consumo residencial",
        imagem: "./img/yfs201.jpg",
        fabricantes: "Sea YF-S201, DFRobot",
        codigo: `volatile int pulsos = 0;\nunsigned long ant = 0;\n\nvoid setup() {\n  Serial.begin(9600);\n  attachInterrupt(0, contar, RISING);\n}\n\nvoid loop() {\n  if (millis() - ant >= 1000) {\n    float vazao = pulsos / 450.0 * 60;\n    Serial.print("Vazão: "); Serial.print(vazao); Serial.println(" L/min");\n    pulsos = 0; ant = millis();\n  }\n}\n\nvoid contar() { pulsos++; }`
    },

    // --- Corrente ---
    {
        id: 14,
        nome: "ACS712",
        categoria: "Corrente",
        conceito: "Sensor de corrente baseado no efeito Hall (isolado).",
        funcionamento: "Gera tensão proporcional à corrente que passa pelo condutor.",
        especificacoes: "Tensão: 5V | Corrente: ±20A | Sensibilidade: 100mV/A | Precisão: ±1.5%",
        tipoSinal: "Analógico",
        aplicacoes: "Monitoramento de consumo, proteção de circuitos, IoT",
        exemploProjeto: "Monitoramento energético de máquina",
        imagem: "./img/acs712.jpg",
        fabricantes: "Allegro MicroSystems",
        codigo: `void setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int val = analogRead(A0);\n  float I = (val - 512) * 5.0 / 1023.0 / 0.100;\n  Serial.print("Corrente: "); Serial.print(I); Serial.println(" A");\n  delay(500);\n}`
    },

    // --- Tensão ---
    {
        id: 15,
        nome: "ZMPT101B",
        categoria: "Tensão",
        conceito: "Sensor de tensão AC com isolamento.",
        funcionamento: "Transformador que reduz e isola a tensão para medição segura.",
        especificacoes: "Tensão: 220V AC | Saída: 0-5V | Frequência: 50-60Hz | Precisão: ±0.5%",
        tipoSinal: "Analógico",
        aplicacoes: "Monitoramento de tensão, qualidade de energia",
        exemploProjeto: "Sistema de monitoramento de qualidade de energia",
        imagem: "./img/zmpt101b.jpg",
        fabricantes: "ZMPT101B",
        codigo: `void setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int val = analogRead(A0);\n  float V = (val / 1023.0) * 220;\n  Serial.print("Tensão: "); Serial.print(V); Serial.println(" V");\n  delay(500);\n}`
    },

    // --- Vibração ---
    {
        id: 16,
        nome: "SW-420 (Vibração)",
        categoria: "Vibração",
        conceito: "Sensor de vibração para detecção de impactos e trepidações.",
        funcionamento: "Interruptor de mercúrio ou mola que fecha contato com vibração.",
        especificacoes: "Tensão: 3.3-5V | Sensibilidade ajustável | Saída digital",
        tipoSinal: "Digital",
        aplicacoes: "Monitoramento de máquinas, anti-furto, análise de vibração",
        exemploProjeto: "Monitoramento de vibração em motores",
        imagem: "./img/sw420.jpg",
        fabricantes: "Componente genérico",
        codigo: `int pino = 7;\n\nvoid setup() {\n  Serial.begin(9600);\n  pinMode(pino, INPUT);\n}\n\nvoid loop() {\n  if (digitalRead(pino)) Serial.println("Vibração!");\n  else Serial.println("Parado");\n  delay(100);\n}`
    },

    // --- Rotação ---
    {
        id: 17,
        nome: "Sensor Hall A3144",
        categoria: "Rotação",
        conceito: "Sensor Hall para medição de rotação e campo magnético.",
        funcionamento: "Detecta campo magnético e gera pulso digital.",
        especificacoes: "Tensão: 4.5-28V | Saída digital | Sensibilidade: 5mT",
        tipoSinal: "Digital",
        aplicacoes: "Medição de RPM, sistemas de posicionamento, tacômetros",
        exemploProjeto: "Medidor de RPM de motor",
        imagem: "./img/hall.jpg",
        fabricantes: "Allegro MicroSystems",
        codigo: `volatile int pulsos = 0;\nunsigned long ant = 0;\n\nvoid setup() {\n  Serial.begin(9600);\n  attachInterrupt(0, contar, FALLING);\n}\n\nvoid loop() {\n  if (millis() - ant >= 1000) {\n    float rpm = pulsos * 60.0 / 2.0;\n    Serial.print("RPM: "); Serial.println(rpm);\n    pulsos = 0; ant = millis();\n  }\n}\n\nvoid contar() { pulsos++; }`
    },

    // --- RFID ---
    {
        id: 18,
        nome: "MFRC522 (RFID)",
        categoria: "RFID",
        conceito: "Módulo RFID para leitura/escrita de tags e cartões (13.56MHz).",
        funcionamento: "Comunicação por radiofrequência para ler dados de tags.",
        especificacoes: "Tensão: 3.3V | Frequência: 13.56MHz | Interface SPI | Distância: 0-10cm",
        tipoSinal: "SPI",
        aplicacoes: "Controle de acesso, pagamento, identificação, rastreamento",
        exemploProjeto: "Sistema de controle de acesso com cartão RFID",
        imagem: "./img/mfrc522.jpg",
        fabricantes: "NXP Semiconductors",
        codigo: `#include <SPI.h>\n#include <MFRC522.h>\n#define SS 10\n#define RST 9\nMFRC522 mfrc522(SS, RST);\n\nvoid setup() {\n  Serial.begin(9600);\n  SPI.begin();\n  mfrc522.PCD_Init();\n}\n\nvoid loop() {\n  if (!mfrc522.PICC_IsNewCardPresent()) return;\n  if (!mfrc522.PICC_ReadCardSerial()) return;\n  Serial.print("UID: ");\n  for (byte i = 0; i < mfrc522.uid.size; i++) {\n    Serial.print(mfrc522.uid.uidByte[i], HEX);\n  }\n  Serial.println();\n  delay(1000);\n}`
    },

    // --- Peso ---
    {
        id: 19,
        nome: "Célula de Carga + HX711",
        categoria: "Peso",
        conceito: "Sensor para medição de peso usando célula de carga e amplificador HX711.",
        funcionamento: "Variação de resistência da célula amplificada e convertida pelo HX711.",
        especificacoes: "Tensão: 5V | Faixa: 5-50kg | Resolução: 24 bits | Interface serial",
        tipoSinal: "Digital (Serial)",
        aplicacoes: "Balanças industriais, controle de estoque, agricultura",
        exemploProjeto: "Balança industrial para controle de produção",
        imagem: "./img/hx711.jpg",
        fabricantes: "Componente genérico",
        codigo: `#include "HX711.h"\nHX711 balanca;\n\nvoid setup() {\n  Serial.begin(9600);\n  balanca.begin(2, 3);\n  balanca.set_scale();\n  balanca.tare();\n}\n\nvoid loop() {\n  float peso = balanca.get_units(3);\n  Serial.print("Peso: "); Serial.print(peso); Serial.println(" kg");\n  delay(500);\n}`
    },

    // --- Som ---
    {
        id: 20,
        nome: "KY-037 (Som)",
        categoria: "Som",
        conceito: "Sensor para detecção de ruído e nível de som.",
        funcionamento: "Microfone capacitor converte som em sinal elétrico.",
        especificacoes: "Tensão: 3.3-5V | Sensibilidade ajustável | Saída analógica/digital",
        tipoSinal: "Analógico/Digital",
        aplicacoes: "Monitoramento de ruído, alarmes, automação",
        exemploProjeto: "Monitoramento de ruído industrial",
        imagem: "./img/ky037.jpg",
        fabricantes: "Componente genérico",
        codigo: `void setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int val = analogRead(A0);\n  Serial.print("Som: "); Serial.println(val);\n  if (val > 400) Serial.println("Ruído alto!");\n  delay(100);\n}`
    },

    // --- Chama ---
    {
        id: 21,
        nome: "Sensor de Chama IR",
        categoria: "Chama",
        conceito: "Sensor para detecção de chamas através de radiação infravermelha.",
        funcionamento: "Detecta radiação IR emitida por chamas.",
        especificacoes: "Tensão: 3.3-5V | Distância: 100cm | Ângulo: 60° | Resposta: 0.5s",
        tipoSinal: "Digital",
        aplicacoes: "Detecção de incêndio, segurança industrial",
        exemploProjeto: "Alarme de incêndio com notificação remota",
        imagem: "./img/chama.jpg",
        fabricantes: "Componente genérico",
        codigo: `int pino = 7;\n\nvoid setup() {\n  Serial.begin(9600);\n  pinMode(pino, INPUT);\n}\n\nvoid loop() {\n  if (digitalRead(pino) == LOW) Serial.println("Chama detectada!");\n  else Serial.println("Sem chama");\n  delay(200);\n}`
    },

    // --- Umidade do Solo ---
    {
        id: 22,
        nome: "Sensor Capacitivo de Umidade do Solo",
        categoria: "Umidade",
        conceito: "Sensor capacitivo para medição de umidade do solo.",
        funcionamento: "Mede a variação da capacitância do solo com a umidade.",
        especificacoes: "Tensão: 3.3-5V | Faixa: 0-100% | Saída analógica | Resistente à corrosão",
        tipoSinal: "Analógico",
        aplicacoes: "Agricultura inteligente, irrigação, jardinagem",
        exemploProjeto: "Sistema de irrigação automática",
        imagem: "./img/umidade-solo.jpg",
        fabricantes: "Componente genérico",
        codigo: `void setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int val = analogRead(A0);\n  int umid = map(val, 0, 1023, 0, 100);\n  Serial.print("Umidade: "); Serial.print(umid); Serial.println("%");\n  delay(1000);\n}`
    },

    // --- Nível (Boia) ---
    {
        id: 23,
        nome: "Sensor de Nível (Boia)",
        categoria: "Nível",
        conceito: "Sensor de nível para controle de líquidos em reservatórios.",
        funcionamento: "Boia aciona interruptor quando atinge determinado nível.",
        especificacoes: "Tensão: 5-250V | Corrente: 0.5A | IP68 | Material: Plástico/Inox",
        tipoSinal: "Digital",
        aplicacoes: "Controle de bombas, reservatórios, sistemas de abastecimento",
        exemploProjeto: "Controle automático de bomba d'água",
        imagem: "./img/nivel-boia.jpg",
        fabricantes: "Componente genérico",
        codigo: `int pino = 7;\n\nvoid setup() {\n  Serial.begin(9600);\n  pinMode(pino, INPUT_PULLUP);\n}\n\nvoid loop() {\n  if (digitalRead(pino) == LOW) Serial.println("Nível baixo - Acionar bomba");\n  else Serial.println("Nível alto - Desligar bomba");\n  delay(1000);\n}`
    },

    // --- Encoder ---
    {
        id: 24,
        nome: "Encoder Incremental KY-040",
        categoria: "Rotação",
        conceito: "Encoder rotativo para controle de posição e velocidade.",
        funcionamento: "Gera pulsos com a rotação do eixo, determinando posição e direção.",
        especificacoes: "Tensão: 5V | Pulsos/rotação: 20 | Interface digital | Durabilidade: 30.000 ciclos",
        tipoSinal: "Digital",
        aplicacoes: "Controle de posição, painéis, robótica, sistemas de navegação",
        exemploProjeto: "Controle de posição de braço robótico",
        imagem: "./img/ky040.jpg",
        fabricantes: "Componente genérico",
        codigo: `int CLK = 2, DT = 3;\nint cont = 0, ultimoCLK;\n\nvoid setup() {\n  Serial.begin(9600);\n  pinMode(CLK, INPUT);\n  pinMode(DT, INPUT);\n  ultimoCLK = digitalRead(CLK);\n}\n\nvoid loop() {\n  int atual = digitalRead(CLK);\n  if (atual != ultimoCLK) {\n    if (digitalRead(DT) != atual) cont++;\n    else cont--;\n    Serial.print("Posição: "); Serial.println(cont);\n    ultimoCLK = atual;\n  }\n}`
    }
];

// ============================================================
// 2. FUNÇÕES PARA RENDERIZAR CARDS E MODAL
// ============================================================

// Função para renderizar os cards de sensores com filtro
function renderizarSensores(categoria = 'todos') {
    const grid = document.getElementById('sensorGrid');
    if (!grid) return;

    const filtrados = categoria === 'todos'
        ? sensores
        : sensores.filter(s => s.categoria === categoria);

    if (filtrados.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center text-gray-400 py-12">
                <p class="text-2xl">🔍 Nenhum sensor encontrado nesta categoria.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtrados.map(s => `
        <div class="sensor-card bg-slate-900/60 backdrop-blur-lg border border-blue-500/20 rounded-3xl overflow-hidden" data-id="${s.id}">
            <img src="${s.imagem}" alt="${s.nome}" class="w-full h-48 object-contain bg-slate-800" />
            <div class="p-6">
                <span class="text-xs text-blue-400 font-semibold">${s.categoria}</span>
                <h3 class="text-xl font-bold text-white mt-1">${s.nome}</h3>
                <p class="text-gray-400 text-sm mt-2 line-clamp-2">${s.conceito}</p>
                <div class="mt-4 flex justify-between items-center">
                    <span class="text-cyan-400 text-sm">${s.tipoSinal}</span>
                    <button class="ver-detalhes bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm transition" data-id="${s.id}">
                        Ver Detalhes
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Adicionar eventos aos botões "Ver Detalhes"
    document.querySelectorAll('.ver-detalhes').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = parseInt(this.dataset.id);
            const sensor = sensores.find(s => s.id === id);
            if (sensor) abrirModal(sensor);
        });
    });

    // Clicar no card também abre o modal
    document.querySelectorAll('.sensor-card').forEach(card => {
        card.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            const sensor = sensores.find(s => s.id === id);
            if (sensor) abrirModal(sensor);
        });
    });
}

// ============================================================
// 3. MODAL
// ============================================================

function abrirModal(sensor) {
    const modal = document.getElementById('modal');
    const body = document.getElementById('modalBody');
    if (!modal || !body) return;

    body.innerHTML = `
        <button class="modal-close" id="modalClose">&times;</button>
        <div class="flex items-center gap-4 mb-2">
            <img src="${sensor.imagem}" alt="${sensor.nome}" class="w-20 h-20 object-contain bg-slate-800 rounded-xl p-2" />
            <div>
                <h2>${sensor.nome}</h2>
                <span class="categoria-badge">${sensor.categoria}</span>
            </div>
        </div>
        <div class="info-grid">
            <div class="info-item">
                <strong>Conceito</strong>
                <p>${sensor.conceito}</p>
            </div>
            <div class="info-item">
                <strong>Princípio de Funcionamento</strong>
                <p>${sensor.funcionamento}</p>
            </div>
            <div class="info-item">
                <strong>Especificações Técnicas</strong>
                <p>${sensor.especificacoes}</p>
            </div>
            <div class="info-item">
                <strong>Tipo de Sinal</strong>
                <p>${sensor.tipoSinal}</p>
            </div>
            <div class="info-item">
                <strong>Aplicações Industriais / IoT</strong>
                <p>${sensor.aplicacoes}</p>
            </div>
            <div class="info-item">
                <strong>Exemplo de Projeto</strong>
                <p>${sensor.exemploProjeto}</p>
            </div>
            <div class="info-item">
                <strong>Fabricantes / Modelos</strong>
                <p>${sensor.fabricantes}</p>
            </div>
            <div class="info-item">
                <strong>Código de Exemplo (Arduino)</strong>
                <div class="code-block">${sensor.codigo}</div>
            </div>
        </div>
    `;

    modal.classList.add('active');

    // Fechar modal
    const closeBtn = document.getElementById('modalClose');
    if (closeBtn) {
        closeBtn.addEventListener('click', fecharModal);
    }
    modal.addEventListener('click', function(e) {
        if (e.target === this) fecharModal();
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') fecharModal();
    });
}

function fecharModal() {
    const modal = document.getElementById('modal');
    if (modal) modal.classList.remove('active');
}

// ============================================================
// 4. FILTROS
// ============================================================

function configurarFiltros() {
    const botoes = document.querySelectorAll('.filtro-btn');
    botoes.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active de todos
            botoes.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const categoria = this.dataset.categoria;
            renderizarSensores(categoria);
        });
    });
}

// ============================================================
// 5. MENU MOBILE
// ============================================================

function configurarMenuMobile() {
    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('mobileMenu');
    if (toggle && menu) {
        toggle.addEventListener('click', function() {
            menu.classList.toggle('open');
        });
        // Fechar menu ao clicar em um link
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('open');
            });
        });
    }
}

// ============================================================
// 6. INICIALIZAÇÃO
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    renderizarSensores('todos');
    configurarFiltros();
    configurarMenuMobile();

    // Se o modal estiver aberto e usuário clicar fora, fecha
    const modal = document.getElementById('modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) fecharModal();
        });
    }
});