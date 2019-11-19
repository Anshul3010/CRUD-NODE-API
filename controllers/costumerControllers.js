const Costumer = require('./../models/costumerModel');


exports.getAll = async (req,res)=>{
   
    try{
        const costumers = await Costumer.find();
        res.status(200).json({
            status:'success',
            data:costumers,
        });

    }catch(err){
        res.status(401).json({
            status:'fail',
            messsage:'bad request',
        });
    } 
};

exports.createCostumer = async (req,res)=>{
    try{
        const newCostumer = await Costumer.create(req.body);
        res.status(200).json({
            status:'success',
            data:newCostumer,
        });
    }catch(err){
        res.status(401).json({
            status:'fail',
            messsage:'bad request',
        });
    } 
};
exports.deleteAll = async (req,res)=>{
    try{
        await Costumer.deleteAll();
        res.status(200).json({
            status:'success',
            
        });

    }catch(err){
        res.status(401).json({
            status:'fail',
            messsage:'bad request',
        });
    }
};

exports.updateById = async (req,res)=>{
    try{
        const updatedCostumers = await Costumer.findByIdAndUpdate(req.params,req.body,{
            new:true,
            runValidators:true
        });
        res.status(200).json({
            status:'success',
            data: updatedCostumers,
            
        });

    }catch(err){
        res.status(401).json({
            status:'fail',
            messsage:err,
        });
    }
};

exports.deleteById = async (req,res)=>{
    try{
        await Costumer.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:'success',
            
        });

    }catch(err){
        res.status(401).json({
            status:'fail',
            messsage:'bad request',
        });
    }
};

exports.getById = async (req,res)=>{
    try{
       const costumer = await Costumer.findById(req.params.id);
        res.status(200).json({
            status:'success',
            data: costumer
            
        });

    }catch(err){
        res.status(401).json({
            status:'fail',
            messsage:'bad request',
        });
    }
};