# Tienda-Web-React


--// Proyecto Full-Stack donde usaré:

Front-End: HTML5, CSS3, TailwindCSS, JavaScript, React.js, MaterialUI

Back-End: Node.js, Express.js y MySQL

--// Base de Datos

La base de datos contendrá por un lado productos:

-/ Tabla productos
id_producto (Primary Key) - int
nombre_producto - string
precio_producto - int
imagen_producto - string
stock_producto - int
id_tcg (Foreign Key a categorias_tcg)

-/ Tabla categorias_tcg (o como la quieras llamar)
id_tcg (Primary Key) - int
nombre_categoria - string -> (Ej: "Magic: The Gathering", "Yu-Gi-Oh!", "Pokémon TCG")


Y por otro lado usuarios: 

-/ Tabla usuarios (Para usuarios regulares)
id_usuario (Primary Key) - int
email - string UNIQUE NOT NULL
username - string UNIQUE NOT NULL
password_hash - Se usa un hash de contraseña en lugar de guardar la contraseña en texto plano.	


-/ Tabla admin (unico)
id_admin (Primary Key) - UNIQUE Hashed, NOT NULL
username	
password_hash

Vamos a codificar este usuario en la DB sin permitir registros adicionales.
Además, la idea es que si se detecta admin, llevar a un panel distinto.


--// API -> json

Asi se ve el producto: 
{          
"id_producto": 0,                                 
"nombre_producto": "Magic: the Gathering - Lord of the Rings - Draft Booster Box",
"precio_producto": "450.000",    
"imagen_producto": "img/prod/lotr.webp",     
"stock_producto": 6,
"id_tcg": 1
},
