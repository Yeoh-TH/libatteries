import './App.css'

import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

function main(){
        const firstPara = document.getElementById("firstPara");
        const secondPara = document.getElementById('secondPara');
        const dotCross = document.getElementById('dotCross');
        const interfaces = document.getElementById('interface');
        const credits = document.getElementById('finalPicCredits');

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer(
            {
                canvas: document.getElementById("bg"),
            }
        )
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        camera.position.set(0,100,100)

        const LIOH = new THREE.Group();
        const lithiumBody = new THREE.SphereGeometry(3, 30, 30);
        const lithiumMaterial = new THREE.MeshStandardMaterial({color: 0x33FF46});
        const lithium = new THREE.Mesh(lithiumBody, lithiumMaterial);
        lithium.position.setX(6);
        LIOH.add(lithium);
        const oxygenBody = new THREE.SphereGeometry(6, 30, 30);
        const oxygenMaterial = new THREE.MeshStandardMaterial({color: 0x3352FF});
        const oxygen = new THREE.Mesh(oxygenBody, oxygenMaterial);
        oxygen.position.setX(-1);
        LIOH.add(oxygen);

        const hydrogenBody = new THREE.SphereGeometry(3, 30, 30);
        const hydrogenMaterial = new THREE.MeshStandardMaterial({color: 0x33B8FF});
        const hydrogen = new THREE.Mesh(hydrogenBody, hydrogenMaterial);
        hydrogen.position.setX(-9);
        LIOH.add(hydrogen);
        scene.add(LIOH);

        const LIOH2 = LIOH.clone();
        LIOH2.position.setX(-21);
        scene.add(LIOH2);

        const LIOH3 = LIOH.clone();
        LIOH3.position.setX(21);
        scene.add(LIOH3);

        const LIOH4 = LIOH.clone();
        LIOH4.position.set(0,0,10);
        scene.add(LIOH4);

        const LIOH5 = LIOH.clone();
        LIOH5.position.set(21,0,10);
        scene.add(LIOH5);

        const LIOH6 = LIOH.clone();
        LIOH6.position.set(-21, 0, 10);
        scene.add(LIOH6);

        const LIOH7 = LIOH.clone();
        LIOH7.position.set(0, 0, -10);
        scene.add(LIOH7);

        const LIOH8 = LIOH.clone();
        LIOH8.position.set(21, 0, -10);
        scene.add(LIOH8);

        const LIOH9 = LIOH.clone();
        LIOH9.position.set(-21, 0, -10);
        scene.add(LIOH9);

        const LIOH10 = LIOH.clone();
        LIOH10.position.setY(10);
        const LIOH11 = LIOH.clone();
        LIOH11.position.set(-21 ,10, 0);
        const LIOH12 = LIOH.clone();
        LIOH12.position.set(21 ,10, 0);
        const LIOH13 = LIOH.clone();
        LIOH13.position.set(0, 10, 10);        
        const LIOH14 = LIOH.clone();
        LIOH14.position.set(-21 ,10, 10);
        const LIOH15 = LIOH.clone();
        LIOH15.position.set(21 ,10, 10);
        const LIOH16 = LIOH.clone();
        LIOH16.position.set(0, 10, -10);    
        const LIOH17 = LIOH.clone();
        LIOH17.position.set(-21 ,10, -10);
        const LIOH18 = LIOH.clone();
        LIOH18.position.set(21 ,10, -10);

    
            scene.add(LIOH10)
            scene.add(LIOH11)
            scene.add(LIOH12)
            scene.add(LIOH13)
            scene.add(LIOH14)
            scene.add(LIOH15)
            scene.add(LIOH16)
            scene.add(LIOH17)
            scene.add(LIOH18)

            const LIOH101 = LIOH.clone();
            LIOH101.position.set(0, -10, 0);
            const LIOH111 = LIOH.clone();
            LIOH111.position.set(-21 ,-10, 0);
            const LIOH121 = LIOH.clone();
            LIOH121.position.set(21 ,-10, 0);
            const LIOH131 = LIOH.clone();
            LIOH131.position.set(0, -10, 10);        
            const LIOH141 = LIOH.clone();
            LIOH141.position.set(-21 ,-10, 10);
            const LIOH151 = LIOH.clone();
            LIOH151.position.set(21 ,-10, 10);
            const LIOH161 = LIOH.clone();
            LIOH161.position.set(0, -10, -10);    
            const LIOH171 = LIOH.clone();
            LIOH171.position.set(-21 ,-10, -10);
            const LIOH181 = LIOH.clone();
            LIOH181.position.set(21 ,-10, -10);
                scene.add(LIOH101)
                scene.add(LIOH111)
                scene.add(LIOH121)
                scene.add(LIOH131)
                scene.add(LIOH141)
                scene.add(LIOH151)
                scene.add(LIOH161)
                scene.add(LIOH171)
                scene.add(LIOH181)
        
        const batteryBody = new THREE.BoxGeometry(100, 40, 80);
        const batterMaterial = new THREE.MeshBasicMaterial({color: 0x808080});
        const battery = new THREE.Mesh(batteryBody,batterMaterial);

        scene.add(battery);
        
        const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x808080, 1);
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        // const pointLightIndi = new THREE.PointLightHelper(pointLight);
        ambientLight.position.set(60, 5, 5)
        hemisphereLight.rotateX(10)
        scene.add(hemisphereLight, ambientLight)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enablePan = false;
        controls.enableDamping = true;

        function animate(){
            requestAnimationFrame(animate);
            renderer.render(scene,camera);
            controls.update();
        }
        animate();

        controls.addEventListener('change', () => {
            const distance = controls.getDistance();
            console.log(distance);
            if (distance < 141) {
                firstPara.style.display = 'none';
            } else {
                firstPara.style.display = 'block';
            }
            
            if (distance < 40 && distance > 6){
                secondPara.style.display = 'block';
            }else{
                secondPara.style.display = 'none';
            }

            if(distance<6){
                interfaces.style.display = 'none';
                dotCross.style.display= 'block';
                credits.style.display = 'block'
            }else{
                interfaces.style.display = 'block';
                dotCross.style.display= 'none';
                credits.style.display = 'none';
            }
            
        });
    }

export default main()