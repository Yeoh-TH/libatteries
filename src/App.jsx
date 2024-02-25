import './App.css'

import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function main() {
    const firstPara = document.getElementById("firstPara");
    const secondPara = document.getElementById('secondPara');
    const thirdPara = document.getElementById("thirdPara");
    const dotCross = document.getElementById('dotCross');
    const interfaces = document.getElementById('interface');
    const credits = document.getElementById('finalPicCredits');
    const positiveButton = document.getElementById('positive');
    const negativeButton = document.getElementById('negative');

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer(
        {
            canvas: document.getElementById("bg"),
        }
    )
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.position.set(800, 0, 0);
    camera.rotateZ(1.57);

    // const LIOH = new THREE.Group();
    // const lithiumBody = new THREE.SphereGeometry(3, 30, 30);
    // const lithiumMaterial = new THREE.MeshStandardMaterial({color: 0x33FF46});
    // const lithium = new THREE.Mesh(lithiumBody, lithiumMaterial);
    // lithium.position.setX(6);
    // LIOH.add(lithium);
    // const oxygenBody = new THREE.SphereGeometry(6, 30, 30);
    // const oxygenMaterial = new THREE.MeshStandardMaterial({color: 0x3352FF});
    // const oxygen = new THREE.Mesh(oxygenBody, oxygenMaterial);
    // oxygen.position.setX(-1);
    // LIOH.add(oxygen);

    // const hydrogenBody = new THREE.SphereGeometry(3, 30, 30);
    // const hydrogenMaterial = new THREE.MeshStandardMaterial({color: 0x33B8FF});
    // const hydrogen = new THREE.Mesh(hydrogenBody, hydrogenMaterial);
    // hydrogen.position.setX(-9);
    // LIOH.add(hydrogen);
    // scene.add(LIOH);

    const graphite = new THREE.Group();
    const sC = new THREE.Group();
    const siliconBody = new THREE.SphereGeometry(12, 30, 30);
    const siliconMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
    const silicon = new THREE.Mesh(siliconBody, siliconMaterial);
    silicon.position.set(0, 0, -800);
    sC.add(silicon);
    const carbonBody = new THREE.SphereGeometry(6, 30, 30);
    const carbonMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
    const carbon = new THREE.Mesh(carbonBody, carbonMaterial);
    const intermolecularBody = new THREE.CylinderGeometry(3, 3, 60);
    const intermolecularBody2 = new THREE.CylinderGeometry(3, 3, 40);
    const intermolecularMaterial = new THREE.MeshBasicMaterial({ color: 0xC0C0C0 });
    const intermolecularForces = new THREE.Mesh(intermolecularBody, intermolecularMaterial);
    const intermolecularForces2 = new THREE.Mesh(intermolecularBody2, intermolecularMaterial);
    intermolecularForces2.rotation.set(1.57, 0, 1.57);
    intermolecularForces2.position.set(20, 0, 0);
    graphite.add(intermolecularForces2);
    graphite.add(carbon);
    const carbon2 = carbon.clone();
    carbon2.position.set(-40, 0, 40);
    graphite.add(carbon2);
    const carbon3 = carbon.clone();
    carbon3.position.set(0, 0, 80);
    graphite.add(carbon3);
    intermolecularForces.rotation.set(0, 0.79, 1.571);
    intermolecularForces.position.set(-20, 0, 20);
    graphite.add(intermolecularForces);
    const intermolecularForces11 = intermolecularForces.clone();
    intermolecularForces11.rotation.set(0, -0.79, 1.571);
    intermolecularForces11.position.set(60, 0, 20);
    graphite.add(intermolecularForces11);
    const intermolecularForces22 = intermolecularForces2.clone();
    intermolecularForces22.position.set(20, 0, 80);
    graphite.add(intermolecularForces22);
    const intermolecularForces111 = intermolecularForces11.clone();
    intermolecularForces111.position.set(-20, 0, 60);
    graphite.add(intermolecularForces111);
    const intermolecularForces1111 = intermolecularForces.clone();
    intermolecularForces1111.position.set(60, 0, 60);
    graphite.add(intermolecularForces1111);


    const carbon4 = carbon.clone();
    carbon4.position.set(40, 0, 80);
    graphite.add(carbon4);
    const carbon5 = carbon.clone();
    carbon5.position.set(40, 0, 0);
    graphite.add(carbon5);
    const carbon6 = carbon.clone();
    carbon6.position.set(80, 0, 40);
    graphite.add(carbon6);
    scene.add(graphite);

    const graphite2 = graphite.clone();
    graphite2.position.setY(40);
    scene.add(graphite2);
    const graphite3 = graphite.clone();
    graphite3.position.setY(-40);
    scene.add(graphite3);

    const graphite4 = graphite.clone();
    graphite4.position.set(80, -40, 40);
    scene.add(graphite4);
    const graphite5 = graphite.clone();
    graphite5.position.set(80, 0, 40);
    scene.add(graphite5);
    const graphite6 = graphite.clone();
    graphite6.position.set(80, 40, 40);
    scene.add(graphite6);

    const graphite7 = graphite.clone();
    graphite7.position.set(-80, -40, 40);
    scene.add(graphite7);
    const graphite8 = graphite.clone();
    graphite8.position.set(-80, 0, 40);
    scene.add(graphite8);
    const graphite9 = graphite.clone();
    graphite9.position.set(-80, 40, 40);
    scene.add(graphite9);

    const graphite10 = graphite.clone();
    graphite10.position.set(0, -40, 80);
    scene.add(graphite10);
    const graphite11 = graphite.clone();
    graphite11.position.set(0, 0, 80);
    scene.add(graphite11);
    const graphite12 = graphite.clone();
    graphite12.position.set(0, 40, 80);
    scene.add(graphite12);

    const siliconCarbon = carbon.clone();
    siliconCarbon.position.set(0, 40, -800);
    const siliconCarbon2 = carbon.clone();
    siliconCarbon2.position.set(0, 0, -840);
    sC.add(siliconCarbon2);
    const siliconCarbon3 = carbon.clone();
    siliconCarbon3.position.set(0, 0, -760);
    sC.add(siliconCarbon3);
    sC.add(siliconCarbon);
    scene.add(sC);
    // const batteryBody = new THREE.BoxGeometry(100, 40, 80);
    // const batterMaterial = new THREE.MeshBasicMaterial({color: 0x808080});
    // const battery = new THREE.Mesh(batteryBody,batterMaterial);

    // scene.add(battery);

    const positivebody = new THREE.CylinderGeometry(201, 201, 200);
    const positiveMaterial = new THREE.MeshStandardMaterial({ color: 0xFF7F32 });
    const positiveTerm = new THREE.Mesh(positivebody, positiveMaterial);
    positiveTerm.rotateX(1.57);
    positiveTerm.position.set(70, 0, 70);
    scene.add(positiveTerm);

    const batterybody = new THREE.CylinderGeometry(350, 350, 700);
    const batteryMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
    const battery = new THREE.Mesh(batterybody, batteryMaterial);
    battery.rotateX(1.57);
    battery.position.set(70, 0, -600);
    scene.add(battery);

    const termPositiveBody = new THREE.CylinderGeometry(351, 351, 300, 64, 10);
    const termPositiveMat = new THREE.MeshStandardMaterial({ color: 0xCD7F32 });
    const termPositive = new THREE.Mesh(termPositiveBody, termPositiveMat);
    termPositive.rotateX(1.57);
    termPositive.position.set(70, 0, -150);
    scene.add(termPositive)

    const hemisphereLight = new THREE.HemisphereLight(0x87CEEB, 0xffffff, 2);
    // const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    // ambientLight.position.set(60, 5, 5)
    hemisphereLight.position.set(70, 0, -600);
    scene.add(hemisphereLight);

    renderer.setClearColor(0x87CEEB, 1);

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.target = new THREE.Vector3(70, 40, -600);
    const pointer = new THREE.Vector2();

    function onPointerMove(event) {

        // calculate pointer position in normalized device coordinates
        // (-1 to +1) for both components

        pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
        pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;
        console.log(pointer.x, pointer.y);
    }

    let positiveLooking = false;
    positiveButton.addEventListener('click', () => {
        camera.position.set(10, 0, 100);
        controls.target = new THREE.Vector3(20, 0, 80);
        controls.enableZoom = true;
        positiveLooking = true;
        secondPara.style.display = 'block';
    })
    let negativeLooking = false;
    negativeButton.addEventListener('click', () => {
        firstPara.style.display = 'none';
        camera.position.set(300, 0, -700);
        controls.target = new THREE.Vector3(100, 0, -700);
        controls.enableZoom = true;
        negativeLooking = true;
        thirdPara.style.display = 'block';
    })

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        controls.update();
    }
    animate();


    controls.addEventListener('change', () => {
        const distance = controls.getDistance();
        console.log(distance);
        if (distance < 141) {
            firstPara.style.display = 'none';
        }
        if (distance > 300 && positiveLooking == true) {
            camera.position.set(1000, 0, 10);
            controls.enableZoom = false;
            positiveLooking = false;
            controls.target = new THREE.Vector3(70, 0, -400);
            secondPara.style.display = 'none';
            firstPara.style.display = 'block';
        }

        if (distance > 330 && negativeLooking == true) {
            camera.position.set(1000, 0, 10);
            controls.enableZoom = false;
            negativeLooking = false;
            controls.target = new THREE.Vector3(70, 0, -400);
            thirdPara.style.display = 'none';
            firstPara.style.display = 'block';
        }

        if (distance < 6) {
            interfaces.style.display = 'none';
            dotCross.style.display = 'block';
            credits.style.display = 'block'
        } else {
            interfaces.style.display = 'block';
            dotCross.style.display = 'none';
            credits.style.display = 'none';
        }

    });
}

export default main()