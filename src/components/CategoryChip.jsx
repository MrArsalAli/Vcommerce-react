

function CategoryChip({category, isChosen, onClick}) {
    const {name} = category;
    return(
        <div onClick={onClick} className={`${isChosen ? "bg-gray-300" : "bg-white"} border p-2 m-1 mt-2 rounded-full cursor-pointer hover:bg-gray-300`}>
        <h1 className="">{name}</h1>
        </div>
    )
}


export default CategoryChip