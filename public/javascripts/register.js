window.addEventListener('load', function() {

    let formRegister = document.getElementById('Register');

    formRegister.addEventListener('submit', function(e) {

        let err = [];

        let inputFirstName = document.getElementById('firstName');

        if (inputFirstName.value == '') err.push('Field Required');

        console.log(err);

        if (err > 0) {

            console.log('Hay errores');
            
            e.preventDefault();
            
        }
        
    })
    
})