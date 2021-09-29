class SearchFreeTennisSpotsJob < ApplicationJob
  queue_as :default

  def perform
    logger.info("Searching free tennis spots...")
    spots = NjatTennis.free_spots(Date.today + 2.days)
    if spots.any?
      ActionMailer::Base.mail(
        from: "admin@corran.cn",
        to: "lby89757@hotmail.com",
        subject: "Hey, found #{spots.size} free tennis spots!",
        body: "Go and have some fun!"
      ).deliver
    else
      logger.info("Opps. No free tennis spots found.")
    end
  end
end