const fs = require('fs');

fs.readFile(`${__dirname}/files/mates.json`, 'utf8', (err, data) => {

    if (err) {
        console.log(`Error reading file from disk: ${err}`);
    } else {

        // parse JSON string to JSON object
        const databases = JSON.parse(data);

        // print all databases
        databases.forEach(db => {
            console.log(`${db.FirstName}: ${db.Email}`);
        });
    }

});






// // Requiring the module
// const reader = require('xlsx')
  
// // Reading our test file
// const file = reader.readFile(`${__dirname}/files/cst.xlsx`)
  
// let data = []
  
// const sheets = file.SheetNames
  
// for(let i = 0; i < sheets.length; i++)
// {
//    const temp = reader.utils.sheet_to_json(
//         file.Sheets[file.SheetNames[i]])
//    temp.forEach((res) => {
//       if(res.PeriodOfStudy == 2 && res.School == "SCH. OF INFO COM TECH" && res.QualificationName == "BSC (HONS) IN COMPUTER ENGINEERING"){
//         let information ={
//             Surname:res.Surname,
//             FirstName:res.FirstNames,
//             Gender:res.Gender,
//             Birthdate: res.Birthdate,
//             Phone:res.Phone,
//             Email:res.Email
//         }  
//         data.push(information);
//       }
//    })
// }
  
// // Printing data
// console.log(data)
// console.log(data.length)


// class msgControllers{
//     static async birthday(req,res){
//         const fs = require('fs');

// fs.readFile('./databases.json', 'utf8', (err, data) => {

//     if (err) {
//         console.log(`Error reading file from disk: ${err}`);
//     } else {

//         // parse JSON string to JSON object
//         const databases = JSON.parse(data);

//         // print all databases
//         databases.forEach(db => {
//             console.log(`${db.name}: ${db.type}`);
//         });
//     }

// });
//     }
// }
