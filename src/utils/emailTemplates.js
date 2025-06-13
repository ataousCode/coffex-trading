// Email templates for meeting requests

export const createAdminMeetingNotification = (meetingDetails) => {
  return {
    to_email: "admin@coffextrading.com", // Replace with your admin email
    from_name: meetingDetails.clientName,
    from_email: meetingDetails.clientEmail,
    subject: `Meeting Auto-Confirmed - ${meetingDetails.topic} | CoffexTrading`,
    message: `
Dear Admin,

A new meeting has been automatically confirmed and scheduled through the website.

📋 CONFIRMED MEETING DETAILS:
Client Name: ${meetingDetails.clientName}
Email: ${meetingDetails.clientEmail}
Scheduled Date: ${meetingDetails.date}
Scheduled Time: ${meetingDetails.time}
Topic: ${meetingDetails.topic}

💬 CLIENT MESSAGE:
${meetingDetails.message || 'No additional message provided.'}

✅ AUTOMATIC ACTIONS COMPLETED:
1. Meeting automatically confirmed
2. Zoom link generated and sent to client
3. Confirmation email sent to client
4. Meeting details logged in system

📞 CLIENT CONTACT:
Email: ${meetingDetails.clientEmail}
Preferred Contact: Email

⚠️ ADMIN ACTION REQUIRED:
• Add this meeting to your personal calendar
• Prepare for the scheduled meeting
• Contact client if any changes are needed

The client has received their Zoom link and meeting confirmation automatically.

Best regards,
CoffexTrading Website System
    `,
    meeting_date: meetingDetails.date,
    meeting_time: meetingDetails.time,
    meeting_topic: meetingDetails.topic,
    client_name: meetingDetails.clientName,
    client_email: meetingDetails.clientEmail,
  };
};

export const createClientConfirmationEmail = (meetingDetails) => {
  return {
    to_email: meetingDetails.clientEmail,
    from_name: "CoffexTrading Team",
    from_email: "info@coffextrading.com",
    subject: "Meeting Request Received - CoffexTrading",
    message: `
Dear ${meetingDetails.clientName},

Thank you for your interest in scheduling a meeting with CoffexTrading! 🎉

📋 YOUR MEETING REQUEST:
Topic: ${meetingDetails.topic}
Requested Date: ${meetingDetails.date}
Requested Time: ${meetingDetails.time}

✅ NEXT STEPS:
• We have received your meeting request
• Our team will review and confirm within 24 hours
• You'll receive a calendar invite with Zoom meeting details
• If we need to suggest alternative times, we'll contact you

📞 NEED IMMEDIATE ASSISTANCE?
If you have urgent questions, please contact us:
• Email: info@coffextrading.com
• Phone: +86 177 6539 9420

We look forward to speaking with you!

Best regards,
The CoffexTrading Team

---
CoffexTrading - Global Import & Export Solutions
Website: www.coffextrading.com
    `,
    client_name: meetingDetails.clientName,
    meeting_date: meetingDetails.date,
    meeting_time: meetingDetails.time,
    meeting_topic: meetingDetails.topic,
  };
};

// Template for admin to send meeting confirmation with Zoom link
export const createMeetingConfirmationTemplate = (meetingDetails, zoomLink) => {
  return {
    to_email: meetingDetails.clientEmail,
    from_name: "CoffexTrading Team",
    from_email: "info@coffextrading.com",
    subject: `Meeting Confirmed - ${meetingDetails.topic} | CoffexTrading`,
    message: `
Dear ${meetingDetails.clientName},

Great news! Your meeting has been confirmed. 🎉

📅 CONFIRMED MEETING DETAILS:
Topic: ${meetingDetails.topic}
Date: ${meetingDetails.date}
Time: ${meetingDetails.time}
Duration: 30-60 minutes

🔗 JOIN THE MEETING:
Zoom Link: ${zoomLink}
Meeting ID: [Meeting ID will be in the link]

📝 MEETING PREPARATION:
• Please join 2-3 minutes early
• Ensure you have a stable internet connection
• Have any relevant documents ready
• Prepare your questions in advance

📞 TECHNICAL SUPPORT:
If you experience any technical issues joining the meeting:
• Email: info@coffextrading.com
• Phone: +86 177 6539 9420

🔄 NEED TO RESCHEDULE?
If you need to reschedule, please contact us at least 2 hours before the meeting time.

We're excited to discuss how CoffexTrading can help with your business needs!

Best regards,
The CoffexTrading Team

---
CoffexTrading - Global Import & Export Solutions
Website: www.coffextrading.com
    `,
    client_name: meetingDetails.clientName,
    meeting_date: meetingDetails.date,
    meeting_time: meetingDetails.time,
    meeting_topic: meetingDetails.topic,
    zoom_link: zoomLink,
  };
};
