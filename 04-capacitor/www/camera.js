
const { Plugins, CameraResultType } = capacitorExports;
const { Camera } = Plugins;

let modal = null;
let lastImage = null;

customElements.define('modal-page', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-title>Création d'un article privé</ion-title>
          <ion-buttons slot="primary">
            <ion-button onClick="dismissModal()">
              <ion-icon slot="icon-only" name="close"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <form>
        <ion-item>
          <ion-label position="floating">Titre</ion-label>
          <ion-input required="true" name="title"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Description</ion-label>
          <ion-textarea name="brief"></ion-textarea>
        </ion-item>
        <br/>
        <ion-button expand="block" onclick="saveData()">Enregistrer</ion-button>
        </form>
      </ion-content>`;
  }
});

async function takePicture() {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Base64,
  });

  lastImage = image.base64String;

  presentModal();
}

function presentModal() {
  // create the modal with the `modal-page` component
  modal = document.createElement('ion-modal');
  modal.component = 'modal-page';

  // present the modal
  document.body.appendChild(modal);
  return modal.present();
}

async function dismissModal() {
  await modal.dismiss({
    'dismissed': true
  });
}

function saveData() {
  const formData = new FormData(document.querySelector('form'));
  let data = formDataToObject(formData);

  if(data.title && lastImage){
    data.image = lastImage;
    lastImage = null;

    document.getElementById("list-cards").innerHTML += createCard(data, true);
    dismissModal();
  }
  else {
    alert('Image ou titre non renseigné');
  }

}

function formDataToObject(formData) {
  let object = {};
  formData.forEach((value, key) => {object[key] = value});

  return object;
}



