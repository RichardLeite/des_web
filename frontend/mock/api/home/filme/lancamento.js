const responseModel = require('../../../helpers/responseModel.js');

module.exports = (app, endpoint) => {
    app.get(endpoint + '/', (req, res) => {
        const response = `{
   "lista":[
      {
         "titulo":"A Mulher Rei",
         "genero":[
            "Historico",
            "Drama",
            "Ação"
         ],
         "imagem":"https://br.web.img3.acsta.net/c_310_420/pictures/22/09/19/20/28/5720375.jpg",
         "descricao":"A Mulher Rei acompanha Nanisca (Viola Davis) que foi uma comandante do exército do Reino de Daomé, um dos locais mais poderosos da África nos séculos XVII e XIX. Durante o período, o grupo militar era composto apenas por mulheres que, juntas, combateram os colonizadores franceses, tribos rivais e todos aqueles que tentaram escravizar seu povo e destruir suas terras. Conhecidas como Agojie, o grupo foi criado por conta de sua população masculina enfrentar altas baixas na violência e guerra cada vez mais frequentes com os estados vizinhos da África Ocidental, o que levou Dahomey a ser forçado a dar anualmente escravos do sexo masculino, particularmente ao Império Oyo, que usou isso para troca de mercadorias como parte do crescente fenômeno do comércio de escravos na África Ocidental durante a Era dos Descobrimentos, o que fez com que mulheres fossem alistadas para o combate.",
         "faixaetaria":"16",
         "avaliacao":0.0
      },
      {
         "titulo":"Marte Um",
         "genero":[
            "Drama"
         ],
         "imagem":"https://br.web.img3.acsta.net/c_310_420/pictures/22/08/04/19/25/2946887.jpg",
         "descricao":"A família Martins vive tranquilamente nas margens de uma grande cidade brasileira após a decepcionante posse de um presidente extremista de extrema-direita. Sendo uma família negra de classe média baixa, eles sentem a tensão de sua nova realidade. Tércia, a mãe, reinterpreta seu mundo depois que um encontro inesperado a deixa se perguntando se ela é amaldiçoada. Seu marido, Wellington, coloca todas as suas esperanças na carreira de seu filho, Deivinho, que por pressão e querendo agradar o pai, segue as ambições dele, apesar de secretamente aspirar estudar astrofísica e colonizar Marte. Enquanto isso, a filha mais velha, Eunice, se apaixona por uma jovem de espírito livre e questiona se é hora de sair de casa.",
         "faixaetaria":"16",
         "avaliacao":0.0
      },
      {
         "titulo":"O Telefone Preto",
         "genero":[
            "Terror",
            "Suspense"
         ],
         "imagem":"https://br.web.img3.acsta.net/c_310_420/pictures/22/06/23/21/10/1998178.jpg",
         "descricao":"Em O Telefone Preto, em 1978, uma série de sequestros estão acontecendo na cidade de Denver. Ethan Hawke interpreta o "Grabbler", um serial killer que tem seu alvo crianças do bairro. Finney Shaw, um garoto de 13 anos, é sequestrado. o garoto acorda em um porão, onde há apenas uma cama e um telefone preto em uma das paredes. Quando o aparelho toca, o garoto consegue ouvir a voz das vítimas anteriores do assassino, e elas tentam evitar que o Finney sofra o mesmo destino. Enquanto isso, sua irmã Gwen tem sonhos que indicam o lugar onde ele pode estar e corre contra o tempo para tentar ajudar os detetives Wright e Miller a ajudar o irmão, apenas para que isso seja em vão. Finney continua a fazer tentativas para escapar que apenas falham, até que uma das vítimas do serial killler fala sobre um plano que finalmente poderia levar Finney à liberdade.",
         "faixaetaria":"16",
         "avaliacao":0.0
      },
      {
         "titulo":"O Clube dos Anjos",
         "genero":[
            "Drama",
            "Suspense"
         ],
         "imagem":"https://br.web.img2.acsta.net/c_310_420/pictures/22/11/04/19/14/5823002.jpg",
         "descricao":"Ao longo dos anos, as reuniões mensais do Clube do Picadinho – confraria que há décadas reúne sete amigos de longa data – passaram de rituais de poder a melancólicas assembleias de fracassos. O fim seria seu único destino digno. Até a chegada de um misterioso cozinheiro que passa a lhes servir magníficos banquetes. Os laços de amizade estão de volta, é a gula como celebração da vida. Mas há um porém: depois de cada jantar, um integrante da confraria amanhece morto. Teria sido envenenado? E, sobretudo, por quê estes homens continuam retornando aos jantares? Baseado na obra de Luis Fernando Verissimo. ",
         "faixaetaria":"16",
         "avaliacao":0.0
      },
      {
         "titulo":"Amsterdam",
         "genero":[
            "Drama",
            "Suspense",
            "Policial"
         ],
         "imagem":"https://br.web.img2.acsta.net/c_310_420/pictures/22/08/31/15/49/0706651.jpg",
         "descricao":"Amsterdam é ambientado na década de 1930 e conta a história de uma grande amizade e um assassinato que pode ameaçar a vida dos protagonistas e abalar toda uma sociedade. A trama policial segue três amigos íntimos: dois soldados e uma enfermeira (Christian Bale, John David Washington e Margot Robbie), que fizeram um pacto no passado, de sempre se protegerem enquanto trio, não importa o que aconteça. Mas, eles se perdem no centro do caso de um assassinato, do qual se tornam os principais suspeitos. Para provar que não estão envolvidos na morte, o grupo contará com a ajuda de aliados para tentar investigar o crime, e assim se proteger e enfrentar o verdadeiro assassino. Mas, novamente por acaso, os três amigos descobrem uma das tramas mais surpreendentes da história norte-americana, que em parte, é baseada em uma história real. Do mesmo diretor de O Lado Bom da Vida, David O. Russell.",
         "faixaetaria":"16",
         "avaliacao":0.0
      },
      {
         "titulo":"Noites de Paris",
         "genero":[
            "Drama"
         ],
         "imagem":"https://br.web.img3.acsta.net/c_310_420/pictures/22/10/19/19/15/0259241.png",
         "descricao":"Em Noites de Paris, o ano é 1981, eleições, as comemorações se espalham pelas ruas e há um ar de esperança e mudança em Paris. Mas para Elisabeth, seu casamento está chegando ao fim e agora ela terá que sustentar a si mesma e seus dois filhos adolescentes. Após ser deixada por seu marido, Elisabeth se vê sozinha, responsável pelo cuidado diário de sua família. Ela consegue um emprego em um programa de rádio noturno, onde conhece Talulah, uma adolescente problemática que ela decide acolher, a convidando para sua casa. Com eles, Talulah experimenta o calor de uma família pela primeira vez e seu espírito livre tem uma influência transformadora naquela casa. Elisabeth e seus filhos ganham confiança e começam a correr riscos, mudando também a trajetória de suas vidas.",
         "faixaetaria":"16",
         "avaliacao":0.0
      },
      {
         "titulo":"Adão Negro",
         "genero":[
            "Ação",
            "Fantasia",
            "Aventura"
         ],
         "imagem":"https://br.web.img3.acsta.net/c_310_420/pictures/22/10/18/22/38/0636138.jpg",
         "descricao":"Adão Negro é o filme solo do anti-herói, baseado no personagem em quadrinhos Black Adam (Dwayne Johnson) da DC Comics, grande antagonista de Shazam!, tendo no longa, sua história de origem explorada, e revelando seu passado de escravo no país Kahndaq. Nascido no Egito Antigo, o anti-herói tem super força, velocidade, resistência, capacidade de voar e de disparar raios. Alter ego de Teth-Adam e filho do faraó Ramsés II, Adão Negro foi consumido por poderes mágicos e transformado em um feiticeiro. Grande inimigo de Shazam! nas HQs, apesar dele acreditar em seu pontecial e, inclusive, oferecê-lo como um guerreiro do bem, Adão Negro acaba usando suas habilidades especiais para o mal. O anti-herói em busca de redenção ou um herói que se tornou vilão, pode ser capaz de destruir tudo o que estiver pela frente - ou de encontrar seu caminho. ",
         "faixaetaria":"12",
         "avaliacao":0.0
      },
      {
         "titulo":"One Piece Film - Red",
         "genero":[
            "Animação",
            "Aventura",
            "Comedia"
         ],
         "imagem":"https://br.web.img3.acsta.net/c_310_420/pictures/22/10/25/18/11/5327705.jpg",
         "descricao":"Uta - a cantora mais amada do mundo. Sua voz, com a qual ela canta enquanto esconde sua verdadeira identidade, foi descrita como "de outro mundo". Ela aparecerá em público pela primeira vez em um show ao vivo. Enquanto o local se enche de todos os tipos de fãs de Uta - piratas animados, a Marinha assistindo de perto e os Chapéus de Palha liderados por Luffy que simplesmente vieram para curtir sua performance sonora - a voz que o mundo inteiro estava esperando está prestes a ressoar. A história começa com o fato chocante de que ela é 'filha de Shanks'.",
         "faixaetaria":"12",
         "avaliacao":0.0
      },
      {
         "titulo":"Pantera Negra: Wakanda Para Sempre",
         "genero":[
            "Ação",
            "Aventura",
            "Fantasia"
         ],
         "imagem":"https://br.web.img2.acsta.net/c_310_420/pictures/22/10/21/20/01/5778952.jpg",
         "descricao":"Pantera Negra: Wakanda Para Sempre é a continuação do longa Pantera Negra, da Marvel, dirigido por Ryan Coogler e produzido por Kevin Feige. No filme, o mundo de Wakanda se expande. Após a morte do ator de T'Challa (Chadwick Boseman) o foco de Wakanda Para Sempre são os personagens em volta do Pantera Negra. Rainha Ramonda (Angela Bassett), Shuri (Letitia Wright), M'Baku (Winston Duke), Okoye (Danai Gurira) e as Dora Milage lutam para proteger a nação fragilizada de outros países após a morte de T'Challa. Enquanto o povo de Wakanda se esforça para continuar em frente neste novo capítulo, a família e amigos do falecido rei precisam se unir com a ajuda de Nakia (Lupita Nyong'o), integrante dos Cães de Guerra, e Everett Ross (Martin Freeman). Em meio a isso tudo, Wakanda ainda terá que aprender a conviver com a nação debaixo d'água, Atlantis, e seu rei Namor (Tenoch Huerta).",
         "faixaetaria":"14",
         "avaliacao":0.0
      }
   ]
}`;
        setTimeout(() => {
            // responseModel.error(res, 404, 'Erro ao tentar comunicar com SRV');
            responseModel.sucess(res, response);
        }, responseModel.delay());
    });
}
