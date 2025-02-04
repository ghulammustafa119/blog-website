
import Hero from "@/components/Hero";
import { client } from "@/sanity/lib/client";

  import { Blog } from "./type";

 const Home = async () => {


 const query = `*[_type == 'blog']  | order(_updatedAt asc){
  title,description,image,"slug":slug.current
}`
  const data:Blog[] = await client.fetch(query)
  console.log(data)
  return (
    <div> 

       {
        data.map((item:Blog) =>(
          <Hero item={item} key={item.slug}/>
        ))
       }
    </div>
  );
}
export default Home