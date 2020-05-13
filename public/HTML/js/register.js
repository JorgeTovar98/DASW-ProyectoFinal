function register() {
    let usuarioR = document.querySelector("#regUser").value;
    let contraseñaR = document.querySelector("#regPass").value;
    let emailR = document.querySelector("#regEmail").value;
    let phoneR = document.querySelector("#regPhone").value;
    let nameR = document.querySelector("#regName").value;
    let peticion = {
        fullName: nameR,
        user: usuarioR,
        password: contraseñaR,
        email: emailR,
        phone: phoneR
    };
    $.ajax({
        method: 'POST',
        url: "/api/user",
        data: peticion,
        dataType: "json",
        success: function (resolve) {
            alert("Usuario registrado correctamente, favor de iniciar sesión");
            window.open('./login.html');
        },
        error: function (error) {
            console.log("ERROR:" + JSON.stringify(error));
        }
        
    });
    event.preventDefault()
}