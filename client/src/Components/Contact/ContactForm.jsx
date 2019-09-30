import React from 'react'

const Form = () => {
    return (
        <main className="form-main">
            <section className="form-bg">
                <form className="needs-validation form-container" noValidate>
                <h1>Contact Us</h1>
                    <input type="text"  id="validationCustom012" placeholder="Name"
                        required />
                    <input type="email"  id="validationCustom022" placeholder="Email" required />
                    <textarea></textarea>
                    <button type="submit">Submit</button>
                </form>
            </section>
        </main>
    )
}
export default Form