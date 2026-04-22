import type { APIRoute } from 'astro'

export const POST: APIRoute = async ({ request }) => {
  let body
  try {
    body = await request.json()
  } catch {
    return new Response(JSON.stringify({ error: 'Solicitud inválida' }), { status: 400 })
  }

  const { nombre, organismo, email, telefono, mensaje } = body

  if (!nombre?.trim() || !organismo?.trim() || !email?.trim() || !mensaje?.trim()) {
    return new Response(JSON.stringify({ error: 'Faltan campos obligatorios' }), { status: 400 })
  }

  const RESEND_API_KEY = import.meta.env.RESEND_API_KEY

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Web Domac <onboarding@resend.dev>',
      to: 'segociudad@gmail.com',
      subject: `Contacto web: ${organismo}`,
      html: `
        <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:24px;">
          <h2 style="color:#1a1a1a;">Nueva solicitud de contacto</h2>
          <table style="width:100%;border-collapse:collapse;margin-top:16px;">
            <tr><td style="padding:8px 0;color:#666;font-size:14px;width:120px;">Nombre</td><td style="padding:8px 0;font-size:14px;font-weight:600;">${nombre}</td></tr>
            <tr><td style="padding:8px 0;color:#666;font-size:14px;">Organismo</td><td style="padding:8px 0;font-size:14px;font-weight:600;">${organismo}</td></tr>
            <tr><td style="padding:8px 0;color:#666;font-size:14px;">Email</td><td style="padding:8px 0;font-size:14px;font-weight:600;">${email}</td></tr>
            <tr><td style="padding:8px 0;color:#666;font-size:14px;">Teléfono</td><td style="padding:8px 0;font-size:14px;">${telefono || '—'}</td></tr>
          </table>
          <div style="margin-top:16px;padding:16px;background:#f9fafb;border-radius:8px;">
            <p style="font-size:14px;color:#374151;line-height:1.6;margin:0;">${mensaje}</p>
          </div>
        </div>
      `,
    }),
  })

  if (!res.ok) {
    return new Response(JSON.stringify({ error: 'Error al enviar' }), { status: 500 })
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 })
}
