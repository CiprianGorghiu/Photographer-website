import React, { useState } from "react";
import "./Programari.css";
import emailjs from 'emailjs-com';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Programari = () => {
    
    const [formData, setFormData] = useState({
        from_name: '',
        adresa: '',
        nr_tel: '',
        data_event: '',
        ora: '',
        message: ''
    });

    const [alertState, setAlertState] = useState({
        open: false,
        message: '',
        severity: 'success' // poți seta implicit la 'success' sau 'error'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCloseAlert = () => {
        setAlertState({ ...alertState, open: false });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_a1ynl26', 'template_0a3znog', formData, 'fTrRZU_Pfqxk1bnhl')
            .then((response) => {
                console.log('Succes', response.status, response.text);
                setAlertState({
                    open: true,
                    message: 'Te-ai programat cu succes!',
                    severity: 'success'
                });
                setFormData({
                    from_name: '',
                    adresa: '',
                    nr_tel: '',
                    data_event: '',
                    ora: '',
                    message: ''
                }); // Resetează valorile formularului după trimiterea cu succes
            }).catch((error) => {
                console.log('Failed', error);
                setAlertState({
                    open: true,
                    message: 'Trimiterea programării a eșuat. Te rugăm să încerci din nou mai târziu.',
                    severity: 'error'
                });
            });
    };

    return (
        <div className="programari">
            <div className="animated-text-gradient">
                <h2>Fa-ti o programare</h2>
                <i className="fas fa-calendar-alt"></i>
            
        </div>
            <div className="programari-form">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="from_name" 
                        placeholder="Nume" 
                        value={formData.from_name} 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="email" 
                        name="adresa" 
                        placeholder="Email" 
                        value={formData.adresa} 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="tel" 
                        name="nr_tel" 
                        placeholder="Telefon" 
                        value={formData.nr_tel} 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="date" 
                        name="data_event" 
                        placeholder="Data" 
                        value={formData.data_event} 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="time" 
                        name="ora" 
                        placeholder="Ora" 
                        value={formData.ora} 
                        onChange={handleChange} 
                        required 
                    />
                    <textarea 
                        name="message" 
                        placeholder="Mesaj" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                    ></textarea>
                    <button type="submit">Trimite</button>
                </form>
            </div>
            <Snackbar
                open={alertState.open}
                autoHideDuration={6000} 
                onClose={handleCloseAlert}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }} 
            >
                <MuiAlert
                    elevation={6}
                    variant="filled"
                    onClose={handleCloseAlert}
                    severity={alertState.severity}
                >
                    {alertState.message}
                </MuiAlert>
            </Snackbar>
            
                <div className="contact-icons">
                <a href="tel:123-456-7890"><i className="fas fa-phone"></i></a>
                <a href="mailto:someone@example.com"><i className="fas fa-envelope"></i></a>
                <a href="https://api.whatsapp.com/send?phone=40787602465"><i className="fab fa-whatsapp"></i></a>


                </div>
         

        </div>

        
    );
};

export default Programari;
