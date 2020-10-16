import React from 'react';
import './App.css';
import Timer from './Timer';
import Header from './Header';
import QuestionList from './QuestionList';
import Results from './Results';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import db from './firebase';

class QuestionSet extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            score: 0,
            current: 0,
            currentQuestion: '',
            disabledNext: false,
            disabledPrev: true,
            quizCompleted: false,
            user:this.props.user,

            questions: [
                {
                    id: 1,
                    text: ' choose the option opposite in meaning to the capitalized word. The girl is COMELY.',
                    choices: [
                        {
                            id: 'a',
                            text: 'Homely',
                        },
                        {
                            id: 'b',
                            text: 'lively',
                        },
                        {
                            id: 'c',
                            text: 'leavely',
                        },
                        {
                            id: 'd',
                            text: 'saucy',
                        }
                    ],

                    selectedChoice: false,
                    correct: 'a'

                },
                {
                    id: 2,
                    text: 'choose the option opposite in meaning to the capitalized word. Don’t CONDEMN her work.',
                    choices: [
                        {
                            id: 'a',
                            text: 'Erase',
                        },
                        {
                            id: 'b',
                            text: 'console',
                        },
                        {
                            id: 'c',
                            text: 'commence',
                        },
                        {
                            id: 'd',
                            text: 'commend',
                        }
                    ],
                    selectedChoice: false,
                    correct: 'd'
                },
                {
                    id: 3,
                    text: 'choose the option opposite in meaning to the capitalized word. This is the ENTRY but that is the ......',
                    choices: [
                        {
                            id: 'a',
                            text: 'Exist',
                        },
                        {
                            id: 'b',
                            text: 'exit',
                        },
                        {
                            id: 'c',
                            text:   'leaving'
                        },
                        {
                            id: 'd',
                            text:   'go'
                        }
                    ],
                    selectedChoice: false,
                    correct: 'b'
                },
                {
                    id: 4,
                    text: 'choose the option opposite in meaning to the capitalized word. The gold is VALUABLE but the aluminium is ......',
                    choices: [
                        {
                            id: 'a',
                            text: 'Invaluable',
                        },
                        {
                            id: 'b',
                            text: 'wasteful',
                        },
                        {
                            id: 'c',
                            text: 'worthless',
                        },
                        {
                            id: 'd',
                            text: 'worthy',
                        }
                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 5,
                    text: 'choose the option opposite in meaning to the capitalized word. The FRIENDLY husband detest his wife’s ...... behavior',
                    choices: [
                        {
                            id: 'a',
                            text: 'Hostile',
                        },
                        {
                            id: 'b',
                            text: 'dolting',
                        },
                        {
                            id: 'c',
                            text: 'loving',
                        },
                        {
                            id: 'd',
                            text: 'caring',
                        }
                    ],
                    selectedChoice: false,
                    correct: 'a'
                },
                {
                    id: 6,
                    text: 'choose the option opposite in meaning to the capitalized word. A LANKY man should marry a ...... woman.',
                    choices: [
                        {
                            id: 'a',
                            text: 'Hefty',
                        },
                        {
                            id: 'b',
                            text: 'short',
                        },
                        {
                            id: 'c',
                            text: 'short and fat',
                        },
                        {
                            id: 'd',
                            text: 'lofty',
                        }
                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 7,
                    text: 'choose the option opposite in meaning to the capitalized word. I REMEMBER the present scene and ...... the previous one',
                    choices: [
                        {
                            id: 'a',
                            text: 'save',
                        },
                        {
                            id: 'b',
                            text: 'delete',
                        },
                        {
                            id: 'c',
                            text: 'forget',
                        },
                        {
                            id: 'd',
                            text: 'emanciate',
                        }
                    ],

                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 8,
                    text: 'choose the option opposite in meaning to the capitalized word. To him, travelling at night was rather INNOCUOUS.',
                    choices: [
                        {
                            id: 'a',
                            text: 'good',
                        },
                        {
                            id: 'b',
                            text: 'jinks',
                        },
                        {
                            id: 'c',
                            text: 'jinx',
                        },

						{
                            id: 'd',
                            text: 'harmful',
                        }
                    ],
                    selectedChoice: false,
                    correct: 'd'
                },
                {
                    id: 9,
                    text: 'choose the option opposite in meaning to the capitalized word. The doctor said his condition has AGGRAVATED.',
                    choices: [
                        {
                            id: 'a',
                            text: 'elevated',
                        },
                        {
                            id: 'b',
                            text: 'improved',
                        },
                        {
                            id: 'c',
                            text: 'dunce',
                        },
                        {
                            id: 'd',
                            text: 'worsened',
                        }
                    ],
                    selectedChoice: false,
                    correct: 'b'
                },
                {
                    id: 10,
                    text: 'choose the option opposite in meaning to the capitalized word. His wife divorced him because he is a EXTRAVAGANT.',
                    choices: [
                        {
                            id: 'a',
                            text: 'Prodigal',
                        },
                        {
                            id: 'b',
                            text: 'profligate',
                        },
                        {
                            id: 'c',
                            text: 'tyroo',
                        },
                        {
                            id: 'd',
                            text: 'spend thrift',
                        }
                    ],
                    selectedChoice: false,
                    correct: 'd'
                },
                {
                    id: 11,
                    text: 'choose the option nearest in meaning to the capitalized word or phrase. His COUNTENANCE was not appealing.',
                    choices: [
                        {
                            id: 'a',
                            text: 'Appearance',
                        },
                        {
                            id: 'b',
                            text: 'behavior',
                        },
                        {
                            id: 'c',
                            text: 'temperament',
                        },
                        {
                            id: 'd',
                            text: 'approval',
                        }
                    ],
                    selectedChoice: false,
                    correct: 'a'
                },
                {
                    id: 12,
                    text: 'choose the option nearest in meaning to the capitalized word or phrase. Don’t be harsh on her, she is FEEBLE.',
                    choices: [
                        {
                            id: 'a',
                            text: 'strong',
                        },
                        {
                            id: 'b',
                            text: 'young',
                        },
                        {
                            id: 'c',
                            text: 'shaky',
                        },           
                        {
                            id: 'd',
                            text: 'weak',
                        }
                    ],
                    selectedChoice: false,
                    correct: 'd'
                },
                {
                    id: 13,
                    text: 'choose the option nearest in meaning to the capitalized word or phrase. I hate ROWDY places.',
                    choices: [
                        {
                            id: 'a',
                            text: 'quite',
                        },
                        {
                            id: 'b',
                            text: 'noisy',
                        },
                        {
                            id: 'c',
                            text: 'calm',
                        },
                        {
                            id: 'd',
                            text: 'stilly',
                        }
                    ],
                    selectedChoice: false,
                    correct: 'b'
                },
                {
                    id: 14,
                    text: 'choose the option nearest in meaning to the capitalized word or phrase. I was told to PROVE what I said.',
                    choices: [
                        {
                            id: 'a',
                            text: 'Refute',
                        },
                        {
                            id: 'b',
                            text: 'recent',
                        },
                        {
                            id: 'c',
                            text: 'vindicate',
                        },
                        {
                            id: 'd',
                            text: 'recap',
                        }
                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 15,
                    text: 'choose the option nearest in meaning to the capitalized word or phrase. Bola, IN LIEU OF Tade came to the party.',
                    choices: [
                        {
                            id: 'a',
                            text: 'Together with',
                        },
                        {
                            id: 'b',
                            text: 'in place of',
                        },
                        {
                            id: 'c',
                            text: 'considering',
                        },
                        {
                            id: 'd',
                            text: 'aside',
                        }
                    ],
                    selectedChoice: false,
                    correct: 'b'
                },
                {
                    id: 16,
                    text: 'choose the option nearest in meaning to the capitalized word or phrase. I ABHOR wasteful spending.',
                    choices: [
                        {
                            id: 'a',
                            text: 'like',
                        },
                        {
                            id: 'b',
                            text: 'dislike',
                        },
                        {
                            id: 'c',
                            text: 'tolerate',
                        },
                        {
                            id: 'd',
                            text: 'expulge',
                        }
                    ],
                    selectedChoice: false,
                    correct: 'b'
                },
                {
                    id: 17,
                    text: 'choose the option nearest in meaning to the capitalized word or phrase. THOUGH she is my sister, I still hate her ',
                    choices: [
                        {
                            id: 'a',
                            text: 'even',
                        },
                        {
                            id: 'b',
                            text: 'even though',
                        },
                        {
                            id: 'c',
                            text: 'if',
                        },
                        {
                            id: 'd',
                            text: 'whether',
                        }
                    ],
                    selectedChoice: false,
                    correct: 'a'
                },
                {
                    id: 18,
                    text: 'choose the option nearest in meaning to the capitalized word or phrase. It GLOOMY colour makes me hate it.',
                    choices: [
                        {
                            id: 'a',
                            text: 'bright',
                        },
                        {
                            id: 'b',
                            text: 'light',
                        },
                        {
                            id: 'c',
                            text: 'glossy',
                        },
                        {
                            id: 'd',
                            text: 'dull',
                        }
                    ],
                    selectedChoice: false,
                    correct: 'd'
                },
                {
                    id: 19,
                    text: 'choose the option nearest in meaning to the capitalized word or phrase. The ceiling of my bed-room fell in and KNOCKED ME out',
                    choices: [
                        {
                            id: 'a',
                            text: 'made me unconscious',
                        },
                        {
                            id: 'b',
                            text: 'removed me',
                        },
                        {
                            id: 'c',
                            text: 'flattened me',
                        },
                        {
                            id: 'd',
                            text: 'killed me',
                        },
                        {
                            id: 'e',
                            text: 'frightened me.',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'a'
                },
                {
                    id: 20,
                    text: 'choose the option nearest in meaning to the capitalized word or phrase. In May 1978 the rain fell INCESSANTLY and made life drab.',
                    choices: [
                        {
                            id: 'a',
                            text: 'at intervals',
                        },
                        {
                            id: 'b',
                            text: 'recurrently',
                        },
                        {
                            id: 'c',
                            text: 'repeatedly',
                        },
                        {
                            id: 'd',
                            text: 'concurrently',
                        },
                        {
                            id: 'e',
                            text: 'continuously',
                        },
                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 21,
                    text: 'The boy is ...... boy',
                    choices: [
                        {
                            id: 'a',
                            text: 'Real a good',
                        },
                        {
                            id: 'b',
                            text: 'a real good',
                        },
                        {
                            id: 'c',
                            text: 'really a good',
                        },
                        {
                            id: 'd',
                            text: 'a really good',
                        }
                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 22,
                    text: 'My father is a ......',
                    choices: [
                        {
                            id: 'a',
                            text: 'police',
                        },
                        {
                            id: 'b',
                            text: 'polices',
                        },
                        {
                            id: 'c',
                            text: 'policeofficer',
                        },
                        {
                            id: 'd',
                            text: 'police officer',
                        }
                    ],
                    selectedChoice: false,
                    correct: 'd'
                },
                {
                    id: 23,
                    text: 'This is the girl ...... I love',
                    choices: [
                        {
                            id: 'a',
                            text: 'whom',
                        },
                        {
                            id: 'b',
                            text: 'who',
                        },
                        {
                            id: 'c',
                            text: 'whose',
                        },
                        {
                            id: 'd',
                            text: 'what',
                        }
                    ],
                    selectedChoice: false,
                    correct: 'a'
                },
                {
                    id: 24,
                    text: 'Today’s movie worth ......',
                    choices: [
                        {
                            id: 'a',
                            text: 'see',
                        },
                        {
                            id: 'b',
                            text: 'saw',
                        },
                        {
                            id: 'c',
                            text: 'seeing',
                        },
                        {
                            id: 'd',
                            text: 'seen',
                        }
                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 25,
                    text: 'Whilst the thief was ......  the passengers, he kept apologizing for the inconvenience he was causing them',
                    choices: [
                        {
                            id: 'a',
                            text: 'robbing',
                        },
                        {
                            id: 'b',
                            text: 'rubbing',
                        },
                        {
                            id: 'c',
                            text: 'robing',
                        },
                        {
                            id: 'd',
                            text: 'rubing',
                        },
                        {
                            id: 'e',
                            text: 'robbed.',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'a'
                },
                {
                    id: 26,
                    text: 'Your brigade would be the better for it, if you desisted ...... rumor-mongering, observed the Chief of Staff',
                    choices: [
                        {
                            id: 'a',
                            text: 'from',
                        },
                        {
                            id: 'b',
                            text: 'away',
                        },
                        {
                            id: 'c',
                            text: 'into',
                        },
                        {
                            id: 'd',
                            text: 'away from',
                        },
                        {
                            id: 'e',
                            text: 'on',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'd'
                },
                {
                    id: 27,
                    text: 'The court ordered the lorry driver to pay for the ...... to my car.',
                    choices: [
                        {
                            id: 'a',
                            text: 'damages',
                        },
                        {
                            id: 'b',
                            text: 'heavy damages',
                        },
                        {
                            id: 'c',
                            text: 'destruction',
                        },
                        {
                            id: 'd',
                            text: 'many damages',
                        },
                        {
                            id: 'e',
                            text: 'damage.',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'a'
                },
                {
                    id: 28,
                    text: 'He was operated ...... by the surgeon ',
                    choices: [
                        {
                            id: 'a',
                            text: 'by',
                        },
                        {
                            id: 'b',
                            text: 'with',
                        },
                        {
                            id: 'c',
                            text: 'on',
                        },
                        {
                            id: 'd',
                            text: 'for',
                        }
                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 29,
                    text: 'I have received the answer scripts of Peter and John. What about ......?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Ngozi',
                        },
                        {
                            id: 'b',
                            text: 'Ngozi’s own',
                        },
                        {
                            id: 'c',
                            text: 'Ngozis',
                        },
                        {
                            id: 'd',
                            text: 'Ngozis’',
                        },
                        {
                            id: 'e',
                            text: 'Ngozi’s',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'b'
                },
                {
                    id: 30,
                    text: 'He received a pat ...... the back for his brilliant success in the examination.',
                    choices: [
                        {
                            id: 'a',
                            text: 'by',
                        },
                        {
                            id: 'b',
                            text: 'at',
                        },
                        {
                            id: 'c',
                            text: 'in',
                        },
                        {
                            id: 'd',
                            text: 'on',
                        },
                        {
                            id: 'e',
                            text: 'for',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'd'
                },
                {
                    id: 31,
                    text: 'When you are faced with an examination of this nature endeavour to keep your mind ...... the job and not be distracted for one moment.',
                    choices: [
                        {
                            id: 'a',
                            text: 'at',
                        },
                        {
                            id: 'b',
                            text: 'in',
                        },
                        {
                            id: 'c',
                            text: 'for',
                        },
                        {
                            id: 'd',
                            text: 'on',
                        },
                        {
                            id: 'e',
                            text: 'to',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'd'
                },
                {
                    id: 32,
                    text: 'Samuel: Would you please come here, John? John: No. I’m busy ......  in my farm.',
                    choices: [
                        {
                            id: 'a',
                            text: 'I am working',
                        },
                        {
                            id: 'b',
                            text: 'I’m working ',
                        },
                        {
                            id: 'c',
                            text: 'I am to work',
                        },
                        {
                            id: 'd',
                            text: 'I shall have worked',
                        },
                        {
                            id: 'e',
                            text: 'I go to work',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'b'
                },
                {
                    id: 33,
                    text: 'My colleagues ......  before I arrived.',
                    choices: [
                        {
                            id: 'a',
                            text: 'started writing  ',
                        },
                        {
                            id: 'b',
                            text: 'wrote',
                        },
                        {
                            id: 'c',
                            text: 'had started writing',
                        },
                        {
                            id: 'd',
                            text: 'have written',
                        },
                        {
                            id: 'e',
                            text: 'have been writing',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 34,
                    text: 'After the team had conceded two goals, their enthusiasm ...... ',
                    choices: [
                        {
                            id: 'a',
                            text: 'was beginning to wane',
                        },
                        {
                            id: 'b',
                            text: 'was waning',
                        },
                        {
                            id: 'c',
                            text: 'began towane',
                        },
                        {
                            id: 'd',
                            text: 'had begun towane',
                        },
                        {
                            id: 'e',
                            text: 'had been waning',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 35,
                    text: 'The Government ...... the initial value of the hotel complex at ten million Naira.',
                    choices: [
                        {
                            id: 'a',
                            text: 'costed',
                        },
                        {
                            id: 'b',
                            text: 'had cost',
                        },
                        {
                            id: 'c',
                            text: 'had valued',
                        },
                        {
                            id: 'd',
                            text: 'had constructed',
                        },
                        {
                            id: 'e',
                            text: 'has costed',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'a'
                },
                {
                    id: 36,
                    text: 'Choose the one that has some sound as the capitalized word. bOOK.',
                    choices: [
                        {
                            id: 'a',
                            text: 'look',
                        },
                        {
                            id: 'b',
                            text: 'moth',
                        },
                        {
                            id: 'c',
                            text: 'shoe',
                        },
                        {
                            id: 'd',
                            text: 'lock',
                        }
                    ],
                    selectedChoice: false,
                    correct: 'a'
                },
                {
                    id: 37,
                    text: 'Choose the one that has some sound as the capitalized word. tEACH',
                    choices: [
                        {
                            id: 'a',
                            text: 'shit',
                        },
                        {
                            id: 'b',
                            text: 'suit',
                        },
                        {
                            id: 'c',
                            text: 'tea',
                        },
                        {
                            id: 'd',
                            text: 'come',
                        }
                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 38,
                    text: 'Choose the one that has some sound as the capitalized word. oF',
                    choices: [
                        {
                            id: 'a',
                            text: 'even',
                        },
                        {
                            id: 'b',
                            text: 'off',
                        },
                        {
                            id: 'c',
                            text: 'laugh',
                        },
                        {
                            id: 'd',
                            text: 'tough',
                        }
                    ],
                    selectedChoice: false,
                    correct: 'a'
                },
                {
                    id: 39,
                    text: 'PHlegm. Choose the one that has some sound as the capitalized word.',
                    choices: [
                        {
                            id: 'a',
                            text: 'post',
                        },
                        {
                            id: 'b',
                            text: 'fool',
                        },
                        {
                            id: 'c',
                            text: 'often',
                        },
                        {
                            id: 'd',
                            text: 'phlegmatic',
                        }
                    ],
                    selectedChoice: false,
                    correct: 'b'
                },
                {
                    id: 40,
                    text: 'The principal advised that we pursue this case cautiously, otherwise we are bound to be taken ...... by Ada’s lies',
                    choices: [
                        {
                            id: 'a',
                            text: 'away',
                        },
                        {
                            id: 'b',
                            text: 'out',
                        },
                        {
                            id: 'c',
                            text: 'in',
                        },
                        {
                            id: 'd',
                            text: 'off',
                        },
                        {
                            id: 'e',
                            text: 'on',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 41,
                    text: 'The distance, d, through which a stone falls from rest varies directly as the square of the time, t, taken. If the stone falls 45 cm in 3 seconds. how far wiII it Call in 6 seconds?',
                    choices: [
                        {
                            id: 'a',
                            text: '90 cm',
                        },
                        {
                            id: 'b',
                            text: '135 cm',
                        },
                        {
                            id: 'c',
                            text: '180 cm',
                        },
                        {
                            id: 'd',
                            text: '225',
                        }
                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 42,
                    text: 'if 1m^3 can hold 1000 of water, how many litres of water does a 10m by 5m by 6m tank hold',
                    choices: [
                        {
                            id: 'a',
                            text: '1300litres',
                        },
                        {
                            id: 'b',
                            text: '30000litres',
                        },
                        {
                            id: 'c',
                            text: '300litres',
                        },
                        {
                            id: 'd',
                            text: '3000litres',
                        },
                        {
                            id: 'e',
                            text: '300000',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'e'
                },
                {
                    id: 43,
                    text: 'The Express 10.011two in decimal',
                    choices: [
                        {
                            id: 'a',
                            text: '1.625',
                        },
                        {
                            id: 'b',
                            text: '2.375',
                        },
                        {
                            id: 'c',
                            text: '6.75',
                        },
                        {
                            id: 'd',
                            text: '6.375',
                        },
                         {
                            id: 'e',
                            text: '2.75',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'b'
                },
                {
                    id: 44,
                    text: 'On a map, 1 cm represents 5 km. Find the area on the map that represents 100km^2',
                    choices: [
                        {
                            id: 'a',
                            text: '2 cm^2',
                        },
                        {
                            id: 'b',
                            text: '4 cm^2',
                        },
                        {
                            id: 'c',
                            text: '8 cm^2',
                        },
                        {
                            id: 'd',
                            text: '16 cm^2',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'a'
                },
                {
                    id: 45,
                    text: 'Given that 2x + y = 7 and 3x — 2y = 3, by how much is 7x greater than 10?',
                    choices: [
                        {
                            id: 'a',
                            text: '1',
                        },
                        {
                            id: 'b',
                            text: '3',
                        },
                        {
                            id: 'c',
                            text: '7',
                        },
                        {
                            id: 'd',
                            text: '17',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 46,
                    text: 'The probability that a number selected at random from 1 to 40 is a multiple of 7',
                    choices: [
                        {
                            id: 'a',
                            text: '1/10',
                        },
                        {
                            id: 'b',
                            text: '1/18',
                        },
                        {
                            id: 'c',
                            text: '3/20',
                        },
                        {
                            id: 'd',
                            text: '1/8',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'd'
                },
                {
                    id: 47,
                    text: 'Ann goes swimming regularly. She wants to improve her fitness, so she decides to 10 lengths in the first session. when she reaches 50 lengths in a session she will not increase the number any further. after how many sessions does Ann swim 50 lengths for the time?',
                    choices: [
                        {
                            id: 'a',
                            text: '21',
                        },
                        {
                            id: 'b',
                            text: '22',
                        },
                        {
                            id: 'c',
                            text: '20',
                        },
                        {
                            id: 'd',
                            text: '19',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'a'
                },
                {
                    id: 48,
                    text: 'Kweku walked 8 m up a slope and was 3 m above the ground. If he walks 12 m further up the slope. how far above the ground will he be?',
                    choices: [
                        {
                            id: 'a',
                            text: '4.5 m',
                        },
                        {
                            id: 'b',
                            text: '6.0 m',
                        },
                        {
                            id: 'c',
                            text: '7.5 m',
                        },
                        {
                            id: 'd',
                            text: '9.0 m',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 49,
                    text: 'The marks of eight students in a test are : 10, 4, 5, 3, 14. 13, 16 and 7. Find the range.',
                    choices: [
                        {
                            id: 'a',
                            text: '16',
                        },
                        {
                            id: 'b',
                            text: '14',
                        },
                        {
                            id: 'c',
                            text: '13',
                        },
                        {
                            id: 'd',
                            text: '11',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 50,
                    text: 'The point (x,y) at which the curve y=3x^2 + 4x + 1 has a gradient of 10 is.',
                    choices: [
                        {
                            id: 'a',
                            text: '(2,3)',
                        },
                        {
                            id: 'b',
                            text: '(1,8)',
                        },
                        {
                            id: 'c',
                            text: '(0,1)',
                        },
                        {
                            id: 'd',
                            text: '(1,0)',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'b'
                },
                {
                    id: 51,
                    text: 'Express 1975 correct to 2 significant figures.',
                    choices: [
                        {
                            id: 'a',
                            text: '20',
                        },
                        {
                            id: 'b',
                            text: '1, 900',
                        },
                        {
                            id: 'c',
                            text: '1, 980',
                        },
                        {
                            id: 'd',
                            text: '2, 000',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'd'
                },
                {
                    id: 52,
                    text: 'The perimeter of a sector of a circle of radius 21 cm is 64 cm. Find the angle of the sector. [Take pi = 22/7].',
                    choices: [
                        {
                            id: 'a',
                            text: '70 deg.',
                        },
                        {
                            id: 'b',
                            text: '60 deg.',
                        },
                        {
                            id: 'c',
                            text: '55 deg.',
                        },
                        {
                            id: 'd',
                            text: '42 deg.',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'b'
                },
                {
                    id: 53,
                    text: 'If 20(mod 9) is equivalent to y(mod 6), find y.',
                    choices: [
                        {
                            id: 'a',
                            text: '1',
                        },
                        {
                            id: 'b',
                            text: '2',
                        },
                        {
                            id: 'c',
                            text: '3',
                        },
                        {
                            id: 'd',
                            text: '4',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'b'
                },
                {
                    id: 54,
                    text: 'A bag contains 5 red and 4 blue identical balls. If two balls are selected at random from the bag, one after the other, with replacement. find the probability that the first is red and the second blue.',
                    choices: [
                        {
                            id: 'a',
                            text: '2/9',
                        },
                        {
                            id: 'b',
                            text: '5/18',
                        },
                        {
                            id: 'c',
                            text: '20/81',
                        },
                        {
                            id: 'd',
                            text: '5/9',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 55,
                    text: 'Find the next three terms of the sequence: 0, 1, 1, 2, 3, 5, 8, ...',
                    choices: [
                        {
                            id: 'a',
                            text: '13, 19, 23',
                        },
                        {
                            id: 'b',
                            text: '9, 11, 13',
                        },
                        {
                            id: 'c',
                            text: '11, 15, I9',
                        },
                        {
                            id: 'd',
                            text: 'l3,  21, 34',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'd'
                },
                {
                    id: 56,
                    text: 'The ratio of the exterior angle to the interior angle of a regular polygon is 1:11. How many sides has the polygon?',
                    choices: [
                        {
                            id: 'a',
                            text: '30',
                        },
                        {
                            id: 'b',
                            text: '24',
                        },
                        {
                            id: 'c',
                            text: '18',
                        },
                        {
                            id: 'd',
                            text: '12',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'b'
                },
                {
                    id: 57,
                    text: "Halima is n years old. Her brother's age is 5 years older than half of her age. How old is her brother.",
                    choices: [
                        {
                            id: 'a',
                            text: 'n/2 + 5/2',
                        },
                        {
                            id: 'b',
                            text: 'n/2 - 5',
                        },
                        {
                            id: 'c',
                            text: '5 - n/2',
                        },
                        {
                            id: 'd',
                            text: 'n/2 + 5',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'd'
                },
                {
                    id: 58,
                    text: 'An object is 6 m away from the base of a mast. If the angle of depression of the object from the top of the mast is 50 deg., find, correct to 2 decimal places, the height of the mast.',
                    choices: [
                        {
                            id: 'a',
                            text: '8.60 m',
                        },
                        {
                            id: 'b',
                            text: '7.83 m',
                        },
                        {
                            id: 'c',
                            text: '7.51 m',
                        },
                        {
                            id: 'd',
                            text: '7.15 m',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'd'
                },
                {
                    id: 59,
                    text: 'The ages, in years, of four boys are 10, 12, 14 and 18. What is the average age of the boys?',
                    choices: [
                        {
                            id: 'a',
                            text: '12 years',
                        },
                        {
                            id: 'b',
                            text: '12.5 years',
                        },
                        {
                            id: 'c',
                            text: '13 years',
                        },
                        {
                            id: 'd',
                            text: '13.5 years',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'd'
                },
                {
                    id: 60,
                    text: 'Simplify: 2/(1-x) - 1/x',
                    choices: [
                        {
                            id: 'a',
                            text: '(x+1)/x(1-x)',
                        },
                        {
                            id: 'b',
                            text: '(3x-1)/x(1-x)',
                        },
                        {
                            id: 'c',
                            text: '(3x+1)/x(1-x)',
                        },
                        {
                            id: 'd',
                            text: '(x-1)/x(1-x)',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'b'
                },
                {
                    id: 61,
                    text: 'Express 0.029646 correct to three decimal places.',
                    choices: [
                        {
                            id: 'a',
                            text: '0.02',
                        },
                        {
                            id: 'b',
                            text: '0.029',
                        },
                        {
                            id: 'c',
                            text: '0.03',
                        },
                        {
                            id: 'd',
                            text: '0.030',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 62,
                    text: 'If y varies inversely as x and x = 1/2 when y = 6, find y when x = 1/3.',
                    choices: [
                        {
                            id: 'a',
                            text: '1/36',
                        },
                        {
                            id: 'b',
                            text: '9',
                        },
                        {
                            id: 'c',
                            text: '12',
                        },
                        {
                            id: 'd',
                            text: '18',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'b'
                },
                {
                    id: 63,
                    text: 'Okon won a 200m race in 25 seconds. If he ran at the same rate, how long in minutes, would it take him to complete 800 mm.',
                    choices: [
                        {
                            id: 'a',
                            text: '2 1/2',
                        },
                        {
                            id: 'b',
                            text: '2',
                        },
                        {
                            id: 'c',
                            text: '1 2/3',
                        },
                        {
                            id: 'd',
                            text: '1',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 64,
                    text: 'The cost of 16 packets of salt each weighing 900gram is $28m what will be the cost of 27 packets, if each packet weighs 1kg',
                    choices: [
                        {
                            id: 'a',
                            text: '$52.50',
                        },
                        {
                            id: 'b',
                            text: '$56.00',
                        },
                        {
                            id: 'c',
                            text: '$58.50',
                        },
                        {
                            id: 'd',
                            text: '$64.75',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'a'
                },
                {
                    id: 65,
                    text: 'Solve the simultaneous equation: 3x = -y and y = x + 4.',
                    choices: [
                        {
                            id: 'a',
                            text: 'x = -1 and y = 3.',
                        },
                        {
                            id: 'b',
                            text: 'x = -3 and y = -1.',
                        },
                        {
                            id: 'c',
                            text: 'x = -1 and y = -3.',
                        },
                        {
                            id: 'd',
                            text: 'x = 3 and y = 1.',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'a'
                },
                {
                    id: 66,
                    text: 'Factorize: p - bq + q - bp.',
                    choices: [
                        {
                            id: 'a',
                            text: '(p-q)(1-b)',
                        },
                        {
                            id: 'b',
                            text: '(p+q)(b-1)',
                        },
                        {
                            id: 'c',
                            text: '(p+q)(1-b)',
                        },
                        {
                            id: 'd',
                            text: '(p+q)(1+b)',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 67,
                    text: 'Make m the subject of the equation y = mx + c.',
                    choices: [
                        {
                            id: 'a',
                            text: 'm = (y-x)/c',
                        },
                        {
                            id: 'b',
                            text: 'm = (y-c)/x',
                        },
                        {
                            id: 'c',
                            text: 'm = x(y-c)',
                        },
                        {
                            id: 'd',
                            text: 'm = x(y+c)',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'b'
                },
                {
                    id: 68,
                    text: 'A cylinder of radius 7 cm has a curved surface area of 462 cm^2. Find the height. [Take pi = 22/7]',
                    choices: [
                        {
                            id: 'a',
                            text: '6.6 cm',
                        },
                        {
                            id: 'b',
                            text: '3.6 cm',
                        },
                        {
                            id: 'c',
                            text: '2.9 cm',
                        },
                        {
                            id: 'd',
                            text: '5.9 cm',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 69,
                    text: 'PQR is a triangle such that |PQ| = 12 cm and <PQR  = 50.1 deg., calculate the length of the perpendicular from P to QR.',
                    choices: [
                        {
                            id: 'a',
                            text: '7.70 cm',
                        },
                        {
                            id: 'b',
                            text: '9.21 cm',
                        },
                        {
                            id: 'c',
                            text: '10.62 cm',
                        },
                        {
                            id: 'd',
                            text: '14.35 cm',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'b'
                },
                {
                    id: 70,
                    text: 'Calculate, correct to the nearest whole number, the total surface area of a solid cone whose slant height is 18 cm and base diameter 34 cm. [Take pi = 22/7]',
                    choices: [
                        {
                            id: 'a',
                            text: '1780 cm^2',
                        },
                        {
                            id: 'b',
                            text: '1808 cm^2',
                        },
                        {
                            id: 'c',
                            text: '1870 cm^2',
                        },
                        {
                            id: 'd',
                            text: '1970 cm^2',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'b'
                },
                {
                    id: 71,
                    text: 'Two numbers are such that the sum of the three times the first and two times the second is 68. If the numbers are in the ratio 3 : 4, find the smaller number.',
                    choices: [
                        {
                            id: 'a',
                            text: '10',
                        },
                        {
                            id: 'b',
                            text: '12',
                        },
                        {
                            id: 'c',
                            text: '14',
                        },
                        {
                            id: 'd',
                            text: '16',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'd'
                },
                {
                    id: 72,
                    text: 'Town X is 6 km away and on a bearing of 030 deg. from Y. Town Z is 8 km from Town X and on a bearing of 120 deg. Calculate, correct to the nearest whole number, the bearing of Z from Y. ',
                    choices: [
                        {
                            id: 'a',
                            text: '067 deg.',
                        },
                        {
                            id: 'b',
                            text: '071 deg.',
                        },
                        {
                            id: 'c',
                            text: '079 deg.',
                        },
                        {
                            id: 'd',
                            text: '083 deg.',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'd'
                },
                {
                    id: 73,
                    text: 'If the mean of 13, 15, x and 18 is 19. find the median.',
                    choices: [
                        {
                            id: 'a',
                            text: '15.0',
                        },
                        {
                            id: 'b',
                            text: '15.5',
                        },
                        {
                            id: 'c',
                            text: '16.5',
                        },
                        {
                            id: 'd',
                            text: '18.0',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 74,
                    text: 'A box contains 40 identical beads that are either blue or green. If the probability of picking a blue bead is 1/4, how many green beads were in the box?',
                    choices: [
                        {
                            id: 'a',
                            text: '10',
                        },
                        {
                            id: 'b',
                            text: '20',
                        },
                        {
                            id: 'c',
                            text: '30',
                        },
                        {
                            id: 'd',
                            text: '40',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 75,
                    text: 'A side of a regular polygon is 10 cm. If each of its interior angles is 156 deg. , Calculate its perimeter.',
                    choices: [
                        {
                            id: 'a',
                            text: '100 cm',
                        },
                        {
                            id: 'b',
                            text: '120 cm',
                        },
                        {
                            id: 'c',
                            text: '150 cm',
                        },
                        {
                            id: 'd',
                            text: '240 cm',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 76,
                    text: 'An obtuse angle is four times the size of its supplementary angle. Find the value of the supplementary angle.',
                    choices: [
                        {
                            id: 'a',
                            text: '45 deg.',
                        },
                        {
                            id: 'b',
                            text: '36 deg.',
                        },
                        {
                            id: 'c',
                            text: '30 deg.',
                        },
                        {
                            id: 'd',
                            text: '(18 deg.',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'b'
                },
                {
                    id: 77,
                    text: 'The volume of a cylinder with diameter 14 cm is 770 cm^3. What is the curved surface area of the cylinder? [Take pi = 22/7]',
                    choices: [
                        {
                            id: 'a',
                            text: '528 cm^2',
                        },
                        {
                            id: 'b',
                            text: '374 cm^2',
                        },
                        {
                            id: 'c',
                            text: '308 cm^2',
                        },
                        {
                            id: 'd',
                            text: '220 cm^2',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'b'
                },
                {
                    id: 78,
                    text: 'A rectangle whose length is twice its width, has the same perimeter with a square of area 144 cm^2. Find the length of the rectangle.',
                    choices: [
                        {
                            id: 'a',
                            text: '10',
                        },
                        {
                            id: 'b',
                            text: '12',
                        },
                        {
                            id: 'c',
                            text: '14',
                        },
                        {
                            id: 'd',
                            text: '16',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'd'
                },
                {
                    id: 79,
                    text: 'A trader made a profit of 15% by selling an article for #345.00. Calculate the actual profit. ',
                    choices: [
                        {
                            id: 'a',
                            text: '#300.00.',
                        },
                        {
                            id: 'b',
                            text: '#117.00.',
                        },
                        {
                            id: 'c',
                            text: '#51.75.',
                        },
                        {
                            id: 'd',
                            text: '#45.00.',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 80,
                    text: 'A letter is selected from the word EXAMINATIONS. What is the probability that the letter selected is N?',
                    choices: [
                        {
                            id: 'a',
                            text: '1/12',
                        },
                        {
                            id: 'b',
                            text: '1/10',
                        },
                        {
                            id: 'c',
                            text: '1/9',
                        },
                        {
                            id: 'd',
                            text: '1/6',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'd'
                },
                {
                    id: 81,
                    text: 'The current life expectancy in Nigeria is ......',
                    choices: [
                        {
                            id: 'a',
                            text: '55',
                        },
                        {
                            id: 'b',
                            text: '47',
                        },
                        {
                            id: 'c',
                            text: '39',
                        },
                        {
                            id: 'd',
                            text: '51',
                        },
                        {
                            id: 'e',
                            text: '45',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'a'
                },
                {
                    id: 82,
                    text: 'Yumu and Zabara are ethnic groups in ......',
                    choices: [
                        {
                            id: 'a',
                            text: 'Kebbi State',
                        },
                        {
                            id: 'b',
                            text: 'Benue State',
                        },
                        {
                            id: 'c',
                            text: 'Niger State',
                        },
                        {
                            id: 'd',
                            text: 'Kano State',
                        },
                        {
                            id: 'e',
                            text: 'Edo State',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 83,
                    text: 'Mr Dele Giwa was killed through a letter bomb on ......',
                    choices: [
                        {
                            id: 'a',
                            text: 'October 19, 1986',
                        },
                        {
                            id: 'b',
                            text: 'September 17, 1987',
                        },
                        {
                            id: 'c',
                            text: 'October 17, 1986',
                        },
                        {
                            id: 'd',
                            text: 'September 17, 1986',
                        },
                        {
                            id: 'e',
                            text: 'October 19, 1987',
                        }
                    ],
                    selectedChoice: false,
                    correct: 'a'
                },
                {
                    id: 84,
                    text: 'The following are spices expect',
                    choices: [
                        {
                            id: 'a',
                            text: 'rye',
                        },
                        {
                            id: 'b',
                            text: 'saffron',
                        },
                        {
                            id: 'c',
                            text: 'ginger',
                        },
                        {
                            id: 'd',
                            text: 'cloves',
                        },
                        {
                            id: 'e',
                            text: 'nutmeg',
                        }


                    ],
                    selectedChoice: false,
                    correct: 'a'
                },
                {
                    id: 85,
                    text: 'Desmond Tutu was awarded the Nobel Peace Prize in',
                    choices: [
                        {
                            id: 'a',
                            text: '1983',
                        },
                        {
                            id: 'b',
                            text: '1987',
                        },
                        {
                            id: 'c',
                            text: '2001',
                        },
                        {
                            id: 'd',
                            text: '2000',
                        },
                        {
                            id: 'e',
                            text: '1984',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'e'
                },
                {
                    id: 86,
                    text: 'Nigeria became a republic on',
                    choices: [
                        {
                            id: 'a',
                            text: 'May 29, 1999',
                        },
                        {
                            id: 'b',
                            text: 'January 1, 1996',
                        },
                        {
                            id: 'c',
                            text: 'October 1, 1960',
                        },
                        {
                            id: 'd',
                            text: 'October 1, 1963',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'd'
                },
                {
                    id: 87,
                    text: 'Which of these men introduced indirect rule in Nigeria?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Dr. Nnamdi Azikiwe',
                        },
                        {
                            id: 'b',
                            text: 'Sir James Robertson',
                        },
                        {
                            id: 'c',
                            text: 'Lord Lugard',
                        },
                        {
                            id: 'd',
                            text: 'Mungo Park',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 88,
                    text: 'Africans were first elected to the legislative council in British West Africa in',
                    choices: [
                        {
                            id: 'a',
                            text: 'Sierra Leone',
                        },
                        {
                            id: 'b',
                            text: 'The Gambia',
                        },
                        {
                            id: 'c',
                            text: 'Ghana',
                        },
                        {
                            id: 'd',
                            text: 'Nigeria',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'd'
                },
                {
                    id: 89,
                    text: 'Victoria is the capital city of',
                    choices: [
                        {
                            id: 'a',
                            text: 'Somalia',
                        },
                        {
                            id: 'b',
                            text: 'Morocco',
                        },
                        {
                            id: 'c',
                            text: 'Seychelles',
                        },
                        {
                            id: 'd',
                            text: 'Burundi',
                        },
                        {
                            id: 'e',
                            text: 'Lesotho',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 90,
                    text: 'The Director-General of the Nigerian Institute of Advanced Legal Studies is',
                    choices: [
                        {
                            id: 'a',
                            text: 'Prof. Adekunle Adedeji SAN',
                        },
                        {
                            id: 'b',
                            text: 'Prof. Pat Utomi',
                        },
                        {
                            id: 'c',
                            text: 'Prof. Epiphany Azinge',
                        },
                        {
                            id: 'd',
                            text: 'Justice Nikki Tobi',
                        },
                        {
                            id: 'e',
                            text: 'Prof. (Mrs) Bolanle Awe',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'a'
                },
                {
                    id: 91,
                    text: 'Kwame Nkrumah Museum is located in ...',
                    choices: [
                        {
                            id: 'a',
                            text: 'Tanzania',
                        },
                        {
                            id: 'b',
                            text: 'Kenya',
                        },
                        {
                            id: 'c',
                            text: 'Mauritania',
                        },
                        {
                            id: 'd',
                            text: 'Ghana',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'd'
                },
                {
                    id: 92,
                    text: 'Under whose regime were Delta and Adamawa States created?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Gen Sanni Abacha',
                        },
                        {
                            id: 'b',
                            text: 'Gen yakubu Gowon',
                        },
                        {
                            id: 'c',
                            text: 'Gen Murtala Muhammed',
                        },
                        {
                            id: 'd',
                            text: 'Gen Ibrahim Babangida',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'd'
                },
                {
                    id: 93,
                    text: 'Cener of Unity is to Abuja a State of Hospitality is to',
                    choices: [
                        {
                            id: 'a',
                            text: 'Rivers',
                        },
                        {
                            id: 'b',
                            text: 'Cross River',
                        },
                        {
                            id: 'c',
                            text: 'Katsina',
                        },
                        {
                            id: 'd',
                            text: 'Nasarawa',
                        },
                        {
                            id: 'e',
                            text: 'Sokoto',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 94,
                    text: 'The senate president during the second republic was ...',
                    choices: [
                        {
                            id: 'a',
                            text: 'Dr. Joseph Wayas',
                        },
                        {
                            id: 'b',
                            text: 'Senator Anyim Pius Anyim',
                        },
                        {
                            id: 'c',
                            text: 'Senator lyorchia Ayu',
                        },
                        {
                            id: 'd',
                            text: 'Chief Adopous Wabara',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'a'
                },
                {
                    id: 95,
                    text: 'President Barrack Obama is the ______ president of the United States of America and first African-American president of U.S.',
                    choices: [
                        {
                            id: 'a',
                            text: '35th',
                        },
                        {
                            id: 'b',
                            text: '44th',
                        },
                        {
                            id: 'c',
                            text: '40th',
                        },
                        {
                            id: 'd',
                            text: '39th',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'b'
                },
                {
                    id: 96,
                    text: 'The Governor of Anambra State is',
                    choices: [
                        {
                            id: 'a',
                            text: 'Willie Obiano',
                        },
                        {
                            id: 'b',
                            text: 'Mr. Peter Obi',
                        },
                        {
                            id: 'c',
                            text: 'Peter Odili',
                        },
                        {
                            id: 'd',
                            text: 'Chris Ngige',
                        },
                        {
                            id: 'e',
                            text: 'Mr. Charles Adams',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'a'
                },
                {
                    id: 97,
                    text: 'Which of the following has the highest population in the world?',
                    choices: [
                        {
                            id: 'a',
                            text: 'India',
                        },
                        {
                            id: 'b',
                            text: 'Russia',
                        },
                        {
                            id: 'c',
                            text: 'China',
                        },
                        {
                            id: 'd',
                            text: 'USA',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 98,
                    text: 'Who is the president of Golden Generation?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Mr Adepoju Malik Adegoke',
                        },
                        {
                            id: 'b',
                            text: 'Mr Adepoju Mujeeb',
                        },
                        {
                            id: 'c',
                            text: 'Engr Jimoh Lawal Akinlabi',
                        },
                        {
                            id: 'd',
                            text: 'Jokanola Yusuff Olatunji',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 99,
                    text: 'Golden generation is holding her ...... annual competition',
                    choices: [
                        
                        {
                            id: 'a',
                            text: '2nd',
                        },
                        {
                            id: 'b',
                            text: '3rd',
                        },
                        {
                            id: 'c',
                            text: '4th',
                        },
                        {
                            id: 'd',
                            text: '5th',
                        }


                    ],
                    selectedChoice: false,
                    correct: 'd'
                },
                {
                    id: 100,
                    text: 'Golden generation was establish in What year',
                    choices: [
                        {
                            id: 'a',
                            text: '2015',
                        },
                        {
                            id: 'b',
                            text: '2016',
                        },
                        {
                            id: 'c',
                            text: '2017',
                        },
                        {
                            id: 'd',
                            text: '2018',
                        }

                    ],
                    selectedChoice: false,
                    correct: 'a'
                }


            ]


        }

    }
    setSelectedchoice(selectedChoice) {

        let newCurrentQuestion = this.state.currentQuestion;
        newCurrentQuestion.selectedChoice = selectedChoice;
        this.setState({ currentQuestion: newCurrentQuestion });

    }
    handleSubmit = e => {
        if (window.confirm("Are you sure, you want to submit?")) {
        this.setState({ quizCompleted: true });
        db.collection("users").add({userId:this.state.user, result:this.state.score })
        } else {
          alert("Okay then")
        } 

    }


    componentWillMount() {
        this.setState({ currentQuestion: this.state.questions ? this.state.questions[this.state.current] : null })

    }

    setScore(score) {
        this.setState({ score });
    }
    togglePrev(e) {

        let index = this.state.current - 1;
        let disabledPrev = (index === 0);
        this.setState({ current: index, disabledPrev: disabledPrev, disabledNext: false, currentQuestion: this.state.questions[index] })
    }
    toggleNext(e) {
            let index = this.state.current + 1;
            let disabledNext = index === (this.state.questions.length - 1);
            this.setState({ current: index, disabledNext: disabledNext, disabledPrev: false, currentQuestion: this.state.questions[index] })
       
    }
    render() {
        const { disabledNext, disabledPrev } = this.state
        if (this.state.quizCompleted) {
            var timer = '';
            var header = '';
            var quiz = '';
            var previousButton = '';
            var nextButton = '';
            var submitButton = '';
            var results = <Results {...this.state } />

        }
        else {
            var timer = <Timer ms={5400000} />
            var header = <Header {...this.state} />
            var quiz = <QuestionList setSelectedchoice={this.setSelectedchoice.bind(this)} setScore={this.setScore.bind(this)} handleChange={this.handleChange} {...this.state} />
            var previousButton = <Prev toggle={(e) => this.togglePrev(e)} active={disabledPrev} />;
            var nextButton = <Next toggle={(e) => this.toggleNext(e)} active={disabledNext} />;
            var submitButton = <button onClick={this.handleSubmit} className="btn btn-primary"  >
                Submit
            </button>
            var results = '';
        }

        if (!this.props.timeOut) {
            return (
                <div>
                    {timer}
                    {header}
                    {quiz}
                    {previousButton}
                    {nextButton}
                    <div className="submitQuiz">
                        {submitButton}
                    </div>
                    {results}
                </div>
            );
        }
        else
            window.location.assign("/");

    }
}
const Prev = (props) => {
    return (
        <button onClick={props.toggle} disabled={props.active}>Previous</button>
    );
}
const Next = (props) => {
    return (
        <button onClick={props.toggle} disabled={props.active}>Next</button>
    );
}
export default QuestionSet;