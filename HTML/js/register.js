function register() {
    let usuarioR = document.querySelector("#regUser").value;
    let contraseñaR = document.querySelector("#regPass").value;
    let emailR = document.querySelector("#regEmail").value;
    let phoneR = document.querySelector("#regPhone").value;
    let nameR = document.querySelector("#regName").value;
    let peticion = {
        username: usuarioR,
        password: contraseñaR,
        email: emailR,
        phone: phoneR,
        name: nameR,
        id: usuarioR
    };
    $.ajax({
        method: 'POST',
        url: "http://127.0.0.1:3000/users",
        data: peticion,
        dataType: "json",
        success: function (token) {
            // Do something
            alert("Usuario registrado correctamente, favor de iniciar sesión");
            window.open('./login.html');
            document.cookie = `token=${token};`; 
        },
        error: function (error) {
            console.log("ERROR:" + JSON.stringify(error));
        }
        
    });
    event.preventDefault()
}