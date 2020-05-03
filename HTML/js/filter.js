function filterC(event){
    let select = document.querySelector("#campaigns");
    let selected = (select.options[select.selectedIndex].value);
    let activo = document.querySelector("#campanasActivas");
    activo.innerHTML = "";

    switch(selected){
        case "todos":
            $.ajax({
                method: 'GET',
                url: `http://127.0.0.1:3000/campaign?createdBy=jorge`,
                cache: false,
                success: function (result) {
                    console.log(result);
                    for (let count = 0; count < result.length; count++) {
                        activo.innerHTML += `<div>
                        <p id="campaingplatform" style="display:inline; font-size: 26px; color: white;">${result[count].platform} - ${result[count].email} &nbsp;&nbsp;&nbsp;</p>
                        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal" name=${result[count].id} onclick="verDetalle(this)" style="position: absolute; right: 50em;">Ver campaña</button>
                        <button type="button" class="btn btn-secondary" style="color: white !important; position: absolute; right: 39.8em;" >Link de campaña</button>
                        <button type="button" class="btn btn-light" style="position: absolute; right: 32.3em;">Estadística</button>
                    </div>`;
                    }
                },
                error: function (error) {
                    console.log("ERROR:" + JSON.stringify(error));
                }
            })
        break;
        
        case "spotify":
            $.ajax({
                method: 'GET',
                url: `http://127.0.0.1:3000/campaign?createdBy=jorge&platform=spotify`,
                cache: false,
                success: function (result) {
                    console.log(result);
                    for (let count = 0; count < result.length; count++) {
                        activo.innerHTML += `<div>
                        <p id="campaingplatform" style="display:inline; font-size: 26px; color: white;">${result[count].platform} - ${result[count].email} &nbsp;&nbsp;&nbsp;</p>
                        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal" name=${result[count].id} onclick="verDetalle(this)" style="position: absolute; right: 50em;">Ver campaña</button>
                        <button type="button" class="btn btn-secondary" style="color: white !important; position: absolute; right: 39.8em;" >Link de campaña</button>
                        <button type="button" class="btn btn-light" style="position: absolute; right: 32.3em;">Estadística</button>
                    </div>`;
                    }
                },
                error: function (error) {
                    console.log("ERROR:" + JSON.stringify(error));
                }
            })
        break;

        case "netflix":
            $.ajax({
                method: 'GET',
                url: `http://127.0.0.1:3000/campaign?createdBy=jorge&platform=netflix`,
                cache: false,
                success: function (result) {
                    console.log(result);
                    for (let count = 0; count < result.length; count++) {
                        activo.innerHTML += `<div>
                        <p id="campaingplatform" style="display:inline; font-size: 26px; color: white;">${result[count].platform} - ${result[count].email} &nbsp;&nbsp;&nbsp;</p>
                        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal" name=${result[count].id} onclick="verDetalle(this)" style="position: absolute; right: 50em;">Ver campaña</button>
                        <button type="button" class="btn btn-secondary" style="color: white !important; position: absolute; right: 39.8em;" >Link de campaña</button>
                        <button type="button" class="btn btn-light" style="position: absolute; right: 32.3em;">Estadística</button>
                    </div>`;
                    }
                },
                error: function (error) {
                    console.log("ERROR:" + JSON.stringify(error));
                }
            })
        break;

        case "paypal":
            $.ajax({
                method: 'GET',
                url: `http://127.0.0.1:3000/campaign?createdBy=jorge&platform=paypal`,
                cache: false,
                success: function (result) {
                    console.log(result);
                    for (let count = 0; count < result.length; count++) {
                        activo.innerHTML += `<div>
                        <p id="campaingplatform" style="display:inline; font-size: 26px; color: white;">${result[count].platform} - ${result[count].email} &nbsp;&nbsp;&nbsp;</p>
                        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal" name=${result[count].id} onclick="verDetalle(this)" style="position: absolute; right: 50em;">Ver campaña</button>
                        <button type="button" class="btn btn-secondary" style="color: white !important; position: absolute; right: 39.8em;" >Link de campaña</button>
                        <button type="button" class="btn btn-light" style="position: absolute; right: 32.3em;">Estadística</button>
                    </div>`;
                    }
                },
                error: function (error) {
                    console.log("ERROR:" + JSON.stringify(error));
                }
            })
        break; 
    }
    
}
