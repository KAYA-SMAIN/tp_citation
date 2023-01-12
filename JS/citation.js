const citationJokerTab = [
    ['Donnez un masque' , 'à un homme',' et vous verrez sa vraie personnalité.'],
    ['Un homme ', 'qui n\'a rien à craindre est ','un homme qui n\’a personne à aimer.'],
    ['Le véritable amour',' c\’est rencontrer quelqu\’un ',' dont les démons jouent bien avec les tiens.'],
    ['Tu sais quoi ?',' Personne ne panique quand tout se déroule comme prévu.' ,' Même si ce qui est prévu est affreux.'],
    ['Comment cacher quelque chose',' au meilleur détective du monde ?' , ' En le mettant juste sous son nez.'],
]

const citationBatouTab = [
    ['J\'n\'ai pas du tout peur' , 'j\'ai ', ' la rage !'],
    ['Parce que parfois la vérité ne suffit pas.',' Parfois les gens méritent mieux, de temps à autre.',' Les gens méritent de voir leur foi récompensée.'],
    [ ' Je ne suis pas en danger, Skyler.',' Je suis le danger. Un mec ouvre sa porte et se fait tirer dessus,',' et tu crois que ce serait moi ? Non ! Je suis celui qui toque !' ],
    ['Vous, les Vikings, êtes incorrigibles.',' Vous sortez de l\'utérus avec une seule chose en tête',' ... comment mourir.'],
    ['Au nom de notre père mort, au nom de Ragnar Lothbrok',' le plus grand héros de notre pays, et au nom d\'Odin',' nous déclarons la guerre au monde entier.'],
    ['La règle est :',' le conducteur choisit la musique',' le passager ferme sa gueule.'],
]
function getRandomInt(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function getValuebatouu()
{
  var inputbatou = document.getElementById("bat").value;
   return inputbatou;
}


const batouuavc = document.querySelector("#batouu");


batouuavc.addEventListener("click", 
function creerphrase()
 {
    
    var valeurbat = getValuebatouu();
    console.log("putain");
    if(valeurbat == ""){
      console.log("Bonjour90");
      let monErreur = document.getElementById('Erreur');
      monErreur.innerHTML="Le champs requiert des chiffres!";
      monErreur.style.color ='red';
    }
    else if(isNaN(valeurbat)){
      let monErreur = document.getElementById('Erreur');
      monErreur.innerHTML="Le champs requiert que des chiffres!";
      monErreur.style.color = 'red';
    }
    else if(valeurbat>5 || valeurbat<1)
    {
      let monErreur = document.getElementById('Erreur');
      monErreur.innerHTML="Le chiffre saisi est trop grand ou trop petit!";
      monErreur.style.color = 'red';
    }
    else{ while(valeurbat >0)
      {
      for (let j = 0; j < 3; j++)
      {
          var batnum =  getRandomInt(0 , 5);
          document.getElementById("bati").innerHTML += citationBatouTab[batnum][j] +=" "; 
      }
      document.getElementById("bati").innerHTML  +="<br>"; 
      valeurbat --; 
      }}
   
  });

  /* Joker*/
  function getValuejokou()
{
  var inputjokou = document.getElementById("jojo").value;
   return inputjokou;
}


const jokouavc = document.querySelector("#jojo1");


jokouavc.addEventListener("click", 
function creerphrase2()
 {
    
    var valeurjoker = getValuejokou();
    console.log("putain");
    if(valeurjoker == ""){
      console.log("Bonjour90");
      let tonErreur = document.getElementById('erreur1');
      tonErreur.innerHTML="Le champs requiert des chiffres!";
      tonErreur.style.color ='red';
    }
    else if(isNaN(valeurjoker)){
      let tonErreur = document.getElementById('erreur1');
      tonErreur.innerHTML="Le champs requiert que des chiffres!";
      tonErreur.style.color = 'red';
    }
    else if(valeurjoker>5 || valeurjoker<1)
    {
      let tonErreur = document.getElementById('erreur1');
      tonErreur.innerHTML="Le chiffre saisi est trop grand ou trop petit!";
      tonErreur.style.color = 'red';
    }
    else{ while(valeurjoker >0)
      {
      for (let j = 0; j < 3; j++)
      {
          var joknum =  getRandomInt(0 , 4);
          document.getElementById("jokoi").innerHTML += citationJokerTab[joknum][j] +=" "; 
      }
      document.getElementById("jokoi").innerHTML  +="<br>"; 
      valeurjoker --; 
      }}
   
  });

  
  