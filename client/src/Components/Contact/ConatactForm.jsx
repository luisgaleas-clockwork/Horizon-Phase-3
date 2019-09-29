import React from 'react'
import '../bootstrapValidation'

const Form = () => {
    return (
        <main className="form-main">
            <section className="form-bg">
                <h1>Contact Us</h1>
                <form className="needs-validation form-container" noValidate>
                    <div className="left-align">
                        <h2>Name</h2>
                    </div>
                    <input type="text" className="form-control" id="validationCustom012" placeholder="Name"
                        required />
                    <div className="left-align">
                        <h2>Email</h2>
                    </div>
                    <input type="email" className="form-control" id="validationCustom022" placeholder="Email" required />
                    <textarea></textarea>
                    <button type="submit">Submit form</button>
                </form>
            </section>
        </main>
    )
}
export default Form