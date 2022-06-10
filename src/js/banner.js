if (!window.localStorage.getItem('first-time')) {
  document.querySelector('.banner').style.display = 'block';
} else {
  document.querySelector('.banner').style.display = 'none';
}

window.localStorage.setItem('first-time', 'true');

document.querySelector('.banner__close').addEventListener('click', function () {
  this.closest('.banner').style.display = 'none';
});
