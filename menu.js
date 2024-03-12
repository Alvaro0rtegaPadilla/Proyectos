fetch(menu.json)

//Que hace esta linea? Esta linea inicia la carga del archivo menu.json, fetch es una funcion de javascript que facilita la realizacion de solicitudes de red como obtener datos de un archivo o de un endpoint de API.
//Como funciona? fetch devuelve una promesa que,cuando se reselve , te da acceso a la respuesta de la solicitud. Esta respuesta no es directamente los datos en formato JSON, si no un objeto de respuesta que incluye varios detalles sobre la respuesta misma.

.then(response => response.json())
//Que hace? Esta linea  toma el objeto de respuesta obtenido del fetch y utiliza el metodo .json() para convertir el cuerpo de la respuesta en un objeto JavaScript (Esto asume el cuerpo de la respuesta  esta en formato json)
//Como funciona?  el metodo .json() tambien devuelve una promesa, la cual se 

.then(data =>(
    const menuContainer = document.getElementById('menu-container');
    //Que hace? Aqui se procesan los datos JSON, ya convertidos. Se obtiene una referencia el container del menu en el HTML mediante getElementByID('meu-container'), y luego se itera sobre los elementos .(categorias) del menu.
    data.items.forEach(category => { 
        const categorytitle = document.createElement('h2');
        //Que hace?  Aqui se crea un elemento h2, se asigna el nombre de la categoria como su contenido de texto, y luego se anade este titulo al contenedor menu.
        categorytitle.textContent = category.category;
        menuContainer.appendChild(categoryTitle);

        const table = document.createElement('table');
        //Que hace? Se crea un elemento table para cada categoria .Ademas, se  prepara el encabezado(tablehead) con las columnas pertinentes , tableBody se inicializa vacio y se llenara con los elementos de la categoria.
        const tableHead = '<tr><th>Foto</th></tr>';
        let tableBody = '';
        


    });
))