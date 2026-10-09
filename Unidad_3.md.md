
# ACT 3.1 – Problemas de búsqueda

Oct 8, 2026 · @Sayed charbel El jeitani g

## Conceptos básicos

Un problema de búsqueda se define con cinco piezas: estado inicial, acciones, modelo de transición, prueba de meta y costo del camino. Los ejemplos usan un mismo caso: encontrar una ruta en coche de Aguascalientes a Guadalajara.

|#|Concepto|Definición|Ejemplo|
|---|---|---|---|
|1|Problema de búsqueda|Encontrar una secuencia de acciones o un camino que lleve de un estado inicial a un estado objetivo dentro de un espacio de estados.|Encontrar la ruta de Aguascalientes a Guadalajara.|
|2|Espacio de estados|Conjunto de todos los estados alcanzables desde el estado inicial mediante cualquier secuencia de acciones. Se representa como un grafo: los nodos son estados y las aristas son acciones.|Todas las ciudades del mapa y las carreteras entre ellas.|
|3|Estado inicial|Configuración desde la que el agente comienza a explorar.|Estar en Aguascalientes.|
|4|Acciones|Movimientos u operaciones que el agente puede ejecutar en un estado para pasar a otro.|Conducir hacia una ciudad vecina.|
|5|Modelo de transición|Función RESULTADO(s, a) que indica a qué estado se llega al aplicar la acción a en el estado s.|RESULTADO(Aguascalientes, ir a Lagos de Moreno) = Lagos de Moreno.|
|6|Prueba de meta|Verificación de si un estado cumple el objetivo. Puede ser un estado explícito o una propiedad.|¿El estado actual es Guadalajara?|
|7|Costo del camino|Suma de los costos de cada paso desde el origen hasta el nodo. Refleja la medida de desempeño (km, tiempo, dinero).|Kilómetros acumulados del recorrido.|
|8|Solución|Secuencia de acciones que lleva del estado inicial a un estado meta. La solución óptima es la de menor costo de camino.|Aguascalientes → Lagos de Moreno → Guadalajara.|
|9|Frontera|Conjunto de nodos ya generados pero todavía no expandidos. También se llama lista abierta. La estrategia de búsqueda decide cuál nodo de la frontera se expande primero.|Ciudades descubiertas que aún no se han explorado.|
|10|Nodo|Estructura de datos del árbol de búsqueda. Guarda el estado, el nodo padre, la acción que lo generó, el costo del camino g(n) y la profundidad.|El nodo "Lagos de Moreno" con padre "Aguascalientes" y costo acumulado.|
|11|Agente de resolución de problemas|Agente inteligente basado en objetivos. Formula la meta y el problema, busca una secuencia de acciones que la cumpla y luego la ejecuta.|Un navegador GPS que calcula y sigue la ruta.|

Un estado y un nodo no son lo mismo. El estado describe una configuración del mundo; el nodo es la estructura que la guarda junto con cómo se llegó a ella. Dos nodos distintos pueden contener el mismo estado si se llega por caminos diferentes.

## Sistemas de búsqueda ciega

Las tres estrategias ciegas usan el mismo algoritmo y solo cambian el orden en que sacan nodos de la frontera. Amplitud usa una cola, profundidad usa una pila y costo uniforme usa una cola de prioridad ordenada por g(n).

Sistemas de búsqueda (ciega). Son estrategias que solo usan la información de la definición del problema: los estados, las acciones y la relación de precedencia entre ellos. El orden en que expanden los nodos no depende de dónde está la meta.

Búsqueda no informada (ciega). Explora el espacio de estados sin pistas sobre qué tan cerca está el objetivo. Solo distingue un estado meta de uno que no lo es. Se opone a la búsqueda informada (heurística), como A*, que sí estima la distancia a la meta.

Búsqueda en amplitud (BFS, breadth-first search). Expande primero el nodo raíz, luego todos sus sucesores, luego los sucesores de estos, y así por niveles. Usa la frontera como una cola (FIFO). Encuentra la solución más superficial, que es la óptima cuando todos los pasos cuestan lo mismo. Su principal problema es la memoria: guarda todos los nodos de un nivel.

Búsqueda en profundidad (DFS, depth-first search). Expande siempre el nodo más profundo de la frontera. Explora cada rama hasta el fondo y retrocede (backtracking) al llegar a un callejón sin salida. Usa la frontera como una pila (LIFO). Ocupa poca memoria, pero puede perderse en ramas infinitas y no garantiza la solución más corta.

Búsqueda de costo uniforme (UCS, uniform cost search). Expande el nodo de la frontera con menor costo de camino acumulado, g(n). Usa una cola de prioridad. Es una generalización de la búsqueda en amplitud: si todos los pasos cuestan lo mismo, ambas se comportan igual. Aplica la prueba de meta al expandir el nodo, no al generarlo, para asegurar que el primer camino encontrado sea el más barato. Es la base del algoritmo de Dijkstra
![[Pasted image 20261008181115.png|329]]

Ejemplo de costo uniforme: si de Aguascalientes salen dos rutas, una de 2 tramos y 260 km y otra de 1 tramo y 300 km, amplitud elige la de 1 tramo y costo uniforme la de 260 km.

## Cola y pila

La estructura de datos de la frontera es lo que define la estrategia: con una cola se obtiene amplitud y con una pila se obtiene profundidad.

|Estructura|Regla|Qué nodo sale primero|Estrategia que produce|Analogía|
|---|---|---|---|---|
|Cola|FIFO (first in, first out): el primero en entrar es el primero en salir|El nodo más antiguo (el menos profundo)|Búsqueda en amplitud|Una fila en el banco|
|Pila|LIFO (last in, first out): el último en entrar es el primero en salir|El nodo más reciente (el más profundo)|Búsqueda en profundidad|Una pila de platos|
|Cola de prioridad|Sale el elemento con menor valor de prioridad|El nodo con menor costo acumulado g(n)|Búsqueda de costo uniforme|Triage en urgencias|

Operaciones básicas: en una cola se encola al final (enqueue) y se desencola del frente (dequeue); en una pila se apila (push) y se desapila (pop) por el mismo extremo, el tope.

## Criterios de evaluación

Toda estrategia de búsqueda se evalúa con cuatro criterios. Costo uniforme es la única de las tres que siempre es completa y óptima con costos distintos. Profundidad es la única con memoria lineal.

Completitud. Indica si la estrategia garantiza encontrar una solución cuando esta existe.

Optimalidad. Indica si la estrategia garantiza encontrar la solución de menor costo de camino.

Complejidad en tiempo. Cuánto tarda en encontrar la solución, medido como el número de nodos generados o expandidos.

Complejidad en espacio. Cuánta memoria necesita, medida como el número máximo de nodos guardados al mismo tiempo.

Las complejidades se expresan con estas variables: b = factor de ramificación (máximo de sucesores por nodo), d = profundidad de la solución más superficial, m = profundidad máxima del espacio de estados, C* = costo de la solución óptima y ε = costo mínimo de un paso.

|Criterio|Amplitud (BFS)|Profundidad (DFS)|Costo uniforme (UCS)|
|---|---|---|---|
|Estructura de la frontera|Cola (FIFO)|Pila (LIFO)|Cola de prioridad por g(n)|
|Completitud|Sí, si b es finito|No; puede caer en ramas infinitas|Sí, si todo paso cuesta al menos ε > 0|
|Optimalidad|Sí, solo si todos los pasos cuestan lo mismo|No|Sí|
|Complejidad en tiempo|O(b^d)|O(b^m)|O(b^(1 + ⌊C*/ε⌋))|
|Complejidad en espacio|O(b^d)|O(b·m)|O(b^(1 + ⌊C*/ε⌋))|

En la práctica, la memoria es el límite de amplitud y costo uniforme: con b = 10 y d = 10 habría que guardar del orden de 10^10 nodos. Profundidad guarda solo el camino actual y los hermanos pendientes de cada nodo.

**