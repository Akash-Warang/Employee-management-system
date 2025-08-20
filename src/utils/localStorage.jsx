const employees = [
    {
        id: 1,
        name: "Aarav Sharma",
        email: "aarav.sharma@example.com",
        password: 123,
        taskCount: { completed: 0, active: 1, failed: 0, newTask: 0 },
        tasks: [
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Client feedback",
                taskDescription: "Gather feedback after launch of product",
                taskDate: "2025-02-07",
                category: "Support"
            }
        ]
    },
    {
        id: 2,
        name: "Priya Deshmukh",
        email: "priya.deshmukh@example.com",
        password: 123,
        taskCount: { completed: 0, active: 1, failed: 0, newTask: 1 },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Design UI",
                taskDescription: "Design UI of product",
                taskDate: "2025-03-07",
                category: "Design"
            }
        ]
    },
    {
        id: 3,
        name: "Rohan Patil",
        email: "rohan.patil@example.com",
        password: 123,
        taskCount: { completed: 1, active: 1, failed: 0, newTask: 1 },
        tasks: [
            {
                active: false,
                newTask: true,
                completed: true,
                failed: false,
                taskTitle: "Write Frontend",
                taskDescription: "Write frontend part of product",
                taskDate: "2025-02-07",
                category: "Support"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Client feedback",
                taskDescription: "Gather feedback after launch",
                taskDate: "2025-02-07",
                category: "Support"
            }
        ]
    },
    {
        id: 4,
        name: "Sneha Kulkarni",
        email: "sneha.kulkarni@example.com",
        password: 123,
        taskCount: { completed: 0, active: 1, failed: 0, newTask: 0 },
        tasks: [
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Client feedback",
                taskDescription: "Gather feedback after launch of product",
                taskDate: "2025-02-07",
                category: "Support"
            }
        ]
    },
    {
        id: 5,
        name: "Aditya Mehta",
        email: "aditya.mehta@example.com",
        password: 123,
        taskCount: { completed: 1, active: 1, failed: 0, newTask: 1 },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Backend API",
                taskDescription: "Develop REST APIs",
                taskDate: "2025-01-12",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Unit Testing",
                taskDescription: "Write unit tests for backend code",
                taskDate: "2025-01-20",
                category: "Testing"
            }
        ]
    },
    {
        id: 6,
        name: "Neha Verma",
        email: "neha.verma@example.com",
        password: 123,
        taskCount: { completed: 0, active: 1, failed: 0, newTask: 1 },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Research Competitor",
                taskDescription: "Analyze competitor's features",
                taskDate: "2025-02-18",
                category: "Research"
            }
        ]
    },
    {
        id: 7,
        name: "Vikram Singh",
        email: "vikram.singh@example.com",
        password: 123,
        taskCount: { completed: 1, active: 2, failed: 0, newTask: 1 },
        tasks: [
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Prepare Demo",
                taskDescription: "Prepare product demo for client",
                taskDate: "2025-02-10",
                category: "Sales"
            },
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "CRM Setup",
                taskDescription: "Setup CRM for customer team",
                taskDate: "2025-03-01",
                category: "Support"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Follow-up Call",
                taskDescription: "Call client for feedback",
                taskDate: "2025-03-03",
                category: "Support"
            }
        ]
    },
    {
        id: 8,
        name: "Isha Nair",
        email: "isha.nair@example.com",
        password: 123,
        taskCount: { completed: 0, active: 1, failed: 0, newTask: 1 },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Marketing Strategy",
                taskDescription: "Plan social media marketing",
                taskDate: "2025-04-01",
                category: "Marketing"
            }
        ]
    },
    {
        id: 9,
        name: "Manoj Jain",
        email: "manoj.jain@example.com",
        password: 123,
        taskCount: { completed: 1, active: 0, failed: 1, newTask: 0 },
        tasks: [
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Data Migration",
                taskDescription: "Migrate database to new server",
                taskDate: "2025-01-15",
                category: "IT"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Script Automation",
                taskDescription: "Automate daily reports",
                taskDate: "2025-01-20",
                category: "DevOps"
            }
        ]
    },
    {
        id: 10,
        name: "Divya Joshi",
        email: "divya.joshi@example.com",
        password: 123,
        taskCount: { completed: 2, active: 1, failed: 0, newTask: 0 },
        tasks: [
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Recruitment Drive",
                taskDescription: "Conduct campus hiring",
                taskDate: "2025-02-25",
                category: "HR"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Policy Review",
                taskDescription: "Review internal HR policies",
                taskDate: "2025-03-01",
                category: "HR"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Employee Survey",
                taskDescription: "Initiate Q1 satisfaction survey",
                taskDate: "2025-03-15",
                category: "HR"
            }
        ]
    },
    {
        id: 11,
        name: "Karan Malik",
        email: "karan.malik@example.com",
        password: 123,
        taskCount: { completed: 0, active: 1, failed: 0, newTask: 1 },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Server Monitoring",
                taskDescription: "Set up real-time monitoring",
                taskDate: "2025-04-05",
                category: "IT"
            }
        ]
    },
    {
        id: 12,
        name: "Ritika Bansal",
        email: "ritika.bansal@example.com",
        password: 123,
        taskCount: { completed: 1, active: 0, failed: 0, newTask: 0 },
        tasks: [
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Client Presentation",
                taskDescription: "Present roadmap to clients",
                taskDate: "2025-04-10",
                category: "Business"
            }
        ]
    },
    {
        id: 13,
        name: "Siddharth Rao",
        email: "siddharth.rao@example.com",
        password: 123,
        taskCount: { completed: 0, active: 2, failed: 0, newTask: 1 },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Database Design",
                taskDescription: "Design schema for new project",
                taskDate: "2025-03-20",
                category: "Development"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Performance Tuning",
                taskDescription: "Optimize DB queries",
                taskDate: "2025-03-22",
                category: "Development"
            }
        ]
    },
    {
        id: 14,
        name: "Ananya Pandey",
        email: "ananya.pandey@example.com",
        password: 123,
        taskCount: { completed: 0, active: 1, failed: 1, newTask: 1 },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "UX Research",
                taskDescription: "Conduct user interviews",
                taskDate: "2025-03-28",
                category: "Design"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Prototype Testing",
                taskDescription: "Test new wireframes",
                taskDate: "2025-03-29",
                category: "Design"
            }
        ]
    },
    {
        id: 15,
        name: "Yash Gupta",
        email: "yash.gupta@example.com",
        password: 123,
        taskCount: { completed: 2, active: 0, failed: 0, newTask: 0 },
        tasks: [
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Code Review",
                taskDescription: "Review PRs from dev team",
                taskDate: "2025-03-15",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Refactor Codebase",
                taskDescription: "Refactor old modules",
                taskDate: "2025-03-17",
                category: "Development"
            }
        ]
    }
];


const admins = [
    {
        "id" : 1,
        "email" : "admin@example.com",
        "password" : 123
    }
]

export const setLocalStorage = () => {
    // localStorage.clear()
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admins', JSON.stringify(admins));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admins = JSON.parse(localStorage.getItem('admins'));
    
    return({employees, admins})
}