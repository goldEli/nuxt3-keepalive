export default defineEventHandler(( event ) => { // Función de manejo de eventos que realiza una petición fetch a una api de películas
    const id = [...event.node.req.url.split("/")].pop()                   // Del evento obtenemos el id          
    const config = useRuntimeConfig();                                    // Inicializamos la configuración en tiempo de ejecución
    return $fetch(`${config.apiBaseUrl}/movie/${id}`, {                   // Definimos una petición fetch en base a esa configuración  
                                                                          // que define a su vez la URL y la  
        headers: {                                                        // cabecera de autorización agregada
            "Authorization": `Bearer ${config.apiKey}`
        }
    })
})