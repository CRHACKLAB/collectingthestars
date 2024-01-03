//------------------------------//
//   RENDER ANSWERS FUNCTIONS   //
//------------------------------//

// Planet 1
function qs01p11RenderAnswers(challengeId) {
    console.log(`qs01p11RenderAnswers`);
    anchorEl = document.createElement('a-entity');
    anchorEl.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.1,
        width: 0.1
    });
    anchorEl.object3D.position.set(0, 0, 0.01);
    anchorEl.setAttribute('material','color', 'white');
    //
    sequence = document.createElement('a-text');
    sequence.setAttribute('value','2   4   ...   8   ...   12   14   16   18   ...');
    sequence.setAttribute('align','center');
    sequence.setAttribute('position','0 1 0.01');
    sequence.setAttribute('scale','1.5 1.5 1');
    sequence.setAttribute('color','black');
    sequence.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Pick the right option:');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 0 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    button6919 = document.createElement('a-entity');
    button6919.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button6919.object3D.position.set(-1.8, -0.7, 0);
    button6919.setAttribute('material','color', 'black');
    button6919.setAttribute(`${challengeId}-manager`, null);
    button6919.setAttribute('id', 'qsp11-a6919');
    //
    button61020 = document.createElement('a-entity');
    button61020.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button61020.object3D.position.set(0, -0.7, 0);
    button61020.setAttribute('material','color', 'black');
    button61020.setAttribute(`${challengeId}-manager`, null);
    button61020.setAttribute('id', 'qsp11-a61020');
    //
    button51015 = document.createElement('a-entity');
    button51015.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button51015.object3D.position.set(1.8, -0.7, 0);
    button51015.setAttribute('material','color', 'black');
    button51015.setAttribute(`${challengeId}-manager`, null);
    button51015.setAttribute('id', 'qsp11-a51015');
    //
    a6919 = document.createElement('a-text');
    a6919.setAttribute('value','6, 9, 19');
    a6919.setAttribute('align','center');
    a6919.setAttribute('position','0 0 0.01');
    a6919.setAttribute('color','white');
    a6919.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //   
    a61020 = document.createElement('a-text');
    a61020.setAttribute('value','6, 10, 20');
    a61020.setAttribute('align','center');
    a61020.setAttribute('position','0 0 0.01');
    a61020.setAttribute('color','white');
    a61020.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    a51015 = document.createElement('a-text');
    a51015.setAttribute('value','5, 10, 15');
    a51015.setAttribute('align','center');
    a51015.setAttribute('position','0 0 0.01');
    a51015.setAttribute('color','white');
    a51015.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    // COMPOSITING
    button6919.appendChild(a6919);
    button61020.appendChild(a61020);
    button51015.appendChild(a51015);
    //
    pickRightAnswerLabel.appendChild(button6919);
    pickRightAnswerLabel.appendChild(button61020);
    pickRightAnswerLabel.appendChild(button51015);

    anchorEl.appendChild(pickRightAnswerLabel);
    anchorEl.appendChild(sequence);
    //
    return anchorEl;
};

function qs01p12RenderAnswers(challengeId) {
    console.log(`qs01p12RenderAnswers`);
    anchorEl = document.createElement('a-entity');
    anchorEl.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.1,
        width: 0.1
    });
    anchorEl.object3D.position.set(0, 0, 0.01);
    anchorEl.setAttribute('material','color', 'white');
    //
    fourteenStars = document.createElement('a-image');
    fourteenStars.setAttribute('id','qsp12-fourteenstars');
    fourteenStars.setAttribute('src','#fourteenstars');
    fourteenStars.setAttribute('geometry', {
        height: 1.3,
        width: 3.9
    });
    fourteenStars.setAttribute('position','0 1 0.01');
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Pick the right option:');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 0 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    button23 = document.createElement('a-entity');
    button23.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.6
    });
    button23.object3D.position.set(-1.8, -0.7, 0);
    button23.setAttribute('material','color', 'black');
    button23.setAttribute(`${challengeId}-manager`, null);
    button23.setAttribute('id', 'qsp12-a23');
    //
    button15 = document.createElement('a-entity');
    button15.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.6
    });
    button15.object3D.position.set(0, -0.7, 0);
    button15.setAttribute('material','color', 'black');
    button15.setAttribute(`${challengeId}-manager`, null);
    button15.setAttribute('id', 'qsp12-a15');
    //
    button14 = document.createElement('a-entity');
    button14.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.6
    });
    button14.object3D.position.set(1.8, -0.7, 0);
    button14.setAttribute('material','color', 'black');
    button14.setAttribute(`${challengeId}-manager`, null);
    button14.setAttribute('id', 'qsp12-a14');
    //
    a23 = document.createElement('a-text');
    a23.setAttribute('value','2 tens, 3 ones');
    a23.setAttribute('align','center');
    a23.setAttribute('position','0 0 0.01');
    a23.setAttribute('color','white');
    a23.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //   
    a15 = document.createElement('a-text');
    a15.setAttribute('value','1 tens, 5 ones');
    a15.setAttribute('align','center');
    a15.setAttribute('position','0 0 0.01');
    a15.setAttribute('color','white');
    a15.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    a14 = document.createElement('a-text');
    a14.setAttribute('value','1 tens, 4 ones');
    a14.setAttribute('align','center');
    a14.setAttribute('position','0 0 0.01');
    a14.setAttribute('color','white');
    a14.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    // COMPOSITING
    button23.appendChild(a23);
    button15.appendChild(a15);
    button14.appendChild(a14);
    //
    pickRightAnswerLabel.appendChild(button23);
    pickRightAnswerLabel.appendChild(button15);
    pickRightAnswerLabel.appendChild(button14);

    anchorEl.appendChild(pickRightAnswerLabel);
    anchorEl.appendChild(fourteenStars);
    //
    return anchorEl;
};

function qs01p13RenderAnswers(challengeId) {
    console.log(`qs01p13RenderAnswers`);
    anchorEl = document.createElement('a-entity');
    anchorEl.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.1,
        width: 0.1
    });
    anchorEl.object3D.position.set(0, 0, 0.01);
    anchorEl.setAttribute('material','color', 'white');
    //
    // No graphics for this challenge
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Pick the right option:');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 0 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    button25 = document.createElement('a-entity');
    button25.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button25.object3D.position.set(-1.8, -0.7, 0);
    button25.setAttribute('material','color', 'black');
    button25.setAttribute(`${challengeId}-manager`, null);
    button25.setAttribute('id', 'qsp13-a25');
    //
    button15 = document.createElement('a-entity');
    button15.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button15.object3D.position.set(0, -0.7, 0);
    button15.setAttribute('material','color', 'black');
    button15.setAttribute(`${challengeId}-manager`, null);
    button15.setAttribute('id', 'qsp13-a15');
    //
    button35 = document.createElement('a-entity');
    button35.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button35.object3D.position.set(1.8, -0.7, 0);
    button35.setAttribute('material','color', 'black');
    button35.setAttribute(`${challengeId}-manager`, null);
    button35.setAttribute('id', 'qsp13-a35');
    //
    a25 = document.createElement('a-text');
    a25.setAttribute('value','25');
    a25.setAttribute('align','center');
    a25.setAttribute('position','0 0 0.01');
    a25.setAttribute('color','white');
    a25.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //   
    a15 = document.createElement('a-text');
    a15.setAttribute('value','15');
    a15.setAttribute('align','center');
    a15.setAttribute('position','0 0 0.01');
    a15.setAttribute('color','white');
    a15.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    a35 = document.createElement('a-text');
    a35.setAttribute('value','35');
    a35.setAttribute('align','center');
    a35.setAttribute('position','0 0 0.01');
    a35.setAttribute('color','white');
    a35.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    // COMPOSITING
    button25.appendChild(a25);
    button15.appendChild(a15);
    button35.appendChild(a35);
    //
    pickRightAnswerLabel.appendChild(button25);
    pickRightAnswerLabel.appendChild(button15);
    pickRightAnswerLabel.appendChild(button35);

    anchorEl.appendChild(pickRightAnswerLabel);
    //
    return anchorEl;
};

function qs01p14RenderAnswers(challengeId) {
    console.log(`qs01p14RenderAnswers`);
    anchorEl = document.createElement('a-entity');
    anchorEl.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.1,
        width: 0.1
    });
    anchorEl.object3D.position.set(0, 0, 0.01);
    anchorEl.setAttribute('material','color', 'white');
    //
    unknown9 = document.createElement('a-image');
    unknown9.setAttribute('id','qsp14-unknown9');
    unknown9.setAttribute('src','#unknown9');
    unknown9.setAttribute('geometry', {
        height: 1.3,
        width: 3.9
    });
    unknown9.setAttribute('position','0 1 0.01');
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Pick the right option:');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 0 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    button8 = document.createElement('a-entity');
    button8.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button8.object3D.position.set(-1.8, -0.7, 0);
    button8.setAttribute('material','color', 'black');
    button8.setAttribute(`${challengeId}-manager`, null);
    button8.setAttribute('id', 'qsp14-a8');
    //
    button10 = document.createElement('a-entity');
    button10.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button10.object3D.position.set(0, -0.7, 0);
    button10.setAttribute('material','color', 'black');
    button10.setAttribute(`${challengeId}-manager`, null);
    button10.setAttribute('id', 'qsp14-a10');
    //
    button9 = document.createElement('a-entity');
    button9.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button9.object3D.position.set(1.8, -0.7, 0);
    button9.setAttribute('material','color', 'black');
    button9.setAttribute(`${challengeId}-manager`, null);
    button9.setAttribute('id', 'qsp14-a9');
    //
    a8 = document.createElement('a-text');
    a8.setAttribute('value','8');
    a8.setAttribute('align','center');
    a8.setAttribute('position','0 0 0.01');
    a8.setAttribute('color','white');
    a8.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //   
    a10 = document.createElement('a-text');
    a10.setAttribute('value','10');
    a10.setAttribute('align','center');
    a10.setAttribute('position','0 0 0.01');
    a10.setAttribute('color','white');
    a10.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    a9 = document.createElement('a-text');
    a9.setAttribute('value','9');
    a9.setAttribute('align','center');
    a9.setAttribute('position','0 0 0.01');
    a9.setAttribute('color','white');
    a9.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    // COMPOSITING
    button8.appendChild(a8);
    button10.appendChild(a10);
    button9.appendChild(a9);
    //
    pickRightAnswerLabel.appendChild(button8);
    pickRightAnswerLabel.appendChild(button10);
    pickRightAnswerLabel.appendChild(button9);

    anchorEl.appendChild(pickRightAnswerLabel);
    anchorEl.appendChild(unknown9);
    //
    return anchorEl;
};

function qs01p15RenderAnswers(challengeId) {
    console.log(`qs01p15RenderAnswers`);
    anchorEl = document.createElement('a-entity');
    anchorEl.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.1,
        width: 0.1
    });
    anchorEl.object3D.position.set(0, 0, 0.01);
    anchorEl.setAttribute('material','color', 'white');
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Pick the right option:');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 0 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    button9 = document.createElement('a-entity');
    button9.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button9.object3D.position.set(-1.8, -0.7, 0);
    button9.setAttribute('material','color', 'black');
    button9.setAttribute(`${challengeId}-manager`, null);
    button9.setAttribute('id', 'qsp15-a9');
    //
    button8 = document.createElement('a-entity');
    button8.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button8.object3D.position.set(0, -0.7, 0);
    button8.setAttribute('material','color', 'black');
    button8.setAttribute(`${challengeId}-manager`, null);
    button8.setAttribute('id', 'qsp15-a8');
    //
    button6 = document.createElement('a-entity');
    button6.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button6.object3D.position.set(1.8, -0.7, 0);
    button6.setAttribute('material','color', 'black');
    button6.setAttribute(`${challengeId}-manager`, null);
    button6.setAttribute('id', 'qsp15-a6');
    //
    a9 = document.createElement('a-text');
    a9.setAttribute('value','9');
    a9.setAttribute('align','center');
    a9.setAttribute('position','0 0 0.01');
    a9.setAttribute('color','white');
    a9.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //   
    a8 = document.createElement('a-text');
    a8.setAttribute('value','8');
    a8.setAttribute('align','center');
    a8.setAttribute('position','0 0 0.01');
    a8.setAttribute('color','white');
    a8.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    a6 = document.createElement('a-text');
    a6.setAttribute('value','6');
    a6.setAttribute('align','center');
    a6.setAttribute('position','0 0 0.01');
    a6.setAttribute('color','white');
    a6.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    // COMPOSITING
    button9.appendChild(a9);
    button8.appendChild(a8);
    button6.appendChild(a6);
    //
    pickRightAnswerLabel.appendChild(button9);
    pickRightAnswerLabel.appendChild(button8);
    pickRightAnswerLabel.appendChild(button6);

    anchorEl.appendChild(pickRightAnswerLabel);
    //
    return anchorEl;
};

// Planet 2
function qs01p21RenderAnswers(challengeId) {
    console.log(`qs01p21RenderAnswers`);
    anchorEl = document.createElement('a-entity');
    anchorEl.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.1,
        width: 0.1
    });
    anchorEl.object3D.position.set(0, 0, 0.01);
    anchorEl.setAttribute('material','color', 'white');
    //
    // No graphics for this challenge
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 0 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    button16 = document.createElement('a-entity');
    button16.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button16.object3D.position.set(-1.8, -0.7, 0);
    button16.setAttribute('material','color', 'black');
    button16.setAttribute(`${challengeId}-manager`, null);
    button16.setAttribute('id', 'qsp21-a16');
    //
    button32 = document.createElement('a-entity');
    button32.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button32.object3D.position.set(0, -0.7, 0);
    button32.setAttribute('material','color', 'black');
    button32.setAttribute(`${challengeId}-manager`, null);
    button32.setAttribute('id', 'qsp21-a32');
    //
    button64 = document.createElement('a-entity');
    button64.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button64.object3D.position.set(1.8, -0.7, 0);
    button64.setAttribute('material','color', 'black');
    button64.setAttribute(`${challengeId}-manager`, null);
    button64.setAttribute('id', 'qsp21-a64');
    //
    a16 = document.createElement('a-text');
    a16.setAttribute('value','16');
    a16.setAttribute('align','center');
    a16.setAttribute('position','0 0 0.01');
    a16.setAttribute('color','white');
    a16.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //   
    a32 = document.createElement('a-text');
    a32.setAttribute('value','32');
    a32.setAttribute('align','center');
    a32.setAttribute('position','0 0 0.01');
    a32.setAttribute('color','white');
    a32.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    a64 = document.createElement('a-text');
    a64.setAttribute('value','64');
    a64.setAttribute('align','center');
    a64.setAttribute('position','0 0 0.01');
    a64.setAttribute('color','white');
    a64.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    // COMPOSITING
    button16.appendChild(a16);
    button32.appendChild(a32);
    button64.appendChild(a64);
    //
    pickRightAnswerLabel.appendChild(button16);
    pickRightAnswerLabel.appendChild(button32);
    pickRightAnswerLabel.appendChild(button64);

    anchorEl.appendChild(pickRightAnswerLabel);
    //
    return anchorEl;
};

function qs01p22RenderAnswers(challengeId) {
    console.log(`qs01p22RenderAnswers`);
    anchorEl = document.createElement('a-entity');
    anchorEl.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.1,
        width: 0.1
    });
    anchorEl.object3D.position.set(0, 0, 0.01);
    anchorEl.setAttribute('material','color', 'white');
    //
    // No graphics for this challenge
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Pick the right answer:');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 0 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    button144 = document.createElement('a-entity');
    button144.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button144.object3D.position.set(-1.8, -0.7, 0);
    button144.setAttribute('material','color', 'black');
    button144.setAttribute(`${challengeId}-manager`, null);
    button144.setAttribute('id', 'qsp22-a144');
    //
    button214 = document.createElement('a-entity');
    button214.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button214.object3D.position.set(0, -0.7, 0);
    button214.setAttribute('material','color', 'black');
    button214.setAttribute(`${challengeId}-manager`, null);
    button214.setAttribute('id', 'qsp22-a214');
    //
    button142 = document.createElement('a-entity');
    button142.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button142.object3D.position.set(1.8, -0.7, 0);
    button142.setAttribute('material','color', 'black');
    button142.setAttribute(`${challengeId}-manager`, null);
    button142.setAttribute('id', 'qsp22-a142');
    //
    a144 = document.createElement('a-text');
    a144.setAttribute('value','14, 4');
    a144.setAttribute('align','center');
    a144.setAttribute('position','0 0 0.01');
    a144.setAttribute('color','white');
    a144.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //   
    a214 = document.createElement('a-text');
    a214.setAttribute('value','2, 14');
    a214.setAttribute('align','center');
    a214.setAttribute('position','0 0 0.01');
    a214.setAttribute('color','white');
    a214.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    a142 = document.createElement('a-text');
    a142.setAttribute('value','1, 42');
    a142.setAttribute('align','center');
    a142.setAttribute('position','0 0 0.01');
    a142.setAttribute('color','white');
    a142.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    // COMPOSITING
    button144.appendChild(a144);
    button214.appendChild(a214);
    button142.appendChild(a142);
    //
    pickRightAnswerLabel.appendChild(button144);
    pickRightAnswerLabel.appendChild(button214);
    pickRightAnswerLabel.appendChild(button142);

    anchorEl.appendChild(pickRightAnswerLabel);
    //
    return anchorEl;
};

function qs01p23RenderAnswers(challengeId) {
    console.log(`qs01p23RenderAnswers`);
    anchorEl = document.createElement('a-entity');
    anchorEl.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.1,
        width: 0.1
    });
    anchorEl.object3D.position.set(0, 0, 0.01);
    anchorEl.setAttribute('material','color', 'white');
    //
    // No graphics for this challenge
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Pick the right answer:');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 0 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    button48 = document.createElement('a-entity');
    button48.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button48.object3D.position.set(-1.8, -0.7, 0);
    button48.setAttribute('material','color', 'black');
    button48.setAttribute(`${challengeId}-manager`, null);
    button48.setAttribute('id', 'qsp23-a48');
    //
    button32 = document.createElement('a-entity');
    button32.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button32.object3D.position.set(0, -0.7, 0);
    button32.setAttribute('material','color', 'black');
    button32.setAttribute(`${challengeId}-manager`, null);
    button32.setAttribute('id', 'qsp23-a32');
    //
    button24 = document.createElement('a-entity');
    button24.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button24.object3D.position.set(1.8, -0.7, 0);
    button24.setAttribute('material','color', 'black');
    button24.setAttribute(`${challengeId}-manager`, null);
    button24.setAttribute('id', 'qsp23-a24');
    //
    a48 = document.createElement('a-text');
    a48.setAttribute('value','48');
    a48.setAttribute('align','center');
    a48.setAttribute('position','0 0 0.01');
    a48.setAttribute('color','white');
    a48.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //   
    a32 = document.createElement('a-text');
    a32.setAttribute('value','32');
    a32.setAttribute('align','center');
    a32.setAttribute('position','0 0 0.01');
    a32.setAttribute('color','white');
    a32.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    a24 = document.createElement('a-text');
    a24.setAttribute('value','24');
    a24.setAttribute('align','center');
    a24.setAttribute('position','0 0 0.01');
    a24.setAttribute('color','white');
    a24.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    // COMPOSITING
    button48.appendChild(a48);
    button32.appendChild(a32);
    button24.appendChild(a24);
    //
    pickRightAnswerLabel.appendChild(button48);
    pickRightAnswerLabel.appendChild(button32);
    pickRightAnswerLabel.appendChild(button24);

    anchorEl.appendChild(pickRightAnswerLabel);
    //
    return anchorEl;
};

function qs01p24RenderAnswers(challengeId) {
    console.log(`qs01p24RenderAnswers`);
    anchorEl = document.createElement('a-entity');
    anchorEl.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.1,
        width: 0.1
    });
    anchorEl.object3D.position.set(0, 0, 0.01);
    anchorEl.setAttribute('material','color', 'white');
    //
    // No graphics for this challenge
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Pick the right answer:');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 0 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    button21 = document.createElement('a-entity');
    button21.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button21.object3D.position.set(-1.8, -0.7, 0);
    button21.setAttribute('material','color', 'black');
    button21.setAttribute(`${challengeId}-manager`, null);
    button21.setAttribute('id', 'qsp24-a21');
    //
    button24 = document.createElement('a-entity');
    button24.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button24.object3D.position.set(0, -0.7, 0);
    button24.setAttribute('material','color', 'black');
    button24.setAttribute(`${challengeId}-manager`, null);
    button24.setAttribute('id', 'qsp24-a24');
    //
    button14 = document.createElement('a-entity');
    button14.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button14.object3D.position.set(1.8, -0.7, 0);
    button14.setAttribute('material','color', 'black');
    button14.setAttribute(`${challengeId}-manager`, null);
    button14.setAttribute('id', 'qsp24-a14');
    //
    a21 = document.createElement('a-text');
    a21.setAttribute('value','21');
    a21.setAttribute('align','center');
    a21.setAttribute('position','0 0 0.01');
    a21.setAttribute('color','white');
    a21.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //   
    a24 = document.createElement('a-text');
    a24.setAttribute('value','24');
    a24.setAttribute('align','center');
    a24.setAttribute('position','0 0 0.01');
    a24.setAttribute('color','white');
    a24.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    a14 = document.createElement('a-text');
    a14.setAttribute('value','14');
    a14.setAttribute('align','center');
    a14.setAttribute('position','0 0 0.01');
    a14.setAttribute('color','white');
    a14.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    // COMPOSITING
    button21.appendChild(a21);
    button24.appendChild(a24);
    button14.appendChild(a14);
    //
    pickRightAnswerLabel.appendChild(button21);
    pickRightAnswerLabel.appendChild(button24);
    pickRightAnswerLabel.appendChild(button14);

    anchorEl.appendChild(pickRightAnswerLabel);
    //
    return anchorEl;
};

function qs01p25RenderAnswers(challengeId) {
    console.log(`qs01p25RenderAnswers`);
    anchorEl = document.createElement('a-entity');
    anchorEl.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.1,
        width: 0.1
    });
    anchorEl.object3D.position.set(0, 0, 0.01);
    anchorEl.setAttribute('material','color', 'white');
    //
    // No graphics for this challenge
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Pick the right answer:');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 0 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    button114 = document.createElement('a-entity');
    button114.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button114.object3D.position.set(-1.8, -0.7, 0);
    button114.setAttribute('material','color', 'black');
    button114.setAttribute(`${challengeId}-manager`, null);
    button114.setAttribute('id', 'qsp25-a114');
    //
    button105 = document.createElement('a-entity');
    button105.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button105.object3D.position.set(0, -0.7, 0);
    button105.setAttribute('material','color', 'black');
    button105.setAttribute(`${challengeId}-manager`, null);
    button105.setAttribute('id', 'qsp25-a105');
    //
    button115 = document.createElement('a-entity');
    button115.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button115.object3D.position.set(1.8, -0.7, 0);
    button115.setAttribute('material','color', 'black');
    button115.setAttribute(`${challengeId}-manager`, null);
    button115.setAttribute('id', 'qsp25-a115');
    //
    a114 = document.createElement('a-text');
    a114.setAttribute('value','114');
    a114.setAttribute('align','center');
    a114.setAttribute('position','0 0 0.01');
    a114.setAttribute('color','white');
    a114.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //   
    a105 = document.createElement('a-text');
    a105.setAttribute('value','105');
    a105.setAttribute('align','center');
    a105.setAttribute('position','0 0 0.01');
    a105.setAttribute('color','white');
    a105.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    a115 = document.createElement('a-text');
    a115.setAttribute('value','115');
    a115.setAttribute('align','center');
    a115.setAttribute('position','0 0 0.01');
    a115.setAttribute('color','white');
    a115.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    // COMPOSITING
    button114.appendChild(a114);
    button105.appendChild(a105);
    button115.appendChild(a115);
    //
    pickRightAnswerLabel.appendChild(button114);
    pickRightAnswerLabel.appendChild(button105);
    pickRightAnswerLabel.appendChild(button115);

    anchorEl.appendChild(pickRightAnswerLabel);
    //
    return anchorEl;
};

// PLANET 3
function qs01p31RenderAnswers(challengeId) {
    console.log(`qs01p31RenderAnswers`);
    anchorEl = document.createElement('a-entity');
    anchorEl.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.1,
        width: 0.1
    });
    anchorEl.object3D.position.set(0, 0, 0.01);
    anchorEl.setAttribute('material','color', 'white');
    //
    measuringTools = document.createElement('a-image');
    measuringTools.setAttribute('id','qsp31-measuringtools');
    measuringTools.setAttribute('src','#measuringtools');
    measuringTools.setAttribute('geometry', {
        height: 1.3,
        width: 3.9
    });
    measuringTools.setAttribute('position','0 1 0.01');
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Pick the right answer:');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 0 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    buttonA = document.createElement('a-entity');
    buttonA.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    buttonA.object3D.position.set(-0.9, -0.7, 0);
    buttonA.setAttribute('material','color', 'black');
    buttonA.setAttribute(`${challengeId}-manager`, null);
    buttonA.setAttribute('id', 'qsp31-aa');
    //
    buttonB = document.createElement('a-entity');
    buttonB.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    buttonB.object3D.position.set(0, -0.7, 0);
    buttonB.setAttribute('material','color', 'black');
    buttonB.setAttribute(`${challengeId}-manager`, null);
    buttonB.setAttribute('id', 'qsp31-ab');
    //
    buttonC = document.createElement('a-entity');
    buttonC.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    buttonC.object3D.position.set(0.9, -0.7, 0);
    buttonC.setAttribute('material','color', 'black');
    buttonC.setAttribute(`${challengeId}-manager`, null);
    buttonC.setAttribute('id', 'qsp31-ac');
    //
    aA = document.createElement('a-text');
    aA.setAttribute('value','A');
    aA.setAttribute('align','center');
    aA.setAttribute('position','0 0 0.01');
    aA.setAttribute('color','white');
    aA.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //   
    aB = document.createElement('a-text');
    aB.setAttribute('value','B');
    aB.setAttribute('align','center');
    aB.setAttribute('position','0 0 0.01');
    aB.setAttribute('color','white');
    aB.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    aC = document.createElement('a-text');
    aC.setAttribute('value','C');
    aC.setAttribute('align','center');
    aC.setAttribute('position','0 0 0.01');
    aC.setAttribute('color','white');
    aC.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    // COMPOSITING
    buttonA.appendChild(aA);
    buttonB.appendChild(aB);
    buttonC.appendChild(aC);
    //
    pickRightAnswerLabel.appendChild(buttonA);
    pickRightAnswerLabel.appendChild(buttonB);
    pickRightAnswerLabel.appendChild(buttonC);
    //
    anchorEl.appendChild(pickRightAnswerLabel);
    anchorEl.appendChild(measuringTools);

    return anchorEl;
};

function qs01p32RenderAnswers(challengeId) {
    console.log(`qs01p32RenderAnswers`);
    anchorEl = document.createElement('a-entity');
    anchorEl.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.1,
        width: 0.1
    });
    anchorEl.object3D.position.set(0, 0, 0.01);
    anchorEl.setAttribute('material','color', 'white');
    //
    // No graphics for this challenge
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Pick the right value:');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 0 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    button68 = document.createElement('a-entity');
    button68.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button68.object3D.position.set(-0.9, -0.7, 0);
    button68.setAttribute('material','color', 'black');
    button68.setAttribute(`${challengeId}-manager`, null);
    button68.setAttribute('id', 'qsp32-a68');
    //
    button94 = document.createElement('a-entity');
    button94.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button94.object3D.position.set(0, -0.7, 0);
    button94.setAttribute('material','color', 'black');
    button94.setAttribute(`${challengeId}-manager`, null);
    button94.setAttribute('id', 'qsp32-a94');
    //
    button88 = document.createElement('a-entity');
    button88.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button88.object3D.position.set(0.9, -0.7, 0);
    button88.setAttribute('material','color', 'black');
    button88.setAttribute(`${challengeId}-manager`, null);
    button88.setAttribute('id', 'qsp32-a88');
    //
    a68 = document.createElement('a-text');
    a68.setAttribute('value','68');
    a68.setAttribute('align','center');
    a68.setAttribute('position','0 0 0.01');
    a68.setAttribute('color','white');
    a68.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //   
    a88 = document.createElement('a-text');
    a88.setAttribute('value','88');
    a88.setAttribute('align','center');
    a88.setAttribute('position','0 0 0.01');
    a88.setAttribute('color','white');
    a88.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    a94 = document.createElement('a-text');
    a94.setAttribute('value','94');
    a94.setAttribute('align','center');
    a94.setAttribute('position','0 0 0.01');
    a94.setAttribute('color','white');
    a94.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    // COMPOSITING
    button68.appendChild(a68);
    button94.appendChild(a94);
    button88.appendChild(a88);
    //
    pickRightAnswerLabel.appendChild(button68);
    pickRightAnswerLabel.appendChild(button94);
    pickRightAnswerLabel.appendChild(button88);

    anchorEl.appendChild(pickRightAnswerLabel);
    //
    return anchorEl;
};

function qs01p33RenderAnswers(challengeId) {
    console.log(`qs01p33RenderAnswers`);
    anchorEl = document.createElement('a-entity');
    anchorEl.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.1,
        width: 0.1
    });
    anchorEl.object3D.position.set(0, 0, 0.01);
    anchorEl.setAttribute('material','color', 'white');
    //
    rectangle5020 = document.createElement('a-image');
    rectangle5020.setAttribute('id','qsp31-rectangle5020');
    rectangle5020.setAttribute('src','#rectangle5020');
    rectangle5020.setAttribute('geometry', {
        height: 1.3,
        width: 3.9
    });
    rectangle5020.setAttribute('position','0 1 0.01');
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Pick the right answer:');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 0 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    button140 = document.createElement('a-entity');
    button140.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button140.object3D.position.set(-0.9, -0.7, 0);
    button140.setAttribute('material','color', 'black');
    button140.setAttribute(`${challengeId}-manager`, null);
    button140.setAttribute('id', 'qsp33-a140');
    //
    button70 = document.createElement('a-entity');
    button70.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button70.object3D.position.set(0, -0.7, 0);
    button70.setAttribute('material','color', 'black');
    button70.setAttribute(`${challengeId}-manager`, null);
    button70.setAttribute('id', 'qsp33-a70');
    //
    button30 = document.createElement('a-entity');
    button30.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button30.object3D.position.set(0.9, -0.7, 0);
    button30.setAttribute('material','color', 'black');
    button30.setAttribute(`${challengeId}-manager`, null);
    button30.setAttribute('id', 'qsp33-a30');
    //
    a140 = document.createElement('a-text');
    a140.setAttribute('value','140');
    a140.setAttribute('align','center');
    a140.setAttribute('position','0 0 0.01');
    a140.setAttribute('color','white');
    a140.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //   
    a70 = document.createElement('a-text');
    a70.setAttribute('value','70');
    a70.setAttribute('align','center');
    a70.setAttribute('position','0 0 0.01');
    a70.setAttribute('color','white');
    a70.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    a30 = document.createElement('a-text');
    a30.setAttribute('value','30');
    a30.setAttribute('align','center');
    a30.setAttribute('position','0 0 0.01');
    a30.setAttribute('color','white');
    a30.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    // COMPOSITING
    button140.appendChild(a140);
    button70.appendChild(a70);
    button30.appendChild(a30);
    //
    pickRightAnswerLabel.appendChild(button140);
    pickRightAnswerLabel.appendChild(button70);
    pickRightAnswerLabel.appendChild(button30);
    //
    anchorEl.appendChild(pickRightAnswerLabel);
    anchorEl.appendChild(rectangle5020);

    return anchorEl;
};

function qs01p34RenderAnswers(challengeId) {
    console.log(`qs01p34RenderAnswers`);
    anchorEl = document.createElement('a-entity');
    anchorEl.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.1,
        width: 0.1
    });
    anchorEl.object3D.position.set(0, 0, 0.01);
    anchorEl.setAttribute('material','color', 'white');
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Pick the right answer:');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 0 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    button140 = document.createElement('a-entity');
    button140.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button140.object3D.position.set(0.9, -0.7, 0);
    button140.setAttribute('material','color', 'black');
    button140.setAttribute(`${challengeId}-manager`, null);
    button140.setAttribute('id', 'qsp34-a140');
    //
    button121 = document.createElement('a-entity');
    button121.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button121.object3D.position.set(0, -0.7, 0);
    button121.setAttribute('material','color', 'black');
    button121.setAttribute(`${challengeId}-manager`, null);
    button121.setAttribute('id', 'qsp34-a121');
    //
    button38 = document.createElement('a-entity');
    button38.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button38.object3D.position.set(-0.9, -0.7, 0);
    button38.setAttribute('material','color', 'black');
    button38.setAttribute(`${challengeId}-manager`, null);
    button38.setAttribute('id', 'qsp34-a38');
    //
    a140 = document.createElement('a-text');
    a140.setAttribute('value','140');
    a140.setAttribute('align','center');
    a140.setAttribute('position','0 0 0.01');
    a140.setAttribute('color','white');
    a140.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //   
    a121 = document.createElement('a-text');
    a121.setAttribute('value','121');
    a121.setAttribute('align','center');
    a121.setAttribute('position','0 0 0.01');
    a121.setAttribute('color','white');
    a121.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    a38 = document.createElement('a-text');
    a38.setAttribute('value','38');
    a38.setAttribute('align','center');
    a38.setAttribute('position','0 0 0.01');
    a38.setAttribute('color','white');
    a38.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    // COMPOSITING
    button140.appendChild(a140);
    button121.appendChild(a121);
    button38.appendChild(a38);
    //
    pickRightAnswerLabel.appendChild(button140);
    pickRightAnswerLabel.appendChild(button121);
    pickRightAnswerLabel.appendChild(button38);
    //
    anchorEl.appendChild(pickRightAnswerLabel);

    return anchorEl;
};

function qs01p35RenderAnswers(challengeId) {
    console.log(`qs01p35RenderAnswers`);
    anchorEl = document.createElement('a-entity');
    anchorEl.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.1,
        width: 0.1
    });
    anchorEl.object3D.position.set(0, 0, 0.01);
    anchorEl.setAttribute('material','color', 'white');
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Pick the right answer:');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 0 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    button35 = document.createElement('a-entity');
    button35.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button35.object3D.position.set(0.9, -0.7, 0);
    button35.setAttribute('material','color', 'black');
    button35.setAttribute(`${challengeId}-manager`, null);
    button35.setAttribute('id', 'qsp35-a35');
    //
    button32 = document.createElement('a-entity');
    button32.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button32.object3D.position.set(0, -0.7, 0);
    button32.setAttribute('material','color', 'black');
    button32.setAttribute(`${challengeId}-manager`, null);
    button32.setAttribute('id', 'qsp35-a32');
    //
    button33 = document.createElement('a-entity');
    button33.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button33.object3D.position.set(-0.9, -0.7, 0);
    button33.setAttribute('material','color', 'black');
    button33.setAttribute(`${challengeId}-manager`, null);
    button33.setAttribute('id', 'qsp35-a33');
    //
    a35 = document.createElement('a-text');
    a35.setAttribute('value','35');
    a35.setAttribute('align','center');
    a35.setAttribute('position','0 0 0.01');
    a35.setAttribute('color','white');
    a35.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //   
    a32 = document.createElement('a-text');
    a32.setAttribute('value','32');
    a32.setAttribute('align','center');
    a32.setAttribute('position','0 0 0.01');
    a32.setAttribute('color','white');
    a32.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    a33 = document.createElement('a-text');
    a33.setAttribute('value','33');
    a33.setAttribute('align','center');
    a33.setAttribute('position','0 0 0.01');
    a33.setAttribute('color','white');
    a33.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    // COMPOSITING
    button35.appendChild(a35);
    button32.appendChild(a32);
    button33.appendChild(a33);
    //
    pickRightAnswerLabel.appendChild(button35);
    pickRightAnswerLabel.appendChild(button32);
    pickRightAnswerLabel.appendChild(button33);
    //
    anchorEl.appendChild(pickRightAnswerLabel);

    return anchorEl;
}

//------------------------------//
// RESOURCES RELEASE FUNCTIONS  //
//------------------------------//

// Planet 1
function qs01p11ReleaseResources(el, nextChallengeButton, challengeManager, pointsTouched) {
    console.log(`qs01p11ReleaseResources`);
    const challengeNumber = el.closest('[id^="challengep"]').id.slice(-2);

    switch (el.id) {
        case "qsp11-a61020":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "qsp11-a6919":
        case "qsp11-a51015":
            document.querySelector('#restartPlanet1').setAttribute('visible', true);
            document.querySelector('#restartPlanet1').setAttribute('class', 'interactive');
            // TODO
            // Reset scores
            break;
        default:
            console.log(`${el.id} - qs01p11ReleaseResources default?!!!`)
    }


    // Disabling all answers
    const choices = document.querySelectorAll(`[${challengeManager}]`);
    for (var i = 0; i < choices.length; i++) {
        choices[i].removeAttribute('class');
    }

    return pointsTouched ?? 0;  
};

function qs01p12ReleaseResources(el, nextChallengeButton, challengeManager, pointsTouched) {
    console.log(`qs01p12ReleaseResources`);
    const challengeNumber = el.closest('[id^="challengep"]').id.slice(-2);

    switch (el.id) {
        case "qsp12-a14":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "qsp12-a23":
        case "qsp12-a15":
            document.querySelector('#restartPlanet1').setAttribute('visible', true);
            document.querySelector('#restartPlanet1').setAttribute('class', 'interactive');
            // TODO
            // Reset scores
            break;
        default:
            console.log(`${el.id} - qs01p12ReleaseResources default?!!!`)
    }

    
    // Disabling all answers
    const choices = document.querySelectorAll(`[${challengeManager}]`);
    for (var i = 0; i < choices.length; i++) {
        choices[i].removeAttribute('class');
    }

    return pointsTouched ?? 0; 
};

function qs01p13ReleaseResources(el, nextChallengeButton, challengeManager, pointsTouched) {
    console.log(`qs01p13ReleaseResources`);
    const challengeNumber = el.closest('[id^="challengep"]').id.slice(-2);

    switch (el.id) {
        case "qsp13-a25":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "qsp13-a15":
        case "qsp13-a35":
            document.querySelector('#restartPlanet1').setAttribute('visible', true);
            document.querySelector('#restartPlanet1').setAttribute('class', 'interactive');
            // TODO
            // Reset scores
            break;
        default:
            console.log(`${el.id} - qs01p13ReleaseResources default?!!!`)
    }

    
    // Disabling all answers
    const choices = document.querySelectorAll(`[${challengeManager}]`);
    for (var i = 0; i < choices.length; i++) {
        choices[i].removeAttribute('class');
    }

    return pointsTouched ?? 0; 
};

function qs01p14ReleaseResources(el, nextChallengeButton, challengeManager, pointsTouched) {
    console.log(`qs01p14ReleaseResources`);
    const challengeNumber = el.closest('[id^="challengep"]').id.slice(-2);

    switch (el.id) {
        case "qsp14-a9":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "qsp14-a8":
        case "qsp14-a10":
            document.querySelector('#restartPlanet1').setAttribute('visible', true);
            document.querySelector('#restartPlanet1').setAttribute('class', 'interactive');
            // TODO
            // Reset scores
            break;
        default:
            console.log(`${el.id} - qs01p14ReleaseResources default?!!!`)
    }
    
    // Disabling all answers
    const choices = document.querySelectorAll(`[${challengeManager}]`);
    for (var i = 0; i < choices.length; i++) {
        choices[i].removeAttribute('class');
    }

    return pointsTouched ?? 0; 
};

function qs01p15ReleaseResources(el, nextChallengeButton, challengeManager, pointsTouched) {
    console.log(`qs01p15ReleaseResources`);
    const challengeNumber = el.closest('[id^="challengep"]').id.slice(-2);

    switch (el.id) {
        case "qsp15-a8":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "qsp15-a9":
        case "qsp15-a6":
            document.querySelector('#restartPlanet1').setAttribute('visible', true);
            document.querySelector('#restartPlanet1').setAttribute('class', 'interactive');
            // TODO
            // Reset scores
            break;
        default:
            console.log(`${el.id} - qs01p15ReleaseResources default?!!!`)
    }
    
    // Disabling all answers
    const choices = document.querySelectorAll(`[${challengeManager}]`);
    for (var i = 0; i < choices.length; i++) {
        choices[i].removeAttribute('class');
    }

    return pointsTouched ?? 0; 
};



// Planet 2
function qs01p21ReleaseResources(el, nextChallengeButton, challengeManager, pointsTouched) {
    console.log(`qs01p21ReleaseResources`);
    const challengeNumber = el.closest('[id^="challengep"]').id.slice(-2);
    
    switch (el.id) {
        case "qsp21-a16":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "qsp21-a32":
        case "qsp21-a64":
            document.querySelector('#restartPlanet2').setAttribute('visible', true);
            document.querySelector('#restartPlanet2').setAttribute('class', 'interactive');
            break;
        default:
            console.log(`${el.id} - qs01p21ReleaseResources default?!!!`)
    }
    // Disabling all answers
    const choices = document.querySelectorAll(`[${challengeManager}]`)
    for (var i = 0; i < choices.length; i++) {
        choices[i].removeAttribute('class');
    }

    return pointsTouched ?? 0;
};

function qs01p22ReleaseResources(el, nextChallengeButton, challengeManager, pointsTouched) {
    console.log(`qs01p22ReleaseResources`);
    const challengeNumber = el.closest('[id^="challengep"]').id.slice(-2);

    switch (el.id) {
        case "qsp22-a142":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "qsp22-a144":
        case "qsp22-a214":
            document.querySelector('#restartPlanet2').setAttribute('visible', true);
            document.querySelector('#restartPlanet2').setAttribute('class', 'interactive');
            // TODO
            // Reset scores
            break;
        default:
            console.log(`${el.id} - qs01p22ReleaseResources default?!!!`)
    }
    // Disabling all answers
    const choices = document.querySelectorAll(`[${challengeManager}]`);
    for (var i = 0; i < choices.length; i++) {
        choices[i].removeAttribute('class');
    }

    return pointsTouched ?? 0;
};

function qs01p23ReleaseResources(el, nextChallengeButton, challengeManager, pointsTouched) {
    console.log(`qs01p23ReleaseResources`);
    const challengeNumber = el.closest('[id^="challengep"]').id.slice(-2);

    switch (el.id) {
        case "qsp23-a24":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "qsp23-a48":
        case "qsp23-a32":
            document.querySelector('#restartPlanet2').setAttribute('visible', true);
            document.querySelector('#restartPlanet2').setAttribute('class', 'interactive');
            // TODO
            // Reset scores
            break;
        default:
            console.log(`${el.id} - qs01p23ReleaseResources default?!!!`)
    }
    // Disabling all answers
    const choices = document.querySelectorAll(`[${challengeManager}]`);
    for (var i = 0; i < choices.length; i++) {
        choices[i].removeAttribute('class');
    }

    return pointsTouched ?? 0;
};

function qs01p24ReleaseResources(el, nextChallengeButton, challengeManager, pointsTouched) {
    console.log(`qs01p24ReleaseResources`);
    const challengeNumber = el.closest('[id^="challengep"]').id.slice(-2);

    switch (el.id) {
        case "qsp24-a21":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "qsp24-a24":
        case "qsp24-14":
            document.querySelector('#restartPlanet2').setAttribute('visible', true);
            document.querySelector('#restartPlanet2').setAttribute('class', 'interactive');
            break;
        default:
            console.log(`${el.id} - qs01p24ReleaseResources default?!!!`)
    }

    // Disabling all answers
    const choices = document.querySelectorAll(`[${challengeManager}]`);
    for (var i = 0; i < choices.length; i++) {
        choices[i].removeAttribute('class');
    }

    return pointsTouched ?? 0;
};

function qs01p25ReleaseResources(el, nextChallengeButton, challengeManager, pointsTouched) {
    console.log(`qs01p25ReleaseResources`);
    const challengeNumber = el.closest('[id^="challengep"]').id.slice(-2);

    switch (el.id) {
        case "qsp25-a115":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "qsp25-acircle114":
        case "qsp25-acircle105":
            document.querySelector('#restartPlanet2').setAttribute('visible', true);
            document.querySelector('#restartPlanet2').setAttribute('class', 'interactive');
            // TODO
            // Reset scores
            break;
        default:
            console.log(`${el.id} - qs01p24ReleaseResources default?!!!`)
    }

    // Disabling all answers
    const choices = document.querySelectorAll(`[${challengeManager}]`);
    for (var i = 0; i < choices.length; i++) {
        choices[i].removeAttribute('class');
    }

    return pointsTouched ?? 0;    
};

// Planet 3
function qs01p31ReleaseResources(el, nextChallengeButton, challengeManager, pointsTouched) {
    console.log(`qs01p31ReleaseResources`);

    const challengeNumber = el.closest('[id^="challengep"]').id.slice(-2);
    switch (el.id) {
        case "qsp31-ab":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "qsp31-aa":
        case "qsp31-ac":
            document.querySelector('#restartPlanet3').setAttribute('visible', true);
            document.querySelector('#restartPlanet3').setAttribute('class', 'interactive');
            break;
        default:
            console.log(`${el.id} - qs01p31ReleaseResources default?!!!`)
    }
    // Disabling all answers
    const choices = document.querySelectorAll(`[${challengeManager}]`);
    for (var i = 0; i < choices.length; i++) {
        choices[i].removeAttribute('class');
    }
    return pointsTouched ?? 0;
};

function qs01p32ReleaseResources(el, nextChallengeButton, challengeManager, pointsTouched) {
    console.log(`qs01p32ReleaseResources`);
    const challengeNumber = el.closest('[id^="challengep"]').id.slice(-2);

    switch (el.id) {
        case "qsp32-a88":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "qsp32-a68":
        case "qsp32-a94":
            document.querySelector('#restartPlanet3').setAttribute('visible', true);
            document.querySelector('#restartPlanet3').setAttribute('class', 'interactive');
            // TODO
            // Reset scores
            break;
        default:
            console.log(`${el.id} - qs01p32ReleaseResources default?!!!`)   
    }
    // Disabling all answers
    const choices = document.querySelectorAll(`[${challengeManager}]`)
    for (var i = 0; i < choices.length; i++) {
        choices[i].removeAttribute('class');
    }

    return pointsTouched ?? 0;
//
};

function qs01p33ReleaseResources(el, nextChallengeButton, challengeManager, pointsTouched) {
    console.log(`qs01p33ReleaseResources`);
    const challengeNumber = el.closest('[id^="challengep"]').id.slice(-2);
    switch (el.id) {
        case "qsp33-a140":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "qsp33-a70":
        case "qsp33-a30":
            console.log(`P33 wrong answer`);
            document.querySelector('#restartPlanet3').setAttribute('visible', true);
            document.querySelector('#restartPlanet3').setAttribute('class', 'interactive');
            // TODO
            // Reset scores
            break;
        default:
            console.log(`${el.id} - qs01p33ReleaseResources default?!!!`)
    };
    // Disabling all answers
    const choices = document.querySelectorAll(`[${challengeManager}]`)
    for (var i = 0; i < choices.length; i++) {
        choices[i].removeAttribute('class');
    }
    return pointsTouched ?? 0;
};

function qs01p34ReleaseResources(el, nextChallengeButton, challengeManager, pointsTouched) {
    console.log(`qs01p34ReleaseResources`);
    const challengeNumber = el.closest('[id^="challengep"]').id.slice(-2);
    switch (el.id) {
        case "qsp34-a121":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "qsp34-a140":
        case "qsp34-a38":
            document.querySelector('#restartPlanet3').setAttribute('visible', true);
            document.querySelector('#restartPlanet3').setAttribute('class', 'interactive');
            break;
        default:
            console.log(`${el.id} - qs01p34ReleaseResources default?!!!`)
    }
    // Disabling all answers
    const choices = document.querySelectorAll(`[${challengeManager}]`)
    for (var i = 0; i < choices.length; i++) {
        choices[i].removeAttribute('class');
    }
    return pointsTouched ?? 0;
};

function qs01p35ReleaseResources(el, nextChallengeButton, challengeManager, pointsTouched) {
    console.log(`qs01p35ReleaseResources`);
    const challengeNumber = el.closest('[id^="challengep"]').id.slice(-2);
    switch (el.id) {
        case "qsp35-a33":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "qsp35-a35":
        case "qsp35-a32":
            document.querySelector('#restartPlanet3').setAttribute('visible', true);
            document.querySelector('#restartPlanet3').setAttribute('class', 'interactive');
            break;
        default:
            console.log(`${el.id} - qs01p35ReleaseResources default?!!!`)
    }
    // Disabling all answers
    const choices = document.querySelectorAll(`[${challengeManager}]`);
    for (var i = 0; i < choices.length; i++) {
        choices[i].removeAttribute('class');
    }
    return pointsTouched ?? 0;
};





//---------------------------//
//          DATA             //
//---------------------------//

// Planet 1
const qs01p11data = [
    "Let's complete the sequence below.",
    'The missing numbers were 6, 10 and 20!',
    qs01p11RenderAnswers,
    qs01p11ReleaseResources
];

const qs01p12data = [
    "Let's separate the following objects into their tens and ones",
    'They are 1 tens and 4 ones!',
    qs01p12RenderAnswers,
    qs01p12ReleaseResources
];

const qs01p13data = [
    'What is 5 more than twice the number 10?',
    'The right answer is 25!',
    qs01p13RenderAnswers,
    qs01p13ReleaseResources
];

const qs01p14data = [
    "Let's find the addend that is not given in the addition below",
    'The unknown addend is 9!',
    qs01p14RenderAnswers,
    qs01p14ReleaseResources
];

const qs01p15data = [
    'What is the number minus 9 of a number consisting of 1 tens and 7 ones? ',
    'The right answer is 8!',
    qs01p15RenderAnswers,
    qs01p15ReleaseResources
];

// Planet 2
const qs01p21data = [
    'What is the quarter of the number whose half is 32?',
    'The right answer is 16!',
    qs01p21RenderAnswers,
    qs01p21ReleaseResources
];

const qs01p22data = [
    'Which numbers should go in the dotted places in the equation 142 cm=.............m...........cm?',
    'The right answer is 1 m and 42 cm!',
    qs01p22RenderAnswers,
    qs01p22ReleaseResources
];

const qs01p23data = [
    '2 kg of apples are 6 Euros. How many Euros is 8 kg of apples?',
    'The right answer is 24!',
    qs01p23RenderAnswers,
    qs01p23ReleaseResources
];

const qs01p24data = [
    'How many times did Ayşe, who brushes her teeth 3 times a day, brush her teeth in a week?',
    'The right answer is 21',
    qs01p24RenderAnswers,
    qs01p24ReleaseResources
];

const qs01p25data = [
    'What is 15 more than the smallest 3-digit number?',
    'The right answer is 115!',
    qs01p25RenderAnswers,
    qs01p25ReleaseResources
];

// Planet 3
const qs01p31data = [
    'Which of the following is the angle measuring tool?',
    'The goniometer is the angle measuring tool!',
    qs01p31RenderAnswers,
    qs01p31ReleaseResources
];

const qs01p32data = [
    'There are 10 cows and 24 chickens on a farm. What is the total number of legs of these animals?',
    'The right answer is 88!',
    qs01p32RenderAnswers,
    qs01p32ReleaseResources
];

const qs01p33data = [
    'What is the perimeter of the rectangle whose measurements are given below?',
    'The right answer is 140!',
    qs01p33RenderAnswers,
    qs01p33ReleaseResources
];

const qs01p34data = [
    'Which is an odd number?',
    'The right answer is 121!',
    qs01p34RenderAnswers,
    qs01p34ReleaseResources
];

const qs01p35data = [
    'What is one third of the largest two-digit number?',
    'The right answer is 33!',
    qs01p35RenderAnswers,
    qs01p35ReleaseResources
];





// Randomize function
function randomizeQSArray(array) {
    return array.sort(() => Math.random() - 0.5);
};