import React from 'react';
import './estilo.css';

export default function Topo(){
    return(

            <header>
                <div className='limitar-secao'>
                    <img src='./assets/imagens/logo.png' alt='Logo'></img>

                    <nav>
                        <a href='#produtos'>Produtos</a>
                        <a href='#sobre'>Sobre</a>
                        <a href='#contatos'>Contatos</a>
                    </nav>
                </div>
            </header>

    );
}
