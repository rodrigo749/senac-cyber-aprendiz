import type { QuizQuestion } from './fundamentosQuiz'

export const SENHAS_2FA_QUIZ: QuizQuestion[] = [
  {
    id: 'q1',
    prompt: 'Qual das senhas abaixo e considerada mais forte?',
    options: [
      { id: 'a', label: '123456' },
      { id: 'b', label: 'maria1990' },
      { id: 'c', label: 'Cachorro7Verde!Pular' },
      { id: 'd', label: 'senha123' },
    ],
    correctOptionId: 'c',
    explanation:
      'Senhas longas, sem informacoes pessoais obvias e que combinam letras, numeros e simbolos sao muito mais dificeis de adivinhar ou quebrar.',
  },
  {
    id: 'q2',
    prompt: 'Por que nao e recomendado usar a mesma senha em varios sites?',
    options: [
      {
        id: 'a',
        label:
          'Porque, se um site vazar seus dados, a mesma senha pode ser usada para invadir suas outras contas.',
      },
      { id: 'b', label: 'Porque os sites nao aceitam senhas repetidas.' },
      { id: 'c', label: 'Porque isso deixa o login mais lento.' },
      { id: 'd', label: 'Nao ha problema algum nisso.' },
    ],
    correctOptionId: 'a',
    explanation:
      'Reutilizar senhas facilita o chamado "credential stuffing": criminosos testam senhas vazadas de um site em varios outros servicos.',
  },
  {
    id: 'q3',
    prompt: 'O que e a autenticacao em dois fatores (2FA)?',
    options: [
      { id: 'a', label: 'Usar duas senhas diferentes no mesmo site.' },
      {
        id: 'b',
        label:
          'Uma camada extra de seguranca que exige um segundo codigo alem da senha para acessar a conta.',
      },
      { id: 'c', label: 'Um tipo de antivirus para celular.' },
      { id: 'd', label: 'Uma forma de recuperar senhas esquecidas.' },
    ],
    correctOptionId: 'b',
    explanation:
      '2FA combina algo que voce sabe (senha) com algo que voce tem (um codigo gerado por app ou enviado por SMS), dificultando muito o acesso de invasores.',
  },
  {
    id: 'q4',
    prompt:
      'Entre as opcoes de 2FA, qual e geralmente considerada mais segura que o SMS?',
    options: [
      { id: 'a', label: 'Aplicativos autenticadores geradores de codigo.' },
      { id: 'b', label: 'Enviar o codigo por e-mail sem senha.' },
      { id: 'c', label: 'Compartilhar o codigo com um amigo de confianca.' },
      { id: 'd', label: 'Anotar o codigo em um papel publico.' },
    ],
    correctOptionId: 'a',
    explanation:
      'Aplicativos autenticadores geram codigos localmente no dispositivo e sao mais resistentes a ataques de interceptacao do que o SMS.',
  },
]
