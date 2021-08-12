import pkg from 'pg';
const {Pool} = pkg;
//import {psqlConfig} from '../config/postgresConfig.js';
const psqlConfig = 'postgres://postgres:pls opeen@127.0.0.1:5432/postgres';
const newobj = {
  connectionString: psqlConfig,
}
const pool = new Pool(newobj);
// pool.on('error', (error)=>{
//     console.info("Unexpected error on idle client",error);
//     process.exit(-1);
// })

// export const createTestDB = async() => {
//     const client = await pool.connect();
    
//     let query = 'create table booking_info(mobile varchar(13) primary key, name varchar(50), email varchar(50), college varchar(50), city varchar(50), gender varchar(50))';
  
//     try{
//       let resp =  await client.query(query)
//       console.log(resp);
//       return resp;
//     }
//     catch(e){
        
//         return false;
//     }finally {
//         client.release();
//     }
//   }
// createTestDB();
export const insertLoginUser = async(mobile, name, email, college, city, gender) => {
    const client = await pool.connect();
    
    let query = `INSERT INTO booking_info(mobile, name, email, college, city, gender ) VALUES('${mobile}', '${name}', '${email}', '${college}', '${city}', '${gender}'  ) RETURNING *`;

    try{
      let resp =  await client.query(query)
      console.log(resp);
      return {success : true , data: resp.rows[0]};;
    }
    catch(e){
          let message="some error occured";
        return {success : false , message};
    }finally {
        client.release();
    }
  }


  //  insertLoginUser(9591557009,"Gagan","gagan.r@gmail.com","JNNCE","shimoga","male");
  //  insertLoginUser(7987562133,"chandan kumar","chandan.kr8413@gmail.com","PESIT","banglore","male");
  //  insertLoginUser(9846565613,"iswarya","iswarya@gmail.com","Dayanada sagar","banglore","female");
  export const selectLoginUser = async() => {
    const client = await pool.connect();
    
    let query = `SELECT * FROM booking_info   `;
    try{
        let resp =  await client.query(query)
        console.log(resp.rows);
        return {success : true , data: resp.rows};
     }
    catch(e){
           let message = "Some Error occured"
           return {success : false , message};
        }
    finally {
        client.release();
    }
  }
  
  
// selectLoginUser();


