var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start() {

recognition.start();

}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
   if (content=="take my selfie") {
    speak();
   }

}
function speak() {
    var synth=window.speechSynthesis;
    speak_data="taking Your selfie in 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    take_snapshot();
    setTimeout(function() {
        take_snapshot();
        save();
    }, 5000);
    
}
Webcam.set({
    width:360,
    hieght:250,
    image_format:'png', 
    png_quality:90
});
cam=document.getElementById("camera");

function take_snapshot() {
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="selfie_image" src= "'+ data_uri+'"/>'

});

}
function save (){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}