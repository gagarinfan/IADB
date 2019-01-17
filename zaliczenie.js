function () {
   wyniki = []
   student = { "_id": ObjectId("5721ea0afe07eaece686a7d4"),
  	           "nr_albumu": "123456",
               "imie": "Zenon",
               "nazwisko": "Kowalski",
               "oceny": {
                   "DMI": [
                     4,
                     5
                   ]
               }
             }
   db.studenci.insert(student);
}



//Zadanie a
function addStudent(nr_albumu, imie, nazwisko) {
      student = { "_id": ObjectId("5721ea0afe07eaece686a7d5"),
  	           "nr_albumu": nr_albumu,
               "imie": imie,
               "nazwisko": nazwisko,
               "oceny": {
                   "DMI": [
                     4,
                     5
                   ]
               }
             }

   db.studencii.insert(student);
}
//Wywołanie:
addStudent(111111,"Michal","Gebka")

//Zadanie b
function removeStudent(index) {
   db.studenci.remove({ "nr_albumu" : index });
}
//Wywołanie
removeStudent(111111)


//Zadanie c
function addNote(index, subject, note) {
   var temp = "oceny." + subject;
   db.studenci.update({ "nr_albumu": index },{ $push : { [temp] : note }});
}
//Wywołanie
addNote("123456", "DMI", 10)

//Zadanie d. Tutaj zakładam, że ostatnia ocena to ta "na samym dole" w ocenach
function deleteLastAdded(index, subject) {
   var temp = "oceny." + subject;
   db.studenci.update({ "nr_albumu": index },{ $pop : { [temp] : 1 }});
}
//Wywołanie
deleteLastAdded("11111", "DMI")

//Zadanie e
function countMean(index, subject) {
   student = db.studenci.find({"nr_albumu" : index})
   suma = 0;
   oceny = student[0].oceny[subject];
   for (var i = 0; i < oceny.length; i++) {
	    suma = suma + oceny[i]
	 }
   srednia = suma/oceny.length
   return srednia

}
//Wywołanie
countMean("123456", "DMI")

//Zadanie f
function countMeanforAll(index, subject) {
   student = db.studenci.find({"nr_albumu" : index})
   suma = 0;
   var print = ""

   for (var key in student[0].oceny){
	   for (var i = 0; i < student[0].oceny[key].length; i++) {
	      przedmiot = student[0].oceny[key]
	      suma = suma + przedmiot[i]
	      srednia = suma/student[0].oceny[key].length
	   }
	
	   print = print + key+": " + srednia +" "
	   suma = 0
}

   return print

}
//Wywolanie
countMeanforAll("123456")









