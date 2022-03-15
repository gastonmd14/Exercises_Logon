window.addEventListener('load', function() {

    let formRegister = document.getElementById('Register');

    formRegister.addEventListener('submit', function(e) {

        let err = [];

        let inputEmail = document.getElementById('email');

        if (inputEmail.value == '') err.push('Email Required');

        let inputPassword = document.getElementById('password');

        if (inputPassword.value == '') err.push('Password Required');

        let inputRetypePassword = document.getElementById('retype password');

        if (inputRetypePassword.value == '') err.push('Retype Password Required');

        
        if (err.length > 0) {

            console.log(err);
            
            e.preventDefault();
            
        }
        
    })
    
})