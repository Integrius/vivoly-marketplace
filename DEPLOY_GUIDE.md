# 🚀 Guia de Deploy - Vivoly Marketplace no Render.com

**Data:** 2026-01-05
**Status:** Pronto para deploy
**Repositório:** https://github.com/Integrius/vivoly-marketplace

---

## ✅ Pré-requisitos Completados

- [x] Código commitado e enviado para GitHub
- [x] Build de produção testado e funcionando
- [x] `render.yaml` configurado
- [x] `.env.example` documentado
- [x] Blog com 3 artigos SEO-otimizados
- [x] Schema.org estruturado implementado

---

## 📋 Passo a Passo para Deploy no Render.com

### 1. Acessar o Render.com

1. Acesse: https://render.com
2. Faça login ou crie uma conta
3. Conecte sua conta GitHub se ainda não estiver conectada

### 2. Criar Novo Web Service

1. No dashboard do Render, clique em **"New +"**
2. Selecione **"Web Service"**
3. Conecte ao repositório GitHub: **`Integrius/vivoly-marketplace`**
4. Clique em **"Connect"**

### 3. Configurar o Web Service

**Configurações Básicas:**

| Campo | Valor |
|-------|-------|
| **Name** | `vivoly-marketplace` |
| **Region** | Oregon (US West) ou escolha o mais próximo |
| **Branch** | `master` |
| **Root Directory** | (deixe vazio) |
| **Runtime** | `Node` |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` |
| **Plan** | Free (para teste) ou Starter ($7/mês) |

### 4. Configurar Variáveis de Ambiente

Clique em **"Advanced"** e adicione as seguintes **Environment Variables**:

#### Variáveis Obrigatórias:

```bash
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://vivoly-marketplace.onrender.com
```

#### Variáveis do Supabase (Obrigatórias se usar banco de dados):

```bash
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon-aqui
SUPABASE_SERVICE_ROLE_KEY=sua-service-role-key-aqui
```

**Onde encontrar as chaves do Supabase:**
1. Acesse: https://app.supabase.com
2. Selecione seu projeto
3. Vá em **Settings** → **API**
4. Copie:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** → `SUPABASE_SERVICE_ROLE_KEY` (⚠️ SECRETA)

#### Variáveis Opcionais (Analytics):

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ENABLE_ANALYTICS=true
```

### 5. Configurar Domínio Personalizado (vivoly.com.br)

#### No Render.com:

1. Após criar o serviço, vá em **"Settings"**
2. Role até **"Custom Domains"**
3. Clique em **"Add Custom Domain"**
4. Digite: `vivoly.com.br` e `www.vivoly.com.br`
5. O Render vai fornecer um endereço CNAME

#### No Cloudflare (Gerenciador de DNS):

1. Acesse: https://dash.cloudflare.com
2. Selecione o domínio **vivoly.com.br**
3. Vá em **DNS** → **Records**
4. Adicione os seguintes registros:

**Registro 1 (Root domain):**
```
Type: CNAME
Name: @
Target: vivoly-marketplace.onrender.com
Proxy status: Proxied (laranja)
TTL: Auto
```

**Registro 2 (WWW):**
```
Type: CNAME
Name: www
Target: vivoly-marketplace.onrender.com
Proxy status: Proxied (laranja)
TTL: Auto
```

5. Clique em **Save**
6. Aguarde propagação DNS (pode levar até 24h, geralmente 5-15 minutos)

#### Configurar SSL/TLS no Cloudflare:

1. Vá em **SSL/TLS** → **Overview**
2. Selecione **"Full (strict)"**
3. Vá em **SSL/TLS** → **Edge Certificates**
4. Ative **"Always Use HTTPS"**
5. Ative **"Automatic HTTPS Rewrites"**

### 6. Iniciar Deploy

1. Revise todas as configurações
2. Clique em **"Create Web Service"**
3. O Render vai automaticamente:
   - Clonar o repositório
   - Instalar dependências (`npm install`)
   - Executar build (`npm run build`)
   - Iniciar o servidor (`npm start`)

### 7. Monitorar o Deploy

1. Acompanhe os logs em tempo real no dashboard
2. O deploy inicial leva cerca de 3-5 minutos
3. Quando aparecer **"Your service is live"**, o site está no ar!

### 8. Verificar Deploy

Teste as seguintes URLs:

- ✅ **Homepage:** https://vivoly-marketplace.onrender.com
- ✅ **Blog:** https://vivoly-marketplace.onrender.com/blog
- ✅ **Artigo 1:** https://vivoly-marketplace.onrender.com/blog/como-ia-transforma-gestao-empresarial
- ✅ **Serviços:** https://vivoly-marketplace.onrender.com/services

---

## 🔧 Configurações Adicionais Recomendadas

### Health Check:

O Render vai automaticamente verificar se o serviço está funcionando através de:
- **Health Check Path:** `/` (já configurado no `render.yaml`)
- **Expected Status:** `200`

### Auto-Deploy:

Por padrão, o Render faz deploy automático a cada push no branch `master`. Para desabilitar:
1. Vá em **Settings** → **Build & Deploy**
2. Desative **"Auto-Deploy"**

### Notificações:

Configure notificações de deploy:
1. Vá em **Settings** → **Notifications**
2. Adicione seu email ou webhook do Slack

---

## 📊 Planos do Render.com

### Free Plan (Recomendado para teste):
- ✅ 750 horas/mês grátis
- ✅ SSL automático
- ✅ Deploy contínuo
- ⚠️ Serviço "dorme" após 15 min de inatividade
- ⚠️ Demora ~30s para "acordar" na primeira requisição

### Starter Plan ($7/mês):
- ✅ Sempre ativo (não dorme)
- ✅ 512 MB RAM
- ✅ Melhor para produção
- ✅ Suporte prioritário

### Professional Plan ($85/mês):
- ✅ 8 GB RAM
- ✅ Alta disponibilidade
- ✅ Múltiplas instâncias
- ✅ Para aplicações críticas

---

## 🐛 Troubleshooting

### Erro: "Build Failed"

**Problema:** O build falhou durante `npm run build`

**Solução:**
1. Verifique os logs no Render
2. Teste o build localmente: `npm run build`
3. Certifique-se que todas as dependências estão no `package.json`

### Erro: "Application failed to start"

**Problema:** O servidor não iniciou após o build

**Solução:**
1. Verifique se o comando start está correto: `npm start`
2. Verifique as variáveis de ambiente obrigatórias
3. Cheque os logs para erros específicos

### Erro: "502 Bad Gateway"

**Problema:** O Render não consegue se comunicar com a aplicação

**Solução:**
1. Verifique se a porta está configurada corretamente
2. Next.js usa porta 3000 por padrão (automático no Render)
3. Aguarde alguns minutos após o deploy

### Domínio não resolve

**Problema:** `vivoly.com.br` não aponta para o Render

**Solução:**
1. Verifique registros DNS no Cloudflare
2. Use ferramenta: https://dnschecker.org
3. Aguarde propagação (até 24h)
4. Limpe cache DNS local: `ipconfig /flushdns` (Windows) ou `sudo dscacheutil -flushcache` (Mac)

### CSS/JavaScript não carrega

**Problema:** Estilos quebrados ou JS não funciona

**Solução:**
1. Verifique variável `NEXT_PUBLIC_APP_URL` com URL correto
2. Limpe cache do navegador
3. Force rebuild no Render: **Manual Deploy** → **Deploy latest commit**

---

## 🔐 Segurança

### Variáveis de Ambiente Sensíveis:

⚠️ **NUNCA** commite no Git:
- `SUPABASE_SERVICE_ROLE_KEY`
- `SMTP_PASSWORD`
- Chaves de API

✅ **Sempre** use o painel do Render para adicionar variáveis sensíveis.

### HTTPS:

- ✅ Render fornece SSL automático via Let's Encrypt
- ✅ Cloudflare adiciona camada extra de proteção
- ✅ Sempre use **Full (strict)** no Cloudflare

---

## 📈 Monitoramento Pós-Deploy

### 1. Google Search Console

Após deploy, adicione o site:
1. Acesse: https://search.google.com/search-console
2. Adicione propriedade: `https://vivoly.com.br`
3. Verifique propriedade (método DNS via Cloudflare)
4. Envie sitemap: `https://vivoly.com.br/sitemap.xml` (implementar Item 6 SEO)

### 2. Google Analytics

1. Crie propriedade GA4
2. Adicione ID no Render: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
3. Ative: `NEXT_PUBLIC_ENABLE_ANALYTICS=true`
4. Redeploy para aplicar

### 3. Uptime Monitoring

Recomendações:
- **UptimeRobot** (gratuito): https://uptimerobot.com
- **Pingdom** (pago): https://pingdom.com
- Configure alertas para downtime

---

## ✅ Checklist Final

Antes de considerar o deploy completo:

- [ ] Site acessível via URL do Render
- [ ] Homepage carrega corretamente
- [ ] Blog funciona (`/blog`)
- [ ] Artigos individuais abrem sem erro 404
- [ ] Serviços funcionam (`/services`)
- [ ] CSS e imagens carregam
- [ ] Schema.org visível no código-fonte
- [ ] Domínio personalizado configurado (se aplicável)
- [ ] SSL ativo (cadeado verde)
- [ ] Variáveis de ambiente configuradas
- [ ] Supabase conectado (se aplicável)
- [ ] Google Analytics configurado (opcional)

---

## 📞 Suporte

**Documentação Render:** https://render.com/docs
**Documentação Next.js:** https://nextjs.org/docs
**Suporte Render:** https://render.com/support

**Status do Render:** https://status.render.com

---

## 🎉 Próximos Passos Após Deploy

1. **SEO Item 3:** Implementar Google Analytics 4 e Google Search Console
2. **SEO Item 4:** Adicionar imagens otimizadas com alt text
3. **SEO Item 5:** Desenvolver estratégia de backlinks
4. **SEO Item 6:** Criar e enviar `sitemap.xml`
5. **SEO Item 7:** Implementar `robots.txt`
6. **SEO Item 8:** Otimizar Core Web Vitals
7. **LGPD:** Implementar banner de cookies
8. **Conteúdo:** Adicionar mais 7-12 artigos ao blog

---

**Última Atualização:** 2026-01-05
**Autor:** Claude Sonnet 4.5 (Vivoly AI Team)
**Versão:** 1.0
