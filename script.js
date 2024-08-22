const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você recebe um convite para participar de um projeto comunitário que visa revitalizar um espaço público em sua cidade. Como você responde ao convite?",
        alternativas: [
            {
                texto: "Fico animado com a ideia e me ofereço para ajudar na coordenação do projeto.",
                afirmacao: "Ficou entusiasmado com a oportunidade de contribuir ativamente para a melhoria da comunidade."
            },
            {
                texto: "Acho interessante, mas prefiro contribuir de forma financeira ou com doações, pois não tenho muito tempo disponível.",
                afirmacao: "Optou por apoiar o projeto de forma indireta devido a limitações de tempo, mas ainda desejou contribuir."
            }
        ]
    },
    {
        enunciado: "Você descobre que sua escola está implementando uma nova política para promover a sustentabilidade. Qual ação você acha mais importante para apoiar essa iniciativa?",
        alternativas: [
            {
                texto: "Participar de grupos de trabalho para reduzir o desperdício e promover a reciclagem dentro da escola.",
                afirmacao: "Escolheu envolver-se diretamente na implementação de práticas sustentáveis na escola."
            },
            {
                texto: "Promover campanhas educativas para aumentar a conscientização sobre sustentabilidade entre alunos e professores.",
                afirmacao: "Optou por focar na educação e conscientização para promover a sustentabilidade."
            }
        ]
    },
    {
        enunciado: "Você está participando de um debate sobre a importância da preservação histórica em sua cidade. Qual argumento você acha mais convincente?",
        alternativas: [
            {
                texto: "A preservação histórica é crucial para manter a identidade cultural e o patrimônio para futuras gerações.",
                afirmacao: "Defende a preservação histórica como um meio de conservar a identidade e o patrimônio cultural."
            },
            {
                texto: "O desenvolvimento urbano deve ser priorizado para atender às necessidades atuais da comunidade, mesmo que isso envolva a perda de alguns marcos históricos.",
                afirmacao: "Acredita que as necessidades atuais de desenvolvimento podem justificar a alteração ou a destruição de marcos históricos."
            }
        ]
    },
    {
        enunciado: "Você tem a oportunidade de fazer um intercâmbio cultural em outro país. Qual é a sua principal motivação para participar desse programa?",
        alternativas: [
            {
                texto: "Quero experimentar uma nova cultura e aprender um novo idioma para expandir meus horizontes pessoais e profissionais.",
                afirmacao: "Vê o intercâmbio como uma chance para crescimento pessoal e profissional através da experiência cultural."
            },
            {
                texto: "Estou interessado principalmente em melhorar meu currículo e aumentar minhas oportunidades de emprego futuras.",
                afirmacao: "Enxerga o intercâmbio como uma forma de adicionar valor ao currículo e abrir portas para o futuro profissional."
            }
        ]
    },
    {
        enunciado: "Você está organizando uma feira de ciências na escola e precisa escolher um tema inovador. Qual tema você seleciona?",
        alternativas: [
            {
                texto: "Exploração de novas fontes de energia renovável e suas aplicações práticas para um futuro sustentável.",
                afirmacao: "Optou por um tema que combina inovação tecnológica com questões ambientais e sustentáveis."
            },
            {
                texto: "O impacto da tecnologia no comportamento social e como ela altera as interações humanas no dia a dia.",
                afirmacao: "Escolheu explorar o impacto da tecnologia na sociedade para oferecer uma perspectiva crítica sobre mudanças sociais."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Reflexões sobre Suas Decisões...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

