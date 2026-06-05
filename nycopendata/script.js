let allData = [];

async function getData(){

    let response = await fetch("coffee.json");
    let data = await response.json();

    allData = data;

    if(document.getElementById("results")){
        displayData(allData);
    }

    if(document.getElementById("chart")){
        createChart(allData);
        createMap(allData);
    }
}

getData();

function displayData(data){

    let results = document.getElementById("results");
    results.innerHTML = "";

    for(let i = 0; i < data.length; i++){

        let item = data[i];

        results.innerHTML += `
        <div class="card">

            <h3>${item.name}</h3>

            <p><b>Borough:</b> ${item.borough}</p>
            <p><b>Address:</b> ${item.address}</p>
            <p><b>Rating:</b> ${item.rating}</p>

        </div>
        `;
    }
}

function searchData(){

    let input = document.getElementById("searchBox").value.toLowerCase();

    let filtered = [];

    for(let i = 0; i < allData.length; i++){

        let name = allData[i].name;

        if(name.toLowerCase().includes(input)){
            filtered.push(allData[i]);
        }
    }

    displayData(filtered);
}

function resetData(){
    displayData(allData);
}

function createChart(data){

    let manhattan = 0;
    let brooklyn = 0;
    let queens = 0;

    for(let i = 0; i < data.length; i++){

        if(data[i].borough == "Manhattan"){
            manhattan++;
        }
        else if(data[i].borough == "Brooklyn"){
            brooklyn++;
        }
        else{
            queens++;
        }
    }

    c3.generate({
        bindto:"#chart",
        data:{
            columns:[
                ["Manhattan", manhattan],
                ["Brooklyn", brooklyn],
                ["Queens", queens]
            ],
            type:"bar"
        }
    });
}

function createMap(data){

    let map = L.map("map").setView([40.7128,-74.0060],11);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
        attribution:"OpenStreetMap"
    }).addTo(map);

    for(let i=0;i<data.length;i++){

        let item = data[i];

        L.marker([item.latitude,item.longitude])
        .addTo(map)
        .bindPopup(item.name);
    }
}