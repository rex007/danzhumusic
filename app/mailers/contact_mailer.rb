class ContactMailer < ActionMailer::Base
  default from: "from@example.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.contact_mailer.send_mail_from_contact.subject
  #
  def send_mail_from_contact
    @greeting = "Hi"

    mail to: "rex007@gmail.com"
  end
end
