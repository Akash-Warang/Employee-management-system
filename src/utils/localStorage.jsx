import { data } from "autoprefixer";

const employees = [
    {
        "id" : 1,
        "email" : "employee1@example.com",
        "password" : 123,
        "tasks" : [
            {
                "active" : true,
                "newTask" : false,  
                "completed" : false,
                "failed" : false,
                "taskTitle" : "Client feedback",
                "taskDescription" : "gather feedback after launch of product",
                "taskDate" : "2025-02-07",
                "category" : "Support"
            }
        ]
    },
    {
        "id" : 2,
        "email" : "employee2@example.com",
        "password" : 123,
        "tasks" : [
            {
                "active" : true,
                "newTask" : true,  
                "completed" : false,
                "failed" : false,
                "taskTitle" : "Design UI",
                "taskDescription" : "Design UI of product",
                "taskDate" : "2025-03-07",
                "category" : "Design"
            }
        ]
    },
    {
        "id" : 3,
        "email" : "employee3@example.com",
        "password" : 123,
        "tasks" : [
            {
                "active" : false,
                "newTask" : true,  
                "completed" : true,
                "failed" : false,
                "taskTitle" : "Write Fontend",
                "taskDescription" : "Write frontend part of product",
                "taskDate" : "2025-02-07",
                "category" : "Support"
            },
            {
                "active" : true,
                "newTask" : false,  
                "completed" : false,
                "failed" : false,
                "taskTitle" : "Client feedback",
                "taskDescription" : "gather feedback after launch of product",
                "taskDate" : "2025-02-07",
                "category" : "Support"
            }
        ]
    },
    {
        "id" : 4,
        "email" : "employee4@example.com",
        "password" : 123,
        "tasks" : [
            {
                "active" : true,
                "newTask" : false,  
                "completed" : false,
                "failed" : false,
                "taskTitle" : "Client feedback",
                "taskDescription" : "gather feedback after launch of product",
                "taskDate" : "2025-02-07",
                "category" : "Support"
            }
        ]
    },
]


const admins = [
    {
        "id" : 1,
        "email" : "admin@example.com",
        "password" : 123
    }
]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admins', JSON.stringify(admins));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admins = JSON.parse(localStorage.getItem('admins'));
    console.log(employees, admins)
}