const WHATSAPP_PHONE = "5541999949251";

export function whatsappHref(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  diagnostico:
    "Ola, vim pelo site da List e quero fazer um diagnostico estrategico para entender o que esta travando o crescimento da minha marca.",
  comecar:
    "Ola, vim pelo site da List e quero comecar um diagnostico estrategico. Podemos conversar?",
  restaurante:
    "Ola, vim pelo site da List e quero um diagnostico para meu restaurante ou negocio gastronomico.",
  time:
    "Ola, vim pelo site da List e quero conhecer melhor o time e entender como voces podem ajudar minha marca.",
  metodo:
    "Ola, vim pelo site da List e quero entender melhor o metodo de trabalho de voces.",
  entregaveis:
    "Ola, vim pelo site da List e quero conhecer os entregaveis e como funciona a execucao com voces.",
  indicadores:
    "Ola, vim pelo site da List e quero entender os indicadores que voces acompanham no diagnostico e na execucao.",
  conversa:
    "Ola, vim pelo site da List e quero conversar sobre como a agencia pode ajudar minha marca.",
  servico: (name: string) =>
    `Ola, vim pelo site da List e tenho interesse no servico de ${name}. Podemos conversar?`,
};
