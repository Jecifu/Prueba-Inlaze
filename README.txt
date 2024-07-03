Ejecución pruebas automatizadas

Se incluye en este repositorio el proceso para visualizar las pruebas automatizadas utilizando Cypress

Requisitos previos:
Antes de comenzar es importante validar que tienes instalado en tu sistema:

*Node.js (preferiblemente versión LTS)
*npm (administrador de paquetes de Node.js)

Instalación Cypress y las dependencias del proyecto:

Abrir Node.js y verificar que la ruta corresponda a la ubicación del proyecto descargado
Utilizar el siguiente comando en Node.js para instalar Cypress las dependencias

npm install

Ejecución de las pruebas con Cypress:

Abrir Node.js y verificar que la ruta corresponda a la ubicación del proyecto descargado y utilizar el siguiente comando en Node.js con el fin de abrir cypress

npx cypress open

Cypress abrirá una ventana donde se debe seleccionar la opción "E2E Testing" con las pruebas disponibles.

Se selecciona el navegador para la ejecución de pruebas (por defecto Chrome) y luego la opción "Start E2E testing"

Cypress abrirá una ventana con las pruebas "Specs" con las siguientes:

*SignUp.feature
*Login.feature

Selecciona el archivo de prueba que quieres ejecutar para que Cypress abra el navegador y ejecute las pruebas automáticamente.

Cypress mostrará el resultado de las pruebas en tiempo real donde se observará el paso a paso
