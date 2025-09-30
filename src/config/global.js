export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Análisis y especificación de requisitos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Análisis de requisitos funcionales y no funcionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto y clasificación de los requisitos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Requisitos funcionales: definición y ejemplos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Requisitos no funcionales: definición y ejemplos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Documentación de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Importancia de la documentación de requisitos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Estructura de un documento de requisitos de software (SRS)',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Lenguaje y estilo en la documentación de requisitos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Herramientas para la documentación de requisitos',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Plantillas y estándares para documentación',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo:
              'Mantenimiento y gestión de cambios en los documentos de requisitos',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Águila Cano, I. M. D. (2022). Fundamentos de ingeniería de los requisitos. Editorial Universidad de Almería.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/280517',
    },
    {
      referencia:
        'Sommerville, I. (2011). Ingeniería de software (9ª ed.). Pearson Educación de México.',
      link:
        'https://gc.scalahed.com/recursos/files/r161r/w24792w/IRADS/INGRequisitos.pdf#:~:text=Recurso%20Educativo%20Abierto%20en,de%20Ingenier%C3%ADa%20del%20Software',
    },
    {
      referencia:
        'Genero Bocco, M., Cruz Lemus, J. A. & Piattini Velthuis, M. G. (2014). Métodos de investigación en ingeniería del software. RA-MA Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/106450',
    },
    {
      referencia:
        'Conesa Caralt, J. & Casas Roma, J. (2014). Diseño conceptual de bases de datos en UML. Editorial UOC.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/57635',
    },
    {
      referencia:
        'Echeverri, J., Aristizábal, M. & González, L. (2013). Reflexiones sobre ingeniería de requisitos y pruebas de software. Corporación Universitaria Remington.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/68913',
    },
    {
      referencia:
        'Quintero, J. B. (2006). Un estudio comparativo de herramientas para el modelado con UML. Red Universidad Eafit.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/5285',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de requisitos',
      significado:
        'Proceso sistemático mediante el cual se identifican, clasifican y comprenden las necesidades del usuario y del sistema, con el fin de transformarlas en especificaciones claras y viables para el desarrollo del software.',
    },
    {
      termino: 'Cambio de requisitos',
      significado:
        'Modificación o ajuste realizado a uno o más requisitos ya documentados, motivado por factores como cambios en el negocio, descubrimiento de errores o retroalimentación de los usuarios.',
    },
    {
      termino: 'Criterios de aceptación',
      significado:
        'Condiciones específicas y verificables que debe cumplir un requisito para considerarse completo, funcional y alineado con las expectativas del cliente o del usuario final.',
    },
    {
      termino: 'Documento de Requisitos de Software (SRS)',
      significado:
        'Documento formal que detalla de manera estructurada, todos los requisitos del sistema, tanto funcionales como no funcionales, sirviendo como referencia principal para el desarrollo, validación y mantenimiento del producto.',
    },
    {
      termino: 'Lenguaje natural controlado',
      significado:
        'Forma de redacción utilizada en la documentación de requisitos que busca combinar la claridad del lenguaje común, con restricciones gramaticales para evitar ambigüedades y malentendidos.',
    },
    {
      termino: 'MoSCoW',
      significado:
        'Técnica de priorización que clasifica los requisitos en cuatro categorías: Must have (debe tener), Should have (debería tener), Could have (podría tener) y Won’t have (no se tendrá por ahora), facilitando la toma de decisiones ágiles.',
    },
    {
      termino: 'Priorización de requisitos',
      significado:
        'Actividad orientada a ordenar los requisitos, según su valor, urgencia, impacto o viabilidad, con el fin de gestionar eficazmente su implementación dentro de los recursos y el tiempo disponibles.',
    },
    {
      termino: 'Requisito funcional',
      significado:
        'Característica o comportamiento que el sistema debe ejecutar, como tareas, cálculos o interacciones específicas, y que responde directamente a una necesidad expresada por el usuario.',
    },
    {
      termino: 'Requisito no funcional',
      significado:
        'Restricción o condición de calidad que debe cumplir el sistema, como seguridad, rendimiento, usabilidad o compatibilidad, y que influye en cómo se ejecutan los requisitos funcionales.',
    },
    {
      termino: 'Stakeholders (interesados)',
      significado:
        'Personas o entidades que tienen interés en el sistema, como usuarios, clientes, desarrolladores o patrocinadores, y cuya participación es clave para identificar, validar y priorizar los requisitos.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad de seguir el rastro de cada requisito desde su origen hasta su implementación y prueba, lo cual permite controlar el impacto de los cambios y verificar que se cumplan todos los objetivos del proyecto.',
    },
    {
      termino: 'Validación de requisitos',
      significado:
        'Proceso mediante el cual se comprueba que los requisitos documentados representan fielmente las necesidades reales de los usuarios y que son comprensibles, completos y coherentes.',
    },
  ],
}
