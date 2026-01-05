import { Heart } from "lucide-react";
import * as React from "react";

export function LikeToggle() {
    const [isLiked, setIsLiked] = React.useState(false);
    const [count, setCount] = React.useState(0);

    function handleClick() {
        setIsLiked(!isLiked);
        //increment count by 1 when i make click
        setCount(count + 1);
        // in this part we want to increment the count by 3 when liked, but we mistakenly call setCount multiple times
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        //-------------------------------
        // Correct way to increment by 3
        // using a callback function to ensure we get the latest state
        // setCount((prevCount) => prevCount + 1);
        // setCount((prevCount) => prevCount + 1);
        // setCount((prevCount) => prevCount + 1);
    }
    return (
        <button className="group flex items-center gap-1" onClick={handleClick}>
            <Heart
                className={
                    isLiked
                        ? "fill-pink-500 stroke-none"
                        : "stroke-slate-200 group-hover:stroke-slate-300"
                }
            />
            <span>{count}</span>
        </button>
    )
}
