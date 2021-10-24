import "./Tags.css";

export const Tags = ({ student }) => {

    return (
        <>
            {student.tags.length > 0 ?
                (
                    <div className="tags">
                        {student.tags.map((tag) => {
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