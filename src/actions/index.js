const  deleteLine = (index, method) => {
    return {
        type: 'DELETE_LINE',
        payload: index, method
    };
};

export {deleteLine};