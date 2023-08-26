export const ORDENAMIENTO = {
    BURBUJA: {name:'Burbuja',text:'<p>El ordenamiento de burbuja es un algoritmo de clasificación simple que funciona comparando pares de elementos adyacentes y reorganizándolos en el orden deseado:</p>\n' +
            '    <ol>\n' +
            '        <li>Comenzando desde el primer elemento, compara el elemento actual con el siguiente elemento.</li>\n' +
            '        <li>Si el elemento actual es mayor que el siguiente, intercámbialos.</li>\n' +
            '        <li>Continúa comparando y moviendo el elemento más grande hacia el final del arreglo.</li>\n' +
            '        <li>Repite los pasos 1-3 para cada par de elementos adyacentes en el arreglo.</li>\n' +
            '        <li>Después de una iteración completa, el elemento más grande estará en la última posición.</li>\n' +
            '        <li>Repite los pasos 1-5 para todas las iteraciones necesarias (una menos que el tamaño total del arreglo).</li>\n' +
            '        <li>En cada iteración, el número de elementos sin clasificar disminuirá, ya que los elementos más grandes se moverán hacia el final.</li>\n' +
            '        <li>El arreglo estará completamente ordenado cuando no se realicen intercambios en una iteración completa.</li>\n' +
            '    </ol>'},
    INSERCION: {name:'Inserción',text:'<p>El ordenamiento por inserción es un algoritmo de clasificación que construye una lista ordenada de elementos uno por uno:</p>\n' +
            '    <ol>\n' +
            '        <li>Comienza con el segundo elemento de la lista y considera que el primer elemento ya está "ordenado".</li>\n' +
            '        <li>Toma el elemento actual y compáralo con los elementos anteriores en la lista ordenada.</li>\n' +
            '        <li>Desplaza los elementos mayores que el elemento actual hacia la derecha para hacer espacio.</li>\n' +
            '        <li>Inserta el elemento actual en la posición correcta en la lista ordenada.</li>\n' +
            '        <li>Avanza al siguiente elemento no ordenado y repite los pasos 2-4.</li>\n' +
            '        <li>Repite el proceso hasta que hayas recorrido todos los elementos de la lista.</li>\n' +
            '        <li>Al final, tendrás una lista completamente ordenada.</li>\n' +
            '    </ol>'},
    INCREMENTO: {name:'Incremento',text:'<p>El ordenamiento por incrementos, también conocido como ordenamiento Shell, es una variante del ordenamiento por inserción que utiliza una serie de incrementos o brechas para comparar y ordenar elementos distantes en una lista:</p>\n' +
            '  <ol>\n' +
            '    <li>Define una secuencia de incrementos (brechas) que determinarán la distancia entre los elementos a comparar.</li>\n' +
            '    <li>Comienza con el incremento más grande y aplica el ordenamiento por inserción en subgrupos de elementos que están separados por la brecha.</li>\n' +
            '    <li>A medida que avanzas en la secuencia de incrementos, la brecha disminuye y se ordenan subgrupos más pequeños.</li>\n' +
            '    <li>Continúa reduciendo la brecha hasta llegar a un incremento de 1, lo que equivale a un ordenamiento por inserción estándar.</li>\n' +
            '    <li>Al finalizar, habrás aplicado una serie de ordenamientos por inserción con diferentes brechas, lo que resultará en una lista ordenada.</li>\n' +
            '  </ol>'},
    MEZCLA: {name:'Mezcla',text:'<p>Este proceso de <strong>dividir</strong>, <strong>ordenar</strong> y <strong>combinar</strong> garantiza que todos los elementos se ordenen correctamente al final. El ordenamiento por mezcla es eficiente para ordenar grandes cantidades de datos y se basa en el enfoque de "<em>divide y vencerás</em>":</p>\n' +
            '<ol>\n' +
            '  <li>Divide el arreglo no ordenado en dos mitades aproximadamente iguales.</li>\n' +
            '  <li>Ordena recursivamente cada mitad utilizando el mismo algoritmo de ordenamiento por mezcla.</li>\n' +
            '  <li>Combina las dos mitades ordenadas para formar un solo arreglo ordenado.</li>\n' +
            '  <li>Repite los pasos 1-3 hasta que se haya combinado todo el arreglo en una sola lista ordenada.</li>\n' +
            '</ol>'},
    MONTICULOS: {name:'Monticulos',text:'<p>El ordenamiento por montículos, también conocido como Heap Sort, es un algoritmo de clasificación basado en estructuras de datos de montículos (heaps):</p>\n' +
            '<ol>\n' +
            '  <li>Construcción del montículo: Convierte el arreglo no ordenado en un montículo máximo. Esto se hace reorganizando los elementos para que cumplan con la propiedad del montículo.</li>\n' +
            '  <li>Extracción del elemento máximo: Extrae el elemento máximo del montículo (que está en la raíz) y colócalo al final del arreglo ordenado. Luego, ajusta el montículo para mantener su propiedad.</li>\n' +
            '  <li>Repite el paso 2: Repite la extracción del elemento máximo y el ajuste del montículo hasta que todos los elementos se hayan extraído y el montículo esté vacío.</li>\n' +
            '  <li>Al finalizar, tendrás un arreglo ordenado en orden ascendente.</li>\n' +
            '</ol>'},
    QUICKSORT: {name:'QuickSort',text:'<p>El ordenamiento rápido (QuickSort) es un algoritmo de clasificación eficiente que utiliza el enfoque de "divide y vencerás":</p>\n' +
            '<ol>\n' +
            '  <li>Elección de un pivote: Selecciona un elemento pivote del arreglo no ordenado.</li>\n' +
            '  <li>Partición: Reorganiza los elementos en el arreglo de manera que los elementos menores que el pivote estén a su izquierda y los elementos mayores estén a su derecha. El pivote estará en su posición final.</li>\n' +
            '  <li>Recursión: Aplica recursivamente el proceso de partición en las sublistas resultantes a la izquierda y derecha del pivote.</li>\n' +
            '  <li>Combinación: A medida que las sublistas se vuelven cada vez más pequeñas, finalmente se ordenarán de manera completa.</li>\n' +
            '  <li>Al finalizar, tendrás un arreglo completamente ordenado.</li>\n' +
            '</ol>'},
}