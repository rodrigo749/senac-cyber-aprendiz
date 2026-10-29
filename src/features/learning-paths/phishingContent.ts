/**
 * Conteúdo educacional da trilha "Phishing, engenharia social e golpes
 * digitais". Conteúdo autoral, escrito para esta aplicação.
 */
import type { LessonBlock } from './fundamentosContent'

export const PHISHING_LESSON: LessonBlock[] = [
  {
    heading: 'O que é phishing',
    paragraphs: [
      'Phishing é uma fraude digital em que criminosos se passam por empresas, bancos ou pessoas confiáveis para enganar a vítima e roubar dados pessoais, senhas ou dinheiro.',
      'O golpe costuma chegar por e-mail, SMS, WhatsApp ou redes sociais, com uma mensagem que cria urgência ("sua conta será bloqueada") ou uma oferta boa demais para ser verdade.',
    ],
  },
  {
    heading: 'Sinais comuns de uma tentativa de phishing',
    paragraphs: [
      'Erros de português, remetente com endereço estranho (ex.: "suporte@banc0-seguro.com"), e links que não batem com o site oficial da empresa.',
      'Pedidos de urgência extrema, ameaças de bloqueio de conta, ou promessas de prêmios/sorteios que você não participou.',
      'Antes de clicar em qualquer link, passe o mouse sobre ele (ou segure o dedo no celular) para ver o endereço real de destino.',
    ],
  },
  {
    heading: 'O que é engenharia social',
    paragraphs: [
      'Engenharia social é a manipulação psicológica usada para convencer alguém a quebrar procedimentos de segurança — por exemplo, uma ligação de alguém se passando por "suporte técnico" pedindo sua senha.',
      'Golpistas exploram emoções como medo, urgência, curiosidade ou vontade de ajudar para fazer a vítima agir sem pensar.',
    ],
  },
  {
    heading: 'Como se proteger',
    paragraphs: [
      'Nunca informe senhas, códigos de verificação ou dados bancários por telefone, e-mail ou mensagem — empresas sérias não pedem isso.',
      'Em caso de dúvida sobre uma mensagem, entre em contato com a empresa por um canal oficial conhecido (não pelo link ou telefone informado na própria mensagem suspeita).',
      'Desconfie sempre de pressa e urgência extrema: é uma das táticas mais usadas para impedir que você pare e pense antes de agir.',
    ],
  },
]
