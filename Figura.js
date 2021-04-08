const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );        
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
var stats;
stats = new Stats();
stats.setMode(2); // 0: fps, 1: ms, 2memory
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "100px";
stats.domElement.style.top = "10px";
document.getElementById("myStats").appendChild(stats.domElement);
var controls;
controls = new THREE.OrbitControls(camera, renderer.domElement);

//Cabeza

function Cabeza(){
    const gorro = new THREE.Mesh( new THREE.BoxGeometry(1,0.8,0.8), new THREE.MeshBasicMaterial( { color: 0xffffff } ) );
    const gorro1 = new THREE.Mesh( new THREE.BoxGeometry(0.2,0.2,0.8), new THREE.MeshBasicMaterial( { color: 0xffffff } ) );
    const gorro2 = new THREE.Mesh( new THREE.BoxGeometry(0.2,0.2,0.8), new THREE.MeshBasicMaterial( { color: 0xffffff } ) );
    const cara = new THREE.Mesh( new THREE.CircleGeometry( 0.3, 40 ,1), new THREE.MeshBasicMaterial( { color: 0xFBE2DC } ) );
    gorro.position.y = 3;
    gorro1.position.y = 3.5;
    gorro1.position.x = -0.4;
    gorro2.position.y = 3.5;
    gorro2.position.x = 0.4;
    cara.position.y = 3;
    cara.position.z = 0.41;
    scene.add(gorro, gorro1, gorro2, cara);
}
//Cara
function Cara(){
    const ojo = new THREE.Mesh( new THREE.CircleGeometry(0.03, 60 ,1), new THREE.MeshBasicMaterial({color: 0x000000}) );
    const ojo2 = new THREE.Mesh( new THREE.CircleGeometry(0.03, 60 ,1), new THREE.MeshBasicMaterial({color: 0x000000 }));
    const boca = new THREE.Mesh( new THREE.BoxGeometry(0.1,0.01,0.01), new THREE.MeshBasicMaterial({color: 0x000000 }));

    ojo.position.y = 3.05;
    ojo.position.x = 0.14;
    ojo.position.z = 0.42;
    ojo2.position.y = 3.05;
    ojo2.position.x = -0.14;
    ojo2.position.z = 0.42;
    boca.position.y = 2.82;
    boca.position.x = 0;
    boca.position.z = 0.42;

    scene.add(ojo,ojo2,boca);
}
//Cuerpo
function Cuerpo(){
const camisa = new THREE.Mesh( new THREE.BoxGeometry(1,1.6,0.7), new THREE.MeshBasicMaterial({color: 0x14CAD9}) );
const manga = new THREE.Mesh( new THREE.BoxGeometry(1.7,0.2,0.7), new THREE.MeshBasicMaterial({color: 0x14CAD9}));
const manga2 = new THREE.Mesh( new THREE.BoxGeometry(1,0.4,0.7), new THREE.MeshBasicMaterial({color: 0x1A68D8}));
const Pant = new THREE.Mesh( new THREE.BoxGeometry(0.3,0.3,0.7), new THREE.MeshBasicMaterial({color: 0x1A68D8}));
const Pant2 = new THREE.Mesh( new THREE.BoxGeometry(0.3,0.3,0.7), new THREE.MeshBasicMaterial({color: 0x1A68D8}));
const brazo = new THREE.Mesh( new THREE.BoxGeometry(0.23,1.2,0.5), new THREE.MeshBasicMaterial({color: 0xFBE2DC }));
const brazo2 = new THREE.Mesh( new THREE.BoxGeometry(0.23,1.2,0.5), new THREE.MeshBasicMaterial({color: 0xFBE2DC }));
const pierna = new THREE.Mesh( new THREE.BoxGeometry(0.25,1.3,0.5), new THREE.MeshBasicMaterial({color: 0xFBE2DC }));
const pierna2 = new THREE.Mesh( new THREE.BoxGeometry(0.25,1.3,0.5), new THREE.MeshBasicMaterial({color: 0xFBE2DC }));
const media = new THREE.Mesh( new THREE.BoxGeometry(0.26,0.4,0.51), new THREE.MeshBasicMaterial({color: 0xffffff }));
const media2 = new THREE.Mesh( new THREE.BoxGeometry(0.26,0.4,0.51), new THREE.MeshBasicMaterial({color: 0xffffff }));
const zap = new THREE.Mesh( new THREE.BoxGeometry(0.27,0.7,0.52), new THREE.MeshBasicMaterial({color: 0x000000 }));
const zap2 = new THREE.Mesh( new THREE.BoxGeometry(0.27,0.7,0.52), new THREE.MeshBasicMaterial({color: 0x000000 }));
const zap3 = new THREE.Mesh( new THREE.BoxGeometry(0.27,0.4,0.52), new THREE.MeshBasicMaterial({color: 0x000000 }));
const zap4 = new THREE.Mesh( new THREE.BoxGeometry(0.27,0.4,0.52), new THREE.MeshBasicMaterial({color: 0x000000 }));
const cordon = new THREE.Mesh( new THREE.BoxGeometry(0.2,0.01,0.01), new THREE.MeshBasicMaterial({color: 0xffffff }));
const cordon2 = new THREE.Mesh( new THREE.BoxGeometry(0.2,0.01,0.01), new THREE.MeshBasicMaterial({color: 0xffffff }));
const cordon3 = new THREE.Mesh( new THREE.BoxGeometry(0.2,0.01,0.01), new THREE.MeshBasicMaterial({color: 0xffffff }));
const cordon4 = new THREE.Mesh( new THREE.BoxGeometry(0.2,0.01,0.01), new THREE.MeshBasicMaterial({color: 0xffffff }));


camisa.position.y = 1.8;
manga.position.y = 2.5;
manga.position.z = 0;
manga2.position.y = 0.8;
Pant.position.y = 0.5;
Pant.position.x = 0.35;
Pant2.position.y = 0.5;
Pant2.position.x = -0.35;
brazo.position.y = 1.85;
brazo.position.x = 0.7;
brazo2.position.y = 1.85;
brazo2.position.x = -0.7;
pierna.position.y = -0.25;
pierna.position.x = 0.35;
pierna2.position.y = -0.25;
pierna2.position.x = -0.35;
media.position.y = -0.77;
media.position.x = 0.35;
media2.position.y = -0.77;
media2.position.x = -0.35;
zap.position.y = -1.18;
zap.position.x = 0.35;
zap2.position.y = -1.18;
zap2.position.x = -0.35;
zap3.position.y = -1.33;
zap3.position.x = 0.35;
zap3.position.z = 0.45;
zap4.position.y = -1.33;
zap4.position.x = -0.35;
zap4.position.z = 0.45;
cordon.position.y = -1.1;
cordon.position.x = -0.35;
cordon.position.z = 0.4; 
cordon2.position.y = -1.1;
cordon2.position.x = 0.35;
cordon2.position.z = 0.4;
cordon3.position.y = -1.1;
cordon3.position.x = -0.35;
cordon3.position.z = 0.5; 
cordon4.position.y = -1.1;
cordon4.position.x = 0.35;
cordon4.position.z = 0.5;


scene.add(camisa,manga,manga2,Pant,Pant2,brazo,brazo2,pierna,pierna2,media,media2,zap,zap2,zap3,zap4,cordon,cordon2,cordon3,cordon4);
}

function piso(){

    const plano = new THREE.Mesh( new THREE.BoxGeometry(5,0.01,5), new THREE.MeshBasicMaterial({color: 0xffffff }));

    plano.position.y = -1.6;

scene.add(plano);

}


function init() {
    Cabeza();
    Cuerpo();
    Cara();
    piso();
}


camera.position.z = 5;
function animate(time) {
requestAnimationFrame( animate );
renderer.render( scene, camera );
controls.update();
stats.update();
}
init();
animate();