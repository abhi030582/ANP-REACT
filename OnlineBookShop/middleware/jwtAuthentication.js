import jwt from 'jsonwebtoken';
export const jwtAuthentication = async (req,decode)=>
{
  const token = req.header("Authorization");
  if(!token)
    {
        res.status(401).json({
            message:"invalid Authorization"
        })
    }
    await jwt.varify(token,process.env.JWT_KEY,(err,decode)=>{
        if(err)
            {
                console.log(token);
                res.status(401).json({
                    message:'Token to valid'
                })
            }
            else
            {
              req.user = decode.user;
              next();
            }
    });

   
}
