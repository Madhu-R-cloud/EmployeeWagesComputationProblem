// console.log("This is Employee Wages Computation Problem")

const readline = require('readline-sync');

let Employee = [{
    Eid: 1,
    Name: "John Doe",
    Attendance: '', 
    WorkHour: 8,
    DailyWage: 20,
},{
    Eid: 1,
    Name: "Madhu",
    Attendance: '', 
    WorkHour: 8,
    DailyWage: 20,
},{
    Eid: 1,
    Name: "Manu",
    Attendance: '', 
    WorkHour: 8,
    DailyWage: 20,
},
]

function employee(){
while(true){
    const choice = parseInt(readline.question("Enter your Choice\n1.Check Employee Present OR Absent\n2. Calculate Daily Wages\n3. Add Parttime Employee and wage\n4. Calculate wages per month\n4. Exit\n"));
    switch(choice){
        case 1: const randomValue = Math.round(Math.random())
        
                if(randomValue==1){
                    console.log("Employee is Present");
                }
                else{
                    console.log("Employee is Absent")
                }
                break;
        
        case 2:
            break;
        case 3:
            break;
        case 4:
            process.exit();
        default : console.log("Invalid Choice");

    }
}
    
}

function workHrDailyWage(){
    const workHour = 8;
    const dailyWagePerHr = 20;
   const totalWage = workHour * dailyWagePerHr;
}

employee();