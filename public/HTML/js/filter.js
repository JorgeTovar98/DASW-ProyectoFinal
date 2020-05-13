function filterC(event){
    let select = document.querySelector("#campaigns");
    let selected = (select.options[select.selectedIndex].value);
    let activo = document.querySelector("#campanasActivas");
    activo.innerHTML = "";

    switch(selected){
        case "todos":
            $.ajax({
                method: 'GET',
                url: `/api/campaigns/${currentUser._id}`,
                headers: {"Authorization": currentToken},
                cache: false,
                success: function (res) {
                    console.log(res);
                    for (let count = 0; count < res.results.length; count++) {
                        activo.innerHTML += `<div>
                        <p id="campaingplatform" style="display:inline; font-size: 26px; color: white;">${res.results[count].platform} - ${res.results[count].email} &nbsp;&nbsp;&nbsp;</p>
                        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal" name=${res.results[count].id} onclick="verDetalle(this)" style="position: absolute; right: 50em;">Ver campaña</button>
                        <button type="button" class="btn btn-secondary" style="color: white !important; position: absolute; right: 39.8em;" onclick=alert("${res.results[count].linkcampaign}") >Link de campaña</button>
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
                url: `http://127.0.0.1:3003/api/campaigns/${currentUser._id}?platform=spotify`,
                headers: {"Authorization": currentToken},
                cache: false,
                success: function (res) {
                    let results = res.results.filter((x)=>x.platform=="spotify");
                    for (let count = 0; count < results.length; count++) {
                        activo.innerHTML += `<div>
                        <p id="campaingplatform" style="display:inline; font-size: 26px; color: white;">${results[count].platform} - ${results[count].email} &nbsp;&nbsp;&nbsp;</p>
                        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal" name=${results[count]._id} onclick="verDetalle(this)" style="position: absolute; right: 50em;">Ver campaña</button>
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
                url: `http://127.0.0.1:3003/api/campaigns/${currentUser._id}?platform=netflix`,
                headers: {"Authorization": currentToken},
                cache: false,
                success: function (res) {
                    let results = res.results.filter((x)=>x.platform=="netflix");
                    for (let count = 0; count < results.length; count++) {
                        activo.innerHTML += `<div>
                        <p id="campaingplatform" style="display:inline; font-size: 26px; color: white;">${results[count].platform} - ${results[count].email} &nbsp;&nbsp;&nbsp;</p>
                        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal" name=${results[count]._id} onclick="verDetalle(this)" style="position: absolute; right: 50em;">Ver campaña</button>
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
                url: `http://127.0.0.1:3003/api/campaigns/${currentUser._id}?platform=paypal`,
                headers: {"Authorization": currentToken},
                cache: false,
                success: function (res) {
                    let results = res.results.filter((x)=>x.platform=="spotify");
                    for (let count = 0; count < results.length; count++) {
                        activo.innerHTML += `<div>
                        <p id="campaingplatform" style="display:inline; font-size: 26px; color: white;">${results[count].platform} - ${results[count].email} &nbsp;&nbsp;&nbsp;</p>
                        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal" name=${results[count]._id} onclick="verDetalle(this)" style="position: absolute; right: 50em;">Ver campaña</button>
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