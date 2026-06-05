function BHS(){
  let school = {
    "name":"Bayside High School",
    "image":"https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    "address": "32-24 Corporal Kennedy Street, Bayside NY 11361"
  };
  let output = document.getElementById("output");
    
  let cardHTML = `
    <div style="border: 1px solid #ccc; padding: 16px; width: 300px; border-radius: 8px; box-shadow: 2px 2px 8px #aaa;">
      <h2>${school.name}</h2>
      <img src="${school.image}" alt="${school.name}" style="width:100%; border-radius: 8px;">
      <p><strong>Address:</strong> ${school.address}</p>
    </div>
  `;


}
function artist(){
  //Challenge 2: Fill the JSON below with the specified information for your favorite artist
  let artist = {
    "name":"Adele", 
    "image":"https://upload.wikimedia.org/wikipedia/commons/7/7f/Adele_2016.jpg",
    "album":"30",
    "url":"https://www.adele.com/"
  };
  let output = document.getElementById("output");

   let cardHTML = `
    <div style="border: 1px solid #ccc; padding: 16px; width: 300px; border-radius: 8px; box-shadow: 2px 2px 8px #aaa;">
      <h2>${artist.name}</h2>
      <a href="${artist.url}" target="_blank">
        <img src="${artist.image}" alt="${artist.name}" style="width:100%; border-radius: 8px;">
      </a>
      <p><strong>Album:</strong> ${artist.album}</p>
    </div>
  `;

  output.innerHTML = cardHTML;
}






