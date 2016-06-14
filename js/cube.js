/*
Type: JavaScript
Description: To view and rotate the cube
*/


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 2, 2, 2, 5, 5, 1);
var material = new THREE.MeshBasicMaterial( {color: 0xEE0000, wireframe: true, wireframeLinewidth: 3} );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 4;

//renderer.render(scene,camera);

function animate() {
	requestAnimationFrame(animate);
	cube.rotation.x += 0.01;
	renderer.render(scene,camera);
}

