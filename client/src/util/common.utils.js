export const formDate = (data) => {
    const hours = new Date(data).getHours();
    const minutes = new Date(data).getMinutes();
    return `${hours < 10 ? '0' + hours : hours} : ${minutes < 10 ? '0' + minutes : minutes}`;
  };
  