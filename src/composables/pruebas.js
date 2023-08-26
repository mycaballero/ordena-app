import { defineStore } from 'pinia'
import {ORDENAMIENTO} from "@/contants/ordenamiento";


export function userOrder (type, value) {
    let number = []
    if (!Array.isArray(value)) {
        number = Array.from(String(value), Number)
    } else {
        number = value
    }
    switch (type) {
        case ORDENAMIENTO.BURBUJA.name:
            console.log(type, value, number)
            return oredenamientoBurbuja(number)
        case ORDENAMIENTO.INSERCION.name:
            return ordenamientoInsercion(number)
        case ORDENAMIENTO.INCREMENTO.name:
            return insertionSort(number)
        case ORDENAMIENTO.MEZCLA.name:
            return mergeSort(number)
        case ORDENAMIENTO.MONTICULOS.name:
            return ordenarPorMonticulos(number)
        case ORDENAMIENTO.QUICKSORT.name:
            return quickSort(number)
        default:
            return 'Elige un tipo de ordenamiento...'
    }
}

function oredenamientoBurbuja (aaa) {
    let aux = null
    let change = false

    while (true) {
        change = false
        aaa.forEach((item, index) => {
            if (item > aaa[index+1]) {
                aux = aaa[index+1]
                aaa[index+1] = item
                aaa[index] = aux
                change = true
                console.log(aaa, `${item} se mueve`)
            }
        })
        if(!change) break
    }
    return aaa
}
function busquedaLinea(search, aaa) {
    let index = null
    aaa.forEach((item, i) => {
        if (item == search) {
            index = i
        }
    })
    return index ?? -1
}

// busqueda binaria
function ordenamientPorSeleccion (aaa) {
    const order = []

    aaa.forEach(() => {
        let minimun = aaa[0]

        aaa.forEach((item) => {
            if (item < minimun && !order.find(search => item == search)) {
                minimun = item
            }
        })
        if (!order[order.lenth-1] || minimun > order[order.lenth-1]) {
            order.push(minimun)
        }
    })
    return order
}

function ordenamientoInsercion(aaa) {
    const n = aaa.length;

    for (let i = 1; i < n; i++) {
        const current = aaa[i]; // Elemento a insertar en su posición correcta
        let j = i - 1; // Índice del elemento anterior al actual

        // Mover los elementos mayores que el actual hacia adelante
        while (j >= 0 && aaa[j] > current) {
            aaa[j + 1] = aaa[j];
            j--;
        }

        // Insertar el elemento actual en su posición correcta
        aaa[j + 1] = current;
    }
    return aaa;
}
function insertionSort(aaa) {
    let n = aaa.length;

    for (let i = 1; i < n; i++) {
        const current = aaa[i]
        let j = i - 1

        while (j >= 0 && aaa[j] > current) {
            aaa[j + 1] = aaa[j]
            j--
        }

        aaa[j + 1] = current
    }
    return aaa
}

function mergeSort(aaa) {
    if (aaa.length <= 1) {
        return aaa
    }

    const middle = Math.floor(aaa.length / 2)
    const left = aaa.slice(0, middle)
    const right = aaa.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let result = []
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++
        } else {
            result.push(right[rightIndex])
            rightIndex++
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

// monticulos

// Función para convertir un arreglo en un montículo máximo
function buildMaxHeap(arr) {
    const n = arr.length;

    // Comenzamos desde el último nodo interno y realizamos down-heapify
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
}

// Función para reorganizar el montículo
function heapify(arr, n, i) {
    let largest = i
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right
    }

    if (largest !== i) {
        // Intercambiamos el nodo actual con el nodo más grande
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        // Realizamos down-heapify en el subárbol afectado
        heapify(arr, n, largest)
    }
}

// Función principal de ordenamiento por montículos
function ordenarPorMonticulos(aaa) {
    const n = aaa.length

    // Construimos un montículo máximo
    buildMaxHeap(aaa)

    // Extraemos elementos uno por uno del montículo
    for (let i = n - 1; i > 0; i--) {
        // Movemos el elemento raíz actual al final
        [aaa[0], aaa[i]] = [aaa[i], aaa[0]]
        // Llamamos a heapify en el montículo reducido
        heapify(aaa, i, 0)
    }

    return aaa
}

// Función para particionar el arreglo y elegir un pivote
function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

// Función principal de QuickSort
function quickSort(aaa, low = 0, high = aaa.length - 1) {
    if (low < high) {
        const pi = partition(aaa, low, high)

        // Ordenamos los elementos antes y después del pivote
        quickSort(aaa, low, pi - 1)
        quickSort(aaa, pi + 1, high)
    }
    return aaa
}