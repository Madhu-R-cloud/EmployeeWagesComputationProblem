// console.log("This is Employee Wages Computation Problem")

const readline = require('readline-sync');

    const Employees = [
        { Eid: 1, Name: "Madhu", Attendance: '', DailyWage: 0, EmployeeType : ''},
        { Eid: 2, Name: "Manu", Attendance: '', DailyWage: 0,EmployeeType : ''},
        { Eid: 3, Name: "Smith", Attendance: '', DailyWage: 0, EmployeeType : ''},
    ];


function employee(){
while(true){
    const choice = parseInt(readline.question("Enter your Choice\n1.Check Employee Present OR Absent\n2. Calculate Daily Wages\n3. Add Partime Employee and wage\n4. Calculate wages per month\n4. Exit\n"));
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
            workHrDailyWage();
            break;
        case 3:
            break;
        case 4:
            process.exit();
        default : console.log("Invalid Choice");

    }
}
    
}

function workHrDailyWage() {
    const hourlyWage = 20;

    console.log("|-----|-----------|--------------|------------|");
    console.log("| Eid | Name      | Attendance   | Daily Wage |");
    console.log("|-----|-----------|--------------|------------|");

    Employees.forEach((employee) => {
        const randomValue = Math.round(Math.random());

        if (randomValue == 1) {
            employee.Attendance = 'Present';
            employee.DailyWage = 8 * hourlyWage;
        } else {
            employee.Attendance = 'Absent';
            employee.DailyWage = 0;
        }

        console.log(`| ${employee.Eid}   | ${employee.Name.padEnd(9)} | ${employee.Attendance.padEnd(12)} | $${employee.DailyWage.toString().padEnd(9)} |`);
    });

    console.log("|-----|-----------|--------------|------------|");
}


employee();