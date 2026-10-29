/**
 * Perguntas de múltipla escolha da trilha "Segurança no ambiente de
 * trabalho e nos estudos". Mesma lógica de correção no cliente descrita
 * em fundamentosQuiz.ts (reforço de aprendizagem, sem pontuação oficial).
 */
import type { QuizQuestion } from './fundamentosQuiz'

export const TRABALHO_QUIZ: QuizQuestion[] = [
  {
    id: 'q1',
    prompt:
      'Você recebe um e-mail "do seu chefe" pedindo, com urgência, uma transferência de dinheiro ou dados de acesso. O que fazer?',
    options: [
      { id: 'a', label: 'Atender imediatamente, pois é o chefe pedindo.' },
      {
        id: 'b',
        label:
          'Confirmar o pedido por outro canal (telefone ou mensagem direta) antes de agir, pois pode ser um golpe de phishing direcionado.',
      },
      { id: 'c', label: 'Encaminhar o e-mail para toda a equipe sem verificar.' },
      { id: 'd', label: 'Ignorar completamente sem avisar ninguém.' },
    ],
    correctOptionId: 'b',
    explanation:
      'Golpes de "spear phishing" imitam colegas ou superiores para pedir ações urgentes. Sempre confirme por outro canal antes de agir.',
  },
  {
    id: 'q2',
    prompt:
      'Por que não é recomendado enviar arquivos de trabalho para seu e-mail pessoal?',
    options: [
      {
        id: 'a',
        label:
          'Porque isso tira esses dados do controle de segurança da empresa ou instituição e pode violar políticas internas.',
      },
      { id: 'b', label: 'Porque e-mails pessoais são sempre mais rápidos.' },
      { id: 'c', label: 'Não há problema algum nisso.' },
      { id: 'd', label: 'Porque arquivos ficam maiores no e-mail pessoal.' },
    ],
    correctOptionId: 'a',
    explanation:
      'Dados corporativos ou acadêmicos fora dos canais autorizados ficam fora do controle de segurança da organização, aumentando o risco de vazamento.',
  },
  {
    id: 'q3',
    prompt:
      'Qual é uma boa prática ao trabalhar ou estudar remotamente em casa?',
    options: [
      {
        id: 'a',
        label:
          'Bloquear a tela do computador sempre que se afastar, mesmo em casa.',
      },
      { id: 'b', label: 'Deixar a tela sempre desbloqueada para facilitar o acesso.' },
      { id: 'c', label: 'Compartilhar a senha do computador com familiares.' },
      { id: 'd', label: 'Usar o mesmo computador para qualquer tipo de site, sem cuidado.' },
    ],
    correctOptionId: 'a',
    explanation:
      'Bloquear a tela evita que outras pessoas no mesmo ambiente acessem informações de trabalho ou estudo sem autorização.',
  },
  {
    id: 'q4',
    prompt: 'Por que fazer backup de trabalhos e projetos importantes?',
    options: [
      {
        id: 'a',
        label:
          'Para não perder tudo em caso de falha do equipamento ou ataque de ransomware.',
      },
      { id: 'b', label: 'Porque backups deixam o computador mais rápido.' },
      { id: 'c', label: 'Backup não tem nenhuma relação com segurança.' },
      { id: 'd', label: 'Apenas para ocupar espaço no computador.' },
    ],
    correctOptionId: 'a',
    explanation:
      'Manter cópias de segurança em mais de um local garante que você não perca trabalhos importantes caso o dispositivo seja danificado ou atacado.',
  },
]
