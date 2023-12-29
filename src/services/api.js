const HEADERS = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
}


function setToken(token) {
    HEADERS.Authorization = 'Bearer ' + token;
    localStorage.setItem('token', token);
}

async function login(userDatas) {
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            body: JSON.stringify(userDatas),
            headers: {'Content-Type': 'application/json'},
        })
        const data = await response.json();
        if (data.error) throw data.error;
        setToken(data.body.token)
        console.log(data)
        return data;
    } catch (error) {
        console.log(error)
    }
}

async function getUserProfile() {
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        })
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log(error)
    }
}

async function updateUserInfos(userDatas) {
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userDatas)
        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error)
    }
}

export {
    login,
    getUserProfile,
    setToken,
    updateUserInfos,
}