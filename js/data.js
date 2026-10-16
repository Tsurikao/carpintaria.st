/*
 * Carpintaria Sousa Tavares — central content file.
 * Edit texts (both languages), contact details, image paths and crops here.
 * pos = CSS object-position (focal point of the crop).
 * formEndpoint: set to a form service URL (e.g. Formspree) to deliver form submissions; null = on-page confirmation only.
 */
window.ST = window.ST || {};
ST.data = {
  "contact": {
    "phone": "+351 256 065 387",
    "phoneHref": "+351256065387",
    "email": "carpintaria.st@gmail.com",
    "whatsapp": "https://wa.me/351918764391",
    "whatsappNum": "+351 918 764 391",
    "instagram": "https://www.instagram.com/carpintaria_st/",
    "instagramHandle": "@carpintaria_st",
    "facebook": "https://www.facebook.com/search/top?q=Carpintaria%20Sousa%20Tavares%2C%20Lda.",
    "map": "https://www.google.com/maps/search/?api=1&query=Carpintaria%20Sousa%20Tavares%20Farrapa%203730-282%20Portugal"
  },
  "images": {
    "walnutKitchen": {
      "src": "assets/images/hero/hero-walnut-kitchen.webp",
      "alt": "Walnut veneer kitchen with tall units, white island, pendant light and four wooden bar stools"
    },
    "blueIsland": {
      "src": "assets/images/panels/panel-kitchens.webp",
      "alt": "High-gloss blue kitchen with full-height units, island with timber breakfast bar and a stainless extractor"
    },
    "builtins": {
      "src": "assets/images/panels/panel-wardrobes.webp",
      "alt": "Double-height living room with exposed timber beams and white built-in shelving"
    },
    "cladding": {
      "src": "assets/images/panels/panel-wall-cladding.webp",
      "alt": "Oak wall cladding with a backlit oval mirror and floating timber shelf"
    },
    "oakDoors": {
      "src": "assets/images/panels/panel-doors-windows.webp",
      "alt": "Corridor lined with oak wall panels and a run of flush full-height oak doors"
    },
    "stairDark": {
      "src": "assets/images/panels/panel-staircases.webp",
      "alt": "Staircase against a deep blue wall with a black handrail and warm lit posts along the treads"
    },
    "slatCeiling": {
      "src": "assets/images/panels/panel-ceilings.webp",
      "alt": "Oak slat ceiling with recessed linear LED lights over a white stairwell"
    },
    "livingFloor": {
      "src": "assets/images/panels/panel-floors-terraces.webp",
      "alt": "Sunlit living room with timber plank floor, reclaimed wood coffee table and timber-framed windows"
    },
    "pergolaDay": {
      "src": "assets/images/panels/panel-roof-structures.webp",
      "alt": "Stained timber pergola with exposed rafters and horizontal slat screens around a wicker lounge"
    },
    "blueFront": {
      "src": "assets/images/work/work-blue-kitchen.webp",
      "alt": "Blue gloss kitchen seen across a dark granite island with induction hob and timber bar"
    },
    "whiteKitchen": {
      "src": "assets/images/work/work-white-kitchen.webp",
      "alt": "White handleless kitchen with dark stone worktop, lit island and a full-height oak door"
    },
    "yellowOak": {
      "src": "assets/images/work/work-yellow-kitchen.webp",
      "alt": "U-shaped kitchen with soft yellow matt fronts, solid oak block worktops and a peninsula"
    },
    "matteBlue": {
      "src": "assets/images/work/work-matte-blue-kitchen.webp",
      "alt": "Matte blue kitchen wall with tall larder columns, integrated oven and a walnut wall unit"
    },
    "pergolaNight": {
      "src": "assets/images/work/work-pergola-night.webp",
      "alt": "Timber pergola at dusk with slatted privacy screens, woven pendant lamps and a built-in bench"
    },
    "darkLounge": {
      "src": "assets/images/backgrounds/bg-quote-dark-lounge.webp",
      "alt": "Dark lounge with a vertical slatted timber wall, concrete column and a grey sofa with rust cushions in low sun"
    },
    "facade": {
      "src": "assets/images/backgrounds/eye-facade.webp",
      "alt": "Curving building facade with golden horizontal bands seen from below"
    },
    "stairSkylight": {
      "src": "assets/images/backgrounds/eye-staircase-skylight.webp",
      "alt": "Long straight staircase between stone-clad walls rising to a skylight, with steel handrails"
    },
    "terrace": {
      "src": "assets/images/backgrounds/eye-terrace.webp",
      "alt": "Stone roof terrace with wide steps and vertical fins against blue sky"
    }
  },
  "hero": {
    "img": "walnutKitchen",
    "pos": "50% 55%"
  },
  "nav": [
    "wood",
    "work",
    "process",
    "reviews",
    "updates",
    "quote"
  ],
  "panels": [
    {
      "img": "blueIsland",
      "pos": "45% 55%",
      "bg": "#6B7065",
      "fg": "#F7F5F1",
      "drift": true
    },
    {
      "img": "builtins",
      "pos": "84% 72%",
      "bg": "#E2C3AB",
      "fg": "#242424",
      "drift": false
    },
    {
      "img": "cladding",
      "pos": "88% 50%",
      "bg": "#5E5450",
      "fg": "#F7F5F1",
      "drift": false
    },
    {
      "img": "oakDoors",
      "pos": "30% 50%",
      "bg": "#D9CFC0",
      "fg": "#242424",
      "drift": false
    },
    {
      "img": "stairDark",
      "pos": "62% 70%",
      "bg": "#A0603A",
      "fg": "#F7F5F1",
      "drift": false
    },
    {
      "img": "slatCeiling",
      "pos": "50% 18%",
      "bg": "#6B7065",
      "fg": "#F7F5F1",
      "drift": false
    },
    {
      "img": "livingFloor",
      "pos": "30% 85%",
      "bg": "#E2C3AB",
      "fg": "#242424",
      "drift": false
    },
    {
      "img": "pergolaDay",
      "pos": "35% 12%",
      "bg": "#5E5450",
      "fg": "#F7F5F1",
      "drift": false
    }
  ],
  "work": [
    {
      "img": "blueFront",
      "pos": "50% 55%",
      "layout": {
        "w": "clamp(280px,30vw,500px)",
        "h": "clamp(230px,38vh,430px)",
        "lvl": "0vh",
        "speed": 1
      },
      "gallery": [
        {
          "img": "blueFront",
          "pos": "50% 55%",
          "zoom": 1
        },
        {
          "img": "blueIsland",
          "pos": "45% 55%",
          "zoom": 1
        },
        {
          "img": "blueIsland",
          "pos": "30% 30%",
          "zoom": 1.6
        }
      ]
    },
    {
      "img": "slatCeiling",
      "pos": "50% 45%",
      "layout": {
        "w": "clamp(230px,21vw,360px)",
        "h": "clamp(270px,44vh,500px)",
        "lvl": "7vh",
        "speed": -0.8
      },
      "gallery": [
        {
          "img": "slatCeiling",
          "pos": "50% 45%",
          "zoom": 1
        },
        {
          "img": "slatCeiling",
          "pos": "50% 15%",
          "zoom": 1.7
        },
        {
          "img": "slatCeiling",
          "pos": "50% 85%",
          "zoom": 1.6
        }
      ]
    },
    {
      "img": "whiteKitchen",
      "pos": "50% 50%",
      "layout": {
        "w": "clamp(280px,32vw,540px)",
        "h": "clamp(210px,33vh,390px)",
        "lvl": "2vh",
        "speed": 1.3
      },
      "gallery": [
        {
          "img": "whiteKitchen",
          "pos": "50% 50%",
          "zoom": 1
        },
        {
          "img": "whiteKitchen",
          "pos": "15% 50%",
          "zoom": 1.7
        },
        {
          "img": "whiteKitchen",
          "pos": "75% 70%",
          "zoom": 1.6
        }
      ]
    },
    {
      "img": "pergolaDay",
      "pos": "50% 70%",
      "layout": {
        "w": "clamp(230px,23vw,390px)",
        "h": "clamp(250px,40vh,470px)",
        "lvl": "10vh",
        "speed": -1.1
      },
      "gallery": [
        {
          "img": "pergolaDay",
          "pos": "50% 70%",
          "zoom": 1
        },
        {
          "img": "pergolaNight",
          "pos": "50% 60%",
          "zoom": 1
        },
        {
          "img": "pergolaNight",
          "pos": "30% 70%",
          "zoom": 1.6
        }
      ]
    },
    {
      "img": "yellowOak",
      "pos": "50% 50%",
      "layout": {
        "w": "clamp(280px,29vw,480px)",
        "h": "clamp(240px,41vh,460px)",
        "lvl": "0vh",
        "speed": 0.9
      },
      "gallery": [
        {
          "img": "yellowOak",
          "pos": "50% 50%",
          "zoom": 1
        },
        {
          "img": "yellowOak",
          "pos": "15% 85%",
          "zoom": 1.7
        },
        {
          "img": "yellowOak",
          "pos": "80% 55%",
          "zoom": 1.6
        }
      ]
    },
    {
      "img": "matteBlue",
      "pos": "50% 45%",
      "layout": {
        "w": "clamp(240px,25vw,420px)",
        "h": "clamp(230px,36vh,420px)",
        "lvl": "8vh",
        "speed": -1.2
      },
      "gallery": [
        {
          "img": "matteBlue",
          "pos": "50% 45%",
          "zoom": 1
        },
        {
          "img": "matteBlue",
          "pos": "40% 35%",
          "zoom": 1.7
        },
        {
          "img": "matteBlue",
          "pos": "85% 50%",
          "zoom": 1.5
        }
      ]
    }
  ],
  "processBg": {
    "img": "cladding",
    "pos": "96% 40%"
  },
  "eye": [
    {
      "img": "facade",
      "pos": "40% 50%",
      "left": "2%",
      "right": "auto",
      "top": "0%",
      "w": "22%",
      "ar": "3/4",
      "speed": 0.7,
      "z": 1
    },
    {
      "img": "blueIsland",
      "pos": "30% 35%",
      "left": "auto",
      "right": "3%",
      "top": "5%",
      "w": "28%",
      "ar": "4/3",
      "speed": -0.6,
      "z": 2
    },
    {
      "img": "stairSkylight",
      "pos": "50% 40%",
      "left": "38%",
      "right": "auto",
      "top": "72%",
      "w": "22%",
      "ar": "3/4",
      "speed": 1.2,
      "z": 3
    },
    {
      "img": "terrace",
      "pos": "35% 70%",
      "left": "7%",
      "right": "auto",
      "top": "48%",
      "w": "25%",
      "ar": "4/3",
      "speed": -0.9,
      "z": 2
    },
    {
      "img": "whiteKitchen",
      "pos": "20% 50%",
      "left": "auto",
      "right": "10%",
      "top": "50%",
      "w": "20%",
      "ar": "3/4",
      "speed": 1.5,
      "z": 4
    }
  ],
  "testimonials": [
    {
      "name": "Marta Ribeiro",
      "place": "Braga",
      "photo": "assets/images/testimonials/client-marta-ribeiro.webp",
      "tone": "#6B7065"
    },
    {
      "name": "João e Inês Carvalho",
      "place": "Viana do Castelo",
      "photo": "assets/images/testimonials/client-joao-carvalho.webp",
      "tone": "#A0603A"
    },
    {
      "name": "Ricardo Almeida",
      "place": "Porto",
      "photo": "assets/images/testimonials/client-ricardo-almeida.webp",
      "tone": "#5E5450"
    }
  ],
  "updates": [
    {
      "img": "pergolaNight",
      "pos": "30% 70%",
      "date": "09.24.26"
    },
    {
      "img": "yellowOak",
      "pos": "15% 85%",
      "date": "09.02.26"
    },
    {
      "img": "slatCeiling",
      "pos": "50% 85%",
      "date": "07.18.26"
    },
    {
      "img": "blueIsland",
      "pos": "30% 30%",
      "date": "06.30.26"
    }
  ],
  "quoteBg": {
    "img": "darkLounge",
    "pos": "60% 55%"
  },
  "formEndpoint": null,
  "i18n": {
    "pt": {
      "ui": {
        "menu": "Menu",
        "close": "Fechar ×",
        "lang": "Idioma",
        "h1a": "Carpintaria feita",
        "h1b": "à medida.",
        "heroSub": "Cozinhas, roupeiros, revestimentos, portas, escadas, tetos, pavimentos e estruturas de telhado. Desenhado consigo, feito na nossa oficina, montado pela nossa equipa.",
        "cta": "Pedir orçamento",
        "introH": "Medido no local. Feito na nossa oficina. Montado por quem o construiu.",
        "l1": "Ouvir. Medir.",
        "l2": "Fazer. Montar.",
        "introP": "A Carpintaria Sousa Tavares projeta, fabrica e instala carpintaria por medida para casas e empresas. Trabalhamos em carvalho, nogueira e pinho maciços, folheados de qualidade, painéis lacados e mate, e madeira tratada para estruturas exteriores.",
        "woodH": "Tudo em madeira",
        "woodSub": "Oito especialidades, uma oficina",
        "detailsBtn": "Materiais, prazos e o que está incluído",
        "detailsTag": "Detalhes",
        "mat": "Materiais e acabamentos",
        "time": "Prazo habitual",
        "incl": "Incluído",
        "workH": "Alguns dos nossos trabalhos",
        "workSub": "Projetos fabricados e instalados pela nossa equipa",
        "howH": "Como trabalhamos",
        "eyeH": "Uma oficina com olhar de construtor",
        "eyeP": "Lemos um espaço como um construtor: paredes que nunca estão bem em esquadria, pavimentos com pendente, instalações escondidas atrás do reboco. Cada peça é desenhada para o que realmente lá está.",
        "revH": "O que dizem os clientes",
        "revBadge": "Opiniões de exemplo",
        "updH": "Novidades",
        "updNote": "Publicações de exemplo — substituir por novidades reais.",
        "quoteH": "Vamos construir algo que dure",
        "quoteP": "Fale-nos do espaço, da peça e do prazo. Fotografias ou medidas aproximadas ajudam. Respondemos em dois dias úteis para marcar uma visita ao local.",
        "thanks": "Obrigado.",
        "thanksP": "O seu pedido foi recebido. Normalmente respondemos em dois dias úteis.",
        "another": "Enviar outro pedido",
        "name": "Nome",
        "phone": "Telefone",
        "email": "E-mail",
        "ptype": "Tipo de projeto",
        "msg": "Mensagem",
        "select": "Selecionar…",
        "other": "Outro",
        "msgPh": "Divisão, medidas aproximadas, materiais, prazo…",
        "send": "Enviar pedido",
        "rights": "Todos os direitos reservados.",
        "top": "Voltar ao topo ↑",
        "phName": "O seu nome",
        "crafted": "Conceito criado por",
        "prevImg": "Foto anterior",
        "nextImg": "Foto seguinte",
        "photo": "Foto",
        "workBig": "Feito à medida — em madeira",
        "phEmail": "nome@email.com",
        "view": "Ver",
        "dur": "Duração",
        "prev": "Projeto anterior",
        "next": "Projeto seguinte",
        "careers": "Carreiras",
        "jobsH": "Junte-se à nossa oficina",
        "jobsP": "Procuramos pessoas que gostem de trabalhar a madeira. Deixe os seus dados e entraremos em contacto.",
        "vacancy": "Vaga",
        "jobsMsgPh": "Experiência, disponibilidade, link para CV…",
        "jobsSend": "Enviar candidatura",
        "jobsThanksP": "Recebemos a sua candidatura e responderemos em breve.",
        "vacancies": [
          "Carpinteiro / marceneiro",
          "Montador de mobiliário",
          "Operador CNC",
          "Pintor / lacador",
          "Aprendiz de carpintaria",
          "Candidatura espontânea"
        ]
      },
      "nav": [
        "Tudo em madeira",
        "Trabalhos",
        "Como trabalhamos",
        "Opiniões",
        "Novidades",
        "Pedir orçamento"
      ],
      "address": "Farrapa, 3730-282, Portugal",
      "heroCaption": "Cozinha em nogueira com ilha",
      "panels": [
        {
          "title": "Cozinhas",
          "tag": "Feitas à medida, montadas numa só obra",
          "about": "Cada cozinha começa com um desenho medido do espaço. Construímos os módulos em aglomerado hidrófugo, escolhemos frentes lacadas, em laminado mate, folheado de carvalho ou nogueira, e montamos bancadas e eletrodomésticos numa só obra.",
          "long": "Planeamos em função da forma como cozinha e arruma: colunas de despensa, gavetões em vez de armários, nichos para pequenos eletrodomésticos e ilhas dimensionadas para o espaço. Os módulos são feitos na nossa oficina em aglomerado hidrófugo de 19 mm, com orla em todas as faces visíveis. As frentes são lacadas, laminadas ou folheadas, montadas com ferragens de fecho suave e afinadas no local até todas as juntas ficarem iguais.",
          "materials": [
            "Folheado de carvalho e nogueira",
            "Lacado brilho e mate",
            "Bancadas em carvalho maciço",
            "Bancadas em pedra e compacto",
            "Ferragens Blum ou Hettich de fecho suave"
          ],
          "timeline": "6–8 semanas desde a aprovação dos desenhos até à montagem",
          "included": [
            "Medição no local e desenhos",
            "Fabrico em oficina",
            "Montagem e instalação de eletrodomésticos",
            "Visita de afinação após 3 meses"
          ]
        },
        {
          "title": "Roupeiros",
          "tag": "Cada centímetro aproveitado",
          "about": "Roupeiros embutidos e closets desenhados para a parede exata, incluindo tetos inclinados e nichos. Os interiores são planeados prateleira a prateleira, com varões, gavetas e iluminação onde precisa.",
          "long": "Começamos por listar o que precisa de arrumar e planeamos alturas de cabide, espaçamento de prateleiras e profundidade de gavetas a partir daí. Os módulos são ajustados a paredes e tetos irregulares para que o móvel pareça parte da casa. As portas podem ser de batente, de correr ou de embutir, em folheado, lacado ou combinadas com prateleiras abertas.",
          "materials": [
            "Folheado de carvalho e freixo",
            "Interiores em aglomerado melamínico",
            "Portas lacadas ou folheadas",
            "Sistemas de portas de correr e de embutir",
            "Iluminação LED com sensor de movimento"
          ],
          "timeline": "4–6 semanas",
          "included": [
            "Plano de interiores",
            "Ajuste a paredes e teto",
            "Ferragens e iluminação",
            "Limpeza e entrega"
          ]
        },
        {
          "title": "Revestimentos de parede",
          "tag": "Calor em todas as superfícies",
          "about": "Paredes ripadas, painéis e portas ocultas em madeira maciça ou folheado, fixados sobre uma estrutura nivelada para que a superfície final fique plana e direita.",
          "long": "O revestimento é implantado a partir do centro da parede para que ripas e juntas terminem de forma igual nas duas extremidades. Primeiro fixamos uma estrutura de madeira nivelada, abrimos canais para cabos e iluminação e depois aplicamos os painéis com fixações ocultas. Portas ocultas podem atravessar o revestimento, fazendo desaparecer arrumação e instalações.",
          "materials": [
            "Ripas de carvalho e nogueira",
            "Ripas de pinho e freixo",
            "Feltro acústico",
            "Acabamento a óleo, verniz ou velatura",
            "Fixações ocultas por clip"
          ],
          "timeline": "2–4 semanas",
          "included": [
            "Desenho de implantação",
            "Estrutura e canais para cablagem",
            "Montagem e acabamento",
            "Rodapés e remates a condizer"
          ]
        },
        {
          "title": "Portas e janelas",
          "tag": "Altura total, lisas, maciças",
          "about": "Portas interiores e de entrada, de altura total e lisas, com aros e guarnições feitos para o vão. Os caixilhos de janela em madeira são fabricados, envidraçados e montados pela nossa equipa.",
          "long": "Cada porta é feita para o seu vão, por isso medidas altas ou fora do padrão não dão mais trabalho do que as normais. As portas interiores usam almas estáveis com faces em carvalho ou lacadas, dobradiças ocultas e fechaduras magnéticas. Os caixilhos são feitos em madeira maciça, envidraçados na oficina e vedados no local.",
          "materials": [
            "Carvalho e pinho maciços",
            "Folheado de carvalho sobre alma estável",
            "Dobradiças ocultas, fechaduras magnéticas",
            "Vidro duplo",
            "Óleos e tintas para exterior"
          ],
          "timeline": "4–6 semanas",
          "included": [
            "Medição de cada vão",
            "Aros, guarnições e ferragens",
            "Montagem e afinação",
            "Remoção das portas antigas"
          ]
        },
        {
          "title": "Escadas",
          "tag": "Degraus, corrimãos, estrutura",
          "about": "Escadas novas em madeira e revestimento de escadas de betão existentes: degraus, espelhos, pernas e corrimãos cortados para a altura e o cobertor medidos no seu espaço.",
          "long": "Medimos cada degrau, porque as escadas de betão raramente são regulares. Os degraus são cortados em carvalho ou freixo maciço, cada um moldado ao seu degrau, e depois colados e aparafusados para não rangerem. Nas escadas novas construímos a estrutura na oficina e montamo-la no local, com guardas em madeira ou aço e iluminação de degrau opcional.",
          "materials": [
            "Degraus em carvalho e freixo maciços",
            "Pernas em pinho lamelado",
            "Guardas em madeira ou aço",
            "Óleo-cera ou verniz",
            "Luzes de degrau embutidas"
          ],
          "timeline": "5–8 semanas",
          "included": [
            "Moldes degrau a degrau",
            "Fabrico em oficina",
            "Montagem e acabamento",
            "Corrimão e guarda"
          ]
        },
        {
          "title": "Tetos",
          "tag": "Ripados com luz integrada",
          "about": "Tetos ripados e suspensos em madeira, com iluminação, ventilação e alçapões de acesso planeados antes de colocar a primeira ripa.",
          "long": "Os tetos são desenhados com o eletricista para que luzes, sensores e grelhas fiquem entre as ripas. Construímos uma estrutura suspensa, aplicamos fundo escuro ou em feltro para profundidade e acústica e fixamos as ripas com espaçamento constante. Curvas e ondas são cortadas a partir de moldes para que todas as ripas sigam a mesma linha.",
          "materials": [
            "Ripas de carvalho e pinho",
            "Painéis acústicos folheados",
            "Fundo preto ou em feltro",
            "Perfis LED lineares",
            "Tratamento ignífugo"
          ],
          "timeline": "2–4 semanas",
          "included": [
            "Implantação de iluminação e instalações",
            "Estrutura suspensa",
            "Montagem e acabamento",
            "Painéis de acesso"
          ]
        },
        {
          "title": "Pavimentos e decks",
          "tag": "Da sala ao terraço",
          "about": "Soalhos em madeira maciça e multicamada no interior, deck tratado no exterior. Preparamos a base, assentamos, afagamos e damos acabamento para que o pavimento desgaste de forma uniforme.",
          "long": "No interior verificamos a humidade e o nivelamento antes de assentar, depois colamos ou flutuamos o soalho maciço ou multicamada, e afagamos e acabamos no local. No exterior construímos o deck sobre barrotes tratados, com juntas de drenagem e clips ocultos, para que as tábuas possam trabalhar com o tempo sem levantar.",
          "materials": [
            "Tábua de carvalho maciço",
            "Multicamada de carvalho e nogueira",
            "Deck em pinho tratado e termomadeira",
            "Óleo-cera e verniz",
            "Clips ocultos para deck"
          ],
          "timeline": "1–3 semanas",
          "included": [
            "Verificação de humidade e nível",
            "Preparação da base",
            "Assentamento, afagamento e acabamento",
            "Rodapés e soleiras"
          ]
        },
        {
          "title": "Estruturas de telhado",
          "tag": "Vigas, varas, pérgulas",
          "about": "Estruturas de telhado em madeira, vigas à vista e pérgulas independentes, dimensionadas para o vão e a carga e tratadas para o sol e a chuva.",
          "long": "Dimensionamos vigas e varas para o vão, o tipo de cobertura e a exposição ao vento, cortamos as ligações na oficina e montamos no local. As pérgulas podem incluir painéis ripados, bancos e iluminação. Toda a madeira exterior é tratada e acabada com velaturas ou óleos escolhidos para o sol e a chuva da região.",
          "materials": [
            "Vigas em pinho lamelado e maciço",
            "Varas em madeira tratada",
            "Ligadores em aço galvanizado",
            "Painéis ripados de privacidade",
            "Velaturas e óleos para exterior"
          ],
          "timeline": "3–6 semanas",
          "included": [
            "Dimensionamento estrutural",
            "Ligações feitas em oficina",
            "Montagem no local",
            "Tratamento e acabamento"
          ]
        }
      ],
      "work": [
        {
          "title": "Cozinha lacada azul com ilha",
          "meta": "Cozinhas · 2024",
          "desc": "Colunas de altura total em lacado azul brilho, ilha com bancada em granito e placa de indução, e balcão em madeira maciça. Estores escondem os pequenos eletrodomésticos.",
          "materials": [
            "Frentes lacadas azul brilho",
            "Bancada em granito escuro",
            "Balcão em carvalho maciço",
            "Corrediças de fecho suave"
          ],
          "time": "7 semanas",
          "scope": [
            "Medição e desenhos",
            "Fabrico em oficina",
            "Montagem e instalação de eletrodomésticos"
          ]
        },
        {
          "title": "Teto ripado em carvalho com iluminação linear",
          "meta": "Tetos · 2024",
          "desc": "Teto suspenso em ripas de carvalho que acompanha a linha da escada, com perfis LED lineares entre as ripas e fundo preto para dar profundidade.",
          "materials": [
            "Ripas de carvalho",
            "Fundo acústico preto",
            "Perfis LED lineares",
            "Estrutura suspensa em madeira"
          ],
          "time": "3 semanas",
          "scope": [
            "Implantação da iluminação com o eletricista",
            "Estrutura suspensa",
            "Montagem e acabamento"
          ]
        },
        {
          "title": "Cozinha branca sem puxadores e porta em carvalho",
          "meta": "Cozinhas · 2025",
          "desc": "Cozinha branca sem puxadores com bancada em pedra escura e ilha iluminada, combinada com uma porta lisa em carvalho de altura total feita para o mesmo espaço.",
          "materials": [
            "Frentes lacadas branco mate",
            "Bancada em pedra escura",
            "Porta folheada a carvalho de altura total",
            "Iluminação LED integrada"
          ],
          "time": "8 semanas",
          "scope": [
            "Desenhos da cozinha e da porta",
            "Fabrico em oficina",
            "Montagem"
          ]
        },
        {
          "title": "Pérgula em madeira e painel de lounge",
          "meta": "Estruturas de telhado · 2024",
          "desc": "Pérgula em pinho tratado com varas à vista e painéis ripados horizontais, construída em torno de uma zona de estar com candeeiros em verga.",
          "materials": [
            "Vigas em pinho lamelado",
            "Varas em madeira tratada",
            "Painéis ripados horizontais",
            "Velatura para exterior"
          ],
          "time": "4 semanas",
          "scope": [
            "Dimensionamento estrutural",
            "Ligações feitas em oficina",
            "Montagem e acabamento no local"
          ]
        },
        {
          "title": "Cozinha amarelo-areia, bancadas em carvalho maciço",
          "meta": "Cozinhas · 2024",
          "desc": "Cozinha em U com frentes amarelo-areia mate, bancadas em carvalho maciço com cantos em junta de dedos e uma península para refeições rápidas.",
          "materials": [
            "Frentes lacadas amarelo mate",
            "Bancadas em carvalho maciço",
            "Acabamento a óleo-cera",
            "Ferragens de fecho suave"
          ],
          "time": "6 semanas",
          "scope": [
            "Medição e desenhos",
            "Fabrico em oficina",
            "Montagem"
          ]
        },
        {
          "title": "Cozinha azul mate com prateleiras em nogueira",
          "meta": "Cozinhas · 2025",
          "desc": "Parede em azul mate com colunas de despensa, forno integrado e um módulo aberto em nogueira para expor objetos.",
          "materials": [
            "Lacado azul mate",
            "Prateleiras folheadas a nogueira",
            "Eletrodomésticos integrados",
            "Abertura por toque"
          ],
          "time": "6 semanas",
          "scope": [
            "Medição e desenhos",
            "Fabrico em oficina",
            "Montagem e instalação de eletrodomésticos"
          ]
        }
      ],
      "process": [
        {
          "title": "Consulta",
          "text": "Falamos sobre o que precisa, o orçamento e o prazo, e vemos referências em conjunto."
        },
        {
          "title": "Visita e medição",
          "text": "Medimos o espaço com precisão e verificamos paredes, pavimentos e instalações antes de desenhar."
        },
        {
          "title": "Projeto e orçamento",
          "text": "Recebe desenhos, amostras de materiais e um orçamento detalhado para rever e ajustar."
        },
        {
          "title": "Produção em oficina",
          "text": "Cada peça é cortada, montada e acabada na nossa oficina, e verificada antes de sair."
        },
        {
          "title": "Montagem",
          "text": "A nossa equipa instala tudo no local e vai limpando à medida que avança."
        },
        {
          "title": "Entrega e acompanhamento",
          "text": "Revemos consigo o trabalho concluído e voltamos para afinar o que for preciso."
        }
      ],
      "testimonials": [
        {
          "quote": "Mediram duas vezes, desenharam três versões e montaram a cozinha exatamente como planeado. Seis meses depois, todas as gavetas fecham na perfeição e a bancada de carvalho só ficou melhor com o óleo.",
          "project": "Cozinha"
        },
        {
          "quote": "Queríamos uma pérgula que aguentasse o sol do verão e a chuva do inverno. Ficou pronta em quatro semanas, as ligações estão limpas e não mexeu nada em dois invernos.",
          "project": "Pérgula e terraço"
        },
        {
          "quote": "Orçamento claro, sem surpresas, e a equipa deixava a casa limpa todos os dias. A nova escada em carvalho não range, e já os chamámos de volta para os roupeiros.",
          "project": "Escada e portas"
        }
      ],
      "updates": [
        {
          "title": "Instagram: 24 set 2026",
          "text": "Uma pérgula e painel de lounge acabados, fotografados na tarde da entrega."
        },
        {
          "title": "Instagram: 02 set 2026",
          "text": "Bancadas em carvalho maciço com cantos em junta de dedos numa cozinha amarelo-areia."
        },
        {
          "title": "Instagram: 18 jul 2026",
          "text": "Teto ripado em carvalho sobre uma caixa de escada, com LEDs lineares entre as ripas."
        },
        {
          "title": "Instagram: 30 jun 2026",
          "text": "Cozinha azul lacada brilho com estores para eletrodomésticos e balcão em madeira."
        }
      ]
    },
    "en": {
      "ui": {
        "menu": "Menu",
        "close": "Close ×",
        "lang": "Language",
        "h1a": "Carpentry made",
        "h1b": "to measure.",
        "heroSub": "Kitchens, wardrobes, cladding, doors, stairs, ceilings, floors and roof structures. Drawn with you, made in our workshop, fitted by our own team.",
        "cta": "Get a quote",
        "introH": "Measured on site. Made in our workshop. Fitted by the people who built it.",
        "l1": "Listen. Measure.",
        "l2": "Make. Fit.",
        "introP": "Carpintaria Sousa Tavares designs, manufactures and installs made-to-measure joinery for homes and businesses. We work in solid oak, walnut and pine, quality veneers, lacquered and matt boards, and treated timber for outdoor structures.",
        "woodH": "Everything in wood",
        "woodSub": "Eight disciplines, one workshop",
        "detailsBtn": "Materials, timing & what’s included",
        "detailsTag": "Details",
        "mat": "Materials & finishes",
        "time": "Typical timeline",
        "incl": "Included",
        "workH": "A selection of our work",
        "workSub": "Projects built and installed by our team",
        "howH": "How we work",
        "eyeH": "A workshop with a builder’s eye",
        "eyeP": "We read a room the way a builder does: walls that are never quite square, floors that fall, services hidden behind plaster. Every piece is drawn to fit what is really there.",
        "revH": "What clients say",
        "revBadge": "Sample reviews",
        "updH": "Latest updates",
        "updNote": "Sample posts — replace with real updates.",
        "quoteH": "Let’s build something that lasts",
        "quoteP": "Tell us about the room, the piece and your timing. Photos or rough measurements help. We reply within two working days to arrange a site visit.",
        "thanks": "Thank you.",
        "thanksP": "Your request has been received. We usually reply within two working days.",
        "another": "Send another request",
        "name": "Name",
        "phone": "Phone",
        "email": "Email",
        "ptype": "Project type",
        "msg": "Message",
        "select": "Select…",
        "other": "Other",
        "msgPh": "Room, approximate size, materials, timing…",
        "send": "Send request",
        "rights": "All rights reserved.",
        "top": "Back to top ↑",
        "phName": "Your name",
        "crafted": "Concept crafted by",
        "prevImg": "Previous photo",
        "nextImg": "Next photo",
        "photo": "Photo",
        "workBig": "Made to measure — in wood",
        "phEmail": "name@email.com",
        "view": "View",
        "dur": "Duration",
        "prev": "Previous project",
        "next": "Next project",
        "careers": "Careers",
        "jobsH": "Join our workshop",
        "jobsP": "We are looking for people who like working with wood. Leave your details and we will get in touch.",
        "vacancy": "Vacancy",
        "jobsMsgPh": "Experience, availability, link to CV…",
        "jobsSend": "Send application",
        "jobsThanksP": "We received your application and will reply shortly.",
        "vacancies": [
          "Carpenter / cabinet maker",
          "Furniture installer",
          "CNC operator",
          "Spray finisher",
          "Apprentice carpenter",
          "Open application"
        ]
      },
      "nav": [
        "Everything in Wood",
        "Our work",
        "How we work",
        "Reviews",
        "Updates",
        "Get a quote"
      ],
      "address": "Farrapa, 3730-282, Portugal",
      "heroCaption": "Walnut kitchen with island",
      "panels": [
        {
          "title": "Kitchens",
          "tag": "Made to measure, fitted as one job",
          "about": "Every kitchen starts with a measured drawing of the room. We build carcasses in moisture-resistant board, choose fronts in lacquer, matt laminate, oak or walnut veneer, and fit worktops and appliances as one job.",
          "long": "We plan around how you cook and store: tall larder units, deep drawer packs instead of cupboards, appliance garages and islands sized to the room. Carcasses are made in our workshop in 19 mm moisture-resistant board with edge banding on every visible face. Fronts are sprayed, laminated or veneered, hung on soft-close hardware and adjusted on site until every gap is even.",
          "materials": [
            "Oak and walnut veneer",
            "High-gloss and matt lacquer",
            "Solid oak block worktops",
            "Stone and compact worktops",
            "Blum or Hettich soft-close hardware"
          ],
          "timeline": "6–8 weeks from approved drawings to installation",
          "included": [
            "Site measurement and drawings",
            "Workshop manufacture",
            "Installation and appliance fitting",
            "Adjustment visit after 3 months"
          ]
        },
        {
          "title": "Wardrobes",
          "tag": "Every centimetre used",
          "about": "Built-in wardrobes and dressing rooms drawn to the exact wall, including sloping ceilings and alcoves. Interiors are planned shelf by shelf, with rails, drawers and lighting where you need them.",
          "long": "We start by listing what needs to be stored, then plan hanging heights, shelf spacing and drawer depths around it. Carcasses are scribed to uneven walls and ceilings so the finished unit looks built into the room. Doors can be hinged, sliding or pocket, in veneer, lacquer or a mix with open shelving.",
          "materials": [
            "Oak and ash veneer",
            "Melamine-faced board interiors",
            "Lacquered or veneered doors",
            "Sliding and pocket door systems",
            "Motion-sensor LED lighting"
          ],
          "timeline": "4–6 weeks",
          "included": [
            "Interior layout plan",
            "Scribed fitting to walls and ceiling",
            "Hardware and lighting",
            "Clean-up and handover"
          ]
        },
        {
          "title": "Wall cladding",
          "tag": "Warmth on every surface",
          "about": "Slatted walls, panelling and hidden doors in solid timber or veneer, fixed to a levelled sub-frame so the finished surface is flat and true.",
          "long": "Cladding is set out from the centre of the wall so slats and joints land evenly at both ends. We fix a levelled timber sub-frame first, route channels for cables and lighting, then fit panels with concealed fixings. Flush hidden doors can run through the cladding so storage and services disappear.",
          "materials": [
            "Oak and walnut slats",
            "Pine and ash battens",
            "Acoustic felt backing",
            "Oil, varnish or stain finishes",
            "Concealed clip fixings"
          ],
          "timeline": "2–4 weeks",
          "included": [
            "Setting-out drawing",
            "Sub-frame and wiring channels",
            "Installation and finishing",
            "Matching skirting and trims"
          ]
        },
        {
          "title": "Doors & windows",
          "tag": "Full-height, flush, solid",
          "about": "Interior and entrance doors, full-height and flush, with frames and architraves made for the opening. Timber window frames are made, glazed and fitted by our own team.",
          "long": "Each door is built for its opening, so tall and non-standard sizes cost no more effort than standard ones. Interior doors use engineered cores for stability with oak or lacquered faces, concealed hinges and magnetic locks. Window frames are made in solid timber, glazed in the workshop and sealed on site.",
          "materials": [
            "Solid oak and pine",
            "Oak veneer on engineered cores",
            "Concealed hinges, magnetic locks",
            "Double-glazed units",
            "Exterior-grade oils and paints"
          ],
          "timeline": "4–6 weeks",
          "included": [
            "Measurement of each opening",
            "Frames, architraves and hardware",
            "Fitting and adjustment",
            "Removal of old doors"
          ]
        },
        {
          "title": "Staircases",
          "tag": "Treads, rails, structure",
          "about": "New timber stairs and cladding for existing concrete stairs: treads, risers, stringers and handrails cut to the measured rise and going of your space.",
          "long": "We measure every step, because concrete stairs are rarely even. Treads are cut from solid oak or ash, each one templated to its step, then bonded and screwed so they stay silent. For new stairs we build the structure in the workshop and assemble it on site, with timber or steel balustrades and optional step lighting.",
          "materials": [
            "Solid oak and ash treads",
            "Laminated pine stringers",
            "Timber or steel balustrades",
            "Hardwax oil or lacquer",
            "Recessed step lights"
          ],
          "timeline": "5–8 weeks",
          "included": [
            "Step-by-step templating",
            "Workshop manufacture",
            "Installation and finishing",
            "Handrail and balustrade"
          ]
        },
        {
          "title": "Ceilings",
          "tag": "Slats with light built in",
          "about": "Slatted and suspended timber ceilings with lighting, ventilation and access hatches planned before the first batten goes up.",
          "long": "Ceilings are drawn with the electrician so lights, sensors and vents fall between slats. We build a suspended frame, fit dark or felt backing for depth and acoustics, then fix slats on a constant spacing. Curves and waves are cut from templates so every batten follows the same line.",
          "materials": [
            "Oak and pine slats",
            "Veneered acoustic panels",
            "Black or felt backing",
            "Linear LED profiles",
            "Fire-retardant treatment"
          ],
          "timeline": "2–4 weeks",
          "included": [
            "Lighting and services layout",
            "Suspended frame",
            "Installation and finishing",
            "Access panels"
          ]
        },
        {
          "title": "Floors & terraces",
          "tag": "From living room to deck",
          "about": "Solid and engineered timber floors indoors, treated decking outdoors. We prepare the base, lay, sand and finish so the floor wears evenly.",
          "long": "Indoors we check moisture and level before laying, then glue or float solid and engineered boards, sand and finish in place. Outdoors we build decking on treated joists with drainage gaps and hidden clips, so boards can move with the weather without lifting.",
          "materials": [
            "Solid oak planks",
            "Engineered oak and walnut",
            "Treated pine and thermowood decking",
            "Hardwax oil and lacquer",
            "Hidden deck clips"
          ],
          "timeline": "1–3 weeks",
          "included": [
            "Moisture and level check",
            "Base preparation",
            "Laying, sanding and finishing",
            "Skirting and thresholds"
          ]
        },
        {
          "title": "Roof structures",
          "tag": "Beams, rafters, pergolas",
          "about": "Timber roof structures, exposed beams and freestanding pergolas, sized for span and load and treated for sun and rain.",
          "long": "We size beams and rafters for the span, roof covering and wind exposure, cut joints in the workshop and assemble on site. Pergolas can include slatted screens, benches and lighting. All exterior timber is treated and finished with stains or oils chosen for local sun and rain.",
          "materials": [
            "Laminated and solid pine beams",
            "Treated softwood rafters",
            "Galvanised steel connectors",
            "Slatted privacy screens",
            "Exterior stains and oils"
          ],
          "timeline": "3–6 weeks",
          "included": [
            "Structural sizing",
            "Workshop jointing",
            "Assembly on site",
            "Treatment and finish"
          ]
        }
      ],
      "work": [
        {
          "title": "Blue lacquered kitchen with island",
          "meta": "Kitchens · 2024",
          "desc": "Full-height units in high-gloss blue lacquer, an island with a granite top and induction hob, and a solid timber breakfast bar. Tambour doors hide the small appliances.",
          "materials": [
            "High-gloss blue lacquer fronts",
            "Dark granite worktop",
            "Solid oak breakfast bar",
            "Soft-close drawer runners"
          ],
          "time": "7 weeks",
          "scope": [
            "Measurement and drawings",
            "Workshop manufacture",
            "Installation and appliance fitting"
          ]
        },
        {
          "title": "Slatted oak ceiling with linear lighting",
          "meta": "Ceilings · 2024",
          "desc": "A suspended oak slat ceiling that follows the line of the stairwell, with linear LED profiles set between the battens and a black backing for depth.",
          "materials": [
            "Oak slats",
            "Black acoustic backing",
            "Linear LED profiles",
            "Suspended timber frame"
          ],
          "time": "3 weeks",
          "scope": [
            "Lighting layout with the electrician",
            "Suspended frame",
            "Installation and finishing"
          ]
        },
        {
          "title": "White handleless kitchen & oak door",
          "meta": "Kitchens · 2025",
          "desc": "Handleless white kitchen with a dark stone worktop and lit island, paired with a full-height flush oak door made for the same room.",
          "materials": [
            "White matt lacquer fronts",
            "Dark stone worktop",
            "Full-height oak veneer door",
            "Integrated LED lighting"
          ],
          "time": "8 weeks",
          "scope": [
            "Kitchen and door drawings",
            "Workshop manufacture",
            "Installation"
          ]
        },
        {
          "title": "Timber pergola & lounge screen",
          "meta": "Roof structures · 2024",
          "desc": "Treated pine pergola with exposed rafters and horizontal slat screens, built around a lounge area with woven pendant lamps.",
          "materials": [
            "Laminated pine beams",
            "Treated softwood rafters",
            "Horizontal slat screens",
            "Exterior stain"
          ],
          "time": "4 weeks",
          "scope": [
            "Structural sizing",
            "Workshop jointing",
            "Assembly and finishing on site"
          ]
        },
        {
          "title": "Sand yellow kitchen, solid oak worktops",
          "meta": "Kitchens · 2024",
          "desc": "U-shaped kitchen with sand yellow matt fronts, solid oak block worktops with finger-jointed corners and a peninsula for breakfast.",
          "materials": [
            "Matt yellow lacquer fronts",
            "Solid oak block worktops",
            "Hardwax oil finish",
            "Soft-close hardware"
          ],
          "time": "6 weeks",
          "scope": [
            "Measurement and drawings",
            "Workshop manufacture",
            "Installation"
          ]
        },
        {
          "title": "Matte blue kitchen with walnut shelving",
          "meta": "Kitchens · 2025",
          "desc": "A matte blue wall of tall larder columns with an integrated oven and an open walnut wall unit for display.",
          "materials": [
            "Matt blue lacquer",
            "Walnut veneer shelving",
            "Integrated appliances",
            "Push-to-open hardware"
          ],
          "time": "6 weeks",
          "scope": [
            "Measurement and drawings",
            "Workshop manufacture",
            "Installation and appliance fitting"
          ]
        }
      ],
      "process": [
        {
          "title": "Consultation",
          "text": "We talk through what you need, your budget and timing, and look at references together."
        },
        {
          "title": "Site visit & measurement",
          "text": "We measure the space precisely and check walls, floors and services before anything is drawn."
        },
        {
          "title": "Design & quote",
          "text": "You receive drawings, material samples and a detailed quote to review and adjust."
        },
        {
          "title": "Workshop production",
          "text": "Each piece is cut, assembled and finished in our workshop, then checked before it leaves."
        },
        {
          "title": "Installation",
          "text": "Our own team fits everything on site and cleans up as it goes."
        },
        {
          "title": "Handover & aftercare",
          "text": "We walk through the finished work with you and come back to adjust anything that needs it."
        }
      ],
      "testimonials": [
        {
          "quote": "They measured twice, drew three versions and fitted the kitchen exactly as planned. Six months on, every drawer still closes perfectly and the oak worktop has only got better with oil.",
          "project": "Kitchen"
        },
        {
          "quote": "We wanted a pergola that would survive the summer sun and winter rain. It was ready in four weeks, the joints are clean and it has not moved at all through two winters.",
          "project": "Pergola & terrace"
        },
        {
          "quote": "Clear quote, no surprises, and the team left the house clean every evening. The new oak stairs are quiet, and we have already asked them back for the wardrobes.",
          "project": "Staircase & doors"
        }
      ],
      "updates": [
        {
          "title": "Instagram: 24 Sep 2026",
          "text": "A finished pergola and lounge screen, photographed the evening we handed it over."
        },
        {
          "title": "Instagram: 02 Sep 2026",
          "text": "Solid oak worktops with finger-jointed corners on a sand yellow kitchen."
        },
        {
          "title": "Instagram: 18 Jul 2026",
          "text": "Oak slat ceiling over a stairwell, with linear LEDs set between the battens."
        },
        {
          "title": "Instagram: 30 Jun 2026",
          "text": "High-gloss blue kitchen with tambour appliance garages and a timber breakfast bar."
        }
      ]
    }
  }
};
