import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)

    };

    return (
        <div className="">
            <div>
                <SectionTitle heading='ADD AN ITEM' subHeading="What's new?"></SectionTitle>

            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} />

                    <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;