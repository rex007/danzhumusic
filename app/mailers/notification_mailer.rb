class NotificationMailer < ActionMailer::Base
  default from: "from@example.com"
  default to: "rex007@gmail.com"

  def new_message(message)
  	@message = message
  	mail(subject: "#{message.subject}")
  end
  
end
