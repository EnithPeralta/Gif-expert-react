import { useState } from "react";
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp = () => {
    const [category, setCategory] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (category.includes(newCategory)) return;
        setCategory([newCategory, ...category]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={(e) => onAddCategory(e)}/>
                
            {category.map((cat) => (
                <GifGrid
                    key={cat}
                    category={cat}
                />
            ))}
        </>
    );
};

