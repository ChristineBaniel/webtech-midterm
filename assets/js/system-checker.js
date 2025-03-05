function checkSymptoms() {
    let symptom = document.getElementById("symptom-select").value;
    let resultText = "";

    if (symptom === "") {
        resultText = "Please select a symptom.";
    } else {
        const conditions = {
            "fever": "A fever could be a sign of flu, COVID-19, or an infection. Stay hydrated and monitor your temperature.",
            "cough": "A persistent cough may indicate a common cold, bronchitis, or even pneumonia. If it lasts over two weeks, consult a doctor.",
            "fatigue": "Fatigue can be caused by stress, anemia, or thyroid problems. Ensure proper rest and nutrition.",
            "headache": "Headaches may be due to stress, dehydration, or migraines. If frequent, it could indicate high blood pressure or vision problems.",
            "stomach pain": "Stomach pain could be linked to indigestion, gastritis, or food poisoning. If severe, consult a doctor.",
            "shortness of breath": "This could be due to asthma, lung infections, or even heart issues. Seek medical attention if severe.",
            "chest pain": "Chest pain might indicate acid reflux, anxiety, or even a heart problem. Seek emergency care if it is intense.",
            "dizziness": "Dizziness may be due to dehydration, low blood pressure, or vertigo. Rest and hydrate, but seek help if persistent.",
            "sore throat": "A sore throat can result from a viral infection, strep throat, or allergies. Gargle with warm salt water and stay hydrated.",
            "joint pain": "Joint pain may indicate arthritis, lupus, or an old injury. Stay active and consult a doctor if it worsens.",
            "nausea": "Nausea can be caused by food poisoning, pregnancy, or motion sickness. Rest and drink fluids.",
            "vomiting": "Frequent vomiting could be due to a stomach virus, food poisoning, or gastritis. Stay hydrated and seek help if severe.",
            "diarrhea": "This might be caused by an infection, food intolerance, or IBS. Stay hydrated and avoid greasy foods.",
            "constipation": "Constipation can result from dehydration, lack of fiber, or thyroid issues. Eat fiber-rich foods and drink plenty of water.",
            "skin rash": "A rash might be due to allergies, eczema, or an infection. Keep the area clean and apply moisturizer.",
            "eye redness": "Red eyes may be due to conjunctivitis, allergies, or dry eye syndrome. Avoid rubbing and use eye drops.",
            "ear pain": "Ear pain can be caused by an infection, sinus issues, or wax buildup. Apply a warm compress and consult a doctor if needed.",
            "cold hands and feet": "This could be due to poor circulation, anemia, or thyroid issues. Keep warm and check your iron levels.",
            "back pain": "Back pain might be due to muscle strain, poor posture, or kidney issues. Stretch regularly and apply heat.",
            "frequent urination": "Frequent urination can be a sign of diabetes, a UTI, or bladder irritation. Drink water and monitor changes.",
            "memory loss": "Memory loss could be related to stress, vitamin deficiencies, or neurological conditions. Stay mentally active and eat a balanced diet."
        };

        resultText = conditions[symptom] || "If symptoms persist, consult a healthcare professional.";
    }

    document.getElementById("result").innerHTML = `<p><strong>Possible Health Condition:</strong> ${resultText}</p>`;
}
