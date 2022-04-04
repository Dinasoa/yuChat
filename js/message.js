window.addEventListener('DOMContentLoaded', function(){
    // only request uses jquery/ajax
    const [name, message, btn] = document.querySelector('.msg_box form').children;
    // get all the form's input |name|message|button(send)
    const msgCompo = document.querySelector('.msg_box > main');
    // get the message container
    let isValid = false;
    // a boolean used to validate or no the message form
    name.onkeyup = message.onkeyup = function(e){
        // whether name/message input keyup event is triggered
        if ((/\s/g.test(name.value) || name.value == '') || message.value.replace(/\s/g, '') == ''){
            //   if (name) contains whitespace or it's blank
            //OR if (message) contains no letter
            btn.classList.remove('valid');
            // then remove button is not available and considered as norma input button
            isValid = false;
        }else{
            btn.classList.add('valid');
            // else it's available and considered as the form submission's button
            isValid = true;
        }
        if (e.key == 'Enter') { btn.click() }
    }

    btn.addEventListener('click', function(){
        // on click on the (send) button
        if (!this.classList.contains('loading')) {
            if (isValid == true) {
                msgLoading(this);
                // when send button is clicked... a loading is shown
                isValid = !isValid;
                // and Send (button) is set to unvalid

                setTimeout(function(){
                    $.post('./message/msg_post.php',
                    {
                        name: name.value,
                        message: message.value
                    }, response => {
                        // callback fn
                        msgCompo.innerHTML = response;
                        // get the data from the server (response)
        
                        message.value = '';
                        message.focus();
                        // empty message input and focus on
        
                        msgCompo.lastChild.scrollIntoView();
                        // auto scroll to the newest message
                    })
                }, 1200)
            } else {
                alert(`contraint : \n\t- Name shouldn't contains whitespace\n\t- Message shouln't be just a lot of whitespace`);
            }
        }
    })

    let iLength = msgCompo.children.length;
    setInterval(() => {
        $.get('./message/display_msg.php', response => msgCompo.innerHTML = response);
        if (iLength != msgCompo.children.length) { msgCompo.lastChild.scrollIntoView() }
        iLength = msgCompo.children.length;
    }, 120);

});