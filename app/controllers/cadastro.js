module.exports.cadastro = function(application, req, res){
    res.render('cadastro', {validacao: {}, dadosForm: {}});
}


module.exports.cadastrar = function(application, req, res){

    var dadosForm = req.body;

    req.assert('nome', 'Nome deve ter entre 5 e 20 caracteres').len(5,20);
    req.assert('usuario', 'Usuário deve ter entre 5 e 20 caracteres').len(5,20);
    req.assert('senha', 'Nome deve ter entre 6 e 20 caracteres').len(6,20);
    req.assert('casa', 'Casa não pode ser vazio').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render('cadastro', {validacao: erros, dadosForm: dadosForm});
        return;
    }

    var connection = application.config.dbConnection;

    var usuariosDAO = new application.app.models.usuariosDAO(connection);

    usuariosDAO.cadastrar(dadosForm)

    res.render('index', {validacao: erros})
}
