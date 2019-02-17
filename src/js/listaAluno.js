(function () {
    const formNovoAluno = $('#formNovoAluno');
    formNovoAluno.on('novoAluno', function (evento) {
        const novoAluno = evento.detail.novoAluno;

        const tabelaListagemDeAlunos = $('#listagemDeAlunos');
        const elementoNovoAluno = $(`
            <tr>
                <td>${novoAluno.matricula}</td>
                <td>${novoAluno.nome}</td>
            </tr>
        `);
        tabelaListagemDeAlunos.append(elementoNovoAluno);
    });
})();