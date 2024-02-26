const Contact = () => {
  return (
    <div className="contact">
      <h3 className="font-bold">Contact us</h3>
      <form>
        <label>
          <span>Your Email:</span>
          <input className="" type="email" name="email" required />
        </label>
        <br />
        <label>
          <span>Your message:</span>
          <textarea className="" type="message" required />
        </label>
        <br />
        <button className="">submit</button>
      </form>
    </div>
  );
};

export default Contact;
