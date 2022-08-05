export interface IData {
    id: string,
    speed?: string
}
export const addSessionStorage = (title: string, data:IData) => {
  let JSONData: string;
  if (sessionStorage.getItem(title)) {
    const uploadData: IData[] = JSON.parse(sessionStorage.getItem(title)!);
    const findRepeat = uploadData.find((obj) => obj.id === data.id);
    if (findRepeat) {
      uploadData.forEach((obj, index) => {
        if (obj.id === data.id) {
          uploadData.splice(index, 1, data);
        }
      });
      JSONData = JSON.stringify(uploadData);
      sessionStorage.setItem(title, JSONData);
    } else {
      uploadData.push(data);
      JSONData = JSON.stringify(uploadData);
      sessionStorage.setItem(title, JSONData);
    }
  } else {
    JSONData = JSON.stringify([data]);
    sessionStorage.setItem(title, JSONData);
  }
};

export const deleteSessionStorage = (title: string, data: IData) => {
  if (sessionStorage.getItem(title)) {
    const olddData: IData[] = JSON.parse(sessionStorage.getItem(title)!);
    const newData: IData[] = olddData.filter((obj) => obj.id !== data.id);
    const newDataStringify = JSON.stringify(newData);
    sessionStorage.setItem(title, newDataStringify);
  }
};

export const getSessinoStorage = (title: string) => JSON.parse(sessionStorage.getItem(title)!);
