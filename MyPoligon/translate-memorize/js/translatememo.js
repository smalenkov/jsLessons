let btn = document.getElementById('translate-btn');
btn.addEventListener('click', runRequest);

function success(data) {
  let listEl = document.createElement('li');
  listEl.innerText = data.text[0];

  let contentEl = document.getElementById('translate-list');

  contentEl.appendChild(listEl);
  contentEl.insertBefore(listEl, contentEl.firstChild);
}

let options = {
  method: "POST",
  mode: 'cors',
  headers: {
    "Content-type": "application/x-www-form-urlencoded"
  }
};

function runRequest() {
  let inputText = document.getElementById('totranslate').value;
  options['body'] = `text=${inputText}`;

  fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20171209T032315Z.9f84871bb747909b.328bbdae561f9d2a8ced6b765482c89c53e42d7e&lang=en-ru', options)
    .then(function(response) {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then(success)
    .catch( () => {throw new Error('Request from translate API error...')} );
}