/**
 * Perguntas de múltipla escolha da trilha "Phishing, engenharia social e
 * golpes digitais". Mesma lógica de correção no cliente descrita em
 * fundamentosQuiz.ts (reforço de aprendizagem, sem pontuação oficial).
 */
import type { QuizQuestion } from './fundamentosQuiz'

export const PHISHING_QUIZ: QuizQuestion[] = [
  {
    id: 'q1',
    prompt:
      'Você recebe uma mensagem de WhatsApp dizendo que você ganhou um prêmio e precisa clicar em um link para resgatar. O que fazer?',
    options: [
      { id: 'a', label: 'Clicar rapidamente antes que a oferta expire.' },
      {
        id: 'b',
        label:
          'Desconfiar, já que prêmios inesperados são um sinal clássico de golpe, e não clicar no link.',
      },
      { id: 'c', label: 'Encaminhar para todos os contatos.' },
      { id: 'd', label: 'Responder pedindo mais detalhes pelo link.' },
    ],
    correctOptionId: 'b',
    explanation:
      'Prêmios ou sorteios inesperados são uma isca muito comum em golpes de phishing. Desconfie e nunca clique em links suspeitos.',
  },
  {
    id: 'q2',
    prompt: 'O que caracteriza a engenharia social?',
    options: [
      {
        id: 'a',
        label:
          'Manipulação psicológica para convencer alguém a burlar regras de segurança.',
      },
      { id: 'b', label: 'Um tipo de rede social para debates sobre tecnologia.' },
      { id: 'c', label: 'Um software de proteção contra vírus.' },
      { id: 'd', label: 'Um protocolo de criptografia de dados.' },
    ],
    correctOptionId: 'a',
    explanation:
      'Engenharia social explora emoções humanas (medo, urgência, confiança) para induzir a vítima a agir contra seus próprios interesses de segurança.',
  },
  {
    id: 'q3',
    prompt:
      'Um e-mail "do banco" pede que você confirme sua senha clicando em um link. Qual é a atitude mais segura?',
    options: [
      { id: 'a', label: 'Clicar no link e preencher os dados pedidos.' },
      {
        id: 'b',
        label:
          'Acessar o site ou aplicativo oficial do banco digitando o endereço você mesmo, sem usar o link do e-mail.',
      },
      { id: 'c', label: 'Responder o e-mail perguntando se é verdade.' },
      { id: 'd', label: 'Ignorar e apagar sem verificar nada.' },
    ],
    correctOptionId: 'b',
    explanation:
      'Bancos não pedem confirmação de senha por e-mail. O caminho seguro é sempre acessar o canal oficial diretamente, sem usar links recebidos.',
  },
  {
    id: 'q4',
    prompt: 'Qual destes é um sinal comum de tentativa de phishing?',
    options: [
      {
        id: 'a',
        label:
          'Mensagem com urgência extrema, erros de português e remetente com endereço estranho.',
      },
      { id: 'b', label: 'E-mail enviado pelo endereço oficial da empresa, sem erros.' },
      { id: 'c', label: 'Notificação do próprio aplicativo instalado no celular.' },
      { id: 'd', label: 'Mensagem sem nenhum link ou anexo.' },
    ],
    correctOptionId: 'a',
    explanation:
      'Urgência excessiva, erros de escrita e remetentes suspeitos são sinais clássicos de phishing — vale sempre desconfiar.',
  },
]
