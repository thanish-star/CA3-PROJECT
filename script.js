const specialists = ["Cardiologist", "Dermatologist", "Neurologist", "Oncologist", "Pediatrician", "Psychiatrist", "Rheumatologist"];

document.addEventListener("DOMContentLoaded", () => {
    const requestForm = document.getElementById("requestForm");
    const responseForm = document.getElementById("responseForm");
    const feedbackForm = document.getElementById("feedbackForm");
    const specialistType = document.getElementById("specialistType");
    const specialistSearch = document.getElementById("specialistSearch");
    const statusMessage = document.getElementById("statusMessage");
    const loading = document.getElementById("loading");
    const historyList = document.getElementById("historyList");

    // Populate specialistType options initially
    function populateSpecialists() {
        specialistType.innerHTML = "";
        specialists.forEach((spec) => {
            const option = document.createElement("option");
            option.value = spec;
            option.textContent = spec;
            specialistType.appendChild(option);
        });
    }
    populateSpecialists();

    // Filter specialist options based on search input
    specialistSearch.addEventListener("input", (e) => {
        const filter = e.target.value.toLowerCase();
        specialistType.innerHTML = "";
        specialists
            .filter((spec) => spec.toLowerCase().includes(filter))
            .forEach((spec) => {
                const option = document.createElement("option");
                option.value = spec;
                option.textContent = spec;
                specialistType.appendChild(option);
            });
    });

    // Simulate form submission for consultation request
    requestForm.addEventListener("submit", (e) => {
        e.preventDefault();
        loading.style.display = "block";
        statusMessage.textContent = "";
        
        setTimeout(() => {
            loading.style.display = "none";
            statusMessage.textContent = "Consultation request submitted successfully!";
            addToHistory("Consultation request submitted");
        }, 2000);
    });

    // Simulate form submission for specialist response
    responseForm.addEventListener("submit", (e) => {
        e.preventDefault();
        loading.style.display = "block";
        
        setTimeout(() => {
            loading.style.display = "none";
            statusMessage.textContent = "Suggestion submitted successfully!";
            addToHistory("Specialist suggestion submitted");
        }, 2000);
    });

    // Simulate form submission for feedback
    feedbackForm.addEventListener("submit", (e) => {
        e.preventDefault();
        loading.style.display = "block";
        
        setTimeout(() => {
            loading.style.display = "none";
            statusMessage.textContent = "Feedback submitted. Thank you!";
            addToHistory("Feedback provided");
        }, 2000);
    });

    // Add item to consultation history
    function addToHistory(message) {
        const li = document.createElement("li");
        li.textContent = message;
        historyList.appendChild(li);
    }
});