import { 
  Car, HeartPulse, Home, Building2, Building, Plane, ShieldCheck 
} from "lucide-react";

import imgAuto from "../assets/servicos/auto.png";
import imgVida from "../assets/servicos/vida.png";
import imgResidencial from "../assets/servicos/residencial.png";
import imgEmpresarial from "../assets/servicos/empresarial.png";
import imgViagem from "../assets/servicos/viagem.png";


export const SERVICOS_DETALHADOS = {
  "seguro-auto": {
    id: "seguro-auto",
    title: "Seguro Automóvel",
    icon: Car,
    tagline: "Dirija com Tranquilidade: Seu Carro Protegido em Qualquer Caminho!",
    description:
     "Seu carro é mais do que um meio de transporte, é uma conquista. Proteger esse patrimônio de imprevistos como acidentes, roubos e danos a terceiros é fundamental para sua tranquilidade e segurança financeira.",
    image: imgAuto,
    features: [
      "Cobertura contra roubo, furto e colisões",
      "Assistência 24h com guincho ilimitado",
      "Cobertura para terceiros (danos materiais e corporais)",
      "Carro reserva e proteção para vidros"
    ],
    fullContent: "O seguro de automóvel da Segure Aqui oferece uma consultoria técnica para identificar as cláusulas que você realmente precisa, evitando gastos desnecessários.",
  },
  "seguro-vida": {
    id: "seguro-vida",
    title: "Seguro de Vida",
    icon: HeartPulse,
    tagline: "Planejamento para quem você ama.",
    description: "Pensar no futuro e na segurança de quem amamos é um ato de amor e responsabilidade. O seguro de vida é fundamental para garantir o amparo financeiro de sua família em momentos difíceis, como falecimento, invalidez ou doenças graves. Ele proporciona tranquilidade e estabilidade emocional, permitindo que seus entes queridos mantenham seu padrão de vida e realizem seus sonhos mesmo na sua ausência. Oferecemos planos flexíveis com as melhores seguradoras do mercado, com coberturas que se adaptam às suas necessidades e garantem a proteção que sua família merece.",
    image: imgVida,
    features: [
      "Indenização por morte ou invalidez",
      "Antecipação por doenças graves",
      "Assistência funeral individual ou familiar",
      "Seguro resgatável (opção de investimento)"
    ],
    fullContent: "Nossa abordagem em seguro de vida foca na proteção da renda familiar, garantindo que o padrão de vida de quem você ama seja preservado.",
  },
  "seguro-residencial": {
    id: "seguro-residencial",
    title: "Seguro Residencial",
    icon: Home,
    tagline: "Sua casa, seu refúgio, totalmente protegido.",
    description: "Sua casa é seu refúgio, o lugar onde você guarda suas memórias e constrói seu futuro. Protegê-la de incêndios, roubos, danos elétricos e outros imprevistos é crucial para a segurança de sua família e seu patrimônio. Trabalhamos com as seguradoras líderes do mercado para oferecer planos personalizados que se encaixam no seu orçamento e que garantem a proteção total do seu lar.",
    image: imgResidencial,
    features: [
      "Incêndio, queda de raio e explosão",
      "Danos elétricos e curto-circuito",
      "Subtração de bens (roubo e furto)",
      "Serviços de emergência (chaveiro, encanador, eletricista)"
    ],
    fullContent: "Proteger o seu lar é proteger o seu maior patrimônio. Oferecemos assistências que facilitam o seu dia a dia.",
  },
  "seguro-empresarial": {
    id: "seguro-empresarial",
    title: "Seguro Empresarial",
    icon: Building2,
    tagline: "A segurança que o seu negócio precisa para crescer.",
    description: "Sua empresa é fruto do seu trabalho duro e dedicação. Protegê-la de riscos que podem comprometer sua operação e faturamento é essencial para o seu sucesso. O seguro empresarial oferece cobertura contra incêndios, roubos, danos a equipamentos, responsabilidade civil e outros imprevistos que podem paralisar suas atividades e causar prejuízos financeiros.",
    image: imgEmpresarial,
    features: [
      "Danos ao prédio e conteúdo",
      "Responsabilidade Civil Operações",
      "Lucros cessantes (paralisação de atividades)",
      "Equipamentos eletrônicos e portáteis"
    ],
    fullContent: "Garantimos a continuidade do seu negócio mesmo diante de imprevistos, para que você foque no que realmente importa: crescer.",
  },
  "seguro-viagem": {
    id: "seguro-viagem",
    title: "Seguro Viagem",
    icon: Plane,
    tagline: "Viaje pelo mundo com total suporte.",
    description: "Planejar uma viagem envolve sonhos e expectativas, mas também imprevistos podem acontecer. Um problema de saúde inesperado, extravio de bagagem ou até mesmo cancelamento de voo podem transformar sua aventura em um pesadelo e gerar custos altíssimos. Oferecemos planos com as melhores seguradoras do mercado, adaptados ao seu perfil e destino, para que você possa aproveitar cada momento da sua viagem sem preocupações.",   
    image: imgViagem,
    features: [
      "Despesas médicas e hospitalares",
      "Extravio de bagagem",
      "Cancelamento ou interrupção de viagem",
      "Repatriação médica e assistência jurídica"
    ],
    fullContent: "Viajar é descobrir o novo. Com nosso seguro, você tem suporte 24h em português, não importa onde esteja no mapa.",
  },
  "seguro-condominio": {
    id: "seguro-condominio",
    title: "Seguro Condomínio",
    icon: Building,
    tagline: "Segurança para a gestão e para os moradores.",
    description: "A gestão de um condomínio envolve responsabilidades complexas e riscos variados. O seguro condomínio é obrigatório por lei e fundamental para proteger o patrimônio comum contra incêndios, danos elétricos, responsabilidade civil e outros imprevistos que podem causar prejuízos significativos aos condôminos. Além de cobrir os danos à estrutura do prédio, ele oferece assistência 24 horas para serviços de manutenção e emergência, garantindo o bom funcionamento do condomínio. ",
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZG9taW5pdW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    features: [
      "Responsabilidade Civil do Síndico",
      "Danos elétricos em áreas comuns",
      "Vida de funcionários do condomínio",
      "Quebra de vidros e anúncios luminosos"
    ],
    fullContent: "Facilitamos a vida do síndico com uma gestão de riscos técnica, garantindo que o condomínio esteja sempre em conformidade legal.",
  }
};