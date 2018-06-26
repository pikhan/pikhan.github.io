function ResetCube(){
      document.getElementById("cfour").style.animation= 'rotate 20s infinite linear';
}

function StopCube(){
      document.getElementById("cfour").style.animation= 'rotate 0s infinite linear';
}

function Essay(){

StopCube();  
document.getElementById("fro").style.transform= 'rotateX(270deg) translateY(100px)';
  document.getElementById("fro").style.transformOrigin= 'bottom center'; 

document.getElementById("bott").style.transform= 'translateZ(100px)';

}