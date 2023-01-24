let resPrec = 0;

function tirerIntDansIntervalle(borneInf, borneSup){
    return Math.floor(Math.random() * (borneSup - borneInf + 1)) + borneInf;
}

function tirerCouleurDifferente(resPrec) {
    let res = tirerIntDansIntervalle(1, 3);
    while (res == resPrec) {
        res = tirerIntDansIntervalle(1, 3);
    }
    return res;
}

function fondAlea() {
    let resFond = tirerCouleurDifferente(resPrec);
    document.body.style.background = getCouleur(resFond);
    resPrec = resFond;
}

function getCouleur(resFond) {
    switch (resFond) {
        case 1 :
            return "rgb(155, 102, 102)";
        case 2 :
            return "rgb(119, 181, 254)";
        case 3 :
            return "rgb(155, 255, 102)";
    }
}

function declencherBoutonTirerDe () {
    //Affiche le résultat
    document.getElementById("resLancer").innerHTML = tirerIntDansIntervalle(1, 16);

    //Change le fond
    let resFond = tirerCouleurDifferente(resPrec);
    resPrec = resFond;
    document.body.style.background = getCouleur(resFond);
}

//Met un fond aléatoire au début
fondAlea();
