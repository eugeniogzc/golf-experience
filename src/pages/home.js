export const initHomePage = (appElement) => {
  appElement.innerHTML = `
    <section class="page-home">
      <h2>Bienvenido a Golf Lovers ⛳</h2>
      <p>Descubre el mundo del golf, sus torneos y comparte tus mejores consejos.</p>
      <!-- REQUISITO RENDIMIENTO: loading="lazy" para optimización -->
      <img 
        src="https://www.spain-sothebysrealty.com/cdn-cgi/image/format=auto,width=768,height=463,fit=cover,quality=95/https://spain-sir-assets.s3.eu-west-1.amazonaws.com/8e5c9839-80da-4111-9596-06dbda97e586.jpg" 
        alt="Campo de golf" 
        loading="lazy"
      />
    </section>
  `;
};
  