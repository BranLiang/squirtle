class SchedulerController < ActionController::API
  def daily
    SearchFreeTennisSpotsJob.perform_later
  end
end