$(document).ready(function() {
    // Initial Experiment Parameters
    var ThisMobile = 0;
    var md = new MobileDetect(window.navigator.userAgent);
    if (md.mobile()) {
        ThisMobile = 1;
        console.log('phone');
    }

    var NumTrials = 20; // Number of trials per block
    var NumBlocks = 6; // Total number of blocks
    var TotalRewards = 0;  // Cumulative rewards for Blocks 1, 2, and 3
    var TotalAttempts = 0; // Cumulative attempts for Blocks 1, 2, and 3
    var TrialCounter = 0; // Tracks total trials across blocks
    var ParticipantResponses = []; // Stores participant's responses to the probability estimates
    var extraTrialsAdded = false; // Flag to track if extra trials have been added


    // Probabilities for lakes in each dyad
    var Dyad1_Probabilities = [
        [0.8, 0.2], // Block 1
        [0.8, 0.2], // Block 2 
        [0.8, 0.2],// Block 3
        [0.2, 0.8],//block 4 (switched)
        [0.2, 0.8],//block 5
        [0.2, 0.8]  // Block 6 
    ];

    var Dyad2_Probabilities = [
        [0.8, 0.2], // Remains the same across all blocks
        [0.8, 0.2],
        [0.8, 0.2],
        [0.8, 0.2],
        [0.8, 0.2],
        [0.8, 0.2]
    ];

    var LakeImage = ["Lake01", "Lake05", "Lake03", "Lake04"];
    var LakeName = ["כוכב", "פקמן", "בייגל", "טרק"];

    var TrialSequence = [];
    var SumReward = 0;
    var Init = (new Date()).getTime();
    var SubID = CreateCode();

    
    // Show Name Input Page as Instruction Page 1
function showNameInputPage() {
    $('#Stage').empty();
    $('#Stage').html(`
        <H2 align="center" dir="rtl">ברוכים הבאים לניסוי</H2>
        <p dir="rtl" align="center">אנא מלא את שמך המלא</p>
        <input type="text" id="participantName" class="form-control center-block" style="width: 50%; margin: 10px auto;" placeholder="שם מלא">
        <button id="submitName" class="btn btn-primary center-block" style="margin-top: 20px;">התחל</button>
        <p id="nameError" class="text-danger" style="display: none; text-align: center;">יש להזין שם לפני ההמשך</p>
    `);

    $('#submitName').click(function () {
        var participantName = $('#participantName').val().trim();
        if (participantName) {
            console.log("Participant Name:", participantName);
            showInstructionsPage2(); // Proceed to Instructions Page 2
        } else {
            $('#nameError').show(); // Show error message if the input is empty
        }
    });
}

// Show Instruction Page 2 (formerly Page 1)
function showInstructionsPage2() {
    $('#Stage').empty();
    $('#Stage').html(`
        <H2 align="center" dir="rtl">הוראות</H2>
        <p dir="rtl">ברוכים הבאים למטלת חופשת הדייג!</p>
        <p dir="rtl">במהלך החופשה תצאו לשש חופשות דייג בנות 20 ימים
        <p dir="rtl">בכל יום תצטרכו לבחור אגם לדוג בו מבין שני אגמים שונים.</p>
        <p dir="rtl">המטרה שלכם היא לדוג כמה שיותר דגים.</p>
        <img src="images/Inst1.png" class="img-responsive center-block" style="max-width: 50%; margin: 20px auto;">
        <button id="nextPage" class="btn btn-primary center-block">הבא</button>
    `);

    $('#nextPage').click(function() {
        showInstructionsPage3(); // Go to Page 3
    });
}

// Show Instruction Page 3 (formerly Page 2)
// Show Instruction Page 3 (formerly Page 2)
function showInstructionsPage3() {
    $('#Stage').empty();
    $('#Stage').html(`
        <H2 align="center" dir="rtl">הוראות</H2>
        <p dir="rtl">לאחר כל בחירה שלכם תראו האם הצלחתם לדוג דג עסיסי או נכשלתם.</p>
        <p dir="rtl">
        <img src="images/Inst2.png" class="img-responsive center-block" style="max-width: 50%; margin: 20px auto;">
        <button id="backPage" class="btn btn-secondary center-block">חזרה</button> 
        <button id="startExperiment" class="btn btn-primary center-block">התחל ניסוי</button>
    `);
    
    $('#backPage').click(function () {
        showInstructionsPage2(); // Go back to Page 2
    });

    $('#startExperiment').click(function() {
        Block(0); // Start the first block of the experiment directly after pressing "התחל ניסוי"
    });
}


// Start with Name Input Page
showNameInputPage();

    // Generate trial sequence
    function generateTrialSequence(blockNum) {
        var sequence = [];
        for (var i = 0; i < NumTrials; i++) {
            var dyad = i % 2 === 0 ? 1 : 2; // Alternate dyads between 1 and 2
            var probabilities = dyad === 1 ? Dyad1_Probabilities[blockNum] : Dyad2_Probabilities[blockNum];
    
            // Determine lakes based on the dyad and block
            var lake1 = dyad === 1 ? LakeImage[0] : LakeImage[2]; // Dyad 1 uses Lake01, Dyad 2 uses Lake03
            var lake2 = dyad === 1 ? LakeImage[1] : LakeImage[3]; // Dyad 1 uses Lake02, Dyad 2 uses Lake04
    
            // Randomize left/right positioning of the lakes
            sequence.push({
                dyad: dyad,
                probabilities: probabilities,
                leftLake: Math.random() < 0.5 ? lake1 : lake2,
                rightLake: Math.random() < 0.5 ? lake2 : lake1
            });
        }
        return sequence;
    }
    

    for (var blockNum = 0; blockNum < NumBlocks; blockNum++) {
        TrialSequence.push(generateTrialSequence(blockNum));
    }

    function showBreakPage(blockNum) {
        $('#Stage').empty();
        $('#Stage').html(`
            <H2 align="center" dir="rtl">אתם עומדים להתחיל חופשה חדשה!</H2>
            <p dir="rtl">סיימתם את חלק ${blockNum} מתוך ${NumBlocks}.</p>
            <p dir="rtl">לחצו על הכפתור למטה כדי להמשיך לחלק הבא.</p>
            <button id="startNextBlock" class="btn btn-primary center-block">התחל חלק ${blockNum + 1}</button>
        `);
    
        $('#startNextBlock').click(function () {
            var trials = TrialSequence[blockNum];
            runTrials(trials, blockNum, 0); // Start the trials for the current block
        });
    }

    function Block(blockNum) {
        if (blockNum < NumBlocks) {
            var trials = TrialSequence[blockNum];
            runTrials(trials, blockNum, 0); // Start the trials immediately
        } else {
            End(); // End the experiment after Block 6
        }
    }
    
    
    function checkLearningCondition() {
        var blockIndex = 2; // Block 3 (zero-based index)
        var blockTrials = TrialSequence[blockIndex]; // Get trials for Block 3
    
        var blockRewards = 0;
        var blockAttempts = blockTrials.length; // Total trials in Block 3
    
        // Count successes in Block 3
        for (var i = 0; i < blockAttempts; i++) {
            if (blockTrials[i].wasRewarded) { // Make sure 'wasRewarded' is set properly in trials
                blockRewards++;
            }
        }
    
        // Calculate success rate after the loop
        var successRate = (blockRewards / blockAttempts) * 100;
    
        console.log(`Block 3 Success Rate: ${successRate}%`);
    
        if (successRate < 70 && !extraTrialsAdded) {
            console.log("Participant did not reach 70% success in Block 3. Adding 20 extra trials.");
            extraTrialsAdded = true; // Set flag to prevent adding extra trials again
            addExtraTrials();
        } else {
            console.log("Participant met the learning condition in Block 3. Moving to Block 4.");
            Block(3); // Proceed to Block 4
        }
    }
    
    
    
    
    // Function to add extra 20 trials before Block 4
    function addExtraTrials() {
        var extraTrials = generateTrialSequence(2).slice(0, 20); // Generate 20 additional trials from Block 3
        runTrials(extraTrials, 2, 0, function () {
            console.log("Extra trials completed. Moving to Block 4.");
            Block(3);
        });
    }
    

    function runTrials(trials, blockNum, trialIndex) {
        // Check if it's time for an assessment
        if (TrialCounter % 10 === 0 && TrialCounter !== 0 && !assessmentCompleted) {
            console.log("Starting assessment pages...");
            assessmentCompleted = true; // Set flag to prevent repeat assessments
            showAssessmentPages(trials, blockNum, trialIndex);
            return;
        }
    
        // Reset the flag after assessment
        if (TrialCounter % 10 !== 0) {
            assessmentCompleted = false;
        }
    
        // Check if all trials in the block are completed
        if (trialIndex >= trials.length) {
            console.log(`Block ${blockNum + 1} completed.`);
            
            if (blockNum === 2) { // ✅ Now we check the success rate AFTER Block 3 ends
                checkLearningCondition();
            } else if (blockNum + 1 < NumBlocks) {
                Block(blockNum + 1);
            } else {
                End();
            }
            return;
        }
        
    
        // Proceed with the trial
        console.log(`Running trial ${trialIndex + 1} of Block ${blockNum + 1}`);
        TrialCounter++; // Increment trial counter for every trial
        var trial = trials[trialIndex];
        Options(blockNum, trialIndex, trial); // Show trial options
    }
    
    

    function Options(blockNum, trialIndex, trial) {
        $('#Stage').empty();
        $('#Bottom').empty();
    
        // Define which two lakes appear in the trial
        var lake1 = trial.dyad === 1 ? LakeImage[0] : LakeImage[2];
        var lake2 = trial.dyad === 1 ? LakeImage[1] : LakeImage[3];
    
        // Assign images randomly to left/right
        var leftLake = Math.random() < 0.5 ? lake1 : lake2;
        var rightLake = leftLake === lake1 ? lake2 : lake1;
    
        // Store the lake images in the trial object
        trial.leftLake = leftLake;
        trial.rightLake = rightLake;
    
        var Title = '<H2 align="center" dir="rtl">בחרו אגם:</H2>';
        var Images = `<div class="row">
                        <div class="col-sm-6" id="LeftImage">
                            <img id="Door1" src="images/${leftLake}.png" class="img-responsive center-block" style="width: 80%; height: auto;">
                        </div>
                        <div class="col-sm-6" id="RightImage">
                            <img id="Door2" src="images/${rightLake}.png" class="img-responsive center-block" style="width: 80%; height: auto;">
                        </div>
                      </div>`;
    
        $('#Stage').html(Title + Images);
    
        $('#Door1').click(function () {
            handleChoice(blockNum, trialIndex, trial.dyad, trial.leftLake);
        });
    
        $('#Door2').click(function () {
            handleChoice(blockNum, trialIndex, trial.dyad, trial.rightLake);
        });
    }
    
    
    function handleChoice(blockNum, trialIndex, dyad, chosenLake) {
        $('#Stage').empty();
    
        var probabilities = dyad === 1 ? Dyad1_Probabilities[blockNum] : Dyad2_Probabilities[blockNum];
        var lakeIndex = (LakeImage.indexOf(chosenLake) % 2 === 0) ? 0 : 1; 
        var probability = probabilities[lakeIndex];
    
        var reward = Math.random() < probability ? 1 : 0;
        SumReward += reward;
    
        // ✅ Set wasRewarded property correctly
        TrialSequence[blockNum][trialIndex].wasRewarded = reward === 1;
    
        var resultMessage = reward ? "הצלחת לדוג דג!" : "לא הצלחת היום.";
        var resultImage = reward ? "images/fish.png" : "images/got_nothing.png";
        var imageSize = reward ? "50%" : "20%";
    
        $('#Stage').html(`
            <H2 align="center" dir="rtl">${resultMessage}</H2>
            <img src="${resultImage}" class="img-responsive center-block" style="max-width: ${imageSize}; margin: 20px auto;">
        `);
    
        setTimeout(function () {
            runTrials(TrialSequence[blockNum], blockNum, trialIndex + 1);
        }, 1500);
    }
    
    
    
    
    
    // Show Assessment Pages for the participant to estimate probabilities
    function showAssessmentPages(trials, blockNum, trialIndex) {
        var lakes = [LakeImage[0], LakeImage[1], LakeImage[2], LakeImage[3]]; // Two from each dyad
        var lakeNames = ["כוכב", "עפיפון", "בייגל", "טרק"]; // Corresponding lake names
        var currentPage = 0; // Track the current page being shown
    
        // Function to display each lake
        function showPage(pageIndex) {
            $('#Stage').empty();
            $('#Stage').html(`
                <H2 align="center" dir="rtl">הערכת סיכויים</H2>
                <p dir="rtl">מה הסיכוי לקבל דג באגם זה?</p>
                <img src="images/${lakes[pageIndex]}.png" class="img-responsive center-block" style="max-width: 50%; margin: 20px auto;">
                <p dir="rtl" align="center">${lakeNames[pageIndex]}</p>
                <input type="range" id="probabilitySlider" min="0" max="100" value="50" step="1" style="width: 80%; margin: 20px auto;">
                <p dir="rtl" align="center">הערכה: <span id="sliderValue">50%</span></p>
                <button id="nextPage" class="btn btn-primary center-block">הבא</button>
            `);
    
            // Update slider value dynamically
            $('#probabilitySlider').on('input', function () {
                $('#sliderValue').text($(this).val() + '%');
            });
    
            // Handle next button click
            $('#nextPage').off('click').on('click', function () {
                // Save the response for the current lake
                ParticipantResponses.push({
                    lake: lakes[pageIndex],
                    lakeName: lakeNames[pageIndex],
                    probability: $('#probabilitySlider').val()
                });
    
                // Check if all lakes have been assessed
                if (pageIndex < lakes.length - 1) {
                    showPage(pageIndex + 1); // Show the next lake
                } else {
                    // End assessment and return to the regular trial sequence
                    runTrials(trials, blockNum, trialIndex);
                }
            });
        }
    
        // Start showing pages from the first lake
        showPage(currentPage);
    }
    
    // Show Ending Page
    function End() {
        $('#Stage').empty();
        $('#Stage').html(`
            <H2 align="center" dir="rtl">Finish</H2>
            <p dir="rtl">סיימתם את המטלה!</p>
            <p dir="rtl">תודה על השתתפותכם! דגתם ${SumReward} דגים בסך הכל.</p>
        `);

        // Export ParticipantResponses to the server
        $.ajax({
            type: "POST",
            url: "server_endpoint_url", // Replace with your server endpoint
            data: JSON.stringify({ responses: ParticipantResponses }),
            contentType: "application/json",
            success: function() {
                console.log("Responses successfully sent to the server.");
            },
            error: function() {
                console.error("Failed to send responses to the server.");
            }
        });
    }

    function CreateCode() {
        return Math.floor(Math.random() * 10000000000);
    }

    showNameInputPage(); // Start with Instruction Page 1
});
