import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<HTMLDivElement | null>(null);

  const sendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const hasNameErr = name.trim() === '';
    const hasEmailErr = email.trim() === '';
    const hasMsgErr = message.trim() === '';

    setNameError(hasNameErr);
    setEmailError(hasEmailErr);
    setMessageError(hasMsgErr);

    if (hasNameErr || hasEmailErr || hasMsgErr) return;

    // Build a mailto to your inbox
    const to = 'rashiidmatan@gmail.com';
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n—\nFrom: ${name}\nContact: ${email}`
    );

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

    // Optional: clear fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper" ref={form as any}>
          <h1>Contact Me</h1>
          <p>Got a project or collaboration in mind? Let’s connect.</p>

          {/* Quick links */}
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <IconButton
              component="a"
              href="https://github.com/rashiedomar1-spec"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/abdulrashiid-o-matan"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>

          <Box component="form" noValidate autoComplete="off" className="contact-form">
            <div className="form-flex">
              <TextField
                required
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
              />
              <TextField
                required
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? 'Please enter your email or phone number' : ''}
              />
            </div>

            <TextField
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? 'Please enter the message' : ''}
            />

            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
