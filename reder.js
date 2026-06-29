const services = [
  {
    number: '01',
    title: 'Compra de propiedades',
    description: 'Busqueda enfocada en tus objetivos, analisis de alternativas y acompanamiento hasta la firma.',
    wide: false
  },
  {
    number: '02',
    title: 'Venta de propiedades',
    description: 'Estrategia comercial, presentacion profesional, difusion y seguimiento de interesados calificados.',
    wide: false
  },
  {
    number: '03',
    title: 'Tasaciones',
    description: 'Valoracion responsable con referencias del mercado y una lectura realista de la demanda.',
    wide: false
  },
  {
    number: '04',
    title: 'Inversiones inmobiliarias',
    description: 'Asesoramiento para detectar oportunidades, comparar retornos y tomar decisiones informadas.',
    wide: false
  },
  {
    number: '05',
    title: 'Asesoramiento personalizado',
    description: 'Un proceso claro, cercano y profesional para resolver dudas, ordenar documentacion y avanzar con tranquilidad.',
    wide: true
  }
];

const properties = [
  {
    ID: 1,
    image: './fotosprop/casatunuyan.jpeg',
    alt: 'Casa moderna en Mendoza',
    price: 'USD 170.000',
    title: 'Casa familiar en Tunuyan',
    location: 'Centro, Tunuyan ',
    details: ['3 dormitorios', '192 m2 cubiertos', 'Terreno 343 m2']
  },
  {
    ID: 2,
    image: './fotosprop/barriobancario.jpeg',
    alt: 'Casa Barrio Bancario GC',
    price: 'USD 75.000',
    title: 'Punto estrategico en Godoy Cruz',
    location: 'Godoy Cruz, Mendoza',
    details: ['2 dormitorios', '126 m2 cubiertos', 'Terreno 227 m2']
  },
  {
    ID: 3,
    image: './fotosprop/terreno.jpeg',
    alt: 'Terreno en Barrio privado de Maipu',
    price: 'USD 19.000',
    title: 'Lote residencial',
    location: 'Maipu, Mendoza',
    details: ['Proyecto familiar', 'Terreno 500 m2']
  },
  {
    ID: 4,
    image: './fotosprop/casacarrizal.jpeg',
    alt: 'Casa Fin de semana en El Carrizal',
    price: 'USD 40.000',
    title: 'Casa familiar o fin de semana',
    location: 'B° Puerta del Sol , El Carrizal ',
    details: ['2 dormitorios', '140 m2 cubiertos', 'Terreno 500 m2']
  },
  {
    ID: 5,
    image: './fotosprop/finca.jpeg',
    alt: 'Finca En lunlunta',
    price: 'USD 255.000',
    title: 'Finca activa, apta para desarrollo inmobiliario',
    location: 'Lunlunta, Maipu, Mendoza',
    details: ['Terreno 38.413 m2']
  },
  {
    ID: 6,
    image: './fotosprop/complejonorma.jpeg',
    alt: 'Complejo Cabañas',
    price: 'USD 195.000',
    title: 'Complejo de cabañas con fondo de comercio',
    location: 'El Carrizal,Lujan, Mendoza',
    details: ['Financiacion', 'Permutas', 'aprox. 250 m2 cubiertos', 'Terreno 2.200 m2']
  }
];

const testimonials = [
  {
    text: 'Maria Teresa nos guio con mucha paciencia. La venta fue ordenada, clara y siempre supimos como avanzaba cada etapa.',
    author: 'Laura M.'
  },
  {
    text: 'Nos ayudo a encontrar una propiedad que realmente tenia sentido para nuestra familia y nuestro presupuesto.',
    author: 'Federico R.'
  },
  {
    text: 'Excelente predisposicion, comunicacion clara y una gestion muy profesional de principio a fin.',
    author: 'Claudia S.'
  }
];

const renderServices = () => {
  const servicesGrid = document.querySelector('.services__grid');
  if (!servicesGrid) return;

  servicesGrid.innerHTML = services.map(({ number, title, description, wide }) => `
    <article class="service-card reveal${wide ? ' service-card--wide' : ''}">
      <span aria-hidden="true">${number}</span>
      <h3>${title}</h3>
      <p>${description}</p>
    </article>
  `).join('');
};

const renderProperties = () => {
  const propertiesGrid = document.querySelector('.properties__grid');
  if (!propertiesGrid) return;

  propertiesGrid.innerHTML = properties.map(({ image, alt, price, title, location, details }) => `
    <article class="property-card reveal">
      <img src="${image}" alt="${alt}" loading="lazy" width="900" height="650">
      <div class="property-card__body">
        <span class="price">${price}</span>
        <h3>${title}</h3>
        <p>${location}</p>
        <ul>
          ${details.map((detail) => `<li>${detail}</li>`).join('')}
        </ul>
        <a class="text-link" href="#contacto">Ver detalles</a>
      </div>
    </article>
  `).join('');
};

const renderTestimonials = () => {
  const testimonialsGrid = document.querySelector('.testimonials__grid');
  if (!testimonialsGrid) return;

  testimonialsGrid.innerHTML = testimonials.map(({ text, author }) => `
    <article class="testimonial-card reveal">
      <div class="stars" aria-label="5 estrellas">★★★★★</div>
      <p>"${text}"</p>
      <strong>${author}</strong>
    </article>
  `).join('');
};

const initRenderer = () => {
  renderServices();
  renderProperties();
  renderTestimonials();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRenderer);
} else {
  initRenderer();
}
