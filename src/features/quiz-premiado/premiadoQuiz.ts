/**
 * Perguntas do "Quiz Premiado" — uma seleção de perguntas representativas
 * das 6 trilhas do CyberAprendiz, usada na dinâmica com premiação para
 * quem tiver a maior pontuação.
 */
import type { QuizQuestion } from '../learning-paths/fundamentosQuiz'

export const PREMIADO_QUIZ: QuizQuestion[] = [
  {
    id: 'p1',
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
    id: 'p2',
    prompt: 'Qual das senhas abaixo é considerada mais forte?',
    options: [
      { id: 'a', label: '123456' },
      { id: 'b', label: 'maria1990' },
      { id: 'c', label: 'Cachorro7Verde!Pular' },
      { id: 'd', label: 'senha123' },
    ],
    correctOptionId: 'c',
    explanation:
      'Senhas longas, sem informações pessoais óbvias e que combinam letras, números e símbolos são muito mais difíceis de adivinhar ou quebrar.',
  },
  {
    id: 'p3',
    prompt: 'O que é a autenticação em dois fatores (2FA)?',
    options: [
      { id: 'a', label: 'Usar duas senhas diferentes no mesmo site.' },
      {
        id: 'b',
        label:
          'Uma camada extra de segurança que exige um segundo código além da senha para acessar a conta.',
      },
      { id: 'c', label: 'Um tipo de antivírus para celular.' },
      { id: 'd', label: 'Uma forma de recuperar senhas esquecidas.' },
    ],
    correctOptionId: 'b',
    explanation:
      '2FA combina algo que você sabe (senha) com algo que você tem (um código gerado por app ou enviado por SMS), dificultando muito o acesso de invasores.',
  },
  {
    id: 'p4',
    prompt: 'O que é considerado um dado pessoal, segundo a LGPD?',
    options: [
      { id: 'a', label: 'Qualquer informação que possa identificar uma pessoa, como nome ou CPF.' },
      { id: 'b', label: 'Apenas senhas de banco.' },
      { id: 'c', label: 'Somente fotos publicadas em redes sociais.' },
      { id: 'd', label: 'Apenas informações usadas por empresas de tecnologia.' },
    ],
    correctOptionId: 'a',
    explanation:
      'Dado pessoal é qualquer informação capaz de identificar uma pessoa, direta ou indiretamente — nome, CPF, e-mail, endereço, localização, entre outros.',
  },
  {
    id: 'p5',
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
    id: 'p6',
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
]
