/* 
    GROVER'S GYM - CORE LOGIC 
*/

function calculateBMI() {
    const weight = document.getElementById('bmi-weight').value;
    const height = document.getElementById('bmi-height').value / 100;
    
    if(weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(1);
        let category = "";
        
        if(bmi < 18.5) category = "Underweight - Gain Lean Mass";
        else if(bmi < 25) category = "Normal - Maintain & Tone";
        else if(bmi < 30) category = "Overweight - Shred Protocol";
        else category = "Obese - Transformation Required";
        
        document.getElementById('bmi-result').innerHTML = `
            <div style="margin-top:20px; padding:20px; border:1px solid var(--matte-gold);">
                <h3 style="color:var(--matte-gold)">Your BMI: ${bmi}</h3>
                <p>Status: ${category}</p>
            </div>
        `;
    }
}

// Simple Form Handling Placeholder
const contactForm = document.getElementById('premium-contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your elite request has been received. Our concierge will contact you shortly.');
    });
}
