// api/enviar.js
import nodemailer from "nodemailer";

const allowOrigin = process.env.CORS_ALLOW_ORIGIN || ""; // ej: https://mymdevelopers.com.ar

export default async function handler(req, res) {
  // CORS opcional (útil si el form vive en otro dominio)
  if (allowOrigin) {
    res.setHeader("Access-Control-Allow-Origin", allowOrigin);
    res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") return res.status(200).end();
  }

  if (req.method !== "POST")
    return res.status(405).json({ error: "Método no permitido" });

  // Parseo del body (esperamos JSON desde fetch)
  const { name, company, email, subject, message, website } = req.body || {};

  // Honeypot
  if (website) return res.status(200).json({ ok: true });

  if (!name || !email || !message)
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) return res.status(400).json({ error: "Email inválido" });

  try {
    // Transporte SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // ej: smtp.gmail.com
      port: Number(process.env.SMTP_PORT), // 587 (TLS) o 465 (SSL)
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Formulario Web" <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL, // a dónde lo recibís
      replyTo: `${name} <${email}>`,
      subject: `Nuevo mensaje: ${subject || "Consulta desde la web"}`,
      text: `Nombre: ${name}
Empresa: ${company || "-"}
Email: ${email}

Mensaje:
${message}`,
      html: `<h2>Nueva consulta desde el sitio</h2>
<p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
<p><strong>Empresa:</strong> ${escapeHtml(company || "-")}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Mensaje:</strong><br>${escapeHtml(message).replace(
        /\n/g,
        "<br>"
      )}</p>`,
    });

    return res.status(200).json({ ok: true, msg: "Mensaje enviado" });
  } catch (err) {
    console.error("Mailer error:", err);
    return res.status(500).json({ error: "Error al enviar el correo" });
  }
}

function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
