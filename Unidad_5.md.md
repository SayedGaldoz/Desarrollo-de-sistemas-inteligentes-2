Proyecto
# 1. Planteamiento del problema

Comprar, vender o rentar un inmueble en México requiere revisar varios documentos: escritura inscrita en el Registro Público de la Propiedad, certificado de libertad de gravamen, boletas de predial y agua, avalúo e identificaciones de las partes (BBVA, s.f.; IDC Online, 2026). La mayoría de las personas no sabe si sus documentos están completos o vigentes, y esa falta de información es aprovechada para cometer fraudes:

- Los fraudes inmobiliarios han aumentado hasta 800 % en 20 años y se estiman cerca de 27,000 casos de despojo en el país; recuperar un inmueble por juicio puede tardar más de tres años (El Financiero, 2026).
    
- En la Ciudad de México se registraron más de 4,500 casos de fraude inmobiliario en 2024, un aumento de 70 % (El Imparcial, 2026).
    
- Los fraudes más comunes son la falsificación de escrituras, la suplantación de identidad, la venta múltiple de un mismo inmueble y los precios muy por debajo del mercado para presionar el pago (El Financiero, 2026).
    

Evaluar estos documentos no es una decisión de "sí o no": un certificado puede estar casi vencido, un expediente parcialmente completo o un adeudo ser pequeño o grande. Por eso la lógica difusa es una herramienta adecuada para estimar el riesgo de la operación.

# 2. Objetivo general

Diseñar un sistema de inferencia difusa, implementado como aplicación web accesible desde celulares y computadoras, que evalúe la documentación de una operación inmobiliaria en México y estime el nivel de riesgo, la aptitud para escriturar y el tipo de revisión recomendada.

# 3. Objetivos específicos

1. Identificar los documentos y condiciones que determinan la seguridad de una compraventa o renta de inmuebles en México.
    
2. Definir las variables de entrada y salida del sistema, con sus universos de discurso y conjuntos difusos.
    
3. Construir la base de reglas y el motor de inferencia (Mamdani) que relacione las entradas con las salidas.
    
4. Validar el sistema con casos de operaciones seguras, dudosas y riesgosas.
    

# 4. Variables del sistema difuso

El sistema usará un motor de inferencia tipo Mamdani con funciones de pertenencia triangulares y trapezoidales, y defuzzificación por centroide. Las variables se basan en los requisitos documentales de una compraventa y en las señales de fraude identificadas en la investigación.

Variables de entrada 

|   |   |   |   |
|---|---|---|---|
|#|Variable de entrada|Universo (rango)|Conjuntos difusos|
|1|Completitud del expediente|0 – 100 %|Baja, media, alta|
|2|Antigüedad del certificado de libertad de gravamen|0 – 120 días|Baja, media, alta|
|3|Gravámenes o hipotecas inscritos (respecto al valor)|0 – 100 %|Baja, media, alta|
|4|Adeudo de impuesto predial|0 – 24 meses|Baja, media, alta|
|5|Adeudo del servicio de agua|0 – 24 meses|Baja, media, alta|
|6|Adeudo de cuotas de mantenimiento (condominio)|0 – 24 meses|Baja, media, alta|
|7|Coincidencia del vendedor con el titular registral|0 – 100 %|Baja, media, alta|
|8|Vigencia de la identificación oficial del vendedor|0 – 60 meses restantes|Baja, media, alta|
|9|Diferencia de superficie entre escritura y catastro|0 – 30 %|Baja, media, alta|
|10|Diferencia del precio frente al avalúo|-60 – +30 %|Baja, media, alta|
|11|Antigüedad del avalúo|0 – 12 meses|Baja, media, alta|
|12|Transmisiones del inmueble en los últimos 2 años|0 – 5 ventas|Baja, media, alta|
|13|Consentimiento de cónyuge o copropietarios|0 – 100 % de firmas|Baja, media, alta|
|14|Legibilidad / integridad del documento (posible alteración)|0 – 10 puntos|Baja, media, alta|
|15|Formalidad del asesor (RFC, contrato, registro)|0 – 10 puntos|Baja, media, alta|
|16|Plazo exigido para entregar el anticipo|0 – 60 días|Baja, media, alta|

  

Variables de salida 

|   |   |   |   |
|---|---|---|---|
|#|Variable de salida|Universo (rango)|Conjuntos difusos|
|1|Riesgo de la operación|0 – 100 puntos|Baja, media, alta|
|2|Aptitud para escriturar|0 – 100 %|Baja, media, alta|
|3|Nivel de revisión recomendado|0 – 10 puntos|Baja, media, alta|

  

Ejemplo de regla: SI la coincidencia del vendedor con el titular es baja Y la diferencia del precio frente al avalúo es baja, ENTONCES el riesgo de la operación es alto y la aptitud para escriturar es baja.

- # Funcionales:
    

- # Inicio de sesión y captura de las 16 entradas con validación de rangos.
    
- # Fuzzificación, inferencia Mamdani y salida por centroide.
    
- # Semáforo con las variables que subieron el riesgo.
    
- # Reporte en PDF, historial de evaluaciones y un panel para editar las reglas.
    

- # No funcionales:
    

- # Se ve bien en celular y responde en menos de 2 segundos.
    
- # Conexión segura (HTTPS) y contraseñas guardadas cifradas.
    
- # Aviso de privacidad conforme a la ley de protección de datos (LFPDPPP).
    
- # Interfaz en español y licencia AGPL-3.0.
    

  

# Referencias

BBVA México. (s.f.). Guía sobre el certificado de libertad de gravamen. https://www.bbva.mx/educacion-financiera/creditos/credito-hipotecario-certificado-libertad-gravamen.html

El Financiero. (2026, 23 de abril). Fraudes inmobiliarios se dispararon hasta 800 por ciento en 20 años. https://www.elfinanciero.com.mx/empresas/2026/04/23/fraudes-inmobiliarios-se-dispararon-hasta-800-por-ciento-en-20-anos/

El Imparcial. (2026, 17 de mayo). Fraude inmobiliario crece 70% y proponen reforma para detectar a tiempo intentos de venta. https://www.elimparcial.com/mexico/2026/05/17/

IDC Online. (2026, 17 de marzo). Escrituración de inmuebles: cómo evitar riesgos jurídicos que frenen la compraventa. https://idconline.mx/corporativo/2026/03/17/escrituracion-de-inmuebles-como-evitar-riesgos-juridicos-que-frenen-la-compraventa

**