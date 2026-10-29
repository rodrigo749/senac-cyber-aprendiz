/**
 * Conteúdo educacional da trilha "Senhas fortes e autenticação em dois
 * fatores". Conteúdo autoral, escrito para esta aplicação.
 */
import type { LessonBlock } from './fundamentosContent'

export const SENHAS_2FA_LESSON: LessonBlock[] = [
  {
    heading: 'O que torna uma senha forte',
    paragraphs: [
      'Uma senha forte é longa (idealmente 12 caracteres ou mais), não contém informações óbvias (nome, data de nascimento, "123456") e combina letras maiúsculas, minúsculas, números e símbolos.',
      'Uma boa estratégia é usar uma "frase-senha": uma sequência de palavras aleatórias fáceis de lembrar, mas difíceis de adivinhar, como "Cachorro7Verde!Pular".',
    ],
  },
  {
    heading: 'Por que não reutilizar senhas',
    paragraphs: [
      'Quando um serviço sofre um vazamento de dados, as senhas roubadas costumam ser testadas em outros sites (um ataque chamado "credential stuffing"). Se você reutiliza a mesma senha em vários lugares, um único vazamento pode comprometer todas as suas contas.',
      'Usar um gerenciador de senhas ajuda a criar e guardar senhas únicas para cada serviço, sem precisar memorizar todas.',
    ],
  },
  {
    heading: 'O que é autenticação em dois fatores (2FA)',
    paragraphs: [
      'A autenticação em dois fatores adiciona uma segunda camada de proteção: além da senha (algo que você sabe), é exigido um segundo fator, como um código gerado em um aplicativo autenticador ou enviado por SMS (algo que você tem).',
      'Mesmo que alguém descubra sua senha, sem o segundo fator essa pessoa não conseguirá acessar sua conta — por isso o 2FA é uma das medidas mais eficazes contra invasões.',
    ],
  },
  {
    heading: 'Boas práticas ao ativar o 2FA',
    paragraphs: [
      'Prefira aplicativos autenticadores (como apps geradores de código) a SMS quando o serviço oferecer essa opção, pois o SMS pode ser interceptado em alguns tipos de ataque.',
      'Guarde os códigos de backup fornecidos ao ativar o 2FA em um local seguro — eles permitem recuperar o acesso caso você perca o dispositivo usado para gerar os códigos.',
    ],
  },
]
