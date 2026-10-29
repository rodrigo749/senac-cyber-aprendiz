/**
 * Conteúdo educacional da trilha "Proteção de dados e privacidade".
 * Conteúdo autoral, escrito para esta aplicação.
 */
import type { LessonBlock } from './fundamentosContent'

export const PRIVACIDADE_LESSON: LessonBlock[] = [
  {
    heading: 'O que são dados pessoais',
    paragraphs: [
      'Dados pessoais são qualquer informação que possa identificar uma pessoa, como nome, CPF, endereço, e-mail, localização e até hábitos de navegação.',
      'No Brasil, a Lei Geral de Proteção de Dados (LGPD) estabelece regras sobre como empresas e sites podem coletar, usar e armazenar esses dados.',
    ],
  },
  {
    heading: 'Por que proteger sua privacidade importa',
    paragraphs: [
      'Dados vazados ou mal utilizados podem ser usados para golpes, roubo de identidade, spam e até perseguição.',
      'Quanto mais informações você compartilha publicamente (redes sociais, formulários, aplicativos), maior a superfície de risco caso haja vazamentos.',
    ],
  },
  {
    heading: 'Boas práticas de privacidade no dia a dia',
    paragraphs: [
      'Revise as permissões dos aplicativos no celular (câmera, microfone, localização) e desative o que não for realmente necessário.',
      'Evite compartilhar dados sensíveis (CPF, endereço completo, rotina diária) em redes sociais abertas ao público.',
      'Leia, mesmo que por alto, políticas de privacidade antes de cadastrar dados em um site novo — desconfie de formulários que pedem informações excessivas para um serviço simples.',
    ],
  },
  {
    heading: 'Seus direitos como titular de dados',
    paragraphs: [
      'A LGPD garante direitos como saber quais dados uma empresa tem sobre você, pedir a correção de informações incorretas e solicitar a exclusão dos seus dados quando não forem mais necessários.',
      'Sempre que possível, prefira empresas que sejam transparentes sobre como usam seus dados e que ofereçam canais fáceis para exercer esses direitos.',
    ],
  },
]
