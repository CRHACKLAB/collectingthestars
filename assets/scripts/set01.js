//------------------------------//
//   RENDER ANSWERS FUNCTIONS   //
//------------------------------//

// PLANET 1
function qs01p11RenderAnswers(challengeId) {
    console.log(`qs01p11RenderAnswers`);
    // Line Segment
    segmentEl = document.createElement('a-entity');
    segmentEl.setAttribute('geometry', {
    primitive: 'plane',
    height: 3,
    width: 0.1
    });
    segmentEl.object3D.position.set(0, 0.5, 0.01);
    segmentEl.object3D.rotation.z = THREE.MathUtils.degToRad(90);
    segmentEl.setAttribute('material','color','black');
    // Point A
    pointAEl = document.createElement('a-circle');
    pointAEl.setAttribute('id','pointA');
    pointAEl.setAttribute('radius','0.2');
    pointAEl.setAttribute('color','black');
    //segmentEl.object3D.position.set(0, 1.5, 0.01);
    //segmentEl.object3D.rotation.z = THREE.MathUtils.degToRad(-90);
    pointAEl.setAttribute('position','0 1.5 0.01');
    pointAEl.setAttribute('rotation','0 0 -90');
    pointAEl.setAttribute(`${challengeId}-manager`, null);
    // Point B
    pointBEl = document.createElement('a-circle');
    pointBEl.setAttribute('id','pointB');
    pointBEl.setAttribute('radius','0.2');
    pointBEl.setAttribute('color','black');
    pointBEl.setAttribute('position','0 0 0.01');
    pointBEl.setAttribute('rotation','0 0 -90');
    pointBEl.setAttribute(`${challengeId}-manager`, null);
    // Point C
    pointCEl = document.createElement('a-circle');
    pointCEl.setAttribute('id','pointC');
    pointCEl.setAttribute('radius','0.2');
    pointCEl.setAttribute('color','black');
    pointCEl.setAttribute('position','0 -1.5 0.01');
    pointCEl.setAttribute('rotation','0 0 -90');
    pointCEl.setAttribute(`${challengeId}-manager`, null);
    //console.log(`pointCEl's components: ${JSON.stringify(pointCEl.components)}`);
    //console.log(AFRAME.utils.entity.getComponentProperty(pointCEl, 'challengep11-manager'));
    //
    segmentEl.appendChild(pointAEl);
    segmentEl.appendChild(pointBEl);
    segmentEl.appendChild(pointCEl);
    //
    return segmentEl;
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
    curvedLine = document.createElement('a-image');
    curvedLine.setAttribute('id','p12-curvedline');
    curvedLine.setAttribute('src','#curvedline');
    curvedLine.setAttribute('position','-4 0 0.01');
    curvedLine.setAttribute(`${challengeId}-manager`,null);
    //
    straightLine = document.createElement('a-image');
    straightLine.setAttribute('id','p12-straightline');
    straightLine.setAttribute('src','#straightline');
    straightLine.setAttribute('position','-2 0 0.01');
    straightLine.setAttribute(`${challengeId}-manager`,null);
    //
    dottedLine = document.createElement('a-image');
    dottedLine.setAttribute('id','p12-dottedline');
    dottedLine.setAttribute('src','#dottedline');
    dottedLine.setAttribute('position','2 0 0.01');
    dottedLine.setAttribute(`${challengeId}-manager`,null);
    //
    circle = document.createElement('a-image');
    circle.setAttribute('id','p12-circle');
    circle.setAttribute('src','#circle');
    circle.setAttribute('position','4 0 0.01');
    circle.setAttribute(`${challengeId}-manager`,null);
    //
    anchorEl.appendChild(curvedLine);
    anchorEl.appendChild(straightLine);
    anchorEl.appendChild(dottedLine);
    anchorEl.appendChild(circle);
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
    // Mainline
    mainline = document.createElement('a-entity');
    mainline.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.1,
        width: 7
    });
    mainline.object3D.position.set(0, 0.8, 0.01);
    mainline.setAttribute('material','color', 'black');
    mainline.setAttribute('id','p13-line');
    // Ticks
    tick1 = document.createElement('a-entity');
    tick1.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.2,
        width: 0.03
    });
    tick1.object3D.position.set(-3.5, 0.05, 0);
    tick1.setAttribute('material','color', 'black');
    //
    tick2 = document.createElement('a-entity');
    tick2.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.2,
        width: 0.03
    });
    tick2.object3D.position.set(-2.5, 0.05, 0);
    tick2.setAttribute('material','color', 'black');
    //
    tick3 = document.createElement('a-entity');
    tick3.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.2,
        width: 0.03
    });
    tick3.object3D.position.set(-1.5, 0.05, 0);
    tick3.setAttribute('material','color', 'black');
    //
    tick4 = document.createElement('a-entity');
    tick4.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.2,
        width: 0.03
    });
    tick4.object3D.position.set(-0.5, 0.05, 0);
    tick4.setAttribute('material','color', 'black');
    //
    tick5 = document.createElement('a-entity');
    tick5.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.2,
        width: 0.03
    });
    tick5.object3D.position.set(0.5, 0.05, 0);
    tick5.setAttribute('material','color', 'black');
    //
    tick6 = document.createElement('a-entity');
    tick6.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.2,
        width: 0.03
    });
    tick6.object3D.position.set(1.5, 0.05, 0);
    tick6.setAttribute('material','color', 'black');
    //
    tick7 = document.createElement('a-entity');
    tick7.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.2,
        width: 0.03
    });
    tick7.object3D.position.set(2.5, 0.05, 0);
    tick7.setAttribute('material','color', 'black');
    //
    tick8 = document.createElement('a-entity');
    tick8.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.2,
        width: 0.03
    });
    tick8.object3D.position.set(3.5, 0.05, 0);
    tick8.setAttribute('material','color', 'black');
    // Labels
    labelA = document.createElement('a-text');
    labelA.setAttribute('value','A');
    labelA.setAttribute('align','center');
    labelA.setAttribute('position','0 0.3 0');
    labelA.setAttribute('color','black');
    labelA.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    labelB = document.createElement('a-text');
    labelB.setAttribute('value','B');
    labelB.setAttribute('align','center');
    labelB.setAttribute('position','0 0.3 0');
    labelB.setAttribute('color','black');
    labelB.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    labelC = document.createElement('a-text');
    labelC.setAttribute('value','C');
    labelC.setAttribute('align','center');
    labelC.setAttribute('position','0 0.3 0');
    labelC.setAttribute('color','black');
    labelC.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Pick the right answer:');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','-3.1 0.3 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    button3 = document.createElement('a-entity');
    button3.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button3.object3D.position.set(-1.2, -0.7, 0);
    button3.setAttribute('material','color', 'black');
    button3.setAttribute(`${challengeId}-manager`, null);
    button3.setAttribute('id', 'p13-a3');
    //
    button4 = document.createElement('a-entity');
    button4.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button4.object3D.position.set(-0.4, -0.7, 0);
    button4.setAttribute('material','color', 'black');
    button4.setAttribute(`${challengeId}-manager`, null);
    button4.setAttribute('id', 'p13-a4');
    //
    button7 = document.createElement('a-entity');
    button7.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button7.object3D.position.set(0.4, -0.7, 0);
    button7.setAttribute('material','color', 'black');
    button7.setAttribute(`${challengeId}-manager`, null);
    button7.setAttribute('id', 'p13-a7');
    //
    button9 = document.createElement('a-entity');
    button9.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button9.object3D.position.set(1.2, -0.7, 0);
    button9.setAttribute('material','color', 'black');
    button9.setAttribute(`${challengeId}-manager`, null);
    button9.setAttribute('id', 'p13-a9');
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
    a7 = document.createElement('a-text');
    a7.setAttribute('value','7');
    a7.setAttribute('align','center');
    a7.setAttribute('position','0 0 0.01');
    a7.setAttribute('color','white');
    a7.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    a9 = document.createElement('a-text');
    a9.setAttribute('value','9');
    a9.setAttribute('align','center');
    a9.setAttribute('position','0 0 0.01');
    a9.setAttribute('color','white');
    a9.setAttribute('font', './assets/fonts/Exo2Bold.fnt');     

    // Composition
    tick1.appendChild(labelA);
    tick5.appendChild(labelB);
    tick8.appendChild(labelC);
    mainline.appendChild(tick1);
    mainline.appendChild(tick2);
    mainline.appendChild(tick3);
    mainline.appendChild(tick4);
    mainline.appendChild(tick5);
    mainline.appendChild(tick6);
    mainline.appendChild(tick7);
    mainline.appendChild(tick8);
    button3.appendChild(a3);
    button4.appendChild(a4);
    button7.appendChild(a7);
    button9.appendChild(a9);
    anchorEl.appendChild(mainline);
    anchorEl.appendChild(pickRightAnswerLabel);
    anchorEl.appendChild(button3);
    anchorEl.appendChild(button4);
    anchorEl.appendChild(button7);
    anchorEl.appendChild(button9);
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
    // Mainline
    mainline = document.createElement('a-entity');
    mainline.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.1,
        width: 10
    });
    mainline.object3D.position.set(0, 0.8, 0.01);
    mainline.setAttribute('material','color', 'black');
    mainline.setAttribute('id','p14-line');
    // Ticks
    tick1 = document.createElement('a-entity');
    tick1.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.2,
        width: 0.03
    });
    tick1.object3D.position.set(-5, 0.05, 0);
    tick1.setAttribute('material','color', 'black');
    //
    tick2 = document.createElement('a-entity');
    tick2.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.2,
        width: 0.03
    });
    tick2.object3D.position.set(-4, 0.05, 0);
    tick2.setAttribute('material','color', 'black');
    //
    tick3 = document.createElement('a-entity');
    tick3.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.2,
        width: 0.03
    });
    tick3.object3D.position.set(-3, 0.05, 0);
    tick3.setAttribute('material','color', 'black');
    //
    tick4 = document.createElement('a-entity');
    tick4.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.2,
        width: 0.03
    });
    tick4.object3D.position.set(-2, 0.05, 0);
    tick4.setAttribute('material','color', 'black');
    //
    tick5 = document.createElement('a-entity');
    tick5.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.2,
        width: 0.03
    });
    tick5.object3D.position.set(-1, 0.05, 0);
    tick5.setAttribute('material','color', 'black');
    //
    tick6 = document.createElement('a-entity');
    tick6.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.2,
        width: 0.03
    });
    tick6.object3D.position.set(0, 0.05, 0);
    tick6.setAttribute('material','color', 'black');
    //
    tick7 = document.createElement('a-entity');
    tick7.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.2,
        width: 0.03
    });
    tick7.object3D.position.set(1, 0.05, 0);
    tick7.setAttribute('material','color', 'black');
    //
    tick8 = document.createElement('a-entity');
    tick8.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.2,
        width: 0.03
    });
    tick8.object3D.position.set(2, 0.05, 0);
    tick8.setAttribute('material','color', 'black');
    //
    tick9 = document.createElement('a-entity');
    tick9.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.2,
        width: 0.03
    });
    tick9.object3D.position.set(3, 0.05, 0);
    tick9.setAttribute('material','color', 'black');
    //
    tick10 = document.createElement('a-entity');
    tick10.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.2,
        width: 0.03
    });
    tick10.object3D.position.set(4, 0.05, 0);
    tick10.setAttribute('material','color', 'black');
    //
    tick11 = document.createElement('a-entity');
    tick11.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.2,
        width: 0.03
    });
    tick11.object3D.position.set(5, 0.05, 0);
    tick11.setAttribute('material','color', 'black');
    //
    labelA = document.createElement('a-text');
    labelA.setAttribute('value','A');
    labelA.setAttribute('align','center');
    labelA.setAttribute('position','0 0.3 0');
    labelA.setAttribute('color','black');
    labelA.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    labelB = document.createElement('a-text');
    labelB.setAttribute('value','B');
    labelB.setAttribute('align','center');
    labelB.setAttribute('position','0 0.3 0');
    labelB.setAttribute('color','black');
    labelB.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    labelM = document.createElement('a-text');
    labelM.setAttribute('value','M');
    labelM.setAttribute('align','center');
    labelM.setAttribute('position','0 0.3 0');
    labelM.setAttribute('color','black');
    labelM.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Pick the right answer:');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','-3.1 0.3 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    button5 = document.createElement('a-entity');
    button5.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button5.object3D.position.set(-1.2, -0.7, 0);
    button5.setAttribute('material','color', 'black');
    button5.setAttribute(`${challengeId}-manager`, null);
    button5.setAttribute('id', 'p14-a5');
    //
    button10 = document.createElement('a-entity');
    button10.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button10.object3D.position.set(-0.4, -0.7, 0);
    button10.setAttribute('material','color', 'black');
    button10.setAttribute(`${challengeId}-manager`, null);
    button10.setAttribute('id', 'p14-a10');
    //
    button12 = document.createElement('a-entity');
    button12.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button12.object3D.position.set(0.4, -0.7, 0);
    button12.setAttribute('material','color', 'black');
    button12.setAttribute(`${challengeId}-manager`, null);
    button12.setAttribute('id', 'p14-a12');
    //
    button20 = document.createElement('a-entity');
    button20.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 0.6
    });
    button20.object3D.position.set(1.2, -0.7, 0);
    button20.setAttribute('material','color', 'black');
    button20.setAttribute(`${challengeId}-manager`, null);
    button20.setAttribute('id', 'p14-a20');
    //
    a5 = document.createElement('a-text');
    a5.setAttribute('value','5');
    a5.setAttribute('align','center');
    a5.setAttribute('position','0 0 0.01');
    a5.setAttribute('color','white');
    a5.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //   
    a10 = document.createElement('a-text');
    a10.setAttribute('value','10');
    a10.setAttribute('align','center');
    a10.setAttribute('position','0 0 0.01');
    a10.setAttribute('color','white');
    a10.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    a12 = document.createElement('a-text');
    a12.setAttribute('value','12');
    a12.setAttribute('align','center');
    a12.setAttribute('position','0 0 0.01');
    a12.setAttribute('color','white');
    a12.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    a20 = document.createElement('a-text');
    a20.setAttribute('value','20');
    a20.setAttribute('align','center');
    a20.setAttribute('position','0 0 0.01');
    a20.setAttribute('color','white');
    a20.setAttribute('font', './assets/fonts/Exo2Bold.fnt'); 
    // Composition
    tick1.appendChild(labelA);
    tick6.appendChild(labelM);
    tick11.appendChild(labelB);
    mainline.appendChild(tick1);
    mainline.appendChild(tick2);
    mainline.appendChild(tick3);
    mainline.appendChild(tick4);
    mainline.appendChild(tick5);
    mainline.appendChild(tick6);
    mainline.appendChild(tick7);
    mainline.appendChild(tick8);
    mainline.appendChild(tick9);
    mainline.appendChild(tick10);
    mainline.appendChild(tick11);
    //
    button5.appendChild(a5);
    button10.appendChild(a10);
    button12.appendChild(a12);
    button20.appendChild(a20);
    //
    anchorEl.appendChild(button5);
    anchorEl.appendChild(button10);
    anchorEl.appendChild(button12);
    anchorEl.appendChild(button20);
    anchorEl.appendChild(pickRightAnswerLabel);
    anchorEl.appendChild(mainline);
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
    aligneddots1 = document.createElement('a-image');
    aligneddots1.setAttribute('id','p15-aligneddots1');
    aligneddots1.setAttribute('src','#aligneddots1');
    aligneddots1.setAttribute('position','-4 0 0.01');
    aligneddots1.setAttribute(`${challengeId}-manager`,null);
    //
    aligneddots2 = document.createElement('a-image');
    aligneddots2.setAttribute('id','p15-aligneddots2');
    aligneddots2.setAttribute('src','#aligneddots2');
    aligneddots2.setAttribute('position','-2 0 0.01');
    aligneddots2.setAttribute(`${challengeId}-manager`,null);
    //
    aligneddots3 = document.createElement('a-image');
    aligneddots3.setAttribute('id','p15-aligneddots3');
    aligneddots3.setAttribute('src','#aligneddots3');
    aligneddots3.setAttribute('position','4 0 0.01');
    aligneddots3.setAttribute(`${challengeId}-manager`,null);
    //
    notaligneddots = document.createElement('a-image');
    notaligneddots.setAttribute('id','p15-notaligneddots');
    notaligneddots.setAttribute('src','#aligneddotsnot');
    notaligneddots.setAttribute('position','2 0 0.01');
    notaligneddots.setAttribute(`${challengeId}-manager`,null);
    // Composition
    anchorEl.appendChild(aligneddots1);
    anchorEl.appendChild(aligneddots2);
    anchorEl.appendChild(aligneddots3);
    anchorEl.appendChild(notaligneddots);
    //
    //console.log(anchorEl);
    return anchorEl;
}

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
    triangleisosceles = document.createElement('a-image');
    triangleisosceles.setAttribute('id','p21-isosceles');
    triangleisosceles.setAttribute('src','#triangleisosceles');
    triangleisosceles.setAttribute('position','0 1 0.01');
    triangleisosceles.setAttribute(`${challengeId}-manager`,null);
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Pick the right answer:');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 0 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    buttonR = document.createElement('a-entity');
    buttonR.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1
    });
    buttonR.object3D.position.set(-1.2, -0.7, 0);
    buttonR.setAttribute('material','color', 'black');
    buttonR.setAttribute(`${challengeId}-manager`, null);
    buttonR.setAttribute('id', 'p21-right');
    //
    buttonW1 = document.createElement('a-entity');
    buttonW1.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1
    });
    buttonW1.object3D.position.set(0, -0.7, 0);
    buttonW1.setAttribute('material','color', 'black');
    buttonW1.setAttribute(`${challengeId}-manager`, null);
    buttonW1.setAttribute('id', 'p21-wrong1');
    //
    buttonW2 = document.createElement('a-entity');
    buttonW2.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1
    });
    buttonW2.object3D.position.set(1.2, -0.7, 0);
    buttonW2.setAttribute('material','color', 'black');
    buttonW2.setAttribute(`${challengeId}-manager`, null);
    buttonW2.setAttribute('id', 'p21-wrong2');
    // 
    aR = document.createElement('a-text');
    aR.setAttribute('value','Isosceles');
    aR.setAttribute('align','center');
    aR.setAttribute('position','0 0 0.01');
    aR.setAttribute('scale','0.8 1 1');
    aR.setAttribute('color','white');
    aR.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    aW1 = document.createElement('a-text');
    aW1.setAttribute('value','Scalene');
    aW1.setAttribute('align','center');
    aW1.setAttribute('position','0 0 0.01');
    aW1.setAttribute('scale','0.8 1 1');
    aW1.setAttribute('color','white');
    aW1.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    aW2 = document.createElement('a-text');
    aW2.setAttribute('value','Rectangle');
    aW2.setAttribute('align','center');
    aW2.setAttribute('position','0 0 0.01');
    aW2.setAttribute('scale','0.8 1 1');
    aW2.setAttribute('color','white');
    aW2.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    // COMPOSITING
    buttonR.appendChild(aR);
    buttonW1.appendChild(aW1);
    buttonW2.appendChild(aW2);
    //
    pickRightAnswerLabel.appendChild(buttonR);
    pickRightAnswerLabel.appendChild(buttonW1);
    pickRightAnswerLabel.appendChild(buttonW2);
    //
    anchorEl.appendChild(triangleisosceles);
    anchorEl.appendChild(pickRightAnswerLabel);

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
    //
    square = document.createElement('a-image');
    square.setAttribute('id','p21-isosceles');
    square.setAttribute('src','#square');
    square.setAttribute('position','0 1 0.01');
    square.setAttribute(`${challengeId}-manager`,null);
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Pick the right answer:');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 0.3 0.01');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    buttonR = document.createElement('a-entity');
    buttonR.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.45,
        width: 1.6
    });
    buttonR.object3D.position.set(-2.8, -0.5, 0);
    buttonR.setAttribute('material','color', 'black');
    buttonR.setAttribute(`${challengeId}-manager`, null);
    buttonR.setAttribute('id', 'p22-right');
    //
    buttonW1 = document.createElement('a-entity');
    buttonW1.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.45,
        width: 1.6
    });
    buttonW1.object3D.position.set(-1, -0.5, 0);
    buttonW1.setAttribute('material','color', 'black');
    buttonW1.setAttribute(`${challengeId}-manager`, null);
    buttonW1.setAttribute('id', 'p22-wrong1');
    //
    buttonW2 = document.createElement('a-entity');
    buttonW2.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.45,
        width: 1.6
    });
    buttonW2.object3D.position.set(1, -0.5, 0);
    buttonW2.setAttribute('material','color', 'black');
    buttonW2.setAttribute(`${challengeId}-manager`, null);
    buttonW2.setAttribute('id', 'p22-wrong2');
    //
    buttonW3 = document.createElement('a-entity');
    buttonW3.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.45,
        width: 1.6
    });
    buttonW3.object3D.position.set(2.8, -0.5, 0);
    buttonW3.setAttribute('material','color', 'black');
    buttonW3.setAttribute(`${challengeId}-manager`, null);
    buttonW3.setAttribute('id', 'p22-wrong3');
    // 
    aR = document.createElement('a-text');
    aR.setAttribute('value','4 sides at 90°');
    aR.setAttribute('align','center');
    aR.setAttribute('position','0 0 0.01');
    aR.setAttribute('scale','0.8 1 1');
    aR.setAttribute('color','white');
    aR.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    aW1 = document.createElement('a-text');
    aW1.setAttribute('value','3 sides at 60°');
    aW1.setAttribute('align','center');
    aW1.setAttribute('position','0 0 0.01');
    aW1.setAttribute('scale','0.8 1 1');
    aW1.setAttribute('color','white');
    aW1.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    // 
    aW2 = document.createElement('a-text');
    aW2.setAttribute('value','4 sides at 60°');
    aW2.setAttribute('align','center');
    aW2.setAttribute('position','0 0 0.01');
    aW2.setAttribute('scale','0.8 1 1');
    aW2.setAttribute('color','white');
    aW2.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    aW3 = document.createElement('a-text');
    aW3.setAttribute('value','6 sides at 30°');
    aW3.setAttribute('align','center');
    aW3.setAttribute('position','0 0 0.01');
    aW3.setAttribute('scale','0.8 1 1');
    aW3.setAttribute('color','white');
    aW3.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    // COMPOSITING
    buttonR.appendChild(aR);
    buttonW1.appendChild(aW1);
    buttonW2.appendChild(aW2);
    buttonW3.appendChild(aW3);
    //
    pickRightAnswerLabel.appendChild(buttonR);
    pickRightAnswerLabel.appendChild(buttonW1);
    pickRightAnswerLabel.appendChild(buttonW2);
    pickRightAnswerLabel.appendChild(buttonW3);
    //
    anchorEl.appendChild(square);
    anchorEl.appendChild(pickRightAnswerLabel);

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
    p23Circle = document.createElement('a-circle');
    p23Circle.setAttribute('radius','1');
    p23Circle.setAttribute('color','black');
    p23Circle.setAttribute('position','0 0 0.01');
    // pointAEl.setAttribute('rotation','0 0 -90');
    //pointAEl.setAttribute(`${challengeId}-manager`, null); 
    // pointAEl.setAttribute('id','pointA');
    //
    p23InnerDisk = document.createElement('a-circle');
    console.log(p23InnerDisk);
    p23InnerDisk.setAttribute('radius','0.95');
    p23InnerDisk.setAttribute('color','white');
    console.log(p23InnerDisk);
    p23InnerDisk.setAttribute('position','0 0 0.01');
    //
    p23Radius = document.createElement('a-entity');
    p23Radius.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.995,
        width: 0.02
    });
    p23Radius.object3D.position.set(0.245, -0.427, 0.01);
    p23Radius.setAttribute('rotation','0 0 30');
    p23Radius.setAttribute('material','color', 'black');
    p23Radius.setAttribute(`${challengeId}-manager`, null);
    p23Radius.setAttribute('id','p23-radius');
    //
    p23Diameter = document.createElement('a-entity');
    p23Diameter.setAttribute('geometry', {
        primitive: 'plane',
        height: 1.99,
        width: 0.02
    });
    p23Diameter.object3D.position.set(0, 0, 0.01);
    p23Diameter.setAttribute('rotation','0 0 90');
    p23Diameter.setAttribute('material','color', 'black');
    p23Diameter.setAttribute(`${challengeId}-manager`, null);
    p23Diameter.setAttribute('id','p23-diameter');
    //
    p23Chord = document.createElement('a-entity');
    p23Chord.setAttribute('geometry', {
        primitive: 'plane',
        height: 1.56,
        width: 0.02
    });
    p23Chord.object3D.position.set(0, 0.6, 0.01);
    p23Chord.setAttribute('rotation','0 0 90');
    p23Chord.setAttribute('material','color', 'black');
    p23Chord.setAttribute(`${challengeId}-manager`, null);
    p23Chord.setAttribute('id','p23-chord');
    //
    // COMPOSITING
    p23InnerDisk.appendChild(p23Radius);
    p23InnerDisk.appendChild(p23Diameter);
    p23InnerDisk.appendChild(p23Chord);
    //
    p23Circle.appendChild(p23InnerDisk);
    //
    anchorEl.appendChild(p23Circle);

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
    p24Border = document.createElement('a-entity');
    p24Border.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.8,
        width: 1.1
    });
    p24Border.object3D.position.set(0, 1, 0.01);
    p24Border.setAttribute('material','color', 'black');
    //
    p24InnerSquare = document.createElement('a-entity');
    p24InnerSquare.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.74,
        width: 1
    });
    p24InnerSquare.object3D.position.set(0, 0, 0.01);
    p24InnerSquare.setAttribute('material','color', 'white');
    //
    p24ButtonW = document.createElement('a-entity');
    p24ButtonW.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1
    });
    p24ButtonW.object3D.position.set(-0.7, -0.5, 0.01);
    p24ButtonW.setAttribute('material','color', 'black');
    p24ButtonW.setAttribute(`${challengeId}-manager`, null);
    p24ButtonW.setAttribute('id', 'p24-true');
    //
    p24ButtonR = document.createElement('a-entity');
    p24ButtonR.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.6,
        width: 1
    });
    p24ButtonR.object3D.position.set(0.7, -0.5, 0.01);
    p24ButtonR.setAttribute('material','color', 'black');
    p24ButtonR.setAttribute(`${challengeId}-manager`, null);
    p24ButtonR.setAttribute('id', 'p24-false');
    //
    aTrue = document.createElement('a-text');
    aTrue.setAttribute('value','True');
    aTrue.setAttribute('align','center');
    aTrue.setAttribute('position','0 0 0.01');
    aTrue.setAttribute('scale','0.8 1 1');
    aTrue.setAttribute('color','white');
    aTrue.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    aFalse = document.createElement('a-text');
    aFalse.setAttribute('value','False');
    aFalse.setAttribute('align','center');
    aFalse.setAttribute('position','0 0 0.01');
    aFalse.setAttribute('scale','0.8 1 1');
    aFalse.setAttribute('color','white');
    aFalse.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    // COMPOSITING
    p24ButtonW.appendChild(aTrue);
    p24ButtonR.appendChild(aFalse);
    p24Border.appendChild(p24InnerSquare);
    //
    anchorEl.appendChild(p24ButtonW);
    anchorEl.appendChild(p24ButtonR);
    anchorEl.appendChild(p24Border);

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
    p25Square = document.createElement('a-image');
    p25Square.setAttribute('id','p25-square');
    p25Square.setAttribute('src','#square');
    p25Square.setAttribute('position','-3 1 0.01');
    p25Square.setAttribute(`${challengeId}-manager`,null);
    //
    p25Rectangle = document.createElement('a-image');
    p25Rectangle.setAttribute('id','p25-rectangle');
    p25Rectangle.setAttribute('src','#rectangle');
    p25Rectangle.setAttribute('position','-1 1 0.01');
    p25Rectangle.setAttribute(`${challengeId}-manager`,null);
    //
    p25Triangle = document.createElement('a-image');
    p25Triangle.setAttribute('id','p25-triangle');
    p25Triangle.setAttribute('src','#triangleisosceles');
    p25Triangle.setAttribute('position','1 1 0.01');
    p25Triangle.setAttribute(`${challengeId}-manager`,null);
    //
    p25Rhombus = document.createElement('a-image');
    p25Rhombus.setAttribute('id','p25-rhombus');
    p25Rhombus.setAttribute('src','#rhombus');
    p25Rhombus.setAttribute('position','3 1 0.01');
    p25Rhombus.setAttribute(`${challengeId}-manager`,null);
    //
    // COMPOSITING
    anchorEl.appendChild(p25Square);
    anchorEl.appendChild(p25Rectangle);
    anchorEl.appendChild(p25Triangle);
    anchorEl.appendChild(p25Rhombus);

    return anchorEl;
};

// Planet 3
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
    p31Isosceles = document.createElement('a-image');
    p31Isosceles.setAttribute('id','p31-isosceles');
    p31Isosceles.setAttribute('src','#isosceles');
    p31Isosceles.setAttribute('position','-2 1 0.01');
    p31Isosceles.setAttribute('scale','1.5 1.5 1');
    p31Isosceles.setAttribute(`${challengeId}-manager`,null);
    //
    p31Equilateral = document.createElement('a-image');
    p31Equilateral.setAttribute('id','p31-equilateral');
    p31Equilateral.setAttribute('src','#equilateral');
    p31Equilateral.setAttribute('position','2 1 0.01');
    p31Equilateral.setAttribute('scale','1.5 1.5 1');
    p31Equilateral.setAttribute(`${challengeId}-manager`,null);
    //
    p31Scalene = document.createElement('a-image');
    p31Scalene.setAttribute('id','p31-scalene');
    p31Scalene.setAttribute('src','#scalene');
    p31Scalene.setAttribute('position','0 1 0.01');
    p31Scalene.setAttribute('scale','1.5 1.5 1');
    p31Scalene.setAttribute(`${challengeId}-manager`,null);
    //
    aIsosceles = document.createElement('a-text');
    aIsosceles.setAttribute('value','Isosceles');
    aIsosceles.setAttribute('align','center');
    aIsosceles.setAttribute('position','0 -0.5 0.01');
    aIsosceles.setAttribute('color','black');
    aIsosceles.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    aEquilateral = document.createElement('a-text');
    aEquilateral.setAttribute('value','Equilateral');
    aEquilateral.setAttribute('align','center');
    aEquilateral.setAttribute('position','0 -0.5 0.01');
    aEquilateral.setAttribute('color','black');
    aEquilateral.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    aScalene = document.createElement('a-text');
    aScalene.setAttribute('value','Scalene');
    aScalene.setAttribute('align','center');
    aScalene.setAttribute('position','0 -0.5 0.01');
    aScalene.setAttribute('color','black');
    aScalene.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    // COMPOSITING
    p31Isosceles.appendChild(aIsosceles);
    p31Equilateral.appendChild(aEquilateral);
    p31Scalene.appendChild(aScalene);
    //
    anchorEl.appendChild(p31Isosceles);
    anchorEl.appendChild(p31Equilateral);
    anchorEl.appendChild(p31Scalene);

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

    p32Circle = document.createElement('a-circle');
    p32Circle.setAttribute('radius','1');
    p32Circle.setAttribute('color','white');
    p32Circle.setAttribute('position','0 0 0.01');
    //
    p32Circumference = document.createElement('a-circle');
    p32Circumference.setAttribute('id','p32-circumference');
    p32Circumference.setAttribute('radius','1');
    p32Circumference.setAttribute('color','black');
    p32Circumference.setAttribute('position','0 0 0.01');
    p32Circumference.setAttribute('rotation','0 0 -90');
    p32Circumference.setAttribute(`${challengeId}-manager`, null);
    //
    p32WhiteCircle = document.createElement('a-entity');
    console.log("WhiteCircle created");
    console.log(p32WhiteCircle);
    p32WhiteCircle.setAttribute('geometry', {
        primitive: 'circle',
        radius: 0.95
    });
    console.log("Geometry");
    console.log(p32WhiteCircle);
    p32WhiteCircle.setAttribute('material', {
        color: 'white',
        side: 'double'
    });
    console.log("Material");
    console.log(p32WhiteCircle);
    p32WhiteCircle.setAttribute('id','p32-whitecircle');
    p32WhiteCircle.setAttribute('position','0 0 0.02');
    p32WhiteCircle.setAttribute(`${challengeId}-manager`, null);
    console.log(p32WhiteCircle);
    //
    p32Radius = document.createElement('a-entity');
    p32Radius.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.995,
        width: 0.05
    });
    p32Radius.object3D.position.set(0.245, -0.427, 0.01);
    p32Radius.setAttribute('rotation','0 0 30');
    p32Radius.setAttribute('material','color', 'black');
    p32Radius.setAttribute(`${challengeId}-manager`, null);
    p32Radius.setAttribute('id','p32-radius');
    //
    p32Diameter = document.createElement('a-entity');
    p32Diameter.setAttribute('geometry', {
        primitive: 'plane',
        height: 1.99,
        width: 0.05
    });
    p32Diameter.object3D.position.set(0, 0, 0.01);
    p32Diameter.setAttribute('rotation','0 0 90');
    p32Diameter.setAttribute('material','color', 'black');
    p32Diameter.setAttribute(`${challengeId}-manager`, null);
    p32Diameter.setAttribute('id','p32-diameter');
    //
    aCircumference = document.createElement('a-text');
    aCircumference.setAttribute('value','Circumference');
    aCircumference.setAttribute('align','center');
    aCircumference.setAttribute('position','0.4 1.2 0.01');
    aCircumference.setAttribute('scale','0.9 0.9 1');
    aCircumference.setAttribute('color','black');
    aCircumference.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    aRadius = document.createElement('a-text');
    aRadius.setAttribute('value','Radius');
    aRadius.setAttribute('align','center');
    aRadius.setAttribute('position','-0.4 0 0.01');
    aRadius.setAttribute('rotation','0 0 -30');
    aRadius.setAttribute('scale','0.9 0.9 1');
    aRadius.setAttribute('color','black');
    aRadius.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    aDiameter = document.createElement('a-text');
    aDiameter.setAttribute('value','Diameter');
    aDiameter.setAttribute('align','center');
    aDiameter.setAttribute('position','0.15 0.15 0.01');
    aDiameter.setAttribute('rotation','0 0 -90');
    aDiameter.setAttribute('scale','0.9 0.9 1');
    aDiameter.setAttribute('color','black');
    aDiameter.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    // COMPOSITING
    p32Radius.appendChild(aRadius);
    p32Diameter.appendChild(aDiameter);
    //
    p32WhiteCircle.appendChild(aCircumference);
    p32WhiteCircle.appendChild(p32Radius);
    p32WhiteCircle.appendChild(p32Diameter);
    //
    anchorEl.appendChild(p32Circumference);
    anchorEl.appendChild(p32WhiteCircle);

    

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
    p33Rectangle = document.createElement('a-image');
    p33Rectangle.setAttribute('id','p33-rectangle');
    p33Rectangle.setAttribute('src','#rectangle');
    p33Rectangle.setAttribute('position','0 0.3 0.01');
    p33Rectangle.setAttribute('scale','1.5 1.5 1');
    //
    p33False1 = document.createElement('a-entity');
    p33False1.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.45,
        width: 3.8
    });
    p33False1.object3D.position.set(-4, 0, 0.01);
    p33False1.setAttribute('material','color', 'black');
    p33False1.setAttribute(`${challengeId}-manager`,null);
    p33False1.setAttribute('id','p33-false1');
    //
    p33True = document.createElement('a-entity');
    p33True.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.45,
        width: 3.8
    });
    p33True.object3D.position.set(0, 0, 0.01);
    p33True.setAttribute('material','color', 'black');
    p33True.setAttribute(`${challengeId}-manager`,null);
    p33True.setAttribute('id','p33-true');
    //
    p33False2 = document.createElement('a-entity');
    p33False2.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.45,
        width: 3.8
    });
    p33False2.object3D.position.set(4, 0, 0.01);
    p33False2.setAttribute('material','color', 'black');
    p33False2.setAttribute(`${challengeId}-manager`,null);
    p33False2.setAttribute('id','p33-false2');
    //
    aFalse1 = document.createElement('a-text');
    aFalse1.setAttribute('value','All sides are of equal length.');
    aFalse1.setAttribute('align','center');
    aFalse1.setAttribute('position','0 0 0.01');
    aFalse1.setAttribute('scale','0.9 0.9 1');
    aFalse1.setAttribute('color','white');
    aFalse1.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    aTrue = document.createElement('a-text');
    aTrue.setAttribute('value','The opposite sides are of equal length.');
    aTrue.setAttribute('align','center');
    aTrue.setAttribute('position','0 0 0.01');
    aTrue.setAttribute('scale','0.9 0.9 1');
    aTrue.setAttribute('color','white');
    aTrue.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    aFalse2 = document.createElement('a-text');
    aFalse2.setAttribute('value','It has five sides.');
    aFalse2.setAttribute('align','center');
    aFalse2.setAttribute('position','0 0 0.01');
    aFalse2.setAttribute('scale','0.9 0.9 1');
    aFalse2.setAttribute('color','white');
    aFalse2.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    // COMPOSITING
    p33False1.appendChild(aFalse1);
    p33True.appendChild(aTrue);
    p33False2.appendChild(aFalse2);
    //
    anchorEl.appendChild(p33False1);
    anchorEl.appendChild(p33True);
    anchorEl.appendChild(p33False2);

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
    p34Square = document.createElement('a-image');
    p34Square.setAttribute('src','#square');
    p34Square.setAttribute('position','-3 0 0.01');
    p34Square.setAttribute('scale','1.5 1.5 1');
    p34Square.setAttribute(`${challengeId}-manager`,null);
    p34Square.setAttribute('id','p34-square');
    //
    p34Rectangle = document.createElement('a-image');
    p34Rectangle.setAttribute('src','#rectangle');
    p34Rectangle.setAttribute('position','-1 0 0.01');
    p34Rectangle.setAttribute('scale','1.5 1.5 1');
    p34Rectangle.setAttribute(`${challengeId}-manager`,null);
    p34Rectangle.setAttribute('id','p34-rectangle');
    //
    p34Rhombus = document.createElement('a-image');
    p34Rhombus.setAttribute('src','#rhombus');
    p34Rhombus.setAttribute('position','1 0 0.01');
    p34Rhombus.setAttribute('scale','1.5 1.5 1');
    p34Rhombus.setAttribute(`${challengeId}-manager`,null);
    p34Rhombus.setAttribute('id','p34-rhombus');
    //
    p34Parallelogram = document.createElement('a-image');
    p34Parallelogram.setAttribute('src','#parallelogram');
    p34Parallelogram.setAttribute('position','3 0 0.01');
    p34Parallelogram.setAttribute('scale','1.5 1.5 1');
    p34Parallelogram.setAttribute(`${challengeId}-manager`,null);
    p34Parallelogram.setAttribute('id','p34-parallelogram');
    //
    //COMPOSITING
    anchorEl.appendChild(p34Square);
    anchorEl.appendChild(p34Rectangle);
    anchorEl.appendChild(p34Rhombus);
    anchorEl.appendChild(p34Parallelogram);

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
    p35Square = document.createElement('a-image');
    p35Square.setAttribute('src','#square');
    p35Square.setAttribute('position','0 0.7 0.01');
    p35Square.setAttribute('scale','1.5 1.5 1');
    //
    pickRightAnswerLabel = document.createElement('a-text');
    pickRightAnswerLabel.setAttribute('value','Pick the right answer:');
    pickRightAnswerLabel.setAttribute('align','center');
    pickRightAnswerLabel.setAttribute('position','0 -0.3 0.01');
    pickRightAnswerLabel.setAttribute('scale','1.2 1.2 1');
    pickRightAnswerLabel.setAttribute('color','black');
    pickRightAnswerLabel.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    p35Wrong1 = document.createElement('a-entity');
    p35Wrong1.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.45,
        width: 0.5
    });
    p35Wrong1.object3D.position.set(-1.5, -0.6, 0);
    p35Wrong1.setAttribute('material','color', 'black');
    p35Wrong1.setAttribute(`${challengeId}-manager`, null);
    p35Wrong1.setAttribute('id', 'p35-wrong1');
    //
    p35Right = document.createElement('a-entity');
    p35Right.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.45,
        width: 0.5
    });
    p35Right.object3D.position.set(-0.5, -0.6, 0);
    p35Right.setAttribute('material','color', 'black');
    p35Right.setAttribute(`${challengeId}-manager`, null);
    p35Right.setAttribute('id', 'p35-right');
    //
    p35Wrong2 = document.createElement('a-entity');
    p35Wrong2.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.45,
        width: 0.5
    });
    p35Wrong2.object3D.position.set(0.5, -0.6, 0);
    p35Wrong2.setAttribute('material','color', 'black');
    p35Wrong2.setAttribute(`${challengeId}-manager`, null);
    p35Wrong2.setAttribute('id', 'p35-wrong1');
    //
    p35Wrong3 = document.createElement('a-entity');
    p35Wrong3.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.45,
        width: 0.5
    });
    p35Wrong3.object3D.position.set(1.5, -0.6, 0);
    p35Wrong3.setAttribute('material','color', 'black');
    p35Wrong3.setAttribute(`${challengeId}-manager`, null);
    p35Wrong3.setAttribute('id', 'p35-wrong3');
    //
    aWrong1 = document.createElement('a-text');
    aWrong1.setAttribute('value','180°');
    aWrong1.setAttribute('align','center');
    aWrong1.setAttribute('position','0 0 0.01');
    aWrong1.setAttribute('color','white');
    aWrong1.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    aRight = document.createElement('a-text');
    aRight.setAttribute('value','360°');
    aRight.setAttribute('align','center');
    aRight.setAttribute('position','0 0 0.01');
    aRight.setAttribute('color','white');
    aRight.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    aWrong2 = document.createElement('a-text');
    aWrong2.setAttribute('value','135°');
    aWrong2.setAttribute('align','center');
    aWrong2.setAttribute('position','0 0 0.01');
    aWrong2.setAttribute('color','white');
    aWrong2.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    aWrong3 = document.createElement('a-text');
    aWrong3.setAttribute('value','900°');
    aWrong3.setAttribute('align','center');
    aWrong3.setAttribute('position','0 0 0.01');
    aWrong3.setAttribute('color','white');
    aWrong3.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
    //
    // COMPOSITING
    p35Wrong1.appendChild(aWrong1);
    p35Right.appendChild(aRight);
    p35Wrong2.appendChild(aWrong2);
    p35Wrong3.appendChild(aWrong3);
    //
    pickRightAnswerLabel.appendChild(p35Wrong1);
    pickRightAnswerLabel.appendChild(p35Right);
    pickRightAnswerLabel.appendChild(p35Wrong2);
    pickRightAnswerLabel.appendChild(p35Wrong3);
    //
    anchorEl.appendChild(pickRightAnswerLabel);
    anchorEl.appendChild(p35Square);

    return anchorEl;
};

//------------------------------//
// RESOURCES RELEASE FUNCTIONS  //
//------------------------------//

// Planet 1
function qs01p11ReleaseResources(el, nextChallengeButton, challengeManager, pointsTouched) {
    console.log(`qs01p11ReleaseResources`);
    /*
    console.log(document.querySelector('a-scene').systems['challengep11-manager']['data']);
    console.log(document.querySelector('a-scene').systems['challengep12-manager']['data']);
    console.log(document.querySelector('a-scene').systems['challengep13-manager']['data']);
    console.log(document.querySelector('a-scene').systems['challengep14-manager']['data']);
    console.log(document.querySelector('a-scene').systems['challengep15-manager']['data']);
    */
    const challengeNumber = el.closest('[id^="challengep"]').id.slice(-2);
    el.removeAttribute('class');
    el.setAttribute('color', 'green');
    console.log(`${pointsTouched} before addition`)
    pointsTouched = pointsTouched + 1;
    if (pointsTouched !== 0 && (pointsTouched % 3 === 0)) {
        nextChallengeButton.setAttribute('class', 'interactive');
        nextChallengeButton.setAttribute('visible', true);
        document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
    }
    console.log(`${pointsTouched} have been touched`);

    return pointsTouched ?? 0;
};

function qs01p12ReleaseResources(el, nextChallengeButton, challengeManager, pointsTouched) {
    console.log(`qs01p12ReleaseResources`);
    //Searches for the closest ancestor whose id begins for "challengep", then extracts its progressive number.
    const challengeNumber = el.closest('[id^="challengep"]').id.slice(-2);

    switch (el.id) {
        case "p12-straightline":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "p12-curvedline":
        case "p12-dottedline":
        case "p12-circle":
            document.querySelector('#restartPlanet1').setAttribute('visible', true);
            document.querySelector('#restartPlanet1').setAttribute('class', 'interactive');
            // TODO
            // Reset scores
            break;
        default:
            console.log(`${el.id} - qs01p12ReleaseResources default?!!!`)   
    }
    // Disabling all answers
    const choices = document.querySelectorAll(`[${challengeManager}]`)
    for (var i = 0; i < choices.length; i++) {
        choices[i].removeAttribute('class');
    }

    return pointsTouched ?? 0;
//
};

function qs01p13ReleaseResources(el, nextChallengeButton, challengeManager, pointsTouched) {
    console.log(`qs01p13ReleaseResources`);
    const challengeNumber = el.closest('[id^="challengep"]').id.slice(-2);
    switch (el.id) {
        case "p13-a7":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "p13-a3":
        case "p13-a4":
        case "p13-a9":
            console.log(`P13 wrong answer`);
            document.querySelector('#restartPlanet1').setAttribute('visible', true);
            document.querySelector('#restartPlanet1').setAttribute('class', 'interactive');
            // TODO
            // Reset scores
            break;
        default:
            console.log(`${el.id} - qs01p13ReleaseResources default?!!!`)
    };
    // Disabling all answers
    const choices = document.querySelectorAll(`[${challengeManager}]`)
    for (var i = 0; i < choices.length; i++) {
        choices[i].removeAttribute('class');
    }
    return pointsTouched ?? 0;
};

function qs01p14ReleaseResources(el, nextChallengeButton, challengeManager, pointsTouched) {
    console.log(`qs01p14ReleaseResources`);
    const challengeNumber = el.closest('[id^="challengep"]').id.slice(-2);
    switch (el.id) {
        case "p14-a10":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "p14-a5":
        case "p14-a12":
        case "p14-a20":
            console.log(`P14 wrong answer`);
            document.querySelector('#restartPlanet1').setAttribute('visible', true);
            document.querySelector('#restartPlanet1').setAttribute('class', 'interactive');
            // TODO
            // Reset scores
            break;
        default:
            console.log(`${el.id} - qs01p14ReleaseResources default?!!!`)
    }
    // Disabling all answers
    const choices = document.querySelectorAll(`[${challengeManager}]`)
    for (var i = 0; i < choices.length; i++) {
        choices[i].removeAttribute('class');
    }
    return pointsTouched ?? 0;
};

function qs01p15ReleaseResources(el, nextChallengeButton, challengeManager, pointsTouched) {
    console.log(`qs01p15ReleaseResources`);
    const challengeNumber = el.closest('[id^="challengep"]').id.slice(-2);
    switch (el.id) {
        case "p15-notaligneddots":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "p15-aligneddots1":
        case "p15-aligneddots2":
        case "p15-aligneddots3":
            document.querySelector('#restartPlanet1').setAttribute('visible', true);
            document.querySelector('#restartPlanet1').setAttribute('class', 'interactive');
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
        case "p21-right":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "p21-wrong1":
        case "p21-wrong2":
            console.log(`P14 wrong answer`);
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
        case "p22-right":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "p22-wrong1":
        case "p22-wrong2":
        case "p22-wrong3":
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
        case "p23-radius":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "p23-diameter":
        case "p23-chord":
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
        case "p24-false":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "p24-true":
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
        case "p25-rhombus":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "p25-square":
        case "p25-triangle":
        case "p25-rectangle":
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
        case "p31-equilateral":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "p31-isosceles":
        case "p31-scalene":
            document.querySelector('#restartPlanet3').setAttribute('visible', true);
            document.querySelector('#restartPlanet3').setAttribute('class', 'interactive');
            // TODO
            // Reset scores
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
        case "p32-radius":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "p32-circumference":
        case "p32-diameter":
            document.querySelector('#restartPlanet3').setAttribute('visible', true);
            document.querySelector('#restartPlanet3').setAttribute('class', 'interactive');
            // TODO
            // Reset scores
            break;
        case "p32-whitecircle":
            return; //THIS IS A PATCH TO PREVENT EVENT PROPAGATION TO CIRCUMFERENCE AND NOT TO DISABLE INTERACTIVE ITEMS IF THE WHITE DISK IS CLICKED BY MISTAKE
            //break;
        default:
            console.log(`${el.id} - qs01p32ReleaseResources default?!!!`)
    }

    
    // Disabling all answers
    const choices = document.querySelectorAll(`[${challengeManager}]`);
    for (var i = 0; i < choices.length; i++) {
        choices[i].removeAttribute('class');
    }

    return pointsTouched ?? 0; 
};

function qs01p33ReleaseResources(el, nextChallengeButton, challengeManager, pointsTouched) {
    console.log(`qs01p33ReleaseResources`);
    const challengeNumber = el.closest('[id^="challengep"]').id.slice(-2);

    switch (el.id) {
        case "p33-true":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "p33-false1":
        case "p33-false2":
            document.querySelector('#restartPlanet3').setAttribute('visible', true);
            document.querySelector('#restartPlanet3').setAttribute('class', 'interactive');
            // TODO
            // Reset scores
            break;
        default:
            console.log(`${el.id} - qs01p33ReleaseResources default?!!!`)
    }

    
    // Disabling all answers
    const choices = document.querySelectorAll(`[${challengeManager}]`);
    for (var i = 0; i < choices.length; i++) {
        choices[i].removeAttribute('class');
    }

    return pointsTouched ?? 0; 
};

function qs01p34ReleaseResources(el, nextChallengeButton, challengeManager, pointsTouched) {
    console.log(`qs01p34ReleaseResources`);
    const challengeNumber = el.closest('[id^="challengep"]').id.slice(-2);

    switch (el.id) {
        case "p34-rhombus":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "p34-square":
        case "p34-rectangle":
        case "p34-parallelogram":
            document.querySelector('#restartPlanet3').setAttribute('visible', true);
            document.querySelector('#restartPlanet3').setAttribute('class', 'interactive');
            // TODO
            // Reset scores
            break;
        default:
            console.log(`${el.id} - qs01p34ReleaseResources default?!!!`)
    }
    
    // Disabling all answers
    const choices = document.querySelectorAll(`[${challengeManager}]`);
    for (var i = 0; i < choices.length; i++) {
        choices[i].removeAttribute('class');
    }

    return pointsTouched ?? 0; 
};

function qs01p35ReleaseResources(el, nextChallengeButton, challengeManager, pointsTouched) {
    console.log(`qs01p35ReleaseResources`);
    const challengeNumber = el.closest('[id^="challengep"]').id.slice(-2);

    switch (el.id) {
        case "p35-right":
            nextChallengeButton.setAttribute('visible', true);
            nextChallengeButton.setAttribute('class', 'interactive');
            document.querySelector(`#starflower${challengeNumber}`).setAttribute('color', 'white');
            break;
        case "p35-wrong1":
        case "p35-wrong2":
        case "p35-wrong3":
            document.querySelector('#restartPlanet3').setAttribute('visible', true);
            document.querySelector('#restartPlanet3').setAttribute('class', 'interactive');
            // TODO
            // Reset scores
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
    'Look at the following geometric figure. Identify the points A, B, and C by clicking on them.',
    'You identified the three points!',
    qs01p11RenderAnswers,
    qs01p11ReleaseResources
];

const qs01p12data = [
    'Which of this figures represent a straight line?\nPlease click on it!',
    'You identified the straight line!',
    qs01p12RenderAnswers,
    qs01p12ReleaseResources
];

const qs01p13data = [
    'If line segment AB equals 4 units and line segment BC equals 3 units, how long is line segment AC?',
    'The right answer is 7!',
    qs01p13RenderAnswers,
    qs01p13ReleaseResources
];

const qs01p14data = [
    'Point M is the midpoint of line AB. If AM is 5 units long, how long is line AB?',
    'The right answer is 10!',
    qs01p14RenderAnswers,
    qs01p14ReleaseResources
];

const qs01p15data = [
    'Identify the image that shows three non-collinear points.',
    'You selected the image whose points do not lie on the same line.',
    qs01p15RenderAnswers,
    qs01p15ReleaseResources
];

// Planet 2
const qs01p21data = [
    'Identify the type of triangle in the image.',
    'You identified the isosceles triangle!',
    qs01p21RenderAnswers,
    qs01p21ReleaseResources
];

const qs01p22data = [
    'How many sides does a square have? And what are the angles between each side?',
    'A square has 4 sides, and the angle between each side is 90 degrees.',
    qs01p22RenderAnswers,
    qs01p22ReleaseResources
];

const qs01p23data = [
    'Point to the radius in this circle.',
    'You identified the radius correctly.',
    qs01p23RenderAnswers,
    qs01p23ReleaseResources
];

const qs01p24data = [
    'Are all sides of a rectangle equal? True or False?',
    'In a rectangle, opposite sides are equal, but all sides are not equal.',
    qs01p24RenderAnswers,
    qs01p24ReleaseResources
];

const qs01p25data = [
    'Which of these figures is a rhombus?',
    'You identified the rhombus.',
    qs01p25RenderAnswers,
    qs01p25ReleaseResources
];

// Planet 3
const qs01p31data = [
    'Which triangle has all sides of equal length?',
    'You selected the equilateral triangle.',
    qs01p31RenderAnswers,
    qs01p31ReleaseResources
];

const qs01p32data = [
    'Identify the part of the circle that is half of its diameter.',
    'You selected the radius.',
    qs01p32RenderAnswers,
    qs01p32ReleaseResources
];

const qs01p33data = [
    'Which of the following statements is true about a rectangle',
    'In a rectangle the opposite sides are of equal length.',
    qs01p33RenderAnswers,
    qs01p33ReleaseResources
];

const qs01p34data = [
    'From the following images, select the one that is a rhombus.',
    'You selected the rhombus.',
    qs01p34RenderAnswers,
    qs01p34ReleaseResources
];

const qs01p35data = [
    'If a square has 4 sides of equal length and each corner forms a right angle, what is the total number of degrees of all the angles in a square?',
    'The total number of degrees in a square is 360°.',
    qs01p35RenderAnswers,
    qs01p35ReleaseResources
];



// Randomize function
function randomizeQSArray(array) {
    return array.sort(() => Math.random() - 0.5);
};

