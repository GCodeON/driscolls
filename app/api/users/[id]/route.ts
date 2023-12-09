import prisma from '@/prisma/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: Request, {params}: {params : {id: string}}) {

    // get user by id
    const {id} = params;

    try {
        const user = await prisma.user.findUnique({
            where: {
                id: parseInt(id)
            }
        })
        return Response.json(user)
    } catch (err) {
        return Response.json(err)
    }
}

export async function POST(req: NextRequest, {params}: {params : {id: string}}) {

    // update user by id
    const {id} = params;
    const formData = await req.json();

    try {
        const user = await prisma.user.update({
            where: {
                id: parseInt(id)
            },
            data: formData
        })
        return Response.json(user)
    } catch (err) {
        return Response.json(err)
    }
}

export async function DELETE(req: NextRequest, {params}: {params : {id: string}}) {
    
    // delete user by id
    const {id} = params;

    try {
        const user = await prisma.user.delete({
            where: {
                id: parseInt(id)
            }
        })
        const updatedList = await prisma.user.findMany();
        return Response.json(updatedList)
    } catch (err) {
        return Response.json(err)
    }
}