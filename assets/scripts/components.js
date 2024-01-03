// Create Challenges
AFRAME.registerComponent('challenges-constructor', {
    schema: {
        randomizedData: {type: 'array', default: [['Planet 1 Data'], ['Planet 2 Data'], ['Planet 3 Data']]}
    },
    init: function () {
        console.log('init challenges-constructor');
        
        this.data.randomizedData[0] = randomizeQSArray([
            qs01p11data,
            qs01p12data,
            qs01p13data,
            qs01p14data,
            qs01p15data
        ]);
        this.data.randomizedData[1] = randomizeQSArray([
            qs01p21data,
            qs01p22data,
            qs01p23data,
            qs01p24data,
            qs01p25data
        ]);
        this.data.randomizedData[2] = randomizeQSArray([
            qs01p31data,
            qs01p32data,
            qs01p33data,
            qs01p34data,
            qs01p35data
        ]);
        console.log('randomizedData Array (component.js) - init:');
        console.log(this.data.randomizedData);
        
           
    },
    update: function () {
        const el = this.el; //This is the anchor for the challenge area for the current planet

        console.log(`Updating challenges-constructor on ${el.id}`);

        switch (el.id) {
            // randomizedData[Planet 0-2][Challenge 0-4][Properties 0-3]
            // Property[0] -> Question
            // Property[1] -> Success message
            // Property[2] -> Render function
            // Property[3] -> Release function
            case "planetOneChallenges":
                challengeConstructor(
                    'challengep11',
                    'toChallengep12',
                    this.data.randomizedData[0][0][0],
                    this.data.randomizedData[0][0][1],
                    this.data.randomizedData[0][0][2]
                );
                challengeConstructor(
                    'challengep12',
                    'toChallengep13',
                    this.data.randomizedData[0][1][0],
                    this.data.randomizedData[0][1][1],
                    this.data.randomizedData[0][1][2]
                );
                challengeConstructor(
                    'challengep13',
                    'toChallengep14',
                    this.data.randomizedData[0][2][0],
                    this.data.randomizedData[0][2][1],
                    this.data.randomizedData[0][2][2]
                );
                challengeConstructor(
                    'challengep14',
                    'toChallengep15',
                    this.data.randomizedData[0][3][0],
                    this.data.randomizedData[0][3][1],
                    this.data.randomizedData[0][3][2]
                );
                challengeConstructor(
                    'challengep15',
                    'toPlanet1Rewards',
                    this.data.randomizedData[0][4][0],
                    this.data.randomizedData[0][4][1],
                    this.data.randomizedData[0][4][2]
                );
                break;
            case "planetTwoChallenges":
                challengeConstructor(
                    'challengep21',
                    'toChallengep22',
                    this.data.randomizedData[1][0][0],
                    this.data.randomizedData[1][0][1],
                    this.data.randomizedData[1][0][2]
                );
                challengeConstructor(
                    'challengep22',
                    'toChallengep23',
                    this.data.randomizedData[1][1][0],
                    this.data.randomizedData[1][1][1],
                    this.data.randomizedData[1][1][2]
                );
                challengeConstructor(
                    'challengep23',
                    'toChallengep24',
                    this.data.randomizedData[1][2][0],
                    this.data.randomizedData[1][2][1],
                    this.data.randomizedData[1][2][2]
                );
                challengeConstructor(
                    'challengep24',
                    'toChallengep25',
                    this.data.randomizedData[1][3][0],
                    this.data.randomizedData[1][3][1],
                    this.data.randomizedData[1][3][2]
                );
                challengeConstructor(
                    'challengep25',
                    'toPlanet2Rewards',
                    this.data.randomizedData[1][4][0],
                    this.data.randomizedData[1][4][1],
                    this.data.randomizedData[1][4][2]
                );
                break;
            case "planetThreeChallenges":
                challengeConstructor(
                    'challengep31',
                    'toChallengep32',
                    this.data.randomizedData[2][0][0],
                    this.data.randomizedData[2][0][1],
                    this.data.randomizedData[2][0][2]
                );
                challengeConstructor(
                    'challengep32',
                    'toChallengep33',
                    this.data.randomizedData[2][1][0],
                    this.data.randomizedData[2][1][1],
                    this.data.randomizedData[2][1][2]
                );
                challengeConstructor(
                    'challengep33',
                    'toChallengep34',
                    this.data.randomizedData[2][2][0],
                    this.data.randomizedData[2][2][1],
                    this.data.randomizedData[2][2][2]
                );
                challengeConstructor(
                    'challengep34',
                    'toChallengep35',
                    this.data.randomizedData[2][3][0],
                    this.data.randomizedData[2][3][1],
                    this.data.randomizedData[2][3][2]
                );
                challengeConstructor(
                    'challengep35',
                    'toPlanet3Rewards',
                    this.data.randomizedData[2][4][0],
                    this.data.randomizedData[2][4][1],
                    this.data.randomizedData[2][4][2]
                );
                break;
        }
        

        function challengeConstructor(challengeId, nextChallengeId, question, successMessage, renderFunction) {
            //Preparing challenge

            //Yellow frame
            console.log(`Building ${challengeId}`);
            challengeEl = document.createElement('a-entity');
            challengeEl.setAttribute('id', challengeId);
            challengeEl.setAttribute('geometry', {
                primitive: 'plane',
                height: 5,
                width: 16
            });
            challengeEl.object3D.position.set(0, 0, 0.01);
            challengeEl.setAttribute('material','color', 'yellow');
            challengeEl.setAttribute('visible', false);        
            // White background
            challengeBackgroundEl = document.createElement('a-entity');
            challengeBackgroundEl.setAttribute('geometry', {
                primitive: 'plane',
                height: 4.96,
                width: 15.96
            });
            challengeBackgroundEl.object3D.position.set(0, 0, 0.01);
            challengeBackgroundEl.setAttribute('material','color', 'white');
            // Question Text
            questionEl = document.createElement('a-text');
            questionEl.setAttribute('value', question);
            questionEl.setAttribute('color', 'black');
            questionEl.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
            questionEl.setAttribute('align', 'center');
            questionEl.object3D.position.set(0, 1.5, 0.01);
            questionEl.object3D.scale.set(1.5, 1.5, 1);
            // Answers
            answersEl = document.createElement('a-entity');
            answersEl.setAttribute('geometry', {
                primitive: 'plane',
                height: 3,
                width: 15.96
            });
            answersEl.object3D.position.set(0, -0.8, 0.01);
            answersEl.setAttribute('material','color', 'white');
            answersEl.appendChild(renderFunction(challengeId));
            
            // Success!
            // toChallengeP12
            successEl = document.createElement('a-entity');
            successEl.setAttribute('geometry', {
                primitive: 'plane',
                height: 0.9,
                width: 1.6
            });
            successEl.setAttribute('id',nextChallengeId);
            successEl.setAttribute('material','color','green');
            successEl.object3D.position.set(0, -0.5, 0.1);
            successEl.setAttribute('visible',false);
            successEl.setAttribute('next-challenge',null);
            // Success message Background
            successBackgroundEl = document.createElement('a-entity');
            successBackgroundEl.setAttribute('geometry', {
                primitive: 'plane',
                height: 4.8,
                width: 12
            });
            successBackgroundEl.setAttribute('material','color','white');
            successBackgroundEl.setAttribute('visible',true);
            successBackgroundEl.object3D.position.set(0, 0.54, -0.01);
            // Button Text
            successButtonTextEl = document.createElement('a-text');
            successButtonTextEl.setAttribute('value', 'NEXT');
            successButtonTextEl.setAttribute('color', 'white');
            successButtonTextEl.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
            successButtonTextEl.setAttribute('align', 'center');
            successButtonTextEl.object3D.scale.set(2, 2, 1);
            //
            successMessageTextEl = document.createElement('a-text');
            //if (challengeId == 'challengep15') {
            if (['challengep15', 'challengep25', 'challengep35'].includes(challengeId)) {
                successMessageTextEl.setAttribute('value', 'Bravo! ' + successMessage + '\nThe Guardian awaits for you!');
            } else {
                successMessageTextEl.setAttribute('value', 'Bravo! ' + successMessage + '\nNow you can proceed to the next challenge!');
            }
            
            successMessageTextEl.setAttribute('color', 'green');
            successMessageTextEl.setAttribute('font', './assets/fonts/Exo2Bold.fnt');
            successMessageTextEl.setAttribute('align', 'center');
            successMessageTextEl.object3D.position.set(0, 2, 0);
            successMessageTextEl.object3D.scale.set(1.5, 1.5, 1);

            //Composition
            successEl.appendChild(successBackgroundEl);
            successEl.appendChild(successButtonTextEl);
            successEl.appendChild(successMessageTextEl);
            //
            challengeBackgroundEl.appendChild(answersEl);
            challengeBackgroundEl.appendChild(questionEl);
            challengeBackgroundEl.appendChild(successEl);
            //
            challengeEl.appendChild(challengeBackgroundEl);
            //planetChallenges.appendChild(challengeEl);
            //el.append(planetChallenges);
            //el.append(challengeEl);

            console.log(challengeId);
            console.log(el.id);
            console.log(el.querySelector(`#${challengeId}`));

            el.querySelector(`#${challengeId}`).replaceWith(challengeEl);

            return
        };

        
    },
    remove: function () {
        console.log('Removing challenges-constructor');
    }

});

// Advance to NEXT CHALLENGE
AFRAME.registerComponent('next-challenge', {
    init: function () {

    },
    events: {
        click: function () {
            console.log('entering: next-challenge');
            const el = this.el;
            let choices;
            switch (el.id) {
                case "restartPlanet1":
                    console.log('case: restartPlanet1');
                    
                    // Switching challenges on/off - Move to challengs-constructor's remove callback function?
                    //document.querySelector('#challengep11').setAttribute('visible', true);
                    document.querySelector('#challengep12').setAttribute('visible', false);
                    document.querySelector('#challengep13').setAttribute('visible', false);
                    document.querySelector('#challengep14').setAttribute('visible', false);
                    document.querySelector('#challengep15').setAttribute('visible', false);
                    // Resetting energy level
                    document.querySelector('#starflower11').setAttribute('color', '#333');
                    document.querySelector('#starflower12').setAttribute('color', '#333');
                    document.querySelector('#starflower13').setAttribute('color', '#333');
                    document.querySelector('#starflower14').setAttribute('color', '#333');
                    document.querySelector('#starflower15').setAttribute('color', '#333');
                    
                    // Hiding and disabling the button
                    el.setAttribute('visible', false);
                    el.removeAttribute('class');

                    let container = document.querySelector('#planetOneChallenges');
                    container.removeAttribute('challenges-constructor');
                    container.setAttribute('challenges-constructor', null);
                    //break;   
                case "toChallengep11":
                    console.log("Next Challenge: P11");
                    // Switching challenges
                    document.querySelector('#planet1-guardian').setAttribute('visible', false);
                    document.querySelector('#challengep11').setAttribute('visible', true);
                    // Making challenge's elements interactive
                    choices = document.querySelectorAll('[challengep11-manager]')
                    for (var i = 0; i < choices.length; i++) {
                        choices[i].setAttribute('class', 'interactive');
                        choices[i].setAttribute('color', 'black');
                    }
                    // Hiding and disabling the button
                    el.setAttribute('visible', false);
                    el.removeAttribute('class');
                    break;
                case "toChallengep12":
                    console.log("Next Challenge: P12");
                    // Switching challenges
                    document.querySelector('#challengep11').setAttribute('visible', false);
                    document.querySelector('#challengep12').setAttribute('visible', true);
                    // Making challenge's elements interactive
                    choices = document.querySelectorAll('[challengep12-manager]')
                    for (var i = 0; i < choices.length; i++) {
                        choices[i].setAttribute('class', 'interactive');
                        choices[i].setAttribute('color', 'black');
                    }
                    // Hiding and disabling the button
                    el.setAttribute('visible', false);
                    el.removeAttribute('class');
                    break;
                case "toChallengep13":
                    console.log("Next Challenge: P13");
                    // Switching challenges
                    document.querySelector('#challengep12').setAttribute('visible', false);
                    document.querySelector('#challengep13').setAttribute('visible', true);
                    // Making challenge's elements interactive
                    choices = document.querySelectorAll('[challengep13-manager]')
                    for (var i = 0; i < choices.length; i++) {
                        choices[i].setAttribute('class', 'interactive');
                        choices[i].setAttribute('color', 'black');
                    }
                    // Hiding and disabling the button
                    el.setAttribute('visible', false);
                    el.removeAttribute('class');
                    break;
                case "toChallengep14":
                    console.log("Next Challenge: P14");
                    // Switching challenges
                    document.querySelector('#challengep13').setAttribute('visible', false);
                    document.querySelector('#challengep14').setAttribute('visible', true);
                    // Making challenge's elements interactive
                    choices = document.querySelectorAll('[challengep14-manager]')
                    for (var i = 0; i < choices.length; i++) {
                        choices[i].setAttribute('class', 'interactive');
                        choices[i].setAttribute('color', 'black');
                    }
                    // Hiding and disabling the button
                    el.setAttribute('visible', false);
                    el.removeAttribute('class');
                    break;
                case "toChallengep15":
                    console.log("Next Challenge: P15");
                    // Switching challenges
                    document.querySelector('#challengep14').setAttribute('visible', false);
                    document.querySelector('#challengep15').setAttribute('visible', true);
                    // Making challenge's elements interactive
                    choices = document.querySelectorAll('[challengep15-manager]')
                    for (var i = 0; i < choices.length; i++) {
                        choices[i].setAttribute('class', 'interactive');
                        choices[i].setAttribute('color', 'black');
                    }
                    // Hiding and disabling the button
                    el.setAttribute('visible', false);
                    el.removeAttribute('class');
                    break;
                case "toPlanet1Rewards":
                    console.log("Next Challenge: Collecting Planet 1 reward");
                    // Switching scenes
                    document.querySelector('#challengep15').setAttribute('visible', false);
                    document.querySelector('#rewardsPlanet1').setAttribute('visible', true);
                    choices = document.querySelectorAll('.starflower');
                    for (var i = 0; i < choices.length; i++) {
                        choices[i].setAttribute('visible', 'true');
                    }
                    document.querySelector('#gotoPlanet2Button').setAttribute('class', 'interactive');
                    // Hiding and disabling the button
                    el.setAttribute('visible', false);
                    el.removeAttribute('class');
                    break;
                case "restartPlanet2":
                    console.log('Restarting Planet 2');
                    // Switching challenges on/off
                    document.querySelector('#challengep21').setAttribute('visible', true);
                    document.querySelector('#challengep22').setAttribute('visible', false);
                    document.querySelector('#challengep23').setAttribute('visible', false);
                    document.querySelector('#challengep24').setAttribute('visible', false);
                    document.querySelector('#challengep25').setAttribute('visible', false);
                    // Resetting energy level
                    document.querySelector('#starflower21').setAttribute('color', '#333');
                    document.querySelector('#starflower22').setAttribute('color', '#333');
                    document.querySelector('#starflower23').setAttribute('color', '#333');
                    document.querySelector('#starflower24').setAttribute('color', '#333');
                    document.querySelector('#starflower25').setAttribute('color', '#333');
                    // Making challenge's elements interactive
                    choices = document.querySelectorAll('[challengep21-manager]')
                    for (var i = 0; i < choices.length; i++) {
                        choices[i].setAttribute('class', 'interactive');
                    }
                    // Hiding and disabling the button
                    el.setAttribute('visible', false);
                    el.removeAttribute('class');

                    //Rebuilding and randomizing again the challenges
                    document.querySelector('#planetTwoChallenges').removeAttribute('challenges-constructor');
                    document.querySelector('#planetTwoChallenges').setAttribute('challenges-constructor', null);
                    //break;
                case "toChallengep21":
                    console.log("Next Challenge: P21");
                    // Switching challenges
                    document.querySelector('#planet2-guardian').setAttribute('visible', false);
                    document.querySelector('#challengep21').setAttribute('visible', true);
                    // Making challenge's elements interactive
                    choices = document.querySelectorAll('[challengep21-manager]')
                    for (var i = 0; i < choices.length; i++) {
                        choices[i].setAttribute('class', 'interactive');
                        choices[i].setAttribute('color', 'black');
                    }
                    // Hiding and disabling the button
                    el.setAttribute('visible', false);
                    el.removeAttribute('class');
                    break;
                case "toChallengep22":
                    console.log("Next Challenge: P22");
                    // Switching challenges
                    document.querySelector('#challengep21').setAttribute('visible', false);
                    document.querySelector('#challengep22').setAttribute('visible', true);
                    // Making challenge's elements interactive
                    choices = document.querySelectorAll('[challengep22-manager]')
                    for (var i = 0; i < choices.length; i++) {
                        choices[i].setAttribute('class', 'interactive');
                        choices[i].setAttribute('color', 'black');
                    }
                    // Hiding and disabling the button
                    el.setAttribute('visible', false);
                    el.removeAttribute('class');
                    break;
                case "toChallengep23":
                    console.log("Next Challenge: P23");
                    // Switching challenges
                    document.querySelector('#challengep22').setAttribute('visible', false);
                    document.querySelector('#challengep23').setAttribute('visible', true);
                    // Making challenge's elements interactive
                    choices = document.querySelectorAll('[challengep23-manager]')
                    for (var i = 0; i < choices.length; i++) {
                        choices[i].setAttribute('class', 'interactive');
                        choices[i].setAttribute('color', 'black');
                    }
                    // Hiding and disabling the button
                    el.setAttribute('visible', false);
                    el.removeAttribute('class');
                    break;
                case "toChallengep24":
                    console.log("Next Challenge: P24");
                    // Switching challenges
                    document.querySelector('#challengep23').setAttribute('visible', false);
                    document.querySelector('#challengep24').setAttribute('visible', true);
                    // Making challenge's elements interactive
                    choices = document.querySelectorAll('[challengep24-manager]')
                    for (var i = 0; i < choices.length; i++) {
                        choices[i].setAttribute('class', 'interactive');
                        choices[i].setAttribute('color', 'black');
                    }
                    // Hiding and disabling the button
                    el.setAttribute('visible', false);
                    el.removeAttribute('class');
                    break;
                case "toChallengep25":
                    console.log("Next Challenge: P25");
                    // Switching challenges
                    document.querySelector('#challengep24').setAttribute('visible', false);
                    document.querySelector('#challengep25').setAttribute('visible', true);
                    // Making challenge's elements interactive
                    choices = document.querySelectorAll('[challengep25-manager]')
                    for (var i = 0; i < choices.length; i++) {
                        choices[i].setAttribute('class', 'interactive');
                        choices[i].setAttribute('color', 'black');
                    }
                    // Hiding and disabling the button
                    el.setAttribute('visible', false);
                    el.removeAttribute('class');
                    break;
                case "toPlanet2Rewards":
                    console.log("Next Challenge: Collecting Planet 2 reward");
                    // Switching scenes
                    document.querySelector('#challengep25').setAttribute('visible', false);
                    document.querySelector('#rewardsPlanet2').setAttribute('visible', true);
                    console.log(document.querySelector('#rewardsPlanet2'));
                    choices = document.querySelectorAll('.starflower');
                    console.log(choices);
                    for (var i = 0; i < choices.length; i++) {
                        choices[i].setAttribute('visible', 'true');
                    }
                    document.querySelector('#gotoPlanet3Button').setAttribute('class', 'interactive');
                    // Hiding and disabling the button
                    el.setAttribute('visible', false);
                    el.removeAttribute('class');
                    break;
                case "restartPlanet3":
                    // Switching challenges on/off
                    document.querySelector('#challengep31').setAttribute('visible', true);
                    document.querySelector('#challengep32').setAttribute('visible', false);
                    document.querySelector('#challengep33').setAttribute('visible', false);
                    document.querySelector('#challengep34').setAttribute('visible', false);
                    document.querySelector('#challengep35').setAttribute('visible', false);
                    // Resetting energy level
                    document.querySelector('#starflower31').setAttribute('color', '#333');
                    document.querySelector('#starflower32').setAttribute('color', '#333');
                    document.querySelector('#starflower33').setAttribute('color', '#333');
                    document.querySelector('#starflower34').setAttribute('color', '#333');
                    document.querySelector('#starflower35').setAttribute('color', '#333');
                    // Making challenge's elements interactive
                    choices = document.querySelectorAll('[challengep31-manager]')
                    for (var i = 0; i < choices.length; i++) {
                        choices[i].setAttribute('class', 'interactive');
                    }
                    // Hiding and disabling the button
                    el.setAttribute('visible', false);
                    el.removeAttribute('class');

                    //Rebuilding and randomizing again the challenges
                    document.querySelector('#planetThreeChallenges').removeAttribute('challenges-constructor');
                    document.querySelector('#planetThreeChallenges').setAttribute('challenges-constructor', null);
                    //break;
                case "toChallengep31":
                    console.log("Next Challenge: P31");
                    // Switching challenges
                    document.querySelector('#planet3-guardian').setAttribute('visible', false);
                    document.querySelector('#challengep31').setAttribute('visible', true);
                    // Making challenge's elements interactive
                    choices = document.querySelectorAll('[challengep31-manager]')
                    for (var i = 0; i < choices.length; i++) {
                        choices[i].setAttribute('class', 'interactive');
                        choices[i].setAttribute('color', 'black');
                    }
                    // Hiding and disabling the button
                    el.setAttribute('visible', false);
                    el.removeAttribute('class');
                    break;
                case "toChallengep32":
                    console.log("Next Challenge: P32");
                    // Switching challenges
                    document.querySelector('#challengep31').setAttribute('visible', false);
                    document.querySelector('#challengep32').setAttribute('visible', true);
                    // Making challenge's elements interactive
                    choices = document.querySelectorAll('[challengep32-manager]')
                    for (var i = 0; i < choices.length; i++) {
                        choices[i].setAttribute('class', 'interactive');
                        choices[i].setAttribute('color', 'black');
                    }
                    // Hiding and disabling the button
                    el.setAttribute('visible', false);
                    el.removeAttribute('class');
                    break;
                case "toChallengep33":
                    console.log("Next Challenge: P33");
                    // Switching challenges
                    document.querySelector('#challengep32').setAttribute('visible', false);
                    document.querySelector('#challengep33').setAttribute('visible', true);
                    // Making challenge's elements interactive
                    choices = document.querySelectorAll('[challengep33-manager]')
                    for (var i = 0; i < choices.length; i++) {
                        choices[i].setAttribute('class', 'interactive');
                        choices[i].setAttribute('color', 'black');
                    }
                    // Hiding and disabling the button
                    el.setAttribute('visible', false);
                    el.removeAttribute('class');
                    break;
                case "toChallengep34":
                    console.log("Next Challenge: P34");
                    // Switching challenges
                    document.querySelector('#challengep33').setAttribute('visible', false);
                    document.querySelector('#challengep34').setAttribute('visible', true);
                    // Making challenge's elements interactive
                    choices = document.querySelectorAll('[challengep34-manager]')
                    for (var i = 0; i < choices.length; i++) {
                        choices[i].setAttribute('class', 'interactive');
                        choices[i].setAttribute('color', 'black');
                    }
                    // Hiding and disabling the button
                    el.setAttribute('visible', false);
                    el.removeAttribute('class');
                    break;
                case "toChallengep35":
                    console.log("Next Challenge: P35");
                    // Switching challenges
                    document.querySelector('#challengep34').setAttribute('visible', false);
                    document.querySelector('#challengep35').setAttribute('visible', true);
                    // Making challenge's elements interactive
                    choices = document.querySelectorAll('[challengep35-manager]')
                    for (var i = 0; i < choices.length; i++) {
                        choices[i].setAttribute('class', 'interactive');
                        choices[i].setAttribute('color', 'black');
                    }
                    // Hiding and disabling the button
                    el.setAttribute('visible', false);
                    el.removeAttribute('class');
                    break;
                case "toPlanet3Rewards":
                    console.log("Next Challenge: Collecting Planet 3 reward");
                    // Switching scenes
                    document.querySelector('#challengep35').setAttribute('visible', false);
                    document.querySelector('#rewardsPlanet3').setAttribute('visible', true);
                    document.querySelector('#gotoEarthButton').setAttribute('class', 'interactive');
                    choices = document.querySelectorAll('.starflower');
                    console.log(choices);
                    for (var i = 0; i < choices.length; i++) {
                        choices[i].setAttribute('visible', 'true');
                    }
                    // Hiding and disabling the button
                    el.setAttribute('visible', false);
                    el.removeAttribute('class');
                    break;
                default:
                    console.log(`Next challenge: This should not happen!`);
                
            }
        }
    }

});

// ######################
// # CHALLENGE MANAGERS #
// ######################


//
AFRAME.registerComponent('challengep11-manager', {
    schema: {
        releaseFunction: {type: 'array', default: []}
    },
    init: function () {
        this.data.releaseFunction = AFRAME.utils.entity.getComponentProperty(document.querySelector('#planetOneChallenges'), 'challenges-constructor.randomizedData')[0][0][3];
        console.log('challengep11-manager');   
        console.log(document.querySelector('a-scene').systems['challengep11-manager']);
        console.log(document.querySelector('a-scene').systems['challengep11-manager'].data.pointsTouched);
        //console.log(this.system.data.pointsTouched);
    },
    events: {
        click: function () {
            const el = this.el;
            const nextChallengeButton = document.querySelector('#toChallengep12');

            //this.system.data.pointsTouched = this.data.releaseFunction(el, nextChallengeButton, 'challengep11-manager', this.system.data.pointsTouched);
            document.querySelector('a-scene').systems['challengep11-manager'].data.pointsTouched = this.data.releaseFunction(el, nextChallengeButton, 'challengep11-manager', document.querySelector('a-scene').systems['challengep11-manager'].data.pointsTouched);

        }
    }

});


//
AFRAME.registerComponent('challengep12-manager', {
    schema: {
        releaseFunction: {type: 'array', default: []}
    },
    init: function () {
        this.data.releaseFunction = AFRAME.utils.entity.getComponentProperty(document.querySelector('#planetOneChallenges'), 'challenges-constructor.randomizedData')[0][1][3];

    },
    events: {
        click: function () {
            const el = this.el;
            const nextChallengeButton = document.querySelector('#toChallengep13');

            document.querySelector('a-scene').systems['challengep12-manager'].data.pointsTouched = this.data.releaseFunction(el, nextChallengeButton, 'challengep12-manager', document.querySelector('a-scene').systems['challengep12-manager'].data.pointsTouched);

        }
    }
});


//
AFRAME.registerComponent('challengep13-manager', {
    schema: {
        releaseFunction: {type: 'array', default: []}
    },
    init: function () {
        this.data.releaseFunction = AFRAME.utils.entity.getComponentProperty(document.querySelector('#planetOneChallenges'), 'challenges-constructor.randomizedData')[0][2][3];
    },
    events: {
        click: function () {
            const el = this.el;
            const nextChallengeButton = document.querySelector('#toChallengep14');

            document.querySelector('a-scene').systems['challengep13-manager'].data.pointsTouched = this.data.releaseFunction(el, nextChallengeButton, 'challengep13-manager', document.querySelector('a-scene').systems['challengep13-manager'].data.pointsTouched);
        }
    }
});


//
AFRAME.registerComponent('challengep14-manager', {
    schema: {
        releaseFunction: {type: 'array', default: []}
    },
    init: function () {
        this.data.releaseFunction = AFRAME.utils.entity.getComponentProperty(document.querySelector('#planetOneChallenges'), 'challenges-constructor.randomizedData')[0][3][3];
    },
    events: {
        click: function () {
            const el = this.el;
            const nextChallengeButton = document.querySelector('#toChallengep15');

            document.querySelector('a-scene').systems['challengep14-manager'].data.pointsTouched = this.data.releaseFunction(el, nextChallengeButton, 'challengep14-manager', document.querySelector('a-scene').systems['challengep14-manager'].data.pointsTouched);

        }
    }
});


//
AFRAME.registerComponent('challengep15-manager', {
    schema: {
        releaseFunction: {type: 'array', default: []}
    },
    init: function () {
        this.data.releaseFunction = AFRAME.utils.entity.getComponentProperty(document.querySelector('#planetOneChallenges'), 'challenges-constructor.randomizedData')[0][4][3];

    },
    events: {
        click: function () {
            console.log(`challengep15-manager activated`)
            const el = this.el;
            const nextChallengeButton = document.querySelector('#toPlanet1Rewards');

            document.querySelector('a-scene').systems['challengep15-manager'].data.pointsTouched = this.data.releaseFunction(el, nextChallengeButton, 'challengep15-manager', document.querySelector('a-scene').systems['challengep15-manager'].data.pointsTouched);

        }
    }
});


AFRAME.registerComponent('challengep21-manager', {
    init: function () {
        this.data.releaseFunction = AFRAME.utils.entity.getComponentProperty(document.querySelector('#planetTwoChallenges'), 'challenges-constructor.randomizedData')[1][0][3];
    },
    events: {
        click: function () {
            console.log(`challengep21-manager activated`)
            const el = this.el;
            console.log(el.id);
            const nextChallengeButton = document.querySelector('#toChallengep22');
            
            document.querySelector('a-scene').systems['challengep21-manager'].data.pointsTouched = this.data.releaseFunction(el, nextChallengeButton, 'challengep21-manager', document.querySelector('a-scene').systems['challengep21-manager'].data.pointsTouched);
        }
    }
});


AFRAME.registerComponent('challengep22-manager', {
    init: function () {
        this.data.releaseFunction = AFRAME.utils.entity.getComponentProperty(document.querySelector('#planetTwoChallenges'), 'challenges-constructor.randomizedData')[1][1][3];
    },
    events: {
        click: function () {
            console.log(`challengep22-manager activated`)
            const el = this.el;
            const nextChallengeButton = document.querySelector('#toChallengep23');

            document.querySelector('a-scene').systems['challengep22-manager'].data.pointsTouched = this.data.releaseFunction(el, nextChallengeButton, 'challengep22-manager', document.querySelector('a-scene').systems['challengep22-manager'].data.pointsTouched);
        }
    }
});


AFRAME.registerComponent('challengep23-manager', {
    init: function () {
        this.data.releaseFunction = AFRAME.utils.entity.getComponentProperty(document.querySelector('#planetTwoChallenges'), 'challenges-constructor.randomizedData')[1][2][3];
    },
    events: {
        click: function () {
            console.log(`challengep23-manager activated`)
            const el = this.el;
            const nextChallengeButton = document.querySelector('#toChallengep24');

            document.querySelector('a-scene').systems['challengep23-manager'].data.pointsTouched = this.data.releaseFunction(el, nextChallengeButton, 'challengep23-manager', document.querySelector('a-scene').systems['challengep23-manager'].data.pointsTouched);
        }
    }
});


AFRAME.registerComponent('challengep24-manager', {
    init: function () {
        this.data.releaseFunction = AFRAME.utils.entity.getComponentProperty(document.querySelector('#planetTwoChallenges'), 'challenges-constructor.randomizedData')[1][3][3];
    },
    events: {
        click: function () {
            console.log(`challengep24-manager activated`)
            const el = this.el;
            console.log(el.id);
            const nextChallengeButton = document.querySelector('#toChallengep25');

            document.querySelector('a-scene').systems['challengep24-manager'].data.pointsTouched = this.data.releaseFunction(el, nextChallengeButton, 'challengep24-manager', document.querySelector('a-scene').systems['challengep24-manager'].data.pointsTouched);
        }
    }
});


AFRAME.registerComponent('challengep25-manager', {
    init: function () {
        this.data.releaseFunction = AFRAME.utils.entity.getComponentProperty(document.querySelector('#planetTwoChallenges'), 'challenges-constructor.randomizedData')[1][4][3];
    },
    events: {
        click: function () {
            console.log(`challengep25-manager activated`)
            const el = this.el;
            console.log(el.id);
            const nextChallengeButton = document.querySelector('#toPlanet2Rewards');

            document.querySelector('a-scene').systems['challengep25-manager'].data.pointsTouched = this.data.releaseFunction(el, nextChallengeButton, 'challengep25-manager', document.querySelector('a-scene').systems['challengep25-manager'].data.pointsTouched);
        }
    }
});


AFRAME.registerComponent('challengep31-manager', {
    init: function () {
        this.data.releaseFunction = AFRAME.utils.entity.getComponentProperty(document.querySelector('#planetThreeChallenges'), 'challenges-constructor.randomizedData')[2][0][3];
    },
    events: {
        click: function () {
            console.log(`challengep31-manager activated`)
            const el = this.el;
            console.log(el.id);
            const nextChallengeButton = document.querySelector('#toChallengep32');

            document.querySelector('a-scene').systems['challengep31-manager'].data.pointsTouched = this.data.releaseFunction(el, nextChallengeButton, 'challengep31-manager', document.querySelector('a-scene').systems['challengep31-manager'].data.pointsTouched);
        }
    }
});


AFRAME.registerComponent('challengep32-manager', {
    init: function () {
        this.data.releaseFunction = AFRAME.utils.entity.getComponentProperty(document.querySelector('#planetThreeChallenges'), 'challenges-constructor.randomizedData')[2][1][3];
    },
    events: {
        click: function () {
            console.log(`challengep32-manager activated`)
            const el = this.el;
            console.log(el.id);
            const nextChallengeButton = document.querySelector('#toChallengep33');

            document.querySelector('a-scene').systems['challengep32-manager'].data.pointsTouched = this.data.releaseFunction(el, nextChallengeButton, 'challengep32-manager', document.querySelector('a-scene').systems['challengep32-manager'].data.pointsTouched);
        }
    }
});


AFRAME.registerComponent('challengep33-manager', {
    init: function () {
        this.data.releaseFunction = AFRAME.utils.entity.getComponentProperty(document.querySelector('#planetThreeChallenges'), 'challenges-constructor.randomizedData')[2][2][3];
    },
    events: {
        click: function () {
            console.log(`challengep33-manager activated`)
            const el = this.el;
            console.log(el.id);
            const nextChallengeButton = document.querySelector('#toChallengep34');

            document.querySelector('a-scene').systems['challengep33-manager'].data.pointsTouched = this.data.releaseFunction(el, nextChallengeButton, 'challengep33-manager', document.querySelector('a-scene').systems['challengep33-manager'].data.pointsTouched);
        }
    }
});


AFRAME.registerComponent('challengep34-manager', {
    init: function () {
        this.data.releaseFunction = AFRAME.utils.entity.getComponentProperty(document.querySelector('#planetThreeChallenges'), 'challenges-constructor.randomizedData')[2][3][3];
    },
    events: {
        click: function () {
            console.log(`challengep34-manager activated`)
            const el = this.el;
            console.log(el.id);
            const nextChallengeButton = document.querySelector('#toChallengep35');
 
            document.querySelector('a-scene').systems['challengep34-manager'].data.pointsTouched = this.data.releaseFunction(el, nextChallengeButton, 'challengep34-manager', document.querySelector('a-scene').systems['challengep34-manager'].data.pointsTouched);
        }
    }
});


AFRAME.registerComponent('challengep35-manager', {
    init: function () {
        this.data.releaseFunction = AFRAME.utils.entity.getComponentProperty(document.querySelector('#planetThreeChallenges'), 'challenges-constructor.randomizedData')[2][4][3];
    },
    events: {
        click: function () {
            console.log(`challengep35-manager activated`)
            const el = this.el;
            console.log(el.id);
            const nextChallengeButton = document.querySelector('#toPlanet3Rewards');

            document.querySelector('a-scene').systems['challengep35-manager'].data.pointsTouched = this.data.releaseFunction(el, nextChallengeButton, 'challengep35-manager', document.querySelector('a-scene').systems['challengep35-manager'].data.pointsTouched);
        }
    }
});


// Component to advance to next-planet 
AFRAME.registerComponent('next-planet', {
    init: function () {

    },
    events: {
        click: function () {
            console.log('Advancing to next planet');
            const el = this.el;
            console.log(el.id);
            let choices;
            switch (el.id) {
                case "gotoPlanet2Button":
                    document.querySelector('#planet2').setAttribute('visible', true);
                    document.querySelector('#planet2-guardian').setAttribute('visible', true);
                    document.querySelector('#planet2-name').setAttribute('visible', true);
                    document.querySelector('#toChallengep21').setAttribute('class', 'interactive');
                    document.querySelector('#planet1').setAttribute('visible', false);
                    document.querySelector('#planet1-name').setAttribute('visible', false);
                    document.querySelector('#planet1-guardian').setAttribute('visible', false);
                    choices = document.querySelectorAll('.starflower');
                    for (var i = 0; i < choices.length; i++) {
                        choices[i].setAttribute('visible', 'false');
                    }
                    break;
                case "gotoPlanet3Button":
                    document.querySelector('#planet3').setAttribute('visible', true);
                    document.querySelector('#planet3-guardian').setAttribute('visible', true);
                    document.querySelector('#planet3-name').setAttribute('visible', true);
                    document.querySelector('#toChallengep31').setAttribute('class', 'interactive');
                    document.querySelector('#planet2').setAttribute('visible', false);
                    document.querySelector('#planet2-name').setAttribute('visible', false);
                    document.querySelector('#planet2-guardian').setAttribute('visible', false);
                    choices = document.querySelectorAll('.starflower');
                    for (var i = 0; i < choices.length; i++) {
                        choices[i].setAttribute('visible', 'false');
                    }
                    break;
                case "gotoEarthButton":
                    console.log('Going to Earth');
                    document.querySelector('#planetEarth').setAttribute('visible', true);
                    console.log(document.querySelector('#planetEarth'));
                    document.querySelector('#planet3').setAttribute('visible', false);
                    choices = document.querySelectorAll('.starflower');
                    for (var i = 0; i < choices.length; i++) {
                        choices[i].setAttribute('visible', 'false');
                    }
                    break;
                default:
                    console.log(`next-planet should never pass here`)
            }
            el.setAttribute('visible', false);
            el.removeAttribute('class');           
        }
    }
});

