import axios from "axios"

export const getBooks =async (req,res)=>
{
    return  axios('http://localhost:4000/api/v1/books'); 
}
