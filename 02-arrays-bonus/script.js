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
const reversedTeachers = [];

for(let i = 0; i < teachers.length; i++){
  reversedTeachers.unshift(teachers[i])
}

console.log(reversedTeachers);




// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (let i = 0; i < teachers.length; i++){

    // controllare che ogni elemento dell'array sia composto da 5 o più caratteri
    //prendere l'elemento corrente
    //controllo che l'elemento siadi lunghezza >= di 5 caratteri
    //Se è >= di 5 caratteri lo inserisco nell'array
  if(teachers[i].length >= 5){ 
    longNames.push(teachers[i]);  
  }  
}

console.log(longNames);



// 3. Rimuovi 'Ed' dall'array teachers
for (let i = 0; i < teachers.length; i++){
  if(teachers[i] == 'Ed'){
    teachers.splice(i, 1);   
  }
}

console.log(teachers);



