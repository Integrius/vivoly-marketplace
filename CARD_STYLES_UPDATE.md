# Atualização de Estilos dos Cards

## Mudanças Implementadas

### 1. Bordas Arredondadas
- **Antes:** `rounded-lg` (8px padrão)
- **Depois:** `rounded-card` (10px)

### 2. Sombras Customizadas
Criadas 3 classes de sombra personalizadas:

#### `card-shadow` (Sombra Sutil)
```css
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03);
```
- Uso: Cards em estado normal
- Efeito: Sombra leve e discreta

#### `card-shadow-hover` (Sombra no Hover)
```css
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.05);
```
- Uso: Cards ao passar o mouse (hover)
- Efeito: Sombra média para elevação

#### `card-shadow-lg` (Sombra Grande)
```css
box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.06);
```
- Uso: CTAs, formulários, elementos destacados
- Efeito: Sombra forte para máximo destaque

---

## Arquivos Atualizados

### Configuração
- ✅ `tailwind.config.ts` - Adicionado `borderRadius.card: "10px"`
- ✅ `app/globals.css` - Adicionadas classes de sombra customizadas

### Páginas
- ✅ `app/(marketplace)/page.tsx` - Homepage com cards de serviços
- ✅ `app/(marketplace)/services/page.tsx` - Listagem de serviços
- ✅ `app/(marketplace)/services/[slug]/page.tsx` - Detalhes do serviço

### Componentes
- ✅ `components/marketplace/Header.tsx` - Botão CTA
- ✅ `components/marketplace/ServiceRequestForm.tsx` - Formulário e inputs
- ✅ `components/marketplace/Footer.tsx` - (se houver cards)

---

## Padrão de Uso

### Cards de Serviço
```tsx
<div className="border border-border rounded-card p-6 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-200">
  {/* Conteúdo */}
</div>
```

### Cards de Informação (Metadata)
```tsx
<div className="border-2 border-border rounded-card card-shadow p-6 hover:border-primary transition-colors">
  {/* Conteúdo */}
</div>
```

### Seções CTA (Call-to-Action)
```tsx
<section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-card p-12 text-center card-shadow-lg">
  {/* Conteúdo */}
</section>
```

### Formulários e Inputs
```tsx
<input className="w-full px-3 py-2 border border-border rounded-card focus:outline-none focus:ring-2 focus:ring-primary" />
```

### Sidebar / Sticky Cards
```tsx
<div className="border-2 border-border rounded-card p-6 bg-card card-shadow-lg">
  {/* Conteúdo */}
</div>
```

---

## Benefícios

1. **Visual Consistente:** Todos os cards agora têm 10px de border-radius
2. **Sombras Suaves:** Sombras personalizadas com opacidade reduzida
3. **Melhor UX:** Efeito hover mais profissional
4. **Fácil Manutenção:** Classes reutilizáveis via Tailwind

---

## Visualização

### Antes
- Bordas: 8px (rounded-lg)
- Sombras: Padrão do Tailwind (muito escuras)

### Depois
- Bordas: 10px (rounded-card)
- Sombras: Customizadas (sutis e elegantes)

---

**Data da Atualização:** 2026-01-04
**Status:** ✅ Implementado e Testado
