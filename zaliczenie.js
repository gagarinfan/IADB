//Dodanie kilku studentów
function () {
wyniki =[]
   student1 = { "_id": ObjectId("5721ea0afe07eaece686a7a1"),
  	           "nr_albumu": "222222",
               "imie": "Miroslaw",
               "nazwisko": "Kowalski",
               "oceny": {
                   "DMI": [
                     4,
                     5
                   ],
                   "IADB": [
                     3,
                     4,
                     5
                   ]
               }
             }
   student2 = { "_id": ObjectId("5721ea0afe07eaece686a7a2"),
  	           "nr_albumu": "333333",
               "imie": "Jan",
               "nazwisko": "Nowak",
               "oceny": {
                   "DMI": [
                     4,
                     5
                   ],
                   "IADB": [
                     3,
                     4,
                     5
                   ]
               }
             }
student3 = { "_id": ObjectId("5721ea0afe07eaece686a7a3"),
            "nr_albumu": "444444",
            "imie": "Mieczyslaw",
            "nazwisko": "Dzik",
            "oceny": {
                "DMI": [
                  4,
                  5
                ],
                "IADB": [
                  3,
                  4,
                  5
                ]
              }
            }

wyniki.push(student1,student2,student3)
db.studenci.insert(student1, student2, student3);
   
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

   db.studenci.insert(student);
}
//Wywołanie:
addStudent(555555,"Michal","Gebka")

//Zadanie b
function removeStudent(index) {
   db.studenci.remove({ "nr_albumu" : index });
}
//Wywołanie
removeStudent(555555)


//Zadanie c
function addNote(index, subject, note) {
   var temp = "oceny." + subject;
   db.studenci.update({ "nr_albumu": index },{ $push : { [temp] : note }});
}
//Wywołanie
addNote("222222", "DMI", 6)

//Zadanie d. Tutaj zakładam, że ostatnia ocena to ta "na samym dole" w ocenach
function deleteLastAdded(index, subject) {
   var temp = "oceny." + subject;
   db.studenci.update({ "nr_albumu": index },{ $pop : { [temp] : 1 }});
}
//Wywołanie
deleteLastAdded("222222", "DMI")

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
countMean("333333", "DMI")

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
countMeanforAll("444444")
