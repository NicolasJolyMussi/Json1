function Salvar() {
    const nome = prompt("Nome");
    const nota1Text = prompt("Nota1");
    const nota2Text = prompt("Nota2");
    const turma = prompt("Turma");
    const periodo = prompt("Periodo");

    //Vidacao
    //Tratamento de dados

    const nota1 = Number(nota1Text);
    const nota2 = Number(nota2Text);
    const somarnotas = (nota1 + nota2);
    const media = (somarnotas / 2);



    let aluno = {
        "nome": nome,
        "nota1Bim": nota1,
        "nota2Bim": nota2,
        "turma": turma,
        "periodo": periodo,
        "media": media,
        "aprovado": true
    };

    console.log(aluno);
}

/*
CRIAR ATRIBUTOS PARA AMAZENAR 
TURMA, PERIODO E MEDIA
MOSTRAR NA TABELA ESSAS INFORMAÇÕES
*/
