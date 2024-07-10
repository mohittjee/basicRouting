import { Form, redirect, useActionData } from "react-router-dom"

function contact() {
  const data = useActionData() 
  return (
    <div className="contact">
    <h3>Contact Us</h3>
    <Form method="post" action="/help/contactme">
      <label>
        <span>Your email:</span>
        <input type="email" name="email" required />
      </label>
      <label>
        <span>Your message:</span>
        <textarea name="message" required></textarea>
      </label>
      <button>Submit</button>

      {data && data.error && <p>{data.error}</p>}
    </Form>
  </div>
  )
}

export default contact


export const contactAction = async ({ request }) => {
  console.log(request)
  const data = await request.formData()

  const submission = {
    email: data.get('email'),
    message: data.get('message')
  }

  console.log(submission)

  // send your post request

  if (submission.message.length < 10) {
    return {error: 'Message must be over 10 chars long.'}
  }

  // redirect the user
  return redirect('/')
}
