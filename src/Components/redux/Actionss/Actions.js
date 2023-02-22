import { ADDSUJET,  DELETESUJET,  EDITSUJET, REGISTER } from "../Typess/Types"


export const addsujet=(payload)=>{
return{
type:ADDSUJET,
payload :payload,
}
}
export const register=(newinscrire)=>{
return{
type:REGISTER,
payload :newinscrire,
}
}
export const editsujet=(id,newedit)=>{
return{
type:EDITSUJET,
payload:id,

}
}
export const deleteSujet = id => {
  return {
    type: DELETESUJET,
    payload:id,
  };}
