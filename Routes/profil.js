const express = require('express');

const router = express.Router();

module.exports = router;

//Lien vers le controleur
const { createProfil, getProfil, deleteProfil, updateProfil } = require('../Controlers/profil');

//Crontrol pour afficher les categories et créer un nouveau Profil
router.route('/')
    .get(getProfil)
    .post(createProfil);

//Crontrol pour supprimer et modifer un Profil à partir de l'id de ce dernier
router.route('/:id')
    .delete(deleteProfil)
    .put(updateProfil);