export const getApi = (url: string, successFn: (response: any) => void, errorFn: (error: any) => void) => {
    fetch(url)
        .then((response) => response.json())
        .then(response => successFn(response))
        .catch(error => {
            console.error(error);
            errorFn(error);
        });
}

export const updateApi = (url: string, data:any,  successFn: (response: any) => void, errorFn: (error: any) => void) => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then(response => successFn(response))
        .catch(error => {
            console.error(error);
            errorFn(error);
        });
}