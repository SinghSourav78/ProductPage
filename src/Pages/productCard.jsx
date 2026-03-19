function ProductCard({curEle}) {
    let {id, title, body} = curEle;
    return (
        <>
            <div className="p-4 bg-white border-2 border-black rounded-lg">
                <h1>UserId : <span>{id}</span></h1>
                <h3>Title : <span>{title}</span></h3>
                <div>Body : <p>{body}</p></div>
            </div>
        </>
    )
}

export default ProductCard;