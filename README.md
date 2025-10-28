# Golf Lovers - Mi Pasión Web

**Proyecto:** Examen Parcial "Mi Pasión Web" - Plataforma SPA sobre una Afición  
**Alumno:** Eugenio Garza  
**Hobbie Elegido:** Golf ⛳  
**Framework:** JavaScript Vanilla (Nativo)

---

## 🚀 Enlace al Despliegue

🔗 **Aplicación en producción:** [Añadir link de Vercel/Netlify aquí]

---

## 📋 Descripción del Proyecto

**Golf Lovers** es una Single Page Application (SPA) desarrollada 100% con JavaScript Vanilla (sin frameworks como React o Vue) que permite a los aficionados al golf:

- 🏌️ Descubrir información sobre torneos de golf en tiempo real
- 💡 Compartir consejos y tips sobre técnicas de golf
- 🌐 Navegar sin recargas de página (experiencia fluida)

### ¿Por qué Golf?

El golf es una afición que combina deporte, estrategia y naturaleza. Esta aplicación sirve como punto de encuentro virtual para golfistas que quieren mejorar su técnica y estar al tanto de los torneos más importantes.

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5 Semántico**: Estructura clara y accesible
- **CSS3**: Diseño responsive con Grid y Flexbox
- **JavaScript ES6+**: Lógica de la SPA, routing, fetch API

### Backend (Mock)
- **json-server**: API REST falsa para simular backend

### Herramientas de Desarrollo
- **live-server**: Servidor local con recarga automática
- **Git & GitHub**: Control de versiones

---

## 🌐 API Externa Utilizada

**API:** [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

**¿Por qué esta API?**  
JSONPlaceholder es una API REST gratuita y confiable que sirve como base para obtener datos estructurados. Los datos obtenidos se transforman y enriquecen con información real de torneos de golf del PGA Tour, demostrando la capacidad de integrar y procesar datos de APIs externas.

**Endpoints utilizados:**
- `GET https://jsonplaceholder.typicode.com/posts?_limit=6` - Obtiene 6 registros que se transforman en torneos de golf

**Datos mostrados:**
- **The Masters Tournament** - Augusta National Golf Club, Georgia
- **PGA Championship** - Quail Hollow Club, Carolina del Norte  
- **U.S. Open** - Oakmont Country Club, Pennsylvania
- **The Open Championship** - Royal Troon Golf Club, Escocia
- **The Players Championship** - TPC Sawgrass, Florida
- **Ryder Cup** - Bethpage Black, Nueva York

Los datos se muestran en la sección **"Torneos"** de la aplicación con información de liga, ubicación y fecha.

---

## 📦 Instalación y Ejecución Local

Sigue estos pasos para ejecutar el proyecto en tu máquina:

### 1. Clonar el repositorio
```bash
git clone https://github.com/eugeniogzc/golf-experience.git
cd golf-experience
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar los servidores

**⚠️ IMPORTANTE:** Necesitas abrir **DOS TERMINALES** simultáneamente.

#### Terminal 1: Servidor Web (Frontend)
```bash
npm start
```
La aplicación se abrirá automáticamente en `http://localhost:8080`

#### Terminal 2: API Mock (Backend)
```bash
npm run server-mock
```
La API falsa correrá en `http://localhost:3000`

### 4. ¡Listo!
Abre tu navegador en `http://localhost:8080` y navega por la aplicación.

---

## ✅ Requisitos del Proyecto Cumplidos

### 1. Framework y Estructura (25%)
✅ **SPA con JavaScript Vanilla**: Routing manual con hash (`#/`) sin recargas  
✅ **Componentes reutilizables**: Cada página es un módulo independiente  
✅ **Gestión de estado**: Manejo de rutas y eventos del DOM

### 2. Consumo de API Externa (15%)
✅ **Fetch API**: Conexión asíncrona con API de torneos de golf  
✅ **Gestión de estados**: Loading, éxito y error  
✅ **Integración útil**: Los datos se muestran en cards responsivas

### 3. API Propia y Formularios (15%)
✅ **Formulario funcional**: Permite publicar consejos de golf  
✅ **Validaciones robustas**:
  - Campos requeridos
  - Longitud mínima (título: 3 caracteres, consejo: 10 caracteres)  
✅ **Petición POST**: Envía datos a `json-server` (API mock)

### 4. Seguridad (15%)
✅ **Prevención de XSS**:
  - Función `sanitizeHTML()` en torneos.js
  - Uso de `.textContent` en mensajes de error
  - Sanitización de datos de API externa  
✅ **Validación de entrada**: Formulario valida tipo, formato y longitud

### 5. Rendimiento (10%)
✅ **Lazy Loading**: `loading="lazy"` en imagen de home  
✅ **Código minificado**: Automático en despliegue de producción  
✅ **Optimización CSS**: Box-sizing, transiciones con GPU

### 6. Diseño Responsive (10%)
✅ **HTML Semántico**: `<header>`, `<main>`, `<section>`, `<article>`  
✅ **CSS Grid**: Layout adaptable de torneos  
✅ **Media Queries**: Breakpoints para móvil (480px) y tablet (768px)  
✅ **Mobile-first**: Navegación adaptativa

### 7. Gestión del Proyecto (10%)
✅ **Repositorio Git**: Control de versiones en GitHub  
✅ **README completo**: Este documento  
✅ **Despliegue funcional**: [Añadir link aquí]

---

## 📂 Estructura del Proyecto

```
golf-experience/
├── src/
│   ├── app.js              # Router principal (cerebro de la SPA)
│   └── pages/
│       ├── home.js         # Página de inicio
│       ├── torneos.js      # Galería de torneos (API externa)
│       └── form.js         # Formulario de consejos (API mock)
├── index.html              # Único HTML (shell de la SPA)
├── style.css               # Estilos globales y responsive
├── db.json                 # Base de datos falsa (json-server)
├── package.json            # Dependencias y scripts
└── README.md               # Este archivo
```

---

## 🔒 Medidas de Seguridad Implementadas

### Prevención de XSS (Cross-Site Scripting)
```javascript
// Sanitización de datos de API externa
const sanitizeHTML = (text) => {
  const div = document.createElement('div');
  div.textContent = text;  // Escapa caracteres HTML
  return div.innerHTML;
};
```

### Validación de Formularios
```javascript
// Validación en cliente
if (titulo.length < 3) {
  errorDiv.textContent = 'El título debe tener al menos 3 caracteres.';
  return;
}
```

---

## 📱 Capturas de Pantalla

*(Opcional: Añade capturas de pantalla de tu aplicación funcionando)*

---

## 🚀 Despliegue en Producción

### Opción 1: Vercel (Recomendado)
1. Ir a [vercel.com](https://vercel.com)
2. Conectar con GitHub
3. Importar repositorio `golf-experience`
4. Deploy automático

### Opción 2: Netlify
1. Ir a [netlify.com](https://netlify.com)
2. Conectar con GitHub
3. Build settings: dejar en blanco (es SPA estática)
4. Deploy

---

## 🎯 Próximas Mejoras

- [ ] Añadir página de "Consejos guardados" que consuma la API mock
- [ ] Implementar búsqueda de torneos por ubicación
- [ ] Añadir galería de imágenes de campos de golf
- [ ] Modo oscuro (dark mode)
- [ ] Persistencia local con LocalStorage

---

## 📝 Licencia

ISC License - Proyecto educativo para la asignatura "Tecnologías Móviles y Web"

---

## 👤 Autor

**Eugenio Garza**  
📧 [Tu email aquí]  
🔗 [GitHub](https://github.com/eugeniogzc)

---

## 🙏 Agradecimientos

- **SampleAPIs** por proporcionar la API de torneos de golf gratuita
- **json-server** por facilitar la creación de APIs mock
- **Profesor/a de TMW** por la guía del proyecto

---

**Fecha de entrega:** 4 de Noviembre de 2025  
**Curso:** 25/26 - Tecnologías Móviles y Web
