import prisma from '@/prisma/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    
    try {
        const users = await prisma.user.findMany();
        return Response.json(users)
  
    } catch (err) {
        return Response.json(err)
    }
}

export async function POST(req: NextRequest) {

    const formData = await req.json();
    try {
        const user = await prisma.user.create({
            data: formData
        })
      
        if(user) {
            return Response.json(user)
        }
  
    } catch (err) {
        return Response.json(err)
    }
}