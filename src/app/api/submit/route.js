import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';
import { datas } from '../../../utils/schema';
const db = drizzle(process.env.DATABASE_URL);
export async function POST(request){
    try{
        const reqBody = await request.json();
        const{name,email,quantity,number,location} =reqBody
        console.log(reqBody)
        const result = await db.insert(datas).values({
            email:email,
            name:name,
            quanity:quantity,
            number:number,
            position:location,
            status:"ordered"
          });
          console.log(result)
        return NextResponse.json({message:"lauda"})
    }
    catch(error){
        console.log(error);
        return NextResponse.json({error:error})
    }
}