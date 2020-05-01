function login() {
    let usuario = document.querySelector("#usrLog").value;
    let contraseña = document.querySelector("#passLog").value;
    $.ajax({
        method: 'GET',
        url: `http://127.0.0.1:3000/users/${usuario}`,
        success: function (resolve) {
            // Do something
            if (resolve.password == contraseña) {
                alert("Bienvenido");
                window.location = './home auth.html';
            }
            else{
                alert("Contraseña incorrecta");
            }
        },
        error: function (error) {
            alert("Las credenciales no son válidas.");
        }
    });
}