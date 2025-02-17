# Tarea 5

## Funcionalidades Implementadas en la interfaz gráfica

## Almacenamiento en LocalStorage

- Los datos de los formularios se guardan en localStorage para persistencia.

- Al recargar la página, los datos almacenados se restauran.

- Se recomienda limpiar el localStorage solo cuando sea necesario para evitar pérdida de información importante.

### Caso 1: Añadir Estudiantes
- Permite añadir estudiantes con su nombre, edad y dirección.
- Valida que todos los campos estén completos antes de enviar el formulario.
- Los estudiantes se guardan en localStorage y se muestran en la página.

### Caso 2: Añadir Asignaturas
- Permite añadir asignaturas mediante un formulario.
- Valida que todos los campos estén completos antes de enviar el formulario.
- Las asignaturas se guardan en localStorage y se muestran en la página.

### Caso 3: Matricular Estudiantes de Asignatura
- Permite matricular a un estudiante en una asignatura seleccionada.
- Valida que el estudiante y la asignatura existan en la base de datos.
- Muestra un mensaje de éxito o error según el caso (si ya está matriculado o no se encuentra la asignatura).
- Los cambios se guardan en localStorage y se actualiza la vista.

### Caso 4: Desmatricular Estudiante de Asignatura
- Permite desmatricular a un estudiante de una asignatura seleccionada.
- Verifica que el estudiante y la asignatura existan en la base de datos antes de proceder.
- Muestra un mensaje de éxito o error dependiendo del estado de la matriculación.
- Los cambios se guardan en localStorage y se actualiza la vista.

### Caso 5: Eliminar Estudiante
- Permite eliminar a un estudiante de la lista mediante su ID.
- Verifica que el ID sea válido y que el estudiante exista.
- Los estudiantes se guardan en localStorage tras la eliminación.
- Muestra la lista de estudiantes actualizada.

### Caso 6: Eliminar Asignatura
- Permite eliminar una asignatura de la lista mediante su nombre.
- Verifica que la asignatura exista antes de proceder con la eliminación.
- Guarda la lista actualizada de asignaturas en localStorage después de la eliminación.
- Muestra la lista de asignaturas actualizada.

### Caso 7: Calificar asignaturas y estudiantes

- Muestra y oculta el artículo de la asignatura al hacer clic en el botón.
- Valida que todos los campos estén completos antes de enviar el formulario.
- Añade la calificación a la asignatura seleccionada y calcula el promedio de las calificaciones.
- Asocia la calificación final de la asignatura al estudiante y elimina las calificaciones previas de la asignatura para que no haya conflictos con las nuevas notas.

### Caso 8: Promedio de un estudiante

- Muestra y oculta el artículo de la lista de estudiantes al hacer clic en el botón.
- Guarda los valores de los inputs en localStorage y los carga al iniciar.
- Valida que todos los campos estén completos antes de enviar el formulario.
- Calcula el promedio de las calificaciones del estudiante seleccionado y muestra las asignaturas con sus respectivas notas.


### Caso 9: Promedio de todos los estudiantes

- Obtiene la lista de estudiantes y muestra su información (nombre, promedio, asignaturas).

- Calcula el promedio de todos los estudiantes y lo muestra en pantalla.

### Caso 10: Fechas de matriculación o desmatriculación

- Permite ingresar datos de estudiantes en un formulario.

- Guarda automáticamente los valores ingresados en localStorage.

- Valida que los campos no estén vacíos antes de procesar los datos.

- Muestra las asignaturas de las que un estudiante se ha matriculado o desmatriculado.

### Caso 11: Búsqueda de Estudiantes y Asignaturas

- Permite buscar estudiantes por nombre y muestra sus datos.

- Muestra la lista de todas las asignaturas disponibles.

- Permite buscar asignaturas por nombre y obtener detalles.

### Caso 12: Generación de Informes de Estudiantes

- Muestra los informes detallados de cada estudiante.

- Incluye datos de dirección, asignaturas, calificaciones y fechas de matrícula/desmatrícula.

- Calcula y muestra el promedio de cada estudiante.

### Caso 13: Cierre de Sesión y Reinicio de Datos

- Borra todos los datos almacenados en localStorage.

- Recarga la página para restablecer el estado inicial.

## Cómo Ejecutar

- Abre el archivo HTML en un navegador.

- Interactúa con los botones para acceder a las diferentes funciones.

- Ingresa datos en los formularios y observa los cambios reflejados.

- Usa la opción de cierre de sesión para limpiar datos y recargar la página.