const actions = {
    FETCH_LATEST: "FETCH_LATEST",
    fetchLatest: (payload) => {
        return async (dispatch) => {
            const result = await fetch("http://192.168.29.30:6556/latest", {
                method: "GET",
            });

            const data = await result.json();
            dispatch(actions.storeLatest(data));
        };
    },
    STORE_LATEST: "STORE_LATEST",
    storeLatest: (payload) => {
        return {
            type: actions.STORE_LATEST,
            payload,
        };
    }
}

export default actions;