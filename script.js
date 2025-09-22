function mostrarContenido(tipo) {
  const contenedor = document.getElementById('contenido-especialidad');
  const contenidos = {
    nutricion: 'Plan nutricional integral multidisciplinario con apoyo médico y psicológico.',
    linfo: 'Tratamientos para varices, arañitas y diagnóstico linfático.',
    dermato: 'Soluciones estéticas para piel, rejuvenecimiento y cuidado dermatológico.',
    prp: 'Aplicación de plasma rico en plaquetas para regeneración celular.',
    sexologia: 'Consultas sobre disfunción eréctil, deseo sexual y salud íntima.',
    tratamientos: 'Mesoterapia, lifting, test de Helicobacter y más.'
  };

  contenedor.textContent = contenidos[tipo] || 'Contenido no disponible.';
  contenedor.style.display = 'block';
}
