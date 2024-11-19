
export const formDate = (data)=>{
    const houres = new Date(data).getHours()
    const minutes = new Date(data).getMinutes();
    return `${houres<10 ? '0' + houres : houres} : ${minutes <10 ? '0':minutes}`
}