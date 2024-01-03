// runs when user clicks "ENTER" button on the splashs screen.
AFRAME.registerComponent('start', {
	init: function()
	{
        const workingDir = "./assets/scripts/"
        const componentsScript = `${workingDir}components.js`;
        const qsArray = ['set01', 'set02', 'set03'];
        // selects a questions set out of the array randomly
        let qsId = qsArray[Math.round(Math.random() * (qsArray.length - 1))];

        //let qsId = `set03`;  // REMOVE after tests and uncomment previous statement
        const qsScript = `${workingDir}${qsId}.js`;

        // loads the randomly selected set of questions in the header
        affixScriptToHead(qsScript, () => {
            console.log(`The script ${qsScript} has been correctly loaded.`);
        });

        // loads component script in the header
        affixScriptToHead(componentsScript, () => {
            console.log(`The script component.js has been correctly loaded.`);
        });

		// blocks pointer events until buttonEnter is clicked
		let uiDiv = document.getElementById("uiDiv");
		uiDiv.style["pointer-events"] = "auto";

		// sets up background blocker
		uiDiv.style["background-color"] = "rgba(0, 0, 0, 0.25)";

		// indicates clickable with hand cursor (desktop)
		let buttonEnter = document.getElementById("buttonEnter");
		buttonEnter.style.cursor = "pointer";

		// fade-in functionality
		let fadeIn = function()
		{
			// allow point events again
			uiDiv.style["pointer-events"] = "none";

			// sounds can only be triggered after a mouse interaction
			let soundPlayer = document.querySelector("#ambientSound");
			soundPlayer.components.sound.playSound();

			// remove startButton
			buttonEnter.parentNode.remove(buttonEnter);

			// fade out uiDiv background
			uiDiv.style["background-color"] = "rgba(0, 0, 0, 0.0)";
    		uiDiv.style["transition"] = "background-color 1000ms linear";

            // Starts intro
            //console.log('Starting game');
            splashScreen = document.querySelector('#splashScreen');
            introScreen = document.querySelector('#introScreen');
            nextButton = document.querySelector('#nextButton');
            introScreen.setAttribute('visible', true);
            nextButton.setAttribute('class', 'interactive');
            splashScreen.remove();

            // Attaches challenges-constructor components to the planetXXchallenges nodes
            document.querySelector('#planetOneChallenges').setAttribute('challenges-constructor', null);
            document.querySelector('#planetTwoChallenges').setAttribute('challenges-constructor', null);
            document.querySelector('#planetThreeChallenges').setAttribute('challenges-constructor', null);
            //
            document.querySelector('#toChallengep11').setAttribute('next-challenge', null);
            document.querySelector('#toChallengep21').setAttribute('next-challenge', null);
            document.querySelector('#toChallengep31').setAttribute('next-challenge', null);
            document.querySelector('#restartPlanet1').setAttribute('next-challenge', null);
            document.querySelector('#restartPlanet2').setAttribute('next-challenge', null);
            document.querySelector('#restartPlanet3').setAttribute('next-challenge', null);
            //
            document.querySelector('#gotoPlanet2Button').setAttribute('next-planet', null);
            document.querySelector('#gotoPlanet3Button').setAttribute('next-planet', null);
            document.querySelector('#gotoEarthButton').setAttribute('next-planet', null);

            // Spostare qui anche i system components dei challenge manager?


		}

		// activate for desktop/touchscreen
		buttonEnter.addEventListener('touchstart', fadeIn);
		buttonEnter.addEventListener('mousedown',  fadeIn);

                
        // HELPER FUNCTIONS
        function loadError(oError) {
            throw new URIError(`The script ${oError.target.src} didn't load correctly.`);
        }
          
        function affixScriptToHead(url, onloadFunction) {
            const newScript = document.createElement("script");
            console.log(newScript);
            newScript.onerror = loadError;
            if (onloadFunction) {
                newScript.onload = onloadFunction;
            }
            document.head.appendChild(newScript);
            newScript.src = url;
        }
	}
});

// Component to start the game
AFRAME.registerComponent('start-game', {
    init: function () {

    },
    events: {
        click: function () {
            console.log('Starting game');
            const el = this.el;
            splashScreen = document.querySelector('#splashScreen');
            introScreen = document.querySelector('#introScreen');
            nextButton = document.querySelector('#nextButton');
            //splashScreen.setAttribute('visible', false);
            introScreen.setAttribute('visible', true);
            nextButton.setAttribute('class', 'interactive');
            splashScreen.remove();
            //el.removeAttribute('class');
        }
    }
});

// Component to advance intro slides 
AFRAME.registerComponent('next-slide', {
    init: function () {

    },
    events: {
        click: function () {
            introScreen = document.querySelector('#introScreen');
            backButton = document.querySelector('#backButton');
            backButtonFrame = document.querySelector('#backButtonFrame');
            nextButtonText = document.querySelector('#nextButtonText');
            toChallengeP11Button = document.querySelector('#toChallengep11');
            planet1 = document.querySelector('#planet1');
            //Remove the points?
            pointA = document.querySelector('#pointA');
            pointB = document.querySelector('#pointB');
            pointC = document.querySelector('#pointC');
            currentSlide = introScreen.getAttribute('src');
            switch (currentSlide) {
                case '#intro01':
                    //Loads screen 2
                    introScreen.setAttribute('src', '#intro02');
                    //Shows and activate back button on screen 2
                    backButtonFrame.setAttribute('visible', true);
                    backButton.setAttribute('class', 'interactive');
                    break;
                case '#intro02':
                    introScreen.setAttribute('src', '#intro03');
                    break;
                case '#intro03':
                    introScreen.setAttribute('src', '#intro04');
                    nextButtonText.setAttribute('value', 'BE A HERO!');
                    break;
                case '#intro04':
                    //let choices = document.querySelectorAll('[challengep11-manager]');
                    planet1.setAttribute('visible', true);
                    toChallengeP11Button.setAttribute('class', 'interactive');
                    /*
                    for (var i = 0; i < choices.length; i++) {
                        choices[i].setAttribute('class', 'interactive');
                        choices[i].setAttribute('color', 'red');
                    }
                    */
                    introScreen.remove()
                    //Shows and initializes score bar
                    document.querySelector('#scorebar').setAttribute('visible', 'true');
            }
        }
    }
});

// Component to reload intro slides 
AFRAME.registerComponent('previous-slide', {
    init: function () {

    },
    events: {
        click: function () {
            console.log('Reloading slides');
            introScreen = document.querySelector('#introScreen');
            backButton = document.querySelector('#backButton');
            backButtonFrame = document.querySelector('#backButtonFrame');
            nextButtonText = document.querySelector('#nextButtonText');
            currentSlide = introScreen.getAttribute('src');
            console.log(currentSlide);
            switch (currentSlide) {
                case '#intro01':
                    console.log("BACK BUTTON ON SLIDE 1! THIS IS AN ERROR!")
                    break;
                case '#intro02':
                    introScreen.setAttribute('src', '#intro01');
                    backButtonFrame.setAttribute('visible', false);
                    backButton.removeAttribute('class');
                    break;
                case '#intro03':
                    introScreen.setAttribute('src', '#intro02');
                    break;
                case '#intro04':
                    introScreen.setAttribute('src', '#intro03');
                    nextButtonText.setAttribute('value', '>>');
            }
        }
    }
});

// SYSTEM CHALLENGE MANAGERS

// P11 Challenge Manager


AFRAME.registerSystem('challengep11-manager', {
    schema: {
        pointsTouched: {type: 'number', default: 0},
    }
});

// P12 Challenge Manager

AFRAME.registerSystem('challengep12-manager', {
    schema: {
        pointsTouched: {type: 'number', default: 0},
    }
});

// P13 Challenge Manager

AFRAME.registerSystem('challengep13-manager', {
    schema: {
        pointsTouched: {type: 'number', default: 0},
    }
});

// P14 Challenge Manager
AFRAME.registerSystem('challengep14-manager', {
    schema: {
        pointsTouched: {type: 'number', default: 0},
    }
});

// P15 Challenge Manager

AFRAME.registerSystem('challengep15-manager', {
    schema: {
        pointsTouched: {type: 'number', default: 0},
    }
});

// P21 Challenge Manager
AFRAME.registerSystem('challengep21-manager', {
    schema: {
        pointsTouched: {type: 'number', default: 0},
    }
});
//

// P22 Challenge Manager
AFRAME.registerSystem('challengep22-manager', {
    schema: {
        pointsTouched: {type: 'number', default: 0},
    }
});
//

// P23 Challenge Manager
AFRAME.registerSystem('challengep23-manager', {
    schema: {
        pointsTouched: {type: 'number', default: 0},
    }
});
//

// P24 Challenge Manager
AFRAME.registerSystem('challengep24-manager', {
    schema: {
        pointsTouched: {type: 'number', default: 0},
    }
});
//

// P25 Challenge Manager
AFRAME.registerSystem('challengep25-manager', {
    schema: {
        pointsTouched: {type: 'number', default: 0},
    }
});
//

// P31 Challenge Manager
AFRAME.registerSystem('challengep31-manager', {
    schema: {
        pointsTouched: {type: 'number', default: 0},
    }
});
//

// P32 Challenge Manager
AFRAME.registerSystem('challengep32-manager', {
    schema: {
        pointsTouched: {type: 'number', default: 0},
    }
});
//

// P33 Challenge Manager
AFRAME.registerSystem('challengep33-manager', {
    schema: {
        pointsTouched: {type: 'number', default: 0},
    }
});
//

// P34 Challenge Manager
AFRAME.registerSystem('challengep34-manager', {
    schema: {
        pointsTouched: {type: 'number', default: 0},
    }
});
//

// P35 Challenge Manager
AFRAME.registerSystem('challengep35-manager', {
    schema: {
        pointsTouched: {type: 'number', default: 0},
    }
});
//
