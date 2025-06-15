import prisma from "../../config"


const registerDb = (payload :any) =>{
return prisma.user.create({
    data : payload
})
}


export const authService ={
    registerDb
}