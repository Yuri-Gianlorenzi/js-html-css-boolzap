var app = new Vue ({
  el : '#app',
  data : {
    chatIndex : 0,
    newText : '',
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
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'ooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
            status: 'received'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
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
            text: 'Ma la sai l\'ultima? Marianna va in campagna... labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
            status: 'received'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ciao bello Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'ooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
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
        name : 'Marco Bafforosso',
        avatar : 'img/avatar_4.jpg',
        visible : false,
        messages : [
          {
            date : '26/03/2020 20:10:40',
            text: 'Dovremmo trovare il sostituto di Marianna',
            status: 'received'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ciao bello Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            status: 'sent'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'ooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
            status: 'received'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'sent'
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
      }

    ]//fine dati contatti
  },//fine data

  computed : {
    takeMessages: function () {
      // qui usiamo un coomputed che mi restituisce un array contenente OGGETTI che rappresentano i messaggi dell'utente selezionato, tramite il chat index
      return this.contacts[this.chatIndex].messages;
    }
  },//fine computed

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
      console.log(this.takeMessages);
    },// fine showChat

    sendMessage (e, chatIndex) {
      // qui creiamo la funzione che inserisce il messaggio digitato nel relativo "contenitore" quando premiamo il tasto invio e abbiamo digitato almeno un carattere
      console.log(e.keyCode);
      if (this.newText.length > 0 && e.keyCode == 13) {

        // con queste indicazioni, utilizzando il chatIndex come riferimento, andiamo nel relativo contatto e pushamo un intero oggetto dentro l'array messages. dentro l'oggetto si trova il testo digitato, lo status 'sent' e la data
        this.contacts[this.chatIndex].messages.push({date: '14:08', text: this.newText, status: 'sent'});
        // this.contacts[this.chatIndex].messages.
        console.log(this.contacts[this.chatIndex].messages);

        //qui creiamo una risposta istantanea al nostro messaggio
        this.contacts[this.chatIndex].messages.push({date: '14:08', text: 'Error: 404', status: 'received'});

        this.newText = '';
      }

    }//fine sendMessage
  }//fine methods
});
