const trainings = [
    { id: 1, title: "THE RHYTHM OF CASH: Understanding Cash Flow Dynamics", definition: "This training focuses on helping participants grasp the essential concepts of cash flow management. Participants will learn how to analyze cash inflows and outflows, identify trends, and forecast future cash needs. By understanding cash flow dynamics, participants can make informed financial decisions, improve liquidity management, and contribute to the overall financial health of the organization.", schedule: "2025-04-04", location: "Star Hotel Davao - Mabini St. Poblacion District, Davao City, Davao Del Sur", participants: "Finance & Treasury Personnel, Accounting Personel, Admin Managers, Branch Managers, CFO's/ Financial Managers, COO's/ Operations Managers, CEO's/ General Managers, Treasurers, Bookkeeper, Audit Committee & Interna;, Auditors, BOD's", status: "upcoming", image: "image/UT1.jpg" },
    { id: 2, title: "WORD OF MOUTH ADVOCACY: The Power of Cooperative Marketing", definition: "This training is to equip cooperative members and leaders with the knowledge and tools to effectively leverage member advocacy and word-of-mouth marketing to drive growth and build trust within the community. By harnessing the authentic, personal recommendations of members, this training will focus on strategies to encourage members to become active promoters of the cooperative's values, products, and services, forstering a loyal customer base and enchancing the cooperative's reputation while staying true to its democratic and community driven principles.", schedule: "2025-04-10", location: "The Pinnacle Hotel and Suites - Sta. Ana Ave, Poblacion District, Davao City, 8000 Davao Del Sur", participants: "BOD's, Managers, Admin, Supervisors, Coodinators, Marketing Staff, other interested participants", status: "finished", image: "image/UT2.jpg" },
    { id: 3, title: "BUILDING A STRONG WORKFORCE: Effective Employee Engagement and Retention Strategies", definition: "This training focuses on equipping participants with effective techniques to enchance employee satisfaction and reduce turnover. The training emphasizes practical strategies for creating a positive workplace culture, fostering strong team dynamics and implementing  feedback mechanisms.", schedule: "2025-04-11", location: "he Pinnacle Hotel and Suites - Sta. Ana Ave, Poblacion District, Davao City, 8000 Davao Del Sur", participants: "HR, Coop Managers, Executives", status: "upcoming", image: "image/UT3.jpg" },
    { id: 4, title: "CREDIT OVERSIGHT AND LOAN OPERATIONS: Classifying Risks and Building Provisions", definition: "This training emphasizes the critical processes within credit management, focusing on the accurate assessment of credit risk and the establishment of neccessary financial provisions. Proper classification of risk allows financial provisions. Proper classification of risk allows financial  institutions to identify potential problem loans early; while building provisions ensures they are financially prepared to cover any future losses. Together, these training helps maintain the stability of the institution, mitigate financial risk, and ensure compliance with regulatory standards, ultimately contributing to stronger credit operations and better decision-making.", schedule: "2025-04-24", location: "Brokenshire Hotel Resort and Convention Center", participants: "Credit Manager/ Officer, Loan Officer, Internal Auditor, Compliance Officer, Treasurer, Accountants, CFO - Chief Finance Officer, BOD's", status: "upcoming", image: "image/UT4.jpg" },
    { id: 5, title: "COOPERATIVE CONFIDENTIAL: A Guide to Secretarial Best Practices", definition: "This training shall tackle the roles and responsibilities of a cooperative secretary, including specific reports that a coop secretary must know how to prepare.", schedule: "2025-04-29", location: "The Pinnacle Hotel and Suites - Sta. Ana Ave, Poblacion District, Davao City, 8000 Davao Del Sur", participants: "Cooperative Secretary", status: "upcoming", image: "image/UT5.jpg" }
];

function updateTrainingStatus() {
    const today = new Date().toISOString().split('T')[0];
    trainings.forEach(training => {
        training.status = training.schedule < today ? "finished" : "upcoming";
    });
}

function filterTrainings(filter) {
    updateTrainingStatus();
    const trainingList = document.getElementById("trainingList");
    trainingList.innerHTML = "";
    const filteredTrainings = trainings.filter(training => filter === "all" || training.status === filter);
    
    filteredTrainings.forEach(training => {
        const trainingCard = document.createElement("div");
        trainingCard.className = "training-card";
        trainingCard.setAttribute("data-aos", "fade-right");
        trainingCard.setAttribute("data-aos-delay", "300");
        trainingCard.setAttribute("data-aos-duration", "1000");
        trainingCard.innerHTML = `
            <img src="${training.image}" alt="${training.title}">
            <div class="training-info">
                <h3>${training.title}</h3><br>
                <p>${training.definition}</p><br>
                <p><strong>Schedule:</strong><br><br> ${training.schedule}</p><br>
                <p><strong>Location:</strong> <br><br> ${training.location}</p><br>
                <p><strong>Target Participants:</strong> <br><br> ${training.participants}</p>
            </div>
        `;
        trainingList.appendChild(trainingCard);
    });
}

filterTrainings("all");