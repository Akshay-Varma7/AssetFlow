export class ApiError extends Error{
    constructor(status,msg,isOperational=true){
        super(msg);//Error constructor call with arg->keeps this.message=msg
        //2 property by us
        this.statusCode = status;
        this.isOperational = isOperational;//default true
    }//error has 3 prop: message,name & stack
}