import './App.css'

import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function main() {
    const clock = new THREE.Clock();
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

    const weakIntermolecularForcesBody = new THREE.CylinderGeometry(3, 3, 10);
    const wIFBMaterial = new THREE.MeshBasicMaterial({ color: 0xFFC0CB });
    const WeakIntermolecularForces = new THREE.Mesh(weakIntermolecularForcesBody, wIFBMaterial);
    WeakIntermolecularForces.rotateY(1.57);
    WeakIntermolecularForces.position.set(0, 10, 0);
    graphite.add(WeakIntermolecularForces);
    const WeakIntermolecularForces2 = WeakIntermolecularForces.clone();
    WeakIntermolecularForces2.position.set(0, 30, 0);
    graphite.add(WeakIntermolecularForces2);

    const WeakIntermolecularForces3 = WeakIntermolecularForces.clone();
    WeakIntermolecularForces3.position.set(40, 10, 80);
    graphite.add(WeakIntermolecularForces3);
    const WeakIntermolecularForces4 = WeakIntermolecularForces.clone();
    WeakIntermolecularForces4.position.set(40, 30, 80);
    graphite.add(WeakIntermolecularForces4);

    const WeakIntermolecularForces5 = WeakIntermolecularForces.clone();
    WeakIntermolecularForces5.position.set(40, 10, 0);
    graphite.add(WeakIntermolecularForces5);
    const WeakIntermolecularForces6 = WeakIntermolecularForces.clone();
    WeakIntermolecularForces6.position.set(40, 30, 0);
    graphite.add(WeakIntermolecularForces6);

    const WeakIntermolecularForces7 = WeakIntermolecularForces.clone();
    WeakIntermolecularForces7.position.set(80, 10, 40);
    graphite.add(WeakIntermolecularForces7);
    const WeakIntermolecularForces8 = WeakIntermolecularForces.clone();
    WeakIntermolecularForces8.position.set(80, 30, 40);
    graphite.add(WeakIntermolecularForces8);

    const WeakIntermolecularForces9 = WeakIntermolecularForces.clone();
    WeakIntermolecularForces9.position.set(-40, 10, 40);
    graphite.add(WeakIntermolecularForces9);
    const WeakIntermolecularForces10 = WeakIntermolecularForces.clone();
    WeakIntermolecularForces10.position.set(-40, 30, 40);
    graphite.add(WeakIntermolecularForces10);

    const WeakIntermolecularForces11 = WeakIntermolecularForces.clone();
    WeakIntermolecularForces11.position.set(0, 10, 80);
    graphite.add(WeakIntermolecularForces11);
    const WeakIntermolecularForces12 = WeakIntermolecularForces.clone();
    WeakIntermolecularForces12.position.set(0, 30, 80);
    graphite.add(WeakIntermolecularForces12);

    const electronBody = new THREE.SphereGeometry(10, 30, 30);
    const electronMaterial = new THREE.MeshBasicMaterial({ color: 0x00008B });
    const electron = new THREE.Mesh(electronBody, electronMaterial);
    electron.position.set(-20, 20, 30);
    scene.add(electron);

    const electron2 = electron.clone();
    electron2.position.set(-20, 20, 30);
    scene.add(electron2);
    const electron3 = electron.clone();
    electron3.position.set(-20, 20, 30);
    scene.add(electron3);
    const electron4 = electron.clone();
    electron4.position.set(-20, 20, 30);
    scene.add(electron4);
    const electron5 = electron.clone();
    electron5.position.set(-20, 20, 30);
    scene.add(electron5);
    const electron6 = electron.clone();
    electron6.position.set(-20, 20, 30);
    scene.add(electron6);
    const electron7 = electron.clone();
    electron7.position.set(-20, 20, 30);
    scene.add(electron7);
    const electron8 = electron.clone();
    electron8.position.set(-20, 20, 30);
    scene.add(electron8);
    const electron9 = electron.clone();
    electron9.position.set(-20, 20, 30);
    scene.add(electron9);

    const electron10 = electron.clone();
    electron10.position.set(-20, -20, 30);
    scene.add(electron10);
    const electron12 = electron.clone();
    electron12.position.set(-20, -20, 30);
    scene.add(electron12);
    const electron13 = electron.clone();
    electron13.position.set(-20, -20, 30);
    scene.add(electron13);
    const electron14 = electron.clone();
    electron14.position.set(-20, -20, 30);
    scene.add(electron14);
    const electron15 = electron.clone();
    electron15.position.set(-20, -20, 30);
    scene.add(electron15);
    const electron16 = electron.clone();
    electron16.position.set(-20, -20, 30);
    scene.add(electron16);
    const electron17 = electron.clone();
    electron17.position.set(-20, -20, 30);
    scene.add(electron17);
    const electron18 = electron.clone();
    electron18.position.set(-20, -20, 30);
    scene.add(electron18);
    const electron19 = electron.clone();
    electron19.position.set(-20, -20, 30);
    scene.add(electron19);

    const electron20 = electron.clone();
    electron20.position.set(-20, -20, 30);
    scene.add(electron20);
    const electron22 = electron.clone();
    electron22.position.set(-20, -20, 30);
    scene.add(electron22);
    const electron23 = electron.clone();
    electron23.position.set(-20, -20, 30);
    scene.add(electron23);
    const electron24 = electron.clone();
    electron24.position.set(-20, -20, 30);
    scene.add(electron24);
    const electron25 = electron.clone();
    electron25.position.set(-20, -20, 30);
    scene.add(electron25);
    const electron26 = electron.clone();
    electron26.position.set(-20, -20, 30);
    scene.add(electron26);
    const electron27 = electron.clone();
    electron27.position.set(-20, -20, 30);
    scene.add(electron27);
    const electron28 = electron.clone();
    electron28.position.set(-20, -20, 30);
    scene.add(electron28);
    const electron29 = electron.clone();
    electron29.position.set(-20, -20, 30);
    scene.add(electron29);

    const electron30 = electron.clone();
    electron30.position.set(-20, -20, 30);
    scene.add(electron30);
    const electron32 = electron.clone();
    electron32.position.set(-20, -20, 30);
    scene.add(electron32);
    const electron33 = electron.clone();
    electron33.position.set(-20, -20, 30);
    scene.add(electron33);
    const electron34 = electron.clone();
    electron34.position.set(-20, -20, 30);
    scene.add(electron34);
    const electron35 = electron.clone();
    electron35.position.set(-20, -20, 30);
    scene.add(electron35);
    const electron36 = electron.clone();
    electron36.position.set(-20, -20, 30);
    scene.add(electron36);
    const electron37 = electron.clone();
    electron37.position.set(-20, -20, 30);
    scene.add(electron37);
    const electron38 = electron.clone();
    electron38.position.set(-20, -20, 30);
    scene.add(electron38);
    const electron39 = electron.clone();
    electron39.position.set(-20, -20, 30);
    scene.add(electron39);

    const electron11 = electron.clone();
    electron11.position.set(20, 20, 80);
    scene.add(electron11);

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
    siliconCarbon.position.set(0, 30, -800);
    const siliconCarbon2 = carbon.clone();
    siliconCarbon2.position.set(0, 0, -830);
    sC.add(siliconCarbon2);
    const siliconCarbon3 = carbon.clone();
    siliconCarbon3.position.set(0, 0, -770);
    const siliconCarbon4 = carbon.clone();
    siliconCarbon4.position.set(30, 0, -800);
    const intermolecularForces3 = intermolecularForces11.clone();
    const intermolecularForces4Body = new THREE.CylinderGeometry(3, 3, 20);
    const intermolecularForces4 = new THREE.Mesh(intermolecularForces4Body, intermolecularMaterial);
    const intermolecularForces5 = intermolecularForces4.clone();
    intermolecularForces3.position.set(0, 0, -800);
    intermolecularForces4.position.set(0, 20, -800);
    intermolecularForces5.position.set(20, 0, -800);
    intermolecularForces5.rotation.set(0, 0, 1.57);
    intermolecularForces3.rotation.set(0, 1.57, 1.57);
    intermolecularForces4.rotation.set(0, 1.57, 0);
    sC.add(intermolecularForces4);
    sC.add(intermolecularForces3);
    sC.add(intermolecularForces5);
    sC.add(siliconCarbon3);
    sC.add(siliconCarbon4);
    sC.add(siliconCarbon);
    sC.position.set(0, 0, 60)
    scene.add(sC);

    const sC1 = sC.clone();
    sC1.position.set(0, -30, 90);
    scene.add(sC1);
    const sC2 = sC.clone();
    sC2.position.set(30, -60, 30);
    scene.add(sC2);
    const sC3 = sC.clone();
    sC3.position.set(0, -30, 30);
    scene.add(sC3);
    const sC4 = sC.clone();
    sC4.position.set(30, -60, 90);
    scene.add(sC4);
    const sC5 = sC.clone();

    sC5.position.set(0, -60, 120);
    scene.add(sC5);
    const sC6 = sC.clone();
    sC6.position.set(0, -60, 0);
    scene.add(sC6);
    const sC7 = sC.clone();
    sC7.position.set(0, -60, 60);
    sC7.rotation.set(0, 0, -3.14);
    scene.add(sC7);
    const sC8 = sC.clone();
    sC8.position.set(-60, -60, 60);
    scene.add(sC8);
    const sC9 = sC.clone();
    sC9.position.set(60, -60, 60);
    scene.add(sC9);
    const sC10 = sC.clone();
    sC10.position.set(30, -30, 60);
    scene.add(sC10);


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
        firstPara.style.display = 'none';
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
        controls.target = new THREE.Vector3(0, 0, -700);
        controls.enableZoom = true;
        negativeLooking = true;
        thirdPara.style.display = 'block';
    })

    function animate() {
        requestAnimationFrame(animate);
        const elapsed = clock.getElapsedTime();

        if (positiveLooking == true) {
            electron.position.set(Math.cos(elapsed) * 150, 20, Math.cos(elapsed) * 400);
            electron2.position.set(Math.cos(elapsed) * 150 + 40, 20, Math.cos(elapsed) * 400);
            electron3.position.set(Math.cos(elapsed) * 150 + 80, 20, Math.cos(elapsed) * 400);
            electron4.position.set(Math.cos(elapsed) * 150 + 120, 20, Math.cos(elapsed) * 400);
            electron5.position.set(Math.cos(elapsed) * 150 + 160, 20, Math.cos(elapsed) * 400);
            electron6.position.set(Math.cos(elapsed) * 150 + 200, 20, Math.cos(elapsed) * 400);
            electron7.position.set(Math.cos(elapsed) * 150 + 240, 20, Math.cos(elapsed) * 400);
            electron8.position.set(Math.cos(elapsed) * 150 + 280, 20, Math.cos(elapsed) * 400);
            electron9.position.set(Math.cos(elapsed) * 150 + 320, 20, Math.cos(elapsed) * 400);
            electron10.position.set(Math.cos(elapsed) * 150 - 40, 20, Math.cos(elapsed) * 400);
            electron12.position.set(Math.cos(elapsed) * 150 - 80, 20, Math.cos(elapsed) * 400);
            electron13.position.set(Math.cos(elapsed) * 150 - 120, 20, Math.cos(elapsed) * 400);
            electron14.position.set(Math.cos(elapsed) * 150 - 160, 20, Math.cos(elapsed) * 400);
            electron15.position.set(Math.cos(elapsed) * 150 - 200, 20, Math.cos(elapsed) * 400);
            electron16.position.set(Math.cos(elapsed) * 150 - 240, 20, Math.cos(elapsed) * 400);
            electron17.position.set(Math.cos(elapsed) * 150 - 280, 20, Math.cos(elapsed) * 400);
            electron18.position.set(Math.cos(elapsed) * 150 - 320, 20, Math.cos(elapsed) * 400);
            electron19.position.set(Math.cos(elapsed) * 150 - 240, 20, Math.cos(elapsed) * 400);
            electron20.position.set(Math.cos(elapsed) * 150, -20, Math.cos(elapsed) * -400);
            electron22.position.set(Math.cos(elapsed) * 150 + 40, -20, Math.cos(elapsed) * -400);
            electron23.position.set(Math.cos(elapsed) * 150 + 80, -20, Math.cos(elapsed) * -400);
            electron24.position.set(Math.cos(elapsed) * 150 + 120, -20, Math.cos(elapsed) * -400);
            electron25.position.set(Math.cos(elapsed) * 150 + 160, -20, Math.cos(elapsed) * -400);
            electron26.position.set(Math.cos(elapsed) * 150 + 200, -20, Math.cos(elapsed) * -400);
            electron27.position.set(Math.cos(elapsed) * 150 + 240, -20, Math.cos(elapsed) * -400);
            electron28.position.set(Math.cos(elapsed) * 150 + 280, -20, Math.cos(elapsed) * -400);
            electron29.position.set(Math.cos(elapsed) * 150 + 320, -20, Math.cos(elapsed) * -400);
            electron30.position.set(Math.cos(elapsed) * 150 - 40, -20, Math.cos(elapsed) * -400);
            electron32.position.set(Math.cos(elapsed) * 150 - 80, -20, Math.cos(elapsed) * -400);
            electron33.position.set(Math.cos(elapsed) * 150 - 120, -20, Math.cos(elapsed) * -400);
            electron34.position.set(Math.cos(elapsed) * 150 - 160, -20, Math.cos(elapsed) * -400);
            electron35.position.set(Math.cos(elapsed) * 150 - 200, -20, Math.cos(elapsed) * -400);
            electron36.position.set(Math.cos(elapsed) * 150 - 240, -20, Math.cos(elapsed) * -400);
            electron37.position.set(Math.cos(elapsed) * 150 - 280, -20, Math.cos(elapsed) * -400);
            electron38.position.set(Math.cos(elapsed) * 150 - 320, -20, Math.cos(elapsed) * -400);
            electron39.position.set(Math.cos(elapsed) * 150 - 240, -20, Math.cos(elapsed) * -400);
        } else {
            electron.position.set(0, 0, 0);
            electron2.position.set(0, 0, 0);
            electron3.position.set(0, 0, 0);
            electron4.position.set(0, 0, 0);
            electron5.position.set(0, 0, 0);
            electron6.position.set(0, 0, 0);
            electron7.position.set(0, 0, 0);
            electron8.position.set(0, 0, 0);
            electron9.position.set(0, 0, 0);
            electron10.position.set(0, 0, 0);
            electron12.position.set(0, 0, 0);
            electron13.position.set(0, 0, 0);
            electron14.position.set(0, 0, 0);
            electron15.position.set(0, 0, 0);
            electron16.position.set(0, 0, 0);
            electron17.position.set(0, 0, 0);
            electron18.position.set(0, 0, 0);
            electron19.position.set(0, 0, 0);
            electron20.position.set(0, 0, 0);
            electron22.position.set(0, 0, 0);
            electron23.position.set(0, 0, 0);
            electron24.position.set(0, 0, 0);
            electron25.position.set(0, 0, 0);
            electron26.position.set(0, 0, 0);
            electron27.position.set(0, 0, 0);
            electron28.position.set(0, 0, 0);
            electron29.position.set(0, 0, 0);
            electron30.position.set(0, 0, 0);
            electron32.position.set(0, 0, 0);
            electron33.position.set(0, 0, 0);
            electron34.position.set(0, 0, 0);
            electron35.position.set(0, 0, 0);
            electron36.position.set(0, 0, 0);
            electron37.position.set(0, 0, 0);
            electron38.position.set(0, 0, 0);
            electron39.position.set(0, 0, 0);
        }
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