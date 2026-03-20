# 🎨 Seleto AI – Frontend

Interface web da plataforma **Seleto AI**, responsável por proporcionar uma experiência moderna, intuitiva e institucional para gestão de processos seletivos com apoio de inteligência artificial.

---

## 📌 Visão Geral

O frontend foi desenvolvido com foco em:

* Experiência do usuário (UX) moderna e fluida
* Design institucional com aparência de produto premium
* Componentização reutilizável
* Integração direta com a API via OpenAPI

A aplicação contempla:

* Painel administrativo
* Gestão de processos seletivos
* Portal público de inscrição
* Assistente inteligente (chat IA)

---

## 🏗️ Arquitetura

O projeto segue uma estrutura baseada em **componentização e separação de responsabilidades**:

### 🔹 UI Components

Componentes reutilizáveis:

* `AppLayout` → layout com sidebar e header
* `StatCard` → cards de métricas
* Tabelas, botões e inputs padronizados

---

### 🔹 Pages (Views)

* `Dashboard` → visão geral do sistema
* `Processos` → listagem de processos seletivos
* `InscricaoPublica` → portal do candidato
* `ChatIA` → assistente inteligente

---

### 🔹 Services

* Integração com API (Axios / Fetch)
* Consumo automático via OpenAPI
* Camada desacoplada de chamadas HTTP

---

## 🧠 Experiência do Usuário

O sistema foi pensado para transmitir:

* Clareza de informação
* Rapidez de navegação
* Confiança institucional
* Sensação de produto SaaS premium

### Destaques:

✔ Layout com sidebar fixa
✔ Uso de gradientes modernos
✔ Feedback visual (hover, estados)
✔ Hierarquia tipográfica clara

---

## 🎨 Design System

Baseado em **TailwindCSS**, com:

* Cores neutras (Slate)
* Gradientes azul → índigo
* Bordas arredondadas (2xl)
* Sombras suaves (shadow-sm / md / lg)

---

## 📡 Integração com API

A comunicação com o backend é feita via:

* JWT (Bearer Token)
* Endpoints REST
* Tipagem automática via OpenAPI

### Exemplo:

```ts
const response = await api.auth.login({
  email,
  password
});
```

---

## 🔐 Autenticação

Fluxo implementado:

1. Usuário realiza login
2. API retorna token JWT
3. Token é armazenado no frontend
4. Requisições enviam:

```http
Authorization: Bearer {token}
```

---

## 🧩 Funcionalidades

### 📊 Dashboard

* Indicadores gerais
* Atividades recentes
* Métricas do sistema

---

### 📁 Processos Seletivos

* Listagem de processos
* Status (em andamento, finalizado)
* Acesso detalhado

---

### 🧑‍💻 Portal do Candidato

* Inscrição online
* Upload de documentos
* Interface simplificada

---

### 🤖 Chat IA

* Interface estilo assistente
* Respostas baseadas no edital
* Simulação de IA contextual

---

## 🛠️ Tecnologias Utilizadas

* React / Next.js
* TailwindCSS
* TypeScript
* Axios / Fetch API
* OpenAPI Codegen

---

## ▶️ Como Executar

### 1. Instalar dependências

```bash
yarn install
```

---

### 2. Rodar projeto

```bash
yarn dev
```

---

### 3. Acessar

```bash
http://localhost:3000
```

---

## 🔁 Integração Automática

Geração de client da API:

```bash
yarn generate
```

Isso cria:

* Tipos TypeScript
* Funções de consumo da API
* Integração direta com backend

---

## 📦 Padrões Adotados

* Componentização
* Separação de camadas (UI / Services)
* Design System consistente
* Código limpo e reutilizável

---

## 📈 Evoluções Futuras

* Sistema de autenticação completo com refresh token
* Gestão de usuários via UI
* Dashboard com gráficos avançados
* Upload e preview de documentos
* Chat IA conectado ao backend real (LLM)

---

## 👨‍💻 Objetivo do Projeto

Criar uma plataforma completa de:

👉 Gestão de processos seletivos
👉 Automação com inteligência artificial
👉 Experiência moderna para usuários e candidatos

---

## 📄 Licença

Uso interno / educacional. Adaptável conforme necessidade do projeto.

---
