import React from 'react';
import './Respostas.css';

const Respostas = () => {
    const faqs = [
        {
            question: "O QUE É HIPNOTERAPIA?",
            answer: "Hipnoterapia é uma forma de terapia que utiliza a hipnose para ajudar a tratar várias condições e sintomas."
        },
        {
            question: "Como funciona a hipnoterapia?",
            answer: "Durante uma sessão de hipnoterapia, o terapeuta guia o paciente para um estado de relaxamento profundo e concentração focada, onde sugestões podem ser feitas para ajudar a melhorar a saúde mental e física."
        },
        {
            question: "Quais são os benefícios da hipnoterapia?",
            answer: "A hipnoterapia pode ajudar a reduzir o estresse, superar vícios, melhorar o sono, e tratar fobias e ansiedade."
        },
        {
            question: "A hipnoterapia é segura?",
            answer: "Sim, a hipnoterapia é considerada segura quando realizada por um profissional qualificado."
        },
        {
            question: "Preciso acreditar em hipnose para que ela funcione?",
            answer: "Não, você não precisa acreditar em hipnose, mas precisa estar aberto ao processo e seguir as instruções do terapeuta."
        }
    ];

    return (
        <div className="respostas-container">
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <h2>{faq.question}</h2>
                    <p>{faq.answer}</p>
                </div>
            ))}
            <div className="cta-container">
                <button className="cta-button">CONTACTO</button>
            </div>
        </div>
    );
}

export default Respostas;
