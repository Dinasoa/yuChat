function msgLoading(elt){
    const str_clone = elt.innerHTML;
    elt.classList.add('loading');
    elt.innerHTML = '<br>';
    setTimeout(function(){
        elt.innerHTML = str_clone;
        elt.classList.remove('loading')
    }, 1200);
}