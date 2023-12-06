const Contact = () => {
  return (
    <div className="contact">
        <h3>Contact us</h3>
        <form>
            <label>
                <span>Your Email:</span>
                <input  className="border " type="email" name="email" required />
            </label><br />
            <label>
                <span>Your message:</span>
                <textarea className="border " type="message" required />
            </label><br />
            <button className="border rounded-md bg-slate-200">submit</button>
        </form>
    </div>
  )
}

export default Contact;