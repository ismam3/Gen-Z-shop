import * as THREE from "./three/build/three.module.js";
import {OrbitControls} from "./three/examples/jsm/controls/OrbitControls.js"
import {GLTFLoader} from "./three/examples/jsm/loaders/GLTFLoader.js"

const renderer = new THREE.WebGLRenderer({alpha: true });


var width = document.getElementById("product3d").clientWidth;
var height = document.getElementById("product3d").clientHeight;

console.log(width, height)

renderer.setSize(width, height);
renderer.setClearColor(0xfffff,0);

// document.body.appendChild(renderer.domElement);
document.getElementById("product3d").appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    width/height,
    0.1,
    1000
);

const control = new OrbitControls(camera, renderer.domElement);

camera.position.set(0, 2, 5);

control.update();


const loader = new GLTFLoader();

loader.load( '../assets/3d/mason-jar.glb', function ( gltf ) {
    var model = gltf.scene;
    gltf.scene.rotation.y = 90;
    gltf.scene.scale.y = 1.6;
    gltf.scene.scale.z = 1.6;
    gltf.scene.scale.x = 1.6;
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

const pointLight1 = new THREE.PointLight( 0xffffff, 1, 100 );
pointLight1.position.set( 0, 0, 3 );
scene.add( pointLight1 );
const pointLight2 = new THREE.PointLight( 0xffffff, 1, 100 );
pointLight2.position.set( 0, 0, -3 );
scene.add( pointLight2 );
const pointLight3 = new THREE.PointLight( 0xffffff, 1, 100 );
pointLight3.position.set( 0, 3, 0 );
scene.add( pointLight3 );


function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();