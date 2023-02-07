const btn = document.querySelector('.btn-request1');

btn.addEventListener('click', () => {
    const value1 = +document.querySelector('.input1').value;
    const value2 = +document.querySelector('.input2').value;

    let result = document.querySelector('.j-result');
    result.textContent = '';
    if(!(value1 >= 100 && value1 <= 300 && value2 >= 100 && value2 <= 300)) {
        result.textContent = 'Одно из чисел вне диапазона от 100 до 300 !!!';
        return;
    }

    fetch(`https://picsum.photos/${value1}/${value2}`)
        .then((response) => {
            document.getElementById('j-result').src = response.url;
        });
});