import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

interface ContactFormProps {
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      // Optional: debug env vars once
      console.log("SERVICE:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
      console.log("TEMPLATE:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
      console.log("PUBLIC KEY:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string,
        }
      );

      console.log("EmailJS success:", result.text);
      alert("Message sent successfully!");
      formRef.current.reset();
      onClose();
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to send message, please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-lg mx-4">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Contact Me</CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <Input placeholder="Your Name" name="user_name" required />
            <Input type="email" placeholder="Your Email" name="user_email" required />
            {/* Used by EmailJS template to decide the recipient */}
            <input type="hidden" name="to_email" value="oussamamethnani321@gmail.com" />
            <Textarea placeholder="Your Message" name="message" required />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
