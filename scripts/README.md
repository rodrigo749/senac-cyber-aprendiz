# Scripts administrativos (uso local, fora do frontend)

Estes scripts usam o **Firebase Admin SDK** com privilégios elevados e por
isso **nunca** devem rodar no navegador nem ser importados pelo código do
site (`src/`). Use-os apenas localmente, no seu computador, para tarefas
administrativas pontuais — como conceder acesso de administrador a um
usuário.

## `grant-admin.mjs`

Cria (ou confirma) o documento que autoriza um usuário a acessar o painel
administrativo em `/admin`, inserindo um documento na coleção
`cyberAprendiz_admins` cujo ID é o **UID** do usuário no Firebase
Authentication.

### 1. Baixe a credencial de Service Account

1. Acesse o [Console do Firebase](https://console.firebase.google.com/).
2. Abra o projeto `kanbanfire-4b711`.
3. Vá em **Configurações do projeto** (ícone de engrenagem) → **Contas de
   serviço**.
4. Clique em **"Gerar nova chave privada"** e confirme.
5. Um arquivo `.json` será baixado. Mova-o para a pasta `scripts/` deste
   projeto com o nome `serviceAccountKey.json`.

   ⚠️ **Este arquivo é extremamente sensível** (equivale a uma senha de
   administrador do seu projeto Firebase inteiro). Ele já está listado no
   `.gitignore` — nunca o remova de lá nem o compartilhe.

### 2. Obtenha o UID do usuário

1. No Console do Firebase, vá em **Authentication** → aba **Users**.
2. Copie o valor da coluna **"User UID"** do usuário que deve virar
   administrador.

### 3. Instale as dependências do script (uma vez)

```bash
cd scripts
npm install
```

### 4. Rode o script

```bash
node grant-admin.mjs SEU_UID_AQUI
```

Se tudo der certo, você verá uma mensagem de confirmação. Depois disso,
faça login novamente em `/admin/login` com o e-mail/senha desse usuário.

### 5. Remova a credencial depois de usar (recomendado)

Após conceder o acesso administrativo necessário, você pode apagar o
arquivo `serviceAccountKey.json` do seu computador. Caso precise executar
o script novamente no futuro, basta gerar uma nova chave repetindo o
passo 1.
