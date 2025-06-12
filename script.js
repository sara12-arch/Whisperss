const content = document.getElementById('content');

const quotes = [
    "Freedom is nothing but a chance to be better.",
    "And it's inside myself that I must create someone who will understand.",
    "The human heart has a tiresome tendency to label as fate only what crushes it.",
    "I have spent all my life resisting the desire to end it.",
    "I miss you deeply, unfathomably, senselessly, terribly.",
    "stay alive.",
    "take it all easy 🌸.",
    "what is life if not breathing.",
    "you dont know how it feels to have nowhere to go.",
    "No place on earth can save you, except YOU.",
    "Do you believe any Good will happen?",
    "Eyes chico, they Lie.🌙",
    "keep yourself safe.",
    "Breathe Darling, just BREATHE.",
    "And are you halfway done?✨",
    "keep keep going.",
    "desire is two hand wrapped around your throat.",
    "This ACHE my dear wont let me live.",
    "Dream about it.",
    "Are you sure?",
    "This darkness will find the light soon.",
    "you are the only one,for me",
    "Tell me that its okay.",
    "Day no 24 of surviving this month.",
    "is it worse now? more than yesterday?",
    "can you give me a lighter, please?",
    "Hands are burning.",
    "Lets sleep tonight okay?",
    "Can the sleep fix this tired?",
    "Oh dear, i just cant anymore.",
    "Lets die!"
];

function showSection(section) {
    if (section === 'quotes') {
        const date = new Date();
        const day = date.getDate();
        content.innerHTML = `<h3>Quote for Today:</h3><p>${quotes[day - 1]}</p>`;
    } else if (section === 'work') {
        content.innerHTML = `
            <h3>Work Tasks</h3>
            <ul>
                <li>📌 Attend morning meeting</li>
                <li>📌 Complete daily report</li>
                <li>📌 Plan for tomorrow</li>
            </ul>`;
    } else if (section === 'selfcare') {
        content.innerHTML = `
            <h3>Self Care Tips</h3>
            <ul>
                <li>🌿 Take a 10-minute walk</li>
                <li>🌿 Listen to music you love</li>
                <li>🌿 Journal your thoughts</li>
            </ul>`;
    } else if (section === 'health') {
        content.innerHTML = `
            <h3>Health Tracker</h3>
            <ul>
                <li>💧 Drink 8 glasses of water</li>
                <li>💊 Take vitamins or medication</li>
                <li>🛏️ Get 7-8 hours of sleep</li>
            </ul>`;
    }
}
