var grades = {
    'O': 10,
    'A+': 9,
    'A': 8,
    'B+': 7,
    'B': 6,
    'C': 5,
    'D': 4,
    'E': 0,
    'F': 0,
    'G': 0
};
const calcy = () => {
    let sub1 = document.getElementById("sub1").value;
    let sub2 = document.getElementById("sub2").value;
    let sub3 = document.getElementById("sub3").value;
    let sub4 = document.getElementById("sub4").value;
    let sub5 = document.getElementById("sub5").value;


    var s1 = grades[sub1];
    var s2 = grades[sub2];
    var s3 = grades[sub3];
    var s4 = grades[sub4];
    var s5 = grades[sub5];
    let cr1 = document.getElementById("cr1").value;
    let cr2 = document.getElementById("cr2").value;
    let cr3 = document.getElementById("cr3").value;
    let cr4 = document.getElementById("cr4").value;
    let cr5 = document.getElementById("cr5").value;


    let total = s1 * parseInt(cr1) + s2 * parseInt(cr2) + s3 * parseInt(cr3) + s4 * parseInt(cr4) + s5 * parseInt(cr5);
    let crt = parseInt(cr1) + parseInt(cr2) + parseInt(cr3) + parseInt(cr4) + parseInt(cr5);
    let cgpa = (total / crt).toFixed(2);
    console.log(cgpa);
    document.getElementById('cgpa').innerHTML = ` Your CGPA is  ${cgpa} .`

}