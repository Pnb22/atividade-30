#  Projeto CI/CD com Next.js

Este projeto tem como objetivo aplicar conceitos de Integração Contínua (CI) e Entrega Contínua (CD) utilizando o GitHub Actions e deploy automatizado com Vercel.

---

##  Tecnologias utilizadas

* Next.js
* React
* ESLint
* Jest (testes)
* GitHub Actions (CI/CD)
* Vercel (deploy)

##  Funcionalidades da Pipeline

A pipeline configurada realiza automaticamente:

* ✅ Instalação de dependências (`npm ci`)
* ✅ Validação de código com ESLint
* ✅ Execução de testes (`npm run test`)
* ✅ Build da aplicação (`npm run build`)
* ✅ Deploy automático no Vercel

---

##  Como rodar o projeto localmente

```bash
npm install
npm run dev
```

Acesse em: http://localhost:3000

---

## Comandos importantes

```bash
npm run lint     # Verifica erros no código
npm run test     # Executa testes
npm run build    # Gera build da aplicação
```

---

##  CI/CD

O projeto utiliza GitHub Actions para automatizar o processo de integração e entrega contínua.

A pipeline é executada automaticamente a cada:

* Push na branch main
* Pull Request para main

---

##  Deploy

O deploy é feito automaticamente utilizando Vercel após cada push na branch main.

🔗 Link do projeto:
(https://atividade-30.vercel.app/)(
atividade-30-git-main-arthurfgp22-2513s-projects.vercel.app)

---

##  Estrutura do Projeto

```bash
/app
/components
/public
```

---


=======
>>>>>>> 691cc3c (read me)
 Autor

Arthur Fonseca

=======
>>>>>>> 691cc3c (read me)
