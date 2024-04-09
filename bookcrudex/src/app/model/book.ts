

export class Book
{

   

    constructor(public bkid:number=-1,public bkname:string='',public bkprice:number=0.0)
    {
       console.log("new book details:"+bkid+","+bkname+","+bkprice);
    }
}