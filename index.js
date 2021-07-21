const customExpress = require('./config/customExpress');
const consign = require('consign');
const app = customExpress();

    consign()
    .include('controllers')
    .into(app);

app.listen(3000,()=>console.log('servidor rodando na porta 3000'));
