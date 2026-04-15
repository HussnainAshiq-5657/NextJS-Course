import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  semester: String,
  university: String,
});

export const Student = mongoose.models.students || mongoose.model('students', StudentSchema);
