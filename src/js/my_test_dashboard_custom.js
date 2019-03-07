window.onload = function() {
    setTimeout(function() {
        // window.open('http://localhost:3000/')

        const modal_ref =  document.getElementById(modal_id);
        modal_ref.style.display = 'block';

        const close_ref = document.getElementById(close_icon_id);
        close_ref.onclick = function() {
            console.log('close modal');
            modal_ref.style.display = 'none';            
        }

        console.log('window opened');
    }, 5000);

    const modal_id = 'myModal-xxx125cc';
    const close_icon_id = 'close-sdsdsvs23132'
    function createModal() {
        const modal_wrappper = document.createElement('DIV');
        modal_wrappper.id = modal_id;
        modal_wrappper.classList.add('modal');
        
        const modal = document.createElement('DIV');
        modal.classList.add('modal-content');

        const close_icon = document.createElement('SPAN');
        close_icon.classList.add('close');
        close_icon.id = close_icon_id;
        close_icon.innerHTML = '&times;';

        const modal_content = document.createElement('P');

        modal.appendChild(close_icon);
        modal.appendChild(modal_content);
        modal_wrappper.appendChild(modal);

        document.body.appendChild(modal_wrappper);
    }
    createModal();
}
console.log('custom script loaded');


