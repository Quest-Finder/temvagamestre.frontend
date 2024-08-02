# Contribuindo para Tem Vaga Mestre?

Primeiramente, obrigado por dedicar seu tempo para contribuir! ❤️

Todos os tipos de contribuições são incentivados e valorizados. Consulte o [Índice](#índice) para ver as diferentes maneiras de ajudar e obter detalhes sobre como este projeto lida com elas. Certifique-se de ler a seção relevante antes de fazer sua contribuição. Isso facilitará muito para nós, mantenedores, e proporcionará uma experiência mais tranquila para todos os envolvidos. A comunidade aguarda ansiosamente suas contribuições. 🎉

E se você gosta do projeto, mas simplesmente não tem tempo para contribuir, tudo bem. Existem outras maneiras fáceis de apoiar o projeto e mostrar seu apreço, o que também nos deixaria muito felizes:

- Dê uma estrela no projeto

- Tweet sobre ele

- Siga nossa página no [linkedin](https://www.linkedin.com/company/tem-vaga-mestre/)

- Fale sobre o projeto em meetups locais e conte para seus amigos/colegas

## Índice

- [Código de Conduta](#código-de-conduta)
- [Eu Tenho uma Pergunta](#eu-tenho-uma-pergunta)
- [Eu Quero Contribuir](#eu-quero-contribuir)
  - [Reportar Bugs](#reportar-bugs)
  - [Sugerir Melhorias](#sugerir-melhorias)
  - [Sua Primeira Contribuição de Código](#sua-primeira-contribuição-de-código)
  - [Melhorando a Documentação](#melhorando-a-documentação)
  - [Guia de Estilo](#guias-de-estilo)
  - [Mensagens de Commit](#mensagens-de-commit)
- [Junte-se à Equipe do Projeto](#junte-se-à-equipe-do-projeto)

## Código de Conduta

Este projeto e todos os participantes estão sujeitos ao [Código de Conduta do Tem Vaga Mestre?](https://github.com/Quest-Finder/temvagamestre.frontendblob/develop/CODE_OF_CONDUCT.md). Ao participar, espera-se que você mantenha esse código. Por favor, reporte comportamentos inaceitáveis para <>.

## Eu Tenho uma Pergunta

> Se você quiser fazer uma pergunta, assumimos que você já leu a [Documentação](https://github.com/Quest-Finder/temvagamestre.frontend/wiki) disponível.

Antes de fazer uma pergunta, é melhor procurar por [Issues](https://github.com/Quest-Finder/temvagamestre.frontend/issues) existentes que possam ajudá-lo. Caso encontre um issue relevante e ainda precise de esclarecimento, você pode escrever sua pergunta nesse issue. Também é aconselhável buscar respostas na internet primeiro.

Se ainda assim você sentir a necessidade de fazer uma pergunta e precisar de esclarecimento, recomendamos o seguinte:

- Abra um [Issue](https://github.com/Quest-Finder/temvagamestre.frontend/issues/new).
- Forneça o máximo de contexto possível sobre o problema que está enfrentando.
- Informe as versões do projeto e da plataforma (nodejs, npm, etc.), dependendo do que parecer relevante.

Cuidaremos do problema o mais rápido possível.

## Eu Quero Contribuir

> Aviso Legal
> Ao contribuir para este projeto, você deve concordar que é autor de 100% do conteúdo, que possui os direitos necessários sobre o conteúdo e que o conteúdo que você contribui pode ser fornecido sob a licença do projeto.

### Reportar Bugs

#### Antes de Enviar um Relatório de Bug

Um bom relatório de bug não deve deixar os outros precisando buscar mais informações com você. Portanto, pedimos que você investigue cuidadosamente, colete informações e descreva o problema em detalhes em seu relatório. Por favor, complete as etapas a seguir para nos ajudar a corrigir qualquer bug em potencial o mais rápido possível.

- Certifique-se de que está usando a versão mais recente.
- Determine se seu bug é realmente um bug e não um erro de sua parte, por exemplo, usando componentes/versões de ambiente incompatíveis (certifique-se de ter lido a [documentação](https://github.com/Quest-Finder/temvagamestre.frontend/wiki). Se você está procurando suporte, talvez queira verificar [esta seção](#eu-tenho-uma-pergunta)).
- Para ver se outros usuários já experimentaram (e possivelmente já resolveram) o mesmo problema que você está enfrentando, verifique se já existe um relatório de bug para o seu problema no [rastreador de bugs](https://github.com/Quest-Finder/temvagamestre.frontendissues?q=label%3Abug).
- Também certifique-se de procurar na internet (incluindo Stack Overflow) para ver se usuários fora da comunidade do GitHub discutiram o problema.
- Colete informações sobre o bug:
  - Stack trace (Rastreamento de pilha)
  - SO, Plataforma e Versão (Windows, Linux, macOS, x86, ARM)
  - Versão do interpretador, compilador, SDK, ambiente de runtime, gerenciador de pacotes, dependendo do que parecer relevante.
  - Possivelmente sua entrada e saída
  - Você pode reproduzir o problema de forma confiável? E também consegue reproduzi-lo com versões mais antigas?

#### Como Enviar um Bom Relatório de Bug?

> Você nunca deve relatar problemas relacionados à segurança, vulnerabilidades ou bugs incluindo informações sensíveis no rastreador de issues, ou em qualquer outro lugar público. Bugs sensíveis devem ser enviados por email para <>.

Usamos issues do GitHub para rastrear bugs e erros. Se você encontrar um problema com o projeto:

- Abra um [Issue](https://github.com/Quest-Finder/temvagamestre.frontend/issues/new). (Como não podemos ter certeza neste ponto se é um bug ou não, pedimos que você não fale sobre um bug ainda e não rotule o issue).
- Explique o comportamento que você esperava e o comportamento real.
- Forneça o máximo de contexto possível e descreva os _passos de reprodução_ que outra pessoa pode seguir para recriar o problema por conta própria. Isso geralmente inclui seu código. Para bons relatórios de bug, você deve isolar o problema e criar um caso de teste reduzido.
- Forneça as informações que você coletou na seção anterior.

Uma vez que seja arquivado:

- A equipe do projeto rotulará o issue conforme necessário.
- Um membro da equipe tentará reproduzir o problema com os passos que você forneceu. Se não houver passos de reprodução ou nenhuma maneira óbvia de reproduzir o problema, a equipe solicitará esses passos e marcará o issue como `needs-repro`. Bugs com a tag `needs-repro` não serão abordados até que sejam reproduzidos.
- Se a equipe conseguir reproduzir o problema, ele será marcado como `needs-fix`, bem como possivelmente outras tags (como `critical`), e o issue ficará disponível para ser [implementado por alguém](#sua-primeira-contribuição-de-código).

### Sugerir Melhorias

Esta seção orienta você sobre como enviar uma sugestão de melhoria para o Tem Vaga Mestre?, **incluindo novos recursos e pequenas melhorias na funcionalidade existente**. Seguir estas diretrizes ajudará os mantenedores e a comunidade a entender sua sugestão e encontrar sugestões relacionadas.

#### Antes de Enviar uma Sugestão de Melhoria

- Certifique-se de que está usando a versão mais recente.
- Leia a [documentação](https://github.com/Quest-Finder/temvagamestre.frontend/wiki.git) com atenção e veja se a funcionalidade já está coberta, talvez por uma configuração individual.
- Realize uma [pesquisa](https://github.com/Quest-Finder/temvagamestre.frontend/issues) para ver se a melhoria já foi sugerida. Se já foi, adicione um comentário ao issue existente em vez de abrir um novo.
- Descubra se sua ideia se encaixa no escopo e nos objetivos do projeto. Cabe a você fazer um caso forte para convencer os desenvolvedores do projeto dos méritos deste recurso. Lembre-se de que queremos recursos que sejam úteis para a maioria dos nossos usuários e não apenas para um pequeno subconjunto. Se você está apenas direcionando uma minoria de usuários, considere escrever uma biblioteca de add-on/plugin.

#### Como Enviar uma Boa Sugestão de Melhoria?

Sugestões de melhorias são rastreadas como [issues do GitHub](https://github.com/Quest-Finder/temvagamestre.frontend/issues).

- Use um **título claro e descritivo** para o issue a fim de identificar a sugestão.
- Forneça uma **descrição passo a passo da melhoria sugerida** em tantos detalhes quanto possível.
- **Descreva o comportamento atual** e **explique qual comportamento você esperava ver em vez disso** e por quê. Neste ponto, você também pode dizer quais alternativas não funcionam para você.
- Você pode **incluir capturas de tela e GIFs animados** que ajudem a demonstrar os passos ou apontar a parte à qual a sugestão está relacionada. Você pode usar [esta ferramenta](https://www.cockos.com/licecap/) para gravar GIFs no macOS e Windows, e [esta ferramenta](https://github.com/colinkeenan/silentcast) ou [esta ferramenta](https://github.com/GNOME/byzanz) no Linux.
- **Explique por que esta melhoria seria útil** para a maioria dos usuários do Tem Vaga Mestre?. Você também pode querer destacar outros projetos que resolveram melhor o problema e que poderiam servir como inspiração.

### Sua Primeira Contribuição de Código

#### Estrutura de Pastas

```txt
├── CODE_OF_CONDUCT.md -> código de conduta
├── CONTRIBUTING.md -> como contribuir para o TVM
├── LICENSE
├── README.md
├── components.json
├── docker-compose.yml
├── dockerfile
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── prettier.config.js
├── src
│   ├── app
│   ├── assets
│   ├── components -> componentes globais
│   ├── context
│   ├── features -> funcionalidades da aplicação
│   ├── helpers -> código auxiliar como máscaras
│   ├── hooks -> hooks personalizados
│   ├── lib
│   ├── middleware.ts -> middleware do clerk
│   └── services -> conexões com serviços externos
├── tailwind.config.js
└── tsconfig.json
```

<!-- TODO
incluir configuração do ambiente, IDE e instruções típicas de início?

-->

### Melhorando a Documentação

<!-- TODO
Atualizando, melhorando e corrigindo a documentação

-->

## Guias de Estilo

### Mensagens de Commit

<!-- TODO

-->

## Junte-se à Equipe do Projeto

Para fazer parte da equipe que mantém o Tem Vaga Mestre? é necessário aguardar a abertura de vagas. Elas estarão listadas na nossa página da wiki e são ocupadas através de um processo seletivo.

Este projeto faz parte da iniciativa [SouJuniorLabs](https://github.com/SouJunior), lá você encontra outros projetos open source voluntários.

<!-- omit in toc -->

## Créditos

Este guia é baseado no **contributing-gen**. [Crie o seu próprio](https://github.com/bttger/contributing-gen)!
