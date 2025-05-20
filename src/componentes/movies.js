const DATA = [
    {
        id:'01',
        nome:'Deadpool & Wolverine' ,
        lancamento:'2024',
        nota:'⭐ 4',
        categoria:'Ação/Comédia',
        notaDetalhes:'⭐⭐⭐⭐',
        imagem:'https://a-static.mlcdn.com.br/1500x1500/poster-cartaz-deadpool-wolverine-g-pop-arte-poster/poparteskins2/pos-03770-60x90cm/c64c2ef2459a22810c53a3c4c167a7bf.jpeg',
        sinopse: 'Wolverine está se recuperando quando cruza seu caminho com Deadpool. Juntos, eles formam uma equipe e enfrentam um inimigo em comum.'
    },

    {
        id:'02',
        nome:'Quarteto Fantástico e o Surfista Prateado' ,
        lancamento:'2007',
        nota:'⭐ 3',
        categoria:'Ação/Ficção Científica',
        notaDetalhes:'⭐⭐⭐',
        imagem:'https://br.web.img2.acsta.net/medias/nmedia/18/93/01/84/20230847.jpg',
        sinopse:'Reed, Susan, Johnny e Ben enfrentam um mensageiro intergaláctico que chegou para destruir a Terra. Enquanto o ser enigmático causa estragos, o quarteto heroico também enfrenta o Doutor Destino, que acabou de regressar.'
    },

    {
        id:'03',
        nome:'A fuga das galinhas' ,
        lancamento:'2000',
        nota:'⭐ 5',
        categoria:'Infantil/Comédia',
        notaDetalhes:'⭐⭐⭐⭐⭐',
        imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0BIN0JdmhE1vby09nS-am0ZZn8Z9WOIFyGg&s',
        sinopse:'No galinheiro de uma fazenda inglesa dos anos 1950, galinhas cumprem sua função e vivem pacatamente, sonhando com uma vida melhor. Uma delas, Ginger, quer a liberdade e planeja sair voando dali junto com suas companheiras.'
    },

    {
        id:'04',
        nome:'Annabelle' ,
        lancamento:'2014',
        nota:'⭐ 2',
        categoria:'Terror/Mistério',
        notaDetalhes:'⭐⭐',
        imagem:'https://upload.wikimedia.org/wikipedia/pt/9/9b/Annabelle-poster.jpg',
        sinopse:'John Form acha que encontrou o presente ideal para sua esposa grávida, uma boneca vintage. No entanto, a alegria do casal não dura muito. Uma noite terrível, membros de uma seita satânica invadem a casa do casal em um ataque violento. Ao tentarem invocar um demônio, eles mancham a boneca de sangue, tornando-a receptora de uma entidade do mal.'
    },

    {
        id:'05',
        nome:'Capitão América - Guerra Civil' ,
        lancamento:'2016',
        nota:'⭐ 3',
        categoria:'Ação/Ficção Científica',
        notaDetalhes:'⭐⭐⭐',
        imagem:'https://br.web.img3.acsta.net/pictures/16/03/10/20/36/363874.jpg',
        sinopse:'Depois do ataque de Ultron, os políticos decidem controlar os Vingadores, já que suas ações afetam toda a humanidade. A decisão coloca o Capitão América em rota de colisão com o Homem de Ferro.'
    },

    {
        id:'06',
        nome:'Doutor Estranho - Multiverso da Loucura' ,
        lancamento:'2022',
        nota:'⭐ 3',
        categoria:'Ação/Ficção Científica',
        notaDetalhes:'⭐⭐⭐',
        imagem:'https://br.web.img3.acsta.net/pictures/22/02/14/18/29/1382589.png',
        sinopse:'O aguardado filme trata da jornada do Doutor Estranho rumo ao desconhecido. Além de receber ajuda de novos aliados místicos e outros já conhecidos do público, o personagem atravessa as realidades alternativas incompreensíveis e perigosas do Multiverso para enfrentar um novo e misterioso adversário.'
    },

    {
        id:'07',
        nome:'Haikyuu - A Batalha do Lixão' ,
        lancamento:'2024',
        nota:'⭐ 5',
        categoria:'Animação/Comédia',
        notaDetalhes:'⭐⭐⭐⭐⭐',
        imagem:'https://infinitasvidas.wordpress.com/wp-content/uploads/2024/06/poster-haikyu-batalha-do-lixao.png',
        sinopse:'HAIKYU!! A Batalha do Lixo vai relatar a jornada épica da equipe de vôlei da Karasuno High School que continua em meio a um cenário de competição feroz no Torneio Harutaka. Após avançar além da primeira fase na província de Miyagi, eles alcançam a terceira fase, desafiando todas as expectativas.'
    },

    {
        id:'08',
        nome:'Homem Aranha - Através do Aranhaverso' ,
        lancamento:'2023',
        nota:'⭐ 5',
        categoria:'Animação/Ação',
        notaDetalhes:'⭐⭐⭐⭐⭐',
        imagem:'https://m.media-amazon.com/images/S/pv-target-images/4417ce7f9b8e3a315b8e77cb6f8ec369f702509e4352cf7c45df77f93c8a7325.jpg',
        sinopse:'Depois de se reunir com Gwen Stacy, Homem-Aranha é jogado no multiverso. Lá, o super-herói aracnídeo encontra uma numerosa equipe encarregada de proteger sua própria existência.'
    },

    {
        id:'09',
        nome:'Vingadores Ultimato' ,
        lancamento:'2019',
        nota:'⭐ 4',
        categoria:'Ação/Ficção Científica',
        notaDetalhes:'⭐⭐⭐⭐',
        imagem:'https://br.web.img3.acsta.net/pictures/19/04/26/17/30/2428965.jpg',
        sinopse:'Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.'
    },

    {
        id:'10',
        nome:'Rua do Medo' ,
        lancamento:'2021',
        nota:'⭐ 4',
        categoria:'Terror/Mistério',
        notaDetalhes:'⭐⭐⭐⭐',
        imagem:'https://apostiladecinema.com.br/wp-content/uploads/2021/07/rua-do-medo-1666-parte-3-critica-filme-netflix-poster-e1629396701730.jpg',
        sinopse:'De volta a 1666, Deena descobre a verdade sobre Sarah Fier. Em 1994, os amigos lutam para sobreviver e pelo futuro de Shadyside.'
    },

    {
        id:'11',
        nome:'Planeta dos Macacos - O Confronto' ,
        lancamento:'2014',
        nota:'⭐ 4',
        categoria:'Ação/Ficção Científica',
        notaDetalhes:'⭐⭐⭐⭐',
        imagem:'https://m.media-amazon.com/images/I/71jx3yKMAxL._AC_UF1000,1000_QL80_.jpg',
        sinopse:'Dez anos após seu último embate, um grupo de humanos sobrevivente de uma praga mortal ameaça a crescente nação de macacos geneticamente evoluídos de César. Ambos os lados são levados a uma guerra que pode determinar definitivamente a espécie dominante da Terra.'
    },

    {
        id:'12',
        nome:'Mufasa' ,
        lancamento:'2024',
        nota:'⭐ 3',
        categoria:'Aventura/Musical',
        notaDetalhes:'⭐⭐⭐',
        imagem:'https://lumiere-a.akamaihd.net/v1/images/7e31d6246c6f32fbb227b4739fb5440f_da23af1f.jpeg',
        sinopse:'Mufasa, um filhote órfão, perdido e sozinho, conhece um simpático leão chamado Taka, herdeiro de uma linhagem real. O encontro ao acaso dá início a uma grande jornada de um grupo extraordinário em busca de seu destino, além de revelar a ascensão de um dos maiores reis das Terras do Orgulho.'
    },

    {
        id:'13',
        nome:'Homem de Ferro 3' ,
        lancamento:'2013',
        nota:'⭐ 4',
        categoria:'Ação/Ficção Científica',
        notaDetalhes:'⭐⭐⭐⭐',
        imagem:'https://upload.wikimedia.org/wikipedia/pt/1/19/Iron_Man_3_poster.jpg',
        sinopse:'Depois de um inimigo reduzir o mundo de Tony Stark a destroços, o Homem de Ferro precisa aprender a confiar em seus instintos para proteger aqueles que ama, especialmente sua namorada, e lutar contra seu maior medo: o fracasso.'
    },

    {
        id:'14',
        nome:'O Incrível Hulk' ,
        lancamento:'2008',
        nota:'⭐ 3',
        categoria:'Ação/Ficção Científica',
        notaDetalhes:'⭐⭐⭐',
        imagem:'https://br.web.img3.acsta.net/pictures/210/485/21048566_20131010182211313.jpg',
        sinopse:'O cientista Bruce Banner se esconde no Brasil enquanto busca desesperadamente a cura da mutação que o transforma em um monstro incontrolável. Só assim ele poderá novamente levar uma vida normal e ficar ao lado da mulher que ama. Porém, durante este processo, ele precisa lutar contra o Abominável, um novo inimigo que quer capturá-lo.'
    },

    {
        id:'15',
        nome:'Barbie Butterfly' ,
        lancamento:'2013',
        nota:'⭐ 5',
        categoria:'Infantil/Aventura',
        notaDetalhes:'⭐⭐⭐⭐⭐',
        imagem:'https://m.media-amazon.com/images/I/9149VZu7-BL.jpg',
        sinopse:'Butterfly é uma fada borboleta que mora no reino de Flutterfield e precisa encontrar um antídoto para salvar a vida da rainha Marabella, envenenada pela invejosa Henna. Para isso, conta com a ajuda do príncipe Carlos e das amigas Rayna e Rayla.'
    }
]

export default DATA;