<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.mb-0


    .row.mb-5
      .col-lg-7
        .bg-color-1.px-4.py-5(data-aos="fade-left").mb-4
          p.mb-0 En el desarrollo de software, identificar y especificar correctamente los requisitos del sistema es una etapa fundamental que influye directamente en la calidad del producto final. Esta unidad tiene como propósito brindar a los estudiantes las herramientas necesarias para recolectar, analizar, documentar y priorizar los requisitos, asegurando que el sistema cumpla con las expectativas del cliente y las necesidades del usuario.
        
        p(data-aos="fade-left") A lo largo de esta unidad, se estudiarán los requisitos funcionales y no funcionales, así como su documentación clara y precisa. Se abordarán técnicas de identificación como entrevistas, prototipos y observación, además de procesos claves como la verificación y validación, fundamentales para evitar errores en fases posteriores del desarrollo.
      .col-lg-5.d-none.d-sm-block
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in").mb-4.mb-lg-0
    
    
    .bg-full-width.bg-color-3.mb-0
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Finalmente, se explorará la priorización de requisitos, que permite gestionar recursos y esfuerzos en función del valor que cada funcionalidad aporta al proyecto. Los estudiantes aplicarán técnicas cualitativas y cuantitativas, y comprenderán la importancia de la participación activa de los interesados, especialmente en contextos ágiles donde la flexibilidad y el enfoque iterativo, son claves para el éxito.
</template>
