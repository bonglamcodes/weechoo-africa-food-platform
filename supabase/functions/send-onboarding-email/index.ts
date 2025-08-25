import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  const { method } = req

  // Handle CORS
  if (method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      },
    })
  }

  try {
    const formData = await req.json()
    
    // Email template
    const emailHtml = `
      <h2>New Institution Onboarding Submission</h2>
      
      <h3>Company Information</h3>
      <p><strong>Company Name:</strong> ${formData.companyName}</p>
      <p><strong>Contact Person:</strong> ${formData.contactName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Location:</strong> ${formData.location}</p>
      
      <h3>Team Details</h3>
      <p><strong>Company Size:</strong> ${formData.companySize}</p>
      <p><strong>Industry:</strong> ${formData.industry}</p>
      <p><strong>Monthly Meal Budget:</strong> ${formData.mealBudget || 'Not specified'}</p>
      
      <h3>Requirements</h3>
      <p><strong>Special Requirements:</strong> ${formData.requirements || 'None specified'}</p>
      
      <hr>
      <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
    `

    // Send email using Resend
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Weechoo Platform <onboarding@weechoo.com>',
        to: ['hello@weechoo.com'], // Replace with your actual email
        subject: `New Institution Onboarding: ${formData.companyName}`,
        html: emailHtml,
      }),
    })

    if (res.ok) {
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Email sent successfully' 
        }),
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
    } else {
      const error = await res.text()
      throw new Error(`Email sending failed: ${error}`)
    }

  } catch (error) {
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    )
  }
})