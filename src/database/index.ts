import { createConnection } from "typeorm";

createConnection()
  .then(res => import('../server'))
  .catch(err => console.log(err))