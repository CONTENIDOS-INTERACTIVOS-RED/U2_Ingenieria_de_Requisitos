<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Documentación de requisitos'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-5
        .col-lg-4.order-lg-2.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema4/1.png", data-aos="zoom-in")
        .col-lg-8.order-lg-1
          p.mb-5(data-aos="fade-left") La documentación de requisitos constituye una fase esencial en el desarrollo de <em>software</em>, porque permite registrar de forma estructurada, clara y accesible las necesidades y expectativas del cliente. Su propósito principal es facilitar la comunicación entre los distintos actores del proyecto, asegurar la trazabilidad de lo acordado y establecer una base firme para el diseño, la implementación y las pruebas del sistema (Conesa Caralt & Casas Roma, 2014).
      
          .bg-color-4.p-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema4/2.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Durante esta etapa, el analista de requisitos organiza y transforma la información recolectada mediante técnicas previas (entrevistas, observación, talleres, etc.) en artefactos formales, que guían al equipo de desarrollo. Esta documentación reduce ambigüedades y previene malentendidos a lo largo del ciclo de vida del <em>software</em>.
  
      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Importancia de la documentación de requisitos
      
      p La documentación de requisitos cumple un papel fundamental para el éxito del proyecto de <em>software</em>, debido a que no solo recoge lo que el cliente espera del sistema, sino que también proporciona una referencia objetiva y verificable que sirve de guía para todos los implicados (Conesa Caralt & Casas Roma, 2014). Cuando los requisitos están bien documentados, se promueve una comprensión compartida entre analistas, diseñadores, desarrolladores y testers. Esto reduce el riesgo de errores, omisiones o interpretaciones equivocadas.
      p.mb-5 Por ejemplo, en un sistema de gestión hospitalaria:
  
      .row.mb-5
        .col-lg-4.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema4/3.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-2.p-4.mb-3(data-aos="fade-left")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Un requisito funcional documentado podría ser: "El sistema debe permitir el registro de pacientes por parte del personal administrativo".
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Un requisito no funcional asociado sería: "El sistema debe tener una disponibilidad del 99.9 % mensual".
          p(data-aos="fade-left") Contar con estos elementos claramente definidos, permite establecer un marco de trabajo medible. En su ausencia, podrían implementarse funcionalidades incompletas o con estándares de calidad insuficientes. Además, esta documentación sirve como punto de partida para varias actividades clave del proyecto, como:
      
      .bg-full-width.bg-color-5
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-3.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema4/4.png" alt="")
                .custom-image-card__text.p-4
                  p.mb-0 La validación y verificación de requisitos.
            .col-lg-3.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema4/5.png" alt="")
                .custom-image-card__text.p-4
                  p.mb-0 La planificación técnica y de recursos.
            .col-lg-3.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema4/6.png" alt="")
                .custom-image-card__text.p-4
                  p.mb-0 El diseño arquitectónico y técnico.
            .col-lg-3.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema4/7.png" alt="")
                .custom-image-card__text.p-4
                  p.mb-0 La gestión de cambios durante el desarrollo.
      
      .bg-color-3.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto.order-2
            figure
              img(src='@/assets/curso/tema4/8.png', alt='')
          .col-lg.order-1.mb-3.mb-lg-0
            .p-4
              p.mb-0.text-white(data-aos="fade-up") También cobra especial relevancia en entornos regulados o auditables, debido a que actúa como evidencia formal de las decisiones tomadas y los compromisos asumidos (Genero Bocco et al., 2014). En síntesis, documentar adecuadamente los requisitos garantiza la alineación entre las expectativas del cliente y el producto final, y funciona como una herramienta central de control y aseguramiento de la calidad durante todo el ciclo de vida del <em>software</em>.
      
      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Estructura de un documento de requisitos de <em>software</em> (SRS)
      
      p.mb-5 El documento de requisitos de <em>software</em> o <em>software</em> Requirements Specification (SRS), se diseña para organizar de manera clara, lógica y completa, toda la información relativa al comportamiento y las restricciones del sistema que se desea desarrollar. Este documento funciona como un contrato técnico entre los clientes, usuarios y el equipo de desarrollo, y su correcta elaboración permite reducir ambigüedades, prevenir malentendidos y facilitar el diseño, la implementación y las pruebas (Genero Bocco et al., 2014). Los elementos principales del SRS son: 
  
      .row.align-items-start.mb-5
        .col-lg-4.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema4/9.png", alt="").mb-4.mb-lg-0
        .col-lg-8
      
          AcordionA(tipo="b")
            .div(titulo="Introducción")
              p Define el propósito del sistema, su alcance, las siglas utilizadas y un resumen de documentos relacionados. Por ejemplo, en una app de reservas de restaurantes, se especifica que está dirigida, tanto a usuarios como a establecimientos gastronómicos.
      
            .div(titulo="Descripción general del sistema")
              p Ofrece una visión de alto nivel sobre la funcionalidad del sistema, su entorno operativo (como plataformas móviles o web), limitaciones técnicas y dependencias externas (Conesa Caralt & Casas Roma, 2014). Aquí también se indican integraciones con APIs o dispositivos específicos.
      
            .div(titulo="Requisitos específicos")
              p Esta sección constituye el núcleo del documento e incluye: 
              p <b>Requisitos funcionales</b>: describen el comportamiento del sistema.
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Ejemplo</b>. "El sistema deberá permitir al usuario crear, editar y cancelar reservas".
              p <b>Requisitos no funcionales</b>: detallan atributos de calidad como rendimiento, seguridad, disponibilidad y usabilidad. 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Ejemplo</b>. "El sistema deberá cargar la interfaz principal en menos de 3 segundos con una conexión 4G".
      
            .div(titulo="Apéndices y complementos")
              p Anexos, diagramas, glosarios, referencias normativas, criterios de aceptación o matrices de trazabilidad que refuercen y amplíen el contenido del documento.
      
      .bg-full-width.bg-color-1.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Cada sección del SRS debe estar organizada con una numeración jerárquica (por ejemplo, 1.0, 1.1, 1.2), para facilitar su lectura, navegación y mantenimiento. Esto permite que los equipos puedan referenciar y actualizar los apartados de forma clara durante el ciclo de vida del proyecto.
      
      #t_2_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.3] Lenguaje y estilo en la documentación de requisitos
      
      p.mb-5 El lenguaje y estilo en la documentación de requisitos, tiene un papel crítico, porque una redacción ambigua o imprecisa, puede llevar a malinterpretaciones, retrazos costosos y funcionalidades inadecuadas (Conesa Caralt & Casas Roma, 2014). La calidad del lenguaje impacta directamente en la comprensión, implementación y validación de los requerimientos.
  
      .bg-full-width.bg-color-4
        .px-4.px-md-5
          .row.justify-content-center.align-items-center
            .col-lg-12
              .row.justify-content-center.align-items-center
                .col-lg-7(data-aos="fade-left").order-2
                  h5 Un lenguaje técnico efectivo debe ser:
                  ul.lista-ul--color
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 <b>Claro</b>. Evitar ambigüedades y frases subjetivas.
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 <b>Conciso</b>. Usar solo la cantidad de palabras necesarias.
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 <b>Preciso</b>. Describir sin vaguedades lo que debe hacer el sistema.
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 <b>Coherente</b>. Mantener términos uniformes en todo el documento.
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 <b>Verificable</b>. Formular los requisitos de manera que puedan probarse objetivamente.
                .col-lg-5(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                  img.img-fluid(src='@/assets/curso/tema4/11.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
      
      .bg-full-width.bg-color-13.mb-5
        .px-4.px-md-5.py-4
          p.mb-0 Una redacción clara y específica en los requisitos, es clave para evitar ambigüedades y malentendidos entre los desarrolladores, usuarios y otros interesados en el sistema. Expresiones vagas pueden dar lugar a interpretaciones múltiples, mientras que descripciones detalladas, permiten definir criterios verificables de cumplimiento.
      
      .row.mb-5
        .col-lg-4.mb-3.mb-lg-0.order-lg-2
          figure
            img(src="@/assets/curso/tema4/12.png", data-aos="zoom-in")
        .col-lg-8.order-lg-1
          .bg-color-1.p-4.mb-3(data-aos="fade-left")
            p <b>Ejemplo de redacción imprecisa</b>. "La interfaz debe ser amigable".
            p.mb-0 <b>Redacción mejorada</b>. "La interfaz debe permitir al usuario completar el formulario de registro en no más de tres pasos, con instrucciones visibles y botones claramente etiquetados".
          p También es recomendable el uso del estilo imperativo, donde los requisitos se expresan como obligaciones del sistema:
      
      .bg-color-2.bordes-1.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema4/13.svg', alt='')
          .col-lg
            .p-4
              ul.lista-ul--color
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 El sistema debe enviar un correo de confirmación al finalizar el registro.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 El usuario podrá modificar su perfil desde el panel de configuración.
  
      h2(data-aos="fade-left") Buenas prácticas adicionales
      p.mb-5 A continuación, se presentan recomendaciones claves para mejorar la claridad, precisión y coherencia en la documentación de requisitos de <em>software</em>.
  
      .bg-full-width.bg-color-10.mb-5
        .px-4.px-md-5
          .row.justify-content-center.align-items-center
            .col-lg-12
              .row.justify-content-center.align-items-center
                .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                  ul.lista-ul--color
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Mantener consistencia terminológica: si se utiliza el término “administrador”, no debe reemplazarse por otros como “gestor” o “moderador”.
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Utilizar listas numeradas o con viñetas, para describir pasos o grupos funcionales. Por ejemplo:
                  ul.lista-ul--color.ms-3
                    li.mb-0.d-flex
                      i.fas.fa-circle
                      p.mb-0 El usuario ingresa su correo electrónico en el formulario de recuperación.
                    li.mb-0.d-flex
                      i.fas.fa-circle
                      p.mb-0 El sistema verifica que el correo esté registrado.
                    li.mb-0.d-flex
                      i.fas.fa-circle
                      p.mb-0 Se envía un enlace de restablecimiento al correo electrónico proporcionado.
                .col-lg-4(data-aos="zoom-in")
                  img.img-fluid(src='@/assets/curso/tema4/14.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
  
      #t_2_4.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.4] Herramientas para la documentación de requisitos
      
      p.mb-5 Existen diversas herramientas diseñadas para facilitar la captura, organización, seguimiento y mantenimiento de los requisitos durante todo el proceso de desarrollo (Genero Bocco et al., 2014). Estas herramientas promueven la trazabilidad, la colaboración entre equipos y la integración con otras fases del ciclo de vida del <em>software</em>.
  
      .bg-full-width.bg-color-5
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-8.mb-3.mb-lg-0.order-lg-2
              SlyderF(columnas="col-12 col-lg-6")
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema4/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 IBM <em>Engineering Requirements Management </em>DOORS
                  p.text-center Gestión de requisitos complejos, trazabilidad, control de versiones. Muy usada en sectores como aeroespacial y automotriz.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema4/17.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 <em>Jama Connect</em>
                  p.text-center Entorno colaborativo, aprobación de requisitos en tiempo real, vinculación con pruebas y tareas.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema4/18.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 JIRA + RTM (<em>Requirements and Test Management</em>)
                  p.text-center Ideal para contextos ágiles. Permite documentar requisitos como epics o historias de usuario, conectadas a tareas del backlog.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema4/19.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Google Docs / Microsoft Word / Markdown (GitHub)
                  p.text-center Útiles para crear documentos SRS formales con plantillas, tablas, comentarios colaborativos.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema4/20.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 ReQtest / Helix RM
                  p.text-center Soportan trazabilidad, gestión de cambios y generación automática de reportes. Muy útiles en proyectos auditables o en constante evolución.
      
            .col-lg-4.order-lg-1
              figure
                img(src='@/assets/curso/tema4/15.png', alt='')
      
      .bg-full-width.bg-color-3.mb-5
        .px-4.px-md-5.py-4.text-white
          p.mb-0 La elección de la herramienta adecuada dependerá del tamaño del proyecto, el modelo de desarrollo adoptado y el nivel de colaboración requerido.
  
      #t_2_5.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.5] Plantillas y estándares para documentación
      
      p.mb-5 Las plantillas y estándares, proporcionan estructuras predefinidas y guías para crear documentos de requisitos de forma coherente, organizada y comprensible. Su adopción asegura que todos los aspectos claves sean abordados de manera uniforme, facilitando la colaboración entre los equipos técnicos y las partes interesadas (Conesa Caralt & Casas Roma, 2014). Uno de los estándares más conocidos es el IEEE 830, que propone una plantilla de <em>software</em> Requirements Specification (SRS) con la siguiente estructura típica:
  
      .bg-full-width.bg-color-5
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center.align-items-stretch
            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema4/21.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Introducción
                  p.mb-0 Objetivo del sistema, alcance, definición de términos claves.
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema4/22.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Descripción general
                  p.mb-0 Actores principales, resumen de requisitos funcionales.
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema4/23.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Requisitos específicos
                  p.mb-0 Detalle de funcionalidades, requisitos no funcionales, restricciones del sistema.
      
      .bg-full-width.bg-color-13.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/24.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 También existen estándares internacionales como la ISO/IEC/IEEE 29148, que orientan cómo deben estructurarse los requisitos para que sean claros, verificables y rastreables a lo largo del ciclo de vida del sistema (Genero Bocco et al., 2014).
      
      .row.mb-5
        .col-lg-4.order-lg-2.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema4/25.png", data-aos="zoom-in")
        .col-lg-8.order-lg-1
          p En metodologías ágiles, se utilizan plantillas más simples y adaptadas a historias de usuario. Por ejemplo:
          .bg-color-9.p-4.bordes(data-aos="fade-left")
            ul.lista-ul--color.mb-0
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Historia de usuario</b>. Como [tipo de usuario], quiero [funcionalidad], para [beneficio].
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Criterios de aceptación</b>. Condiciones que deben cumplirse para considerar la historia como completada.
      
          .bg-color-1.p-4(data-aos="fade-left")
            p.mb-0 La implementación de plantillas y estándares no solo mejora la calidad y precisión de la documentación, sino que también facilita su mantenimiento y revisión continua. Al seguir estructuras estandarizadas, se garantiza una comprensión uniforme entre todos los miembros del equipo.
  
      #t_2_6.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.6] Mantenimiento y gestión de cambios en los documentos de requisitos
      
      .row.mb-5
        .col-lg-5.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema4/26.png", data-aos="zoom-in")
        .col-lg-7
          .bg-color-10.p-4.h-100(data-aos="fade-left")
            p.mb-0 El mantenimiento y la gestión de cambios en los documentos de requisitos, constituyen un proceso crítico dentro del ciclo de vida del desarrollo de <em>software</em>. A medida que el proyecto avanza, los requisitos pueden evolucionar por cambios en el mercado, nuevas necesidades del cliente o ajustes en los recursos disponibles (Genero Bocco et al., 2014). Gestionar adecuadamente estas modificaciones garantiza que todos los actores del proyecto estén alineados y que el producto final cumpla con las expectativas de los <em>stakeholders</em>.
      
      h2(data-aos="fade-left") Mantenimiento de requisitos
      p.mb-5 El mantenimiento implica actualizar de forma continua, los documentos de requisitos para reflejar descubrimientos, decisiones o solicitudes nuevas. Por ejemplo:
  
      .bg-full-width.bg-color-2.mb-5
        .px-4.px-md-5
          .row.justify-content-center.align-items-center
            .col-lg-12
              .row.justify-content-center.align-items-center
                .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                  ul.lista-ul--color
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Si el cliente solicita una funcionalidad adicional.
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Si se modifica una especificación existente.
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Si una tecnología prevista resulta inviable para cumplir un requisito técnico, como el rendimiento.
                  p En estos casos, el documento debe ajustarse oportunamente, para mantener la coherencia con el estado actual del proyecto.
                .col-lg-4(data-aos="zoom-in")
                  img.img-fluid(src='@/assets/curso/tema4/27.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
      
      h2(data-aos="fade-left") Gestión de cambios
      p.mb-5 La gestión de cambios se refiere al control formal de las modificaciones sobre los requisitos. Esto incluye su documentación, análisis, aprobación e implementación. Una estrategia efectiva se apoya en mecanismos como el control de versiones y la trazabilidad:
  
      .bg-full-width.bg-color-5
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-6.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema4/28.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Control de versiones
                  p.mb-0 Mantiene un historial completo de todas las ediciones realizadas en el documento, indicando quién hizo qué cambio, cuándo y por qué.
            .col-lg-6.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema4/29.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Trazabilidad
                  p.mb-0 Vincula cada cambio con sus objetivos de negocio, funcionalidades afectadas, casos de uso o pruebas relacionadas. Permite evaluar el impacto con mayor precisión.
      
      h2(data-aos="fade-left") Flujo típico para gestionar un cambio
      p.mb-5 A continuación, se describe un ejemplo de flujo estructurado para la gestión de cambios, comúnmente implementado con herramientas como Jira, IBM Rational DOORS o Confluence:
  
      .row.mb-5
        .col-lg-4.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema4/30.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-4.p-5(data-aos="fade-left")
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Rastrear el cambio</b>. Cada modificación se registra con un identificador único, fecha, autor y descripción del cambio.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Evaluar el impacto</b>. Se analiza cómo afectará a otros requisitos, plazos, recursos y costos.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Aprobar el cambio</b>. El cambio pasa por una revisión formal y debe ser aprobado por los responsables designados (por ejemplo, un comité de gestión de cambios).
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Actualizar el documento</b>. Una vez aprobado, el documento de requisitos se actualiza. Se notifica al equipo de desarrollo para su implementación.
      
      .row.mb-5
        .col-lg-4.mb-3.mb-lg-0.order-lg-2
          figure
            img(src="@/assets/curso/tema4/31.png", data-aos="zoom-in")
        .col-lg-8.order-lg-1
          p Las buenas prácticas en la gestión de cambios, son: 
          .bg-color-1.p-5(data-aos="fade-left")
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Definir reglas claras para cuándo y cómo deben revisarse los cambios.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Asegurar que los cambios se comuniquen a todos los involucrados.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Establecer mecanismos de validación previa antes de implementar los nuevos requisitos.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Crear un comité de gestión de cambios para grandes proyectos que analice modificaciones relevantes.
      
      p La correcta gestión del mantenimiento y de los cambios en los documentos de requisitos, permite que el desarrollo del sistema se mantenga alineado con los objetivos del negocio y las expectativas del cliente. 
      p El uso de herramientas adecuadas, junto con un proceso formal de evaluación y aprobación de cambios, minimiza riesgos, mejora la coordinación del equipo y garantiza la calidad del producto final.
  
      .bg-full-width.bg-color-8.mb-0
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8.order-2.text-white
              h2.mb-4(data-aos="flip-up") Técnicas para la identificación de requisitos
  
              p.mb-4(data-aos="fade-right") Se invita a leer el documento <b>Técnicas para la identificación de requisitos</b>, donde se aborda el proceso estratégico de definir el orden de implementación de funcionalidades dentro de proyectos de desarrollo de <em>software</em>. 
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_7.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Técnicas para la identificación de requisitos.
      
            .col-lg-4.order-1.mb-3.mb-lg-0
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/32.png', alt='')
  
  
  
  
  
  
  
  
      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>
    
    
  
  
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.ctr.unican.es/asignaturas/is1/IEEE830_esp.pdf " target="_blank" rel="noopener noreferrer") Institute of Electrical and Electronics Engineers. (1998). IEEE Std 830-1998: Especificaciones de los requisitos del <em>software</em>. IEEE. 
  
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=y8zboz9AI_k" target="_blank" rel="noopener noreferrer") Garcia, C. (2020). Especificación de Requerimientos de Software (E.R.S.) [video]. YouTube.
  
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema6',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Ingeniería de Requisitos',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de los siguientes ejemplos corresponde a un requisito no funcional?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'El sistema permitirá registrar nuevos usuarios.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'El usuario podrá actualizar su perfil.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'El sistema deberá responder en menos de 2 segundos.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'El sistema generará un reporte mensual de ventas.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál es el propósito principal del análisis de requisitos en el desarrollo de software?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Elaborar el diseño gráfico de la interfaz del sistema.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Implementar directamente las funciones del sistema.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Comprender y definir lo que el sistema debe hacer.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Redactar el código fuente inicial.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué documento se utiliza comúnmente para registrar los requisitos de un sistema de manera formal?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'Diagrama de flujo.', esCorrecta: false },
              { id: 'b', texto: 'Casos de prueba.', esCorrecta: false },
              {
                id: 'c',
                texto:
                  'Documento de Especificación de Requisitos de Software (SRS).',
                esCorrecta: true,
              },
              { id: 'd', texto: 'Manual de usuario.', esCorrecta: false },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué técnica permite decidir qué requisitos implementar primero en función del valor que aportan al usuario?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Validación de requisitos.',
                esCorrecta: false,
              },
              { id: 'b', texto: 'Revisión entre pares.', esCorrecta: false },
              {
                id: 'c',
                texto: 'Priorización de requisitos.',
                esCorrecta: true,
              },
              { id: 'd', texto: 'Codificación ágil.', esCorrecta: false },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál de los siguientes elementos NO se considera al momento de documentar correctamente un requisito?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'Identificador único.', esCorrecta: false },
              { id: 'b', texto: 'Nombre del desarrollador.', esCorrecta: true },
              { id: 'c', texto: 'Descripción detallada.', esCorrecta: false },
              { id: 'd', texto: 'Criterios de aceptación.', esCorrecta: false },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
