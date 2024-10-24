import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import vertexShader from './shaders/vertexShader.glsl';
import fragmentShader from './shaders/fragmentShader.glsl'
// Vertex shader


// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Geometry and material
const geometry = new THREE.IcosahedronGeometry(1, 0);
const material = new THREE.ShaderMaterial({
  vertexShader: vertexShader,
  fragmentShader: fragmentShader
});
const icosahedron = new THREE.Mesh(geometry, material);
scene.add(icosahedron);

// Orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.z = 5;

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();

