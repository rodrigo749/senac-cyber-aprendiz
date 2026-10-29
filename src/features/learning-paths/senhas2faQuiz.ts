/**
 * Perguntas de múltipla escolha da trilha "Senhas fortes e autenticação em
 * dois fatores". Mesma lógica de correção no cliente descrita em
 * fundamentosQuiz.ts (reforço de aprendizagem, sem pontuação oficial).
 */
import type { QuizQuestion } from './fundamentosQuiz'

export const SENHAS_2FA_QUIZ: QuizQuestion[] = [
  {
    id: 'q1',
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
    id: 'q2',
    prompt: 'Por que não é recomendado usar a mesma senha em vários sites?',
    options: [
      {
        id: 'a',
        label:
          'Porque, se um site vazar seus dados, a mesma senha pode ser usada para invadir suas outras contas.',
      },
      { id: 'b', label: 'Porque os sites não aceitam senhas repetidas.' },
      { id: 'c', label: 'Porque isso deixa o login mais lento.' },
      { id: 'd', label: 'Não há problema algum nisso.' },
    ],
    correctOptionId: 'a',
    explanation:
      'Reutilizar senhas facilita o chamado "credential stuffing": criminosos testam senhas vazadas de um site em vários outros serviços.',
  },
  {
    id: 'q3',
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
    id: 'q4',
    prompt:
      'Entre as opções de 2FA, qual é geralmente considerada mais segura que o SMS?',
    options: [
      { id: 'a', label: 'Aplicativos autenticadores geradores de código.' },
      { id: 'b', label: 'Enviar o código por e-mail sem senha.' },
      { id: 'c', label: 'Compartilhar o código com um amigo de confiança.' },
      { id: 'd', label: 'Anotar o código em um papel público.' },
    ],
    correctOptionId: 'a',
    explanation:
      'Aplicativos autenticadores geram códigos localmente no dispositivo e são mais resistentes a ataques de interceptação do que o SMS.',
  },
]
