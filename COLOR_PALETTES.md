# Opções de Paleta de Cores - Vivoly Marketplace

## Como Aplicar as Cores

Copie as variáveis CSS da paleta escolhida e substitua no arquivo `app/globals.css` dentro da seção `:root`.

---

## Paleta 1: Purple Tech (Atual - Roxo Vibrante)
**Personalidade:** Inovador, moderno, tech-forward

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 262 83% 58%;          /* Roxo vibrante */
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;
}
```

---

## Paleta 2: Ocean Blue (Azul Profissional)
**Personalidade:** Confiável, profissional, corporativo

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 217 91% 60%;           /* Azul oceano */
  --primary-foreground: 0 0% 100%;
  --secondary: 214 95% 93%;
  --secondary-foreground: 217 91% 20%;
  --accent: 210 100% 95%;
  --accent-foreground: 217 91% 20%;
}
```

**Cores hex de referência:**
- Primary: `#3B82F6` (Azul)
- Secondary: `#DBEAFE` (Azul claro)

---

## Paleta 3: Emerald Fresh (Verde Moderno)
**Personalidade:** Crescimento, inovação, sustentabilidade

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 160 84% 39%;           /* Verde esmeralda */
  --primary-foreground: 0 0% 100%;
  --secondary: 152 76% 93%;
  --secondary-foreground: 160 84% 15%;
  --accent: 152 76% 95%;
  --accent-foreground: 160 84% 20%;
}
```

**Cores hex de referência:**
- Primary: `#10B981` (Verde esmeralda)
- Secondary: `#D1FAE5` (Verde claro)

---

## Paleta 4: Sunset Orange (Laranja Energético)
**Personalidade:** Energia, criatividade, ousadia

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 25 95% 53%;            /* Laranja vibrante */
  --primary-foreground: 0 0% 100%;
  --secondary: 25 100% 95%;
  --secondary-foreground: 25 95% 20%;
  --accent: 25 100% 97%;
  --accent-foreground: 25 95% 25%;
}
```

**Cores hex de referência:**
- Primary: `#F97316` (Laranja)
- Secondary: `#FFEDD5` (Laranja claro)

---

## Paleta 5: Midnight Teal (Azul-Verde Sofisticado)
**Personalidade:** Sofisticado, premium, tech-luxo

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 189 94% 43%;           /* Teal profundo */
  --primary-foreground: 0 0% 100%;
  --secondary: 189 100% 95%;
  --secondary-foreground: 189 94% 15%;
  --accent: 189 100% 97%;
  --accent-foreground: 189 94% 20%;
}
```

**Cores hex de referência:**
- Primary: `#06B6D4` (Cyan/Teal)
- Secondary: `#CFFAFE` (Cyan claro)

---

## Paleta 6: Royal Indigo (Índigo Premium)
**Personalidade:** Premium, confiança, autoridade

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 239 84% 67%;           /* Índigo real */
  --primary-foreground: 0 0% 100%;
  --secondary: 239 100% 95%;
  --secondary-foreground: 239 84% 20%;
  --accent: 239 100% 97%;
  --accent-foreground: 239 84% 25%;
}
```

**Cores hex de referência:**
- Primary: `#6366F1` (Índigo)
- Secondary: `#E0E7FF` (Índigo claro)

---

## Paleta 7: Rose Elegant (Rosa Moderno)
**Personalidade:** Criativo, moderno, friendly

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 330 81% 60%;           /* Rosa vibrante */
  --primary-foreground: 0 0% 100%;
  --secondary: 330 100% 95%;
  --secondary-foreground: 330 81% 20%;
  --accent: 330 100% 97%;
  --accent-foreground: 330 81% 25%;
}
```

**Cores hex de referência:**
- Primary: `#EC4899` (Rosa)
- Secondary: `#FCE7F3` (Rosa claro)

---

## Paleta 8: Dark Mode Friendly (Preto e Dourado)
**Personalidade:** Luxo, premium, exclusivo

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 9%;
  --primary: 45 93% 47%;            /* Dourado */
  --primary-foreground: 0 0% 9%;
  --secondary: 45 100% 95%;
  --secondary-foreground: 0 0% 9%;
  --accent: 45 100% 97%;
  --accent-foreground: 0 0% 9%;
}
```

**Cores hex de referência:**
- Primary: `#FBBF24` (Dourado)
- Foreground: `#171717` (Preto suave)

---

## Como Aplicar

1. Escolha uma paleta acima
2. Copie o bloco de código CSS
3. Abra o arquivo `app/globals.css`
4. Substitua as variáveis dentro de `:root` (linhas 6-32)
5. Salve o arquivo
6. O navegador recarregará automaticamente com as novas cores

## Recomendações por Setor

- **Tech/SaaS:** Paletas 1, 2, 5, 6
- **Criativo/Design:** Paletas 4, 7
- **Corporativo:** Paletas 2, 6, 8
- **Sustentabilidade:** Paleta 3
- **Premium/Luxo:** Paleta 8

## Dark Mode

Todas as paletas têm suporte a dark mode. As cores em `.dark` no arquivo `globals.css` se ajustam automaticamente.
