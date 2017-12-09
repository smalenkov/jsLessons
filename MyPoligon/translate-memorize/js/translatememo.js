let btn = document.getElementById('translate-btn');
btn.addEventListener('click', runRequest);

let options = {
  method: "POST",
  mode: 'cors',
  headers: {
    "Content-type": "application/x-www-form-urlencoded"
  }
};

function runRequest() {
  options['body'] = 'text=' + document.getElementById('totranslate').value;

  fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20171209T032315Z.9f84871bb747909b.328bbdae561f9d2a8ced6b765482c89c53e42d7e&lang=en-ru', options)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let contentEl = document.getElementById('translate');
      contentEl.innerText = data.text[0];
    })
    .catch(console.log('Request error!'));
}

// let text = document.getElementById('totranslate').textContent;