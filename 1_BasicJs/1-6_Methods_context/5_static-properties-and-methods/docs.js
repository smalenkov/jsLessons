;(function() {

  function runDoc_1() {
    function Article() {
      Article.count++;
    }
    Article.count = 0;

    Article.showCount = function() {
      alert(this.count); // (1)
    };
    // использование
    new Article();
    new Article();
    Article.showCount(); // (2)
  }

  //  Поиск самого раннего журнала из массива
  function runDoc_2() {
    function Journal(date) {
      this.date = date;

      this.formatDate = function(date) {
        return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
      };

      this.getTitle = function() {
        return "Выпуск от " + this.formatDate(this.date);
      };

    }

    Journal.compare = function(journalA, journalB) {
      return journalA.date - journalB.date;
    };

    // использование:
    var journals = [
      new Journal(new Date(2012, 1, 1)),
      new Journal(new Date(2012, 5, 10)),
      new Journal(new Date(2010, 0, 7)),
      new Journal(new Date(2012, 12, 4)),
      new Journal(new Date(2012, 2, 1)),
      new Journal(new Date(2011, 11, 1))
    ];

    function findMin(journals) {
      var min = 0;
      for (var i = 0; i < journals.length; i++) {
        // используем статический метод
        if (Journal.compare(journals[min], journals[i]) > 0) min = i;
      }
      return journals[min];
    }

    alert(findMin(journals).getTitle());
  }


  // Из описания 3

  function runDoc_3() {
    function User() {
      this.sayHi = function() {
        alert(this.name)
      };
    }

    User.createAnonymous = function() {
      var user = new User;
      user.name = 'Аноним';
      return user;
    }

    User.createFromData = function(userData) {
      var user = new User;
      user.name = userData.name;
      user.age = userData.age;
      return user;
    }

    // Использование

    var guest = User.createAnonymous();
    guest.sayHi(); // Аноним

    var knownUser = User.createFromData({
      name: 'Вася',
      age: 25
    });
    knownUser.sayHi(); // Вася
  }


  // Задания

  function runTask_1() {
    function Article() {
      this.created = new Date();
      Article.last = this.created;

      Article.count++;
    }

    Article.count = 0;

    Article.showStats = function() {
      alert('Всего: ' + this.count + ' Последняя ' + Date(this.last));
    };

    new Article();
    new Article();

    Article.showStats(); // Всего: 2, Последняя: (дата)

    new Article();

    Article.showStats(); // Всего: 3, Последняя: (дата)
  }

  window.run = runTask_1;
}());
