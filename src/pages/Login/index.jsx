import React, { useState, useEffect } from 'react';
import { login, logout, checkAuth } from './fetchApi';


const Login = () => {

    const [data, setData] = useState({
        email: '',
        password: '',
        loading: false,
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        setData({ ...data, loading: true });
        const user = await login(data.email, data.password);
        setData({ ...data, loading: false });
        if (user.accessToken) {
            window.location.href = '/dashboard';
        }
    };


    useEffect(() => {
        checkAuth((user) => {
            if (user) {
                window.location.href = '/dashboard';
            }
        });
    }, []);

    return (
        <div className="login-container" style={styles.container}>
            <div className="loader" style={data.loading ? { display: 'block' } : { display: 'none' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            <div style={!data.loading ? { display: 'block' } : { display: 'none' }}>
                <form className="login-form" style={styles.form}>
                    <h2 style={styles.heading}>Login</h2>
                    <div className="form-group">
                        <label htmlFor="email" style={styles.label}>Email:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" style={styles.input}
                            onChange={(e) => { setData({ ...data, email: e.target.value }) }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" style={styles.label}>Password:</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" style={styles.input}
                            onChange={(e) => { setData({ ...data, password: e.target.value }) }}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" style={styles.button} onClick={handleLogin} >Login</button>
                </form>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    form: {
        width: '300px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    label: {
        marginBottom: '5px',
    },
    input: {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        borderRadius: '3px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
    },
    button: {
        width: '100%',
        padding: '10px',
        borderRadius: '3px',
        border: 'none',
        backgroundColor: '#3e78ff',
        color: '#fff',
        cursor: 'pointer',
    },
};

export default Login;
