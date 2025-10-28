const handleFormSubmit = async (event) => {
  // 1. Evita que la página se recargue
  event.preventDefault();
  const form = event.target;
  const errorDiv = document.getElementById('error-msg');
  
  // 2. REQUISITO SEGURIDAD: Validación de cliente
  const titulo = form.titulo.value.trim();
  const consejo = form.consejo.value.trim();
  
  // Validación de campos vacíos
  if (!titulo || !consejo) {
    // REQUISITO SEGURIDAD: Usamos textContent para prevenir XSS
    errorDiv.textContent = 'Por favor completa todos los campos.';
    return;
  }
  
  // Validación de longitud mínima
  if (titulo.length < 3) {
    errorDiv.textContent = 'El título debe tener al menos 3 caracteres.';
    return;
  }
  
  if (consejo.length < 10) {
    errorDiv.textContent = 'El consejo debe tener al menos 10 caracteres.';
    return;
  }
  
  try {
    const response = await fetch('http://localhost:3000/consejos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ titulo, consejo })
    });
    
    if (!response.ok) {
      throw new Error('Error al guardar el consejo en el servidor.');
    }
    
    // Éxito
    alert('¡Consejo publicado con éxito!');
    form.reset();
    errorDiv.textContent = '';
    window.location.hash = '#/';
  } catch (err) {
    console.error('Error al enviar el formulario:', err);
    errorDiv.textContent = `Error: ${err.message}`;
  }
};
  
  export const initFormPage = (appElement) => {
    appElement.innerHTML = `
      <section class="page-form">
        <h2>Publica tu consejo de Golf</h2>
        <form id="consejo-form">
          <div class="form-group">
            <label for="titulo">Título</label>
            <input type="text" id="titulo" name="titulo" required />
          </div>
          <div class="form-group">
            <label for="consejo">Consejo</label>
            <textarea id="consejo" name="consejo" required></textarea>
          </div>
          <div id="error-msg" class="error"></div>
          <button type="submit">Publicar</button>
        </form>
      </section>
    `;
  
    document.getElementById('consejo-form').addEventListener('submit', handleFormSubmit);
  };
  