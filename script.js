function openFactCheckingWidget() {
    // This will trigger the Voiceflow widget to open or start the conversation
    if (window.voiceflow && window.voiceflow.chat) {
        window.voiceflow.chat.open(); // Open the chatbot window
    } else {
        console.log("Voiceflow chat widget is not yet loaded.");
    }
}





    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
