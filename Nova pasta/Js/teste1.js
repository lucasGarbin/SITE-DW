const recipes = {
    pastel: {
        title: "Pastel",
        content: `<strong>Ingredientes:</strong><br>
        - Massa de pastel<br>
        - 300g de carne moída<br>
        - 1 cebola picada<br>
        - 2 dentes de alho picados<br>
        - Sal e pimenta a gosto<br>
        - Óleo para fritar<br><br>
        
        <strong>Modo de Preparo:</strong>
        1. Em uma panela, aqueça um pouco de óleo e refogue a cebola até que fique transparente.<br>
        2. Adicione o alho e refogue por mais um minuto.<br>
        3. Acrescente a carne moída, tempere com sal e pimenta, e cozinhe até que a carne esteja bem dourada.<br>
        4. Abra a massa de pastel, coloque uma colher do recheio no centro e feche formando um triângulo ou um círculo.<br>
        5. Use um garfo para pressionar as bordas e selar bem.<br>
        6. Aqueça o óleo em uma frigideira profunda e frite os pastéis até que fiquem dourados. Retire e coloque em papel toalha para absorver o excesso de óleo.`
    },
    
    coxinha: {
        title: "Coxinha",
        content: `<strong>Ingredientes:</strong><br>
        - 500g de peito de frango desfiado<br>
        - 1 cebola picada<br>
        - 2 dentes de alho picados<br>
        - 2 xícaras de farinha de trigo<br>
        - 1 caldo de galinha<br>
        - 2 xícaras de água<br>
        - Sal e pimenta a gosto<br>
        - Óleo para fritar<br>
        - Para empanar: farinha de rosca e ovo batido<br><br>
        
        <strong>Modo de Preparo:</strong><br>
        1. Cozinhe o peito de frango com a cebola, alho, caldo de galinha, sal e pimenta. Depois de cozido, desfie o frango.<br>
        2. Em uma panela, coloque a água, o caldo de galinha e leve ao fogo. Quando ferver, adicione a farinha de trigo de uma vez e mexa até formar uma massa homogênea. Cozinhe por alguns minutos.<br>
        3. Deixe a massa esfriar, pegue uma porção, achate, coloque um pouco do recheio e molde em formato de coxinha.<br>
        4. Passe as coxinhas no ovo batido e depois na farinha de rosca.<br>
        5. Frite em óleo quente até dourar.`
    },

    enroladinho: {
        title: "Enroladinho de Salsicha",
        content: `<strong>Ingredientes:</strong><br>
        - 1 pacote de massa de pão<br>
        - 10 salsichas<br>
        - 1 gema de ovo (para pincelar)<br><br>
        
        <strong>Modo de Preparo:</strong><br>
        1. Descongele a massa de pão conforme as instruções da embalagem.<br>
        2. Abra a massa, corte em tiras e enrole uma salsicha em cada tira.<br>
        3. Coloque os enroladinhos em uma assadeira untada e pincele com a gema de ovo.<br>
        4. Leve ao forno pré-aquecido a 180°C por cerca de 20 minutos ou até que estejam dourados.`
    },

    empada: {
        title: "Empada",
        content: `<strong>Ingredientes:</strong><br>
        - 250g de manteiga<br>
        - 500g de farinha de trigo<br>
        - 1 ovo<br>
        - 1/2 xícara de água<br>
        - 300g de frango desfiado<br>
        - Sal a gosto<br><br>
        
        <strong>Modo de Preparo:</strong>
        1. Em uma tigela, misture a manteiga, a farinha, o ovo e o sal. Vá adicionando água aos poucos até formar uma massa homogênea.<br>
        2. Refogue o frango desfiado com temperos a gosto (cebola, alho, sal).<br>
        3. Abra a massa e forre forminhas de empada. Coloque o recheio e cubra com mais massa.<br>
        4. Leve ao forno a 180°C por cerca de 25 minutos ou até que a massa esteja dourada.`
    },

    quibe: {
        title: "Quibe",
        content: `<strong>Ingredientes:</strong><br>
        - 500g de carne moída<br>
        - 250g de trigo para quibe<br>
        - 1 cebola picada<br>
        - 1/2 xícara de hortelã picada<br>
        - Sal e pimenta a gosto<br>
        - Óleo para fritar (ou pode assar)<br><br>
        
        <strong>Modo de Preparo:</strong>
        1. Deixe o trigo de molho por cerca de 2 horas, escorra e esprema para retirar o excesso de água.<br>
        2. Misture a carne moída, o trigo, a cebola, a hortelã, sal e pimenta até ficar homogêneo.<br>
        3. Modele os quibes e coloque um pouco de recheio, se desejar.<br>
        4. Frite em óleo quente ou coloque em uma assadeira e leve ao forno a 200°C por cerca de 30 minutos.`
    },

    bolo_de_fuba: {
        title: "Bolo de Fubá",
        content: `<strong>Ingredientes:</strong><br>
        - 2 xícaras de fubá<br>
        - 1 xícara de farinha de trigo<br>
        - 2 xícaras de açúcar<br>
        - 3 ovos<br>
        - 1 xícara de leite<br>
        - 1/2 xícara de óleo<br>
        - 1 colher de sopa de fermento em pó<br>
        - 1 pitada de sal<br><br>

        <strong>Modo de Preparo:</strong><br>
        1. Pré-aqueça o forno a 180°C e unte uma forma com manteiga e farinha.<br>
        2. Em uma tigela, misture os ingredientes secos: fubá, farinha de trigo, açúcar, e sal.<br>
        3. No liquidificador, bata os ovos, o leite e o óleo até que a mistura fique homogênea.<br>
        4. Adicione a mistura líquida aos ingredientes secos e mexa bem.<br>
        5. Acrescente o fermento em pó e misture delicadamente.<br>
        6. Despeje a massa na forma e leve ao forno por cerca de 30-40 minutos ou até que o bolo esteja dourado e um palito saia limpo ao ser inserido no centro.<br>
        7. Deixe esfriar um pouco antes de desenformar e sirva.`
    },

    bolo_de_chocolate: {
        title: "Bolo de Chocolate",
        content: `<strong>Ingredientes:</strong><br>
        - 1 e 1/2 xícaras de açúcar<br>
        - 1/2 xícara de manteiga<br>
        - 2 ovos<br>
        - 1 xícara de leite<br>
        - 2 xícaras de farinha de trigo<br>
        - 1/2 xícara de chocolate em pó<br>
        - 1 colher de sopa de fermento em pó<br>
        - 1 pitada de sal<br><br>

        <strong>Modo de Preparo:</strong><br>
        1. Pré-aqueça o forno a 180°C e unte uma forma com manteiga e farinha.<br>
        2. Em uma tigela, bata a manteiga e o açúcar até formar um creme.<br>
        3. Adicione os ovos, um a um, e continue batendo.<br>
        4. Misture o leite e a farinha de trigo, alternando com o chocolate em pó, até que a massa esteja homogênea.<br>
        5. Adicione o fermento em pó e o sal, e misture delicadamente.<br>
        6. Despeje a massa na forma e leve ao forno por cerca de 35-40 minutos ou até que um palito saia limpo ao ser inserido no centro.<br>
        7. Deixe esfriar antes de desenformar e sirva.`
    },

    bolo_de_banana: {
        title: "Bolo de Banana",
        content: `<strong>Ingredientes:</strong><br>
        - 3 bananas maduras amassadas<br>
        - 1 xícara de açúcar<br>
        - 1/2 xícara de manteiga ou óleo<br>
        - 2 ovos<br>
        - 2 xícaras de farinha de trigo<br>
        - 1 colher de sopa de fermento em pó<br>
        - 1 pitada de sal<br>
        - Canela a gosto (opcional)<br><br>

        <strong>Modo de Preparo:</strong><br>
        1. Pré-aqueça o forno a 180°C e unte uma forma com manteiga e farinha.<br>
        2. Em uma tigela, misture as bananas amassadas com o açúcar e a manteiga até ficar homogêneo.<br>
        3. Adicione os ovos e misture bem.<br>
        4. Em outra tigela, misture a farinha, o fermento, o sal e a canela (se estiver usando).<br>
        5. Adicione a mistura seca à mistura de banana, mexendo até que esteja tudo combinado.<br>
        6. Despeje a massa na forma untada e leve ao forno por cerca de 30-35 minutos ou até que um palito saia limpo ao ser inserido no centro.<br>
        7. Deixe esfriar antes de desenformar e sirva.`
    },

    Cupcake: {
        title: "Cupcake",
        content: `<strong>Ingredientes:</strong><br>
        - 1 xícara de açúcar<br>
        - 1/2 xícara de manteiga<br>
        - 2 ovos<br>
        - 2 xícaras de farinha de trigo<br>
        - 1 colher de sopa de fermento em pó<br>
        - 1/2 xícara de leite<br>
        - 1 colher de chá de essência de baunilha<br>
        - Pitada de sal<br><br>

        <strong>Modo de Preparo:</strong><br>
        1. Pré-aqueça o forno a 180°C e coloque forminhas de papel em uma assadeira para cupcakes.<br>
        2. Em uma tigela, bata a manteiga e o açúcar até formar um creme claro e fofo.<br>
        3. Adicione os ovos, um a um, batendo bem após cada adição.<br>
        4. Acrescente a essência de baunilha e misture.<br>
        5. Em outra tigela, misture a farinha, o fermento e o sal.<br>
        6. Adicione a mistura seca à mistura de manteiga, alternando com o leite, começando e terminando com a farinha. Misture até ficar homogêneo.<br>
        7. Distribua a massa nas forminhas, enchendo até 2/3 da capacidade.<br>
        8. Asse por 18-20 minutos ou até que um palito saia limpo ao ser inserido no centro.<br>
        9. Deixe esfriar antes de decorar a gosto.`
    },

    pudim: {
        title: "Pudim",
        content: `<strong>Ingredientes:</strong><br>
        - 1 lata de leite condensado<br>
        - 2 latas de leite (use a lata de leite condensado como medida)<br>
        - 3 ovos<br>
        - 1 xícara de açúcar (para a calda)<br>
        - 1/2 xícara de água (para a calda)<br><br>

        <strong>Modo de Preparo:</strong><br>
        1. Comece fazendo a calda: em uma panela, coloque o açúcar e leve ao fogo médio até derreter e formar um caramelo.<br>
        2. Adicione a água aos poucos, tomando cuidado para não se queimar, e cozinhe até que a calda fique homogênea.<br>
        3. Despeje a calda em uma forma de pudim, espalhando bem no fundo e nas laterais.<br>
        4. No liquidificador, adicione o leite condensado, o leite e os ovos. Bata bem até ficar homogêneo.<br>
        5. Despeje a mistura na forma caramelizada.<br>
        6. Leve ao forno pré-aquecido a 180°C em banho-maria por aproximadamente 1 hora ou até que o pudim esteja firme.<br>
        7. Após assar, deixe esfriar e leve à geladeira por pelo menos 4 horas antes de desenformar.<br>
        8. Para desenformar, passe uma faca nas bordas e inverta em um prato.`
    },

    Receitas_sem_lactose: {
        title: "Receitas Sem Lactose",
        content: `<strong>Algumas sugestões:</strong>
        <ul>
            <li>Bolo de Cenoura</li>
            <li>Panquecas de Banana</li>
            <li>Arroz de Coco</li>
            <li>Frango ao Curry</li>
            <li>Pão de Queijo (sem lactose)</li>
            <li>Quiche de Legumes</li>
            <li>Salada de Grão-de-bico</li>
            <li>Bolinho de Batata-doce</li>
            <li>Sorvete de Frutas</li>
            <li>Risoto de Cogumelos</li>
        </ul>`
    },

    Receitas_sem_glúten: {
        title: "Receitas Sem Glúten",
        content: `<strong>Algumas sugestões:</strong>
        <ul>
            <li>Bolo de Batata-doce</li>
            <li>Pão de Amêndoas</li>
            <li>Quiche de Abobrinha</li>
            <li>Brownie de Chocolate Sem Glúten</li>
            <li>Panquecas de Aveia</li>
            <li>Frango Empanado com Farinha de Coco</li>
            <li>Cookies de Aveia</li>
            <li>Arroz de Pato</li>
            <li>Polenta com Molho de Tomate</li>
            <li>Macarrão de Arroz com Legumes</li>
        </ul>`
    },

    Receitas_vegetarianas: {
        title: "Receitas Vegetarianas",
        content: `<strong>Algumas sugestões:</strong>
        <ul>
            <li>Lasagna de Berinjela</li>
            <li>Estrogonofe de Cogumelos</li>
            <li>Quinoa com Legumes</li>
            <li>Panqueca de Espinafre</li>
            <li>Almôndegas de Grão-de-bico</li>
            <li>Salada de Grãos com Abacate</li>
            <li>Pizza de Legumes</li>
            <li>Risoto de Abóbora</li>
            <li>Wrap de Vegetais</li>
            <li>Chili de Feijão</li>
        </ul>`
    },

    Receitas_veganas: {
        title: "Receitas Veganas",
        content: `<strong>Algumas sugestões:</strong>
        <ul>
            <li>Hambúrguer de Lentilha</li>
            <li>Tofu Grelhado com Molho de Soja</li>
            <li>Salada de Grão-de-bico com Tahine</li>
            <li>Bolinho de Batata Doce</li>
            <li>Moqueca de Banana da Terra</li>
            <li>Panquecas de Aveia</li>
            <li>Estrogonofe de Cogumelos</li>
            <li>Sopa de Abóbora</li>
            <li>Spaghetti ao Molho de Tomate Fresco</li>
            <li>Chili Vegano</li>
        </ul>`
    },

    Airfryer: {
        title: "Receitas para Airfryer",
        content: `<strong>Algumas sugestões:</strong>
        <ul>
            <li>Batata Frita Crocante</li>
            <li>Frango à Milanesa</li>
            <li>Legumes Assados</li>
            <li>Bolinho de Arroz</li>
            <li>Pão de Queijo</li>
            <li>Peixe Empanado</li>
            <li>Brócolis ao Alho e Óleo</li>
            <li>Queijo Coalho Grelhado</li>
            <li>Asinha de Frango ao Barbecue</li>
            <li>Mini Pizza de Berinjela</li>
        </ul>`
    },

    Receitas_para_almoço_rapido: {
        title: "Receitas para Almoço Rápido",
        content: `<strong>Algumas sugestões:</strong>
        <ul>
            <li>Arroz à Grega</li>
            <li>Omelete com Queijo e Presunto</li>
            <li>Macarrão à Carbonara</li>
            <li>Frango Grelhado com Legumes</li>
            <li>Salada de Atum</li>
            <li>Wrap de Frango</li>
            <li>Risoto de Frango</li>
            <li>Quiche de Legumes</li>
            <li>Tapioca com Recheio de Frango</li>
            <li>Crepioca com Queijo e Tomate</li>
        </ul>`
    },

    Receitas_de_sobremesas_fáceis: {
        title: "Receitas de Sobremesas Fáceis",
        content: `<strong>Algumas sugestões:</strong>
        <ul>
            <li>Brigadeiro</li>
            <li>Beijinho</li>
            <li>Pavê de Chocolate</li>
            <li>Mousse de Maracujá</li>
            <li>Gelatina Colorida</li>
            <li>Bolo de Cenoura com Cobertura de Chocolate</li>
            <li>Panqueca Doce com Frutas</li>
            <li>Pudim de Leite Condensado</li>
            <li>Torta de Limão</li>
            <li>Churros</li>
        </ul>`
    },

    Receitas_fit_e_saudáveis: {
        title: "Receitas Fit e Saudáveis",
        content: `<strong>Algumas sugestões:</strong>
        <ul>
            <li>Salada de Quinoa com Legumes</li>
            <li>Frango Grelhado com Brócolis</li>
            <li>Omelete de Espinafre e Tomate</li>
            <li>Panqueca de Aveia</li>
            <li>Smoothie Verde com Frutas</li>
            <li>Wrap de Alface com Atum</li>
            <li>Sopa de Lentilha</li>
            <li>Espaguete de Abobrinha com Molho de Tomate</li>
            <li>Bolinho de Batata Doce</li>
            <li>Muffin de Banana e Aveia</li>
        </ul>`
    },

    Receitas_para_almoço_de_domingo: {
        title: "Receitas para Almoço de Domingo",
        content: `<strong>Algumas sugestões:</strong>
        <ul>
            <li>Feijoada Completa</li>
            <li>Arroz de Pato</li>
            <li>Frango Assado com Batatas</li>
            <li>Picanha na Brasa</li>
            <li>Lasagna de Carne</li>
            <li>Moqueca de Peixe</li>
            <li>Risoto de Cogumelos</li>
            <li>Escondidinho de Carne Seca</li>
            <li>Strogonoff de Frango</li>
            <li>Costela ao Forno</li>
        </ul>`
    },
};

// krl como eu odeio escrever tanta receita

let currentSlide = 0;

function showRecipe(recipeKey) {
    const recipeDisplay = document.getElementById('recipe-display');
    const titleElement = document.getElementById('recipe-title');
    const contentElement = document.getElementById('recipe-content');
    
    // Pegar receita e mostrar
    const recipe = recipes[recipeKey];
    titleElement.innerText = recipe.title;
    contentElement.innerHTML = recipe.content; // Usar innerHTML para renderizar HTML corretamente
    
    // Ocultar cards e mostrar receita
    document.querySelector('.recipe-cards').classList.add('hidden');
    recipeDisplay.classList.add('visible');
}

function closeRecipe() {
    const recipeDisplay = document.getElementById('recipe-display');
    
    // Voltar os cards e esconder a receita
    document.querySelector('.recipe-cards').classList.remove('hidden');
    recipeDisplay.classList.remove('visible');
}

// Funções do Carrossel
function moveCarousel(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides; // Cálculo para loop
    const carouselTrack = document.querySelector('.carousel-track');
    carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
}

