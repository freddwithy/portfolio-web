import type { APIRoute } from "astro"
import { Resend } from "resend"

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const POST: APIRoute = async ({ request }) => {
    const body = await request.json()
    const { email, name, message } = body

    if (!email || !name || !message) {
        return new Response(null, {
            status: 404,
            statusText: "Did not provide all required fields.",
        })
    }

    const send = await resend.emails.send({
        from: "fredd@freddsana.art",
        to: email,
        subject: "Hola, gracias por contactarme! :)",
        text: `Hola ${name}, gracias por contactarme! Tu mensaje fue: ${message}. Pronto estaré en contacto contigo. Saludos!`,
    })

    const send2 = await resend.emails.send({
        from: "fredd@freddsana.art",
        to: "freddyemanuelsanabrianalerio@gmail.com",
        subject: "Nuevo mensaje de contacto en freddsana.art!",
        text: `Hola, tienes un nuevo mensaje de contacto de ${name} con el correo ${email}. El mensaje fue: ${message}`,
    })

    if (send.data && send2.data) {
        return new Response(
          JSON.stringify({
            message: send.data,
            message2: send2.data
          }),
          {
            status: 200,
            statusText: "OK",
          }
        );
      } else {
        return new Response(
          JSON.stringify({
            message: send.error,
            message2: send2.error
          }),
          {
            status: 500,
            statusText: "Internal Server Error",
          }
        );
      }
}