import { Course } from './Course';
import { Category } from "./Category";
import { Episode } from './Episode';
import { User } from "./User"

Category.hasMany(Course)

Course.belongsTo(Category)
Course.hasMany(Episode)

Episode.belongsTo(Course)

export { 
    Category,
    Course,
    Episode,
    User
}