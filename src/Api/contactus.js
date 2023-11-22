import {serverApiUrl} from '../'

export const insertContactusInfo = (name,description,subject,number,email,callback) => 
{
    let formaData = new FormData();
    formaData.append("insert_contactus_info",true);
    formaData.append("name",name);
    formaData.append("description",description);
    formaData.append("subject",subject);
    formaData.append("number",number);
    formaData.append("email",email);
    fetch(serverApiUrl+"contactus.php",{
        method: 'POST', 
        body:formaData
    }).then(response =>response.json())
    .then(response=>callback(response))
    .catch(errr=>console.log(errr))
}