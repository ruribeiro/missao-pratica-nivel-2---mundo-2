// Função para trocar os valores de duas posições em um vetor
const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };
  
  // Função para embaralhar os elementos de um vetor
  const shuffle = (arr, swaps) => {
    for (let i = 0; i < swaps; i++) {
      const j = Math.floor(Math.random() * arr.length);
      swap(arr, i, j);
    }
  };
  
  // Função para ordenar um vetor usando Bubble Sort
  const bubble_sort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
  };
  
  // Função para ordenar um vetor usando Selection Sort
  const selection_sort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      swap(arr, minIndex, i);
    }
  };
  
  // Função de partição para Quick Sort
  const partition = (arr, low, high) => {
    const pivot = arr[high];
    let i = (low - 1);
  
    for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) {
        i++;
        swap(arr, i, j);
      }
    }
  
    swap(arr, i + 1, high);
    return (i + 1);
  };
  
  // Função para ordenar um vetor usando Quick Sort (recursivo)
  const quick_sort = (arr, low, high) => {
    if (low < high) {
      const pi = partition(arr, low, high);
      quick_sort(arr, low, pi - 1);
      quick_sort(arr, pi + 1, high);
    }
  };
  function add() {
    const valorInput = document.getElementById('valor');
    const valoresList = document.getElementById('valores');
    const li = document.createElement('li');
    li.textContent = valorInput.value;
    valoresList.appendChild(li);
    valorInput.value = '';
}

function ordenar() {
    const valoresList = document.getElementById('valores');
    const algoritmoSelect = document.getElementById('algoritmo');
    const valores = [];
    for (let i = 0; i < valoresList.children.length; i++) {
        valores.push(parseInt(valoresList.children[i].innerHTML));
    }

    switch (algoritmoSelect.value) {
        case 'bubble':
            bubble_sort(valores);
            break;
        case 'selection':
            selection_sort(valores);
            break;
        case 'quick':
            quick_sort(valores, 0, valores.length - 1);
            break;
    }

    valoresList.innerHTML = valores.map(valor => `<li>${valor}</li>`).join('');
}

function misturar() {
    const valoresList = document.getElementById('valores');
    const valores = [];
    for (let i = 0; i < valoresList.children.length; i++) {
        valores.push(parseInt(valoresList.children[i].innerHTML));
    }

    shuffle(valores, valores.length);

    valoresList.innerHTML = valores.map(valor => `<li>${valor}</li>`).join('');
}