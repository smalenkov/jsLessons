;(function () {


  // Сортировка пузырьком

  function bubbleSort(arr) {

    for (var i = 0; i < arr.length; i++) {
      for (var j = arr.length - 1; j > i; j--) {
        if (arr[j - 1] > arr[j]) {
          var x = arr[j - 1];
          arr[j - 1] = arr[j];
          arr[j] = x;
        }
      }
    }

    document.write(arr);
    document.write("<br> Длинна массива: " + arr.length);

  }

  function quickSort(arr) {

    if (arr.length == 0) return [];
    var a = [], b = [], p = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < p) a[a.length] = arr[i];
      else b[b.length] = arr[i];
    }
    return quickSort(a).concat(p, quickSort(b));

    document.write(arr);
    document.write("<br> Длинна массива: " + arr.length);

  }


  // Сортируем список

  function runSelectSort() {

    var selectList = document.getElementById('city-select');
    var selectListOpt = selectList.options;
    var optArr = [];

    function sortNum(a, b) {
      if (a.text > b.text) return 1;
      if (a.text < b.text) return -1;
    }

    for (var i = 0; i < selectListOpt.length; i++) {
      optArr.push(selectListOpt[i]);
    }

    optArr.sort(sortNum);

    for (var i = 0; i < optArr.length; i++) {
      selectListOpt[i] = optArr[i];
    }

  }


  window.runBubbleSort = bubbleSort;
  window.runQuickSort = quickSort;
  window.runSelectSort = runSelectSort;
})();