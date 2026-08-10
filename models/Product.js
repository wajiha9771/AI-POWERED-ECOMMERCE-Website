import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  nameSearchable: { 
    type: String, 
    lowercase: true, 
    index: true 
  }, 
  price: { 
    type: Number, 
    required: true 
  },
  category: { 
    type: String, 
    required: true, 
    lowercase: true
  },
  image: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String 
  },
  stock: { 
    type: Number, 
    required: true, 
    default: 10 
  },
  tags: [{ 
    type: String, 
    lowercase: true, 
    index: true 
  }] 
}, { timestamps: true });


productSchema.pre('save', function(next) {
  if (this.name) {
    this.nameSearchable = this.name.toLowerCase();
  }
  next();
});
const Product = mongoose.model('Product', productSchema);
export default Product;

