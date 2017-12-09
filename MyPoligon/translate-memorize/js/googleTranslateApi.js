function doGet(e) {
  console.dir(e);

  let inputText = document.getElementById('totranslate').value;

  let sourceText = inputText;
  // if (e.parameter.q){
  //   sourceText = e.parameter.q;
  // }

  let sourceLang = 'en';
  // if (e.parameter.source){
  //   sourceLang = e.parameter.source;
  // }

  let targetLang = 'ru';
  // if (e.parameter.target){
  //   targetLang = e.parameter.target;
  // }

  /* Option 1 */

  let translatedText = LanguageApp.translate(sourceText, sourceLang, targetLang);

  /* Option 2 */

  let url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="
    + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);

  let result = JSON.parse(UrlFetchApp.fetch(url).getContentText());

  translatedText = result[0][0][0];

  let json = {
    'sourceText' : sourceText,
    'translatedText' : translatedText
  };

  // set JSONP callback
  let callback = 'callback';
  if(e.parameter.callback){
    callback = e.parameter.callback
  }

  // return JSONP
  return ContentService
    .createTextOutput(callback + '(' + JSON.stringify(json) + ')')
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}

let btn = document.getElementById('translate-btn');
btn.addEventListener('click', function(e) { doGet(e) });