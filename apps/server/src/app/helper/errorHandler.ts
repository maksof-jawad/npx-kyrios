import { Request, Response } from 'express';
function errorHandler(func :any) {
    return async (req : Request, res : Response) => {
        try {
            await func(req, res);
        } catch (err : any) {
            res.status(Number(res.status) || 500).send({ success: false, message: err.message });
        }
	};
}
   
export default errorHandler;