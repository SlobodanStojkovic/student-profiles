import { useEffect, useState } from "react/cjs/react.development";
import "./Tags.css";

export const Tags = ({ tagArray }) => {

    return (
        <>
            {tagArray !== undefined ? (
                <div className="tags">

                    {tagArray.map((tag) => {
                        return <p className="tag" key={tag}> {tag} </p>
                    })}

                </div>
            )
                :
                (
                    null
                )
            }
        </>
    )
}