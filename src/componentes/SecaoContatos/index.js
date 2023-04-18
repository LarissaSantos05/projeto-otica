import React from 'react';
import './estilo.css';

export default function SecaoContato(){
    return(
        <section id="contato" className='secao-contato'>
            <div className='limitar-secao'>
                <h2>Fale conosco</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento</p>
                
                <div className="contato-container">
                    <div className="contato-conteudo">
                        <h3>Contato</h3>

                        <div>
                            <div>
                                <img src='./assets/imagens/local.png' alt='Local'></img>
                                <p>Fortaleza,CE</p>
                            </div>

                            <div>
                                <img src="./assets/imagens/telefone.png" alt='telefone'></img>
                                <p>(85)9999-9999</p>
                            </div>

                            <div>
                                <img src="./assets/imagens/email.png" alt='email'></img>
                                <p>contato@oticavida.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="contato-conteudo">
                        <h3>Nossas Redes Sociais</h3>
                        <div>
                            <div>
                                <img src='./assets/imagens/fb.png' alt='Facebook-icon'></img>
                                <p>/OticaVida</p>
                            </div>

                            <div>
                                <img src="./assets/imagens/ig.png" alt='instagram-icon'></img>
                                <p>@oticavidace</p>
                            </div>

                            <div>
                                <img src="./assets/imagens/tt.png" alt='twitter-icon'></img>
                                <p>@oticace</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}