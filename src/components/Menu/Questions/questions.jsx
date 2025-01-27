import React from 'react'
import './questions.css'

import {ReactComponent as Lines} from '../../../images/menu/search/lines.svg'

const question = [
    {id: 1, question: 'How long does delivery take?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quam!'},
    {id: 2, question: 'How Does It Work ?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illo cum, alias voluptatem ullam esse? Incidunt, quisquam nam Ex harum voluptas officiis expedita'},
    {id: 3, question: 'How does your food delivery service work?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolore maiores ipsam beatae vitae eveniet'},
    {id: 4, question: 'What payment options do you accept?', answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore natus ea autem repellat mollitia error rem, amet id repellendus fugiat.'},
    {id: 5, question: 'Do you offer discounts or promotions?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quam! Lorem ipsum dolor adipisicing elit.'},

]

const Questions = () => {

    const [toggleQuestion, setToggleQuestion] = React.useState(0)

    return (
        <>
            <div className="question">
                <div className="lines-box">
                    <h3 className="title question-title">Frequently Asked <br /> <span className="title-perple">Questions</span></h3>
                    <Lines className='lines-img'/>
                </div>
                
                    {question.map((elem) => (
                        <div key={elem.id} onClick={() => setToggleQuestion(elem.id)} className='question-box'>
                            <div className="question-box-img">
                                <p className="question-question">{elem.question}</p>
                                <div className="question-circle">{toggleQuestion === elem.id ? '-' : '+'}</div>
                            </div>
                            
                            <p className={`question-answer ${toggleQuestion === elem.id ? 'active' : 'disactive'}`}>{elem.answer}</p>
                        </div>
                    ))}
            </div>
        </>
    )
}

export default Questions