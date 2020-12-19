const toggle = function (elem) {
  elem.classList.toggle('d-none');
};

document.addEventListener(
  'click',
  function (event) {
    if (!event.target.classList.contains('toggle')) return;
    event.preventDefault();
    const content = document.querySelector(event.target.hash);
    if (!content) return;
    toggle(content);
  },
  false
);
