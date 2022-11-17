
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const funcionarioSchema = new Schema({
  funcionario:{
    type:String,
    requires:true,
    unique:true,
    trim:true,
  },
  methods:{
    findFuncionarios(cb){
      return mongoose.model('Animal').find({ type: this.type }, cb);
    }
  }
});
