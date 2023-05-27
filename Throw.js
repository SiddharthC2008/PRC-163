var camera = document.querySelector("#camera").object3D;
//get the camera direction as Three.js Vector
var direction
new THREE.Vector3();
camera.getWorldDirection (direction);
//set the velocity and it's direction
ball.setAttribute("velocity", direction.multiplyScalar(-10)); 

//add the collide event listener to the bullet 
ball.addEventListener("collide", this.removeBall);

removeBall: function(e) {
//bullet element
var element.detail.target.el;
//element which is hit
var elementHite.detail.body.el;
if (elementHit.id.includes ("pin")) {
//impulse and point vector
var impulse = new CANNON. Vec3(0,1,-15); var worldPoint = new CANNON. Vec3().copy(
);
elementHit.getAttribute("position")
elementHit.body.apply Force (impulse, worldPoint);
//remove event listener
element.removeEventListener("collide", this.removeBall);
//remove the bullets from the scene
var scene = document.querySelector("#scene"); scene.removeChild(element);
}
}