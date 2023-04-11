import mongoose from 'mongoose';
const { Schema } = mongoose;

const funcionarioSchema = new Schema({
  funcionario:{
    type:String,
    requires:true,
    unique:true,
    trim:true,
  },
});

const Funcionario = mongoose.model('Funcionario', funcionarioSchema);

export default { Funcionario };
