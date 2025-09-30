<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'1. Análisis de requisitos funcionales y no funcionales'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .bg-color-2.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/1.png', alt='')
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") En el desarrollo de sistemas de <em>software</em>, el análisis de requisitos funcionales y no funcionales, representa una etapa crucial para garantizar que el producto final cumpla con las expectativas del cliente y las necesidades del usuario. Esta fase permite identificar, comprender y documentar lo que el sistema debe hacer (requisitos funcionales) y las condiciones bajo las cuales debe operar (requisitos no funcionales). A través de un análisis riguroso, se busca establecer una base sólida sobre la cual diseñar, implementar y validar soluciones tecnológicas coherentes, eficientes y sostenibles (Sommerville, 2011).
  
      #t_1_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.1] Concepto y clasificación de los requisitos
      
      p.mb-5 En el ámbito del desarrollo de <em>software</em>, los requisitos son las condiciones y funcionalidades que el sistema debe cumplir para satisfacer las expectativas del cliente y los usuarios finales. Estos requisitos guían todo el proceso de desarrollo, desde la concepción hasta la implementación, asegurando que el sistema construido cumpla con sus objetivos. Los requisitos se clasifican en dos grandes categorías:
  
      .bg-full-width.bg-color-5
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-6.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/2.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Requisitos funcionales
                  p.mb-0 Especifican qué debe hacer el sistema. Se centran en las funcionalidades, procesos y servicios que debe ofrecer.
            .col-lg-6.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/3.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Requisitos no funcionales
                  p.mb-0 Definen cómo debe comportarse el sistema. Se enfocan en las cualidades del sistema como rendimiento, seguridad, escalabilidad y usabilidad.
  
      h2(data-aos="fade-left") Requisitos funcionales
      p.mb-5 Los requisitos funcionales describen las acciones específicas que el sistema debe ser capaz de realizar para cumplir con los objetivos definidos (Águila Cano, 2022). Estos determinan las interacciones entre usuario y sistema, los datos procesados y los resultados generados.
  
      .bg-full-width.bg-color-4.mb-5
        .px-4.px-md-5
          .row.justify-content-center.align-items-center
            .col-lg-12
              .row.justify-content-center.align-items-center
                .col-lg-7(data-aos="fade-left").order-2
                  h5 Ejemplos:
                  ul.lista-ul--color
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 "El sistema debe permitir a los usuarios crear, editar y eliminar perfiles".
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 "El sistema debe permitir a los usuarios realizar pagos en línea, utilizando tarjetas de crédito".
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 "El sistema debe generar un informe mensual, con los datos de ventas".
                .col-lg-5(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                  img.img-fluid(src='@/assets/curso/tema3/4.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
  
      p.mb-5 Estos requisitos forman la base para el diseño, la implementación y las pruebas del sistema.
  
      h2.mb-5(data-aos="fade-left") Requisitos no funcionales
  
      .row.mb-5
        .col-lg-4.order-lg-2.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
        .col-lg-8.order-lg-1
          .bg-color-9.p-4.bordes(data-aos="fade-left")
            p.mb-0 Por su parte, los requisitos no funcionales se refieren a características que definen cómo debe comportarse el sistema más allá de sus funciones explícitas (Águila Cano, 2022). Son esenciales para garantizar la eficiencia, seguridad y confiabilidad del sistema en un entorno real.
          .bg-color-1.p-4(data-aos="fade-left")
            h5 Ejemplos:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 "El sistema debe ser capaz de procesar 1,000 transacciones por minuto".
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 "El sistema debe cargar la página principal en menos de 2 segundos".
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 "El sistema debe ser accesible desde dispositivos móviles y de escritorio".
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 "El sistema debe contar con mecanismos de seguridad como la autenticación multifactor".
      
      h2(data-aos="fade-left") Clasificación específica de los requisitos
      p.mb-5 A continuación, se  explican los conceptos fundamentales de los requisitos funcionales y no funcionales en el desarrollo de sistemas, detallando sus características, objetivos y su importancia en la planificación y diseño de soluciones tecnológicas.
  
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/6dCXcABFf4g?si=Mp48NTxWDb_nywSP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  
      h2(data-aos="fade-left") Diferencias claves entre requisitos funcionales y no funcionales
      p.mb-5 A continuación, se presentan algunas diferencias fundamentales entre ambos tipos de requisitos:
  
      .titulo-figura.mb-4
        h5 Tabla 1.
        span Diferencias claves entre requisitos funcionales y no funcionales
      .tabla-a.color-acento-botones.mb-5
        table
          thead
            tr.text-center
              th.bg-color-6.text-white.text-center Característica
              th.bg-color-6.text-white.text-center Requisitos funcionales
              th.bg-color-6.text-white.text-center Requisitos no funcionales
          tbody.bg-color-7
            tr
              td <b>Enfoque</b>
              td Qué debe hacer el sistema.
              td Cómo debe comportarse el sistema.
            tr
              td <b>Ejemplo</b>
              td "El sistema debe permitir que los usuarios inicien sesión".
              td "El sistema debe ser capaz de manejar 10,000 usuarios concurrentes".
            tr
              td <b>Medición</b>
              td Pruebas de funcionalidad.
              td Pruebas de rendimiento, seguridad, etc.
            tr
              td <b>Impacto en el diseño</b> 
              td Define funcionalidades básicas.
              td Define características de calidad y desempeño.
      
      .row.mb-5
        .col-lg-4.order-lg-2.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema3/6.png", data-aos="zoom-in")
        .col-lg-8.order-lg-1
          h2(data-aos="fade-left") Importancia de ambos tipos de requisitos
          p.mb-5 Tanto los requisitos funcionales como los no funcionales son fundamentales para el éxito del desarrollo de <em>software</em>. Los requisitos funcionales aseguran que el sistema ofrezca las funcionalidades necesarias para los usuarios, mientras que los requisitos no funcionales garantizan que estas funciones operen de manera eficiente, segura y fiable.
      
          .bg-color-2.p-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/7.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Un sistema que cumple con los requisitos funcionales, pero no con los no funcionales, puede fallar si, por ejemplo, no soporta el volumen de usuarios esperado o carece de seguridad adecuada. De igual forma, un sistema con alto rendimiento pero sin las funciones esperadas, será inútil para los usuarios (Águila Cano, 2022).
  
      #t_1_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.2] Requisitos funcionales: definición y ejemplos
      
      .row.mb-5
        .col-lg-5.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema3/8.png", data-aos="zoom-in")
        .col-lg-7
          .bg-color-3.text-white.p-5(data-aos="fade-left")
            p.mb-0 Un requisito funcional se refiere a una característica que debe ser implementada en el sistema para garantizar que este cumpla con las expectativas del usuario y los objetivos del negocio. Estos requisitos se enfocan en la interacción entre los usuarios y el sistema, detallando las funcionalidades que deben estar presentes para que el <em>software</em> sea útil y eficiente (Sommerville, 2011).
      
      p.mb-5 Están directamente relacionados con el comportamiento del sistema y las tareas que debe realizar. Se consideran esenciales porque permiten que el sistema cumpla con los fines para los cuales fue diseñado. Los ejemplos de requisitos funcionales son: 
  
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/tema3/9.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h5 Autenticación de usuario
                p El sistema debe permitir a los usuarios registrarse con su correo electrónico y una contraseña. Además, debe validar las credenciales y otorgar acceso solo si son correctas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/tema3/10.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h5 Gestión de inventario
                p El sistema debe permitir agregar, editar y eliminar productos en el inventario. Los usuarios deben poder consultar la disponibilidad de un producto en tiempo real.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/tema3/11.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h5 Generación de reportes
                p El sistema debe ser capaz de generar un reporte semanal con las ventas realizadas, indicando la cantidad de productos vendidos, ingresos totales y el tipo de pago utilizado.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/tema3/12.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h5 Notificaciones de eventos
                p El sistema debe enviar una notificación por correo electrónico cuando un pedido sea procesado o enviado, informando al usuario sobre el estado de su compra.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/tema3/13.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h5 Búsqueda de datos
                p El sistema debe permitir a los usuarios buscar productos mediante filtros como nombre, categoría y precio. La búsqueda debe retornar resultados relevantes rápidamente.
      
      h2(data-aos="fade-left") Características de los requisitos funcionales
      p.mb-5 Para que un requisito funcional sea efectivo y útil en el proceso de desarrollo, debe cumplir con las siguientes características (Sommerville, 2011):
  
      .bg-full-width.bg-color-12
        .p-4.p-md-5
          div.row.justify-content-center.align-items-stretch.mb-5
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/14.svg" alt="" style="width: 90px")
                h5.text-center Claridad
                p.mb-0.text-center Deben ser comprensibles y no dejar lugar a interpretaciones ambiguas.
          
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/15.svg" alt="" style="width: 90px")
                h5.text-center Especificidad
                p.mb-0.text-center Deben describir de manera precisa, lo que se espera del sistema, sin ambigüedades ni generalizaciones.
          
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/16.svg" alt="" style="width: 90px")
                h5.text-center Verificabilidad
                p.mb-0.text-center Deben poder ser comprobados mediante pruebas que confirmen su correcta implementación.
            
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/17.svg" alt="" style="width: 90px")
                h5.text-center Alineación con objetivos del negocio
                p.mb-0.text-center Deben responder a las metas generales del proyecto y aportar valor al cliente.
  
          h2(data-aos="fade-left") Importancia de los requisitos funcionales
      
      .bg-full-width.bg-color-10.mb-5
        .px-4.px-md-5
          .row.justify-content-center.align-items-center
            .col-lg-12
              .row.justify-content-center.align-items-center
                .col-lg-7(data-aos="fade-left").order-2
                  p.mb-0 Los requisitos funcionales son fundamentales para guiar el proceso de desarrollo del sistema. Proporcionan una base clara sobre lo que debe implementarse, permitiendo a los desarrolladores trabajar con mayor eficiencia y precisión. Además, minimizan errores, malentendidos y retrabajos durante el ciclo de desarrollo. También son claves en la etapa de validación del sistema, puesto que permiten comprobar si este realiza las funciones esperadas de manera correcta.
                .col-lg-5(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                  img.img-fluid(src='@/assets/curso/tema3/18.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
  
      #t_1_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.3] Requisitos no funcionales: definición y ejemplos
      
      p.mb-5 Un requisito no funcional establece las condiciones bajo las cuales el sistema debe operar. Aunque no describen funcionalidades específicas, son cruciales para asegurar que el sistema sea usable, seguro, eficiente y robusto (Sommerville, 2011). Estos requisitos se centran en las cualidades del sistema, no en sus acciones, y son fundamentales para garantizar la satisfacción del usuario final y la viabilidad del sistema a largo plazo. Los ejemplos de requisitos no funcionales son: 
  
      .bg-full-width.bg-fondo-2.mb-5
        .p-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-10
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema3/19.svg', alt='', style="max-width: 1106px;").mx-auto
      
                .bg-color-white.box-shadow.p-3(x="5%" y="93%" numero="+")
                  h5 Rendimiento
                  p El sistema debe ser capaz de procesar hasta 500 transacciones por segundo, sin degradación de la respuesta. Establece una condición de eficiencia para grandes volúmenes de datos.
      
                .bg-color-white.box-shadow.p-3(x="19.5%" y="76%" numero="+")
                  h5 Seguridad
                  p El sistema debe encriptar todas las contraseñas de los usuarios utilizando el algoritmo AES de 256 bits. Protege la información sensible, más allá de la funcionalidad del registro.
      
                .bg-color-white.box-shadow.p-3(x="32%" y="93%" numero="+")
                  h5 Usabilidad
                  p El sistema debe permitir que un usuario promedio complete una tarea común en menos de 3 minutos. Garantiza una experiencia de usuario ágil y satisfactoria.
      
                .bg-color-white.box-shadow.p-3(x="44.5%" y="76%" numero="+")
                  h5 Disponibilidad
                  p El sistema debe estar disponible durante al menos el 99.9 % del tiempo, excluyendo mantenimiento programado. Asegura operación continua para aplicaciones críticas.
      
                .bg-color-white.box-shadow.p-3(x="57.5%" y="93%" numero="+")
                  h5 Escalabilidad
                  p El sistema debe manejar un incremento del 50 % en usuarios simultáneos sin afectar su rendimiento. Permite el crecimiento del sistema sin perder eficiencia.
                .bg-color-white.box-shadow.p-3(x="71.5%" y="76%" numero="+")
                  h5 Fiabilidad
                  p El sistema debe recuperar el 99 % de las transacciones en caso de fallo, sin pérdida de datos. Define la capacidad del sistema para sobreponerse a fallos.
      
                .bg-color-white.box-shadow.p-3(x="82%" y="93%" numero="+")
                  h5 Compatibilidad
                  p El sistema debe ser compatible con los principales navegadores: Chrome, Firefox y Safari. Asegura accesibilidad en múltiples plataformas.
      
      h2(data-aos="fade-left") Características de los requisitos no funcionales
      p.mb-5 Para ser eficaces y aplicables en el desarrollo, los requisitos no funcionales deben cumplir con las siguientes características:
  
      .row.justify-content-center.align-items-stretch.mb-3
        .col-lg-6.mb-3.mb-lg-0
          .bg-color-8.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/20.svg", style="max-width: 90px").mx-auto
              .col-lg.text-white
                h5 Medibles
                p.mb-0 Su cumplimiento debe evaluarse objetivamente. Por ejemplo, el tiempo de respuesta o el número de transacciones por segundo.
  
        .col-lg-6.mb-3.mb-lg-0
          .bg-color-8.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/21.svg", style="max-width: 90px").mx-auto
              .col-lg.text-white
                h5 Específicos 
                p.mb-0 Deben estar redactados con claridad y precisión, para evitar ambigüedades.
      
      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-6.mb-3.mb-lg-0
          .bg-color-8.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/22.svg", style="max-width: 90px").mx-auto
              .col-lg.text-white 
                h5 Realizables
                p.mb-0Deben ser factibles dentro de las limitaciones del proyecto (tiempo, presupuesto, tecnología).
  
        .col-lg-6.mb-3.mb-lg-0
          .bg-color-8.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/23.svg", style="max-width: 90px").mx-auto
              .col-lg.text-white
                h5 Relevantes 
                p.mb-0 Deben responder a necesidades reales del negocio y de los usuarios finales.
  
      h2.mb-5(data-aos="fade-left") Importancia de los requisitos no funcionales
  
      .row.mb-5
        .col-lg-4.mb-3.mb-lg-0.order-lg-2
          figure
            img(src="@/assets/curso/tema3/24.png", data-aos="zoom-in")
        .col-lg-8.order-lg-1
          .bg-color-1.p-4.h-100(data-aos="fade-left")
            p Los requisitos no funcionales son esenciales para el éxito de cualquier sistema. Aunque no afectan directamente las funciones del sistema, tienen un impacto profundo en su calidad general. Un sistema que cumple con los requisitos funcionales pero no con los no funcionales puede ser ineficaz, inseguro, difícil de usar o incapaz de manejar la carga de trabajo prevista.
            p.mb-0 Por ello, tanto los requisitos funcionales como los no funcionales, deben ser considerados con igual importancia durante todo el proceso de desarrollo (Águila Cano, 2022).
      
      .bg-full-width.bg-color-8.mb-0
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8.order-2.text-white
              h2.mb-4(data-aos="flip-up") Priorización de requisitos
              p.mb-4(data-aos="fade-right") Se invita a leer el documento <b>Priorización de requisitos</b>, donde se aborda el proceso estratégico de definir el orden de implementación de funcionalidades dentro de proyectos de desarrollo de <em>software</em>. 
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Priorización de requisitos.
      
            .col-lg-4.order-1.mb-3.mb-lg-0
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/25.png', alt='')
  
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://byspel.com/requerimientos-funcionales-y-no-funcionales-la-guia-completa/" target="_blank" rel="noopener noreferrer") López, I. D. (s.f.). Requerimientos Funcionales y No Funcionales: La Guía Completa. Byspel. 
  
   
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=73fuqZ78uhg" target="_blank" rel="noopener noreferrer") Elite Software Engineering. (2021). 03 - Ingeniería de Requerimientos - Recolección de requerimientos [video]. YouTube.
  
  
  
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
