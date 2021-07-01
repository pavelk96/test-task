const  deleteLine = (index, method) => {
    return {
        type: 'DELETE_LINE',
        payload: index, method
    };
};

const saveLine = (index, method, data) => {
    return {
        type: 'SAVE_LINE',
        payload: index,
        method: method,
        data: data
    }
}

export {deleteLine, saveLine};