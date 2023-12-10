const a = document.getElementById('add');
const d = document.getElementById('del');
const wra = document.querySelector('.wrapper');

a.addEventListener('click', function() {
  var newButton = document.createElement('button');
  newButton.textContent = 'New Button';
  newButton.addEventListener('click', function() {
    wra.innerHTML = '';
  });
  wra.appendChild(newButton);
});

d.addEventListener('click', function() {
  wra.innerHTML = '';
});
