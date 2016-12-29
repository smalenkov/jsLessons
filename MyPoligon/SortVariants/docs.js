;(function () {

  var arr = [3, 1, 5, 9, 12, 55, 100, 23, 13, 97, 62, 31];

  // Сортировка пузырьком

  function runSortBubble() {

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


  // Сортируем список

  function runSortSelect() {

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


  window.sortBubble = runSortBubble;
  window.sortSelect = runSortSelect;
})();