# Zoom Meeting System Setup Guide

This guide explains how to set up and use the Zoom meeting request system that uses EmailJS for communication.

## 🚀 Features

- **Client Meeting Requests**: Clients can request meetings through a user-friendly calendar interface
- **Email Notifications**: Automatic emails sent to both admin and client
- **Professional Templates**: Pre-formatted email templates for consistent communication
- **No API Required**: Uses EmailJS instead of Zoom API for simplicity

## 📧 EmailJS Setup

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Create a new email service (Gmail, Outlook, etc.)

### 2. Configure Email Templates

Create these email templates in your EmailJS dashboard:

#### Template 1: Admin Notification
- **Template ID**: `meeting_request_admin`
- **Subject**: `New Zoom Meeting Request - {{meeting_topic}}`
- **Content**:
```
New meeting request received:

📋 CLIENT DETAILS:
Name: {{from_name}}
Email: {{from_email}}

📅 MEETING DETAILS:
Topic: {{meeting_topic}}
Preferred Date: {{meeting_date}}
Preferred Time: {{meeting_time}}

💬 ADDITIONAL MESSAGE:
{{message}}

🎯 ACTION REQUIRED:
Please confirm this meeting and send the Zoom link to the client within 24 hours.
```

#### Template 2: Client Confirmation
- **Template ID**: `meeting_request_client`
- **Subject**: `Meeting Request Received - CoffexTrading`
- **Content**:
```
Dear {{client_name}},

Thank you for your interest in scheduling a meeting with CoffexTrading! 🎉

📋 YOUR MEETING REQUEST:
Topic: {{meeting_topic}}
Requested Date: {{meeting_date}}
Requested Time: {{meeting_time}}

✅ NEXT STEPS:
• We have received your meeting request
• Our team will review and confirm within 24 hours
• You'll receive a calendar invite with Zoom meeting details

Best regards,
The CoffexTrading Team
```

### 3. Update Configuration

Update the EmailJS configuration in `/src/hooks/useEmailJS.js`:

```javascript
const SERVICE_ID = 'your_service_id'; // From EmailJS dashboard
const TEMPLATE_ID = 'your_template_id'; // Use appropriate template ID
const PUBLIC_KEY = 'your_public_key'; // From EmailJS dashboard
```

## 🔧 Admin Configuration

### Update Admin Email
In `/src/utils/emailTemplates.js`, update the admin email:

```javascript
to_email: 'your-admin-email@coffextrading.com'
```

## 📋 How It Works

### For Clients:
1. Click "Schedule Zoom Meeting" on the Contact page
2. Fill in personal details (name, email)
3. Select meeting topic from dropdown
4. Choose preferred date from calendar (weekdays only)
5. Select preferred time slot
6. Add optional message
7. Submit meeting request
8. Receive confirmation email immediately

### For Admin:
1. Receive email notification for each meeting request
2. Review client details and preferences
3. Create Zoom meeting manually
4. Send calendar invite with Zoom link to client
5. Confirm meeting via email or phone

## 📅 Available Time Slots

- **Morning**: 9:00 AM, 10:00 AM, 11:00 AM
- **Afternoon**: 2:00 PM, 3:00 PM, 4:00 PM, 5:00 PM
- **Days**: Monday to Friday only
- **Timezone**: Based on your business location

## 🎯 Meeting Topics

- Import/Export Services
- University Admission
- Product Sourcing
- Quality Inspection
- General Consultation
- Other

## 📞 Manual Meeting Confirmation Process

### Step 1: Receive Request
- Check admin email for new meeting requests
- Review client information and preferences

### Step 2: Create Zoom Meeting
1. Log into your Zoom account
2. Schedule new meeting for requested date/time
3. Copy the meeting link and details

### Step 3: Send Confirmation
Use the provided template in `/src/utils/emailTemplates.js` (`createMeetingConfirmationTemplate`) to send:
- Meeting confirmation
- Zoom link
- Meeting preparation instructions
- Contact information for support

### Step 4: Calendar Invite
- Send calendar invite with Zoom details
- Include meeting agenda if applicable
- Set reminder notifications

## 🔒 Security Notes

- Never expose EmailJS private keys in frontend code
- Use environment variables for sensitive configuration
- Regularly monitor email usage and quotas
- Validate all form inputs before sending emails

## 🐛 Troubleshooting

### Common Issues:

1. **Emails not sending**
   - Check EmailJS service configuration
   - Verify template IDs match
   - Check browser console for errors

2. **Wrong email addresses**
   - Update admin email in emailTemplates.js
   - Verify client email validation

3. **Calendar not working**
   - Check date selection logic
   - Verify weekend/past date blocking

4. **Form validation errors**
   - Ensure all required fields are filled
   - Check email format validation

## 📈 Future Enhancements

- Integration with Zoom API for automatic meeting creation
- Calendar integration (Google Calendar, Outlook)
- SMS notifications
- Meeting reminders
- Rescheduling functionality
- Meeting analytics and reporting

## 📞 Support

For technical support with this system:
- Email: info@coffextrading.com
- Phone: +86 177 6539 9420

---

**Note**: This system is designed to work without Zoom API integration. All meeting creation and management is done manually by the admin, with EmailJS handling the communication workflow.