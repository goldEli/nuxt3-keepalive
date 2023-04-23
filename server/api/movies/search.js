export default defineEventHandler(( event ) => { // Función de manejo de eventos que realiza una petición fetch a una api de películas
    const { query, page } = getQuery(event);                                            // Del evento obtenemos la consulta de busqueda          
    const config = useRuntimeConfig();                                                  // Inicializamos la configuración en tiempo de ejecución
    return $fetch(`${config.apiBaseUrl}/search/movie?query=${query}&page=${page}`, {    // Definimos una petición fetch en base a esa configuración  
        method: 'GET',                                                                  // que define a su vez la URL, el método get y la  
        headers: {                                                                      // cabezera de autorización agregada
            "Authorization": `Bearer ${config.apiKey}`
        }
    })
})