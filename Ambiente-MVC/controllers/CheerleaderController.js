const { Cheerleader, cheerleaders } = require('../models/Cheerleader');

exports.getAll = (req, res) => {
    res.render('index', { cheerleaders });
};

exports.showCreateForm = (req, res) => {
    res.render('form'); 
};


exports.create = (req, res) => {
    const { nome, time, posicao } = req.body;
    cheerleaders.push(new Cheerleader(nome, time, posicao));
    res.redirect('/');
};

exports.showEditForm = (req, res) => {
    const id = parseInt(req.params.id);
    const cheerleader = cheerleaders.find(c => c.id === id);
    if (!cheerleader) return res.status(404).send('Cheerleader não encontrado');
    res.render('edit', { cheerleader });
};

exports.edit = (req, res) => {
    const id = parseInt(req.params.id);
    const cheerleader = cheerleaders.find(c => c.id === id);
    if (!cheerleader) return res.status(404).send('Cheerleader não encontrado');
    cheerleader.nome = req.body.nome;
    cheerleader.time = req.body.time;
    cheerleader.posicao = req.body.posicao;
    res.redirect('/');
};
