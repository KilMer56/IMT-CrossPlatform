const { Plugins } = capacitorExports;
const { Storage } = Plugins;
v
let array = getData();

if(array != null){
  let newListHtml = "";

  for(let conf of array){
    newListHtml += createCard(conf, false);
  }

  document.getElementById("list-cards").innerHTML = newListHtml;
}

function getData() {
  const req = new XMLHttpRequest();
  req.open('GET', 'https://devfest-nantes-2018-api.cleverapps.io/blog', false); 
  req.send(null);

  if (req.status === 200) {
    console.log("Réponse reçue");
    return JSON.parse(req.responseText);
  }
  else {
    console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
    return null;
  }
}

function createCard(conf, isLocalImage) {
  let image = isLocalImage
    ? `data:image/jpeg;base64, ${conf.image}`
    : `https://devfest2018.gdgnantes.com${conf.image}`;

  let newCard = `
    <ion-card class='my-card'>
      <img src='${image}' />
      <ion-card-header>
        <ion-card-title>${conf.title}</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        ${conf.brief}
      </ion-card-content>
    </ion-card>`;
  
  return newCard;
}