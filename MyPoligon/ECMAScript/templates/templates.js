const user = {
  firstName: 'Василий',
  lastName: 'Драченкин'
};

let person = ({ firstName, lastName }) => {
  return `
    <strong>${firstName} ${lastName}</strong>    
  `;
};

let pageBlock = ({ person, hellos }) => {
  return `
    <div class="user-block">
        <h1>Добрый день, ${hellos}</h1>
        <ul>
            <li>${person}</li>
        </ul>
    </div>
  `;
};

let data = {
  person: person(user),
  hellos: 'сударь'
};

let innerBlock = pageBlock(data);
let elem = document.getElementById('container');

elem.innerHTML = innerBlock;
