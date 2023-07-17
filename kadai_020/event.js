const h2 = document.getElementById('text');
const button = document.getElementById('btn');


button.addEventListener('click', () => {
    window.setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
    },2000);
});
