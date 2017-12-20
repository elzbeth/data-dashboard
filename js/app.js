/*
 * Funcionalidad de tu producto
 */
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

// var data = data;
// alert('hola mundo');


//=======VARIABLES=====//
var campusName;
var campusList;
var generation;
var campusId;
var campusData;
var generationsByCampus;
var studentsByCampus;
var studentName;
var studentCampus;
var studentGeneration;
var studentStatus;
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

//--- FUNCIONES---//



function searchInArray(array, string) {
  var result;
  for (var m = 0; m < array.length; m++) {
    if (string === array[m]) {
      result = string;
    }
  }
  return result;
};

// para buscar una key en un objeto
function searchInObject(obj, string) {
  var result;
  var keys = Object.keys(obj);
  for (var s = 0; s < keys.length; s++) {
    if (string === keys[s]) {
      result = string;
    }
  }
  return result;
};

var campusId = function(){
   campusId = Object.keys(data);
  console.log('campusId');
  console.log(campusId);
  return campusId;
}

campusId();


var campusData = function(){
  campusData= Object.values(data);
  console.log('campusData');
  console.log(campusData);
  return campusData
}
campusData();
 var generationsByCampus = function(){
   for (var i = 0; i < campusId.length; i++) {
     for (var j = 0; j < campusId.length; j++) {
       var generationsByCampus = Object.keys(campusData[j]);
       console.log('generationsByCampus');
       console.log(generationsByCampus);
     }
   }
 }

 generationsByCampus();

 var generationsData = function(){
   for (var i = 0; i < campusId.length; i++) {
     for (var j = 0; j < campusId.length; j++) {
       var generationsData = Object.values(campusData[j]);
       console.log('generationsData');
       console.log(generationsData);
     }
   }
 }

 generationsData();


var studentsKeys = function(){
   for (var i = 0; i < campusData.length; i++) {
     for (var j = 0; j < campusData.length; j++) {
       var studentsKeys = Object.keys(generationsData[j]);
       console.log('studentsKeys');
       console.log(studentsKeys);
     }
   }
 }

 studentsKeys();




