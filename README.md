# WZ — Link na Bio

Página estática (HTML5 + CSS3 + JavaScript puro) para usar como link na bio do Instagram da WZ. Sem backend, sem banco de dados, sem login.

## Estrutura de arquivos

```
index.html
css/styles.css
js/script.js
assets/logo/        (logo WZ)
assets/produtos/    (fotos dos produtos da coleção Tomadas Veiculares)
```

## Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub (ex: `wz-link-bio`).
2. Suba todos os arquivos desta pasta para a raiz do repositório.
3. No repositório, vá em **Settings → Pages**.
4. Em "Branch", selecione `main` (ou `master`) e a pasta `/root`, depois clique em **Save**.
5. Em alguns minutos o GitHub Pages vai gerar um link do tipo `https://seu-usuario.github.io/wz-link-bio/` — esse é o link para colocar na bio do Instagram.

## Editar conteúdo depois

- **Produtos da coleção**: cada produto está em `index.html`, dentro de `<section id="screen-collection">`, como um bloco `<a class="product-card">...</a>`. Basta trocar imagem, nome e link.
- **Links de compra / WhatsApp**: estão na seção `#onde-comprar` e no `<footer class="footer">` do `index.html`.
- **Cores**: estão centralizadas no topo do arquivo `css/styles.css`, nas variáveis `--bg`, `--blue`, etc.
