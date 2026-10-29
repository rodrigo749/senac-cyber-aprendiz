/**
 * Perguntas de múltipla escolha da trilha "Fundamentos da segurança
 * cibernética". Esta é uma versão educativa simples (não persistida no
 * Firestore): a correção acontece inteiramente no cliente e o gabarito já
 * está embutido no bundle.
 *
 * IMPORTANTE (ver README e src/types/learning.ts): quando a gamificação com
 * pontuação "oficial" for implementada, o gabarito NÃO deverá ficar
 * acessível no cliente antes da resposta — a correção deverá ser validada
 * por uma função de backend confiável. Este quiz é apenas um reforço de
 * aprendizagem, sem pontuação oficial nem persistência de progresso.
 */
export interface QuizQuestion {
  id: string
  prompt: string
  options: { id: string; label: string }[]
  correctOptionId: string
  explanation: string
}

export const FUNDAMENTOS_QUIZ: QuizQuestion[] = [
  {
    id: 'q1',
    prompt: 'O que é "phishing"?',
    options: [
      { id: 'a', label: 'Um tipo de antivírus gratuito.' },
      {
        id: 'b',
        label:
          'Uma tentativa de enganar a vítima para roubar dados ou credenciais, geralmente por e-mail ou mensagem.',
      },
      { id: 'c', label: 'Um protocolo de criptografia de redes Wi-Fi.' },
      { id: 'd', label: 'Um recurso de backup automático do sistema.' },
    ],
    correctOptionId: 'b',
    explanation:
      'Phishing é uma fraude que usa mensagens falsas para enganar a vítima e obter dados pessoais, senhas ou dinheiro.',
  },
  {
    id: 'q2',
    prompt:
      'Você recebe um e-mail "urgente" do seu banco pedindo para confirmar sua senha clicando em um link. O que é mais prudente fazer?',
    options: [
      { id: 'a', label: 'Clicar no link imediatamente, pois é urgente.' },
      {
        id: 'b',
        label:
          'Não clicar no link; acessar o site oficial do banco digitando o endereço diretamente ou pelo aplicativo.',
      },
      { id: 'c', label: 'Responder o e-mail com a senha solicitada.' },
      { id: 'd', label: 'Encaminhar o e-mail para amigos para avisá-los.' },
    ],
    correctOptionId: 'b',
    explanation:
      'Bancos sérios não pedem senha por e-mail. O ideal é sempre acessar o site/app oficial digitando o endereço você mesmo.',
  },
  {
    id: 'q3',
    prompt: 'Qual das opções abaixo é uma boa prática de segurança digital?',
    options: [
      { id: 'a', label: 'Usar a mesma senha em todos os serviços.' },
      { id: 'b', label: 'Compartilhar senhas com colegas de confiança.' },
      {
        id: 'c',
        label:
          'Manter sistemas e aplicativos atualizados e usar senhas únicas para cada serviço.',
      },
      { id: 'd', label: 'Desativar atualizações para economizar dados.' },
    ],
    correctOptionId: 'c',
    explanation:
      'Atualizações corrigem falhas de segurança conhecidas, e senhas únicas evitam que um vazamento afete várias contas ao mesmo tempo.',
  },
  {
    id: 'q4',
    prompt: '"Engenharia social", no contexto de segurança, significa:',
    options: [
      {
        id: 'a',
        label:
          'Manipulação psicológica para convencer alguém a quebrar regras de segurança.',
      },
      { id: 'b', label: 'Uma disciplina de engenharia civil aplicada a redes sociais.' },
      { id: 'c', label: 'Um tipo de firewall corporativo.' },
      { id: 'd', label: 'Um certificado de segurança de sites.' },
    ],
    correctOptionId: 'a',
    explanation:
      'Engenharia social explora a confiança e as emoções humanas (urgência, medo, curiosidade) para induzir a vítima a agir de forma insegura.',
  },
]
