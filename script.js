function openFactCheckingWidget() {
    // This will trigger the Voiceflow widget to open or start the conversation
    if (window.voiceflow && window.voiceflow.chat) {
        window.voiceflow.chat.open(); // Open the chatbot window
    } else {
        console.log("Voiceflow chat widget is not yet loaded.");
    }
}
