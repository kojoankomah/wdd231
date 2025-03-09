const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects, encapsulation, inheritance, and polymorphism.',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course focuses on user experience, accessibility, compliance, and performance optimization.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

const courseContainer = document.getElementById("course-buttons");
const totalCreditsElement = document.getElementById("total-credits");

// Function to create course buttons
function createCourseButton(course) {
    const button = document.createElement("button");
    button.textContent = `${course.subject} ${course.number}`;

    // Apply different styles based on completion status
    if (course.completed) {
        button.classList.add("completed-course");
    } else {
        button.classList.add("in-progress");
    }

    courseContainer.appendChild(button);
}

// Function to display courses
function displayCourses(filteredCourses) {
    courseContainer.innerHTML = "";  // Clear existing buttons

    filteredCourses.forEach(course => {
        createCourseButton(course);
    });
}

// Function to update total credits
function updateTotalCredits(filteredCourses) {
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsElement.textContent = `The total number of credits is ${totalCredits}`;
}

// Function to filter courses
function filterCourses(type) {
    let filteredCourses = courses;

    if (type !== "all") {
        filteredCourses = courses.filter(course => course.subject === type);
    }

    displayCourses(filteredCourses);
    updateTotalCredits(filteredCourses);
}

// Event listener for filter buttons
document.querySelectorAll(".filter-button button").forEach(button => {
    button.addEventListener("click", () => {
        const type = button.getAttribute("data-type");
        filterCourses(type);
    });
});

// Initial load
document.addEventListener("DOMContentLoaded", () => {
    filterCourses("all");
});
