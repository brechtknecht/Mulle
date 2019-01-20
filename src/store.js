import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userSession: {
      user_id: "id" + Math.random().toString(16).slice(2),
      currentQuestion: 0,
      isFinished: false,
      currentAnswer: {
        value: Number,
        unit: String
      },
      answers: []
    },
    questions: [
      {
        _id: 1,
        question: 'Wie viel Müll produzierst du am Tag?',
        description: 'Du bekommst gleiche einen Slider angezeigt, mit dem du einschätzen kannst wie viel Müll du am Tag verbrauchst. Schätze dich selbst gut ein, denn am Ende wirst du mit den anderen Nutzern verglichen.',
        background_image: 'assets/img/interactions/backgrounds/01.png',
        answer: {
          string: 'Jeder Deutsche produziert am Tag ca. 600g Abfall.',
          number: '600',
          unit: 'g'
        }
      },
      {
        _id: 2,
        question: 'Wie groß ist der Great Pacific Path?',
        description: 'Falls du nicht weißt um was es hier geht: Der „Great Pacific Garbage Path“ ist die größte Overflächliche Ansammlung von Plastikabfällen aus der ganzen Welt. Schätze bitte in folgendem Beispiel, wie groß dieser Fleck Erde ist.',
        background_image: 'assets/img/interactions/backgrounds/02.png',
        answer: {
          string: 'Der Great Pacific Path is 4 mal so groß wie Deutschland, also eine Gesamtgröße von 1.600.000 Quadratkilometern',
          number: '4',
          unit:  'mal Deutschland'
        }
      },
      {
        _id: 3,
        question: 'Wie lange braucht eine PET Flasche zum verwesen?',
        description: 'Plastik benötigt eine ziemlich lange Zeit um sich wieder zu zersetzen. Stell dir vor du hättest in der Vergangenheit eine PET Flasche gekauft. Wähle in folgendem Beispiel einen Zeitpunkt in der Vergangenheit, an dem du die Flasche gekauft haben müsstest, sodass sie bis zum heutigen Tag verrottet wäre.',
        background_image: 'assets/img/interactions/backgrounds/03.png',
        answer: {
          string: 'Du hättest die Flasche in den 1760ern kaufen müssen.',
          number: '1760',
          unit: ''
        }
      },
      {
        _id: 4,
        question: 'Welches Land in Europa erzeugt die meißten Abfälle?',
        description: 'Plastik benötigt eine ziemlich lange Zeit um zu verwesen und sich zu zersetzen. Stell dir vor du hättest in der Vergangenheit eine Plastiktüte gekauft. Wähle in folgendem Beispiel einen Zeitpunkt in der Vergangenheit, an dem du die Tüte gekauft hast, sodass sie bis zum heutigen Tag verrottet ist. ',
        background_image: 'assets/img/interactions/backgrounds/04.png',
        answer: {
          string: 'Deutschland – mit  220,5 Kilo pro Kopf im Jahr',
          number: 'Deutschland',
          unit: ''
        }
      },
      {
        _id: 5,
        question: 'Wie viel vom existierenden Plastik wird tatsächlich genutzt?',
        description: 'Auf der Welt existiert eine Menge Plastik, in seiner Gesamtheit sind es 8.300.000.000 Tonnen. Schätze mal ein, wie viel von dem Plastik momentan von Menschen im Gebrauch ist und wie viel sich gerade in den Meeren bzw. auf Mülldeponien befindet.',
        background_image: 'assets/img/interactions/backgrounds/05.png',
        answer: {
          string: 'Vom auf der Welt existierenden Plastik werden tatsächlich nur eine Menge von 60% tatsächlich genutzt. Der Rest befindet sich auf Müllhalden oder im Meer',
          number: '60',
          unit: '%'
        }
      },
      {
        _id: 6,
        question: 'Wie viel Müll landet jährlich in den Weltmeeren?',
        description: 'Gib eine Schätzung ab',
        background_image: 'assets/img/interactions/backgrounds/06.png',
        answer: {
          string: 'Jedes Jahr gelangen wischen fünf und 15 Millionen Tonnen Müll in die Weltmeere.',
          number: '8.000.000',
          unit: 'Tonnen'
        }
      },
      {
        _id: 7,
        question: 'Wo ist unser Müll hin?',
        description: 'Stelle dir vor, wir würden versuchen nach all dem Müll zu suchen, der in den letzten Jahrzehnten in unsere Weltmeere gelangt ist. Gib eine Schätzung an, wie viel Müll wir mit unserem heutigen Wissensstand finden könnten.',
        background_image: 'assets/img/interactions/backgrounds/07.png',
        answer: {
          string: 'Wir wissen tatsächlich nur von rund einem Prozent, wo sich der Müll befindet. Dieser ist meißt oberflächlich.',
          number: '< 1',
          unit: '%'
        }
      }
    ],
    history: {
      2015: {
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Litter_on_Singapore%27s_East_Coast_Park.jpg/2880px-Litter_on_Singapore%27s_East_Coast_Park.jpg',
          text: 'heute'
      },
      2014: {
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Germany_players_celebrate_winning_the_2014_FIFA_World_Cup.jpg/2880px-Germany_players_celebrate_winning_the_2014_FIFA_World_Cup.jpg',
          text: 'Deutschland gewinnt die Fußball-Weltmeisterschaft 2014.'
      },
      2000: {
          image: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Stern-Oresund.jpg',
          text: 'Eröffnung der Öresundverbindung zwischen Kopenhagen und Malmö'
      },
      1968: {
          image: 'https://www.musikexpress.de/wp-content/uploads/2018/04/04/13/martin-luther-king.jpg',
          text: 'Martin Luther King wird bei dem Attentat in Memphis, Tennessee erschossen.'
      },
      1945: {
          image: 'https://www.historyonthenet.com/wp-content/uploads/2014/11/450223-M-0000R-001.jpg',
          text: 'Der 2. Weltkrieg endet'
      },
      1917: {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Chateauwood.jpg/1280px-Chateauwood.jpg',
        text: 'Der 1. Weltkrieg.'
      },
      1789: {
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Le_Serment_du_Jeu_de_paume.jpg',
        text: 'Französische Revolution'
      }
  }
  
  },
  getters: {
    questions: state => {
      return state.questions
    },
    history: state =>{
      return state.history
    },
    userSession: state => {
      return state.userSession;
    },
    currentQuestion: state => {
      return state.userSession.currentQuestion;
    },
    answers: state => {
      if(state.userSession.isFinished){
        return state.userSession.answers;
      } else {
        return "Survey dosen't seems to be finished ❌ "
      }
    }
  },
  mutations: {
    INCREMENT_CURRENT_QUESTION : (state, userSession) => {
      state.userSession.currentQuestion++;
    },
    COMMIT_CURRENT_ANSWER (state, answer) {
      state.userSession.currentAnswer.unit = answer.unit;
      state.userSession.currentAnswer.value = answer.value;
    },
    PUSH_ANSWER: (state) => {
      if (state.userSession.answers[state.userSession.currentQuestion] == undefined){
        state.userSession.answers.push({
          answer_id: state.userSession.currentQuestion,
          answer: {
            value: state.userSession.currentAnswer.value,
            unit: state.userSession.currentAnswer.unit
          }
        });
        
        console.log('Answer commited ✅ – ' + state.userSession.currentAnswer.value + ' ' + state.userSession.currentAnswer.unit);
        
        state.userSession.currentAnswer = {};
      }
    },
    END_SURVEY: (state) => {
      state.userSession.isFinished = true;
      
      axios.post('http://döner.jetzt:3000/userSessions/', {
        user_id : state.userSession.user_id,
        answers : state.userSession.answers,
        isValid : state.userSession.isFinished
      })
      .then(function (response) {
        console.log('🚀 This data was sent to the Database: ' + response);
      })
      .catch(function (error) {
        console.log('❌ Sending the data somehow fucked up' + error);
      });
    }
  },
  actions: {
    
  }
})
