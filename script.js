 
 
// Relatorio do estoque
var estoque = {};

function atualizarEstoque(produto, quantidade) {
    if (estoque.hasOwnProperty(produto)) {
        estoque[produto] += quantidade;

        if (estoque[produto] <= 0) {
            delete estoque[produto];
        }
    } else {
        if (quantidade > 0) {
            estoque[produto] = quantidade;
        }
    }
}

function exibirEstoque() {
    var tabela = document.getElementById("estoque");

    tabela.innerHTML = "";

    var cabecalho = tabela.insertRow(0);
    cabecalho.innerHTML = "<th>Produto: Quantidade</th>";

    for (var produto in estoque) {
        var quantidade = estoque[produto];
        var linha = tabela.insertRow();
        linha.innerHTML = "<td>" + produto + ": " + quantidade + "</td>";
    }
}

function registrarEntrada() {
    var produto = document.getElementById("entrada_produto").value;
    var quantidade = parseInt(document.getElementById("entrada_quantidade").value);

    atualizarEstoque(produto, quantidade);

    exibirEstoque();

    document.getElementById("entrada_produto").value = "";
    document.getElementById("entrada_quantidade").value = "";

    alert("Entrada registrada com sucesso!");
}


function registrarSaida() {
    var produto = document.getElementById("saida_produto").value;
    var quantidade = parseInt(document.getElementById("saida_quantidade").value);

    if (estoque.hasOwnProperty(produto)) {
        if (quantidade <= estoque[produto]) {
            atualizarEstoque(produto, -quantidade);

            exibirEstoque();

            document.getElementById("saida_produto").value = "";
            document.getElementById("saida_quantidade").value = "";

            alert("Saída registrada com sucesso!");
        } else 
        alert("Não há quantidade suficiente em estoque.");
    }   
    else {
    alert("O produto não está no estoque.");
}
}