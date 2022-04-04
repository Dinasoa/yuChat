const [_in, _up] = document.querySelector('.account nav').children;
_in.onclick = _up.onclick = function(){
    _in.className = _up.className = '';
    this.classList.add('active')
}