const mongoose = require('mongoose');
const ProfilSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: [true, 'Ajoutez votre Nom SVP']
    },
    prenom: {
        type: String,
        required: [true, 'Ajoutez votre Prenom SVP']
    },
    dateDeNaissance: {
        type: Date,
        required: [true, 'Ajoutez votre Date de Naisssance SVP']
    },
    age: {
        type: Number,
        required: [true, 'Ajoutez votre Âge SVP']
    },
    profession: {
        type: String,
        required: [true, 'Ajoutez votre Profession SVP']
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    lastUpdate: {
        type: Date,
        default: Date.now
    },
    isAlive: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Profil', ProfilSchema);