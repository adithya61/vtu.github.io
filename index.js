function calc() {
    let sub1 = parseInt(document.getElementById("subject1").value);
    let sub2 = parseInt(document.getElementById("subject2").value);
    let sub3 = parseInt(document.getElementById("subject3").value);
    let sub4 = parseInt(document.getElementById("subject4").value);
    let sub5 = parseInt(document.getElementById("subject5").value);
    let sub6 = parseInt(document.getElementById("subject6").value);
    let sub7 = parseInt(document.getElementById("subject7").value);
    let sub8 = parseInt(document.getElementById("subject8").value);

    var avgmin = Math.ceil((((sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8) * 0.85) / 8) + 45)
    var avgmax = Math.ceil((((sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8) * 0.85) / 8) + 50)

    console.log(avgmin, avgmax);

    document.getElementById('bdy').innerHTML = '<div id="marks" class="text-center font-weight-bold pt-5 h3" >your marks for each subject will be in the range:min = <span id="min"> avgmin </span> to max = <span id="max">avgmax</span></div>'

    document.getElementById('min').innerHTML = avgmin
    document.getElementById('max').innerHTML = avgmax
}
