
//El total de estudiantes presentes por sede y generación.
//El porcentaje de deserción de estudiantes.
//La cantidad de estudiantes que superan la meta de puntos en promedio de todos
//los sprints cursados. La meta de puntos es 70% del total de puntos en HSE y en tech.
//El porcentaje que representa el dato anterior en relación al total de
//estudiantes.
//El Net Promoter Score (NPS) promedio de los sprints cursados. El NPS se
//calcula en base a la encuesta que las estudiantes responden al respecto de
//la recomendación que darían de Laboratoria, bajo la siguiente fórmula:
//[Promoters] = [Respuestas 9 o 10] / [Total respuestas] * 100
//[Passive] = [Respuestas 7 u 8] / [Total respuestas] * 100
//[Detractors] = [Respuestas entre 1 y 6] / [Total respuestas] * 100
//[NPS] = [Promoters] - [Detractors]
//La cantidad y el porcentaje que representa el total de estudiantes que superan
//la meta de puntos técnicos en promedio y por sprint.
//La cantidad y el porcentaje que representa el total de estudiantes que
//superan la meta de puntos de HSE en promedio y por sprint.
//El porcentaje de estudiantes satisfechas con la experiencia de Laboratoria.
//La puntuación promedio de l@s profesores.
//La puntuación promedio de l@s jedi masters.
// var centers = [
//   {name: 'Arequipa',
//     key: 'AQP'},
//   {name: 'Ciudad de México',
//     key: 'CDMX'},
//   {name: 'Lima',
//     key: 'LIM'},
//   {name: 'Santiago de Chile',
//     key: 'SCL'}
// ];
// alert('hithere');

console.log(data)

//=======VARIABLES=====//
var campusName;
var campusList;
var generation;
var campusId;
var campusData;
var generationsByCampus;
var studentsByCampus;
var studentsEnrolledByCampus;
var studentsDropOutByCampus
var averageNotesByStudent;
var averageNotesByCampus;
var averageNotesByGeneration;
var averageTechNotesByCampus;
var averageTechNotesByGeneration;
var averageHsehNotesByCampus;
var averageHsehNotesByGeneration;
var averageNotesByTeachers;
var averageNotesByJedis;
var studentsOverAverageByCampus;
var studentsUnderAverageByCampus;
var averageNpsByCampus;
var averageNpsByGeneration;
var studentsGeneralDirectory;
var teachersGeneralDirectory;
var jedisGeneralDirectory;
var studentsDirectoryByCampus;
var teachersDirectoryByCampus;
var jedisDirectoryByCampus;
//=======EVENTOS=====//


//=======FUNCIONES=====//

//buscar en array//
function searchInArray(array, string) {
  var result;
  for (var i = 0; i < array.length; i++) {
    if (string === array[i]) {
      result = string;
    }
  }
  return result;
}

//buscar en objeto//
function searchInObject(obj, string) {
  var result;
  var keys = Object.keys(obj);
  for (var j = 0; j < keys.length; j++) {
    if (string === keys[j]) {
      result = string;
    }
  }
  return result;
}

var campusId = function(){
 var campusId = Object.keys(data);
 console.log('campusId');
 console.log(campusId);
};

// campusId();

var campusData = function(){
 var campusData = Object.values(data);
 console.log('campusData');
 console.log(campusData);
};

// campusData();

var campusList = function(){
 var campusName = Object.keys(data);
 var campusList =[];
 for (var i = 0; i < campusName.length; i++) {
   campusList.push([campusName[i]= data[campusName[i]]])
 }
 console.log('campusList');
 console.log(campusList);
};

// campusList();

var generation = function(data){


};


var campusData = function(data){


};

var generationsByCampus = function(){

};

generationsByCampus();


var studentsByCampus = function(data){


};

var studentsEnrolledByCampus = function(data){


};

var studentsDropOutByCampus = function(data){


};

var averageNotesByStudent = function(data){


};

var averageNotesByCampus = function(data){


};

var averageNotesByGeneration = function(data){


};

var averageTechNotesByCampus = function(data){


};

var averageTechNotesByGeneration = function(data){


};

var averageHsehNotesByCampus = function(data){


};

var averageHsehNotesByGeneration = function(data){


};

var averageNotesByTeachers = function(data){


};

var averageNotesByJedis = function(data){


};

var studentsOverAverageByCampus = function(data){


};

var studentsUnderAverageByCampu = function(data){


};

var averageNpsByCampus = function(data){


};

var averageNpsByGeneration = function(data){


};

var studentsGeneralDirectory = function(data){


};

var teachersGeneralDirectory = function(data){


};

var jedisGeneralDirectory = function(data){


};

var studentsDirectoryByCampus = function(data){


};

var teachersDirectoryByCampus = function(data){


};

var jedisDirectoryByCampus = function(data){


};

// var showHide = function(e){
//    var campusSelected = e.target.dataset.campusSelected;
//    var generalDash = document.getElementById('generalDash');
//    var campusArequipa = document.getElementById('arequipa');
//    var campusCdMexico = document.getElementById('mexico');
//    var campusLima = document.getElementById('lima');
//    var campusChile = document.getElementById('chile');
//
//    if(campusSelected === campusArequipa){
//      generalDash.style.display = "none";
//      campusArequipa.style.display = "block";
//      campusCdMexico.style.display = "none";
//      campusLima.style.display = "none";
//      campusChile.style.display = "none";
//    }else if(campusSelected === campusCdMexico){
//      generalDash.style.display = "none";
//      campusArequipa.style.display = "none";
//      campusCdMexico.style.display = "block";
//      campusLima.style.display = "none";
//      campusChile.style.display = "none";
//    }else if(campusSelected === campusLima){
//      generalDash.style.display = "none";
//      campusArequipa.style.display = "none";
//      campusCdMexico.style.display = "none";
//      campusLima.style.display = "block";
//      campusChile.style.display = "none";
//    }else if(campusSelected === campusChile){
//      generalDash.style.display = "none";
//      campusArequipa.style.display = "none";
//      campusCdMexico.style.display = "none";
//      campusLima.style.display = "none";
//      campusChile.style.display = "block";
//    }
//    console.log('control 1');
// }
//}

// var loadingPage = function(){
//   var campusArequipa = document.getElementById('arequipa');
//   var campusCdMexico = document.getElementById('mexico');
//   var campusLima = document.getElementById('lima');
//   var campusChile = document.getElementById('chile');
//   generalDash.style.display ="block";
//   campusArequipa.style.display = "none";
//   campusCdMexico.style.display = "none";
//   campusLima.style.display = "none";
//   campusChile.style.display = "none";
//
//   var elementsCampus = document.getElementsByClassName('campusMenu');
//   for (var i = 0; i < elementsCampus.length; i++) {
//     elementsCampus[i].addEventListener('click', showHide );
//   }
//   console.log('control 2');
// }
//
// loadingPage();
