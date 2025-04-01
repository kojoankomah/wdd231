document.addEventListener('DOMContentLoaded', () => {
    const membershipDetails = {
        "nonprofit": {
            title: "Non-Profit Membership Level",
            benefits: [
                "Access to Business Workshops: ✅",
                "Networking Opportunities: ❌",
                "Promotional Support: ❌",
                "Exclusive Event Invitations: ❌",
                "Annual Subscription Fee: ❌" 
            ]
        },
        "bronze": {
            title: "Bronze Membership Level",
            benefits: [
                "Access to Business Workshops: ✅",
                "Networking Opportunities: ✅",
                "Promotional Support: ❌",
                "Exclusive Event Invitations: ❌",
                "Annual Subscription Fee: $25" 
            ]
        },
        "silver": {
            title: "Silver Membership Level",
            benefits: [
                "Access to Business Workshops: ✅",
                "Networking Opportunities: ✅",
                "Promotional Support: ✅",
                "Exclusive Event Invitations: ❌",
                "Annual Subscription Fee: $50" 
            ]
        },
        "gold": {
            title: "Gold Membership Level",
            benefits: [
                "Access to Business Workshops: ✅",
                "Networking Opportunities: ✅",
                "Promotional Support: ✅",
                "Exclusive Event Invitations: ✅",
                "Annual Subscription Fee: $100" 
            ]
        }
    };

    document.querySelectorAll('.learn-more-btn').forEach(button => {
        button.addEventListener('click', () => {
            const level = button.dataset.level;
            const dialog = document.querySelector(`#${level}-info`);
            const details = membershipDetails[level];

            dialog.querySelector('h3').textContent = details.title;
            dialog.querySelector('ul').innerHTML = details.benefits.map(benefit => `<li>${benefit}</li>`).join('');
            dialog.showModal();
        });
    });

    document.querySelectorAll('.close-btn').forEach(button => {
        button.addEventListener('click', () => {
            button.closest('dialog').close();
        });
    });

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', setDateTime);
    }
});

function setDateTime(event) {
    const now = new Date();
    const dateTimeString = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    document.getElementById('dateTime').value = dateTimeString;
}


document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const fields = ["first-name", "last-name", "email", "mobile-phone", "business-name", "timestamp"];

    fields.forEach(field => {
        const element = document.getElementById(field);
        if (element && params.has(field)) {
            element.textContent = params.get(field);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const timestampInput = document.getElementById("timestamp");
    if (timestampInput) {
        const now = new Date().toISOString(); // Get current timestamp
        timestampInput.value = now; // Assign it to the hidden input
    }
});