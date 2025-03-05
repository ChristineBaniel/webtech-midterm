const responses = {
    "hello": "Hello! How can I assist you today?",
    "hi": "Hi there! What health-related question do you have?",
    "symptoms": "Please describe your symptoms, and I'll try to help.",
    "appointment": "You can book an appointment using our telemedicine feature.",
    "fever": "A mild fever can be managed with rest and hydration. If it exceeds 102°F (39°C), see a doctor.",
    "headache": "A mild headache can be relieved with hydration and rest. If severe, seek medical advice.",
    "flu": "To prevent the flu, wash your hands frequently, avoid sick people, and get vaccinated.",
    "cough": "Drink warm fluids, use honey, and rest your throat. If it persists, consult a doctor.",
    "sore throat": "Gargle with warm salt water, drink honey and tea, and avoid irritants.",
    "covid": "Prevent COVID-19 by wearing a mask, washing hands, avoiding crowds, and getting vaccinated.",
    "diabetes": "Prevent diabetes by maintaining a healthy weight, eating a balanced diet, and exercising regularly.",
    "high blood pressure": "Lower blood pressure by reducing salt, exercising, avoiding stress, and limiting alcohol.",
    "heart disease": "Keep your heart healthy by exercising, eating well, avoiding smoking, and managing stress.",
    "stomach pain": "Drink water, eat light foods, and avoid spicy meals. See a doctor if severe.",
    "food poisoning": "Prevent food poisoning by washing hands, cooking food thoroughly, and avoiding expired products.",
    "asthma": "Manage asthma by avoiding triggers, using inhalers as prescribed, and maintaining good air quality.",
    "migraines": "Prevent migraines by identifying triggers, staying hydrated, and managing stress.",
    "dehydration": "Drink plenty of water, eat water-rich foods, and avoid excessive caffeine and alcohol.",
    "sleep": "Improve sleep by keeping a regular schedule, avoiding caffeine, and creating a relaxing routine.",
    "stress": "Reduce stress with meditation, exercise, deep breathing, and good time management.",
    "acne": "Prevent acne by keeping your skin clean, avoiding touching your face, and using non-comedogenic products.",
    "burns": "Treat minor burns with cool running water, aloe vera, and a clean bandage.",
    "nosebleed": "Stop a nosebleed by leaning forward, pinching your nose for 10 minutes, and avoiding tilting your head back.",
    "joint pain": "Prevent joint pain by staying active, maintaining a healthy weight, and stretching regularly.",
    "eye strain": "Reduce eye strain by taking breaks from screens, adjusting brightness, and using the 20-20-20 rule.",
    "fatigue": "Boost energy levels by getting enough sleep, eating healthy, staying hydrated, and exercising.",
    "default": "I'm not sure about that. Try asking about symptoms, appointments, or general health tips."
};

function getResponse() {
    let userInput = document.getElementById("user-input").value.toLowerCase();
    let chatBox = document.getElementById("chat-box");

    let userMessage = `<p class="chat-message user-message"><strong>You:</strong> ${userInput}</p>`;
    let botResponse = `<p class="chat-message bot-message"><strong>Bot:</strong> ${responses[userInput] || responses["default"]}</p>`;

    chatBox.innerHTML += userMessage + botResponse;
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to latest message
    document.getElementById("user-input").value = ""; // Clear input field
}