/**
 * Conteúdo educacional da trilha "Fundamentos da segurança cibernética".
 * Conteúdo autoral, escrito para esta aplicação — não copiado de outras
 * plataformas.
 */
export interface LessonBlock {
  heading: string
  paragraphs: string[]
}

export const FUNDAMENTOS_LESSON: LessonBlock[] = [
  {
    heading: 'O que é segurança cibernética?',
    paragraphs: [
      'Segurança cibernética é o conjunto de práticas e conhecimentos usados para proteger computadores, celulares, redes e dados contra acessos indevidos, roubo de informações e outros tipos de ataque digital.',
      'No dia a dia, isso significa tomar decisões simples, mas consistentes: usar senhas fortes, desconfiar de mensagens suspeitas e manter os programas sempre atualizados.',
    ],
  },
  {
    heading: 'Principais tipos de ameaças',
    paragraphs: [
      'Malware: programas maliciosos (vírus, trojans, ransomware) criados para danificar, roubar dados ou sequestrar o acesso a um dispositivo.',
      'Phishing: mensagens falsas (e-mail, SMS, WhatsApp) que tentam enganar a vítima para que ela clique em links fraudulentos ou informe dados pessoais.',
      'Engenharia social: técnicas de manipulação psicológica usadas para convencer alguém a quebrar procedimentos de segurança, muitas vezes se passando por uma pessoa ou empresa confiável.',
    ],
  },
  {
    heading: 'Por que isso importa para você',
    paragraphs: [
      'Grande parte dos ataques digitais não depende de falhas técnicas sofisticadas — depende de erros humanos simples, como reutilizar senhas ou clicar sem pensar em um link.',
      'Desenvolver o hábito de parar e observar antes de agir (checar o remetente, desconfiar de urgência excessiva, verificar o endereço de um link) já reduz bastante o risco de ser vítima de golpes.',
    ],
  },
]
