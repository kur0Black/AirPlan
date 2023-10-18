const oracledb = import('oracledb');
//const oracledb = __importDefault(require("oracledb"));

// Oculta todas as seções no carregamento inicial e exibe apenas a primeira
document.addEventListener('DOMContentLoaded', function() {
    showSection('aeronaves');
});

// Funcionalidade para o formulário de aeronaves
document.getElementById('form-aeronaves').addEventListener('submit', function(event) {
    event.preventDefault();

    const modelo = document.getElementById('modelo').value;
    const identificacao = document.getElementById('identificacao').value;

    try {
        const connection = oracledb.getConnection({
            user: 'System',
            password: 'senha',
            connectString: 'localhost:1521/xe',
        });

        const sql = 'INSERT INTO Aeronaves (modelo, identificacao, fabricante, ano) VALUES (:modelo, :identificacao, :fabricante, :ano)';
        const binds = { modelo, identificacao, fabricante, ano };

        const options = {
            autoCommit: true,
        };

        const result = connection.execute(sql, binds, options);
        console.log('Inserção bem-sucedida');
        connection.close();
    } catch (error) {
        console.error('Erro ao inserir no Oracle:', error);
    }

    const listItem = document.createElement('li');
    listItem.textContent = `${modelo} - ${identificacao}`;

    document.getElementById('lista-aeronaves').appendChild(listItem);

    // Limpa o formulário
    event.target.reset();
});


// Função para exibir a seção desejada e ocultar as demais
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    for (let section of sections) {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    }
}



// Funcionalidade para o formulário de aeroportos
document.getElementById('form-aeroportos').addEventListener('submit', function(event) {
    event.preventDefault();

    const aeroporto = document.getElementById('aeroporto').value;
    const cidade = document.getElementById('cidade').value;

    try {
        const connection = oracledb.getConnection({
            user: 'System',
            password: 'senha',
            connectString: 'localhost:1521/xe',
        });

        const sql = 'INSERT INTO Aeroportos (aeroporto, cidade) VALUES (:aeroporto, :cidade)';
        const binds = { aeroporto, cidade };

        const options = {
            autoCommit: true,
        };

        const result = connection.execute(sql, binds, options);

        console.log('Inserção bem-sucedida');
        connection.close();
    } catch (error) {
        console.error('Erro ao inserir no Oracle:', error);
    }

    const listItem = document.createElement('li');
    listItem.textContent = `${aeroporto} - ${cidade}`;

    document.getElementById('lista-aeroportos').appendChild(listItem);

    // Limpa o formulário
    event.target.reset();
});

// Funcionalidade para o formulário de trechos
document.getElementById('form-trechos').addEventListener('submit', function(event) {
    event.preventDefault();

    const origem = document.getElementById('origem').value;
    const destino = document.getElementById('destino').value;

    try {
        const connection = oracledb.getConnection({
            user: 'System',
            password: 'senha',
            connectString: 'localhost:1521/xe',
        });

        const sql = 'INSERT INTO Trechos (origem, destino) VALUES (:origem, :destino)';
        const binds = { origem, destino };

        const options = {
            autoCommit: true,
        };

        const result = connection.execute(sql, binds, options);

        console.log('Inserção bem-sucedida');
        connection.close();
    } catch (error) {
        console.error('Erro ao inserir no Oracle:', error);
    }
    
    const listItem = document.createElement('li');
    listItem.textContent = `${origem} -> ${destino}`;

    document.getElementById('lista-trechos').appendChild(listItem);

    // Limpa o formulário
    event.target.reset();
});

// Funcionalidade para o formulário de voos
document.getElementById('form-voos').addEventListener('submit', function(event) {
    event.preventDefault();

    const numeroVoo = document.getElementById('numero-voo').value;
    const dataVoo = document.getElementById('data-voo').value;
    const horarioPartida = document.getElementById('horario-partida').value;
    const horarioChegada = document.getElementById('horario-chegada').value;
    const aeroportoSaida = document.getElementById('aeroporto-saida').value;
    const aeroportoChegada = document.getElementById('aeroporto-chegada').value;
    const valorPassagem = document.getElementById('valor-passagem').value;


    try {
        const connection = oracledb.getConnection({
            user: 'System',
            password: 'senha',
            connectString: 'localhost:1521/xe',
        });

        const sql = 'INSERT INTO Voos (numeroVoo, dataVoo, horarioPartida, horarioChegada, aeroportoSaida, aeroportoChegada, valorPassagem) VALUES (:numeroVoo, :dataVoo, :horarioPartida, :horarioChegada, :aeroportoSaida, :aeroportoChegada, :valorPassagem)';
        const binds = { numeroVoo, dataVoo, horarioPartida, horarioChegada, aeroportoSaida, aeroportoChegada, valorPassagem };

        const options = {
            autoCommit: true,
        };

        const result = connection.execute(sql, binds, options);

        console.log('Inserção bem-sucedida');
        connection.close();
    } catch (error) {
        console.error('Erro ao inserir no Oracle:', error);
    }


    const listItem = document.createElement('li');
    listItem.textContent = `Voo ${numeroVoo} - ${dataVoo} - ${horarioPartida}-${horarioChegada} - ${aeroportoSaida}-${aeroportoChegada} - R$ ${valorPassagem}`;

    document.getElementById('lista-voos').appendChild(listItem);

    // Limpa o formulário
    event.target.reset();
});

