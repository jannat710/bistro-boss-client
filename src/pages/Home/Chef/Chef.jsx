import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ChefItem from "./ChefItem";


const Chef = () => {
    const [menu,setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)})
    },[])
    return (
        <section>
            <SectionTitle heading='CHEF RECOMMENDS' subHeading='Should Try'>              
            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {
                    menu.map(item => <ChefItem
                        key={item._id}
                        item={item}
                    ></ChefItem>)
                }
            </div>
            
        </section>
    );
};

export default Chef;