import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1.5, 6);

if (document.getElementById('three-canvas')) {
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-canvas'), alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const light = new THREE.DirectionalLight(0xffffff, 5);
  light.position.set(0, 0, 3);
  scene.add(light);

  const loader = new GLTFLoader();

  let headBone = null;
  let eyeBones = [];
  let model = null;
  let initialModelPosition = new THREE.Vector3();

  function recenterModel(yOffset = 1.5) {
    if (!model) return;
    model.position.copy(initialModelPosition);

    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());

    model.position.sub(center);
    model.position.y += yOffset;
  }

  function updateModelScale() {
    if (!model) return;
    if (window.innerWidth <= 768) {
      model.scale.set(5, 5, 5);
    } else {
      model.scale.set(7, 7, 7);
    }
    recenterModel(1.5);
  }

  loader.load('/wp-content/themes/headgroup/assets/models/head.glb', (gltf) => {
    model = gltf.scene;

    initialModelPosition.copy(model.position);

    scene.add(model);

    updateModelScale();

    model.traverse((obj) => {
      if (obj.isBone) {
        const name = obj.name.toLowerCase();
        if (name.includes('head')) headBone = obj;
        if (name.includes('eye')) eyeBones.push(obj);
      }
    });
  });

  document.addEventListener('mousemove', (event) => {
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    const mouseY = 1 - (event.clientY / window.innerHeight) * 2;

    if (headBone) {
      headBone.rotation.y = mouseX * 0.4;
      headBone.rotation.x = mouseY * -0.2;
    }

    eyeBones.forEach((eye) => {
      const nm = eye.name.toLowerCase();
      if (nm === 'l_eye' || nm === 'r_eye') {
        eye.rotation.y = mouseX * 10;
        let xRotation = mouseY * -2.5;
        xRotation = Math.max(1.5, Math.min(1.7, xRotation));
        eye.rotation.x = xRotation;
      }
    });
  });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    updateModelScale();
  });

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
}
