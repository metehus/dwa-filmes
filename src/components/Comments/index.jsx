const commentarios = [{
    "usuario": "mary",
    "comentario": "Muito bom, gostei demais!",
    "filme": "vingadores 2"
},
{
    "usuario": "mary",
    "comentario": "Muito bom, gostei muito!",
    "filme": "vingadores 3"
},
{
    "usuario": "mary",
    "comentario": "Muito bom, gostei!",
    "filme": "vingadores"
}
]

export default function Comments() {
    return (
        <div className="container text-center">
            <div className="row">
                {commentarios.map((comment, i) => (
                    <div className="col" key={i.toString()}>
                        <div className="card">
                            {comment.comentario}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}