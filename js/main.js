
document.getElementById('section-title').style.color = 'green';
document.getElementById('section-title2').style.color = 'red';

document.getElementById('players').style.backgroundColor = 'rgba(231, 247, 6, 0.31)';

document.getElementById('blogs').style.backgroundColor = 'rgba(6, 247, 194, 0.31)';

document.getElementById('section').style.backgroundColor = 'rgba(13, 242, 249, 0.31)';


document.getElementById('add-item').addEventListener('click', function () {
    const li = document.createElement('li');
    li.innerText = 'list-item';
    const ul = document.getElementById('li-list');
    ul.appendChild(li);
});


document.getElementById('add-num').addEventListener('click', function () {
    const inputNumber = document.getElementById('count-num');
    const inputValue = inputNumber.value;
    inputNumber.value = parseInt(inputValue) + 1;
});


