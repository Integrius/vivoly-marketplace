# Como Mudar as Cores do Site

## Passo a Passo Rápido

### 1. Abra o arquivo de cores
Abra o arquivo: `app/globals.css`

### 2. Encontre a seção :root
Procure pelas linhas que começam com `:root {` (aproximadamente linha 6)

### 3. Escolha uma paleta
Veja o arquivo [COLOR_PALETTES.md](./COLOR_PALETTES.md) com 8 opções de cores

### 4. Copie e Cole
Copie a paleta escolhida e substitua APENAS a linha do `--primary`

---

## Opção Rápida - Apenas Mudar a Cor Principal

Se você quiser apenas mudar a cor principal (mais fácil), edite apenas esta linha no `globals.css`:

**ENCONTRE esta linha (linha 13):**
```css
--primary: 262 83% 58%;
```

**SUBSTITUA por uma destas opções:**

### Azul Profissional
```css
--primary: 217 91% 60%;
```

### Verde Moderno
```css
--primary: 160 84% 39%;
```

### Laranja Energético
```css
--primary: 25 95% 53%;
```

### Teal Sofisticado
```css
--primary: 189 94% 43%;
```

### Índigo Premium
```css
--primary: 239 84% 67%;
```

### Rosa Criativo
```css
--primary: 330 81% 60%;
```

### Dourado Luxo
```css
--primary: 45 93% 47%;
```

---

## Visualização das Cores

### 1. Roxo (Atual)
- Cor: `#8B5CF6`
- Uso: Tech, inovação

### 2. Azul
- Cor: `#3B82F6`
- Uso: Corporativo, confiança

### 3. Verde
- Cor: `#10B981`
- Uso: Crescimento, sustentabilidade

### 4. Laranja
- Cor: `#F97316`
- Uso: Energia, criatividade

### 5. Teal
- Cor: `#06B6D4`
- Uso: Tech-luxo, sofisticado

### 6. Índigo
- Cor: `#6366F1`
- Uso: Premium, autoridade

### 7. Rosa
- Cor: `#EC4899`
- Uso: Criativo, friendly

### 8. Dourado
- Cor: `#FBBF24`
- Uso: Luxo, premium

---

## Teste Rápido

1. Abra `app/globals.css`
2. Linha 13: mude `--primary: 262 83% 58%;`
3. Cole uma das opções acima
4. Salve (Ctrl+S)
5. Veja a mudança automática no navegador!

---

## Onde a Cor Aparece?

A cor `--primary` é usada em:
- Botões principais
- Links em hover
- Destaques
- Ícones importantes
- Bordas de foco em formulários

---

## Precisa de Ajuda?

Se quiser uma paleta completamente customizada, me avise e eu crio para você!
