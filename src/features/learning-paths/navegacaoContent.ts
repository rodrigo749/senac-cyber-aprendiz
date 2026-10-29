/**
 * Conteúdo educacional da trilha "Navegação segura e dispositivos".
 * Conteúdo autoral, escrito para esta aplicação.
 */
import type { LessonBlock } from './fundamentosContent'

export const NAVEGACAO_LESSON: LessonBlock[] = [
  {
    heading: 'Verificando se um site é seguro',
    paragraphs: [
      'Procure pelo cadeado ao lado do endereço no navegador e verifique se o site usa "https://" em vez de apenas "http://" — isso indica que a conexão é criptografada.',
      'Mesmo com o cadeado, desconfie de sites com endereços estranhos, muitos pop-ups ou pedidos excessivos de dados pessoais logo na primeira página.',
    ],
  },
  {
    heading: 'Cuidados com redes Wi-Fi públicas',
    paragraphs: [
      'Evite acessar contas bancárias ou inserir senhas importantes quando conectado a redes Wi-Fi públicas (aeroportos, cafés, shoppings), pois elas podem ser menos seguras.',
      'Se precisar usar uma rede pública, prefira uma VPN confiável ou use os dados móveis do celular para operações sensíveis.',
    ],
  },
  {
    heading: 'Mantendo dispositivos atualizados',
    paragraphs: [
      'Atualizações de sistema operacional e aplicativos frequentemente corrigem falhas de segurança descobertas recentemente — por isso é importante não adiar essas atualizações.',
      'Desinstale aplicativos que você não usa mais, pois eles também podem receber atualizações de segurança e se tornarem um risco se abandonados.',
    ],
  },
  {
    heading: 'Proteção básica de dispositivos',
    paragraphs: [
      'Use senha, PIN, biometria ou reconhecimento facial para bloquear a tela do celular e computador — um dispositivo desbloqueado em mãos erradas expõe tudo.',
      'Ative recursos de localização e apagamento remoto (como "Encontrar meu celular") para casos de perda ou roubo.',
    ],
  },
]
