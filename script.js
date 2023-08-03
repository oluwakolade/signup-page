const form = document.querySelector('.form-card form');
const inputs = document.querySelectorAll('.form-card input');
const error = document.querySelectorAll('.error');
const errorIcon = document.querySelectorAll('.error-icon');

form.addEventListener('submit', function(e){
    e.preventDefault();
    inputs.forEach((input) => {
        if(!input.value) {
            input.parentElement.classList.add('error');
        } else {
            input.parentElement.classList.remove('error');
            if(input.type == 'email'){
                if(validateEmail(input.value)){
                    input.parentElement.classList.remove('error');

                } else{
                    input.parentElement.classList.add('error');
                    
                }
            }
        }
    });

});


function validateEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());

}














// function validateInput() {
//     for(let i = 0; i < input.length ; i++ ){
//         input[i].addEventListener('blur',function(){
//             


//             if(!this.value){
//                 this.classList.add('invalid');
//                 error[i].classList.add('visible');
//                 errorIcon[i].classList.add('visible');

//             } else{
//                 this.classList.remove('invalid');
//                 error[i].classList.remove('visible');
//                 errorIcon[i].classList.remove('visible');


//             }
//         } )
//     }

// }

// // button.addEventListener('click' , function(){
//     if(input.value.length == 0){
//         error.classList.remove('visible');
//         errorIcon.classList.remove('visible');
//         placeholder.classList.add('visible');
        
//     }
// })

