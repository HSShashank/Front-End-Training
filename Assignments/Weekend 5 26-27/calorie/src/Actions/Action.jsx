export const AddEntry=(item)=>{
    return {type:'ADD',
            payload:item
}
}
export const DeleteEntry=(id)=>{
    return {type:'DELETE',
            payload:id
}
}


