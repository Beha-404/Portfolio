import { Component} from '@angular/core';
import { EmailService } from '../../services/email.service';
import { Contact } from '../../models/contact.model';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {

  constructor(private emailService: EmailService) {}

  isSending = false;

  model: Contact = {
    username: '',
    subject: '',
    message: '',
    email: ''
  };

  async sendEmail(form: NgForm) {

    this.isSending = true;

    try {
      await this.emailService.sendEmail(this.model);
      form.resetForm();
    } catch (error) {
      console.log(error);
    }
    finally{
      this.isSending = false;
    }
  }
}
