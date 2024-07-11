![Logo Tem Vaga Mestre?](https://imgur.com/HisaR2D.png)

<center>A plataforma que conecta a comunidade RPG, valorizando a simplicidade, a diversidade e a paixão pelo jogo.</center>

---

O projeto está sendo desenvolvido com as seguintes tecnologias:

![typescript](https://img.shields.io/badge/typescript-292b36?style=for-the-badge&logo=typescript)
![react](https://img.shields.io/badge/react-292b36?style=for-the-badge&logo=react)
![next](https://img.shields.io/badge/next.js-292b36?style=for-the-badge&logo=next.js)
![tailwind css](https://img.shields.io/badge/tailwind_css-292b36?style=for-the-badge&logo=tailwindcss)
![shadcn-ui](https://img.shields.io/badge/shadcn--ui-292b36?style=for-the-badge&logo=shadcnui)
![clerk](https://img.shields.io/badge/clerk-292b36?style=for-the-badge&logo=clerk)
![react hook form](https://img.shields.io/badge/react_hook_form-292b36?style=for-the-badge&logo=reacthookform)
![zod](https://img.shields.io/badge/zod-292b36?style=for-the-badge&logo=zod)

## 💻 Pré-requisitos

Antes de começar, verifique se você atende aos seguintes requisitos:

- Você leu [Como Contribuir](CONTRIBUTING.md)?
- Para rodar o projeto, você precisa ter o `Node` instalado. Se não tiver, [faça sua instalação](https://nodejs.org/en/download/package-manager). _Recomendamos instalar sempre a versão LTS_.

## 🚀 Instalando

Clone este repositório, acesse a pasta do projeto e instale as dependências locais. Faça isso executando os seguintes comandos:

```bash
git clone https://github.com/Quest-Finder/temvagamestre.frontend.git

cd temvagamestre.frontend.git

npm install
```

### Variáveis de ambiente

1. Solicite à sua equipe as variáveis de ambiente para rodar o projeto localmente.
2. Em seguida, crie um arquivo na pasta raíz com o nome `.env.local`, ou renomeie o arquivo `.env.default`, e preencha os dados de cada variável conforme o exemplo abaixo:

```bash
# Clerk
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# API
NEXT_PUBLIC_API_BASE_URL=

# IBGE
NEXT_PUBLIC_API_CIDADES_URL=
```

### Rodando o projeto

Rode o projeto localmente executando o comando:

```bash
npm run dev
```

A aplicação estará disponível através do endereço informado em seu terminal, por exemplo: [http://localhost:3000](http://localhost:3000).

## 🛠️ Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [ ] Cadastro
- [ ] Login
- [ ] Mesas

## 😄 Seja um dos contribuidores

Quer fazer parte desse projeto? Clique [AQUI](CONTRIBUTING.md) e leia como contribuir.

## 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.
