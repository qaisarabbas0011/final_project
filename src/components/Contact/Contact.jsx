import React from 'react'
import './Contact.css'
import msg_icon from '/src/assets/msg-icon.png'
import mail_icon from '/src/assets/mail-icon.png'
import phone_icon from '/src/assets/phone-icon.png'
import location_icon from '/src/assets/location-icon.png'
import white_arrow from '/src/assets/white-arrow.png'
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "cf74099f-1577-4652-a13e-805281f70326");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <div className='contact-col'>
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ipsam doloremque ad pariatur qui eos at quos! Hic, debitis consectetur optio quod neque soluta repellat, sapiente quo veniam, repudiandae voluptates.</p>
                <ul>
                    <li><img src={mail_icon} alt="" /> Contact@jaffary.com</li>
                    <li><img src={phone_icon} alt="" />+923545454545</li>
                    <li> <img src={location_icon} alt="" /> abs townn gilgit , danyoure city , pakistan</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label >Your Name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    <label >Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                    <label >write your message here</label>
                    <textarea name="message" rows='6' placeholder='Enter your message' required ></textarea>
                    <button type="submit" className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div >
    )
}

export default Contact
