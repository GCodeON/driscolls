import prisma from '../../prisma/prisma';

export async function GET(req: Request, res: Response) {

    try {
        const users = await prisma.user.findMany()
  
        return Response.json(users)
  
    } catch (err) {
        return Response.json(err)
    }
}