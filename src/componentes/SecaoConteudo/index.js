import React from 'react';
import SecaoProdutos from '../SecaoProdutos';
import SecaoSobre from '../SecaoSobre';
import SecaoContatos from '../SecaoContatos';
import SecaoCapa from '../SecaoCapa';

export default function SecaoConteudo(){
    return(
        <main>
            <SecaoCapa />
            <SecaoProdutos />
            <SecaoSobre />
            <SecaoContatos />
        </main>
    );
}
