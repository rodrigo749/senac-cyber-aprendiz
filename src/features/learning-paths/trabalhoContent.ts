/**
 * Conteúdo educacional da trilha "Segurança no ambiente de trabalho e nos
 * estudos". Conteúdo autoral, escrito para esta aplicação.
 */
import type { LessonBlock } from './fundamentosContent'

export const TRABALHO_LESSON: LessonBlock[] = [
  {
    heading: 'Cuidados com informações corporativas e acadêmicas',
    paragraphs: [
      'Documentos de trabalho ou de estudo podem conter informações sensíveis (dados de clientes, notas, projetos) que não devem ser compartilhadas fora dos canais autorizados.',
      'Evite enviar arquivos de trabalho para seu e-mail pessoal ou serviços de nuvem não autorizados pela empresa ou instituição de ensino.',
    ],
  },
  {
    heading: 'Uso seguro de e-mail corporativo e acadêmico',
    paragraphs: [
      'Desconfie de e-mails internos "urgentes" pedindo transferências, dados de acesso ou mudanças de cadastro — golpes de phishing direcionado (spear phishing) costumam imitar colegas ou superiores.',
      'Sempre confirme pedidos incomuns por outro canal (telefone, mensagem direta) antes de agir, especialmente quando envolver dinheiro ou dados sensíveis.',
    ],
  },
  {
    heading: 'Trabalho remoto e compartilhamento de dispositivos',
    paragraphs: [
      'Ao trabalhar ou estudar de casa, evite usar o mesmo computador para tarefas profissionais/acadêmicas e para atividades de risco (downloads duvidosos, sites não confiáveis).',
      'Bloqueie a tela sempre que se afastar do computador, mesmo em casa, especialmente se outras pessoas tiverem acesso ao ambiente.',
    ],
  },
  {
    heading: 'Backup e continuidade',
    paragraphs: [
      'Mantenha cópias de segurança (backup) de trabalhos e projetos importantes em mais de um local, para não perder tudo em caso de falha do equipamento ou ataque de ransomware.',
      'Siga sempre as políticas de segurança da sua empresa ou instituição de ensino — elas existem para proteger tanto você quanto a organização.',
    ],
  },
]
