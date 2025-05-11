        console.log("main.js loaded");

        let currentQuestion = 0;
        let score = 0;

        // DOM Elements
        const quizSelectionDiv = document.getElementById("quiz-selection");
        const quizDiv = document.getElementById("quiz");
        const card = document.querySelector('.card');
        const plantNameEl = document.getElementById("plant-name");
        const userAnswerEl = document.getElementById("user-answer");
        const submitBtn = document.getElementById("submit-btn");
        const nextBtn = document.getElementById("next-btn");
        const resultEl = document.getElementById("result");
        const plantImageEl = document.getElementById("plant-image");
        const botanicalNameEl = document.getElementById("botanical-name");
        const familyNameEl = document.getElementById("family-name");
        const plantDescriptionEl = document.getElementById("plant-description");
        const hintBtn = document.getElementById("hint-btn");
        const hintOptions = document.getElementById("hint-options");
        const infoBtn = document.getElementById("info-btn");
        const infoCard = document.getElementById("info-card");
        const backToPlantBtn = document.getElementById("back-to-plant-btn");
        const quickInfoText = document.getElementById("quick-info");

        const hamburgerBtn = document.getElementById('hamburger-btn');
        const sidebar = document.getElementById('sidebar');
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            sidebar.classList.toggle('active');
        });
        document.addEventListener('DOMContentLoaded', function() {
            // Check if the initializeQuiz function exists first
            if (typeof initializeQuiz === 'function') {
                initializeQuiz();
            } else {
                console.warn("initializeQuiz function is not defined. Quiz might not work properly.");
            }
            
            // Get DOM elements
            const hamburgerBtn = document.getElementById('hamburger-btn');
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('overlay');
            const quizContainer = document.querySelector('.quiz-container');
            
            // Define all window elements
            const windows = {
                'home': document.getElementById('home-window'),
                'about': document.getElementById('about-window'),
                'plants': document.getElementById('plant-list-window'),
                'contact': document.getElementById('contact-window'),
                'help': document.getElementById('help-window')
            };
            
            // Clear any existing event listeners (as best as possible)
            const menuItems = document.querySelectorAll('.sidebar-menu a');
            menuItems.forEach(item => {
                // Create new clones to remove all event listeners
                const clone = item.cloneNode(true);
                item.parentNode.replaceChild(clone, item);
            });
            
            // Re-get the menu items after replacing them
            const refreshedMenuItems = document.querySelectorAll('.sidebar-menu a');
            
            // Hamburger menu toggle
            if (hamburgerBtn) {
                // Remove existing event listeners by cloning
                const newHamburger = hamburgerBtn.cloneNode(true);
                hamburgerBtn.parentNode.replaceChild(newHamburger, hamburgerBtn);
                
                // Add fresh event listener to the new element
                document.getElementById('hamburger-btn').addEventListener('click', function() {
                    this.classList.toggle('active');
                    document.getElementById('sidebar').classList.toggle('active');
                });
            }
            
            // Single unified event handler for menu navigation
            refreshedMenuItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Remove active class from all menu items
                    refreshedMenuItems.forEach(menuItem => {
                        menuItem.classList.remove('active');
                    });
                    
                    // Add active class to clicked item
                    this.classList.add('active');
                    
                    // Get target from href
                    const target = this.getAttribute('href').substring(1);
                    console.log("Navigation target:", target); // Debugging
                    
                    // Handle specific sections
                    if (target === 'quiz') {
                        // Hide all windows
                        hideAllWindows();
                        
                        // Show quiz container
                        quizContainer.classList.remove('hidden');
                        quizContainer.classList.remove('blur');
                    } 
                    else {
                        // Look for the target window
                        const targetWindow = windows[target];
                        console.log("Target window:", targetWindow); // Debugging
                        
                        if (targetWindow) {
                            // Hide all windows first
                            hideAllWindows();
                            
                            // Show the target window
                            targetWindow.classList.add('show');
                            if (overlay) overlay.classList.add('show');
                            quizContainer.classList.add('blur');
                        }
                    }
                    
                    // Close sidebar after navigation
                    document.getElementById('sidebar').classList.remove('active');
                    document.getElementById('hamburger-btn').classList.remove('active');
                });
            });

            
            // Helper function to hide all windows
            function hideAllWindows() {
                Object.values(windows).forEach(window => {
                    if (window) window.classList.remove('show');
                });
                if (overlay) overlay.classList.remove('show');
            }
        // Event listener for quiz set selection
        document.querySelectorAll('.quiz-set-btn').forEach(button => {
            button.addEventListener('click', function() {
                const setName = this.getAttribute('data-set');
                currentQuizSet = quizSets[setName];
                currentQuestion = 0;
                score = 0;
                quizSelectionDiv.style.display = 'none';
                quizDiv.style.display = 'block';
                loadQuestion();
            });
        });

            document.querySelectorAll('.accordion-header').forEach(header => {
                header.addEventListener('click', () => {
                    const content = header.nextElementSibling;
                    const isActive = header.classList.contains('active');

                    // Close all accordion items
                    document.querySelectorAll('.accordion-header').forEach(h => {
                        h.classList.remove('active');
                        h.nextElementSibling.classList.remove('active');
                        h.nextElementSibling.style.maxHeight = '0';
                    });
                    if (!isActive) {
                        header.classList.add('active');
                        content.classList.add('active');
                        content.style.maxHeight = content.scrollHeight + 'px';
                    }
                });
            });


            document.querySelector('a[href="#help"]').addEventListener('click', (e) => {
                e.preventDefault();
                const helpWindow = document.getElementById('help-window');
                const overlay = document.getElementById('overlay');
                const quizContainer = document.querySelector('.quiz-container');
                

                
                // Add show class and blur the quiz container
                helpWindow.classList.add('show');
                overlay.classList.add('show');
                quizContainer.classList.add('blur');
                
                sidebar.classList.remove('active');
                hamburgerBtn.classList.remove('active');

            });

            document.querySelector('a[href="#about"]').addEventListener('click', (e) => {
                e.preventDefault();
                const aboutWindow = document.getElementById('about-window');
                const overlay = document.getElementById('overlay');
                const quizContainer = document.querySelector('.quiz-container');
                
                // Remove hide class if present
                aboutWindow.classList.remove('hide');
                overlay.classList.remove('hide');
                
                // Add show class and blur the quiz container
                aboutWindow.classList.add('show');
                overlay.classList.add('show');
                quizContainer.classList.add('blur');
                
                document.getElementById('sidebar').classList.remove('active');
                document.getElementById('hamburger-btn').classList.remove('active');
                document.body.classList.add('about-open');
            });

        document.getElementById('close-info-btn').addEventListener('click', closeInfoCard);

            document.querySelectorAll('.sidebar-menu a').forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = item.getAttribute('href').substring(1);
                    
                    // Hide all windows first
                    Object.values(windows).forEach(window => {
                        window.classList.remove('show');
                    });
        // Update the overlay click handler to exclude the sidebar
        document.getElementById('overlay').addEventListener('click', function(e) {
                // Check if the click was on the sidebar
                const sidebar = document.getElementById('sidebar');
                if (sidebar.contains(e.target) || document.getElementById('hamburger-btn').contains(e.target)) {
                        return; // Don't close if clicking on sidebar or hamburger
                }
                
                // Hide all windows
                hideAllWindows();
                document.querySelector('.quiz-container').classList.remove('blur');
        });
                    
                    // Hide overlay
                    document.getElementById('overlay').classList.remove('show');
                    
                    // Show selected window if it exists
                    if (windows[target]) {
                        windows[target].classList.add('show');
                        document.getElementById('overlay').classList.add('show');
                        document.querySelector('.quiz-container').classList.add('blur');
                    }
                    
                    // Close sidebar
                    document.getElementById('sidebar').classList.remove('active');
                    document.getElementById('hamburger-btn').classList.remove('active');
                });
            });

            document.querySelector('a[href="#plants"]').addEventListener('click', (e) => {
                e.preventDefault();
                const plantListWindow = document.getElementById('plant-list-window');
                const overlay = document.getElementById('overlay');
                const quizContainer = document.querySelector('.quiz-container');
        
                plantListWindow.classList.add('show');
                overlay.classList.add('show');
                quizContainer.classList.add('blur');
        
                sidebar.classList.remove('active');
                hamburgerBtn.classList.remove('active');
            });

            // Close window buttons
            document.querySelectorAll('.close-window').forEach(button => {
                button.addEventListener('click', function() {
                    const window = this.closest('.window');
                    if (window) {
                        window.classList.remove('show');
                        if (overlay) overlay.classList.remove('show');
                        quizContainer.classList.remove('blur');
                    }
                });
            });
            
            // Close about window
            const closeAbout = document.getElementById('close-about');
            if (closeAbout) {
                closeAbout.addEventListener('click', function() {
                    const aboutWindow = document.getElementById('about-window');
                    if (aboutWindow) {
                        aboutWindow.classList.remove('show');
                        if (overlay) overlay.classList.remove('show');
                        quizContainer.classList.remove('blur');
                    }
                });
            }
            
            // Close windows when clicking overlay
            if (overlay) {
                overlay.addEventListener('click', function() {
                    hideAllWindows();
                    quizContainer.classList.remove('blur');
                });
            }
        });

        // Make sure this function exists - define a minimal version if missing
        if (typeof initializeQuiz !== 'function') {
            function initializeQuiz() {
                console.log("Quiz initialization placeholder. Replace with your actual initialization.");
                // This is just a placeholder - you should replace this with your actual quiz initialization, [But i still don't know]
            }
        }


        function loadQuestion() {
            const question = currentQuizSet[currentQuestion];
            plantNameEl.textContent = question.plantName;
            userAnswerEl.value = "";
            card.classList.remove('flipped');
            hintOptions.style.display = 'none';
            hintOptions.innerHTML = '';
            infoCard.style.display = 'none';
            resultEl.textContent = "";
            
            // Show home button after first question
            if (currentQuestion > 0) {
                homeBtn.style.display = 'block';
            }
        }





        function submitAnswer() {
            const userAnswer = userAnswerEl.value.trim().toLowerCase();
            const correctAnswer = currentQuizSet[currentQuestion].botanicalName.toLowerCase();

            if (userAnswer === correctAnswer) {
                score++;
                resultEl.textContent = "Correct! You got it!! 🌻🌿🌿";
                resultEl.style.color = "#4caf50";
            } else {
                resultEl.textContent = "Not quite right! keep trying !🌻";
                resultEl.style.color = "#f44336";
            }

            showAnswer();
        }

       function showAnswer() {
            const question = currentQuizSet[currentQuestion];
            plantImageEl.src = question.image;
            plantImageEl.alt = question.plantName;
            botanicalNameEl.textContent = `Botanical Name: ${question.botanicalName}`;
            familyNameEl.textContent = `Family: ${question.familyName}`;
            plantDescriptionEl.textContent = question.description;
            card.classList.add('flipped');
        }

       function nextQuestion() {
            currentQuestion++;
            if (currentQuestion < currentQuizSet.length) {
                loadQuestion();
            } else {
                showFinalResult();
            }
        }
        function createLeafConfetti() {
            const leafDesigns = [
                `M50 10 C20 40, 20 80, 50 90 C80 80, 80 40, 50 10 M50 10 L50 90`,
                `M50 10 C20 10, 10 50, 50 90 C90 50, 80 10, 50 10 M50 10 L50 90`,
                `M50 20 C20 0, 0 30, 0 50 C0 70, 20 90, 50 90 C80 90, 100 70, 100 50 C100 30, 80 0, 50 20`,
                `M50 5 C30 30, 20 50, 50 95 C80 50, 70 30, 50 5 M50 5 L50 95`
            ];
            const colors = ['#4caf50', '#81c784', '#c8e6c9', '#2e7d32', '#a5d6a7', '#66bb6a'];
            const confettiCount = 400; // Reduced count for better performance

            // Clear any existing confetti
            document.querySelectorAll('.leaf-confetti').forEach(leaf => leaf.remove());

            for (let i = 0; i < confettiCount; i++) {
                setTimeout(() => {
                    const leaf = document.createElement('div');
                    leaf.className = 'leaf-confetti';
                    
                    const left = Math.random() * 100;
                    const animationDuration = 3 + Math.random() * 4;
                    const animationDelay = Math.random() * 2;
                    const rotation = Math.random() * 360;
                    const scale = 0.5 + Math.random() * 1;
                    
                    const leafPath = leafDesigns[Math.floor(Math.random() * leafDesigns.length)];
                    const color = colors[Math.floor(Math.random() * colors.length)];
                    
                    leaf.innerHTML = `<svg viewBox="0 0 100 100" style="width: 20px; height: 20px;">
                        <path d="${leafPath}" fill="${color}" />
                    </svg>`;
                    
                    Object.assign(leaf.style, {
                        position: 'fixed',
                        left: `${left}vw`,
                        top: '-50px',
                        transform: `rotate(${rotation}deg) scale(${scale})`,
                        animation: `fall ${animationDuration}s linear ${animationDelay}s forwards`,
                        zIndex: '9999',  // Make sure confetti appears above everything
                        pointerEvents: 'none'  // Ensure it doesn't interfere with clicking
                    });
                    
                    document.body.appendChild(leaf);
                    
                    // Remove the leaf element after animation completes
                    setTimeout(() => {
                        leaf.remove();
                    }, (animationDuration + animationDelay) * 1000); // Added buffer time + 1000
                }, i * 20);
            }
        }
function showFinalResult() {
    card.style.display = 'none';
    infoCard.style.display = 'none';

    // Only create confetti for high-performance levels
    const percentage = (score / currentQuizSet.length) * 100;
    if (percentage >= 75) {
        createLeafConfetti();
    }
    
    setTimeout(() => {
        const resultWrapper = document.createElement('div');
        resultWrapper.className = 'quiz-result-enhanced';

        // Determine performance level
        const performanceLevel = getPerformanceLevel(score, currentQuizSet.length);

        resultWrapper.innerHTML = `
            <div class="result-header">
                <h2>🌿 Learning Journey Complete! 🌻</h2>
                <div class="score-badge ${performanceLevel.class}">
                    <span class="score">${score}/${currentQuizSet.length}</span>
                    <span class="level">${performanceLevel.text}</span>
                </div>
            </div>

            <div class="result-feedback">
                <p class="encouragement">${performanceLevel.message}</p>
                <div class="learning-tips">
                    <h3>🌱 Your Next Steps</h3>
                    ${generateLearningTips(score, currentQuizSet.length)}
                </div>
            </div>

            <div class="result-actions">
                <button id="retry-btn" class="btn btn-primary">Retry Quiz</button>
                <button id="review-btn" class="btn btn-secondary">Review Plants</button>
            </div>
        `;
        
        resultEl.innerHTML = '';
        resultEl.appendChild(resultWrapper);
        
        // Add event listeners
        document.getElementById("retry-btn").addEventListener("click", retryQuiz);
        document.getElementById("review-btn").addEventListener("click", reviewPlants);
    }, 2000);
}
        

        function getPerformanceLevel(score, total) {
            const percentage = (score / total) * 100;
            
            if (percentage === 100) {
                return {
                    text: 'Excellent!',
                    class: 'excellent',
                    message: "🌿🌿Wonderful job! Your wisdom blooms like spring flowers.🌿🌿🌻"
                };
            } else if (percentage >= 75) {
                return {
                    text: 'Great Job!',
                    class: 'great',
                    message: "🌿🌿Nature's wisdom shines through you!🌿🌿 Keep exploring! 🌟"
                };
            } else if (percentage >= 50) {
                return {
                    text: 'Good Effort',
                    class: 'good',
                    message: "You're nurturing a garden of knowledge.🌿🌿"
                };
            } else {
                return {
                    text: 'Keep Studying',
                    class: 'needs-improvement',
                    message: "Don\'t worry! Every quiz is a learning opportunity. You\'ve got this! 🌱"
                };
            }
        }
        function generateLearningTips(score, total) {
            const tipsBank = [
                'Research each plant\'s  medicinal uses',
                'Cross-reference multiple sources for comprehensive understanding',
                ' Explore online botanical databases and academic resources'
             
            ];

            // Randomize and select tips based on performance
            const shuffledTips = tipsBank.sort(() => 0.5 - Math.random());
            const numberOfTips = score < total/2 ? 3 : 2;

            return shuffledTips.slice(0, numberOfTips).map(tip => `<p>${tip}</p>`).join('');
        }
        function reviewPlants() {
            // Reset to first question but in a review mode
            currentQuestion = 0;
            score = 0;
            card.style.display = 'block';
            loadQuestion();
            resultEl.textContent = "Let's review the medicinal plants! 🌿";
        }                

        function getEncouragement() {
            const messages = [
                "Keep learning, keep growing🌻",
                "Stay curious!🌿",
                "The willingness to learn is the most important thing🌿"
            ];
            return messages[Math.floor(Math.random() * messages.length)];
        }

    function initializePlantList() {
        // Generate plant cards for each quiz set
        for (const setKey in quizSets) {
            const plantGrid = document.createElement('div');
            plantGrid.className = 'plant-grid';
            
            quizSets[setKey].forEach((plant, index) => {
                const plantCard = createPlantCard(plant, setKey, index);
                plantGrid.appendChild(plantCard);
            });
            
            document.getElementById(`${setKey}-plants`).appendChild(plantGrid);
        }
        
        // Add event listeners to quiz set tabs
        document.querySelectorAll('.set-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs and sets
                document.querySelectorAll('.set-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.plant-set').forEach(s => s.classList.remove('active'));
                
                // Add active class to selected tab and corresponding set
                this.classList.add('active');
                const setId = this.getAttribute('data-set');
                document.getElementById(`${setId}-plants`).classList.add('active');
            });
        });
        
        // Create plant details modal
        createPlantDetailsModal();
    }
    
    // Create a plant card element
    function createPlantCard(plant, setKey, index) {
        const card = document.createElement('div');
        card.className = 'plant-card';
        
        // Extract plant name without emoji decorations
        const plainPlantName = plant.plantName.replace(/🌻/g, '').trim();
        
        // Create basic plant information
        card.innerHTML = `
            <h3>${plainPlantName}</h3>
            <p class="botanical-name">${plant.botanicalName}</p>
            <p class="plant-family">Family: ${plant.familyName}</p>
            <p class="plant-uses">${plant.description || 'A valuable medicinal plant in Ayurveda.'}</p>
            <div class="plant-properties">
                ${getPropertyTags(plant)}
            </div>
            <button class="plant-details-btn" data-set="${setKey}" data-index="${index}">Learn More</button>
        `;
        
        // Add event listener to the Learn More button
        card.querySelector('.plant-details-btn').addEventListener('click', function() {
            showPlantDetails(this.getAttribute('data-set'), this.getAttribute('data-index'));
        });
        
        return card;
    }

    function getPropertyTags(plant) {
        const properties = [];
        
        // Extract properties from rasPanchak if available
        if (plant.rasPanchak) {
            if (plant.rasPanchak.rasa) {
                const rasas = plant.rasPanchak.rasa.split(',');
                if (rasas.length > 0) properties.push(rasas[0].trim());
            }
            if (plant.rasPanchak.virya) {
                properties.push(plant.rasPanchak.virya.split(' ')[0]);
            }
        }
        
        // Add any other relevant properties
        if (plant.quickInfo) {
            if (plant.quickInfo.toLowerCase().includes('antioxidant')) properties.push('Antioxidant');
            if (plant.quickInfo.toLowerCase().includes('anti-inflammatory') || 
                plant.quickInfo.toLowerCase().includes('antiinflammatory')) properties.push('Anti-inflammatory');
            if (plant.quickInfo.toLowerCase().includes('digestive')) properties.push('Digestive');
            if (plant.quickInfo.toLowerCase().includes('immune')) properties.push('Immune Support');
        }
        
        // Limit to 3 properties
        const limitedProperties = properties.slice(0, 3);
        
        // Return HTML for property tags
        return limitedProperties.map(prop => `<span class="property-tag">${prop}</span>`).join(' ');
    }
    
    // Create the modal for plant details
    function createPlantDetailsModal() {
        const modal = document.createElement('div');
        modal.id = 'plant-details-modal';
        modal.className = 'plant-details-modal';
        modal.innerHTML = `
            <button class="modal-close">×</button>
            <div class="modal-content">
                <div class="modal-left">
                    <h2 id="modal-plant-name" class="modal-heading"></h2>
                    <p id="modal-botanical-name" class="botanical-name"></p>
                    <p id="modal-family-name" class="plant-family"></p>
                    
                    <div class="plant-details-shloka">
                        <p id="modal-shloka-text"></p>
                        <p id="modal-shloka-reference" class="shloka-reference"></p>
                    </div>
                    
                    <div class="properties-section">
                        <h3 class="modal-heading">Properties (Ras Panchak)</h3>
                        <div id="modal-ras-panchak" class="property-grid"></div>
                    </div>
                </div>
                
                <div class="modal-right">
                    <div class="properties-section">
                        <h3 class="modal-heading">Description</h3>
                        <p id="modal-description"></p>
                    </div>
                    
                    <div class="properties-section">
                        <h3 class="modal-heading">Sanskrit Synonyms (Paryaya)</h3>
                        <div id="modal-paryaya"></div>
                    </div>
                    
                    <div class="properties-section">
                        <h3 class="modal-heading">Common Names</h3>
                        <div id="modal-vernacular" class="property-grid"></div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Add close button functionality
        modal.querySelector('.modal-close').addEventListener('click', function() {
            document.getElementById('plant-details-modal').classList.remove('show');
        });
    }
    
    // Show plant details in the modal
    function showPlantDetails(setKey, index) {
        const plant = quizSets[setKey][index];
        const modal = document.getElementById('plant-details-modal');
        
        // Update modal content with plant information
        document.getElementById('modal-plant-name').textContent = plant.plantName.replace(/🌻/g, '').trim();
        document.getElementById('modal-botanical-name').textContent = plant.botanicalName;
        document.getElementById('modal-family-name').textContent = `Family: ${plant.familyName}`;
        
        // Description
        document.getElementById('modal-description').textContent = plant.quickInfo || plant.description || 'No detailed description available.';
        
        // Shloka if available
        if (plant.shloka && plant.shloka.text) {
            document.getElementById('modal-shloka-text').textContent = plant.shloka.text;
            document.getElementById('modal-shloka-reference').textContent = plant.shloka.reference || '';
            document.querySelector('.plant-details-shloka').style.display = 'block';
        } else {
            document.querySelector('.plant-details-shloka').style.display = 'none';
        }
        
        // Ras Panchak
        const rasPanchakEl = document.getElementById('modal-ras-panchak');
        rasPanchakEl.innerHTML = '';
        if (plant.rasPanchak) {
            for (const [key, value] of Object.entries(plant.rasPanchak)) {
                if (value) {
                    const propertyLabel = document.createElement('div');
                    propertyLabel.className = 'property-label';
                    propertyLabel.textContent = key.charAt(0).toUpperCase() + key.slice(1) + ':';
                    
                    const propertyValue = document.createElement('div');
                    propertyValue.textContent = value;
                    
                    rasPanchakEl.appendChild(propertyLabel);
                    rasPanchakEl.appendChild(propertyValue);
                }
            }
        }
        
        // Paryaya (Sanskrit Synonyms)
        const paryayaEl = document.getElementById('modal-paryaya');
        paryayaEl.innerHTML = '';
        if (plant.paryaya && plant.paryaya.length > 0) {
            const paryayaList = document.createElement('ul');
            plant.paryaya.forEach(synonym => {
                const item = document.createElement('li');
                item.innerHTML = `<strong>${synonym.label}</strong> - ${synonym.meaning}`;
                paryayaList.appendChild(item);
            });
            paryayaEl.appendChild(paryayaList);
        } else {
            paryayaEl.textContent = 'No synonyms available.';
        }
        
        // Vernacular Names
        const vernacularEl = document.getElementById('modal-vernacular');
        vernacularEl.innerHTML = '';
        if (plant.vernacularNames && plant.vernacularNames.length > 0) {
            plant.vernacularNames.forEach(name => {
                const langLabel = document.createElement('div');
                langLabel.className = 'property-label';
                langLabel.textContent = name.lang + ':';
                
                const langValue = document.createElement('div');
                langValue.textContent = name.name;
                
                vernacularEl.appendChild(langLabel);
                vernacularEl.appendChild(langValue);
            });
        } else {
            vernacularEl.textContent = 'No common names available.';
        }
        
        // Show the modal
        modal.classList.add('show');
    }
    
    // Add this to your existing document ready or initialization code
    document.addEventListener('DOMContentLoaded', function() {
        // Other initialization code...
        
        // Initialize the plant list
        initializePlantList();
        
        // Add event listener for the Plants List menu item if not already done
        document.querySelector('a[href="#plants"]').addEventListener('click', function(e) {
            e.preventDefault();
            const plantListWindow = document.getElementById('plant-list-window');
            const overlay = document.getElementById('overlay');
            
            plantListWindow.classList.add('show');
            overlay.classList.add('show');
            document.querySelector('.quiz-container').classList.add('blur');
            
            document.getElementById('sidebar').classList.remove('active');
            document.getElementById('hamburger-btn').classList.remove('active');
        });
    });
        function retryQuiz() {
            currentQuestion = 0;
            score = 0;
            card.style.display = 'block';
            returnToHome();
            resultEl.textContent = "";
        }

        function showHint() {
            const hints = currentQuizSet[currentQuestion].hints;
            hintOptions.innerHTML = '';
            hints.forEach(hint => {
                const hintEl = document.createElement('span');
                hintEl.className = 'hint-option';
                hintEl.textContent = hint;
                hintEl.addEventListener('click', () => {
                    userAnswerEl.value = hint;
                    hintOptions.style.display = 'none';
                });
                hintOptions.appendChild(hintEl);
            });
            hintOptions.style.display = 'block';
        }



            function closeAboutWindow() {
                const aboutWindow = document.getElementById('about-window');
                const overlay = document.getElementById('overlay');
                const quizContainer = document.querySelector('.quiz-container');
                
                // Add hide class
                aboutWindow.classList.add('hide');
                overlay.classList.add('hide');
                
                // Remove show class
                aboutWindow.classList.remove('show');
                overlay.classList.remove('show');
                
                // Remove blur from quiz container
                quizContainer.classList.remove('blur');
                
                // Remove about-open class from body
                document.body.classList.remove('about-open');
                
                // Wait for transition to complete before removing classes
                setTimeout(() => {
                    aboutWindow.classList.remove('hide');
                    overlay.classList.remove('hide');
                }, 300);
            }


        function closeInfoCard() {
            infoCard.classList.remove('show');
            infoCard.classList.add('hide');

            infoCard.addEventListener('animationend', function hideCard() {
                infoCard.style.display = 'none';
                infoCard.removeEventListener('animationend', hideCard);
            });
        }
        document.querySelectorAll('.feedback-btn').forEach(button => {
            button.addEventListener('click', function() {
                // Hide all feedback buttons
                document.querySelectorAll('.feedback-btn').forEach(btn => {
                    btn.style.display = 'none';
                });
                
                // Show thank you message
                document.getElementById('feedback-thank-you').style.display = 'block';
                
                // In a real implementation, you might want to send this data somewhere
                console.log('Feedback received:', this.textContent);
            });
        });

        function returnToHome() {
            quizDiv.style.display = 'none';
            quizSelectionDiv.style.display = 'block';
            card.style.display = 'block';
            resultEl.innerHTML = "";
            homeBtn.style.display = 'none';
        }

        // Event Listeners
        submitBtn.addEventListener("click", submitAnswer);
        nextBtn.addEventListener("click", nextQuestion);
        hintBtn.addEventListener("click", showHint);
        infoBtn.addEventListener("click", () => {
       
            const currentPlant =  currentQuizSet[currentQuestion];
            quickInfoText.textContent = currentPlant.quickInfo;
            infoCard.style.display = 'flex';
            infoCard.classList.remove('hide');
            infoCard.classList.add('show');
        });


    

        infoBtn.addEventListener("click", () => {
                const currentPlant = currentQuizSet[currentQuestion];
                
                // Update quick info
                quickInfoText.textContent = currentPlant.quickInfo || "No additional information available.";

                // Dynamically update Shloka section (if available)
                const shlokaBox = document.querySelector('.shloka-box');
                if (currentPlant.shloka) {
                        shlokaBox.querySelector('.shloka-text').innerHTML = currentPlant.shloka.text.replace(/\n/g, '<br>');
                        shlokaBox.querySelector('.shloka-reference').textContent = currentPlant.shloka.reference || '';
                        shlokaBox.style.display = 'block';
                } else {
                        shlokaBox.style.display = 'none';
                }

                // Dynamically update Ras Panchak section (if available)
                const rasPanchakBox = document.querySelector('.ras-panchak-box');
                if (currentPlant.rasPanchak) {
                        const rasItems = rasPanchakBox.querySelectorAll('.ras-item');
                        rasItems[0].querySelector('p').textContent = currentPlant.rasPanchak.rasa || 'Not specified';
                        rasItems[1].querySelector('p').textContent = currentPlant.rasPanchak.guna || 'Not specified';
                        rasItems[2].querySelector('p').textContent = currentPlant.rasPanchak.virya || 'Not specified';
                        rasItems[3].querySelector('p').textContent = currentPlant.rasPanchak.vipaka || 'Not specified';
                        rasItems[4].querySelector('p').textContent = currentPlant.rasPanchak.prabhav || 'Not specified';
                        rasItems[5].querySelector('p').textContent = currentPlant.rasPanchak.varga || 'Not specified';
                        rasPanchakBox.style.display = 'block';
                } else {
                        rasPanchakBox.style.display = 'none';
                }

                // IMPORTANT: Get all info boxes first to ensure proper targeting
                const infoBoxes = document.querySelectorAll('.info-box');
                
                // Find the paryaya box (Sanskrit Synonyms)
                const paryayaBox = Array.from(infoBoxes).find(box => 
                        box.querySelector('h4').textContent === 'Paryaya (Sanskrit Synonyms)');
                
                if (paryayaBox && currentPlant.paryaya) {
                        const paryayaList = paryayaBox.querySelector('.info-list');
                        paryayaList.innerHTML = currentPlant.paryaya.map(item => `
                                <li><span class="info-label">${item.label}:</span> ${item.meaning}</li>
                        `).join('');
                }
                
                // Find the vernacular names box
                const vernacularBox = Array.from(infoBoxes).find(box => 
                        box.querySelector('h4').textContent === 'Vernacular Names');
                
                if (vernacularBox && currentPlant.vernacularNames) {
                        const vernacularList = vernacularBox.querySelector('.info-list');
                        vernacularList.innerHTML = currentPlant.vernacularNames.map(item => `
                                <li><span class="info-label">${item.lang}:</span> ${item.name}</li>
                        `).join('');
                }
                
                // Find the scientific classification box
                const classificationBox = Array.from(infoBoxes).find(box => 
                        box.querySelector('h4').textContent === 'Scientific Classification');
                
                if (classificationBox && currentPlant.classification) {
                        const classificationList = classificationBox.querySelector('.info-list');
                        classificationList.innerHTML = `
                                <li><span class="info-label">Sanskrit Name:</span> ${currentPlant.classification.sanskritName}</li>
                                <li><span class="info-label">Family:</span> ${currentPlant.classification.family}</li>

                                <li><span class="info-label">Genus:</span> ${currentPlant.classification.genus}</li>
                                <li><span class="info-label">Division:</span> ${currentPlant.classification.division}</li>
                                <li><span class="info-label">Class:</span> ${currentPlant.classification.class}</li>
                        `;
                }

                infoCard.style.display = 'flex';
                infoCard.classList.remove('hide');
                infoCard.classList.add('show');
        });
        document.getElementById('hamburger-btn').addEventListener('click', function() {
                this.classList.toggle('active');
                
                const sidebar = document.getElementById('sidebar');
                sidebar.classList.toggle('active');
                
                // Make sure the sidebar is visible above all windows
                if (sidebar.classList.contains('active')) {
                        sidebar.style.zIndex = '3000'; // Higher than windows (2000)
                } else {
                        sidebar.style.zIndex = '1000'; // Default z-index
                }
        });
        // Update the sidebar menu item click handlers
        document.querySelectorAll('.sidebar-menu a').forEach(item => {
                item.addEventListener('click', function(e) {
                        e.preventDefault();
                        
                        // Remove active class from all menu items
                        document.querySelectorAll('.sidebar-menu a').forEach(menuItem => {
                                menuItem.classList.remove('active');
                        });
                        
                        // Add active class to clicked item
                        this.classList.add('active');
                        
                        // Get target from href
                        const target = this.getAttribute('href').substring(1);
                        
                        // Handle specific sections
                        if (target === 'quiz') {
                                // Hide all windows
                                hideAllWindows();
                                
                                // Show quiz container
                                document.querySelector('.quiz-container').classList.remove('hidden');
                                document.querySelector('.quiz-container').classList.remove('blur');
                        } else {
                                // Look for the target window
                                const targetWindow = document.getElementById(target + '-window');
                                
                                if (targetWindow) {
                                        // Hide all windows first
                                        hideAllWindows();
                                        
                                        // Show the target window
                                        targetWindow.classList.add('show');
                                        document.getElementById('overlay').classList.add('show');
                                        document.querySelector('.quiz-container').classList.add('blur');
                                }
                        }
                        
                        // Close sidebar after navigation
                        document.getElementById('sidebar').classList.remove('active');
                        document.getElementById('hamburger-btn').classList.remove('active');
                });
        });


        backToPlantBtn.addEventListener("click", () => {
            // Add hide class and remove show class
            infoCard.classList.remove('show');
            infoCard.classList.add('hide');

            infoCard.addEventListener('animationend', function hideCard() {
                infoCard.style.display = 'none';
                infoCard.removeEventListener('animationend', hideCard);
            });
        });

       
       
        // Initialize the quiz
        loadQuestion();