import type { LessonBlock } from './fundamentosContent'

export const SENHAS_2FA_LESSON: LessonBlock[] = [
  {
    heading: 'O que torna uma senha forte',
    paragraphs: [
      'Uma senha forte e longa (idealmente 12 caracteres ou mais), nao contem informacoes obvias (nome, data de nascimento, "123456") e combina letras maiusculas, minusculas, numeros e simbolos.',
      'Uma boa estrategia e usar uma "frase-senha": uma sequencia de palavras aleatorias faceis de lembrar, mas dificeis de adivinhar, como "Cachorro7Verde!Pular".',
    ],
  },
  {
    heading: 'Por que nao reutilizar senhas',
    paragraphs: [
      'Quando um servico sofre um vazamento de dados, as senhas roubadas costumam ser testadas em outros sites (um ataque chamado "credential stuffing"). Se voce reutiliza a mesma senha em varios lugares, um unico vazamento pode comprometer todas as suas contas.',
      'Usar um gerenciador de senhas ajuda a criar e guardar senhas unicas para cada servico, sem precisar memorizar todas.',
    ],
  },
  {
    heading: 'O que e autenticacao em dois fatores (2FA)',
    paragraphs: [
      'A autenticacao em dois fatores adiciona uma segunda camada de protecao: alem da senha (algo que voce sabe), e exigido um segundo fator, como um codigo gerado em um aplicativo autenticador ou enviado por SMS (algo que voce tem).',
      'Mesmo que alguem descubra sua senha, sem o segundo fator essa pessoa nao conseguira acessar sua conta - por isso o 2FA e uma das medidas mais eficazes contra invasoes.',
    ],
  },
  {
    heading: 'Boas praticas ao ativar o 2FA',
    paragraphs: [
      'Prefira aplicativos autenticadores (como apps geradores de codigo) a SMS quando o servico oferecer essa opcao, pois o SMS pode ser interceptado em alguns tipos de ataque.',
      'Guarde os codigos de backup fornecidos ao ativar o 2FA em um local seguro - eles permitem recuperar o acesso caso voce perca o dispositivo usado para gerar os codigos.',
    ],
  },
]
