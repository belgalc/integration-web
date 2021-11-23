let person = {
  etudiant: "foulen ben foulen",
  getEtudiant: function () {
    console.log(this.etudiant);
  }
};


function a (){
    person.getEtudiant()
}
setTimeout (a,1000);

console.log("ssss")
