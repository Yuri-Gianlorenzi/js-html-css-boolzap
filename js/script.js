var app = new Vue ({
  el : '#app',
  data : {
    chatIndex : 0,
    user : {
      name : 'Yuri Gianlorenzi',
      avatar : 'img/Saitama.jpg'
    },//fine dati utente

    contacts : [
      {
        name : 'Michele Pel di Carota',
        avatar : 'img/avatar_1.jpg',
        visible : false,
        messages : [
          {
            date : '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
        ]
      },
      {
        name : 'Marcello TopGun',
        avatar : 'img/avatar_2.jpg',
        visible : false,
        messages : [
          {
            date : '27/03/2020 09:10:40',
            text: 'Ma davvero Marianna va in campagna?',
            status: 'received'
          }
        ]
      },
      {
        name : 'Guglielmo Cancelli',
        avatar : 'img/avatar_3.jpg',
        visible : false,
        messages : [
          {
            date : '29/03/2020 11:30:40',
            text: 'Ma la sai l\'ultima? Marianna va in campagna... ',
            status: 'received'
          }
        ]
      },
      {
        name : 'Marco Bafforosso',
        avatar : 'img/avatar_4.jpg',
        visible : false,
        messages : [
          {
            date : '26/03/2020 20:10:40',
            text: 'Dovremmo trovare il sostituto di Marianna',
            status: 'received'
          }
        ]
      },
      {
        name : 'Jhonny Jogging',
        avatar : 'img/avatar_5.jpg',
        visible : false,
        messages : [
          {
            date : '30/03/2020 06:10:40',
            text: 'Cha bello che è andare a correre con Marianna',
            status: 'received'
          }
        ]
      },
      {
        name : 'Melisandre',
        avatar : 'img/avatar_6.jpg',
        visible : false,
        messages : [
          {
            date : '28/03/2020 10:10:40',
            text: 'Ti va di sostituire Marianna',
            status: 'sent'
          }
        ]
      },
      {
        name : 'Uno Qualsiasi',
        avatar : 'img/avatar_7.jpg',
        visible : false,
        messages : [
          {
            date : '28/03/2020 10:10:40',
            text: 'Andrà tutto bene',
            status: 'received'
          }
        ]
      },

    ]//fine dati contatti
  },//fine data

  methods : {
    showChat (indexContact) {
      //qui indichiamo che una volta cliccato sulla chat a sinistra, la chat cliccata deve diventare visibile(= true), quindi prima si cicla nell'array dei contatti per portare tutte le visible + false, e po si da a quella selezionata (tramite indexContact) il visible = true

      // qui utilizziamo la variabile catturata per assegnarla al chatIndex, questo ci tornerà utile per assegnare la classe active al contenitore/chat selezionato tramite un ciclo if dentro un v-bind per la classe
      this.chatIndex = indexContact;


      // controllo sull'array per portare tutte le key visible=false
      this.contacts.forEach((element) => {
        element.visible = false;
      });

      //qui assegnamo all'elemento selezionato, il valore true alla key visible
      this.contacts[indexContact].visible = true;

      console.log(this.contacts[indexContact]);
      console.log(this.contacts);
    }
  }//fine methods
});
