# Tienda-Web-React

Proyecto freelance para una tienda de artículos coleccionables, trading card games y juegos de mesa. 

# Proyecto Full-Stack MERN:

- Front-End: HTML5, CSS3, TailwindCSS, JavaScript, React.js, MaterialUI

- Back-End: Node.js, Express.js y MongoDB


# Base de Datos

La base de datos contendrá por un lado productos:

### Tabla productos
- id_producto (Primary Key) - int
- nombre_producto - string
- precio_producto - int
- imagen_producto - string
- stock_producto - int
- id_tcg (Foreign Key a categorias_tcg)

### Tabla categorias_tcg (o como la quieras llamar)
- id_tcg (Primary Key) - int
- nombre_categoria - string -> (Ej: "Magic: The Gathering", "Yu-Gi-Oh!", "Pokémon TCG")

--

Y por otro lado usuarios: 

### Tabla usuarios (Para usuarios regulares)
- id_usuario (Primary Key) - int
- email - string UNIQUE NOT NULL
- username - string UNIQUE NOT NULL
- password_hash - Se usa un hash de contraseña en lugar de guardar la contraseña en texto plano.	


### Tabla admin (unico)
- id_admin (Primary Key) - UNIQUE Hashed, NOT NULL
- username	
- password_hash

Vamos a codificar este usuario en la DB sin permitir registros adicionales.
Además, la idea es que si se detecta admin, llevar a un panel distinto.


# API

Asi se ve un objeto de esta tienda en la API: 

{          
"id_producto": 0,                                 
"nombre_producto": "Magic: the Gathering - Lord of the Rings - Draft Booster Box",
"precio_producto": "450.000",    
"imagen_producto": "https://raw.githubusercontent.com/ValenGu1t0/Imagenes-Tienda-Web/refs/heads/main/lotr.webp",     
"stock_producto": 6,
"categoria_producto": 1,
}

Para las fotos, decidi armar un repositorio que funcione como una nube que me guarde las fotos + que me permite
acceder a ellas a través de una URL, la cual es la propiedad "imagen_producto".



# Función y renderizado de la información

working on that
