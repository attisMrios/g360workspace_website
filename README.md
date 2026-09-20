# G360 Workspace — sitio de producto

Sitio público de **G360 Workspace 4.0**, el ERP de [G360co](https://g360co.com).

- Dominio: https://g360workspace.com
- Hosting: Firebase Hosting (misma mecánica que `g360co-website` y `acquahills-website`)

El sitio corporativo permanece en **g360co.com**. Este repo vende y explica el producto.

## Estructura

```
g360workspace_website/
├── firebase.json
├── .firebaserc
├── public/
│   ├── index.html
│   ├── 404.html
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── css/styles.css
│   ├── js/main.js
│   ├── assets/logo.png
│   ├── caracteristicas/
│   ├── propiedad-horizontal/
│   └── privacidad/
└── README.md
```

## Vista local

```bash
npx --yes serve public -l 5180
```

Abre http://localhost:5180 (usa un puerto libre; 4173 suele estar ocupado por el sitio de g360co.com).

## Firebase Hosting

1. El proyecto de Firebase Hosting es `g360workspace-website` (el ID `g360workspace` ya estaba ocupado).
2. Inicia sesión y despliega:

```bash
firebase login
firebase use g360workspace-website
firebase deploy --only hosting
```

3. En Firebase Hosting, conecta el dominio personalizado **g360workspace.com** (y `www` si aplica) y espera el certificado SSL.

## Contenido

- Home: ERP con contabilidad al centro, ecosistema y demo.
- `/caracteristicas/`: módulos del producto.
- `/propiedad-horizontal/`: vertical de copropiedades y app de residentes, sin presentarlo como el único producto.
- Formulario de contacto: Web3Forms (misma clave operativa que g360co.com).

## Relación con otros repos

| Repo | Rol |
|------|-----|
| Gestion360PH | ERP web / escritorio |
| gestion360ph_backend | API NestJS |
| G360ph | App móvil (residentes / autogestión) |
| g360co-website | Sitio corporativo |
