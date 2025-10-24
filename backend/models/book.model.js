import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
   id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Smartphone', 'Feature Phone'] // Modify as needed
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))$/i.test(v); // URL validation for image
      },
      message: props => `${props.value} is not a valid URL!`
    }
  }
});
const Book = mongoose.model("Book", bookSchema);

export default Book;