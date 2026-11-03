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
  {
    id: 'p7',
    prompt:
      'Você recebe uma mensagem de WhatsApp dizendo que ganhou um prêmio e precisa clicar em um link para resgatar. O que fazer?',
    options: [
      { id: 'a', label: 'Clicar rapidamente antes que a oferta expire.' },
      {
        id: 'b',
        label:
          'Desconfiar, já que prêmios inesperados são um sinal clássico de golpe, e não clicar no link.',
      },
      { id: 'c', label: 'Encaminhar para todos os contatos.' },
      { id: 'd', label: 'Responder pedindo mais detalhes pelo link.' },
    ],
    correctOptionId: 'b',
    explanation:
      'Prêmios ou sorteios inesperados são uma isca muito comum em golpes de phishing. Desconfie e nunca clique em links suspeitos.',
  },
  {
    id: 'p8',
    prompt: 'O que caracteriza a engenharia social?',
    options: [
      {
        id: 'a',
        label:
          'Manipulação psicológica para convencer alguém a burlar regras de segurança.',
      },
      { id: 'b', label: 'Um tipo de rede social para debates sobre tecnologia.' },
      { id: 'c', label: 'Um software de proteção contra vírus.' },
      { id: 'd', label: 'Um protocolo de criptografia de dados.' },
    ],
    correctOptionId: 'a',
    explanation:
      'Engenharia social explora emoções humanas (medo, urgência, confiança) para induzir a vítima a agir contra seus próprios interesses de segurança.',
  },
  {
    id: 'p9',
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
    id: 'p10',
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
  {
    id: 'p11',
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
    id: 'p12',
    prompt:
      'Por que é arriscado acessar sua conta bancária em uma rede Wi-Fi pública?',
    options: [
      {
        id: 'a',
        label:
          'Porque redes públicas podem ser menos seguras e vulneráveis à interceptação de dados.',
      },
      { id: 'b', label: 'Porque é mais lento que a rede do celular.' },
      { id: 'c', label: 'Porque não há risco nenhum nisso.' },
      { id: 'd', label: 'Porque o banco bloqueia acessos de fora de casa.' },
    ],
    correctOptionId: 'a',
    explanation:
      'Redes Wi-Fi públicas podem ser exploradas por criminosos para interceptar dados — prefira dados móveis ou uma VPN confiável para acessos sensíveis.',
  },
  {
    id: 'p13',
    prompt: 'Por que é importante manter aplicativos e sistemas atualizados?',
    options: [
      {
        id: 'a',
        label:
          'Porque atualizações costumam corrigir falhas de segurança recém-descobertas.',
      },
      { id: 'b', label: 'Porque deixa o celular com a bateria cheia.' },
      { id: 'c', label: 'Porque é apenas uma questão estética.' },
      { id: 'd', label: 'Atualizações não têm relação com segurança.' },
    ],
    correctOptionId: 'a',
    explanation:
      'Muitas atualizações existem justamente para corrigir vulnerabilidades de segurança identificadas após o lançamento do software.',
  },
  {
    id: 'p14',
    prompt:
      'Por que não é recomendado enviar arquivos de trabalho para seu e-mail pessoal?',
    options: [
      {
        id: 'a',
        label:
          'Porque isso tira esses dados do controle de segurança da empresa ou instituição e pode violar políticas internas.',
      },
      { id: 'b', label: 'Porque e-mails pessoais são sempre mais rápidos.' },
      { id: 'c', label: 'Não há problema algum nisso.' },
      { id: 'd', label: 'Porque arquivos ficam maiores no e-mail pessoal.' },
    ],
    correctOptionId: 'a',
    explanation:
      'Dados corporativos ou acadêmicos fora dos canais autorizados ficam fora do controle de segurança da organização, aumentando o risco de vazamento.',
  },
  {
    id: 'p15',
    prompt: 'Qual é uma boa prática básica de proteção para o celular ou computador?',
    options: [
      {
        id: 'a',
        label:
          'Usar senha, PIN ou biometria para bloquear a tela do dispositivo.',
      },
      { id: 'b', label: 'Deixar o dispositivo sempre desbloqueado para agilizar o uso.' },
      { id: 'c', label: 'Compartilhar a senha do dispositivo com qualquer pessoa.' },
      { id: 'd', label: 'Desativar todas as atualizações de segurança.' },
    ],
    correctOptionId: 'a',
    explanation:
      'Bloquear a tela com senha, PIN ou biometria impede que outras pessoas acessem seus dados caso o dispositivo seja perdido ou roubado.',
  },
]
