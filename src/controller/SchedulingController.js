import SchedulingModel from "../model/SchedulingModel.js";

class SchedulingController  {

    async getOne(request, response){
        const id = request.params.id; 

        const scheduling = await SchedulingModel.findById(id);
    
    if(scheduling){
       return  response.send(scheduling);
    }

    response.status(404).send({message: "user not found!"})
    }

    async index(request, response){
        const schedulings = await SchedulingModel.find();

        response.send( schedulings );
    }

    async remove(request, response){
        const id = request.params.id;

        const scheduling = await SchedulingModel.findById(id);

        if(scheduling) {
            await scheduling.remove();

            return response.send({message:"Usuario deletado"})
        }

        response.status(404).send({message: "user not found!"});
    }

    async store(request, response){
        const{ name, email, phones, birthDate, schedulingDate, schedulingTime} = request.body;

        const scheduling = await SchedulingModel.create({ 
            name, 
            phones, 
            email, 
            birthDate,
            schedulingDate,
            schedulingTime 
        })


    response.send({ message: "usuario criado", scheduling });
    }

    async update(request, response){
        const id = request.params.id;
        const{ name, phones, email, schedulingDate, birthDate, schedulingTime} = request.body;

        const scheduling = await SchedulingModel.findByIdAndUpdate(id, {
            name, 
            phones, 
            email, 
            birthDate, 
            schedulingDate,
            schedulingTime
        },{
            new: true,
        });
        if(!scheduling){
            return response.status(404).send({message: " User not found"});
        }

        response.send({scheduling});
    }
};

export default SchedulingController;

/*
{
   "name": "Roberto",
   "phones": "4002-8922",
   "email": "robertin.bb@gmail.com",
   "password": "1234",
   "birthDate": "2022-04-01",
 "schedulingDate:"2022-04-01" ,
    "schedulingTime": "12:00:00"
}
*/