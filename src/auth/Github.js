import React from 'react';
import LoginGithub from 'react-login-github';


import axios from 'axios';

const Github = ({informParent = f => f}) => {
    
    const responseGithub = response => {
        console.log(response);
        // axios({
        //     method: 'POST',
        //     url: `${process.env.REACT_APP_API}/github-login`,
        //     data: { clientID: response.clientID, accessToken: response.accessToken }
        // })

        // .then(response => {
        //     console.log('GITHUB SIGNIN SUCCESS', response);
        //     // inform parent component
        //     informParent(response);
            
        // })
        // .catch(error => {
        //     console.log('GITHUB SIGNIN ERROR', error.response);
        // });

}; 

return (
    <LoginGithub clientId="362836bcd59b53ccc1ef"
    onSuccess={responseGithub}
    onFailure={responseGithub}
    className={"btn btn-dark btn-lg btn-block"}
    buttonText={"Login with Github"}
    
    
    />
);
};



export default Github;










