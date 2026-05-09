import {z} from "zod";

const leadValidator=z.object({
    name:z.string("name is required").min(3,"Name must be at least 3 characters long"),
    email:z.email("Invalid email")
    
})
export default leadValidator; 