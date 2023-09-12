var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmPassword = document.querySelector('#confirm-password')
var form = document.querySelector('form')

function showError(input){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}
function showSuccess(input){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = ''
}

//check thông tin nhập vào bị trống
function checkEmptyError(listInput){
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim()

        if(!input.value){
            isEmptyError = true
            showError(input,'Không được phép bỏ trống')
        }else{
            showSuccess(input)
        }
    });

    return isEmptyError
}

function checkLengError(input, min, max){
    input.value = input.value.trim()

    if(input.value.length < min){
        showError(input, 'Tên không được quá ngắn')
        return true
    }

    if(input.value.length > max){
        showError(input, 'Tên không được quá dài')
        return true
    }

    return false
}

form.addEventListener('submit', function(e){
    e.preventDefault()
    
    let isEmptyError = checkEmptyError([username, email, password, confirmPassword])
    let isUsernameLengthError = checkLengthError(username, 5, 30)
    let isPasswordError = checkLengthError(password, 5, 30)
})