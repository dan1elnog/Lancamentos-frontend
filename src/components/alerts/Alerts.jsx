import toastr from 'toastr'

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "4000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  
}


export function showMessage(title ,type, message,){
    toastr[type](message, title)
}

export function errorMessage(message) {
    showMessage('Erro', 'error', message)
}


export function successMessage(title ,message) {
    showMessage(title, 'success', message)
}


export function warningMessage(title ,message) {
    showMessage(title, 'warning', message)
}