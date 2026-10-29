/**
 * Perguntas de múltipla escolha da trilha "Proteção de dados e privacidade".
 * Mesma lógica de correção no cliente descrita em fundamentosQuiz.ts
 * (reforço de aprendizagem, sem pontuação oficial).
 */
import type { QuizQuestion } from './fundamentosQuiz'

export const PRIVACIDADE_QUIZ: QuizQuestion[] = [
  {
    id: 'q1',
    prompt: 'O que é considerado um dado pessoal?',
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
    id: 'q2',
    prompt: 'O que a LGPD (Lei Geral de Proteção de Dados) regula?',
    options: [
      { id: 'a', label: 'Apenas o uso de senhas em sites de bancos.' },
      {
        id: 'b',
        label:
          'Como empresas e sites podem coletar, usar e armazenar dados pessoais dos cidadãos.',
      },
      { id: 'c', label: 'A velocidade da internet no Brasil.' },
      { id: 'd', label: 'Apenas o conteúdo de redes sociais.' },
    ],
    correctOptionId: 'b',
    explanation:
      'A LGPD estabelece regras sobre coleta, armazenamento, uso e compartilhamento de dados pessoais por organizações.',
  },
  {
    id: 'q3',
    prompt:
      'Qual é uma boa prática ao instalar um novo aplicativo no celular?',
    options: [
      {
        id: 'a',
        label:
          'Revisar as permissões solicitadas (câmera, localização, microfone) e negar o que não for necessário.',
      },
      { id: 'b', label: 'Aceitar todas as permissões sem verificar.' },
      { id: 'c', label: 'Compartilhar a localização o tempo todo, mesmo sem necessidade.' },
      { id: 'd', label: 'Nunca atualizar o aplicativo.' },
    ],
    correctOptionId: 'a',
    explanation:
      'Conceder apenas as permissões realmente necessárias reduz os riscos de exposição de dados pessoais sensíveis.',
  },
  {
    id: 'q4',
    prompt: 'Segundo a LGPD, que direito um titular de dados possui?',
    options: [
      {
        id: 'a',
        label:
          'Solicitar a exclusão ou correção de seus dados pessoais armazenados por uma empresa.',
      },
      { id: 'b', label: 'Obrigar empresas a divulgar dados de outras pessoas.' },
      { id: 'c', label: 'Impedir qualquer empresa de existir.' },
      { id: 'd', label: 'Nenhum direito específico é garantido.' },
    ],
    correctOptionId: 'a',
    explanation:
      'A LGPD garante ao titular o direito de acessar, corrigir e solicitar a exclusão de seus dados pessoais, entre outras garantias.',
  },
]
