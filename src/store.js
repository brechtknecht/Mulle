import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userSession: {
      user_id: "id" + Math.random().toString(16).slice(2),
      currentQuestion: 0,
      isFinished: false,
      answers: []
    },
    questions: [
      {
        _id: 1,
        question: 'Wie viel Müll produzierst du am Tag?',
        description: 'Du bekommst gleiche einen Slider angezeigt, mit dem du einschätzen kannst wie viel Müll du am Tag verbrauchst. Schätze dich selbst gut ein, denn am Ende wirst du mit den anderen Nutzern verglichen.',
        answer: {
          string: 'Jeder Deutsche produziert am Tag ca. 600g Abfall.',
          number: '600g'
        }
      },
      {
        _id: 2,
        question: 'Wie groß ist der Great Pacific Path?',
        description: 'Falls du nicht weißt um was es hier geht: Der „Great Pacific Garbage Path“ ist die größte Overflächliche Ansammlung von Plastikabfällen aus der ganzen Welt. Schätze bitte in folgendem Beispiel, wie groß dieser Fleck Erde ist.',
        answer: {
          string: 'Der Great Pacific Path is 4 mal so groß wie Deutschland, also eine Gesamtgröße von 1.600.000 Quadratkilometern',
          number: '1.600.000 Quadratkilometern'
        }
      },
      {
        _id: 3,
        question: 'Wie lange braucht eine Tüte zum verwesen?',
        description: 'Plastik benötigt eine ziemlich lange Zeit um zu verwesen und sich zu zersetzen. Stell dir vor du hättest in der Vergangenheit eine Plastiktüte gekauft. Wähle in folgendem Beispiel einen Zeitpunkt in der Vergangenheit, an dem du die Tüte gekauft hast, sodass sie bis zum heutigen Tag verrottet ist.',
        answer: {
          string: 'Du hättest die Tüte in den 1760ern kaufen müssen.',
          number: '1760'
        }
      },
      {
        _id: 4,
        question: 'Welches Land in Europa erzeugt die meißten Abfälle?',
        description: 'Plastik benötigt eine ziemlich lange Zeit um zu verwesen und sich zu zersetzen. Stell dir vor du hättest in der Vergangenheit eine Plastiktüte gekauft. Wähle in folgendem Beispiel einen Zeitpunkt in der Vergangenheit, an dem du die Tüte gekauft hast, sodass sie bis zum heutigen Tag verrottet ist. ',
        answer: {
          string: 'Deutschland – mit  220,5 Kilo pro Kopf im Jahr',
          number: 'Deutschland'
        }
      },
      {
        _id: 5,
        question: 'Wie viel vom existierenden Plastik wird tatsächlich genutzt?',
        description: 'Auf der Welt existiert eine Menge Plastik, in seiner Gesamtheit sind es 8.300.000.000 Tonnen. Schätze mal ein, wie viel von dem Plastik momentan von Menschen im Gebrauch ist und wie viel sich gerade in den Meeren bzw. auf Mülldeponien befindet.',
        answer: {
          string: 'Vom auf der Welt existierenden Plastik werden tatsächlich nur eine Menge von 60% tatsächlich genutzt. Der Rest befindet sich auf Müllhalden oder im Meer',
          number: '60%'
        }
      },
      {
        _id: 6,
        question: 'Wie viel Müll landet jährlich in den Weltmeeren?',
        description: 'Gib eine Schätzung ab',
        answer: {
          string: 'Jedes Jahr gelangen wischen fünf und 15 Millionen Tonnen Müll in die Weltmeere.',
          number: '5 – 15 Millionen'
        }
      },
      {
        _id: 7,
        question: 'Wo ist unser Müll hin?',
        description: 'Stelle dir vor, wir würden versuchen nach all dem Müll zu suchen, der in den letzten Jahrzehnten in unsere Weltmeere gelangt ist. Gib eine Schätzung an, wie viel Müll wir mit unserem heutigen Wissensstand finden könnten.',
        answer: {
          string: 'Wir wissen tatsächlich nur von rund einem Prozent, wo sich der Müll befindet. Dieser ist meißt oberflächlich.',
          number: '< 1%'
        }
      }
    ]
  },
  getters: {
    questions: state => {
      return state.questions
    },
    userSession: state => {
      return state.userSession;
    },
    currentQuestion: state => {
      return state.userSession.currentQuestion;
    } 
  },
  mutations: {
    INCREMENT_CURRENT_QUESTION : (state, userSession) => {
      state.userSession.currentQuestion++;
    },
    COMMIT_ANSWER (state, answer) {
      console.log(state.userSession.answers);
      state.userSession.answers.push({
        answer_id: state.userSession.currentQuestion,
        answer: answer
      });
    }
  },
  actions: {
    
  }
})
