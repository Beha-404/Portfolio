import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class EmailService {

  private readonly SERVICE_ID = 'service_5zhlhg9';
  private readonly TEMPLATE_ID = 'template_ab9myng'
  private readonly PUBLIC_KEY = 'HZJ9i5nedOrXr08lZ';

  async sendEmail(request: Contact): Promise<EmailJSResponseStatus> {

    const templateParams = {
      username: request.username,
      subject: request.subject,
      message: request.message,
      email: request.email,
    }

    return emailjs.send(
      this.SERVICE_ID,
      this.TEMPLATE_ID,
      templateParams,
      this.PUBLIC_KEY
    );
  }
}
