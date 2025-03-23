# Instrucciones para completar tu sitio web

## Imágenes necesarias

El sitio web requiere las siguientes imágenes para funcionar correctamente:

1. **img/about-image.jpg** - Para la sección "Nuestra Historia"
   - Tamaño recomendado: 800x600px
   - Estilo: Una imagen que represente la esencia de tu marca/empresa
   - Puede ser una foto de equipo, espacio de trabajo o imagen conceptual

2. **img/project-1.jpg**, **img/project-2.jpg**, **img/project-3.jpg** - Para la sección de Proyectos
   - Tamaño recomendado: 600x400px
   - Estilo: Imágenes que representen tus proyectos o conceptos de diseño
   - Deben tener buena resolución y ser visualmente atractivas

## Opciones para obtener imágenes

### 1. Usa tus propias imágenes
Si tienes fotografías de tus proyectos o tu equipo, es la mejor opción. Asegúrate de optimizarlas para web (comprime el tamaño del archivo sin perder calidad).

### 2. Imágenes de stock gratuitas
Puedes obtener imágenes de alta calidad y libres de derechos de sitios como:
- [Unsplash](https://unsplash.com/)
- [Pexels](https://www.pexels.com/)
- [Pixabay](https://pixabay.com/)

### 3. Imágenes AI generadas
Puedes crear imágenes únicas utilizando herramientas de inteligencia artificial como:
- [DALL-E](https://openai.com/dall-e/)
- [Midjourney](https://www.midjourney.com/)
- [Stable Diffusion](https://stability.ai/)

## Cómo añadir las imágenes

1. Nombra tus imágenes exactamente como se indica arriba
2. Colócalas en la carpeta `img/` del proyecto
3. Asegúrate de que sean del tamaño adecuado para evitar tiempos de carga lentos

## Personalización adicional

### Colores
Puedes modificar la paleta de colores editando las variables en el archivo `css/styles.css`:

```css
:root {
    --color-background: #FFFFFF;
    --color-text: #333333;
    --color-text-light: #666666;
    --color-primary: #000000;
    --color-accent: #F9F9F9;
    --color-border: #EEEEEE;
    --color-apple-blue: #0071e3;
    --color-apple-blue-light: #147ce5;
    --color-apple-green: #4cd964;
    --color-apple-red: #ff3b30;
}
```

### Contenido
Para modificar los textos, edita el archivo `index.html` y actualiza las secciones según tus necesidades.

### Fuentes
Si deseas cambiar las fuentes, puedes modificar la importación de Google Fonts en el encabezado HTML y actualizar la variable `--font-primary` en CSS.

## Soporte

Si tienes dudas o necesitas ayuda para personalizar tu sitio web, no dudes en contactar a info@midelcasai.com 