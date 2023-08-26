class Produto {
    constructor() {
        this.id = 1;
        this.arrayVagas = [];
    }

    salvar() {
        let produto = this.lerDados();

        if (this.validaCampos(produto)) {
            this.adicionar(produto);
        }
        this.listaTabela();
        this.limparCampos();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerHTML = ''; // Clear the existing rows

        for (let i = 0; i < this.arrayVagas.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_name = tr.insertCell();
            let td_vagas = tr.insertCell();

            td_id.innerText = this.arrayVagas[i].id;
            td_name.innerText = this.arrayVagas[i].nome;
            td_vagas.innerText = this.arrayVagas[i].vagas;
        }
    }

    adicionar(produto) {
        this.arrayVagas.push(produto);
        this.id++;
    }

    lerDados() {
        let produto = {};
        produto.id = this.id;
        produto.nome = document.getElementById('nome').value;
        produto.vagas = document.getElementById('vagas').value;
        return produto;
    }

    validaCampos(produto) {
        let msg = '';

        if (produto.nome == '') {
            msg += '- Informe o nome do hospede \n';
        }

        if (produto.vagas == '') {
            msg += '- Informe a vaga';
        }

        if (msg != '') {
            alert(msg);
            return false;
        }

        return true;
    }

    limparCampos() {
        document.getElementById('nome').value = '';
        document.getElementById('vagas').value = '';
    }

    cancelar() {
        this.limparCampos();
      
    }
}

var produto = new Produto();