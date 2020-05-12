function login() {
    let usuario = document.querySelector("#usrLog").value;
    let contraseña = document.querySelector("#passLog").value;
    let peticion = {
        user: usuario,
        password: contraseña
    }
    $.ajax({
        method: 'POST',
        url: `http://127.0.0.1:3003/api/login`,
        data: peticion,
        dataType: "json",
        success: function (resolve) {
            alert("Bienvenido");
            sessionStorage.setItem("token",resolve.token);
            sessionStorage.setItem("user",JSON.stringify(resolve.User));
            window.location = './home auth.html';
        },
        error: function(resolve){
            alert("Credenciales inválidas");
        }
    });
}