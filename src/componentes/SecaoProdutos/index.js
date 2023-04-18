import React from 'react';
import './estilo.css'

export default function SecaoProdutos(){
    return(
    <main>
        <section id = 'produtos' className='secao-produtos'>
            <div className='limitar-secao'>
                <h2>Nossos Produtos</h2>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nps modelos masculino, feminino e infantil</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado</p>
            </div>

            <div className='container-produtos'>
                <div className='box-produto'>
                    <h2>Óculos de grau</h2>
                    <img src='./assets/imagens/oculos01.png' alt='Óculos de grau'></img>
                    <p>R$ 500.00</p>
                </div>

                <div className='box-produto'>
                    <h2>Óculos transition</h2>
                    <img src='./assets/imagens/oculos02.png' alt='Óculos transition'></img>
                    <p>R$ 750.00</p>
                    </div>

                <div className='box-produto'>
                    <h2>Óculos de sol</h2>
                    <img src='./assets/imagens/oculos03.png' alt='Óculos de sol'></img>
                    <p>R$ 700.00</p>
                </div>

                <div className='box-produto'>
                    <h2>Óculos infantil</h2>
                    <img src='./assets/imagens/oculos04.png' alt='Óculos infantil'></img>
                    <p>R$ 500.00</p>
                </div>
            </div>

            <div>
                <h2>Todos os nossos produtos incluem:</h2>
                <ul>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade no pagamento</li>
                </ul>
            </div>
        </section>
    </main>
    );
}
