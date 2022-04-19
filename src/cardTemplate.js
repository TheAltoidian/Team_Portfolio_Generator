

// manager card
const cardTemplate = memberData => {
  console.log(memberData); 
  if (memberData.getRole() == "Manager") {
    return ` <div class="card">
    <h3 class="card-title">${memberData.name}</h3>
    <h5>${memberData.getRole()}</h5>
    <div class="card-body">
      
      <p class="card-text">ID: ${memberData.id} </p>
      <p class="card-text">Email: <a href="mailto:${memberData.email}">${memberData.email}</a></p>
      <p class="card-text">Office number: ${memberData.officeNumber}
      
    </div>
  </div>`}
  else if (memberData.getRole() == "Engineer") {
    return ` <div class="card">
    <h3 class="card-title">${memberData.name}</h3>
      <h5>${memberData.getRole()}</h5>
      <div class="card-body">
      
      <p class="card-text">ID: ${memberData.id} </p>
      <p class="card-text">Email: <a href="mailto:${memberData.email}">${memberData.email}</a></p>
      <p class="card-text">Github profile: <a target='_blank' href=${memberData.getGithub()}>${memberData.getGithub()}</a></p>
      
    </div>
  </div>`}
  else if (memberData.getRole() == "Intern") {
    return ` <div class="card">
        <h3 class="card-title">${memberData.name}</h3>
        <h5>${memberData.getRole()}</h5>
        <div class="card-body">
  
        <p class="card-text">ID: ${memberData.id} </p>
        <p class="card-text">Email: <a href="mailto:${memberData.email}">${memberData.email}</a></p>
        <p class="card-text">School: ${memberData.school}</p>
  
</div>
</div>`}
}

const pageTemplate = members => {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Team Profile Generator</title>
  </head>
  
  <body>
    <div class="container-fluid">
      <h1 class="text-light bg-danger p-5 m-5">My Team </h1>  
      ${members.map(member => {
        return cardTemplate(member); 
      })}
    </div>
  </body>
  
  </html>`;
}

module.exports = pageTemplate;



// ${members.map((member) => {
//   cardTemplate(member);
// })}

// <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
//         <title>Team Profile Generator</title>
//     </head>
//     <body>
//         <div class="container-fluid">
//             <h1 class="text-light bg-danger p-5 m-5">My Team </h1>
          
          
//         </div>
//     </body>
//     </html>