import {z} from "zod";
const campaignValidator=z.object({
    title:z.string("title is required").min(3,"Title must be at least 3 characters long"),
    slug:z.string("slug is required and unique").min(3,"Slug must be at least 3 characters long"),
    description:z.string("description is required").min(3,"Description must be at least 3 characters long"),
    thumbnail:z.string("thumbnail is required").optional(),
    isActive:z.boolean().default(true),
})
export default campaignValidator;     