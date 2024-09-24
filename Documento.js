const mysql = require('mysql');

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'fatec123',
database: 'escola'
});

connection.connect((err) => {
if (err) {
console.error('Error connecting to the database:', err);
return;
}
console.log('Connected to the database.');
});

function gravarAluno(id, nome, email) {
const query = 'INSERT INTO aluno (id, nome, email) VALUES (?, ?, ?)';
connection.query(query, [id, nome, email], (err, result) => {
if (err) {
console.error('Error inserting data:', err);
return;
}
console.log('Data inserted successfully:', result);
});
}

function buscarAlunos() {
const query = 'SELECT id, nome, email FROM aluno';
connection.query(query, (err, results) => {
if (err) {
console.error('Error fetching data:', err);
return;
}
console.log('Aluno:');
results.forEach((row) => {
console.log(ID: ${row.id}, Nome: ${row.nome}, Email: ${row.email});
});
});
}

gravarAluno(1, 'Pedro Gomes', 'pedro.gomes66@fatec.sp.gov.br');
gravarAluno(2, 'Pedro Gabriel', 'pedro.gabriel67@fatec.sp.gov.br');
gravarAluno(3, 'Pedro Lima', 'pedro.lima68@fatec.sp.gov.br');
buscarAlunos();

connection.end();
