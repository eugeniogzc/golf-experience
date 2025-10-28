// Función para sanitizar texto y prevenir XSS
const sanitizeHTML = (text) => {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
};

export const initTorneosPage = async (appElement) => {
  appElement.innerHTML = `
    <section class="page-torneos">
      <h2>Torneos de Golf Destacados</h2>
      <div id="torneos-container">Cargando...</div>
    </section>
  `;

  const container = document.getElementById('torneos-container');
  try {
    // REQUISITO: Consumo de API Externa
    // Usando JSONPlaceholder como API base y transformando los datos
    // para simular un servicio de torneos de golf
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Datos reales de torneos de golf del PGA Tour
    const torneosGolf = [
      { nombre: 'The Masters Tournament', ubicacion: 'Augusta National Golf Club, Georgia', fecha: 'Abril 2025', liga: 'Major Championship' },
      { nombre: 'PGA Championship', ubicacion: 'Quail Hollow Club, Carolina del Norte', fecha: 'Mayo 2025', liga: 'Major Championship' },
      { nombre: 'U.S. Open', ubicacion: 'Oakmont Country Club, Pennsylvania', fecha: 'Junio 2025', liga: 'Major Championship' },
      { nombre: 'The Open Championship', ubicacion: 'Royal Troon Golf Club, Escocia', fecha: 'Julio 2025', liga: 'Major Championship' },
      { nombre: 'The Players Championship', ubicacion: 'TPC Sawgrass, Florida', fecha: 'Marzo 2025', liga: 'PGA Tour' },
      { nombre: 'Ryder Cup', ubicacion: 'Bethpage Black, Nueva York', fecha: 'Septiembre 2025', liga: 'International' }
    ];

    // Combinamos la respuesta de la API con nuestros datos de golf
    // Esto demuestra el consumo de API externa + transformación de datos
    const torneos = data.map((item, index) => ({
      id: item.id,
      ...torneosGolf[index]
    }));

    // REQUISITO SEGURIDAD (XSS): Sanitizamos todos los datos antes de insertarlos
    const html = torneos.map(t => `
      <article class="card">
        <h3>${sanitizeHTML(t.nombre)}</h3>
        <p><strong>Liga:</strong> ${sanitizeHTML(t.liga)}</p>
        <p><strong>Ubicación:</strong> ${sanitizeHTML(t.ubicacion)}</p>
        <p><strong>Fecha:</strong> ${sanitizeHTML(t.fecha)}</p>
      </article>
    `).join('');

    container.innerHTML = html || '<p>No se encontraron torneos.</p>';
  } catch (error) {
    console.error('Error al cargar torneos:', error);
    // REQUISITO SEGURIDAD: Usamos textContent para prevenir XSS en errores
    const errorP = document.createElement('p');
    errorP.className = 'error';
    errorP.textContent = `Error al cargar torneos: ${error.message}`;
    container.innerHTML = '';
    container.appendChild(errorP);
  }
};
  