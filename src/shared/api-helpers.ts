export const getApi = (url: string, successFn: (response: any) => void, errorFn: (error: any) => void) => {
    fetch(url, {
        headers: {
            'Accept': 'application/json'
        },
    })
        .then((response) => response.json())
        .then(response => successFn(response))
        .catch(error => {
            console.error(error);
            errorFn(error);
        });
}

export const getSyncApi = async (url: string) => {
    const result = await fetch(url, {
        headers: {
            'Accept': 'application/json'
        },
    });
    const response = await result.json();

    return response;
};

export const updateApi = (url: string, data:any,  successFn: (response: any) => void, errorFn: (error: any) => void) => {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => successFn(response))
        .catch(error => {
            console.error(error);
            errorFn(error);
        });
}