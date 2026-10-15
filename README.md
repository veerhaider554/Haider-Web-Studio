# Haider Web Studio — Portfolio

A responsive portfolio website made with separate HTML, CSS, and JavaScript files. The contact form is prepared for Formspree, a hosted form service, so a custom backend is not needed.

## Project structure

```text
haider-web-studio-portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

## Run it

1. Extract the ZIP file.
2. Keep the `css` and `js` folders beside `index.html`.
3. Open `index.html` in a browser, or run the folder with a local web server.
4. To publish it, upload the complete folder to a static hosting service.

## Portfolio details

- Brand: Haider Web Studio
- Contact: `veerhaider655@gmail.com`
- No public phone number or WhatsApp link is included.
- The public contact number and WhatsApp link have been removed. Email remains visible as an alternative contact method.
- The contact form is not live until you connect a real Formspree form ID. The placeholder intentionally prevents pretending that messages are being sent.

## Before sharing publicly

- Add links to real project demos and source repositories when you have them.
- Replace or expand the sample project cards as your own projects become stronger.
- Do not describe practice projects as paid client work unless they actually were.
- Check the site on a phone and a desktop, and verify the email link opens the expected email app.
- The Google Fonts connection needs internet access; the site still has fallback fonts.

## Editing guide

- Change page text and sections in `index.html`.
- Change colours, spacing, and responsive layouts in `css/style.css` under `:root` and the relevant section rules.
- Change mobile menu behaviour and the footer year in `js/script.js`.


## Connect the contact form (Formspree)

1. Create an account at [Formspree](https://formspree.io/) and create a new form.
2. Set the recipient to `veerhaider655@gmail.com` and complete any email verification Formspree requests.
3. Copy the form endpoint shown by Formspree. It will look like `https://formspree.io/f/yourFormId`.
4. In `index.html`, find the `<form id="contactForm" ...>` opening tag and replace `https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID` with your exact endpoint.
5. Test a submission from the published site and check the inbox and spam folder. Confirm the service dashboard shows the submission.
6. Keep any service account credentials private. This form uses a hosted service; it does not require your own backend or database.

Until steps 1–4 are completed, the form will display a setup message and will not submit. Do not publish it as a working contact form before testing a real submission.
