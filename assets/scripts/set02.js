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
    airplanecar = document.createElement('a-image');
    airplanecar.setAttribute('id','qsp11-airplanecar');
    airplanecar.setAttribute('src','#airplanecar');
    airplanecar.setAttribute('geometry', {
        height: 1.3,
        width: 3.9
    });
    airplanecar.setAttribute('position','0 1 0.01');
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Pick the right option:');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 0 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    buttonLighter = document.createElement('a-entity');
    buttonLighter.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    buttonLighter.object3D.position.set(-1.8, -0.7, 0);
    buttonLighter.setAttribute('material','color', 'black');
    buttonLighter.setAttribute(`${challengeId}-manager`, null);
    buttonLighter.setAttribute('id', 'qsp11-alighter');
    //
    buttonEqual = document.createElement('a-entity');
    buttonEqual.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    buttonEqual.object3D.position.set(0, -0.7, 0);
    buttonEqual.setAttribute('material','color', 'black');
    buttonEqual.setAttribute(`${challengeId}-manager`, null);
    buttonEqual.setAttribute('id', 'qsp11-aequal');
    //
    buttonHeavier = document.createElement('a-entity');
    buttonHeavier.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    buttonHeavier.object3D.position.set(1.8, -0.7, 0);
    buttonHeavier.setAttribute('material','color', 'black');
    buttonHeavier.setAttribute(`${challengeId}-manager`, null);
    buttonHeavier.setAttribute('id', 'qsp11-aheavier');
    //
    aLighter = document.createElement('a-text');
    aLighter.setAttribute('value','Lighter');
    aLighter.setAttribute('align','center');
    aLighter.setAttribute('position','0 0 0.01');
    aLighter.setAttribute('color','white');
    aLighter.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //   
    aEqual = document.createElement('a-text');
    aEqual.setAttribute('value','Equal to');
    aEqual.setAttribute('align','center');
    aEqual.setAttribute('position','0 0 0.01');
    aEqual.setAttribute('color','white');
    aEqual.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    aHeavier = document.createElement('a-text');
    aHeavier.setAttribute('value','Heavier');
    aHeavier.setAttribute('align','center');
    aHeavier.setAttribute('position','0 0 0.01');
    aHeavier.setAttribute('color','white');
    aHeavier.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    // COMPOSITING
    buttonLighter.appendChild(aLighter);
    buttonEqual.appendChild(aEqual);
    buttonHeavier.appendChild(aHeavier);
    //
    pickRightAnswerLabel.appendChild(buttonLighter);
    pickRightAnswerLabel.appendChild(buttonEqual);
    pickRightAnswerLabel.appendChild(buttonHeavier);

    anchorEl.appendChild(pickRightAnswerLabel);
    anchorEl.appendChild(airplanecar);
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
    redTriangle = document.createElement('a-image');
    redTriangle.setAttribute('id','qsp12-redtriangle');
    redTriangle.setAttribute('src','#redtriangle');
    redTriangle.setAttribute('geometry', {
        height: 1.3,
        width: 3.9
    });
    redTriangle.setAttribute('position','0 1 0.01');
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Pick the right option:');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 0 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    buttonSquare = document.createElement('a-entity');
    buttonSquare.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    buttonSquare.object3D.position.set(-1.8, -0.7, 0);
    buttonSquare.setAttribute('material','color', 'black');
    buttonSquare.setAttribute(`${challengeId}-manager`, null);
    buttonSquare.setAttribute('id', 'qsp12-square');
    //
    buttonTriangle = document.createElement('a-entity');
    buttonTriangle.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    buttonTriangle.object3D.position.set(0, -0.7, 0);
    buttonTriangle.setAttribute('material','color', 'black');
    buttonTriangle.setAttribute(`${challengeId}-manager`, null);
    buttonTriangle.setAttribute('id', 'qsp12-triangle');
    //
    buttonCircle = document.createElement('a-entity');
    buttonCircle.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    buttonCircle.object3D.position.set(1.8, -0.7, 0);
    buttonCircle.setAttribute('material','color', 'black');
    buttonCircle.setAttribute(`${challengeId}-manager`, null);
    buttonCircle.setAttribute('id', 'qsp12-circle');
    //
    aSquare = document.createElement('a-text');
    aSquare.setAttribute('value','Square');
    aSquare.setAttribute('align','center');
    aSquare.setAttribute('position','0 0 0.01');
    aSquare.setAttribute('color','white');
    aSquare.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //   
    aTriangle = document.createElement('a-text');
    aTriangle.setAttribute('value','Triangle');
    aTriangle.setAttribute('align','center');
    aTriangle.setAttribute('position','0 0 0.01');
    aTriangle.setAttribute('color','white');
    aTriangle.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    aCircle = document.createElement('a-text');
    aCircle.setAttribute('value','Circle');
    aCircle.setAttribute('align','center');
    aCircle.setAttribute('position','0 0 0.01');
    aCircle.setAttribute('color','white');
    aCircle.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    // COMPOSITING
    buttonSquare.appendChild(aSquare);
    buttonTriangle.appendChild(aTriangle);
    buttonCircle.appendChild(aCircle);
    //
    pickRightAnswerLabel.appendChild(buttonSquare);
    pickRightAnswerLabel.appendChild(buttonTriangle);
    pickRightAnswerLabel.appendChild(buttonCircle);

    anchorEl.appendChild(pickRightAnswerLabel);
    anchorEl.appendChild(redTriangle);
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
    houseCircles = document.createElement('a-image');
    houseCircles.setAttribute('id','qsp13-housecircles');
    houseCircles.setAttribute('src','#housecircles');
    houseCircles.setAttribute('geometry', {
        height: 1.3,
        width: 3.9
    });
    houseCircles.setAttribute('position','0 1 0.01');
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Pick the right option:');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 0 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    button7 = document.createElement('a-entity');
    button7.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button7.object3D.position.set(-1.8, -0.7, 0);
    button7.setAttribute('material','color', 'black');
    button7.setAttribute(`${challengeId}-manager`, null);
    button7.setAttribute('id', 'qsp13-a7');
    //
    button4 = document.createElement('a-entity');
    button4.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button4.object3D.position.set(0, -0.7, 0);
    button4.setAttribute('material','color', 'black');
    button4.setAttribute(`${challengeId}-manager`, null);
    button4.setAttribute('id', 'qsp13-a4');
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
    button9.setAttribute('id', 'qsp13-a9');
    //
    a7 = document.createElement('a-text');
    a7.setAttribute('value','7');
    a7.setAttribute('align','center');
    a7.setAttribute('position','0 0 0.01');
    a7.setAttribute('color','white');
    a7.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //   
    a4 = document.createElement('a-text');
    a4.setAttribute('value','4');
    a4.setAttribute('align','center');
    a4.setAttribute('position','0 0 0.01');
    a4.setAttribute('color','white');
    a4.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    a9 = document.createElement('a-text');
    a9.setAttribute('value','9');
    a9.setAttribute('align','center');
    a9.setAttribute('position','0 0 0.01');
    a9.setAttribute('color','white');
    a9.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    // COMPOSITING
    button7.appendChild(a7);
    button4.appendChild(a4);
    button9.appendChild(a9);
    //
    pickRightAnswerLabel.appendChild(button7);
    pickRightAnswerLabel.appendChild(button4);
    pickRightAnswerLabel.appendChild(button9);

    anchorEl.appendChild(pickRightAnswerLabel);
    anchorEl.appendChild(houseCircles);
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
    twoApples = document.createElement('a-image');
    twoApples.setAttribute('id','qsp14-twoapples');
    twoApples.setAttribute('src','#twoapples');
    twoApples.setAttribute('geometry', {
        height: 1.3,
        width: 3.9
    });
    twoApples.setAttribute('position','0 1 0.01');
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Pick the right option:');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 0 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    button3 = document.createElement('a-entity');
    button3.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button3.object3D.position.set(-1.8, -0.7, 0);
    button3.setAttribute('material','color', 'black');
    button3.setAttribute(`${challengeId}-manager`, null);
    button3.setAttribute('id', 'qsp14-a3');
    //
    button4 = document.createElement('a-entity');
    button4.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button4.object3D.position.set(0, -0.7, 0);
    button4.setAttribute('material','color', 'black');
    button4.setAttribute(`${challengeId}-manager`, null);
    button4.setAttribute('id', 'qsp14-a4');
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
    button6.setAttribute('id', 'qsp14-a6');
    //
    a3 = document.createElement('a-text');
    a3.setAttribute('value','3');
    a3.setAttribute('align','center');
    a3.setAttribute('position','0 0 0.01');
    a3.setAttribute('color','white');
    a3.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //   
    a4 = document.createElement('a-text');
    a4.setAttribute('value','4');
    a4.setAttribute('align','center');
    a4.setAttribute('position','0 0 0.01');
    a4.setAttribute('color','white');
    a4.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    a6 = document.createElement('a-text');
    a6.setAttribute('value','6');
    a6.setAttribute('align','center');
    a6.setAttribute('position','0 0 0.01');
    a6.setAttribute('color','white');
    a6.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    // COMPOSITING
    button3.appendChild(a3);
    button4.appendChild(a4);
    button6.appendChild(a6);
    //
    pickRightAnswerLabel.appendChild(button3);
    pickRightAnswerLabel.appendChild(button4);
    pickRightAnswerLabel.appendChild(button6);

    anchorEl.appendChild(pickRightAnswerLabel);
    anchorEl.appendChild(twoApples);
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
    buttonW1 = document.createElement('a-entity');
    buttonW1.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    buttonW1.object3D.position.set(-1.8, -0.7, 0);
    buttonW1.setAttribute('material','color', 'black');
    buttonW1.setAttribute(`${challengeId}-manager`, null);
    buttonW1.setAttribute('id', 'qsp15-aw1');
    //
    buttonW2 = document.createElement('a-entity');
    buttonW2.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    buttonW2.object3D.position.set(0, -0.7, 0);
    buttonW2.setAttribute('material','color', 'black');
    buttonW2.setAttribute(`${challengeId}-manager`, null);
    buttonW2.setAttribute('id', 'qsp15-aw2');
    //
    buttonR = document.createElement('a-entity');
    buttonR.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    buttonR.object3D.position.set(1.8, -0.7, 0);
    buttonR.setAttribute('material','color', 'black');
    buttonR.setAttribute(`${challengeId}-manager`, null);
    buttonR.setAttribute('id', 'qsp15-ar');
    //
    aW1 = document.createElement('a-text');
    aW1.setAttribute('value','5+2=2');
    aW1.setAttribute('align','center');
    aW1.setAttribute('position','0 0 0.01');
    aW1.setAttribute('color','white');
    aW1.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //   
    aW2 = document.createElement('a-text');
    aW2.setAttribute('value','7-5=2');
    aW2.setAttribute('align','center');
    aW2.setAttribute('position','0 0 0.01');
    aW2.setAttribute('color','white');
    aW2.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    aR = document.createElement('a-text');
    aR.setAttribute('value','7-2=5');
    aR.setAttribute('align','center');
    aR.setAttribute('position','0 0 0.01');
    aR.setAttribute('color','white');
    aR.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    // COMPOSITING
    buttonW1.appendChild(aW1);
    buttonW2.appendChild(aW2);
    buttonR.appendChild(aR);
    //
    pickRightAnswerLabel.appendChild(buttonW1);
    pickRightAnswerLabel.appendChild(buttonW2);
    pickRightAnswerLabel.appendChild(buttonR);

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
    starSquareEquations = document.createElement('a-image');
    starSquareEquations.setAttribute('id','qsp21-starsquareequations');
    starSquareEquations.setAttribute('src','#starsquareequations');
    starSquareEquations.setAttribute('geometry', {
        height: 1.6,
        width: 4.8
    });
    starSquareEquations.setAttribute('position','0 1 0.01');
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 0 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    button66 = document.createElement('a-entity');
    button66.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button66.object3D.position.set(-1.8, -0.7, 0);
    button66.setAttribute('material','color', 'black');
    button66.setAttribute(`${challengeId}-manager`, null);
    button66.setAttribute('id', 'qsp21-a66');
    //
    button60 = document.createElement('a-entity');
    button60.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button60.object3D.position.set(0, -0.7, 0);
    button60.setAttribute('material','color', 'black');
    button60.setAttribute(`${challengeId}-manager`, null);
    button60.setAttribute('id', 'qsp21-a60');
    //
    button56 = document.createElement('a-entity');
    button56.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button56.object3D.position.set(1.8, -0.7, 0);
    button56.setAttribute('material','color', 'black');
    button56.setAttribute(`${challengeId}-manager`, null);
    button56.setAttribute('id', 'qsp21-a56');
    //
    a66 = document.createElement('a-text');
    a66.setAttribute('value','66');
    a66.setAttribute('align','center');
    a66.setAttribute('position','0 0 0.01');
    a66.setAttribute('color','white');
    a66.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //   
    a60 = document.createElement('a-text');
    a60.setAttribute('value','60');
    a60.setAttribute('align','center');
    a60.setAttribute('position','0 0 0.01');
    a60.setAttribute('color','white');
    a60.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    a56 = document.createElement('a-text');
    a56.setAttribute('value','56');
    a56.setAttribute('align','center');
    a56.setAttribute('position','0 0 0.01');
    a56.setAttribute('color','white');
    a56.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    // COMPOSITING
    button66.appendChild(a66);
    button60.appendChild(a60);
    button56.appendChild(a56);
    //
    pickRightAnswerLabel.appendChild(button66);
    pickRightAnswerLabel.appendChild(button60);
    pickRightAnswerLabel.appendChild(button56);

    anchorEl.appendChild(pickRightAnswerLabel);
    anchorEl.appendChild(starSquareEquations);
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
    buckets = document.createElement('a-image');
    buckets.setAttribute('id','qsp22-buckets');
    buckets.setAttribute('src','#buckets');
    buckets.setAttribute('geometry', {
        height: 1.6,
        width: 4.8
    });
    buckets.setAttribute('position','0 0.7 0.01'); //0 1 0.01
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Pick the right answer:');
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
    button8.setAttribute('id', 'qsp22-a8');
    //
    button12 = document.createElement('a-entity');
    button12.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button12.object3D.position.set(0, -0.7, 0);
    button12.setAttribute('material','color', 'black');
    button12.setAttribute(`${challengeId}-manager`, null);
    button12.setAttribute('id', 'qsp22-a12');
    //
    button16 = document.createElement('a-entity');
    button16.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    button16.object3D.position.set(1.8, -0.7, 0);
    button16.setAttribute('material','color', 'black');
    button16.setAttribute(`${challengeId}-manager`, null);
    button16.setAttribute('id', 'qsp22-a16');
    //
    a8 = document.createElement('a-text');
    a8.setAttribute('value','8');
    a8.setAttribute('align','center');
    a8.setAttribute('position','0 0 0.01');
    a8.setAttribute('color','white');
    a8.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //   
    a12 = document.createElement('a-text');
    a12.setAttribute('value','12');
    a12.setAttribute('align','center');
    a12.setAttribute('position','0 0 0.01');
    a12.setAttribute('color','white');
    a12.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    a16 = document.createElement('a-text');
    a16.setAttribute('value','16');
    a16.setAttribute('align','center');
    a16.setAttribute('position','0 0 0.01');
    a16.setAttribute('color','white');
    a16.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    // COMPOSITING
    button8.appendChild(a8);
    button12.appendChild(a12);
    button16.appendChild(a16);
    //
    pickRightAnswerLabel.appendChild(button8);
    pickRightAnswerLabel.appendChild(button12);
    pickRightAnswerLabel.appendChild(button16);

    anchorEl.appendChild(pickRightAnswerLabel);
    anchorEl.appendChild(buckets);
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
    houseNotCircles = document.createElement('a-image');
    houseNotCircles.setAttribute('id','qsp23-housenotcircles');
    houseNotCircles.setAttribute('src','#housenotcircles');
    houseNotCircles.setAttribute('geometry', {
        height: 1.6,
        width: 4.8
    });
    houseNotCircles.setAttribute('position','0 1 0.01');
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Pick the right answer:');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 0 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    buttonSquare = document.createElement('a-entity');
    buttonSquare.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    buttonSquare.object3D.position.set(-1.8, -0.7, 0);
    buttonSquare.setAttribute('material','color', 'black');
    buttonSquare.setAttribute(`${challengeId}-manager`, null);
    buttonSquare.setAttribute('id', 'qsp23-asquare');
    //
    buttonCircle = document.createElement('a-entity');
    buttonCircle.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    buttonCircle.object3D.position.set(0, -0.7, 0);
    buttonCircle.setAttribute('material','color', 'black');
    buttonCircle.setAttribute(`${challengeId}-manager`, null);
    buttonCircle.setAttribute('id', 'qsp23-acircle');
    //
    buttonRectangle = document.createElement('a-entity');
    buttonRectangle.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1.2
    });
    buttonRectangle.object3D.position.set(1.8, -0.7, 0);
    buttonRectangle.setAttribute('material','color', 'black');
    buttonRectangle.setAttribute(`${challengeId}-manager`, null);
    buttonRectangle.setAttribute('id', 'qsp23-arectangle');
    //
    aSquare = document.createElement('a-text');
    aSquare.setAttribute('value','Square');
    aSquare.setAttribute('align','center');
    aSquare.setAttribute('position','0 0 0.01');
    aSquare.setAttribute('color','white');
    aSquare.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //   
    aCircle = document.createElement('a-text');
    aCircle.setAttribute('value','Circle');
    aCircle.setAttribute('align','center');
    aCircle.setAttribute('position','0 0 0.01');
    aCircle.setAttribute('color','white');
    aCircle.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    aRectangle = document.createElement('a-text');
    aRectangle.setAttribute('value','Rectangle');
    aRectangle.setAttribute('align','center');
    aRectangle.setAttribute('position','0 0 0.01');
    aRectangle.setAttribute('color','white');
    aRectangle.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    // COMPOSITING
    buttonSquare.appendChild(aSquare);
    buttonCircle.appendChild(aCircle);
    buttonRectangle.appendChild(aRectangle);
    //
    pickRightAnswerLabel.appendChild(buttonSquare);
    pickRightAnswerLabel.appendChild(buttonCircle);
    pickRightAnswerLabel.appendChild(buttonRectangle);

    anchorEl.appendChild(pickRightAnswerLabel);
    anchorEl.appendChild(houseNotCircles);
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
    trueFalseDiagram = document.createElement('a-image');
    trueFalseDiagram.setAttribute('id','qsp24-truefalsediagram');
    trueFalseDiagram.setAttribute('src','#truefalsediagram');
    trueFalseDiagram.setAttribute('geometry', {
        height: 1.6,
        width: 4.8
    });
    trueFalseDiagram.setAttribute('position','0 1 0.01');
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','... which of the following will we reach?');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 0 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    buttonPenguin = document.createElement('a-entity');
    buttonPenguin.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.8,
        width: 0.8
    });
    buttonPenguin.setAttribute('material', {
        color: 'white',
        src: '#smallpenguin'
    });
    buttonPenguin.setAttribute('id','qsp24-apenguin');
    buttonPenguin.setAttribute('position','-1.8 -0.7 0.01');
    buttonPenguin.setAttribute(`${challengeId}-manager`, null);
    //
    buttonElephant = document.createElement('a-entity');
    buttonElephant.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.8,
        width: 0.8
    });
    buttonElephant.setAttribute('material', {
        color: 'white',
        src: '#smallelephant'
    });
    buttonElephant.setAttribute('id','qsp24-aelephant');
    buttonElephant.setAttribute('position','0 -0.7 0.01');
    buttonElephant.setAttribute(`${challengeId}-manager`, null);
    //
    buttonPanda = document.createElement('a-entity');
    buttonPanda.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.8,
        width: 0.8
    });
    buttonPanda.setAttribute('material', {
        color: 'white',
        src: '#smallpanda'
    });
    buttonPanda.setAttribute('id','qsp24-apanda');
    buttonPanda.setAttribute('position','1.8 -0.7 0.01');
    buttonPanda.setAttribute(`${challengeId}-manager`, null);
    // 
    // COMPOSITING
    pickRightAnswerLabel.appendChild(buttonPenguin);
    pickRightAnswerLabel.appendChild(buttonElephant);
    pickRightAnswerLabel.appendChild(buttonPanda);

    anchorEl.appendChild(pickRightAnswerLabel);
    anchorEl.appendChild(trueFalseDiagram);
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
    divisionRing = document.createElement('a-image');
    divisionRing.setAttribute('id','qsp25-divisionring');
    divisionRing.setAttribute('src','#divisionring');
    divisionRing.setAttribute('geometry', {
        height: 1.6,
        width: 4.8
    });
    divisionRing.setAttribute('position','0 1 0.01');
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Which wheel is the correct one for the results?');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 0 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    buttonCircle435 = document.createElement('a-entity');
    buttonCircle435.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.8,
        width: 0.8
    });
    buttonCircle435.setAttribute('material', {
        color: 'white',
        src: '#smallcircle435'
    });
    buttonCircle435.setAttribute('id','qsp25-acircle435');
    buttonCircle435.setAttribute('position','-1.8 -0.7 0.01');
    buttonCircle435.setAttribute(`${challengeId}-manager`, null);
    //
    buttonCircle437 = document.createElement('a-entity');
    buttonCircle437.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.8,
        width: 0.8
    });
    buttonCircle437.setAttribute('material', {
        color: 'white',
        src: '#smallcircle437'
    });
    buttonCircle437.setAttribute('id','qsp25-acircle437');
    buttonCircle437.setAttribute('position','0 -0.7 0.01');
    buttonCircle437.setAttribute(`${challengeId}-manager`, null);
    //
    buttonCircle467 = document.createElement('a-entity');
    buttonCircle467.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.8,
        width: 0.8
    });
    buttonCircle467.setAttribute('material', {
        color: 'white',
        src: '#smallcircle467'
    });
    buttonCircle467.setAttribute('id','qsp25-acircle467');
    buttonCircle467.setAttribute('position','1.8 -0.7 0.01');
    buttonCircle467.setAttribute(`${challengeId}-manager`, null);
    // 
    // COMPOSITING
    pickRightAnswerLabel.appendChild(buttonCircle435);
    pickRightAnswerLabel.appendChild(buttonCircle437);
    pickRightAnswerLabel.appendChild(buttonCircle467);

    anchorEl.appendChild(pickRightAnswerLabel);
    anchorEl.appendChild(divisionRing);
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
    rotationSequence = document.createElement('a-image');
    rotationSequence.setAttribute('id','qsp31-rotation-sequence');
    rotationSequence.setAttribute('src','#rotationsequence');
    rotationSequence.setAttribute('geometry', {
        height: 1.5,
        width: 3.5
    });
    rotationSequence.setAttribute('position','0 1 0.01');
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Pick the right color:');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 0 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    buttonR = document.createElement('a-entity');
    buttonR.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    buttonR.object3D.position.set(-1.2, -0.7, 0);
    buttonR.setAttribute('material','color', '#056839');
    buttonR.setAttribute(`${challengeId}-manager`, null);
    buttonR.setAttribute('id', 'qsp31-right');
    //
    buttonW1 = document.createElement('a-entity');
    buttonW1.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    buttonW1.object3D.position.set(-0.45, -0.7, 0);
    buttonW1.setAttribute('material','color', '#FFAEC8');
    buttonW1.setAttribute(`${challengeId}-manager`, null);
    buttonW1.setAttribute('id', 'qsp31-wrong1');
    //
    buttonW2 = document.createElement('a-entity');
    buttonW2.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    buttonW2.object3D.position.set(0.45, -0.7, 0);
    buttonW2.setAttribute('material','color', '#8CFFFB');
    buttonW2.setAttribute(`${challengeId}-manager`, null);
    buttonW2.setAttribute('id', 'qsp31-wrong2');
    //
    buttonW3 = document.createElement('a-entity');
    buttonW3.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    buttonW3.object3D.position.set(1.2, -0.7, 0);
    buttonW3.setAttribute('material','color', '#9F1F63');
    buttonW3.setAttribute(`${challengeId}-manager`, null);
    buttonW3.setAttribute('id', 'qsp31-wrong3');
    //
    // COMPOSITING
    pickRightAnswerLabel.appendChild(buttonR);
    pickRightAnswerLabel.appendChild(buttonW1);
    pickRightAnswerLabel.appendChild(buttonW2);
    pickRightAnswerLabel.appendChild(buttonW3);
    //
    anchorEl.appendChild(pickRightAnswerLabel);
    anchorEl.appendChild(rotationSequence);

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
    simpleEquation360 = document.createElement('a-image');
    simpleEquation360.setAttribute('id','qsp32-simple-equation');
    simpleEquation360.setAttribute('src','#simpleequation360');
    simpleEquation360.setAttribute('geometry', {
        height: 1.5,
        width: 4.5
    });
    simpleEquation360.setAttribute('position','0 1 0.01');
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Pick the right value:');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 0 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    button36 = document.createElement('a-entity');
    button36.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button36.object3D.position.set(-1.2, -0.7, 0);
    button36.setAttribute('material','color', 'black');
    button36.setAttribute(`${challengeId}-manager`, null);
    button36.setAttribute('id', 'qsp32-a36');
    //
    button3 = document.createElement('a-entity');
    button3.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button3.object3D.position.set(-0.4, -0.7, 0);
    button3.setAttribute('material','color', 'black');
    button3.setAttribute(`${challengeId}-manager`, null);
    button3.setAttribute('id', 'qsp32-a3');
    //
    button4 = document.createElement('a-entity');
    button4.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button4.object3D.position.set(0.4, -0.7, 0);
    button4.setAttribute('material','color', 'black');
    button4.setAttribute(`${challengeId}-manager`, null);
    button4.setAttribute('id', 'qsp32-a4');
    //
    button5 = document.createElement('a-entity');
    button5.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button5.object3D.position.set(1.2, -0.7, 0);
    button5.setAttribute('material','color', 'black');
    button5.setAttribute(`${challengeId}-manager`, null);
    button5.setAttribute('id', 'qsp32-a5');
    //
    a36 = document.createElement('a-text');
    a36.setAttribute('value','36');
    a36.setAttribute('align','center');
    a36.setAttribute('position','0 0 0.01');
    a36.setAttribute('color','white');
    a36.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //   
    a4 = document.createElement('a-text');
    a4.setAttribute('value','4');
    a4.setAttribute('align','center');
    a4.setAttribute('position','0 0 0.01');
    a4.setAttribute('color','white');
    a4.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    a3 = document.createElement('a-text');
    a3.setAttribute('value','3');
    a3.setAttribute('align','center');
    a3.setAttribute('position','0 0 0.01');
    a3.setAttribute('color','white');
    a3.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    a5 = document.createElement('a-text');
    a5.setAttribute('value','5');
    a5.setAttribute('align','center');
    a5.setAttribute('position','0 0 0.01');
    a5.setAttribute('color','white');
    a5.setAttribute('font', './assets/fonts/Exo2Bold.fnt'); 
    //
    // COMPOSITING
    button36.appendChild(a36);
    button3.appendChild(a3);
    button4.appendChild(a4);
    button5.appendChild(a5);
    //
    pickRightAnswerLabel.appendChild(button36);
    pickRightAnswerLabel.appendChild(button3);
    pickRightAnswerLabel.appendChild(button4);
    pickRightAnswerLabel.appendChild(button5);

    anchorEl.appendChild(pickRightAnswerLabel);
    anchorEl.appendChild(simpleEquation360);
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
    unitcubes17 = document.createElement('a-image');
    unitcubes17.setAttribute('id','qsp33-unit-cubes');
    unitcubes17.setAttribute('src','#unitcubes17');
    unitcubes17.setAttribute('geometry', {
        height: 1.5,
        width: 4.5
    });
    unitcubes17.setAttribute('position','0 1 0.01');
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Pick the right value:');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 0 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    button14 = document.createElement('a-entity');
    button14.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button14.object3D.position.set(-1.2, -0.7, 0);
    button14.setAttribute('material','color', 'black');
    button14.setAttribute(`${challengeId}-manager`, null);
    button14.setAttribute('id', 'qsp33-a14');
    //
    button15 = document.createElement('a-entity');
    button15.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button15.object3D.position.set(-0.4, -0.7, 0);
    button15.setAttribute('material','color', 'black');
    button15.setAttribute(`${challengeId}-manager`, null);
    button15.setAttribute('id', 'qsp33-a15');
    //
    button16 = document.createElement('a-entity');
    button16.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button16.object3D.position.set(0.4, -0.7, 0);
    button16.setAttribute('material','color', 'black');
    button16.setAttribute(`${challengeId}-manager`, null);
    button16.setAttribute('id', 'qsp33-a16');
    //
    button17 = document.createElement('a-entity');
    button17.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button17.object3D.position.set(1.2, -0.7, 0);
    button17.setAttribute('material','color', 'black');
    button17.setAttribute(`${challengeId}-manager`, null);
    button17.setAttribute('id', 'qsp33-a17');
    //
    a14 = document.createElement('a-text');
    a14.setAttribute('value','14');
    a14.setAttribute('align','center');
    a14.setAttribute('position','0 0 0.01');
    a14.setAttribute('color','white');
    a14.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //   
    a15 = document.createElement('a-text');
    a15.setAttribute('value','15');
    a15.setAttribute('align','center');
    a15.setAttribute('position','0 0 0.01');
    a15.setAttribute('color','white');
    a15.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    a16 = document.createElement('a-text');
    a16.setAttribute('value','16');
    a16.setAttribute('align','center');
    a16.setAttribute('position','0 0 0.01');
    a16.setAttribute('color','white');
    a16.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    a17 = document.createElement('a-text');
    a17.setAttribute('value','17');
    a17.setAttribute('align','center');
    a17.setAttribute('position','0 0 0.01');
    a17.setAttribute('color','white');
    a17.setAttribute('font', './assets/fonts/Exo2Bold.fnt'); 
    //
    // COMPOSITING
    button14.appendChild(a14);
    button15.appendChild(a15);
    button16.appendChild(a16);
    button17.appendChild(a17);
    //
    pickRightAnswerLabel.appendChild(button14);
    pickRightAnswerLabel.appendChild(button15);
    pickRightAnswerLabel.appendChild(button16);
    pickRightAnswerLabel.appendChild(button17);

    anchorEl.appendChild(pickRightAnswerLabel);
    anchorEl.appendChild(unitcubes17);
    //
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
    trianglesquare = document.createElement('a-image');
    trianglesquare.setAttribute('id','qsp34-trianglesquare');
    trianglesquare.setAttribute('src','#trianglesquare');
    trianglesquare.setAttribute('geometry', {
        height: 1.3,
        width: 3.9
    });
    trianglesquare.setAttribute('position','0 1 0.01');
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Pick the right value:');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 0 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    button6 = document.createElement('a-entity');
    button6.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button6.object3D.position.set(-1.2, -0.7, 0);
    button6.setAttribute('material','color', 'black');
    button6.setAttribute(`${challengeId}-manager`, null);
    button6.setAttribute('id', 'qsp34-a6');
    //
    button11 = document.createElement('a-entity');
    button11.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button11.object3D.position.set(-0.4, -0.7, 0);
    button11.setAttribute('material','color', 'black');
    button11.setAttribute(`${challengeId}-manager`, null);
    button11.setAttribute('id', 'qsp34-a11');
    //
    button13 = document.createElement('a-entity');
    button13.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button13.object3D.position.set(0.4, -0.7, 0);
    button13.setAttribute('material','color', 'black');
    button13.setAttribute(`${challengeId}-manager`, null);
    button13.setAttribute('id', 'qsp34-a13');
    //
    button24 = document.createElement('a-entity');
    button24.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button24.object3D.position.set(1.2, -0.7, 0);
    button24.setAttribute('material','color', 'black');
    button24.setAttribute(`${challengeId}-manager`, null);
    button24.setAttribute('id', 'qsp34-a24');
    //
    a6 = document.createElement('a-text');
    a6.setAttribute('value','6');
    a6.setAttribute('align','center');
    a6.setAttribute('position','0 0 0.01');
    a6.setAttribute('color','white');
    a6.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //   
    a11 = document.createElement('a-text');
    a11.setAttribute('value','11');
    a11.setAttribute('align','center');
    a11.setAttribute('position','0 0 0.01');
    a11.setAttribute('color','white');
    a11.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    a13 = document.createElement('a-text');
    a13.setAttribute('value','13');
    a13.setAttribute('align','center');
    a13.setAttribute('position','0 0 0.01');
    a13.setAttribute('color','white');
    a13.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    a24 = document.createElement('a-text');
    a24.setAttribute('value','24');
    a24.setAttribute('align','center');
    a24.setAttribute('position','0 0 0.01');
    a24.setAttribute('color','white');
    a24.setAttribute('font', './assets/fonts/Exo2Bold.fnt'); 
    //
    // COMPOSITING
    button6.appendChild(a6);
    button11.appendChild(a11);
    button13.appendChild(a13);
    button24.appendChild(a24);
    //
    pickRightAnswerLabel.appendChild(button6);
    pickRightAnswerLabel.appendChild(button11);
    pickRightAnswerLabel.appendChild(button13);
    pickRightAnswerLabel.appendChild(button24);

    anchorEl.appendChild(pickRightAnswerLabel);
    anchorEl.appendChild(trianglesquare);
    //
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
    coop = document.createElement('a-image');
    coop.setAttribute('id','qsp35-coop');
    coop.setAttribute('src','#coop');
    coop.setAttribute('geometry', {
        height: 1.3,
        width: 3.9
    });
    coop.setAttribute('position','0 1 0.01');
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Pick the right value:');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 0 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    button10 = document.createElement('a-entity');
    button10.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button10.object3D.position.set(-1.2, -0.7, 0);
    button10.setAttribute('material','color', 'black');
    button10.setAttribute(`${challengeId}-manager`, null);
    button10.setAttribute('id', 'qsp35-a10');
    //
    button20 = document.createElement('a-entity');
    button20.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button20.object3D.position.set(-0.4, -0.7, 0);
    button20.setAttribute('material','color', 'black');
    button20.setAttribute(`${challengeId}-manager`, null);
    button20.setAttribute('id', 'qsp35-a20');
    //
    button30 = document.createElement('a-entity');
    button30.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button30.object3D.position.set(0.4, -0.7, 0);
    button30.setAttribute('material','color', 'black');
    button30.setAttribute(`${challengeId}-manager`, null);
    button30.setAttribute('id', 'qsp35-a30');
    //
    button40 = document.createElement('a-entity');
    button40.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button40.object3D.position.set(1.2, -0.7, 0);
    button40.setAttribute('material','color', 'black');
    button40.setAttribute(`${challengeId}-manager`, null);
    button40.setAttribute('id', 'qsp35-a40');
    //
    a10 = document.createElement('a-text');
    a10.setAttribute('value','10');
    a10.setAttribute('align','center');
    a10.setAttribute('position','0 0 0.01');
    a10.setAttribute('color','white');
    a10.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //   
    a20 = document.createElement('a-text');
    a20.setAttribute('value','20');
    a20.setAttribute('align','center');
    a20.setAttribute('position','0 0 0.01');
    a20.setAttribute('color','white');
    a20.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    a30 = document.createElement('a-text');
    a30.setAttribute('value','30');
    a30.setAttribute('align','center');
    a30.setAttribute('position','0 0 0.01');
    a30.setAttribute('color','white');
    a30.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    a40 = document.createElement('a-text');
    a40.setAttribute('value','40');
    a40.setAttribute('align','center');
    a40.setAttribute('position','0 0 0.01');
    a40.setAttribute('color','white');
    a40.setAttribute('font', './assets/fonts/Exo2Bold.fnt'); 
    //
    // COMPOSITING
    button10.appendChild(a10);
    button20.appendChild(a20);
    button30.appendChild(a30);
    button40.appendChild(a40);
    //
    pickRightAnswerLabel.appendChild(button10);
    pickRightAnswerLabel.appendChild(button20);
    pickRightAnswerLabel.appendChild(button30);
    pickRightAnswerLabel.appendChild(button40);

    anchorEl.appendChild(pickRightAnswerLabel);
    anchorEl.appendChild(coop);
    //
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
        case "qsp11-aheavier":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "qsp11-alighter":
        case "qsp11-aequal":
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
        case "qsp12-triangle":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "qsp12-square":
        case "qsp12-circle":
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
        case "qsp13-a4":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "qsp13-a7":
        case "qsp13-a9":
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
        case "qsp14-a4":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "qsp14-a3":
        case "qsp14-a6":
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
        case "qsp15-ar":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "qsp15-aw1":
        case "qsp15-aw2":
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
        case "qsp21-a66":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "qsp21-a60":
        case "qsp21-a56":
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
        case "qsp22-a12":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "qsp22-a8":
        case "qsp22-a16":
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
        case "qsp23-acircle":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "qsp23-asquare":
        case "qsp23-arectangle":
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
        case "qsp24-aelephant":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "qsp24-apenguin":
        case "qsp24-apanda":
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
        case "qsp25-acircle467":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "qsp25-acircle435":
        case "qsp25-acircle437":
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
        case "qsp31-right":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "qsp31-wrong1":
        case "qsp31-wrong2":
        case "qsp31-wrong3":
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
        case "qsp32-a4":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "qsp32-a3":
        case "qsp32-a5":
        case "qsp32-a36":
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
        case "qsp33-a17":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "qsp33-a14":
        case "qsp33-a15":
        case "qsp33-a16":
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
        case "qsp34-a6":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "qsp34-a11":
        case "qsp34-a13":
        case "qsp34-a24":
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
        case "qsp35-a30":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "qsp35-a10":
        case "qsp35-a20":
        case "qsp35-a40":
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
    '"The plane is ...... than the car."\nWhich option is suitable for the blanks?',
    'The plane is heavier than the car!',
    qs01p11RenderAnswers,
    qs01p11ReleaseResources
];

const qs01p12data = [
    'What is the name of the shape below?',
    'The shape above is a triangle.',
    qs01p12RenderAnswers,
    qs01p12ReleaseResources
];

const qs01p13data = [
    'How many circles are there in the picture below?',
    'The right answer is 4!',
    qs01p13RenderAnswers,
    qs01p13ReleaseResources
];

const qs01p14data = [
    'How many half apples make two whole apples?',
    'Four half apples make two whole apples!',
    qs01p14RenderAnswers,
    qs01p14ReleaseResources
];

const qs01p15data = [
    '"Seven minus two equals five."\nWhat is the mathematical expression for the sentence above? ',
    '"7-2=5" is the right mathematical expression!',
    qs01p15RenderAnswers,
    qs01p15ReleaseResources
];

// Planet 2
const qs01p21data = [
    'According to this,',
    'The right answer is 66!',
    qs01p21RenderAnswers,
    qs01p21ReleaseResources
];

const qs01p22data = [
    'The distance between the buckets is equal. if there is a distance of 4 cm between the blue and the red bucket, how many cm is the distance between the yellow and green buckets?',
    'The right answer is 12!',
    qs01p22RenderAnswers,
    qs01p22ReleaseResources
];

const qs01p23data = [
    'Which geometric shape is not used in the given model?',
    'Circle is not used in the model.',
    qs01p23RenderAnswers,
    qs01p23ReleaseResources
];

const qs01p24data = [
    'If the results of the given operations are true (D) or false (Y)...',
    'We reach the elephant!',
    qs01p24RenderAnswers,
    qs01p24ReleaseResources
];

const qs01p25data = [
    'In the operations below, the divisions will be written on the parts of the inner wheel.',
    'You selected the right wheel!',
    qs01p25RenderAnswers,
    qs01p25ReleaseResources
];

// Planet 3
const qs01p31data = [
    'Which is the next color in this sequence?',
    'You guessed the right color!',
    qs01p31RenderAnswers,
    qs01p31ReleaseResources
];

const qs01p32data = [
    'Which value should replace the triangle?',
    '4 is the right answer because 360:10=4x9!',
    qs01p32RenderAnswers,
    qs01p32ReleaseResources
];

const qs01p33data = [
    'How many unit cubes does the following structure consist of?',
    'The right answer is 17!',
    qs01p33RenderAnswers,
    qs01p33ReleaseResources
];

const qs01p34data = [
    'If the perimeter of the triangle ABC is equal to the perimeter of the square DEGF, what is the length of one side of the square in cm?',
    'The right answer is 6!',
    qs01p34RenderAnswers,
    qs01p34ReleaseResources
];

const qs01p35data = [
    '2/5 of the 50 animals in the coop are roasters and the rest are chickens. How many chickens are there in the coop?',
    'The right answer is 30!',
    qs01p35RenderAnswers,
    qs01p35ReleaseResources
];





// Randomize function
function randomizeQSArray(array) {
    return array.sort(() => Math.random() - 0.5);
};