const express=require('express');
// const newEtudiant={matricule:'2432',nom:'vAntonio manase',age:'17'};
// const matricule=2704;
// const nouvelle={matricule:'2663',nom:'Andriamampindry kelly alphador',age:'20'};
// const matAjour=2589;
const router=express.Router();
router.get('/users',(req,res)=>{
    // res.send('fdgdghfhf');
    res.setHeader('Access-Control-Allow-Origin','*');
    req.getConnection((erreur,connection)=>{
        if(erreur)
        {
            console.log(erreur);
        }
        else{
            connection.query(' select matricule,nom,taux_horaire,nbr_heure,nbr_heure*taux_horaire as prestation from enseignant',(err,resultat)=>{
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    res.json(resultat);
                }
            })
        }
    })
})
router.get('/sum_prestation',(req,res)=>{
    // res.send('fdgdghfhf');
    res.setHeader('Access-Control-Allow-Origin','*');
    req.getConnection((erreur,connection)=>{
        if(erreur)
        {
            console.log(erreur);
        }
        else{
            connection.query('select sum(taux_horaire*nbr_heure) as total_prestation from enseignant',(err,resultat)=>{
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    res.json(resultat);
                }
            })
        }
    })
})
router.get('/min_prestation',(req,res)=>{
    // res.send('fdgdghfhf');
    res.setHeader('Access-Control-Allow-Origin','*');
    req.getConnection((erreur,connection)=>{
        if(erreur)
        {
            console.log(erreur);
        }
        else{
            connection.query('select min(taux_horaire*nbr_heure) as minimum_prestation from enseignant',(err,resultat)=>{
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    res.json(resultat);
                }
            })
        }
    })
})
router.get('/max_prestation',(req,res)=>{
    // res.send('fdgdghfhf');
    res.setHeader('Access-Control-Allow-Origin','*');
    req.getConnection((erreur,connection)=>{
        if(erreur)
        {
            console.log(erreur);
        }
        else{
            connection.query('select max(taux_horaire*nbr_heure) as maximum_prestation from enseignant',(err,resultat)=>{
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    res.json(resultat);
                }
            })
        }
    })
})
router.post('/ajoutUser',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    const matricule=req.body.matricule;
    const taux_horaire=req.body.taux_horaire;
    const nom=req.body.nom;
    const nbr_heure=req.body.nbr_heure;
    const newEnseignant={matricule:matricule,nom:nom,taux_horaire:taux_horaire,nbr_heure:nbr_heure};
    // console.log(matricule,age,nom);
    req.getConnection((erreur,connection)=>{
        if(erreur)
        {
            console.log(erreur);
        }
        else{
            connection.query('INSERT INTO enseignant set ?',newEnseignant,(err,resultat)=>{
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    console.log('nouvelle donne inserer');
                }
            })
        }
    })
})
router.post('/delete',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    const matricule=req.body.matricule_delete;
    console.log(matricule);
    
    req.getConnection((erreur,connection)=>{
        if(erreur)
        {
            console.log(erreur);
        }
        else{
            connection.query('DELETE FROM enseignant WHERE matricule=?',matricule,(err,resultat)=>{
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    console.log('donne suprimer');
                }
            })
        }
    })
})
router.post('/update',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    // const matricule=req.body.matricule_modif;
    // const age=req.body.age_modif;
    // const nom=req.body.nom_modif;
    const matAjour=req.body.matricule;
    const matricule=req.body.matricule;
    const taux_horaire=req.body.taux_horaire;
    const nom=req.body.nom;
    const nbr_heure=req.body.nbr_heure;
    const nouvelle={matricule:matricule,nom:nom,taux_horaire:taux_horaire,nbr_heure:nbr_heure};
    // const nouvelle={matricule:2345,nom:'felice martial',taux_horaire:1254,nbr_heure:4};
    req.getConnection((erreur,connection)=>{
        if(erreur)
        {
            console.log(erreur);
        }
        else{
            connection.query('UPDATE enseignant SET ? WHERE matricule = ?',[nouvelle,matAjour],(err,resultat)=>{
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    console.log('donne modifier');
                }
            })
        }
    })
})
module.exports=router;