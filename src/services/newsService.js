const noticiasPorCategoria = {
  Todas: [
    { id: 0, title: "México lidera innovación tecnológica en América Latina", category: "Tecnología", description: "Expertos internacionales reconocen el avance del ecosistema tech mexicano como uno de los más dinámicos de la región.", image: "https://picsum.photos/seed/tech1/400/250", date: "16 de mayo de 2026", url: "#" },
    { id: 1, title: "Selección mexicana clasifica al mundial con gol histórico", category: "Deportes", description: "Con un gol en el último minuto, México aseguró su boleto a la siguiente ronda del torneo internacional.", image: "https://picsum.photos/seed/futbol/400/250", date: "15 de mayo de 2026", url: "#" },
    { id: 2, title: "Descubren nueva especie marina en el Pacífico mexicano", category: "Ciencia", description: "Científicos mexicanos identificaron una criatura nunca antes vista en las profundidades del océano Pacífico.", image: "https://picsum.photos/seed/ocean/400/250", date: "14 de mayo de 2026", url: "#" },
    { id: 3, title: "Inversión extranjera en México rompe récord histórico", category: "Economía", description: "El país recibió más de 40 mil millones de dólares en inversión directa durante el primer trimestre del año.", image: "https://picsum.photos/seed/economy/400/250", date: "13 de mayo de 2026", url: "#" },
    { id: 4, title: "Festival de cine de Guadalajara premia a directora oaxaqueña", category: "Cultura", description: "La cineasta recibió el premio mayor por su documental sobre comunidades indígenas del sur del país.", image: "https://picsum.photos/seed/cinema/400/250", date: "12 de mayo de 2026", url: "#" },
    { id: 5, title: "Senado aprueba nueva ley de telecomunicaciones", category: "Política", description: "La nueva ley busca regular el uso de internet y proteger los datos personales de los ciudadanos mexicanos.", image: "https://picsum.photos/seed/politics/400/250", date: "11 de mayo de 2026", url: "#" },
  ],
  Tecnología: [
    { id: 0, title: "Apple presenta su nuevo chip M4 Ultra de alta potencia", category: "Tecnología", description: "El nuevo procesador promete revolucionar el rendimiento de las computadoras Mac con inteligencia artificial integrada.", image: "https://picsum.photos/seed/apple/400/250", date: "16 de mayo de 2026", url: "#" },
    { id: 1, title: "México lanza satélite de comunicaciones propio", category: "Tecnología", description: "El satélite mexicano mejorará la conectividad en zonas rurales y reducirá la brecha digital en el país.", image: "https://picsum.photos/seed/satellite/400/250", date: "15 de mayo de 2026", url: "#" },
    { id: 2, title: "Startup mexicana recauda 50 millones para IA educativa", category: "Tecnología", description: "La empresa desarrolla herramientas de inteligencia artificial para mejorar el aprendizaje en escuelas públicas.", image: "https://picsum.photos/seed/startup/400/250", date: "14 de mayo de 2026", url: "#" },
  ],
  Deportes: [
    { id: 0, title: "Selección mexicana clasifica al mundial con gol histórico", category: "Deportes", description: "Con un gol en el último minuto, México aseguró su boleto a la siguiente ronda del torneo internacional.", image: "https://picsum.photos/seed/futbol/400/250", date: "15 de mayo de 2026", url: "#" },
    { id: 1, title: "Liga MX: Cruz Azul campeón tras épica final", category: "Deportes", description: "Cruz Azul se coronó campeón del torneo Clausura tras vencer al América en una final memorable.", image: "https://picsum.photos/seed/cruzazul/400/250", date: "14 de mayo de 2026", url: "#" },
    { id: 2, title: "Checo Pérez termina podio en Gran Premio de Mónaco", category: "Deportes", description: "El piloto mexicano logró un impresionante tercer lugar en el circuito más famoso de la Fórmula 1.", image: "https://picsum.photos/seed/f1/400/250", date: "13 de mayo de 2026", url: "#" },
  ],
  Ciencia: [
    { id: 0, title: "Descubren nueva especie marina en el Pacífico mexicano", category: "Ciencia", description: "Científicos mexicanos identificaron una criatura nunca antes vista en las profundidades del océano Pacífico.", image: "https://picsum.photos/seed/ocean/400/250", date: "14 de mayo de 2026", url: "#" },
    { id: 1, title: "UNAM desarrolla vacuna contra el dengue con 95% efectividad", category: "Ciencia", description: "Investigadores de la UNAM lograron un avance histórico en la lucha contra el dengue en México.", image: "https://picsum.photos/seed/vaccine/400/250", date: "13 de mayo de 2026", url: "#" },
    { id: 2, title: "México instala el telescopio más grande de América Latina", category: "Ciencia", description: "El nuevo telescopio en Baja California permitirá estudiar galaxias a millones de años luz de distancia.", image: "https://picsum.photos/seed/telescope/400/250", date: "12 de mayo de 2026", url: "#" },
  ],
  Política: [
    { id: 0, title: "Senado aprueba nueva ley de telecomunicaciones", category: "Política", description: "La nueva ley busca regular el uso de internet y proteger los datos personales de los ciudadanos mexicanos.", image: "https://picsum.photos/seed/politics/400/250", date: "11 de mayo de 2026", url: "#" },
    { id: 1, title: "México firma acuerdo comercial con la Unión Europea", category: "Política", description: "El tratado abrirá nuevos mercados para productos mexicanos y fortalecerá la relación bilateral.", image: "https://picsum.photos/seed/treaty/400/250", date: "10 de mayo de 2026", url: "#" },
    { id: 2, title: "Elecciones municipales: alta participación ciudadana", category: "Política", description: "Más del 60% de los ciudadanos acudieron a las urnas en las elecciones municipales de este año.", image: "https://picsum.photos/seed/election/400/250", date: "9 de mayo de 2026", url: "#" },
  ],
  Economía: [
    { id: 0, title: "Inversión extranjera en México rompe récord histórico", category: "Economía", description: "El país recibió más de 40 mil millones de dólares en inversión directa durante el primer trimestre del año.", image: "https://picsum.photos/seed/economy/400/250", date: "13 de mayo de 2026", url: "#" },
    { id: 1, title: "El peso mexicano se fortalece frente al dólar", category: "Economía", description: "La moneda nacional alcanzó su mejor nivel en los últimos dos años gracias al nearshoring.", image: "https://picsum.photos/seed/peso/400/250", date: "12 de mayo de 2026", url: "#" },
    { id: 2, title: "PEMEX anuncia nuevo yacimiento de petróleo en el Golfo", category: "Economía", description: "El descubrimiento podría aumentar significativamente la producción petrolera nacional en los próximos años.", image: "https://picsum.photos/seed/pemex/400/250", date: "11 de mayo de 2026", url: "#" },
  ],
  Cultura: [
    { id: 0, title: "Festival de cine de Guadalajara premia a directora oaxaqueña", category: "Cultura", description: "La cineasta recibió el premio mayor por su documental sobre comunidades indígenas del sur del país.", image: "https://picsum.photos/seed/cinema/400/250", date: "12 de mayo de 2026", url: "#" },
    { id: 1, title: "Frida Kahlo llega al metaverso con exposición virtual", category: "Cultura", description: "Una innovadora exposición digital permite recorrer la vida y obra de la pintora mexicana en realidad virtual.", image: "https://picsum.photos/seed/frida/400/250", date: "11 de mayo de 2026", url: "#" },
    { id: 2, title: "Banda mexicana gana premio Grammy Latino", category: "Cultura", description: "El grupo regiomontano se llevó el galardón a mejor álbum de rock alternativo en la ceremonia anual.", image: "https://picsum.photos/seed/music/400/250", date: "10 de mayo de 2026", url: "#" },
  ],
}

export async function fetchNoticias(categoria = 'Todas') {
  return new Promise((resolve) => {
    setTimeout(() => {
      const resultado = noticiasPorCategoria[categoria] || noticiasPorCategoria['Todas']
      resolve(resultado)
    }, 800)
  })
}