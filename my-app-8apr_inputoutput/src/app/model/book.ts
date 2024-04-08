

export class Book
{

   

    constructor(public bkid:number=1,public bkname:string='react',public bkprice:number=1000)
    {
       console.log("new book details:"+bkid+","+bkname+","+bkprice);
    }
}