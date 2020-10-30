import React,{useState} from 'react';

const Contact = () => {

    const [data, setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",
    });

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname}. 
        My mobile number is ${data.phone} and email-id is ${data.email}, 
        Here is what I want to say i.e. ${data.msg}`);
    };

    const inputEvent = (event) => {
        const {name, value}=event.target;
        setData((preVal)=>{
            return {
                ...preVal,
                [name]:value,
            }
        })
    };

    return (
        <>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Full name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                name="fullname"
                                value={data.fullname}
                                onChange={inputEvent}
                                placeholder="Enter Your Full Name"/>
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Mobile Number</label>
                            <input
                                type="number"
                                className="form-control"
                                id="exampleFormControlInput1"
                                name="phone"
                                value={data.phone}
                                onChange={inputEvent}
                                placeholder="Enter 10-digit phone number"/>
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                name="email"
                                value={data.email}
                                onChange={inputEvent}
                                placeholder="name@example.com"/>
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea 
                                className="form-control" 
                                id="exampleFormControlTextarea1" 
                                rows="3"
                                name="msg"
                                value={data.msg}
                                onChange={inputEvent}
                                ></textarea>
                        </div>
                        <div className="col-12">
                            <button class="btn btn-outline-secondary" type="submit">Submit form</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
};

export default Contact;