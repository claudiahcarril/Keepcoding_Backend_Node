Desarrollar el API que se ejecutará en el servidor de un servicio de venta de artículos de
segunda mano llamado Nodepop. Hazte a la idea que esta API que vas a construir sería
utilizado por otros desarrolladores de iOS o Android.

El servicio mantiene anuncios de compra o venta de artículos y permite buscar como poner
filtros por varios criterios, por tanto la API a desarrollar deberá proveer los métodos
necesarios para esto.

Cada anuncio tiene los siguientes datos:
1. Nombre del artículo, un anuncio siempre tendrá un solo artículo
2. Si el artículo se vende o se busca
3. Precio. Será el precio del artículo en caso de ser una oferta de venta. En caso de que
sea un anuncio de ‘se busca’ será el precio que el solicitante estaría dispuesto a pagar
4. Foto del artículo. Cada anuncio tendrá solo una foto.
5. Tags del anuncio. Podrá contener uno o varios de estos cuatro: work, lifestyle, motor
y mobile
Operaciones que debe realizar el API a crear:
- Lista de anuncios con posibilidad de paginación. Con filtros por tag, tipo de anuncio
(venta o búsqueda), rango de precio (precio min. y precio max.) y nombre de artículo
(que empiece por el dato buscado)
- Lista de tags existentes
- Creación de anuncio (opcional)
Los sistemas donde se desplegará el API utilizan bases de datos MongoDB.
Se solicita que el entregable venga acompañado de una mínima documentación y el código
del API esté bien formateado para facilitar su mantenimiento. En esta fase, ya que se desea
probar si el modelo de negocio va a funcionar, no serán necesarios ni tests unitarios ni de
integración.