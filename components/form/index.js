const Form = ({
    id,
    content
}) => {

    return (
        <section id={id} className='form-container container'>
            <fieldset>
                <legend>Your Contact Information</legend>

                <div className='form-wrapper--contact'>
                    <label htmlFor='name'>Your Name</label>
                        <input type='text' id='name' value='Your Name' />
                    <label htmlFor='phone'>Your Phone Number</label>
                        <input type='text' id='phone' value='Your Phone Number' />
                    <label htmlFor='email'>Your Email</label>
                        <input type='email' id='email' value='Your Email' />
                </div>
            </fieldset>

            <fieldset>
                <legend>About You</legend>

                <div className='form-wrapper--opinion'>
                    <label>
                        <input type='radio' name='money' value='$' checked />
                    </label>
                    <label>
                        <input type='radio' name='money' value='$$' />
                    </label>
                    <label>
                        <input type='radio' name='money' value='$$$' />
                    </label>
                </div>

                <div className='form-wrapper'>
                    <label htmlFor='money-satisfaction'>How would you rate the cost</label>
                    <textarea name='yoodaleo' id='money-satisfaction' cols='30' rows='10'></textarea>
                </div>

                <label>
                    <input id='subscribe' type='checkbox' value='subscribe' value='get me on that list' />
                </label>

                <button type='submit'>Submit</button>
            </fieldset>

            <aside>
                This is also related to the form
            </aside>
        </section>
    );
}

export default Form;