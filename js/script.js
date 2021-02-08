var app = new Vue ({
  el : '#app',
  data : {
    chatIndex : 0,
    messageIndex : 0,
    contactIndex : '',
    newText : '',
    search : '',
    writing : '',
    user : {
      name : 'Yuri Gianlorenzi',
      avatar : 'img/Saitama.jpg'
    },//fine dati utente

    contacts : [
      {
        name : 'Michele Pel di Carota',
        avatar : 'img/avatar_1.jpg',
        visible : true,
        openInfoChat : false,
        messages : [
          {
            date : '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received',
            open : false
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent',
            open : false

          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received',
            open : false

          }
        ]
      },
      {
        name : 'Marcello TopGun',
        avatar : 'img/avatar_2.jpg',
        visible : true,
        openInfoChat : false,
        messages : [
          {
            date : '27/03/2020 09:10:40',
            text: 'Ma davvero Marianna va in campagna?',
            status: 'received',
            open : false

          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent',
            open : false

          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received',
            open : false

          },
          {
            date: '28/03/2020 10:20:10',
            text: 'ooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
            status: 'received',
            open : false

          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received',
            open : false

          }
        ]
      },
      {
        name : 'Guglielmo Cancelli',
        avatar : 'img/avatar_3.jpg',
        visible : true,
        openInfoChat : false,
        messages : [
          {
            date : '29/03/2020 11:30:40',
            text: 'Ma la sai l\'ultima? Marianna va in campagna... labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
            status: 'received',
            open : false

          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ciao bello Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            status: 'received',
            open : false

          },
          {
            date: '28/03/2020 10:20:10',
            text: 'ooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
            status: 'sent',
            open : false

          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received',
            open : false

          }
        ]
      },
      {
        name : 'Marco Bafforosso',
        avatar : 'img/avatar_4.jpg',
        visible : true,
        openInfoChat : false,
        messages : [
          {
            date : '26/03/2020 20:10:40',
            text: 'Dovremmo trovare il sostituto di Marianna',
            status: 'received',
            open : false

          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ciao bello Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            status: 'sent',
            open : false

          },
          {
            date: '28/03/2020 10:20:10',
            text: 'ooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
            status: 'received',
            open : false

          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'sent',
            open : false

          }
        ]
      },
      {
        name : 'Jhonny Jogging',
        avatar : 'img/avatar_5.jpg',
        visible : true,
        openInfoChat : false,
        messages : [
          {
            date : '30/03/2020 06:10:40',
            text: 'Cha bello che è andare a correre con Marianna',
            status: 'received',
            open : false

          }
        ]
      },
      {
        name : 'Melisandre',
        avatar : 'img/avatar_6.jpg',
        visible : true,
        openInfoChat : false,
        messages : [
          {
            date : '28/03/2020 10:10:40',
            text: 'Ti va di sostituire Marianna',
            status: 'sent',
            open : false

          }
        ]
      },
      {
        name : 'Uno Qualsiasi',
        avatar : 'img/avatar_7.jpg',
        visible : true,
        openInfoChat : false,
        messages : [
          {
            date : '28/03/2020 10:10:40',
            text: 'Andrà tutto bene',
            status: 'received',
            open : false

          }
        ]
      }

    ]//fine dati contatti
  },//fine data

  computed : {
    takeMessages: function () {
      // qui usiamo un coomputed che mi restituisce un array contenente OGGETTI che rappresentano i messaggi dell'utente selezionato, tramite il chat index

      // let array = [];

      // this.contacts[this.chatIndex].messages.forEach(element => {
      //   element.open = false;
      // });



      return this.contacts[this.chatIndex].messages;
    },//fine takeMessages

    takeTimeMessage  : function () {
      //per formattare l'ora anche nel box messaggio, creiamo un computed collegato a takemessage(array contenente i messaggi della chat selezionata). qui cicliamo takeMessage, ad ogni elemento(ogni messaggio) prendiamo la parte di data che riguarda le ore, e viene pushato in un array vuoto. questo array, alla fine, sarà lungo tanto quanto take message, e i suoi elementi corrispondono esattamente all'ora del messaggio che è presente nell'array takemessage allo stesso indice
      let timeMessage = [];

      this.contacts[this.chatIndex].messages.forEach(element => {
        let textTime;
        textTime = element.date.slice(11, 16);
        // console.log('textime' + textTime);
        timeMessage.push(textTime);
      });
      return timeMessage;
    },//fine takeTimeMessage

    takeLastMessage: function () {

      //qui creiamo un array vuoto come variabile, qui verranno pushati, per ogni elemento di contacts, l'ultimo elemento-text dell'array messages, questo sarà il return della function e verrà utilizzato nel ciclo v-for della class chat. essendo un array contenetne l'ultimo messaggio di ogni contact ("convivono"), lo indicizziamo con l'incice del v-for e per ogni contatto, mi restituirà l'ultimo messaggio presente nei data
      let lastInfo = [];

      //NECESSARIO INSERIRE DEGLI IF CHE CONDIZIONANO IL COMPUTED PER FARE IN MODO CHE I CALCOLI AL SUO INTERNO VENGANO ESEGFUITI SOLO SE CI SONO MESSAGGI RIFERITI AL CONTATTO DEL CHAT INDEX
      if (this.contacts[this.chatIndex].messages.length > 0) {

        //usiamo un foreach per ciclare ogni elemento di contacts
        this.contacts.forEach((element) => {

          //creiamo una variabile che per ogni elemento, gli viene assegnato il numero dell'indice dell'ultimo elemento dell'array
          let positionLast = element.messages.length - 1;

          //questo numero viene utilizzato per pushare dentro l'array vuoto il testo dell'utlimo messaggio
          lastInfo.push(element.messages[positionLast].text);
        });

      }
      //last info è dunque un array contenete, nello stesso ordine di contacts, l'ultimo messaggio di ogni contatto
      return lastInfo;
    },//fine takeLastMessage

    takeLastTime : function () {
      //qui creiamo un'array che contiene SOLO L'ORARIO, creato usando slice sulla variabile che contiene la stringa data
      let lastTime = [];

      //NECESSARIO INSERIRE DEGLI IF CHE CONDIZIONANO IL COMPUTED PER FARE IN MODO CHE I CALCOLI AL SUO INTERNO VENGANO ESEGFUITI SOLO SE CI SONO MESSAGGI RIFERITI AL CONTATTO DEL CHAT INDEX
      if (this.contacts[this.chatIndex].messages.length > 0) {
        this.contacts.forEach(element => {
          let time;
          let positionLast = element.messages.length - 1;
          //time = element.messages[positionLast].date.slice(11);//si vedono anche i secondi
          time = element.messages[positionLast].date.slice(11, 16);// così solo ore e minuti
          // console.log(time);
          // time = time.slice(11);
          lastTime.push(time);
        });
      }
      return lastTime;
    }//fine timing


  },//fine computed

  // watch : {
  //   openMessageInfo : function (indexMessage) {
  //     if (!this.contacts[this.chatIndex].messages[indexMessage].open) {
  //
  //       this.takeMessages[indexMessage].open = true;
  //
  //     } else {
  //       this.takeMessages[indexMessage].open = false;
  //
  //
  //     }
  //   }
  // },//fine watch

  methods : {
    showChat (indexContact) {
      //qui indichiamo che una volta cliccato sulla chat a sinistra, la chat cliccata deve diventare visibile(= true), quindi prima si cicla nell'array dei contatti per portare tutte le visible + false, e po si da a quella selezionata (tramite indexContact) il visible = true

      // qui utilizziamo la variabile catturata per assegnarla al chatIndex, questo ci tornerà utile per assegnare la classe active al contenitore/chat selezionato tramite un ciclo if dentro un v-bind per la classe
      this.chatIndex = indexContact;


      // controllo sull'array per portare tutte le key visible=false
      // this.contacts.forEach((element) => {
      //   element.visible = false;
      // });

      //qui assegnamo all'elemento selezionato, il valore true alla key visible
      // this.contacts[indexContact].visible = true;

      console.log(this.contacts[indexContact]);
      console.log(this.contacts);
      // console.log(this.takeMessages);
    },// fine showChat

    sendMessage (e) {
      // qui creiamo la funzione che inserisce il messaggio digitato nel relativo "contenitore" quando premiamo il tasto invio e abbiamo digitato almeno un carattere

      if (this.newText.length > 0 && e.keyCode == 13) {

        // WARNING nella key date, pushamo la data e l'orario usando moment.filter. il filter ci permette di formattare l'orario come quello già presente nei contacs

        // con queste indicazioni, utilizzando il chatIndex come riferimento, andiamo nel relativo contatto e pushamo un intero oggetto dentro l'array messages. dentro l'oggetto si trova il testo digitato, lo status 'sent' e la data
        this.contacts[this.chatIndex].messages.push({date: moment().format("DD/MM/YYYY HH:mm:ss"), text: this.newText, status: 'sent', open : false});
        // this.contacts[this.chatIndex].messages.
        console.log(this.contacts[this.chatIndex].messages);

        //qui facciamo in modo che prima di ricevere il messaggio, si veda la scritta
        this.writing = 'Sta scrivendo...';

        // qui creiamo la stessa funzione, ma dentro un set interval per fare in modo che compaia dopo un secondo dopo il press di enter, il messaggio è precompilato
        setTimeout(() => {
          //qui per eliminare la scritta prima di ricevere il messaggio, in modo da restituire la data dell'ultimo accesso
          this.writing = '';

          this.contacts[this.chatIndex].messages.push({date: moment().format("DD/MM/YYYY HH:mm:ss"), text: 'Error: 404', status: 'received', open : false})

        },1500);

        //alla fine di tutto svuotiamo il newtext, in tal modo si svuota anche l'input nella pagina e si evita di cancellare ogni volta il messaggio dopo averlo inviato
        this.newText = '';

      }

    },//fine sendMessage

    searchContact () {
      //qui creiamo la funzione che permette la ricerca sui contatti della chat, tramite un v-model "ascoltiamo" quello che l'utente inserisce nell'input (NB SAPENDO CHE OGNI CONTACT HA VISIBLE = true COME CONDIZIONE PER ESSERE STAMPATO NEL V-FOR HTML), con un foreach cicloamo ogni elemento di contacts:
      //1) se la stringa nella ricerca è presente in contacts.name, la variabile visible rimane true
      //2) se non è presente, la variabile si modifica in false e quindi non viene stampato (perchè non rispetta la condizione per poter essere stampato)

      this.contacts.forEach(element => {
          if (element.name.toLowerCase().includes(this.search.toLowerCase())) {
            element.visible = true;
            // console.log(element);
          } else {
            element.visible = false;
          }
      });
    },//fine searchContact

    openMessageInfo (indexMessage) {
      //prendiamo l'indice che ci viene passato dal click e ne assegnamo il valore al messageIndex nei data, ci serve come condizione per far apparire la finestrella, verrà stampata solo quella riferita all'indice passato dal click
      this.messageIndex = indexMessage;

      //qui usiamo l'if per creare un "toggle" sul click, in maniera tale che se clicckiamo ed era false, diventa true E VICEVERSA
      if (this.contacts[this.chatIndex].messages[indexMessage].open) {
        this.contacts[this.chatIndex].messages[indexMessage].open = false;
      } else {
        this.contacts[this.chatIndex].messages[indexMessage].open = true;
      }

      //qui abbiamo le due condizioni da inserire nel v-if del tag riferito alla finestrella, solo la finestrella che rispetta ENTRAMBE le condizioni, rimarrà aperta. PROBLEMINO può capitare il caso che una finestrella non si apra al primo click



     // console.log(this.messageIndex);
     // // console.log(this.takeMessages);
     // console.log(this.contacts);
   },//fine openMessageInfo

   deleteMessage (indexMessage) {
     this.contacts[this.chatIndex].messages.splice(indexMessage, 1);
   },//fine deleteMessage

   openChatInfo (indexContact) {
     this.contactIndex = indexContact;

     if (this.contacts[indexContact].openInfoChat) {
       this.contacts[indexContact].openInfoChat = false;
     } else {
       this.contacts[indexContact].openInfoChat = true;
     }

     // this.contacts[indexContact].chatInfo = true;
   }

  }//fine methods


});


//javascript per la dark-mode
function darkMode() {
  let pippo = document.getElementById('body');

  pippo.classList.toggle('dark_mode');
}


// this.contacts[this.chatIndex].messages[indexMessage].open = !this.contacts[this.chatIndex].messages[indexMessage].open



//
//
// if (this.search.length > 0 && e.keyCode == 13) {
//
//   let spellSearch = this.search.toLowerCase();//per mettere tutto in minuscolo
//   spellSearch = spellSearch.split('');//per separare ogni elemento di una stringa e inserirlo nello stesso ordine dell'array
//   console.log(spellSearch);
//
//   // let dio = this.contacts.length;
//
//   for (let i = 0; i < this.contacts.length; i++) {
//
//     let spellName = this.contacts[i].name.toLowerCase();
//     spellName = spellName.split('');
//     console.log(spellName);
//     console.log('i' + i);
//     for (let j = 0; j < spellSearch.length; j++) {
//
//       if (spellSearch[j] === spellName[j]) {
//         this.searchFinded.push(this.contacts[i]);
//         this.contacts.splice(i, 1);
//         console.log(this.searchFinded);
//         console.log(j);
//       }
//     }
//
//   }//primo for
//
// }//fine if
