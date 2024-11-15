const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.toReversed();

for(let i = 0; 1 < teachers.length; 1--){

}



// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (let i = 0; i < teachers.length; i++){

  // controllare che ogni elemento dell'array sia composto da 5 o più caratteri
    //prendere l'elemento corrente
    //controllo che l'elemento siadi lunghezza >= di 5 caratteri
      //Se è >= di 5 caratteri lo inserisco nell'array
if(teachers[i] > 5 == longNames){
  console.log(longNames);
}



  // teachers[i]

  // if(teachers % 5 == 0){
  //   console.log(teachers);
    
  // }
  
}

// 3. Rimuovi 'Ed' dall'array teachers
const removedTeacher = teachers.splice(1, 1);
console.log(teachers);




