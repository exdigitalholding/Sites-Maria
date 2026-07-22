const WHATSAPP_PHONE = "5541999999999"; // Melo Advogados phone

export function whatsappHref(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  consulta:
    "Olá. Gostaria de agendar uma consulta com um especialista da Melo Advogados para entender melhor os serviços do escritório.",
  societario:
    "Olá. Vi o site da Melo Advogados e tenho interesse na área de Direito Societário e Reorganização de Empresas. Podemos conversar?",
  patrimonio:
    "Olá. Vi o site da Melo Advogados e gostaria de informações sobre Planejamento Sucessório, Holding Familiar e Proteção Patrimonial.",
  tributario:
    "Olá. Tenho interesse nas soluções de Planejamento e Defesa Tributária para minha empresa. Podemos agendar uma reunião?",
  contato:
    "Olá. Gostaria de entrar em contato com a equipe jurídica da Melo Advogados.",
  servico: (name: string) =>
    `Olá. Vim pelo site da Melo Advogados e gostaria de atendimento sobre o serviço de: ${name}.`,
};
