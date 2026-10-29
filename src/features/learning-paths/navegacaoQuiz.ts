/**
 * Perguntas de múltipla escolha da trilha "Navegação segura e dispositivos".
 * Mesma lógica de correção no cliente descrita em fundamentosQuiz.ts
 * (reforço de aprendizagem, sem pontuação oficial).
 */
import type { QuizQuestion } from './fundamentosQuiz'

export const NAVEGACAO_QUIZ: QuizQuestion[] = [
  {
    id: 'q1',
    prompt: 'O que indica que a conexão com um site está criptografada?',
    options: [
      { id: 'a', label: 'O endereço começar com "https://" e exibir um cadeado no navegador.' },
      { id: 'b', label: 'O site ter muitas imagens.' },
      { id: 'c', label: 'O site carregar rapidamente.' },
      { id: 'd', label: 'O navegador estar atualizado.' },
    ],
    correctOptionId: 'a',
    explanation:
      '"https://" e o ícone de cadeado indicam que a comunicação entre o navegador e o site é criptografada.',
  },
  {
    id: 'q2',
    prompt:
      'Por que é arriscado acessar sua conta bancária em uma rede Wi-Fi pública?',
    options: [
      {
        id: 'a',
        label:
          'Porque redes públicas podem ser menos seguras e vulneráveis à interceptação de dados.',
      },
      { id: 'b', label: 'Porque é mais lento que a rede do celular.' },
      { id: 'c', label: 'Porque não há risco nenhum nisso.' },
      { id: 'd', label: 'Porque o banco bloqueia acessos de fora de casa.' },
    ],
    correctOptionId: 'a',
    explanation:
      'Redes Wi-Fi públicas podem ser exploradas por criminosos para interceptar dados — prefira dados móveis ou uma VPN confiável para acessos sensíveis.',
  },
  {
    id: 'q3',
    prompt: 'Por que é importante manter aplicativos e sistemas atualizados?',
    options: [
      {
        id: 'a',
        label:
          'Porque atualizações costumam corrigir falhas de segurança recém-descobertas.',
      },
      { id: 'b', label: 'Porque deixa o celular com a bateria cheia.' },
      { id: 'c', label: 'Porque é apenas uma questão estética.' },
      { id: 'd', label: 'Atualizações não têm relação com segurança.' },
    ],
    correctOptionId: 'a',
    explanation:
      'Muitas atualizações existem justamente para corrigir vulnerabilidades de segurança identificadas após o lançamento do software.',
  },
  {
    id: 'q4',
    prompt:
      'Qual é uma boa prática básica de proteção para o celular ou computador?',
    options: [
      {
        id: 'a',
        label:
          'Usar senha, PIN ou biometria para bloquear a tela do dispositivo.',
      },
      { id: 'b', label: 'Deixar o dispositivo sempre desbloqueado para agilizar o uso.' },
      { id: 'c', label: 'Compartilhar a senha do dispositivo com qualquer pessoa.' },
      { id: 'd', label: 'Desativar todas as atualizações de segurança.' },
    ],
    correctOptionId: 'a',
    explanation:
      'Bloquear a tela com senha, PIN ou biometria impede que outras pessoas acessem seus dados caso o dispositivo seja perdido ou roubado.',
  },
]
