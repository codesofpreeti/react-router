const Contact = () => {
  return (
    <div className="contact">
        <h3>Contact us</h3>
        <form>
            <label>
                <span>Your Email:</span>
                <input type="email" name="email" required />
            </label>
            <label>
                <span>Your message:</span>
                <input type="message" required />
            </label>
            <button>submit</button>
        </form>
    </div>
  )
}

export default Contact;