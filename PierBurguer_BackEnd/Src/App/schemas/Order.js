// Esse é um outro tipo de banco de dados, so que nao relacional.
// essas sao as schemas o que seria as migrations do postgres
// docker run --name -p 27017:27017 -d -t mongo para instalar o mongo
// docker logs 39475885   da tudi que ocorreu com container se ouve erro se subiu uma imagem tudo.
import mongoose from 'mongoose';
import { string } from 'yup';

const OrderSchema = new mongoose.Schema({  // new mongoose.Schema define a estrutura do seu documento. que sera convertido em mongodb
  user: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  products: [
    {
      id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  status: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
}
);

const Order = mongoose.model('Order', OrderSchema); 

export default Order;
