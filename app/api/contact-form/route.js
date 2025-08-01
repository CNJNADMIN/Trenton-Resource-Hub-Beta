import nodemailer from 'nodemailer';
	
	export async function POST(req) {
	  const body = await req.json();
	
	  const { name, email, message } = body;
	
	  if (!name || !email || !message) {
	    return new Response(JSON.stringify({ error: 'All fields are required.' }), { status: 400 });
	  }
	
	  const transporter = nodemailer.createTransport({
	    service: 'gmail',
	    auth: {
	      user: process.env.EMAIL_USER,
	      pass: process.env.EMAIL_PASS
	    }
	  });
	
	  const mailOptions = {
	    from: process.env.EMAIL_USER,
	    to: process.env.EMAIL_USER,
	    subject: 'New Form Submission',
	    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
	  };
	
	  try {
	    await transporter.sendMail(mailOptions);
	    return new Response(JSON.stringify({ message: 'Form submitted successfully!' }), { status: 200 });
	  } catch (error) {
		console.error("Error sending email:", error);
	    return new Response(JSON.stringify({ error: 'Failed to send email.' }), { status: 500 });
	  }
	}