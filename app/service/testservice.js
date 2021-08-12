import { selectLoginUser, insertLoginUser } from '../models/test.js';

export const selectservice = async(student)=>{
    let response = await selectLoginUser()
    console.log(response);
    console.log('student_name' , student)
    let data = response.data 


    for (let i=0;i<data.length; i++){
        console.log('student_name' ,data[i].name ,student)
        if (data[i].name == student.trim()){
            return data[i]
        }
    }

    console.log('test_data',data)
    return {};
}

export const insertservice  = async(params)=>{
    let response = await insertLoginUser(params.mobile, params.name, params.email,params.college,params.city,params.gender)
    console.log(response);
    return response;
}

// selectservice();
// const newParam = { mobile: '91888895253', name: 'sam', 'email': 'smthng.com', college: 'kit', city: 'nyc', gender: 'male'}
// insertservice(newParam)