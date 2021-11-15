const { find, findById, create } = require("../models/profil");
const Profil = require("../models/profil");

//@desc    crée un profil
//@route   POST /profil
//@access  Public
exports.createProfil = (async(req, res) => {
    //Profil à ajouter dépuis le body parser
    const Nom = req.body.nom;
    const Prenom = req.body.prenom;
    const dateNaissance = req.body.dateNaissance;
    const Age = req.body.age;
    const Profession = req.body.profession;
    //Création Profil avec infos du body parser
    const profilAdded = await Profil.create({
        nom: Nom,
        prenom: Prenom,
        dateDeNaissance: dateNaissance,
        age: Age,
        profession: Profession
    });
    //Reponse au client
    res.status(200).send({
        'success': true,
        'message': "Task created",
        'data': []
    });
});


//@desc     retourne tous les profils
//@route    GET /profil
//@access   Public
exports.getProfil = (async(req, res) => {
    const profils = await Profil.find({ isAlive: true });
    res.status(201).send({
        'success': true,
        'data': profils
    });
});


//@desc     supprime un profil à partir de son id
//@route    DELETE /profil/id
//@access   Public
exports.deleteProfil = (async(req, res) => {
    //id du profil à supprimer dépuis le lien
    const idToDelete = req.params.id;
    try {
        //Suppression du profil
        await Profil.findByIdAndUpdate(idToDelete, {
            lastUpdate: Date.now(),
            isAlive: false
        })
    } catch (error) {
        console.log('Err findByIdAndUpdate ' + error)
    }
    res.status(200).send({
        'success': true,
        'message': "Profil deleted"
    });
});


//@desc     MODIFIE un profil à partir de son id
//@route    PUT /profil/id
//@access   Public
exports.updateProfil = (async(req, res) => {
    //id du profil à supprimer dépuis le lien
    const idToUpdate = req.params.id;
    //Modifications à apporter au profil dépuis le body parser
    const Nom = req.body.nom;
    const Prenom = req.body.prenom;
    const dateNaissance = req.body.dateNaissance;
    const Age = req.body.age;
    const Profession = req.body.profession;
    let profil;
    try {
        //Modification de la categorie
        await Profil.findByIdAndUpdate(idToUpdate, {
            nom: Nom,
            prenom: Prenom,
            dateDeNaissance: dateNaissance,
            age: Age,
            profession: Profession,
            lastUpdate: Date.now()
        })
    } catch (error) {
        console.log('Err findByIdAndUpdate ' + error)
    }
    try {
        //Pour afficher profil après modification
        profil = await Profil.findById(idToUpdate)
    } catch (error) {
        console.log('Err  findById' + error)
    }

    res.status(200).send({
        'success': true,
        'message': "profil updated",
        'data': []
    });
});