const toggle = function (elem) {
    elem.classList.toggle('d-none');
};

const swap = function(elem) {
    var divs = elem.getElementsByTagName("div");
    divs[0].parentNode.appendChild(divs[0].parentNode.replaceChild(divs[2], divs[0]));
};


document.addEventListener(
    'click',
    function (event) {
        if (event.target.classList.contains('experience')) {
            event.preventDefault();
            const content = document.getElementById('experience-section');

            swap(content);
        } else if(event.target.classList.contains('toggle')){
            event.preventDefault();
            const content = document.querySelector(event.target.hash);
            if (!content) return;
            toggle(content);
        } return;
    },
    false
);
