export interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string; // Aceita HTML para formatação
}

export const BLOG_POSTS: Post[] = [
           {
    id: "por-que-o-seguro-viagem-e-tao-importante-quanto-o-seu-passaporte?",
    title: "Por que o seguro viagem é tão importante quanto o seu passaporte?",
    excerpt: "",
    category: "Dicas",
    date: "26 de abr. de 2026",
    readTime: "5 min",
    image: "/banner/post1.png",
    content: `
      <p><p style="text-indent: 30px;">Você passou meses planejando o roteiro, escolhendo o hotel perfeito e economizando cada centavo para a viagem dos sonhos. Mas, já parou para pensar no que aconteceria se uma mala sumisse ou se uma simples dor de dente surgisse em um país onde uma consulta médica custa o preço de uma passagem aérea?</p></p>
      
      <p><p style="text-indent: 30px;">Muitas pessoas ainda veem o seguro viagem como um gasto opcional, algo que "talvez não precisem usar". No entanto, a verdade é que ele é o item mais estratégico da sua bagagem. Ele não serve apenas para emergências graves; ele é o suporte que resolve pequenos transtornos que podem arruinar seu humor e seu orçamento.</p></p>
      
      <p><h3>O que o seguro faz por você na prática?</h3></p>
      
      <p><p style="text-indent: 30px;">Diferente do que muitos pensam, o seguro viagem vai muito além do atendimento médico. Ele funciona como um "anjo da guarda" para diversas situações:</p></p>
      
      <p><ul></p>
      <p>    <li><strong>Atendimento Médico e Odontológico:</strong> Em muitos países, não existe sistema de saúde gratuito para estrangeiros. Uma simples torção de tornozelo pode custar milhares de dólares.</li></p>
      <p>    <li><strong>Extravio de Bagagem:</strong> Se a sua mala for parar em outro continente, a seguradora te auxilia na localização e oferece indenização para itens essenciais.</li></p>
      <p>    <li><strong>Cancelamento de Viagem:</strong> Se um imprevisto grave impedir você de embarcar, o seguro ajuda a recuperar valores investidos.</li></p>
      <p>    <li><strong>Assistência Jurídica e Repatriação:</strong> Suporte em problemas legais ou necessidade de retorno especial ao país de origem.</li></p>
      <p></ul></p>
      
      <p><h3>Por que não contar apenas com a sorte?</h3></p>
      
      <p><p style="text-indent: 30px;">Imagine ter que lidar com barreiras linguísticas e burocracias de hospitais estrangeiros enquanto você está passando mal. O seguro oferece uma central de atendimento em português, disponível 24 horas por dia. Ao ligar, você é orientado exatamente sobre onde ir, sem desespero.</p></p>
      
      <p><p style="text-indent: 30px;">Além disso, em diversos destinos, como na maior parte da Europa, o seguro viagem é obrigatório. Sem ele, você pode ser impedido de passar pela imigração e ter que voltar para casa antes mesmo de começar o passeio.</p></p>
      
      <p><p style="text-indent: 30px;"><strong>Dica de Ouro:</strong> A melhor forma de evitar problemas na hora de usar o seguro é saber exatamente o que ele cobre. Verifique o valor da cobertura para "Despesas Médicas e Hospitalares" (DMH) antes de embarcar. Viajar tranquilo é, acima de tudo, viajar informado!</p></p>
    `
  },
    {
    id: "bati-o-carro,-e-agora?-o-guia-definitivo-para-entender-o-que-e-sinistro-e-como-agir",
    title: "Bati o carro, e agora? O guia definitivo para entender o que é sinistro e como agir",
    excerpt: "",
    category: "Seguro Auto",
    date: "26 de abr. de 2026",
    readTime: "10",
    image: "/banner/banner-1.png",
    content: `
      <p><div></p>
      
      <p><p style="text-indent: 30px;">Imagine a cena: um dia comum de trânsito que termina com o som de uma batida. O susto é imediato, mas se você tem um seguro, uma palavra passará a fazer parte do seu vocabulário: <b>sinistro</b>. Embora o termo pareça sombrio, no mercado de seguros ele é apenas a confirmação de que um evento previsto no contrato aconteceu e que a proteção financeira pela qual você pagou será acionada.</p></p>
      
      <p><p style="text-indent: 30px;">Entender o que é um sinistro e como conduzi-lo é essencial para evitar que um acidente de trânsito se transforme em uma dor de cabeça burocrática. Muitas vezes, a demora na indenização não ocorre por culpa da seguradora, mas por pequenos erros do segurado na hora de relatar o ocorrido ou organizar os documentos. Este guia foi criado para simplificar esse processo e garantir que você recupere sua tranquilidade o mais rápido possível.</p></p>
      
      <p><h2>O que é, tecnicamente, o Sinistro?</h2></p>
      
      <p><p style="text-indent: 30px;">No mundo dos seguros, o sinistro é a ocorrência de um dano ou prejuízo que está coberto pela sua apólice. É o momento em que o risco deixa de ser uma possibilidade e se torna realidade. No entanto, é fundamental saber que o sinistro só é válido se o evento estiver listado nas suas coberturas. Por exemplo, se você bateu o carro, mas contratou apenas proteção contra roubo e furto, a seguradora não reconhecerá a batida como um sinistro indenizável. Por isso, conhecer as "letras miúdas" do seu contrato antes do acidente acontecer é o primeiro passo para uma proteção real.</p></p>
      
      <p><h2>Classificações de Sinistro: Entenda as Diferenças</h2></p>
      
      <p><p style="text-indent: 30px;">As seguradoras dividem os acidentes em categorias para determinar como será feito o pagamento. Saber em qual delas seu caso se encaixa ajuda a alinhar suas expectativas:</p></p>
      
      <p><ul></p>
      <p>    <li><b>Perda Parcial:</b> Acontece quando o carro sofre danos que podem ser consertados, e o valor desse reparo é menor que 75% do valor de mercado do veículo. Aqui, você paga o valor da franquia estipulado na apólice e a seguradora cobre o restante do conserto em uma oficina.</li></p>
      <p>    <li><b>Perda Total (PT):</b> É o cenário onde o custo do reparo ultrapassa 75% do valor do carro ou quando o veículo é roubado e não recuperado. Nesses casos, o segurado recebe a indenização integral (normalmente baseada na Tabela FIPE) e não precisa pagar a franquia.</li></p>
      <p>    <li><b>Danos a Terceiros:</b> Se você foi o responsável por bater em outro veículo, este é o sinistro que cobre o prejuízo da outra pessoa, desde que você tenha contratado a cobertura de Responsabilidade Civil (RCF-V).</li></p>
      <p></ul></p>
      
      <p><h2>O que fazer no momento da batida?</h2></p>
      
      <p><p style="text-indent: 30px;">O comportamento nos primeiros minutos após o acidente define a facilidade do processo de sinistro. O roteiro ideal segue estes passos:</p></p>
      
      <p><p style="text-indent: 30px;"><b>1. Segurança e Sinalização:</b> Verifique se há feridos. Se houver, ligue imediatamente para o resgate (193 ou 192). Se não houver feridos, sinalize a via com o triângulo e retire os veículos do fluxo de trânsito, se possível, para evitar multas e novos acidentes.</p></p>
      
      <p><p style="text-indent: 30px;"><b>2. Coleta de Provas:</b> Fotos são fundamentais. Registre a posição dos carros, os danos de ambos, a sinalização da rua e as placas. Essas imagens ajudam os peritos a entenderem a dinâmica do acidente e agilizam a aprovação do conserto.</p></p>
      
      <p><p style="text-indent: 30px;"><b>3. Boletim de Ocorrência:</b> Mesmo sem feridos, o B.O. é um documento de fé pública que protege seu relato. Atualmente, a maioria dos estados permite que ele seja feito online para colisões simples.</p></p>
      
      <p><h2>Abertura do Processo e Vistoria</h2></p>
      
      <p><p style="text-indent: 30px;">Após o susto inicial, você deve fazer o "Aviso de Sinistro". Isso pode ser feito via central telefônica, aplicativo da seguradora ou pelo seu corretor. Você receberá um número de protocolo que acompanhará todo o processo. A seguradora agendará uma vistoria, onde um perito avaliará os danos. Uma dica valiosa é utilizar as <b>oficinas referenciadas</b> da seguradora; além de facilitarem a liberação do perito, elas costumam oferecer benefícios como descontos na franquia ou garantia estendida no serviço.</p></p>
      
      <p><h2>Por que uma indenização pode ser negada?</h2></p>
      
      <p><p style="text-indent: 30px;">Existem situações em que a seguradora pode se recusar a pagar o sinistro, e quase todas estão ligadas ao descumprimento de leis ou má-fé. Dirigir sob efeito de álcool, estar com a CNH vencida no momento do acidente ou agravar o risco propositalmente (como passar em um sinal vermelho propositalmente) são motivos comuns para a perda do direito à indenização. Além disso, mentir no perfil do seguro — como dizer que o carro fica em garagem quando ele dorme na rua — pode anular sua cobertura no momento em que você mais precisar.</p></p>
      
      <p><hr /></p>
      
      <p><h3>Dica Prática do Especialista:</h3></p>
      <p><p style="text-indent: 30px;"><b>Guarde sempre o contato da Assistência 24h em um local de fácil acesso.</b> Em momentos de estresse, esquecemos senhas e logins. Ter o número salvo no celular ou anotado fisicamente garante que o guincho chegue rápido, minimizando seu tempo de exposição ao perigo na via pública. Lembre-se: o sinistro é o momento de usar o serviço que você comprou; faça isso com calma e organização!</p></p>
      
      <p></div></p>
    `
  },
    {
    id: "bati-o-carro,-e-agora?-o-guia-definitivo-para-entender-o-que-e-sinistro-e-como-agir",
    title: "Bati o carro, e agora? O guia definitivo para entender o que é sinistro e como agir",
    excerpt: "",
    category: "Seguro Auto",
    date: "26 de abr. de 2026",
    readTime: "10",
    image: "/banner/banner-1.png",
    content: `
      <p><div></p>
      
      <p><p style="text-indent: 30px;">Imagine a cena: um dia comum de trânsito que termina com o som de uma batida. O susto é imediato, mas se você tem um seguro, uma palavra passará a fazer parte do seu vocabulário: <b>sinistro</b>. Embora o termo pareça sombrio, no mercado de seguros ele é apenas a confirmação de que um evento previsto no contrato aconteceu e que a proteção financeira pela qual você pagou será acionada.</p></p>
      
      <p><p style="text-indent: 30px;">Entender o que é um sinistro e como conduzi-lo é essencial para evitar que um acidente de trânsito se transforme em uma dor de cabeça burocrática. Muitas vezes, a demora na indenização não ocorre por culpa da seguradora, mas por pequenos erros do segurado na hora de relatar o ocorrido ou organizar os documentos. Este guia foi criado para simplificar esse processo e garantir que você recupere sua tranquilidade o mais rápido possível.</p></p>
      
      <p><h2>O que é, tecnicamente, o Sinistro?</h2></p>
      
      <p><p style="text-indent: 30px;">No mundo dos seguros, o sinistro é a ocorrência de um dano ou prejuízo que está coberto pela sua apólice. É o momento em que o risco deixa de ser uma possibilidade e se torna realidade. No entanto, é fundamental saber que o sinistro só é válido se o evento estiver listado nas suas coberturas. Por exemplo, se você bateu o carro, mas contratou apenas proteção contra roubo e furto, a seguradora não reconhecerá a batida como um sinistro indenizável. Por isso, conhecer as "letras miúdas" do seu contrato antes do acidente acontecer é o primeiro passo para uma proteção real.</p></p>
      
      <p><h2>Classificações de Sinistro: Entenda as Diferenças</h2></p>
      
      <p><p style="text-indent: 30px;">As seguradoras dividem os acidentes em categorias para determinar como será feito o pagamento. Saber em qual delas seu caso se encaixa ajuda a alinhar suas expectativas:</p></p>
      
      <p><ul></p>
      <p>    <li><b>Perda Parcial:</b> Acontece quando o carro sofre danos que podem ser consertados, e o valor desse reparo é menor que 75% do valor de mercado do veículo. Aqui, você paga o valor da franquia estipulado na apólice e a seguradora cobre o restante do conserto em uma oficina.</li></p>
      <p>    <li><b>Perda Total (PT):</b> É o cenário onde o custo do reparo ultrapassa 75% do valor do carro ou quando o veículo é roubado e não recuperado. Nesses casos, o segurado recebe a indenização integral (normalmente baseada na Tabela FIPE) e não precisa pagar a franquia.</li></p>
      <p>    <li><b>Danos a Terceiros:</b> Se você foi o responsável por bater em outro veículo, este é o sinistro que cobre o prejuízo da outra pessoa, desde que você tenha contratado a cobertura de Responsabilidade Civil (RCF-V).</li></p>
      <p></ul></p>
      
      <p><h2>O que fazer no momento da batida?</h2></p>
      
      <p><p style="text-indent: 30px;">O comportamento nos primeiros minutos após o acidente define a facilidade do processo de sinistro. O roteiro ideal segue estes passos:</p></p>
      
      <p><p style="text-indent: 30px;"><b>1. Segurança e Sinalização:</b> Verifique se há feridos. Se houver, ligue imediatamente para o resgate (193 ou 192). Se não houver feridos, sinalize a via com o triângulo e retire os veículos do fluxo de trânsito, se possível, para evitar multas e novos acidentes.</p></p>
      
      <p><p style="text-indent: 30px;"><b>2. Coleta de Provas:</b> Fotos são fundamentais. Registre a posição dos carros, os danos de ambos, a sinalização da rua e as placas. Essas imagens ajudam os peritos a entenderem a dinâmica do acidente e agilizam a aprovação do conserto.</p></p>
      
      <p><p style="text-indent: 30px;"><b>3. Boletim de Ocorrência:</b> Mesmo sem feridos, o B.O. é um documento de fé pública que protege seu relato. Atualmente, a maioria dos estados permite que ele seja feito online para colisões simples.</p></p>
      
      <p><h2>Abertura do Processo e Vistoria</h2></p>
      
      <p><p style="text-indent: 30px;">Após o susto inicial, você deve fazer o "Aviso de Sinistro". Isso pode ser feito via central telefônica, aplicativo da seguradora ou pelo seu corretor. Você receberá um número de protocolo que acompanhará todo o processo. A seguradora agendará uma vistoria, onde um perito avaliará os danos. Uma dica valiosa é utilizar as <b>oficinas referenciadas</b> da seguradora; além de facilitarem a liberação do perito, elas costumam oferecer benefícios como descontos na franquia ou garantia estendida no serviço.</p></p>
      
      <p><h2>Por que uma indenização pode ser negada?</h2></p>
      
      <p><p style="text-indent: 30px;">Existem situações em que a seguradora pode se recusar a pagar o sinistro, e quase todas estão ligadas ao descumprimento de leis ou má-fé. Dirigir sob efeito de álcool, estar com a CNH vencida no momento do acidente ou agravar o risco propositalmente (como passar em um sinal vermelho propositalmente) são motivos comuns para a perda do direito à indenização. Além disso, mentir no perfil do seguro — como dizer que o carro fica em garagem quando ele dorme na rua — pode anular sua cobertura no momento em que você mais precisar.</p></p>
      
      <p><hr /></p>
      
      <p><h3>Dica Prática do Especialista:</h3></p>
      <p><p style="text-indent: 30px;"><b>Guarde sempre o contato da Assistência 24h em um local de fácil acesso.</b> Em momentos de estresse, esquecemos senhas e logins. Ter o número salvo no celular ou anotado fisicamente garante que o guincho chegue rápido, minimizando seu tempo de exposição ao perigo na via pública. Lembre-se: o sinistro é o momento de usar o serviço que você comprou; faça isso com calma e organização!</p></p>
      
      <p></div></p>
    `
  },
    {
    id: "bati-o-carro,-e-agora?-o-guia-definitivo-para-entender-o-que-e-sinistro-e-como-agir",
    title: "Bati o carro, e agora? O guia definitivo para entender o que é sinistro e como agir",
    excerpt: "",
    category: "Seguro Auto",
    date: "26 de abr. de 2026",
    readTime: "10",
    image: "/banner/banner-1.png",
    content: `
      <p><div></p>
      
      <p><p style="text-indent: 30px;">Imagine a cena: um dia comum de trânsito que termina com o som de uma batida. O susto é imediato, mas se você tem um seguro, uma palavra passará a fazer parte do seu vocabulário: <b>sinistro</b>. Embora o termo pareça sombrio, no mercado de seguros ele é apenas a confirmação de que um evento previsto no contrato aconteceu e que a proteção financeira pela qual você pagou será acionada.</p></p>
      
      <p><p style="text-indent: 30px;">Entender o que é um sinistro e como conduzi-lo é essencial para evitar que um acidente de trânsito se transforme em uma dor de cabeça burocrática. Muitas vezes, a demora na indenização não ocorre por culpa da seguradora, mas por pequenos erros do segurado na hora de relatar o ocorrido ou organizar os documentos. Este guia foi criado para simplificar esse processo e garantir que você recupere sua tranquilidade o mais rápido possível.</p></p>
      
      <p><h2>O que é, tecnicamente, o Sinistro?</h2></p>
      
      <p><p style="text-indent: 30px;">No mundo dos seguros, o sinistro é a ocorrência de um dano ou prejuízo que está coberto pela sua apólice. É o momento em que o risco deixa de ser uma possibilidade e se torna realidade. No entanto, é fundamental saber que o sinistro só é válido se o evento estiver listado nas suas coberturas. Por exemplo, se você bateu o carro, mas contratou apenas proteção contra roubo e furto, a seguradora não reconhecerá a batida como um sinistro indenizável. Por isso, conhecer as "letras miúdas" do seu contrato antes do acidente acontecer é o primeiro passo para uma proteção real.</p></p>
      
      <p><h2>Classificações de Sinistro: Entenda as Diferenças</h2></p>
      
      <p><p style="text-indent: 30px;">As seguradoras dividem os acidentes em categorias para determinar como será feito o pagamento. Saber em qual delas seu caso se encaixa ajuda a alinhar suas expectativas:</p></p>
      
      <p><ul></p>
      <p>    <li><b>Perda Parcial:</b> Acontece quando o carro sofre danos que podem ser consertados, e o valor desse reparo é menor que 75% do valor de mercado do veículo. Aqui, você paga o valor da franquia estipulado na apólice e a seguradora cobre o restante do conserto em uma oficina.</li></p>
      <p>    <li><b>Perda Total (PT):</b> É o cenário onde o custo do reparo ultrapassa 75% do valor do carro ou quando o veículo é roubado e não recuperado. Nesses casos, o segurado recebe a indenização integral (normalmente baseada na Tabela FIPE) e não precisa pagar a franquia.</li></p>
      <p>    <li><b>Danos a Terceiros:</b> Se você foi o responsável por bater em outro veículo, este é o sinistro que cobre o prejuízo da outra pessoa, desde que você tenha contratado a cobertura de Responsabilidade Civil (RCF-V).</li></p>
      <p></ul></p>
      
      <p><h2>O que fazer no momento da batida?</h2></p>
      
      <p><p style="text-indent: 30px;">O comportamento nos primeiros minutos após o acidente define a facilidade do processo de sinistro. O roteiro ideal segue estes passos:</p></p>
      
      <p><p style="text-indent: 30px;"><b>1. Segurança e Sinalização:</b> Verifique se há feridos. Se houver, ligue imediatamente para o resgate (193 ou 192). Se não houver feridos, sinalize a via com o triângulo e retire os veículos do fluxo de trânsito, se possível, para evitar multas e novos acidentes.</p></p>
      
      <p><p style="text-indent: 30px;"><b>2. Coleta de Provas:</b> Fotos são fundamentais. Registre a posição dos carros, os danos de ambos, a sinalização da rua e as placas. Essas imagens ajudam os peritos a entenderem a dinâmica do acidente e agilizam a aprovação do conserto.</p></p>
      
      <p><p style="text-indent: 30px;"><b>3. Boletim de Ocorrência:</b> Mesmo sem feridos, o B.O. é um documento de fé pública que protege seu relato. Atualmente, a maioria dos estados permite que ele seja feito online para colisões simples.</p></p>
      
      <p><h2>Abertura do Processo e Vistoria</h2></p>
      
      <p><p style="text-indent: 30px;">Após o susto inicial, você deve fazer o "Aviso de Sinistro". Isso pode ser feito via central telefônica, aplicativo da seguradora ou pelo seu corretor. Você receberá um número de protocolo que acompanhará todo o processo. A seguradora agendará uma vistoria, onde um perito avaliará os danos. Uma dica valiosa é utilizar as <b>oficinas referenciadas</b> da seguradora; além de facilitarem a liberação do perito, elas costumam oferecer benefícios como descontos na franquia ou garantia estendida no serviço.</p></p>
      
      <p><h2>Por que uma indenização pode ser negada?</h2></p>
      
      <p><p style="text-indent: 30px;">Existem situações em que a seguradora pode se recusar a pagar o sinistro, e quase todas estão ligadas ao descumprimento de leis ou má-fé. Dirigir sob efeito de álcool, estar com a CNH vencida no momento do acidente ou agravar o risco propositalmente (como passar em um sinal vermelho propositalmente) são motivos comuns para a perda do direito à indenização. Além disso, mentir no perfil do seguro — como dizer que o carro fica em garagem quando ele dorme na rua — pode anular sua cobertura no momento em que você mais precisar.</p></p>
      
      <p><hr /></p>
      
      <p><h3>Dica Prática do Especialista:</h3></p>
      <p><p style="text-indent: 30px;"><b>Guarde sempre o contato da Assistência 24h em um local de fácil acesso.</b> Em momentos de estresse, esquecemos senhas e logins. Ter o número salvo no celular ou anotado fisicamente garante que o guincho chegue rápido, minimizando seu tempo de exposição ao perigo na via pública. Lembre-se: o sinistro é o momento de usar o serviço que você comprou; faça isso com calma e organização!</p></p>
      
      <p></div></p>
    `
  },
    {
    id: "bati-o-carro,-e-agora?-o-guia-definitivo-para-entender-o-que-e-sinistro-e-como-agir",
    title: "Bati o carro, e agora? O guia definitivo para entender o que é sinistro e como agir",
    excerpt: "",
    category: "Seguro Auto",
    date: "26 de abr. de 2026",
    readTime: "10",
    image: "/banner/banner-1.png",
    content: `
      <p><div></p>
      
      <p><p style="text-indent: 30px;">Imagine a cena: um dia comum de trânsito que termina com o som de uma batida. O susto é imediato, mas se você tem um seguro, uma palavra passará a fazer parte do seu vocabulário: <b>sinistro</b>. Embora o termo pareça sombrio, no mercado de seguros ele é apenas a confirmação de que um evento previsto no contrato aconteceu e que a proteção financeira pela qual você pagou será acionada.</p></p>
      
      <p><p style="text-indent: 30px;">Entender o que é um sinistro e como conduzi-lo é essencial para evitar que um acidente de trânsito se transforme em uma dor de cabeça burocrática. Muitas vezes, a demora na indenização não ocorre por culpa da seguradora, mas por pequenos erros do segurado na hora de relatar o ocorrido ou organizar os documentos. Este guia foi criado para simplificar esse processo e garantir que você recupere sua tranquilidade o mais rápido possível.</p></p>
      
      <p><h2>O que é, tecnicamente, o Sinistro?</h2></p>
      
      <p><p style="text-indent: 30px;">No mundo dos seguros, o sinistro é a ocorrência de um dano ou prejuízo que está coberto pela sua apólice. É o momento em que o risco deixa de ser uma possibilidade e se torna realidade. No entanto, é fundamental saber que o sinistro só é válido se o evento estiver listado nas suas coberturas. Por exemplo, se você bateu o carro, mas contratou apenas proteção contra roubo e furto, a seguradora não reconhecerá a batida como um sinistro indenizável. Por isso, conhecer as "letras miúdas" do seu contrato antes do acidente acontecer é o primeiro passo para uma proteção real.</p></p>
      
      <p><h2>Classificações de Sinistro: Entenda as Diferenças</h2></p>
      
      <p><p style="text-indent: 30px;">As seguradoras dividem os acidentes em categorias para determinar como será feito o pagamento. Saber em qual delas seu caso se encaixa ajuda a alinhar suas expectativas:</p></p>
      
      <p><ul></p>
      <p>    <li><b>Perda Parcial:</b> Acontece quando o carro sofre danos que podem ser consertados, e o valor desse reparo é menor que 75% do valor de mercado do veículo. Aqui, você paga o valor da franquia estipulado na apólice e a seguradora cobre o restante do conserto em uma oficina.</li></p>
      <p>    <li><b>Perda Total (PT):</b> É o cenário onde o custo do reparo ultrapassa 75% do valor do carro ou quando o veículo é roubado e não recuperado. Nesses casos, o segurado recebe a indenização integral (normalmente baseada na Tabela FIPE) e não precisa pagar a franquia.</li></p>
      <p>    <li><b>Danos a Terceiros:</b> Se você foi o responsável por bater em outro veículo, este é o sinistro que cobre o prejuízo da outra pessoa, desde que você tenha contratado a cobertura de Responsabilidade Civil (RCF-V).</li></p>
      <p></ul></p>
      
      <p><h2>O que fazer no momento da batida?</h2></p>
      
      <p><p style="text-indent: 30px;">O comportamento nos primeiros minutos após o acidente define a facilidade do processo de sinistro. O roteiro ideal segue estes passos:</p></p>
      
      <p><p style="text-indent: 30px;"><b>1. Segurança e Sinalização:</b> Verifique se há feridos. Se houver, ligue imediatamente para o resgate (193 ou 192). Se não houver feridos, sinalize a via com o triângulo e retire os veículos do fluxo de trânsito, se possível, para evitar multas e novos acidentes.</p></p>
      
      <p><p style="text-indent: 30px;"><b>2. Coleta de Provas:</b> Fotos são fundamentais. Registre a posição dos carros, os danos de ambos, a sinalização da rua e as placas. Essas imagens ajudam os peritos a entenderem a dinâmica do acidente e agilizam a aprovação do conserto.</p></p>
      
      <p><p style="text-indent: 30px;"><b>3. Boletim de Ocorrência:</b> Mesmo sem feridos, o B.O. é um documento de fé pública que protege seu relato. Atualmente, a maioria dos estados permite que ele seja feito online para colisões simples.</p></p>
      
      <p><h2>Abertura do Processo e Vistoria</h2></p>
      
      <p><p style="text-indent: 30px;">Após o susto inicial, você deve fazer o "Aviso de Sinistro". Isso pode ser feito via central telefônica, aplicativo da seguradora ou pelo seu corretor. Você receberá um número de protocolo que acompanhará todo o processo. A seguradora agendará uma vistoria, onde um perito avaliará os danos. Uma dica valiosa é utilizar as <b>oficinas referenciadas</b> da seguradora; além de facilitarem a liberação do perito, elas costumam oferecer benefícios como descontos na franquia ou garantia estendida no serviço.</p></p>
      
      <p><h2>Por que uma indenização pode ser negada?</h2></p>
      
      <p><p style="text-indent: 30px;">Existem situações em que a seguradora pode se recusar a pagar o sinistro, e quase todas estão ligadas ao descumprimento de leis ou má-fé. Dirigir sob efeito de álcool, estar com a CNH vencida no momento do acidente ou agravar o risco propositalmente (como passar em um sinal vermelho propositalmente) são motivos comuns para a perda do direito à indenização. Além disso, mentir no perfil do seguro — como dizer que o carro fica em garagem quando ele dorme na rua — pode anular sua cobertura no momento em que você mais precisar.</p></p>
      
      <p><hr /></p>
      
      <p><h3>Dica Prática do Especialista:</h3></p>
      <p><p style="text-indent: 30px;"><b>Guarde sempre o contato da Assistência 24h em um local de fácil acesso.</b> Em momentos de estresse, esquecemos senhas e logins. Ter o número salvo no celular ou anotado fisicamente garante que o guincho chegue rápido, minimizando seu tempo de exposição ao perigo na via pública. Lembre-se: o sinistro é o momento de usar o serviço que você comprou; faça isso com calma e organização!</p></p>
      
      <p></div></p>
    `
  },  {
    id: "bati-o-carro,-e-agora?-o-guia-definitivo-para-entender-o-que-e-sinistro-e-como-agir",
    title: "Bati o carro, e agora? O guia definitivo para entender o que é sinistro e como agir",
    excerpt: "",
    category: "Seguro Auto",
    date: "26 de abr. de 2026",
    readTime: "10",
    image: "/banner/banner-1.png",
    content: `
      <p><div></p>
      
      <p><p style="text-indent: 30px;">Imagine a cena: um dia comum de trânsito que termina com o som de uma batida. O susto é imediato, mas se você tem um seguro, uma palavra passará a fazer parte do seu vocabulário: <b>sinistro</b>. Embora o termo pareça sombrio, no mercado de seguros ele é apenas a confirmação de que um evento previsto no contrato aconteceu e que a proteção financeira pela qual você pagou será acionada.</p></p>
      
      <p><p style="text-indent: 30px;">Entender o que é um sinistro e como conduzi-lo é essencial para evitar que um acidente de trânsito se transforme em uma dor de cabeça burocrática. Muitas vezes, a demora na indenização não ocorre por culpa da seguradora, mas por pequenos erros do segurado na hora de relatar o ocorrido ou organizar os documentos. Este guia foi criado para simplificar esse processo e garantir que você recupere sua tranquilidade o mais rápido possível.</p></p>
      
      <p><h2>O que é, tecnicamente, o Sinistro?</h2></p>
      
      <p><p style="text-indent: 30px;">No mundo dos seguros, o sinistro é a ocorrência de um dano ou prejuízo que está coberto pela sua apólice. É o momento em que o risco deixa de ser uma possibilidade e se torna realidade. No entanto, é fundamental saber que o sinistro só é válido se o evento estiver listado nas suas coberturas. Por exemplo, se você bateu o carro, mas contratou apenas proteção contra roubo e furto, a seguradora não reconhecerá a batida como um sinistro indenizável. Por isso, conhecer as "letras miúdas" do seu contrato antes do acidente acontecer é o primeiro passo para uma proteção real.</p></p>
      
      <p><h2>Classificações de Sinistro: Entenda as Diferenças</h2></p>
      
      <p><p style="text-indent: 30px;">As seguradoras dividem os acidentes em categorias para determinar como será feito o pagamento. Saber em qual delas seu caso se encaixa ajuda a alinhar suas expectativas:</p></p>
      
      <p><ul></p>
      <p>    <li><b>Perda Parcial:</b> Acontece quando o carro sofre danos que podem ser consertados, e o valor desse reparo é menor que 75% do valor de mercado do veículo. Aqui, você paga o valor da franquia estipulado na apólice e a seguradora cobre o restante do conserto em uma oficina.</li></p>
      <p>    <li><b>Perda Total (PT):</b> É o cenário onde o custo do reparo ultrapassa 75% do valor do carro ou quando o veículo é roubado e não recuperado. Nesses casos, o segurado recebe a indenização integral (normalmente baseada na Tabela FIPE) e não precisa pagar a franquia.</li></p>
      <p>    <li><b>Danos a Terceiros:</b> Se você foi o responsável por bater em outro veículo, este é o sinistro que cobre o prejuízo da outra pessoa, desde que você tenha contratado a cobertura de Responsabilidade Civil (RCF-V).</li></p>
      <p></ul></p>
      
      <p><h2>O que fazer no momento da batida?</h2></p>
      
      <p><p style="text-indent: 30px;">O comportamento nos primeiros minutos após o acidente define a facilidade do processo de sinistro. O roteiro ideal segue estes passos:</p></p>
      
      <p><p style="text-indent: 30px;"><b>1. Segurança e Sinalização:</b> Verifique se há feridos. Se houver, ligue imediatamente para o resgate (193 ou 192). Se não houver feridos, sinalize a via com o triângulo e retire os veículos do fluxo de trânsito, se possível, para evitar multas e novos acidentes.</p></p>
      
      <p><p style="text-indent: 30px;"><b>2. Coleta de Provas:</b> Fotos são fundamentais. Registre a posição dos carros, os danos de ambos, a sinalização da rua e as placas. Essas imagens ajudam os peritos a entenderem a dinâmica do acidente e agilizam a aprovação do conserto.</p></p>
      
      <p><p style="text-indent: 30px;"><b>3. Boletim de Ocorrência:</b> Mesmo sem feridos, o B.O. é um documento de fé pública que protege seu relato. Atualmente, a maioria dos estados permite que ele seja feito online para colisões simples.</p></p>
      
      <p><h2>Abertura do Processo e Vistoria</h2></p>
      
      <p><p style="text-indent: 30px;">Após o susto inicial, você deve fazer o "Aviso de Sinistro". Isso pode ser feito via central telefônica, aplicativo da seguradora ou pelo seu corretor. Você receberá um número de protocolo que acompanhará todo o processo. A seguradora agendará uma vistoria, onde um perito avaliará os danos. Uma dica valiosa é utilizar as <b>oficinas referenciadas</b> da seguradora; além de facilitarem a liberação do perito, elas costumam oferecer benefícios como descontos na franquia ou garantia estendida no serviço.</p></p>
      
      <p><h2>Por que uma indenização pode ser negada?</h2></p>
      
      <p><p style="text-indent: 30px;">Existem situações em que a seguradora pode se recusar a pagar o sinistro, e quase todas estão ligadas ao descumprimento de leis ou má-fé. Dirigir sob efeito de álcool, estar com a CNH vencida no momento do acidente ou agravar o risco propositalmente (como passar em um sinal vermelho propositalmente) são motivos comuns para a perda do direito à indenização. Além disso, mentir no perfil do seguro — como dizer que o carro fica em garagem quando ele dorme na rua — pode anular sua cobertura no momento em que você mais precisar.</p></p>
      
      <p><hr /></p>
      
      <p><h3>Dica Prática do Especialista:</h3></p>
      <p><p style="text-indent: 30px;"><b>Guarde sempre o contato da Assistência 24h em um local de fácil acesso.</b> Em momentos de estresse, esquecemos senhas e logins. Ter o número salvo no celular ou anotado fisicamente garante que o guincho chegue rápido, minimizando seu tempo de exposição ao perigo na via pública. Lembre-se: o sinistro é o momento de usar o serviço que você comprou; faça isso com calma e organização!</p></p>
      
      <p></div></p>
    `
  },
]