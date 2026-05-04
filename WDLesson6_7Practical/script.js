let data, info;

async function init(){  
  let link = "MVC.json";  
  info = await fetch(link);
  data = await info.json();
 
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];

    build += `
    <div class="fitted card">
      <h3>${crash.crash_date} ${crash.crash_time}</h3>
      <hr>
      <p>${crash.borough}</p>
      <p>${crash.zip_code}</p>
      <p>${crash.on_street_name}</p>
      <hr>
      <p>Injured: ${crash.number_of_persons_injured}</p>
      <p>Killed: ${crash.number_of_persons_killed}</p>
      <hr>
      <p>${crash.contributing_factor_vehicle_1}</p>
    </div>`;
  }

  output.innerHTML = build;
}


function filterByBorough(){
  let output = document.getElementById("output");
  let borough = document.getElementById("borough").value;

  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];

    if(crash.borough == borough){
      build += `
      <div class="fitted card">
        <p>${crash.borough}</p>
        <p>${crash.zip_code}</p>
        <p>${crash.on_street_name}</p>
        <hr>
        <p>Injured: ${crash.number_of_persons_injured}</p>
        <p>Killed: ${crash.number_of_persons_killed}</p>
        <hr>
        <p>${crash.contributing_factor_vehicle_1}</p>
      </div>`;
    }
  }

  output.innerHTML = build;
}


function filterByZip(){
  let output = document.getElementById("output");
  let zip = document.getElementById("zip").value;

  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];

    if(crash.zip_code == zip){
      build += `
      <div class="fitted card">
        <h3>${crash.crash_date} ${crash.crash_time}</h3>
        <p>${crash.borough}</p>
        <p>${crash.zip_code}</p>
        <p>${crash.on_street_name}</p>
        <hr>
        <p>Injured: ${crash.number_of_persons_injured}</p>
        <p>Killed: ${crash.number_of_persons_killed}</p>
        <hr>
        <p>${crash.contributing_factor_vehicle_1}</p>
      </div>`;
    }
  }

  output.innerHTML = build;
}


function filterByCause(){
  let output = document.getElementById("output");
  let cause = document.getElementById("cause").value;

  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];

    if(crash.contributing_factor_vehicle_1 == cause){
      build += `
      <div class="fitted card">
        <h3>${crash.crash_date} ${crash.crash_time}</h3>
        <p>${crash.borough}</p>
        <p>${crash.zip_code}</p>
        <p>${crash.on_street_name}</p>
        <hr>
        <p>Injured: ${crash.number_of_persons_injured}</p>
        <p>Killed: ${crash.number_of_persons_killed}</p>
        <hr>
        <p>${crash.contributing_factor_vehicle_1}</p>
      </div>`;
    }
  }

  output.innerHTML = build;
}


function filterMultiple(){
  let output = document.getElementById("output");
  let borough = document.getElementById("borough2").value;
  let zip = document.getElementById("zip2").value;

  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];

    if(crash.borough == borough && crash.zip_code == zip){
      build += `
      <div class="fitted card">
        <h3>${crash.crash_date} ${crash.crash_time}</h3>
        <p>${crash.borough}</p>
        <p>${crash.zip_code}</p>
        <p>${crash.on_street_name}</p>
        <hr>
        <p>Injured: ${crash.number_of_persons_injured}</p>
        <p>Killed: ${crash.number_of_persons_killed}</p>
        <hr>
        <p>${crash.contributing_factor_vehicle_1}</p>
      </div>`;
    }
  }

  output.innerHTML = build;
}