
// objectif defis images description et long_texte qui est le parent de présentation//
const bt = document.getElementById('bt');
const images = document.querySelector('.images');
const description= document.getElementById('description');
const long_texte = document.querySelector('.long_texte');
const bt2 =document.getElementById('bt2');
// fin //

// le boutton biographie //
const bio = document.getElementById('bio');
const parentDeFusce = document.querySelector('.fusce');
// fin de biographie//






bt.addEventListener('click',afficher);
function afficher (){
    images.classList.toggle('active');
    description.style.color ='white';
    description.textContent= 'Mn objectif est de devellopper des interfaces web adaptées pour les utilisateurs tout en repondant a un cahier des charges élaborés par un chef de projet ';
   
    long_texte.style.background = 'blue'
}


bt2.addEventListener('click',afficher2);
function afficher2 (){
    images.classList.toggle('active2');
    description.style.color ='white';
    description.textContent= "les défis auxquels sont eprouvéés un developpeur web est la recherche de comptabilité qui se base sur l'expérience utilisateur";
   
    long_texte.style.background = 'orange'
}

bio.addEventListener('click',biographie);
function biographie (){
    
    
    parentDeFusce.children[1].textContent = "Devellopeur Front End , avec 9 mois d'epérience. Mordu d'informatiqe le code m'a toujours passionné depuis mon enfance, je me suis lancé dans l'apprentissage de plusieurs langagues informatiques( HTML CSS JAVASCRIPT ) en créant des projets personnels ,dont un site de mon portofolio, un site de blog et un site vitrine pour un agriculteur de la place; Polyvalent , je maitrise les différents étapes techniques de la création d'un site web;de la compréhension des bésoins utilisateurs , au developpement frontend "
    
   
}


const presentation = document.querySelector('.page1');
const premmier = document.querySelector('.premier');

presentation.addEventListener('click',()=>{
    premmier.style.boxShadow="5px 5px 20px 5px orange"
})

const font = document.querySelector(".font");

const html = document.getElementById('html');









