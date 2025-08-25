import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ApplicationData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  companySize: string;
  industry: string;
  location: string;
  mealBudget?: string;
  requirements?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const applicationData: ApplicationData = await req.json();

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h1 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">New Institution Application</h1>
          
          <div style="margin: 20px 0;">
            <h2 style="color: #4CAF50; font-size: 18px; margin-bottom: 15px;">Company Information</h2>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
              <p style="margin: 8px 0;"><strong>Company Name:</strong> ${applicationData.companyName}</p>
              <p style="margin: 8px 0;"><strong>Contact Person:</strong> ${applicationData.contactName}</p>
              <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${applicationData.email}" style="color: #4CAF50;">${applicationData.email}</a></p>
              <p style="margin: 8px 0;"><strong>Phone:</strong> <a href="tel:${applicationData.phone}" style="color: #4CAF50;">${applicationData.phone}</a></p>
              <p style="margin: 8px 0;"><strong>Location:</strong> ${applicationData.location}</p>
            </div>
          </div>

          <div style="margin: 20px 0;">
            <h2 style="color: #4CAF50; font-size: 18px; margin-bottom: 15px;">Business Details</h2>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
              <p style="margin: 8px 0;"><strong>Company Size:</strong> ${applicationData.companySize}</p>
              <p style="margin: 8px 0;"><strong>Industry:</strong> ${applicationData.industry}</p>
              <p style="margin: 8px 0;"><strong>Monthly Meal Budget:</strong> ${applicationData.mealBudget || 'Not specified'}</p>
            </div>
          </div>

          ${applicationData.requirements ? `
          <div style="margin: 20px 0;">
            <h2 style="color: #4CAF50; font-size: 18px; margin-bottom: 15px;">Special Requirements</h2>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
              <p style="margin: 8px 0;">${applicationData.requirements}</p>
            </div>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              <em>Submitted on: ${new Date().toLocaleString('en-US', { 
                timeZone: 'UTC',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })} UTC</em>
            </p>
          </div>
        </div>
      </div>
    `;

    const emailResponse = await resend.emails.send({
      from: "Weechoo Platform <onboarding@resend.dev>",
      to: ["wechuasilas@gmail.com"],
      subject: `New Institution Application: ${applicationData.companyName}`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Email sent successfully",
      emailId: emailResponse.data?.id 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error("Error in send-application-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);